import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, mixins } from '@styles';

const { colors, fontSizes } = theme;

function LuxLabyrinthDialog() {
  return (
    <div style={{ marginTop: '8px' }}>
      <StyledSubtitle>Required Mechanics:</StyledSubtitle>
      <StyledList>
        <li>Get a ball through a hoop.</li>
      </StyledList>
      <StyledSubtitle>Contributions:</StyledSubtitle>
      <StyledList>
        <li>
          <i>
            Note: I was the solo developer on this project. My contributions are primarily focused
            on C++ code and utilizing Unreal Engine. Asset credits are further below.
          </i>
        </li>
        <li>Character movement/inputs</li>
        <li>Lighting system mechanics</li>
        <li>Quest/Instructions list</li>
        <li>Health system mechanics</li>
        <li>Connecting sounds, effects, and health bar UI</li>
        <li>The hoop (created in Maya)</li>
        <li>Level design</li>
        <li>UI design</li>
      </StyledList>
      <StyledSubtitle>Assets:</StyledSubtitle>
      <StyledList>
        <li>
          Buildings and props: Various kits from{' '}
          <a href="https://kitbash3d.com/" target="_blank" rel="nofollow noopener noreferrer">
            KitBash3D
          </a>
        </li>
        <li>
          Progress Bars UI:{' '}
          <a
            href="https://www.unrealengine.com/marketplace/en-US/product/hqui-progress-bars"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            HQUI: Progress Bars by Piontek on UE Marketplace
          </a>
        </li>
        <li>
          Sounds:{' '}
          <a
            href="https://www.unrealengine.com/marketplace/en-US/product/hqui-progress-bars"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            HQUI: Progress Bars by Piontek on UE Marketplace
          </a>{' '}
          and{' '}
          <a href="https://freesound.org/" target="_blank" rel="nofollow noopener noreferrer">
            freesound.org
          </a>
        </li>
        <li>
          FX and Icons:{' '}
          <a
            href="https://www.unrealengine.com/marketplace/en-US/product/hqui-progress-bars"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            HQUI: Progress Bars by Piontek on UE Marketplace
          </a>{' '}
          and{' '}
          <a
            href="https://www.unrealengine.com/marketplace/en-US/product/hqui-progress-bars"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Icon Generator by AleeZL on UE Marketplace
          </a>
        </li>
      </StyledList>
    </div>
  );
}

export default LuxLabyrinthDialog;

LuxLabyrinthDialog.propTypes = {
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
