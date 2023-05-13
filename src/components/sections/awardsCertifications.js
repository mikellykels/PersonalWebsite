import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { CardMedia, CardContent, Grid } from '@mui/material';
import { theme, mixins, media, Section } from '@styles';

import CertificationsDialog from './certificationsDialog';

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledTitle = styled.h4`
  margin: 0 auto;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;
const StyledCard = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
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
const StyledCardMedia = styled(CardMedia)`
  border-top-left-radius: ${theme.borderRadius};
  border-top-right-radius: ${theme.borderRadius};
`;
const StyedDate = styled.span`
  display: block;
  font-family: ${fonts.SFMono};
  font-size: 13px;
  color: ${colors.lightSlate};
`;

const AwardsCertifications = ({ data }) => {
  const revealTitle = useRef(null);
  const revealContainer = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [imageURL, setImageURL] = React.useState('');

  const handleClickOpen = url => {
    setOpen(true);

    if (url) {
      setImageURL(url);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setImageURL('');
  };

  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="certifications" ref={revealContainer}>
      <StyledTitle ref={revealTitle}>Certifications</StyledTitle>
      <Grid container mt={2.25} spacing={4}>
        <CertificationsDialog handleClose={handleClose} open={open} url={imageURL} />
        {data &&
          data.map(({ node }, i) => {
            const { frontmatter } = node;
            const { date, id, title, url } = frontmatter;
            return (
              <Grid item key={i} xs={12} sm={6} md={4}>
                {id && (
                  <StyledCertification onClick={() => handleClickOpen(url)}>
                    <StyledCard
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: `${colors.lightNavy}`,
                      }}>
                      <StyledCardMedia component="img" image={url} alt="certification" />
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
