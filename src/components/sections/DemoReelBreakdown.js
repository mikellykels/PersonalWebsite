/* eslint-disable quotes */
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme, media } from '@styles';
const { colors, fontSizes, fonts } = theme;

const BreakdownContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 900px;
  align-self: center;
  display: block;
`;

const BreakdownHeader = styled.div`
  cursor: pointer;
  background-color: ${colors.darkNavy};
  border-radius: 4px;
  padding: 15px 20px;
  border: 1px solid ${colors.purple};
  transition: ${theme.transition};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;

  &:hover {
    background-color: ${colors.lightNavy};
  }
`;

const BreakdownTitle = styled.h3`
  color: ${colors.purple};
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.lg};
  font-weight: normal;
  margin: 0;
`;

const ToggleIcon = styled.div`
  color: ${colors.purple};
  font-size: ${fontSizes.xl};
  font-weight: bold;
  justify-content: center;
  line-height: 1;
  align-self: flex-end;
`;

const BreakdownContent = styled.div`
  max-height: ${props => (props.isOpen ? '5000px' : '0')};
  overflow: hidden;
  transition: max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${colors.lightNavy};
  border-radius: 0 0 4px 4px;
  border: ${props => (props.isOpen ? `1px solid ${colors.purple}` : 'none')};
  border-top: none;
  padding: ${props => (props.isOpen ? '20px' : '0 20px')};

  ${media.tablet`
    max-height: ${props => (props.isOpen ? '6000px' : '0')};
  `};

  ${media.phablet`
    max-height: ${props => (props.isOpen ? '400px' : '0')};
    overflow-y: ${props => (props.isOpen ? 'auto' : 'hidden')};
  `};
`;

const BreakdownSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h4`
  color: ${colors.white};
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xl};
  margin-bottom: 10px;
`;

const SectionContent = styled.div`
  color: ${colors.slate};
  font-size: ${fontSizes.lg};
  line-height: 1.5;

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }
`;

const DemoReelBreakdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBreakdown = () => {
    setIsOpen(!isOpen);
  };

  const breakdownData = [
    {
      title: 'Original Motion Capture Data (0:00)',
      content:
        "The animation sequence begins with raw motion capture data from Reallusion 3D, carefully curated and sequenced using MotionBuilder's Story feature. This process involved selecting and combining five distinct animation clips to create a seamless performance that showcases the character's range of motion and personality.",
    },
    {
      title: 'Retargeting Implementation (MotionBuilder) (0:08)',
      content: (
        <>
          <p>
            I implemented a character retargeting workflow using MotionBuilder's HIK system. This
            process involved:
          </p>
          <ul>
            <li>
              Setting up HIK characterization for my rig in Maya and characterizing the source in
              MotionBuilder
            </li>
            <li>Manual bone mapping through MotionBuilder's retargeting UI</li>
            <li>Adjusting extremities like fingers and feet to better match the source movement</li>
            <li>
              Spatial positioning adjustments to ensure smooth transitions between animation
              sequences
            </li>
            <li>Strategic camera composition and framing to highlight the character's movements</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Advanced Deformation Systems (0:18)',
      content: (
        <>
          <p>
            The character rig incorporates several deformation solutions to enhance animation
            quality:
          </p>
          <ul>
            <li>
              Ribbon-based deformation systems on limbs to maintain volume integrity during rotation
              and provide improved twist distribution
            </li>
            <li>
              ngSkinTools implementation for precise weight painting and blending across joint
              influences
            </li>
            <li>
              RBF (Radial Basis Function) pose interpolation via PoseWrangler to automatically apply
              corrective shapes based on specific joint positions
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Dynamic Systems (0:31)',
      content: (
        <>
          <p>
            Secondary motion elements were incorporated to add natural movement and physical
            believability:
          </p>
          <ul>
            <li>
              nHair dynamic system implementation for the character's hood and hair, configured with
              custom follicle placement
            </li>
            <li>
              Fine-tuned dynamic properties (stiffness, damping) to achieve natural motion that
              complements the primary animation
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Retargeting Implementation (Unreal Engine) (0:41)',
      content: (
        <ul>
          <li>Maya-to-UE5 character rig export with RBF deformations baked into the model</li>
          <li>Implementation of existing Unreal Engine animations with the imported character</li>
          <li>Animation retargeting configuration using Unreal's built-in retargeting system</li>
        </ul>
      ),
    },
    {
      title: 'Unreal Engine Technical Implementation (0:50)',
      content: (
        <>
          <p>
            An animation system was implemented in Unreal Engine to showcase the character's motion
            capabilities:
          </p>
          <ul>
            <li>Custom animation blueprint with state machine implementation</li>
            <li>Locomotion system featuring speed-based transitions between walk and run states</li>
            <li>Basic state machine structure for idle, movement, and jump/land animations</li>
            <li>Blended animation transitions for smooth movement between states</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Custom UI with Rigging Tools (1:04)',
      content: (
        <>
          <p>
            I developed a basic rigging toolkit in Maya using Python to demonstrate automation
            capabilities:
          </p>

          <div style={{ marginTop: '15px', marginBottom: '5px' }}>
            <strong>Base Rig Structure (1:04)</strong>
          </div>
          <ul>
            <li>Automated creation of named null groups to establish organizational hierarchy</li>
            <li>Foundational structure setup for subsequent rigging components</li>
          </ul>

          <div style={{ marginTop: '15px', marginBottom: '5px' }}>
            <strong>FK System (1:08)</strong>
          </div>
          <ul>
            <li>Joint duplication and automatic FK joint naming</li>
            <li>Constraint system establishment between controls and joints</li>
          </ul>

          <div style={{ marginTop: '15px', marginBottom: '5px' }}>
            <strong>IK System (1:12)</strong>
          </div>
          <ul>
            <li>Joint duplication with IK-specific naming conventions</li>
            <li>Basic IK handle creation for limb control</li>
          </ul>

          <div style={{ marginTop: '15px', marginBottom: '5px' }}>
            <strong>FKIK Switch (1:17)</strong>
          </div>
          <ul>
            <li>System for blending between FK and IK animation methods</li>
            <li>Single-attribute control implementation for switching between systems</li>
            <li>Constraint connections automatically linked to the FKIK switch</li>
          </ul>

          <div style={{ marginTop: '15px', marginBottom: '5px' }}>
            <strong>FK Controls Setup (1:24)</strong>
          </div>
          <ul>
            <li>Control curve creation with proper hierarchy setup</li>
            <li>Constraint setup between controls and their corresponding joints</li>
          </ul>

          <div style={{ marginTop: '15px', marginBottom: '5px' }}>
            <strong>IK Controls Setup (1:33)</strong>
          </div>
          <ul>
            <li>Control and offset group generation with appropriate constraints</li>
            <li>Constraint setup between controls and their corresponding joints</li>
          </ul>

          <p style={{ marginTop: '15px' }}>
            The complete rigging system is available for review on GitHub:{' '}
            <a
              href="https://github.com/mikellykels/Rigging"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.purple }}
            >
              github.com/mikellykels/Rigging
            </a>
          </p>
        </>
      ),
    },
  ];

  return (
    <BreakdownContainer>
      <BreakdownHeader onClick={toggleBreakdown}>
        <BreakdownTitle>Demo Reel Breakdown</BreakdownTitle>
        <ToggleIcon>{isOpen ? '−' : '+'}</ToggleIcon>
      </BreakdownHeader>
      <BreakdownContent isOpen={isOpen}>
        {isOpen &&
          breakdownData.map((section, index) => (
            <BreakdownSection key={index}>
              <SectionTitle>{section.title}</SectionTitle>
              <SectionContent>{section.content}</SectionContent>
            </BreakdownSection>
          ))}
      </BreakdownContent>
    </BreakdownContainer>
  );
};

export default DemoReelBreakdown;
