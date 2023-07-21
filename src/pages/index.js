import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  AwardsCertifications,
  Layout,
  Hero,
  About,
  Jobs,
  Education,
  Projects,
  ProjectStudiesChallenges,
  Featured,
  Contact,
} from '@components';
import styled from 'styled-components';
import { Main } from '@styles';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero data={data.hero.edges} />
      <Featured data={data.featured.edges} />
      <ProjectStudiesChallenges data={data.projectStudiesChallenges.edges} />
      <Projects data={data.projects.edges} />
      <Jobs data={data.jobs.edges} />
      <Education data={data.education.edges} />
      <AwardsCertifications data={data.awardsCertifications.edges} />
      <About data={data.about.edges} />
      <Contact data={data.contact.edges} />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            buttonText
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            range
            url
          }
          html
        }
      }
    }
    education: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/education/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            range
            url
          }
          html
        }
      }
    }
    awardsCertifications: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/awardsCertifications/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            url
            externalImage
            external
            id
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
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { showInProjects: { ne: false } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
            github
            external
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
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
            buttonText
          }
          html
        }
      }
    }
  }
`;
