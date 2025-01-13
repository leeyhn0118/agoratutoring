import Head from 'next/head';

import HomeSearch from 'src/sections/HomeSearch';
import PostHighlight from 'src/sections/PostHighlight';
import ValueProposition from 'src/sections/ValueProposition';
import UserJourney from 'src/sections/UserJourney';
import FeatureBreakdown from 'src/sections/FeatureBreakdown';
import FooterCTA from 'src/sections/FooterCTA';

const HomePage = () => (
  <>
    <Head>
      <title>Home | Agora Tutoring</title>
    </Head>
    <HomeSearch />
    <PostHighlight />
    <ValueProposition />
    <UserJourney />
    <FeatureBreakdown />
    <FooterCTA />
  </>
);

export default HomePage;
