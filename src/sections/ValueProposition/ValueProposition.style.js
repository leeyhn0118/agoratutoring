import styled from 'styled-components';
import {
  Book as SVG1,
  School as SVG2,
  Share as SVG3,
} from '@styled-icons/material-rounded';

import COMP1 from 'src/components/Image';
import { H2, H3, H4, P1 } from 'src/components/Text';

export const ValueProposition = styled.div`
  margin: 0 0 60px;
  background: ${({ theme }) => theme.bg.medium};

  @media(min-width: ${({ theme }) => theme.size.md}) {
    margin: 0 0 120px;
  }
`;

export const Wrapper = styled.div`
  padding: 16px 16px 86px;
  max-width: 1200px;
  margin: 0 auto;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    display: grid;
    grid-gap: 48px;
    padding: 48px 16px;
    grid-template-columns: 55fr 45fr;
    grid-template-areas: "Content Image";
  }
`;

export const Image = styled(COMP1)`
  grid-area: Image;
  display: block;
  max-width: 600px;
  border-radius: 12px;
  margin: 0 auto 24px;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    margin: 0;
  }
`;

export const Content = styled.div`
  grid-area: Content;
`;

export const Title = styled(H2)`
  margin: 0 0 24px;
  max-width: 460px;
  line-height: 1.2;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    padding: 32px 0 0;
  }
`;

export const Subtitle = styled(H3)`
  ${({ theme }) => theme.css.h3}

  margin: 0 0 24px;
`;

export const Propositions = styled.div`
  display: grid;
  grid-gap: 24px;

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Proposition = styled.div`
  padding: 0 0 0 32px;
  max-width: 292px;

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    padding: 0;
    max-width: none;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
  padding: 0 0 12px;
  margin: 0 0 12px;
  border-bottom: 2px solid ${({ theme }) => theme.color.blue.light};
`;

export const Teach = styled(SVG1)`
  width: 24px;
  fill: ${({ theme }) => theme.text.base};
`;

export const Learn = styled(SVG2)`
  width: 24px;
  fill: ${({ theme }) => theme.text.base};
`;

export const Connect = styled(SVG3)`
  width: 24px;
  fill: ${({ theme }) => theme.text.base};
`;

export const Name = styled(H4)`
  margin: 0;
`;

export const Text = styled(P1)`
  margin: 0;
`;
