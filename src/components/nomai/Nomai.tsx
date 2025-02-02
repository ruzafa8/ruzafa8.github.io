import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const ScaleTransform = keyframes`
  0% { transform: scale(1) rotate(45deg); }
  50% { transform: scale(1.1) rotate(45deg); }
  100% { transform: scale(1) rotate(45deg); }
`

const RotatedDiv = styled.div<{
  top?: number; left?: number; size: number; id: number;
  animateAlways?: boolean;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: absolute;
  top: ${({ top }) => top ?? 0}px;
  left: ${({ left }) => left ?? 0}px;
  background-color: #fff;
  transform: rotateY(0deg) rotate(45deg); /* needs Y at 0 deg to behave properly*/
  transition: transform 2s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transition-delay: ${({ id }) => id * 0.1}s;

  ${({ animateAlways, id }) => animateAlways && css`
    animation: ${ScaleTransform} 2s infinite;
    animation-delay: ${id * 0.1}s;
  `}

`

const ParentDiv = styled.div<{ size: number; }>`
  position: relative;
  width: ${({ size }) => 2 * Math.sqrt(2) * size}px;
  height: ${({ size }) => 1.5 * Math.sqrt(2) * size}px;

  &:hover ${RotatedDiv} {
    transform: scale(1.1) rotate(45deg);
  }
`

export interface INomaiProps {
  size: number;
  animateAlways?: boolean;
  onClick?: () => void;
  className?: string;
}

const Nomai = ({ size, className, animateAlways, onClick }: INomaiProps): JSX.Element => {
  const offset = size * 0.1
  return (
    <ParentDiv size={size} className={className + ' clickable'} onClick={onClick}>
      <RotatedDiv id={0} size={size} top={size - offset} left={offset} animateAlways={animateAlways} />
      <RotatedDiv id={2} size={size} top={0} left={size} animateAlways={animateAlways} />
      <RotatedDiv id={4} size={size} top={size - offset} left={(size * 2) - offset} animateAlways={animateAlways} />
    </ParentDiv>
  )
}

export default Nomai