import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, mixins } from '@styles';

const { colors, fontSizes } = theme;

function SteamPunkRPGProjectDialog() {
  return (
    <div>
      <StyledList>
        <li>
          Gameplay programming for the main character, enemy charcter, attack system, equipment
          system, player stats, interactions, AI, and UI{' '}
        </li>
        <li>Connected the animations and sounds</li>
        <li>Level and UI design</li>
      </StyledList>
      <StyledSubtitle>Assets are from various sites:</StyledSubtitle>
      <StyledList>
        <li>
          DieselPunk (buildings/props/environment):{' '}
          <a href="https://kitbash3d.com/products/dieselpunk?_pos=1&_psq=die&_ss=e&_v=1.0">
            KitBash3D
          </a>
        </li>
        <li>
          Steampunk character collection:{' '}
          <a href="https://www.unrealengine.com/marketplace/en-US/product/steampunk-character-collection">
            Crazy Vertex on UE Marketplace
          </a>
        </li>
        <li>
          Sounds and Music: <a href="https://freesound.org/">Various from freesound</a>
        </li>
      </StyledList>
    </div>
  );
}

export default SteamPunkRPGProjectDialog;

SteamPunkRPGProjectDialog.propTypes = {
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
  color: ${colors.lightestSlate};
`;
