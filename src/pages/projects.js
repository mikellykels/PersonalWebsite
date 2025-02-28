import React, { useRef, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Layout } from '@components';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { Button, theme, mixins, media, Main } from '@styles';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
const { colors, fonts, fontSizes } = theme;

import ProjectDialog from '../components/sections/projectDialog';

const StyledMainContainer = styled(Main)``;
const StyledTableContainer = styled.div`
  margin: 50px -20px;
  ${media.tablet`
    margin: 100px -10px;
  `};
`;
const StyledPersonalVideoIcon = styled(PersonalVideoIcon)`
  margin-left: 10px;
  :hover {
    color: ${colors.purple};
    cursor: pointer;
  }
`;
const StyledTable = styled.table`
  min-width: 100%;
  width: 100%;
  border-collapse: collapse;

  .hide-on-mobile {
    ${media.tablet`
      display: none;
    `};
  }

  thead th {
    /* Example fixed widths; adjust as needed */
    &:nth-child(1) {
      width: 5%;
    } /* Year */
    &:nth-child(2) {
      width: 20%;
    } /* Title */
    &:nth-child(3) {
      width: 26%;
    } /* Role */
    &:nth-child(4) {
      width: 20%;
    } /* Made at */
    &:nth-child(5) {
      width: 30%;
    } /* Built with */
    &:nth-child(6) {
      width: auto;
    }
  }

  tbody tr {
    transition: ${theme.transition};

    &:hover,
    &:focus {
      background-color: ${colors.lightNavy};
    }
  }
  th,
  td {
    cursor: default;
    line-height: 1.5;
    padding: 10px 20px;
    ${media.tablet`
      padding: 10px;
    `};
  }
  th {
    text-align: left;
  }
  td {
    &.year {
      width: 10%;
      ${media.tablet`
        font-size: ${fontSizes.sm};
      `};
    }
    &.title {
      width: 20%;
      padding-top: 15px;
      color: ${colors.lightestSlate};
      font-size: ${fontSizes.xl};
      font-weight: 700;
    }
    &.role {
      width: 20%;
      padding-top: 15px;
      font-size: ${fontSizes.lg};
    }
    &.company {
      width: 15%;
      padding-top: 15px;
      font-size: ${fontSizes.lg};
    }
    &.tech {
      width: 30%;
      font-size: ${fontSizes.xs};
      font-family: ${fonts.SFMono};
      .separator {
        margin: 0 5px;
      }
      span {
        display: inline-block;
      }
    }
    &.links {
      width: auto;
      span {
        display: flex;
        align-items: center;
        a {
          ${mixins.flexCenter};
          color: ${colors.slate};
          transition: ${theme.transition};

          &:hover {
            color: ${colors.purple};
          }
        }
        a + a {
          margin-left: 10px;
        }
        a:not(:first-child),
        ${StyledPersonalVideoIcon}:not(:first-child) {
          margin-left: 10px;
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const StyledFilterContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 25px 0;

  ${media.tablet`
    gap: 6px;
  `};

  ${media.phablet`
    justify-content: center;
  `};
`;

const StyledFilterTitle = styled.div`
  display: flex;
  color: ${colors.white};
  font-size: ${fontSizes.xl};
  font-weight: 600;
  align-items: end;
  margin-right: 4px;

  ${media.tablet`
    font-size: ${fontSizes.lg};
    width: 100%;
    margin-bottom: 10px;
  `};

  ${media.phablet`
    justify-content: center;
  `};
`;

const StyledFilterButton = styled(Button)`
  padding: 8px;
  font-size: ${fontSizes.sm};
  position: relative;
  transition: ${theme.transition};

  &.active {
    background-color: ${colors.purple};
    color: ${colors.navy};
  }

  ${media.tablet`
    padding: 6px;
    font-size: ${fontSizes.xs};
  `};
`;

const ArchivePage = ({ location, data }) => {
  const projects = data.projects.edges;
  const featured = data.featured.edges;
  const projectStudiesChallenges = data.projectStudiesChallenges.edges;

  const [selectedRoles, setSelectedRoles] = useState([]);
  const [open, setOpen] = useState(false);
  const [projectDialogDetails, setProjectDialogDetails] = useState({
    title: '',
    subtitle: '',
  });

  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  const combinedProjects = [...featured, ...projectStudiesChallenges, ...projects].sort((a, b) => {
    const dateA = new Date(a.node.frontmatter.date);
    const dateB = new Date(b.node.frontmatter.date);
    return dateB - dateA; // For descending order (most recent first)
  });

  const handleClickOpen = (subtitle, title) => {
    setOpen(true);
    setProjectDialogDetails({ subtitle, title });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleExternalLinkClick = (e, url) => {
    if (url) {
      e.stopPropagation();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleFilterChange = roles => {
    setSelectedRoles(Array.isArray(roles) ? roles : [roles]);
  };

  const filterProjectsByRole = (projectsArray, selectedRoles) => {
    if (selectedRoles.length === 0) {
      return projectsArray;
    }

    return projectsArray.filter(({ node }) => {
      const projectRolesString = node.frontmatter.role;
      const projectRoles = projectRolesString.split(' | ');
      return projectRoles.some(role => selectedRoles.includes(role));
    });
  };

  const filteredProjects = filterProjectsByRole(combinedProjects, selectedRoles);

  return (
    <Layout location={location}>
      <Helmet>
        <title>All Projects | Mikaela Carino</title>
        <link rel="canonical" href="https://mikaelacarino.com/archive" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
      </Helmet>

      <StyledMainContainer>
        <header ref={revealTitle}>
          <h1 className="big-title">Projects</h1>
          <p className="subtitle">A big list of things I've worked on</p>
          <StyledFilterContainer>
            <StyledFilterTitle>Filter by Role:</StyledFilterTitle>
            <StyledFilterButton
              onClick={() => handleFilterChange(['Character Rigger'])}
              className={
                selectedRoles.includes('Character Rigger') &&
                !selectedRoles.includes('Technical Artist')
                  ? 'active'
                  : ''
              }
            >
              Character Rigger
            </StyledFilterButton>

            <StyledFilterButton
              onClick={() => handleFilterChange(['Technical Animator'])}
              className={selectedRoles.includes('Technical Animator') ? 'active' : ''}
            >
              Technical Animator
            </StyledFilterButton>

            <StyledFilterButton
              onClick={() => handleFilterChange(['Technical Artist'])}
              className={selectedRoles.includes('Technical Artist') ? 'active' : ''}
            >
              Technical Artist
            </StyledFilterButton>

            <StyledFilterButton
              onClick={() => handleFilterChange(['Game Programmer'])}
              className={selectedRoles.includes('Game Programmer') ? 'active' : ''}
            >
              Game Programmer
            </StyledFilterButton>

            <StyledFilterButton
              onClick={() => handleFilterChange([])}
              className={selectedRoles.length === 0 ? 'active' : ''}
            >
              Show All
            </StyledFilterButton>
          </StyledFilterContainer>
        </header>

        <StyledTableContainer ref={revealTable}>
          <StyledTable>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Role</th>
                <th className="hide-on-mobile">Made at</th>
                <th className="hide-on-mobile">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map(({ node }, i) => {
                const {
                  date,
                  subtitle,
                  github,
                  external,
                  ios,
                  android,
                  title,
                  tech,
                  company,
                  role,
                  allowClickInProjects,
                  itch,
                } = node.frontmatter;
                return (
                  <tr
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    onClick={e => {
                      if (allowClickInProjects) {
                        handleClickOpen(subtitle, title);
                      }
                      if (external) {
                        handleExternalLinkClick(e, external);
                      }
                    }}
                  >
                    <td className="overline year">{`${new Date(date).getFullYear()}`}</td>

                    <td className="title">{title}</td>

                    <td className="role hide-on-mobile">{role}</td>

                    <td className="company hide-on-mobile">
                      {company ? <span>{company}</span> : <span>—</span>}
                    </td>

                    <td className="tech hide-on-mobile">
                      {tech.length > 0 &&
                        tech.map((item, i) => (
                          <span key={i}>
                            {item}
                            {''}
                            {i !== tech.length - 1 && <span className="separator">&middot;</span>}
                          </span>
                        ))}
                    </td>

                    <td className="links">
                      <span>
                        {github && (
                          <a
                            href={github}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="GitHub Link"
                          >
                            <FormattedIcon name="GitHub" />
                          </a>
                        )}
                        {ios && (
                          <a
                            href={ios}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="Apple App Store Link"
                          >
                            <FormattedIcon name="AppStore" />
                          </a>
                        )}
                        {android && (
                          <a
                            href={android}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="Google Play Store Link"
                          >
                            <FormattedIcon name="PlayStore" />
                          </a>
                        )}
                        {allowClickInProjects && !external && (
                          <StyledPersonalVideoIcon
                            onClick={() => handleClickOpen(subtitle, title)}
                          />
                        )}
                        {external && (
                          <a
                            href={external}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="External Link"
                          >
                            <FormattedIcon name="External" />
                          </a>
                        )}
                        {itch && (
                          <a
                            href={itch}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            aria-label="itch.io Link"
                          >
                            <FormattedIcon name="Itch" />
                          </a>
                        )}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <ProjectDialog
              handleClose={handleClose}
              open={open}
              projectDialogDetails={projectDialogDetails}
            />
          </StyledTable>
        </StyledTableContainer>
      </StyledMainContainer>
    </Layout>
  );
};
ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ArchivePage;

export const pageQuery = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            tech
            github
            external
            ios
            android
            company
            role
            allowClickInProjects
            itch
          }
          html
        }
      }
    }
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            id
            date
            title
            subtitle
            cover {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            company
            tech
            github
            external
            year
            role
            allowClickInProjects
            itch
          }
          html
        }
      }
    }
    projectStudiesChallenges: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projectStudiesChallenges/" }
        frontmatter: { showInProjects: { ne: false }, allowClickInProjects: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            id
            date
            title
            subtitle
            company
            tech
            github
            external
            url
            videoLink
            role
            allowClickInProjects
          }
          html
        }
      }
    }
  }
`;
