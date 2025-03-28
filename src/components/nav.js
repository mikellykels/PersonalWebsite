import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { throttle } from '@utils';
import { navLinks, navHeight } from '@config';
import { Menu } from '@components';
import { IconLogo } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes, fonts, loaderDelay } = theme;

const StyledContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.navy};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
  box-shadow: ${props =>
    (props.scrollDirection === 'up' || props.scrollDirection === 'down') &&
    `0 10px 30px -10px ${colors.shadowNavy}`};

  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;
const StyledNav = styled.nav`
  ${mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${colors.lightestSlate};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
`;
const StyledLogo = styled.div`
  ${mixins.flexCenter};
  a {
    display: block;
    color: ${colors.purple};
    width: 42px;
    height: 42px;
    &:hover,
    &:focus {
      svg {
        fill: ${colors.transPurple};
      }
    }
    svg {
      fill: none;
      transition: ${theme.transition};
      user-select: none;
    }
  }
`;
const StyledHamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
const StyledHamburgerInner = styled.div`
  background-color: ${colors.purple};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${colors.purple};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? theme.hamBeforeActive : theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? theme.hamAfterActive : theme.hamAfter)};
  }
`;
const StyledLink = styled.div`
  display: flex;
  align-items: center;

  ${media.tablet`display: none;`};
`;
const StyledList = styled.ol`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;

  ${media.desktop`
    padding-right: 5px;
  `};
`;
const StyledListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.smish};
  counter-increment: item 1;

  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${colors.purple};
    font-size: ${fontSizes.xs};
    margin-right: 5px;
  }

  ${media.desktop`
    margin: 0 7px;
    font-size: ${fontSizes.xs};
  `};
`;
const StyledListLink = styled(Link)`
  padding: 10px 5px;
  display: inline-block;

  ${media.desktop`
    padding: 8px 5px;
  `};
`;

const StyledResumeButton = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
  font-size: ${fontSizes.smish};

  ${media.desktop`
    padding: 10px 10px;
    font-size: ${fontSizes.xs};
  `};
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;

  ${media.desktop`
    flex-wrap: nowrap;
  `};

  ${media.tablet`display: none;`};
`;

const DELTA = 5;

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const isComponentMounted = useRef(true);

  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);

  const handleScroll = useCallback(() => {
    // Check if component is still mounted
    if (!isComponentMounted.current) {
      return;
    }

    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      setScrollDirection('none');
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== 'down') {
        setScrollDirection('down');
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        setScrollDirection('up');
      }
    }

    setLastScrollTop(fromTop);
  }, [isMounted, menuOpen, lastScrollTop, scrollDirection]);

  const handleResize = useCallback(() => {
    // Check if component is still mounted
    if (!isComponentMounted.current) {
      return;
    }
    if (window.innerWidth > 768 && menuOpen) {
      toggleMenu();
    }
  }, [menuOpen, toggleMenu]);

  const handleKeydown = useCallback(
    e => {
      if (!menuOpen) {
        return;
      }

      if (e.which === 27 || e.key === 'Escape') {
        toggleMenu();
      }
    },
    [menuOpen, toggleMenu],
  );

  useEffect(() => {
    const throttleScroll = throttle(handleScroll);
    const throttleResize = throttle(handleResize);

    isComponentMounted.current = true;

    const timer = setTimeout(() => {
      setIsMounted(true);
      window.addEventListener('scroll', throttleScroll);
      window.addEventListener('resize', throttleResize);
      window.addEventListener('keydown', handleKeydown);
    }, 100);

    return () => {
      isComponentMounted.current = false;
      clearTimeout(timer);
      window.removeEventListener('scroll', throttleScroll);
      window.removeEventListener('resize', throttleResize);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleScroll, handleResize, handleKeydown]);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  const ResumeLink = (
    <StyledButtonContainer>
      <StyledResumeButton
        className="demo-reel-button"
        href="/"
        onClick={e => {
          // Only handle scroll behavior if we're already on the home page
          if (window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      >
        Demo Reel
      </StyledResumeButton>
      <StyledResumeButton
        className="resume-button"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </StyledResumeButton>
    </StyledButtonContainer>
  );

  return (
    <StyledContainer scrollDirection={scrollDirection}>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <StyledLogo tabindex="-1">
                {isHome ? (
                  <a href="/" aria-label="home">
                    <IconLogo id="logo" sx={{ fontSize: 40 }} viewBox="0 0 88 100" />
                  </a>
                ) : (
                  <Link to="/" aria-label="home">
                    <IconLogo sx={{ fontSize: 40 }} viewBox="0 0 88 100" />
                  </Link>
                )}
              </StyledLogo>
            </CSSTransition>
          )}
        </TransitionGroup>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <StyledHamburger onClick={toggleMenu}>
                <StyledHamburgerBox>
                  <StyledHamburgerInner menuOpen={menuOpen} />
                </StyledHamburgerBox>
              </StyledHamburger>
            </CSSTransition>
          )}
        </TransitionGroup>

        <StyledLink>
          <StyledList>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                    <StyledListItem
                      key={i}
                      style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
                    >
                      <StyledListLink to={url}>{name}</StyledListLink>
                    </StyledListItem>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </StyledList>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                  {ResumeLink}
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </StyledLink>
      </StyledNav>

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </StyledContainer>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
