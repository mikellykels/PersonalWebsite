import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { FormattedIcon } from '@components/icons';
import CloseIcon from '@mui/icons-material/Close';
import { Button, CardContent, Dialog, DialogContent, DialogActions, Grid } from '@mui/material';
import { theme, mixins, media, Section, Heading } from '@styles';

const { colors, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledCard = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 450px;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;
const StyledCertification = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledCard} {
      transform: translateY(-5px);
    }
  }
`;
const StyledImg = styled(Img)`
  width: 312px !important;
  object-fit: cover !important;
  border-top-left-radius: ${theme.borderRadius};
  border-top-right-radius: ${theme.borderRadius};

  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  ${media.tablet`
    object-fit: cover;
    width: 340px !important;
    height: auto;
    filter: grayscale(100%) contrast(1) brightness(80%);
  `};
`;
const StyledIContainer = styled.div`
  z-index: 1;
  background-color: ${colors.purple};
  border-top-left-radius: ${theme.radius + 1}px;
  border-top-right-radius: ${theme.radius + 1}px;
  transition: ${theme.transition};
  ${media.tablet``};
  ${media.thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `};
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: white;
    &:before,
    ${StyledImg} {
      background: transparent;
      filter: none;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: ${theme.transition};
    mix-blend-mode: screen;
  }
`;
const StyedDate = styled.span`
  display: block;
  font-family: ${fonts.SFMono};
  font-size: 13px;
  color: ${colors.lightSlate};
  margin-top: 16px;
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
    font-family: ${fonts.SFMono};
    color: ${colors.lightestSlate};
    border: 1px solid ${colors.lightestSlate};
    margin-left: 8px;
    margin-right: 8px;
    &:hover,
    &:focus {
      border: 1px solid ${colors.purple};
      color: ${colors.purple};
    }
  }
  .MuiButton-endIcon {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
  }
`;
const StyledDialogImg = styled(Img)`
  width: 800px;
`;

const AwardsCertifications = ({ data }) => {
  const revealTitle = useRef(null);
  const revealContainer = useRef(null);
  const [open, setOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  const handleClickOpen = card => {
    setCurrentCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledContainer id="certifications-awards" ref={revealContainer}>
      <Heading ref={revealTitle}>Certifications & Awards</Heading>
      <Grid container spacing={4}>
        {data &&
          data.map(({ node }, i) => {
            const { frontmatter } = node;
            const { date, id, title, image } = frontmatter;
            return (
              <Grid item key={i} xs={12} sm={6} md={4}>
                {id && (
                  <StyledCertification>
                    <StyledCard
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: `${colors.lightNavy}`,
                      }}>
                      {image && (
                        <StyledIContainer onClick={() => handleClickOpen(frontmatter)}>
                          <StyledImg fluid={image.childImageSharp.fluid} alt="certification" />
                        </StyledIContainer>
                      )}
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          color: `${colors.lightestSlate}`,
                          fontSize: '18px',
                          fontWeight: '600',
                        }}>
                        {title}
                        <StyedDate>{date}</StyedDate>
                      </CardContent>
                      {currentCard && (
                        <StyledDialog maxWidth="lg" open={open} onClose={handleClose}>
                          <DialogContent>
                            <StyledDialogImg
                              fluid={currentCard.image.childImageSharp.fluid}
                              alt="certification"
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button
                              href={currentCard.external}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label="External Link"
                              size="small"
                              variant="outlined"
                              onClick={handleClose}
                              endIcon={<FormattedIcon name="External" />}>
                              More info
                            </Button>
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={handleClose}
                              endIcon={<CloseIcon />}>
                              Close
                            </Button>
                          </DialogActions>
                        </StyledDialog>
                      )}
                    </StyledCard>
                  </StyledCertification>
                )}
              </Grid>
            );
          })}
      </Grid>
    </StyledContainer>
  );
};

AwardsCertifications.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AwardsCertifications;
