import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, mixins } from '@styles';

const { colors, fontSizes } = theme;

function TantrumnProjectDialog() {
  return (
    <div style={{ marginTop: '8px' }}>
      <StyledSubtitle>Contributions:</StyledSubtitle>
      <StyledList>
        <li>Interaction system</li>
        <li>Power-up system</li>
        <li>Equipped item system</li>
        <li>Pause and Resume menu</li>
        <li>
          Adding in sounds for walking/running, jumping, use, attached, and win
          animations/conditions.
        </li>
        <li>Level design</li>
        <li>UI design</li>
        <li>
          Various code improvements/additions to the course code to work with my added
          contributions. This includes updating the Game Mode, Character Base, Player Controller,
          and Game State/Player State.
        </li>
      </StyledList>
      <StyledSubtitle>Assets:</StyledSubtitle>
      <StyledList>
        <li>
          The{' '}
          <a
            href="https://www.unrealengine.com/marketplace/en-US/product/unreal-learning-kit"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Unreal Learning Kit
          </a>{' '}
          from the Unreal Engine Marketplace
        </li>
        <li>
          Various sounds from the Unreal Starter Content, the Unreal Learning Kit, and{' '}
          <a href="https://freesound.org/" target="_blank" rel="nofollow noopener noreferrer">
            freesound.org
          </a>
        </li>
      </StyledList>
      <StyledSubtitle>Additional Videos:</StyledSubtitle>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Tantrumn: Pause and Resume Menus'}
          src={
            'https://player.vimeo.com/video/827247875?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Tantrumn: Power-ups'}
          src={
            'https://player.vimeo.com/video/827251451?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Tantrumn: Power-ups'}
          src={
            'https://player.vimeo.com/video/827251451?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Tantrumn: Split Screen'}
          src={
            'https://player.vimeo.com/video/827254999?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Tantrumn: Race vs AI'}
          src={
            'https://player.vimeo.com/video/827256695?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </figure>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Tantrumn: Playground'}
          src={
            'https://player.vimeo.com/video/827252873?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
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

export default TantrumnProjectDialog;

TantrumnProjectDialog.propTypes = {
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
