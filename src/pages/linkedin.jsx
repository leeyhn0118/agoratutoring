import React from 'react';
import { useRouter } from 'next/router';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';

const Linkedin = () => {
  const router = useRouter();

  React.useEffect(() => {
    if (router.pathname === '/linkedin') {
      router.push('/linkedin');
    }
  }, [router]);

  return <>{router.pathname === '/linkedin' && <LinkedInCallback />}</>;
};

export default Linkedin;
