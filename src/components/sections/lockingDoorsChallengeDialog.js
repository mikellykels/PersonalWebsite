import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme, mixins } from '@styles';

const { colors, fontSizes } = theme;

function LockingDoorsProjectDialog() {
  return (
    <div style={{ marginTop: '8px' }}>
      <StyledSubtitle>Required Mechanics:</StyledSubtitle>
      <StyledList>
        <li>Locking door that requires player to have a key to unlock and open.</li>
        <li>At least one door requires a combination of keys to unlock.</li>
      </StyledList>
      <StyledSubtitle>Contributions:</StyledSubtitle>
      <StyledList>
        <li>
          All C++ code, blueprints, and UI, for example, the Character, PlayerController, inventory
          system, door and key actors, data tables, interaction interface, and widgets
        </li>
        <li>Level design</li>
      </StyledList>
      <StyledSubtitle>Assets:</StyledSubtitle>
      <StyledList>
        <li>
          Provided by CG Spectrum in the repo: UE Third Person template and UE Starter Content
        </li>
      </StyledList>
    </div>
  );
}

export default LockingDoorsProjectDialog;

LockingDoorsProjectDialog.propTypes = {
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
