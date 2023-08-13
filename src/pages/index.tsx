import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import projectInformation from '../../data/project-info.json';
import Hero from '../../public/images/hero/hero.png';
import Layout from '@/components/Layout';
import { SortedPostsDataType } from '@/types/types';
import { stringToFormatedDate } from '@/utils/date';
import { getSortedPostsData } from '@/utils/posts';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 75vh;
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

const HeroContainer = styled(Container)`
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  gap: 0.6rem;

  @media (min-width: 768px) {
    width: 58.33333333%;
    padding: 0 1.5rem;
    gap: 0.8rem;
  }
`;

const Heading2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Heading3 = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  max-width: 560px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.text.primary};

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const HeroLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-top: 0;
    width: 41.66666667%;
  }
`;

const HeroLogo = styled(Image)`
  height: auto;
  width: 294px;
  object-fit: contain;

  @media (min-width: 992px) {
    width: 384px;
  }

  @media (min-width: 1200px) {
    width: 466px;
  }
`;

const PostContainer = styled(Container)`
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 40vh;
  padding: 1rem 3rem 3rem 3rem;

  @media (min-width: 768px) {
    padding: 1rem 1.5rem 5rem 1.5rem;
  }
`;

const PostRecordsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 1.6rem;
`;

const PostItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 0.6rem;
  padding-bottom: 0.4rem;

  ${({ theme }) => `
    color: ${theme.palette.mode === 'dark' ? '#e6e6e6' : '#2c2c2c'};
    border-bottom: 1px solid ${theme.palette.mode === 'dark' ? '#2c2c2c' : '#dddddd'};
  `}
`;

const PostName = styled.span`
  display: inline-block;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  a:hover & {
    text-decoration: underline;
  }
`;

const PostDate = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.mode ==='dark' ? '#787f85' : '#7e868c'};

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProjectContainer = styled(PostContainer)``;

const PorjectRecordsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 3rem;
`;

const ProjectItemStyle = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 33.33333333%;
  }
`;

const ProjectItem = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  min-height: 6rem;
  margin: 0 0.6rem 1rem 0.6rem;
  border-radius: 0.5rem;
  transition: all 0.9s;
  ${({ theme }) => `
    background: ${theme.palette.background.default};
    border: 1px solid ${theme.palette.mode === 'dark' ? '#2b2f31' : '#e6e8eb'};
  `}

  @media (min-width: 768px) {
    min-height: 7rem;
  }

  &:hover {
    transform: translateY(-.4rem);
    box-shadow: 0rem 0.1rem 0.2rem ${({ theme }) => theme.palette.mode === 'dark' ? 'rgba(128, 128, 128, 0.4)' : 'rgba(0, 0, 0, 0.4)'};
  }
`;

const ProjectDate = styled.span`
  display: inline-block;
  padding: 0 0.6rem;
  font-size: 0.6rem;
  color: ${({ theme }) => theme.palette.mode ==='dark' ? '#787f85' : '#7e868c'};

  @media (min-width: 768px) {
    font-size: 0.7rem;
  }
`;

const ProjectName = styled.span`
  display: inline-block;
  padding: 0 0.6rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.palette.text.primary};

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.span`
  display: inline-block;
  padding: 0 0.6rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.mode ==='dark' ? '#787f85' : '#7e868c'};

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home = ({
  allPostsData
}: {
  allPostsData: SortedPostsDataType
}) => {
  return (
    <>
      <Head>
        <title>Xish</title>
        <meta name="og:title" content="Xish" key="title" />
        <link rel="canonical" href="http://yeyuanhang.com" />
      </Head>
      <Layout>
        <HeroContainer>
          <HeroTextContainer>
            <Heading2>
              Hey, I'm Xish!
            </Heading2>
            <Text>
              Learn all computer technologies that I love.🌞 <br /><br />
              I am a software developer.
              Interested in software development and artificial intelligence.
              I like reading books, running, and playing video games.
            </Text>
          </HeroTextContainer>
          <HeroLogoContainer>
            <HeroLogo
              priority
              quality={100}
              alt="Xish Logo"
              src={Hero}
              draggable={false}
            />
          </HeroLogoContainer>
        </HeroContainer>
        <PostContainer>
          <Heading3>
            Recent Posts
          </Heading3>
          <PostRecordsContainer>
            {allPostsData.slice(0, 5).map(({ id, date, title }) => (
              // <PostItem key={id} href={`/blog/${id}`}>
              <PostItem key={id} href={`/`}>
                <PostName>
                  {title}
                </PostName>
                <PostDate>
                  {stringToFormatedDate(date)}
                </PostDate>
              </PostItem>
            ))}
          </PostRecordsContainer>
        </PostContainer>
        <ProjectContainer>
          <Heading3>
            Projects
          </Heading3>
          <PorjectRecordsContainer>
            {projectInformation.map(({ name, date, description, url }) => (
              <ProjectItemStyle key={name}>
                <ProjectItem href={url}>
                  <ProjectDate>
                    {date.slice(0, 4)}
                  </ProjectDate>
                  <ProjectName>
                    {name}
                  </ProjectName>
                  <ProjectDescription>
                    {description}
                  </ProjectDescription>
                </ProjectItem>
              </ProjectItemStyle>
            ))}
          </PorjectRecordsContainer>
        </ProjectContainer>
      </Layout>
    </>
  );
};

export default Home;
