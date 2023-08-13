import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FaGithub, FaQq, FaZhihu } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 720px;
    flex-direction: row;
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

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 0;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.palette.text.primary};

  @media (min-width: 768px) {
    width: 33.33333333%;
    padding-top: 1rem;
    padding-bottom: 1.2rem;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0 1rem;
`;

const TextContainer = styled.div`
  width: 100%;
  padding-top: 0;
  padding-bottom: 1rem;
  font-size: 0.8rem;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};

  @media (min-width: 768px) {
    width: 33.33333333%;
    padding-top: 1rem;
    padding-bottom: 1.2rem;
    font-size: 1rem;
  }
`;

const Text = styled.p``;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <IconsContainer>
          <StyledLink href="https://github.com/chnxish" target="_blank">
            <FaGithub />
          </StyledLink>
          <StyledLink href="/images/qq/qq.png" target="_blank">
            <FaQq />
          </StyledLink>
          <StyledLink href="https://www.zhihu.com/people/xiao-sha-66-47" target="_blank">
            <FaZhihu />
          </StyledLink>
          <StyledLink href="mailto:1095219764@qq.com">
            <MdOutlineMail />
          </StyledLink>
        </IconsContainer>
        <TextContainer>
          <Text>
            Copyright © 2023 Xish
          </Text>
        </TextContainer>
        <TextContainer>
          <Link href="https://beian.miit.gov.cn/" target="_blank">
            皖ICP备2022006621号
          </Link>
        </TextContainer>
      </Container>
    </Wrapper>
  );
};

export default Footer;
