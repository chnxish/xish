import Head from 'next/head';
import styled from '@emotion/styled';
import Layout from '@/components/Layout';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 0 2rem;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const About = () => {
  return (
    <>
      <Head>
        <title>About me - Xish</title>
        <meta property="og:title" content="About me - Xish" key="title" />
      </Head>
      <Layout>
        <Container></Container>
      </Layout>
    </>
  );
};

export default About;
