import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, mixins } from '@styles';

const { colors, fontSizes } = theme;

function GuidingLightDialog() {
  return (
    <div style={{ marginTop: '8px' }}>
      <StyledSubtitle>Contributions:</StyledSubtitle>
      <StyledList>
        <li>Implemented all C++ code for the player character movement and enemy AI</li>
        <li>Created dynamic footstep audio system based on surface materials</li>
        <li>Redesigning game levels for enhanced player experience</li>
        <li>Creating a custom pixelated shader for a unique visual style</li>
        <li>Developing a dynamic flickering lantern effect to add atmosphere</li>
        <li>Integrating Google Text-to-Speech technology for dialogue and button audio</li>
        <li>
          This project was part of my entry for the{' '}
          <a
            href="https://www.therookies.co/entries/30189"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Rookie Awards 2024
          </a>
          , a prestigious competition spotlighting emerging talent in the creative industry.
        </li>
      </StyledList>
      <StyledSubtitle>Additional Videos:</StyledSubtitle>
      <figure style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title={'Guiding Light: Dynamic Footstep Audio'}
          src={
            'https://player.vimeo.com/video/950424366?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          }
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
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
          allowFullScreen
        ></iframe>
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
          allowFullScreen
        ></iframe>
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
          allowFullScreen
        ></iframe>
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
          allowFullScreen
        ></iframe>
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
          allowFullScreen
        ></iframe>
      </figure>
    </div>
  );
}

export default GuidingLightDialog;

GuidingLightDialog.propTypes = {
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
