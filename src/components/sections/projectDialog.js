import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Dialog, DialogTitle, Slide, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { theme, mixins, media } from '@styles';

import SteamPunkRPGProjectDialog from './steampunkRPGDialog';
import TantrumnProjectDialog from './tantrumnDialog';
import LuxLabyrinthDialog from './luxLabyrinthDialog';
import LockingDoorsProjectDialog from './lockingDoorsChallengeDialog';
import { PROJECTS } from './constants';
import GuidingLightDialog from './guidingLight';
import InnForTheLostDialog from './innForTheLost';
import ViRigDialog from './viRig';

const { colors, fontSizes, fonts } = theme;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProjectDialog({ handleClose, open, projectDialogDetails }) {
  const project = Object.values(PROJECTS)
    .map(project => {
      if (project.TITLE === projectDialogDetails.title) {
        return project;
      }
    })
    .filter(Boolean);
  return (
    <StyledDialog
      fullWidth
      maxWidth="lg"
      onClose={handleClose}
      open={open}
      scroll="paper"
      TransitionComponent={Transition}
    >
      <StyledDialogHeader>
        <StyledDialogTitle>{projectDialogDetails.title}</StyledDialogTitle>
        <StyledCloseButton onClick={handleClose} aria-label="close">
          <CloseIcon />
        </StyledCloseButton>
      </StyledDialogHeader>

      <StyledDialogDetails>
        <span>{projectDialogDetails.subtitle}</span>
      </StyledDialogDetails>
      <StyledDialogContent>
        <figure style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            title={(project[0] || [])?.TITLE}
            src={(project[0] || [])?.VIDEO}
            width="640"
            height="360"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </figure>
        <div>
          <StyledDialogDescription>{(project[0] || [])?.DESCRIPTION}</StyledDialogDescription>
        </div>
        {projectDialogDetails.title === PROJECTS.STEAMPUNK_RPG.TITLE ? (
          <SteamPunkRPGProjectDialog />
        ) : projectDialogDetails.title === PROJECTS.TANTRUMN.TITLE ? (
          <TantrumnProjectDialog />
        ) : projectDialogDetails.title === PROJECTS.LUXLABYRINTH.TITLE ? (
          <LuxLabyrinthDialog />
        ) : projectDialogDetails.title === PROJECTS.LOCKINGDOORS.TITLE ? (
          <LockingDoorsProjectDialog />
        ) : projectDialogDetails.title === PROJECTS.GUIDINGLIGHT.TITLE ? (
          <GuidingLightDialog />
        ) : projectDialogDetails.title === PROJECTS.INNFORTHELOST.TITLE ? (
          <InnForTheLostDialog />
        ) : projectDialogDetails.title === PROJECTS.VIRIG.TITLE ? (
          <ViRigDialog />
        ) : null}
      </StyledDialogContent>
    </StyledDialog>
  );
}

export default ProjectDialog;

ProjectDialog.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  projectDialogDetails: PropTypes.object,
};

const StyledDialogContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 0 30px 30px 30px;
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
const StyledDialogTitle = styled(DialogTitle)`
  color: ${colors.lightestSlate};
  font-size: ${fontSizes.xxl};
  font-weight: 500;
  margin-bottom: 5px;
  flex: 1;
`;
const StyledDialogDetails = styled.h5`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  font-weight: normal;
  letter-spacing: 0.05em;
  color: ${colors.lightSlate};
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 0;
  background-color: ${colors.lightestNavy};
  position: sticky;
  top: 64px; /* Adjust based on the header height */
  z-index: 10;
  span {
    margin-left: 0;
  }
  svg {
    width: 15px;
  }
`;
const StyledDialogDescription = styled.div`
  color: ${colors.lightSlate};
  font-size: ${fontSizes.lg};
`;
const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background-color: ${colors.lightestNavy};
    position: relative; /* Needed for absolute positioning of close button */
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
  .MuiDialogTitle-root {
    color: ${colors.lightestSlate};
    font-family: ${fonts.Calibre};
  }
  .MuiDialogContentText-root {
    color: ${colors.lightestSlate};
  }
  .MuiButton-root {
    font-family: ${fonts.SFMono};
    color: ${colors.lightestSlate};
    border: 1px solid ${colors.lightestSlate};
    margin-right: 8px;
    &:hover,
    &:focus {
      border: 1px solid ${colors.purple};
      color: ${colors.purple};
    }
  }
`;
// Footer action buttons removed

const StyledDialogHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: ${colors.lightestNavy};
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
`;

const StyledCloseButton = styled(IconButton)`
  color: ${colors.lightSlate} !important;
  margin-right: 0; /* Remove the margin so it aligns with the padding of the header */
  &:hover {
    color: ${colors.purple} !important;
    background-color: ${colors.darkNavy} !important;
  }
`;
