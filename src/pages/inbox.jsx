import Head from 'next/head';

import Chat from 'src/sections/Chat';
import ChatList from 'src/sections/ChatList';

import query from './inbox.gql';
import * as S from './inbox.style';

const InboxPage = () => (
  <S.Inbox>
    <S.GlobalStyle />
    <Head>
      <title>Inbox | Agora Tutoring</title>
    </Head>
    <ChatList />
    <Chat />
  </S.Inbox>
);

InboxPage.getInitialProps = async ({ redirect, apolloClient }) => {
  const { data } = await apolloClient.query({ query: query.viewer });

  if (!data || !data.viewer) {
    redirect('/login');
  }

  return {};
};

export default InboxPage;
