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
          <i>
            Note: I was the solo developer on this project. My contributions are primarily focused
            on C++ code and utilizing Unreal Engine. Asset credits are further below.
          </i>
        </li>
        <li>Character movement/inputs</li>
        <li>Inventory system</li>
        <li>Interaction interface</li>
        <li>Doors and key game mechanics</li>
        <li>Data tables</li>
        <li>Level design</li>
        <li>UI design</li>
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
  font-weight: 600;
  color: ${colors.lightestSlate};
`;
