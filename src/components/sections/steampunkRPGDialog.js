import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, mixins } from '@styles';

const { colors, fontSizes } = theme;

function SteamPunkRPGProjectDialog() {
  return (
    <div style={{ marginTop: '8px' }}>
      <StyledSubtitle>Contributions:</StyledSubtitle>
      <StyledList>
        <li>
          <i>
            Note: I was the solo developer on this project. My contributions are primarily focused
            on C++ code and utilizing Unreal Engine. Asset credits are further below.
          </i>
        </li>
        <li>Gameplay programming for the main character and enemy AI charcter</li>
        <li>Attack system</li>
        <li>Equipment/Inventory system</li>
        <li>Player Stats system</li>
        <li>Interaction system</li>
        <li>Connected the animations and sounds</li>
        <li>Level design</li>
        <li>UI design</li>
        <li>
          Entered as part of the{' '}
          <a
            href={'https://www.therookies.co/entries/21590'}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Rookie Awards 2023
          </a>
          .
        </li>
      </StyledList>
      <StyledSubtitle>Assets are from various sites:</StyledSubtitle>
      <StyledList>
        <li>
          DieselPunk (buildings/props/environment):{' '}
          <a
            href="https://kitbash3d.com/products/dieselpunk"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            KitBash3D
          </a>
        </li>
        <li>
          Steampunk character collection:{' '}
          <a
            href="https://www.unrealengine.com/marketplace/en-US/product/steampunk-character-collection"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
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
            rel="nofollow noopener noreferrer"
          >
            UE Marketplace
          </a>{' '}
          and Piontek on{' '}
          <a
            href="https://www.unrealengine.com/marketplace/en-US/product/pro-icon-pack"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            UE Marketplace
          </a>
        </li>
        <li>
          Icon Generator: AleeZL on{' '}
          <a
            href="https://www.unrealengine.com/marketplace/en-US/product/icon-generator"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            UE Marketplace
          </a>
        </li>
      </StyledList>
      <StyledSubtitle>Additional Videos:</StyledSubtitle>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Automation Alpha: Connect Character with Animations'}
          src={
            'https://player.vimeo.com/video/825786425?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Automation Alpha: Interaction, Attack, HUD, Sounds'}
          src={
            'https://player.vimeo.com/video/825810847?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Automation Alpha: Attack and Inventory System, Enemy AI'}
          src={
            'https://player.vimeo.com/video/825827353?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Automation Alpha: Level Design'}
          src={
            'https://player.vimeo.com/video/825835327?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </figure>
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
  font-weight: 600;
  color: ${colors.lightestSlate};
`;
