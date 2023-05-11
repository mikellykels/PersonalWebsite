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
          <a
            href="https://kitbash3d.com/products/dieselpunk"
            target="_blank"
            rel="nofollow noopener noreferrer">
            KitBash3D
          </a>
        </li>
        <li>
          Steampunk character collection:{' '}
          <a
            href="https://www.unrealengine.com/marketplace/en-US/product/steampunk-character-collection"
            target="_blank"
            rel="nofollow noopener noreferrer">
            Crazy Vertex on UE Marketplace
          </a>
        </li>
        <li>
          Sounds and Music:{' '}
          <a href="https://freesound.org/" target="_blank" rel="nofollow noopener noreferrer">
            Various from freesound
          </a>
        </li>
        <li>
          Icons: KatGrabowska on{' '}
          <a
            href="https://www.unrealengine.com/marketplace/en-US/product/300-stylised-icons-pack/"
            target="_blank"
            rel="nofollow noopener noreferrer">
            UE Marketplace
          </a>{' '}
          and Piontek on{' '}
          <a
            href="https://www.unrealengine.com/marketplace/en-US/product/pro-icon-pack"
            target="_blank"
            rel="nofollow noopener noreferrer">
            UE Marketplace
          </a>
        </li>
        <li>
          Icon Generator: AleeZL on{' '}
          <a
            href="https://www.unrealengine.com/marketplace/en-US/product/icon-generator"
            target="_blank"
            rel="nofollow noopener noreferrer">
            UE Marketplace
          </a>
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
