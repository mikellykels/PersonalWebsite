import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button, Dialog, DialogActions, Slide } from '@mui/material';
import { theme, mixins, media } from '@styles';

const { colors, fonts } = theme;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CertificationsDialog({ handleClose, open, url }) {
  return (
    <StyledDialog
      fullWidth
      onClose={handleClose}
      open={open}
      scroll="paper"
      TransitionComponent={Transition}>
      <StyledDialogContent>
        <img alt="certificate" src={url} />
      </StyledDialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </StyledDialog>
  );
}

export default CertificationsDialog;

CertificationsDialog.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  url: PropTypes.string,
};

const StyledDialogContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 30px;
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 20px;`};

  ul {
    ${mixins.fancyList};
  }
  a {
    ${mixins.inlineLink};
  }
  iframe {
    border: 0;
  }
`;
const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background-color: ${colors.lightestNavy};
  }
  .MuiDialogTitle-root {
    color: ${colors.lightestSlate};
    font-family: ${fonts.Calibre};
  }
  .MuiDialogContentText-root {
    color: ${colors.lightestSlate};
  }
  .MuiButton-root {
    color: ${colors.purple};
  }
`;
