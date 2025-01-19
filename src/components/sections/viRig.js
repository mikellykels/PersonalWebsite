import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, mixins } from '@styles';

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
          Successfully retargeted animation data using Maya's Human IK system, demonstrating
          cross-platform animation integration
        </li>
        <li>
          Extended the rig's functionality into Unreal Engine, establishing a robust game-engine
          workflow (in development)
        </li>
      </StyledList>
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
          Animation from{' '}
          <a href="https://www.mixamo.com/" target="_blank" rel="nofollow noopener noreferrer">
            Mixamo
          </a>
        </li>
      </StyledList>
      {/* <StyledSubtitle>Additional Videos:</StyledSubtitle>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Guiding Light: Dynamic Footstep Audio'}
          src={
            'https://player.vimeo.com/video/950424366?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Guiding Light: Enemy AI Movement'}
          src={
            'https://player.vimeo.com/video/950425579?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Guiding Light: Niagara System Flickering Light'}
          src={
            'https://player.vimeo.com/video/950415740?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Guiding Light: Flickering Lantern'}
          src={
            'https://player.vimeo.com/video/950418723?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Guiding Light: Text-to-Speech'}
          src={
            'https://player.vimeo.com/video/950473265?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Guiding Light: Level Redesign'}
          src={
            'https://player.vimeo.com/video/950427879?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen></iframe>
      </figure> */}
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
