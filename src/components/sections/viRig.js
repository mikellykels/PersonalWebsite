import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, mixins } from '@styles';

import DemoReelBreakdownForModal from './DemoReelBreakdownForModal';

const { colors, fontSizes } = theme;

function ViRigDialog() {
  return (
    <div style={{ marginTop: '8px' }}>
      <StyledSubtitle>Contributions:</StyledSubtitle>
      <StyledList>
        <li>
          Engineered a comprehensive character rig from the ground up, implementing precise joint
          placement and sophisticated FK/IK systems
        </li>
        <li>
          Developed advanced control systems with ribbon-based deformation for enhanced character
          movement
        </li>
        <li>
          Created custom deformation solutions through detailed weight painting and sophisticated
          skinning techniques
        </li>
        <li>
          Implemented dynamic secondary animation systems using Maya's dynamics and nHair for
          realistic hair and cloth movement
        </li>
        <li>
          Processed and retargeted motion capture data in MotionBuilder, ensuring clean animation
          data transfer to the character rig
        </li>
        <li>
          Successfully integrated and refined mocap animations while maintaining the rig's
          performance and deformation quality
        </li>
        <li>
          Extended the rig's functionality into Unreal Engine, establishing a robust game-engine
          workflow
        </li>
      </StyledList>

      <DemoReelBreakdownForModal />

      <StyledSubtitle>Assets:</StyledSubtitle>
      <StyledList>
        <li>
          Character mesh from XPea on{' '}
          <a
            href="https://www.cgtrader.com/3d-models/character/woman/arcane-vi-rig-for-blender"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            CGTrader.
          </a>{' '}
          All rigging, skinning, and technical implementation done independently.
        </li>
        <li>
          Animations from{' '}
          <a
            href="https://marketplace.reallusion.com/studio-mocap-hand-to-hand-combat"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Reallusion 3D
          </a>
        </li>
        <li>
          Unreal Engine Animations from{' '}
          <a
            href="https://www.fab.com/listings/f43e7085-aa2b-43fb-b39a-90ffcaaa51dd"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            9CG
          </a>
        </li>
      </StyledList>
    </div>
  );
}

export default ViRigDialog;

ViRigDialog.propTypes = {
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
