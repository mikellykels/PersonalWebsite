import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, mixins } from '@styles';

const { colors, fontSizes } = theme;

function ModularRigToolDialog() {
  return (
    <div style={{ marginTop: '8px' }}>
      <StyledSubtitle>Key Features:</StyledSubtitle>
      <StyledList>
        <li>
          Designed and implemented the entire auto-rigging system with object-oriented architecture
          and reusable modular components
        </li>
        <li>
          Developed a guide-based workflow that automatically generates optimized joint hierarchies
          with proper orientation
        </li>
        <li>
          Created an advanced IK/FK blending system with visual pole vector guides and intuitive
          switching mechanism
        </li>
        <li>
          Built a comprehensive joint orientation system that handles complex limb setups and spine
          chains
        </li>
        <li>
          Engineered a modular control system with intelligent color-coding and side-specific
          adjustments
        </li>
        <li>
          Implemented an intuitive foot roll system with heel, toe, and tilt attributes for enhanced
          character animation
        </li>
        <li>
          Implemented automatic mirroring functionality to efficiently generate symmetrical
          character rigs
        </li>
        <li>
          Designed and coded a custom PySide2/Qt interface for efficient rig creation and
          customization
        </li>
        <li>
          Created a robust module manager system that handles inter-module connections and hierarchy
          management
        </li>
      </StyledList>
      <StyledLink
        href="https://github.com/mikellykels/autorig"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </StyledLink>
    </div>
  );
}

export default ModularRigToolDialog;

ModularRigToolDialog.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  projectDialogDetails: PropTypes.object,
};

const StyledList = styled.ul`
  margin-top: 20px !important;
  color: ${colors.lightSlate};
  ul {
    ${mixins.fancyList};
  }
`;
const StyledSubtitle = styled.span`
  font-size: ${fontSizes.lg};
  font-weight: 600;
  color: ${colors.lightestSlate};
`;

const StyledLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid ${colors.green};
  border-radius: 3px;
  color: ${colors.green};
  font-size: ${fontSizes.sm};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: ${colors.greenTint};
  }
`;
