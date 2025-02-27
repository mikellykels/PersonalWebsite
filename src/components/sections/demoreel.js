import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
const { colors, fontSizes, fonts, navDelay, loaderDelay } = theme;

import DemoReelBreakdown from './DemoReelBreakdown';

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
`;

const VideoWrapper = styled.div`
  margin-top: 30px; /* Reduced from 50px */
  width: 100%;
  max-width: 900px;
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  align-self: center;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

const StyledOverline = styled.h1`
  color: ${colors.purple};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`;

const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;

const StyledSubtitle = styled.h3`
  font-size: 40px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;

const StyledBio = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 800px;
  text-align: center;
  font-size: ${fontSizes.lg};
  color: ${colors.slate};
  align-self: center;
  line-height: 1.5;

  a {
    ${mixins.inlineLink};
  }
`;

const StyledProjectLink = styled.a`
  ${mixins.bigButton};
  margin-top: 40px;
`;

const DemoReel = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;

  const one = () => (
    <StyledOverline style={{ transitionDelay: '100ms' }}>{frontmatter.title}</StyledOverline>
  );
  const two = () => (
    <StyledTitle style={{ transitionDelay: '200ms' }}>{frontmatter.name}.</StyledTitle>
  );
  const three = () => (
    <StyledSubtitle style={{ transitionDelay: '300ms' }}>{frontmatter.subtitle}</StyledSubtitle>
  );
  const four = () => (
    <VideoWrapper style={{ transitionDelay: '500ms' }}>
      <iframe
        title="Demo Reel"
        src={`https://player.vimeo.com/video/${frontmatter.vimeoId}`}
        frameBorder="0"
        allow="fullscreen"
        allowFullScreen
      />
    </VideoWrapper>
  );

  const breakdownSection = () => (
    <div
      style={{
        transitionDelay: '550ms',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <DemoReelBreakdown />
    </div>
  );

  const five = () => (
    <StyledBio style={{ transitionDelay: '600ms' }} dangerouslySetInnerHTML={{ __html: html }} />
  );

  const six = () => (
    <div
      style={{
        transitionDelay: '700ms',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <StyledProjectLink href={'/#projects'}>Projects</StyledProjectLink>
    </div>
  );

  const items = [one, two, three, four, breakdownSection, five, six];

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContainer>
  );
};

DemoReel.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DemoReel;
