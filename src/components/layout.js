import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Head, Loader, Nav, Social, Footer } from '@components';
import styled from 'styled-components';
import { GlobalStyle, theme } from '@styles';
import '../font/font.css';
const { colors, fontSizes, fonts } = theme;

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const SkipToContent = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    outline: 0;
    color: ${colors.purple};
    background-color: ${colors.lightNavy};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [pendingScroll, setPendingScroll] = useState(null);

  // Check if there's a hash in the URL that we need to scroll to
  useEffect(() => {
    if (location.hash) {
      setPendingScroll(location.hash.substring(1));
    }
  }, [location.hash]);

  // Listen for video load events
  useEffect(() => {
    if (!isLoading) {
      const handleVideoStarted = () => {
        setVideoLoaded(false);
      };

      const handleVideoLoaded = () => {
        setVideoLoaded(true);

        // If we have a pending scroll target and the video has loaded, we can scroll now
        if (pendingScroll) {
          setTimeout(() => {
            const el = document.getElementById(pendingScroll);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
              el.focus();
              setPendingScroll(null); // Clear the pending scroll
            }
          }, 100); // Small delay to ensure DOM is settled
        }
      };

      // Add event listeners
      window.addEventListener('vimeoLoadStarted', handleVideoStarted);
      window.addEventListener('vimeoFrameLoaded', handleVideoLoaded);

      // Cleanup function
      return () => {
        window.removeEventListener('vimeoLoadStarted', handleVideoStarted);
        window.removeEventListener('vimeoFrameLoaded', handleVideoLoaded);
      };
    }
  }, [isLoading, pendingScroll]);

  // Original scroll logic - this now only runs if video is already loaded or no video exists
  useEffect(() => {
    if (!isLoading && !pendingScroll) {
      if (location.hash) {
        const id = location.hash.substring(1); // location.hash without the '#'
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView();
            el.focus();
          }
        }, 0);
      }
    }
  }, [isLoading]);

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div id="root">
          <Head metadata={site.siteMetadata} />

          <GlobalStyle />

          <SkipToContent href="#content">Skip to Content</SkipToContent>

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />

              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>
          )}
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
