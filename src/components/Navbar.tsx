import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import {
  AppBar,
  Collapse,
  ToggleButton,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { FiMoon, FiSun } from 'react-icons/fi';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import Logo from '../../public/images/favicon/favicon.webp';
import { ThemeTypes } from '@/types/types';
import { usePreferredTheme } from '@/utils/hooks/usePreferredTheme';

const Wrapper = styled.div``;

const StyledAppBar = styled(AppBar)`
  position: fixed;
  padding: 0 2rem;
  background-image: none;
  ${({ theme }) => `
    background-color: ${theme.palette.background.default};
    box-shadow: inset 0 0 1px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
  `}
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;

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

const StyledTooltip = styled(Tooltip)`
  font-size: 1rem;
  ${({ theme }) => `
    background-color: ${theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white};
    color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.78)' : 'rgba(0, 0, 0, 0.78)'};
  `}
`;

const StyledToggleButton = styled(ToggleButton)`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(5, 5, 5, 0.3)'};
`;

const HideableStyledToggleButton = styled(StyledToggleButton)`
  display: inline-flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const AppBarLogoLinkContainer = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;
`;

const AppBarLogo = styled(Image)`
  display: none;

  @media (min-width: 768px) {
    display: inline-flex;
    height: auto;
    width: 2.4rem;
    object-fit: contain;
  }
`;

const AppBarLogoText = styled.span`
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const ResponsiveNav = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
  }
`;

const AppBarLinkContainer = styled.div`
  padding: 16px 16px;
`;

const AppBarLink = styled(Link)`
  display: block;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;

  &::after {
    position: relative;
    content: '';
    border-radius: 12px;
    width: 0;
    height: 4px;
    display: block;
    transition: all .3s ease-out 0s;
    z-index: -1;
    background-color: ${({ theme }) => theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light};
  }

  &:hover::after {
    width: 100%;
  }
`;

const StyledCollapse = styled(Collapse)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 56px;
  width: 100%;
  z-index: 10;
  background-color: ${({ theme }) => theme.palette.background.default};

  @media (min-width: 600px) {
    margin-top: 64px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const CollapseLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  font-weight: 600;
  font-size: 1.2em;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Navbar = () => {
  const preferredTheme = usePreferredTheme();
  const isDark = (preferredTheme === 'dark' ? true : false);
  const [collapseState, toggleCollapse] = React.useState(false);

  const onThemeChange = (theme: ThemeTypes) => {
    localStorage.setItem('theme', theme);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <Wrapper>
      <StyledAppBar>
        <StyledToolbar disableGutters>
          <StyledTooltip title="Menu">
            <HideableStyledToggleButton
              value="check"
              selected={collapseState}
              onChange={() => { toggleCollapse(!collapseState); }}
              sx={{
                '&.MuiToggleButton-standard': { backgroundColor: isDark ? '#1a1d1e' : '#ffffff' },
                '&:hover': { backgroundColor: isDark ? '#1a1d1e' : '#ffffff' },
                '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: isDark ? '#1a1d1e' : '#ffffff' },
              }}
            >
              {collapseState ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
            </HideableStyledToggleButton>
          </StyledTooltip>
          <AppBarLogoLinkContainer href="/">
            <AppBarLogo
              priority
              quality={100}
              alt="Xish Logo"
              src={Logo}
              draggable={false}
            />
            <AppBarLogoText>
              Xish
            </AppBarLogoText>
          </AppBarLogoLinkContainer>
          <ResponsiveNav>
            <AppBarLinkContainer>
              <AppBarLink href="/">
                Home
              </AppBarLink>
            </AppBarLinkContainer>
            <AppBarLinkContainer>
              {/* <AppBarLink href="/about">
                About
              </AppBarLink> */}
              <AppBarLink href="/">
                About
              </AppBarLink>
            </AppBarLinkContainer>
            <AppBarLinkContainer>
              {/* <AppBarLink href="/blog/overview">
                Blog
              </AppBarLink> */}
              <AppBarLink href="/">
                Blog
              </AppBarLink>
            </AppBarLinkContainer>
            <AppBarLinkContainer>
              <AppBarLink href="/">
                Projects
              </AppBarLink>
            </AppBarLinkContainer>
          </ResponsiveNav>
          <StyledTooltip title={isDark ? 'Light mode' : 'Dark mode'}>
            <StyledToggleButton
              value="check"
              selected={isDark}
              onChange={() => {
                onThemeChange(isDark ? 'light' : 'dark');
              }}
              sx={{
                '&:hover': { backgroundColor: '#ffffff' },
                '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: '#1a1d1e' },
              }}
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </StyledToggleButton>
          </StyledTooltip>
        </StyledToolbar>
      </StyledAppBar>
      <StyledCollapse in={collapseState}>
        <CollapseLink href="/">
          Home
        </CollapseLink>
        {/* <CollapseLink href="/about">
          About
        </CollapseLink> */}
        <CollapseLink href="/">
          About
        </CollapseLink>
        {/* <CollapseLink href="/blog/overview">
          Blog
        </CollapseLink> */}
        <CollapseLink href="/">
          Blog
        </CollapseLink>
        <CollapseLink href="/">
          Projects
        </CollapseLink>
      </StyledCollapse>
    </Wrapper>
  );
};

export default Navbar;
