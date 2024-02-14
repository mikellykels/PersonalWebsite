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
      width: 10%;
    } /* Year */
    &:nth-child(2) {
      width: 20%;
    } /* Title */
    &:nth-child(3) {
      width: 20%;
    } /* Role */
    &:nth-child(4) {
      width: 15%;
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
        }
        a + a {
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
const StyledPersonalVideoIcon = styled(PersonalVideoIcon)`
  margin-left: 10px;
  :hover {
    color: ${colors.purple};
    cursor: pointer;
  }
`;
const StyledFilterContainer = styled.div`
  display: flex;
  gap: 8px;
`;
const StyledFilterTitle = styled.div`
  display: flex;
  color: ${colors.white};
  font-size: ${fontSizes.xl};
  font-weight: 600;
  align-items: end;
`;
const StyledFilterButton = styled(Button)`
  padding: 8px;
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

  const combinedProjects = [...featured, ...projectStudiesChallenges, ...projects];

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

  const filterProjectsByRole = (projectsArray, selectedRoles) =>
    projectsArray.filter(
      ({ node }) => selectedRoles.length === 0 || selectedRoles.includes(node.frontmatter.role),
    );

  const filteredProjects = filterProjectsByRole(combinedProjects, selectedRoles);

  return (
    <Layout location={location}>
      <Helmet>
        <title>Archive | Mikaela Carino</title>
        <link rel="canonical" href="https://mikaelacarino.com/archive" />
      </Helmet>

      <StyledMainContainer>
        <header ref={revealTitle}>
          <h1 className="big-title">Projects</h1>
          <p className="subtitle">A big list of things I've worked on</p>
        </header>

        <StyledFilterContainer>
          <StyledFilterTitle>Filter by Role:</StyledFilterTitle>
          <StyledFilterButton onClick={() => handleFilterChange('Technical Artist')}>
            Technical Artist
          </StyledFilterButton>
          <StyledFilterButton onClick={() => handleFilterChange(['Game Programmer'])}>
            Game Programmer
          </StyledFilterButton>
          <StyledFilterButton onClick={() => handleFilterChange([])}>Show All</StyledFilterButton>
        </StyledFilterContainer>

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
                  id,
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
                } = node.frontmatter;
                return (
                  <tr
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    onClick={e => {
                      if (id) {
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
                        {id && (
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
          }
          html
        }
      }
    }
    projectStudiesChallenges: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projectStudiesChallenges/" }
        frontmatter: { showInProjects: { ne: false } }
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
          }
          html
        }
      }
    }
  }
`;
