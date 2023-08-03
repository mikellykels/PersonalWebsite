import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { FormattedIcon } from '@components/icons';
import { CardActions, CardContent, Grid } from '@mui/material';
import { theme, mixins, media, Section, Heading } from '@styles';

const { colors, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledCard = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 461px;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;
const StyledCertification = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledCard} {
      transform: translateY(-5px);
    }
  }
`;
const StyledImg = styled(Img)`
  width: 312px !important;
  object-fit: cover !important;
  border-top-left-radius: ${theme.borderRadius};
  border-top-right-radius: ${theme.borderRadius};

  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  `};
`;
const StyledI = styled.img`
  object-fit: cover !important;
  border-top-left-radius: ${theme.borderRadius};
  border-top-right-radius: ${theme.borderRadius};
  mix-blend-mode: multiply;
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
  `};
`;
const StyledImageContainer = styled.div`
  width: 312px;
  background-color: white;
  border-top-left-radius: ${theme.borderRadius};
  border-top-right-radius: ${theme.borderRadius};

  z-index: 1;
  background-color: ${colors.purple};
  border-top-left-radius: ${theme.radius + 1}px;
  border-top-right-radius: ${theme.radius + 1}px;
  transition: ${theme.transition};
  ${media.tablet`height: 100%;`};
  ${media.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  &:hover,
  &:focus {
    background-color: white;
    &:before,
    ${StyledImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
`;
const StyledIContainer = styled.div`
  z-index: 1;
  background-color: ${colors.purple};
  border-top-left-radius: ${theme.radius + 1}px;
  border-top-right-radius: ${theme.radius + 1}px;
  transition: ${theme.transition};
  ${media.tablet`height: 100%;`};
  ${media.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  &:hover,
  &:focus {
    background-color: white;
    &:before,
    ${StyledImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
`;
const StyedDate = styled.span`
  display: block;
  font-family: ${fonts.SFMono};
  font-size: 13px;
  color: ${colors.lightSlate};
`;
const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const AwardsCertifications = ({ data }) => {
  const revealTitle = useRef(null);
  const revealContainer = useRef(null);

  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="certifications-awards" ref={revealContainer}>
      <Heading ref={revealTitle}>Certifications & Awards</Heading>
      <Grid container spacing={4}>
        {data &&
          data.map(({ node }, i) => {
            const { frontmatter } = node;
            const { date, id, title, image, external, externalImage } = frontmatter;
            return (
              <Grid item key={i} xs={12} sm={6} md={4}>
                {id && (
                  <StyledCertification>
                    <StyledCard
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: `${colors.lightNavy}`,
                      }}
                    >
                      <a href={external} target="_blank" rel="nofollow noopener noreferrer">
                        {image ? (
                          <StyledIContainer>
                            <StyledImg fluid={image.childImageSharp.fluid} alt="certification" />
                          </StyledIContainer>
                        ) : (
                          <StyledImageContainer>
                            <StyledI src={externalImage} alt="certification" />
                          </StyledImageContainer>
                        )}
                      </a>
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          color: `${colors.lightestSlate}`,
                          fontSize: '18px',
                          fontWeight: '600',
                        }}
                      >
                        {title}
                        <StyedDate>{date}</StyedDate>
                      </CardContent>
                      <CardActions style={{ paddingBottom: '0px' }}>
                        <StyledIconLink
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link"
                        >
                          <FormattedIcon name="External" />
                        </StyledIconLink>
                      </CardActions>
                    </StyledCard>
                  </StyledCertification>
                )}
              </Grid>
            );
          })}
      </Grid>
    </StyledContainer>
  );
};

AwardsCertifications.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AwardsCertifications;
