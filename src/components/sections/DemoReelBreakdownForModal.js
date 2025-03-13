/* eslint-disable quotes */
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@styles';

const { colors, fontSizes, fonts } = theme;

const BreakdownContainer = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const BreakdownHeader = styled.div`
  cursor: pointer;
  background-color: ${colors.darkNavy};
  border-radius: 4px;
  padding: 12px 15px;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ToggleIcon = styled.div`
  color: ${colors.purple};
  font-size: ${fontSizes.xl};
  font-weight: bold;
  margin-left: 15px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
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
  padding: ${props => (props.isOpen ? '15px' : '0 15px')};
  margin-bottom: 20px;
`;

const BreakdownSection = styled.div`
  margin-bottom: 15px;
`;

const SectionTitle = styled.h4`
  color: ${colors.white};
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.lg};
  margin-bottom: 10px;
`;

const SectionContent = styled.div`
  color: ${colors.lightSlate};
  font-size: ${fontSizes.lg};
  line-height: 1.5;

  ul {
    padding-left: 20px;
  }

  li {
    font-size: ${fontSizes.lg};
    margin-bottom: 6px;
  }
`;

const DemoReelBreakdownForModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBreakdown = () => {
    setIsOpen(!isOpen);
  };

  const breakdownData = [
    {
      title: 'Retargeting Implementation (MotionBuilder) (0:08)',
      content: (
        <ul>
          <li>Implemented character retargeting workflow using MotionBuilder's HIK system</li>
          <li>Configured HIK characterization across both Maya and MotionBuilder</li>
          <li>Implemented manual bone mapping for precision character control</li>
          <li>Optimized extremity positioning for natural movement quality</li>
          <li>Maintained spatial continuity between animation sequences</li>
        </ul>
      ),
    },
    {
      title: 'Advanced Deformation Systems (0:18)',
      content: (
        <ul>
          <li>Designed advanced deformation solutions to enhance animation quality</li>
          <li>Developed ribbon-based deformation systems for volume preservation</li>
          <li>Utilized ngSkinTools for enhanced weight distribution</li>
          <li>Implemented RBF-driven pose interpolation via PoseWrangler</li>
        </ul>
      ),
    },
    {
      title: 'Dynamic Systems (0:25)',
      content: (
        <ul>
          <li>Incorporated dynamic secondary motion elements for natural movement</li>
          <li>Configured nHair dynamics for character's hood and hair elements</li>
          <li>Balanced dynamic properties for performance-optimized secondary motion</li>
        </ul>
      ),
    },
    {
      title: 'Retargeting Implementation (Unreal Engine) (0:36)',
      content: (
        <ul>
          <li>Exported Maya rig to UE5 with baked RBF deformations</li>
          <li>Integrated character with existing Unreal animation libraries</li>
          <li>Configured Unreal's native retargeting system for animation compatibility</li>
        </ul>
      ),
    },
    {
      title: 'Unreal Engine Technical Implementation (0:44)',
      content: (
        <ul>
          <li>Implemented animation system in Unreal Engine for character motion</li>
          <li>Engineered custom animation blueprint with state machine logic</li>
          <li>Developed speed-based locomotion system with smooth transitions</li>
          <li>Created blended animation transitions between movement states</li>
        </ul>
      ),
    },
    {
      title: 'Niagara Particle System (0:57)',
      content: (
        <ul>
          <li>Developed custom flickering light dynamics for atmospheric effects</li>
          <li>Implemented parameter-driven intensity control for runtime adjustments</li>
          <li>Optimized emission rates and particle counts for performance efficiency</li>
        </ul>
      ),
    },
    {
      title: 'In-Game Lantern Implementation (1:05)',
      content: (
        <ul>
          <li>Integrated particle system with skeletal mesh socket attachment</li>
          <li>Configured character attachment points for natural light source movement</li>
          <li>Created dynamic environmental lighting effects with falloff controls</li>
        </ul>
      ),
    },
    {
      title: 'Pixelated Shader Implementation (1:13)',
      content: (
        <ul>
          <li>Combined Material Editor visual programming with custom HLSL code</li>
          <li>Developed resolution control parameters for variable pixelation levels</li>
          <li>Applied shader as post-process material for consistent screen-space effect</li>
        </ul>
      ),
    },
    {
      title: 'Custom UI with Modular Rig Tool (1:20)',
      content: (
        <>
          <ul>
            <li>Developed modular auto-rigging system with stackable, reusable components</li>
            <li>Implemented guide-based workflow with save/load functionality</li>
            <li>Created automated mirroring system with color-coded control visualization</li>
            <li>Engineered unified FK/IK switching with constraint-based blending</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            The complete modular rig system is available for review on GitHub:{' '}
            <a
              href="https://github.com/mikellykels/autorig"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.purple }}
            >
              github.com/mikellykels/autorig
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

export default DemoReelBreakdownForModal;
