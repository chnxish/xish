import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import Layout from '@/components/Layout';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.palette.text.primary};
  gap: 0.4rem;
`;

const Heading2 = styled.h2`
  font-size: 6rem;
  font-weight: 600;
  border-bottom: 0.2rem solid ${({ theme }) => theme.palette.mode === 'dark' ? '#313538' : '#dfe3e6'};
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  font-height: 1.5rem;
`;

const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 1.4rem;
  font-height: 1.5rem;
`;

const Error404 = () => {
  return (
    <>
      <Head>
        <title>Xish – 404</title>
        <meta property="og:title" content="Xish – 404" key="title" />
        <meta property="og:description" content="404 Error." />
        <meta property="description" content="404 Error." />
      </Head>
      <Layout>
        <Container>
          <Heading2>
            404
          </Heading2>
          <Text>
            Page not found
          </Text>
          <StyledLink href="/">
            Return home
          </StyledLink>
        </Container>
      </Layout>
    </>
  );
};

export default Error404;
