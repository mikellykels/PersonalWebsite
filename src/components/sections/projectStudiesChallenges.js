import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '@styles';
// import { PersonalVideoIcon, SportsEsportsOutlinedIcon } from '@mui/icons-material';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
const { colors, fontSizes, fonts } = theme;

import ProjectDialog from './projectDialog';

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledTitle = styled.h4`
  margin: 0 auto;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;
const StyledArchiveLink = styled(Link)`
  ${mixins.inlineLink};
  text-align: center;
  margin: 0 auto;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.sm};
  &:after {
    bottom: 0.1em;
  }
`;
const StyledGrid = styled.div`
  margin-top: 50px;

  .projects {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const StyledProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;
const StyledProject = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledProjectInner} {
      transform: translateY(-5px);
    }
  }
`;
const StyledProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const StyledCardIcon = styled.div`
  color: ${colors.purple};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const StyledProjectLinks = styled.div`
  margin-right: -10px;
  color: ${colors.lightSlate};
  display: flex;
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
const StyledProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: ${colors.lightestSlate};
`;
const StyledProjectDescription = styled.div`
  font-size: 17px;
  color: ${colors.lightSlate};
  a {
    ${mixins.inlineLink};
  }
`;
const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: ${colors.slate};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const StyledPersonalVideoIcon = styled(PersonalVideoIcon)`
  :hover {
    color: ${colors.purple};
  }
`;
// const StyledMoreButton = styled(Button)`
//   margin: 100px auto 0;
// `;

const ProjectStudiesChallenges = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [projectDialogDetails, setProjectDialogDetails] = React.useState({
    title: '',
    subtitle: '',
  });
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const handleClickOpen = (subtitle, title) => {
    setOpen(true);
    setProjectDialogDetails({ subtitle, title });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledContainer>
      <StyledTitle ref={revealTitle}>Game Studies and Challenges</StyledTitle>
      <StyledArchiveLink to="/projects" ref={revealArchiveLink}>
        view all projects
      </StyledArchiveLink>

      <StyledGrid>
        <TransitionGroup className="projects">
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { github, external, subtitle, title, tech, url, videoLink } = frontmatter;
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  {
                    <StyledProject
                      key={i}
                      ref={el => (revealProjects.current[i] = el)}
                      tabIndex="0"
                      style={{
                        transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                      }}>
                      <StyledProjectInner>
                        <header>
                          <StyledProjectHeader>
                            <StyledCardIcon>
                              <SportsEsportsOutlinedIcon fontSize="large" />
                            </StyledCardIcon>
                            <ProjectDialog
                              handleClose={handleClose}
                              open={open}
                              projectDialogDetails={projectDialogDetails}
                            />
                            <StyledProjectLinks>
                              {github && (
                                <StyledIconLink
                                  href={github}
                                  target="_blank"
                                  rel="nofollow noopener noreferrer"
                                  aria-label="GitHub Link">
                                  <FormattedIcon name="GitHub" />
                                </StyledIconLink>
                              )}
                              {external && (
                                <StyledIconLink
                                  href={external}
                                  target="_blank"
                                  rel="nofollow noopener noreferrer"
                                  aria-label="External Link">
                                  <FormattedIcon name="External" />
                                </StyledIconLink>
                              )}
                              {videoLink && (
                                <StyledPersonalVideoIcon
                                  onClick={() => handleClickOpen(subtitle, title)}
                                />
                              )}
                            </StyledProjectLinks>
                          </StyledProjectHeader>
                          <StyledProjectName>{title}</StyledProjectName>
                          <StyledProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                          {/* <StyledArchiveLink to={url} ref={revealArchiveLink}>
                            More details
                          </StyledArchiveLink> */}
                        </header>
                        <footer>
                          {tech && (
                            <StyledTechList>
                              {tech.map((tech, i) => (
                                <li key={i}>{tech}</li>
                              ))}
                            </StyledTechList>
                          )}
                        </footer>
                      </StyledProjectInner>
                    </StyledProject>
                  }
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </StyledGrid>

      {/* <StyledMoreButton onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </StyledMoreButton> */}
    </StyledContainer>
  );
};

ProjectStudiesChallenges.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ProjectStudiesChallenges;
