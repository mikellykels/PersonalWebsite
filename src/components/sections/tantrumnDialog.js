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
        <li></li>
        <li></li>
        <li></li>
      </StyledList>
      <StyledSubtitle>Assets are from various sites:</StyledSubtitle>
      <StyledList>
        <li></li>
        <li></li>
        <li></li>
      </StyledList>
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
  color: ${colors.lightestSlate};
`;
