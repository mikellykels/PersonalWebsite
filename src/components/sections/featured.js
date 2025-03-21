import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { FormattedIcon } from '@components/icons';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading, Button } from '@styles';

import ProjectDialog from './projectDialog';

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  ${media.thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  `};
  ${media.phablet`padding: 30px 25px 20px;`};
`;
const StyledLabel = styled.h4`
  font-size: ${fontSizes.smish};
  font-weight: normal;
  color: ${colors.purple};
  font-family: ${fonts.SFMono};
  margin-top: 10px;
  padding-top: 0;
`;
const StyledProjectName = styled.h5`
  font-size: 28px;
  color: ${colors.lightestSlate};
  margin: 0;
  ${media.tablet`font-size: 24px;`};
  ${media.thone`color: ${colors.white};`};
  a {
    ${media.tablet`display: block;`};
  }
`;
const StyledProjectYear = styled.div`
  font-size: ${fontSizes.smish};
  margin: 0 0 20px;
  color: ${colors.slate};
  font-family: ${fonts.SFMono};
  ${media.tablet`font-size: ${fontSizes.smish}; margin: 0`};
  ${media.thone`color: ${colors.slate};`};
  a {
    ${media.tablet`display: block;`};
  }
`;
const StyledCategory = styled.div`
  font-size: ${fontSizes.md};
  margin: 20px 0 0;
  color: ${colors.white};
  font-family: ${fonts.SFMono};
  ${media.tablet`font-size: ${fontSizes.md}; margin: 0`};
  ${media.thone`color: ${colors.white};`};
  a {
    ${media.tablet`display: block;`};
  }
`;
const StyledDescription = styled.div`
  ${mixins.boxShadow};
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${colors.lightNavy};
  color: ${colors.lightSlate};
  font-size: ${fontSizes.lg};
  border-radius: ${theme.borderRadius};
  ${media.thone`
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  `};
  p {
    margin: 0;
  }
  a {
    ${mixins.inlineLink};
  }
`;
const StyledTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 10px 0 10px;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smish};
    color: ${colors.slate};
    margin-right: ${theme.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    ${media.thone`
      color: ${colors.lightestSlate};
      margin-right: 10px;
    `};
  }
`;
const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: 10px;
  color: ${colors.lightestSlate};
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const StyledFeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  ${'' /* max-height: 200px; */}
  vertical-align: middle;
  border-radius: ${theme.borderRadius};
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  ${media.tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  `};
`;
const StyledImgContainer = styled.a`
  ${mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background-color: ${colors.purple};
  border-radius: ${theme.radius + 1}px;
  transition: ${theme.transition};
  ${media.tablet`height: 100%;`};
  ${media.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${StyledFeaturedImg} {
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
const StyledHeading = styled(Heading)`
  margin-bottom: 8px;
`;
const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  ${media.thone`
    margin-bottom: 70px;
  `};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 7 / -1;
      text-align: right;
      ${media.thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `};
      ${media.phablet`padding: 30px 25px 20px;`};
    }
    ${StyledTechList} {
      justify-content: flex-end;
      li {
        margin-left: ${theme.margin};
        margin-right: 0;
      }
    }
    ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
    }
    ${StyledImgContainer} {
      grid-column: 1 / 8;
      ${media.tablet`height: 100%;`};
      ${media.thone`
        grid-column: 1 / -1;
        opacity: 0.25;
      `};
    }
  }
  &:nth-of-type(even) {
    ${StyledLinkWrapper} {
      margin-left: -10px;
    }
  }
`;
const StyledPersonalVideoIcon = styled(PersonalVideoIcon)`
  :hover {
    color: ${colors.purple};
    cursor: pointer;
  }
`;
const StyledViewAllButton = styled(Button)`
  margin: 100px auto 0;
`;

const Featured = ({ data }) => {
  const featuredProjects = data.filter(({ node }) => node);
  const [open, setOpen] = React.useState(false);
  const [projectDialogDetails, setProjectDialogDetails] = React.useState({
    title: '',
    subtitle: '',
  });

  const handleClickOpen = (subtitle, title) => {
    setOpen(true);
    setProjectDialogDetails({ subtitle, title });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const revealArchiveLink = useRef(null);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <StyledContainer id="projects">
      <StyledHeading ref={revealTitle}>Featured Projects</StyledHeading>
      <div>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { id, external, title, tech, github, cover, subtitle, year, role, itch } =
              frontmatter;

            if (!id) {
              return;
            }

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <StyledContent>
                  <StyledLabel>Featured Project</StyledLabel>
                  <StyledProjectName>
                    {external ? (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </StyledProjectName>
                  <StyledProjectYear>{year}</StyledProjectYear>
                  <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
                  <StyledCategory>{role}</StyledCategory>
                  {tech && (
                    <StyledTechList>
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </StyledTechList>
                  )}
                  <StyledLinkWrapper>
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="GitHub Link">
                        <FormattedIcon name="GitHub" />
                      </a>
                    )}
                    {external && (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        <FormattedIcon name="External" />
                      </a>
                    )}
                    {id && (
                      <StyledPersonalVideoIcon onClick={() => handleClickOpen(subtitle, title)} />
                    )}
                    {itch && (
                      <a
                        href={itch}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="itch.io Link">
                        <FormattedIcon name="Itch" />
                      </a>
                    )}
                  </StyledLinkWrapper>
                </StyledContent>
                <ProjectDialog
                  handleClose={handleClose}
                  open={open}
                  projectDialogDetails={projectDialogDetails}
                />
                {id && cover?.childImageSharp?.fluid && (
                  <StyledImgContainer
                    onClick={() => handleClickOpen(subtitle, title)}
                    rel="nofollow noopener noreferrer"
                    target="_blank">
                    <StyledFeaturedImg fluid={cover.childImageSharp.fluid} alt={title} />
                  </StyledImgContainer>
                )}
              </StyledProject>
            );
          })}
      </div>
      <StyledViewAllButton
        onClick={() => {
          navigate('/projects');
        }}>
        View all projects
      </StyledViewAllButton>
    </StyledContainer>
  );
};

Featured.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Featured;
