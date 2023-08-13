import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import Layout from '@/components/Layout';
import { PostDataType } from '@/types/types';
import { getAllPostIds, getPostData } from '@/utils/posts';

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

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
}

const Blog = ({
  postData,
}: {
  postData: PostDataType,
}) => {
  return (
    <>
      <Head>
        <title>{`${postData.title} - Xish`}</title>
        <meta property="og:title" content={postData.title} key="title" />
      </Head>
      <Layout>
        <Container>
        </Container>
      </Layout>
    </>
  );
};

export default Blog;
