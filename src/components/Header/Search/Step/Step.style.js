import styled, { css } from 'styled-components';

import { KeyboardArrowLeft as SVG1, HighlightOff as SVG2, Search as SVG3, School as SVG4, Place as SVG5, KeyboardArrowDown as SVG6 } from '@styled-icons/material-rounded';

export const Step = styled.section`
  display: ${({ $active }) => $active ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: ${({ theme }) => theme.bg.base};
  padding: 48px 16px 114px;
  overflow-x: hidden;

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    display: inline-block;
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    background: none;
    padding: inherit;
    overflow-x: inherit;
    width: calc((100% - 40px) / 2);
  }
`;

export const InputWrapper = styled.div`
  margin: 0 0 40px;

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    margin: 0;
  }
`;

export const BackButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  background: none;
  transition: opacity 0.25s;

  ${({ $hidden }) => $hidden && css`
    opacity: 0;
    pointer-events: none;
  `}

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    display: none;
  }
`;

export const Back = styled(SVG1)`
  width: 40px;
  height: 40px;
  padding: 6px 12px 6px 0;
  fill: ${({ theme }) => theme.text.base};
`;

export const Combobox = styled.div`
  display: inline-block;
  position: relative;
  width: calc(100% - 72px);

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    width: 100%;
  }
`;

export const Label = styled.label`
  display: flex;
  position: absolute;
  align-items: center;
  width: 100%;
  padding: 8px 12px;
  line-height: 24px;
  pointer-events: none;
  fill: #AAAAAA;
  color: #AAAAAA;

  ${({ $hidden }) => $hidden && css`
    opacity: 0;
    pointer-events: none;
  `}
`;

export const Search = styled(SVG3)`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 8px 0 0;
`;

export const Category = styled(SVG4)`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 8px 0 0;
`;

export const Location = styled(SVG5)`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 6px 0 0;
`;

export const Arrow = styled(SVG6)`
  display: none;
  width: 24px;
  height: 24px;
  margin: 0 0 0 auto;

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    display: inline-block;
  }
`;

export const Input = styled.input`
  border: none;
  background: none;

  width: 100%;
  padding: 10px;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.5px;

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    margin: 8px 0;
    font-size: 16px;
    padding: 2px 12px;

    ${({ $seperator }) => $seperator && css`
      border-left: 1px solid #C1CAD5;
    `}
  }
`;



export const ClearButton = styled.button`
  display: ${({ $open }) => $open ? 'inline-block' : 'none'};
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  background: none;

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    position: absolute;
    right: 0;
  }
`;

export const Clear = styled(SVG2)`
  width: 32px;
  height: 40px;
  padding: 12px 8px;
  fill: ${({ theme }) => theme.text.light};
`;
