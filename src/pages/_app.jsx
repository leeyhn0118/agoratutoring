import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Layout from 'src/components/Layout';

import createApolloClient from 'src/utilities/apollo/client';
import config from 'src/config';

let globalApolloClient = null;

// Function that creates an apolloClient instance server-side and re-uses client-side
const initApolloClient = (initialState, ctx) => {
  if (typeof window === 'undefined') {
    return createApolloClient(initialState, ctx);
  }

  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState, ctx);
  }

  return globalApolloClient;
};

const inititalizeContext = (ctx) => {
  // Initialize ApolloClient if not already done
  const apolloClient =
    ctx.apolloClient || initApolloClient(ctx.apolloState || {}, ctx.ctx);

  // We send the Apollo Client as a prop to the component
  // to avoid calling initApollo() twice in the server.
  // Otherwise, the component would have to call initApollo() again but this
  // time without the context. Once that happens, the following code will make sure we send
  // the prop as `null` to the browser.
  apolloClient.toJSON = () => null;

  // Add apolloClient to NextPageContext & NextAppContext.
  // This allows us to consume the apolloClient inside our
  // custom `getInitialProps({ apolloClient })`.
  ctx.apolloClient = apolloClient;
  ctx.ctx.apolloClient = apolloClient;

  ctx.ctx.redirect = (location) => {
    if (ctx.ctx.res) {
      ctx.ctx.res.writeHead(302, { Location: location });
      ctx.ctx.res.end();
    } else {
      window.location.href = location;
    }
  };

  ctx.ctx.notFound = () => {
    if (ctx.ctx.res) {
      ctx.ctx.res.writeHead(404);
      ctx.ctx.res.end();
    }
  };

  return ctx;
};

class CustomApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    let client;

    if (this.props.apolloClient) {
      client = this.props.apolloClient;
    } else {
      client = initApolloClient(this.props.apolloState, undefined);
    }

    return (
      <ApolloProvider client={client}>
        <Layout>
          <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
            <Component {...pageProps} />
          </GoogleOAuthProvider>
        </Layout>
      </ApolloProvider>
    );
  }
}

CustomApp.getInitialProps = async (ctx) => {
  const { apolloClient } = inititalizeContext(ctx);

  // Run wrapped getInitialProps methods
  const pageProps = await App.getInitialProps(ctx);

  // Only on the server:
  if (typeof window === 'undefined') {
    const { AppTree } = ctx;
    // When redirecting, the response is finished.
    // No point in continuing to render
    if (ctx.res && ctx.res.finished) {
      return pageProps;
    }

    // Only if dataFromTree is enabled
    if (AppTree) {
      try {
        // Import `@apollo/react-ssr` dynamically.
        // We don't want to have this in our client bundle.
        // eslint-disable-next-line global-require
        const { getDataFromTree } = await require('@apollo/react-ssr');

        const props = {
          ...pageProps,
          apolloClient,
        };

        // Take the Next.js AppTree, determine which queries are needed to render,
        // and fetch them. This method can be pretty slow since it renders
        // your entire AppTree once for every query. Check out apollo fragments
        // if you want to reduce the number of rerenders.
        // https://www.apollographql.com/docs/react/data/fragments/
        await getDataFromTree(<AppTree {...props} />);
      } catch (error) {
        // Prevent Apollo Client GraphQL errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
        // eslint-disable-next-line no-console
        console.error('Error while running `getDataFromTree`', error);
      }
    }
  }

  return {
    ...pageProps,
    // Extract query data from the Apollo store
    apolloState: apolloClient.cache.extract(),
    // Provide the client for ssr. As soon as this payload
    // gets JSON.stringified it will remove itself.
    apolloClient: ctx.apolloClient,
  };
};

export default CustomApp;
