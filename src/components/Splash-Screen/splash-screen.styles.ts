import styled, { css } from 'styled-components';

export const Container = styled.div<{ $fadeOut: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  transition: opacity 1s ease;
  opacity: 1;

  ${({ $fadeOut }) =>
    $fadeOut &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;

export const LogoText = styled.div`
  font-size: 40px;
  font-weight: 300;
  color: #b0bec5;
`;

export const LogoTextBold = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #03a9f4;
`;

export const VersionText = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 14px;
  color: #9e9e9e;
  opacity: 0.7;
`;
