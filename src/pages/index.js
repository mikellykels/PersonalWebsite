import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Awards,
  Certifications,
  Layout,
  DemoReel,
  About,
  Jobs,
  Education,
  Featured,
} from '@components';
import styled from 'styled-components';
import { Main } from '@styles';

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <DemoReel data={data.demoreel.edges} />
      <Featured data={data.featured.edges} />
      <Awards data={data.awards.edges} />
      <Jobs data={data.jobs.edges} />
      <Education data={data.education.edges} />
      <Certifications data={data.certifications.edges} />
      <About data={data.about.edges} />
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
    demoreel: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/demoreel/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            buttonText
            vimeoId
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
    awards: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/awards/" } }
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
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            rankingImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
    certifications: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/certifications/" } }
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
            external
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___id], order: DESC }
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
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { showInProjects: { ne: false }, allowClickInProjects: { ne: true } }
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
            allowClickInProjects
          }
          html
        }
      }
    }
  }
`;
