import { ReactNode } from 'react';
import styled from '@emotion/styled';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Wrapper = styled.div``;

const Layout = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <Wrapper tabIndex={0}>
      <Navbar />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
