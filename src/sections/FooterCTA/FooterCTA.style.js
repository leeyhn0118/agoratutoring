import styled from 'styled-components';

import COMP1 from 'src/components/Button';
import SVG1 from 'src/assets/svg/buildings.svg';
import SVG2 from 'src/assets/svg/logo-dark.svg';

export const FooterCTA = styled.div`
  background: ${({ theme }) => theme.bg.light};
`;

export const Wrapper = styled.div`
  max-width: 570px;
  position: relative;
  margin: 0 auto;
  padding: 54px 0 60px;
`;

export const Text = styled.span`
  display: block;
  font-size: 1.5rem;
  padding: 8px 16px;
  border-radius: 6px;
  line-height: 1.15;
  color: ${({ theme }) => theme.text.white};
  background: ${({ theme }) => theme.color.blue.dark};

  margin: 0 auto 16px;
  width: calc(100% - 100px);

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    width: fit-content;
    margin: 12px 0 24px auto;
  }
`;

export const Button = styled(COMP1)`
  display: block;
  margin: 0 50px 0 auto;
`;

export const Buildings = styled(SVG1)`
  display: block;
  width: 100%;
  padding: 0 28px;
  margin: -8px 0 32px;

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    padding: 0;
    width: 500px;
    margin: -116px 0 84px;
  }
`;

export const Logo = styled(SVG2)`
  display: block;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  max-width: 352px;
`;
