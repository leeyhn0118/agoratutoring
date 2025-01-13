import styled from 'styled-components';

import COMP1 from 'src/components/Image';
import COMP2 from 'src/components/Button';
import { H2, H3, P1 } from 'src/components/Text';

export const UserJourney = styled.div`
  margin: 0 0 120px;

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    margin: 0 0 94px;
  }
`;

export const Title = styled(H2)`
  padding: 0 16px;
  margin: 0 0 32px;

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    text-align: center;
  }
`;

export const Journeys = styled.div`
  display: flex;
  gap: 60px;
  flex-direction: column;
  max-width: 992px;
  margin: 0 auto;

  @media(min-width: ${({ theme }) => theme.size.md}) {
    grid-gap: 16px;
    flex-direction: row;
  }
`;

export const Journey = styled.div`
  position: relative;
  padding: 48px 16px 32px;

  @media(min-width: ${({ theme }) => theme.size.lg}) {
    padding: 48px 80px 70px 64px;
  }
`;

export const Background = styled(COMP1)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  border-radius: 8px;
  border-top: 8px solid ${({ $color }) => $color};
`;

export const Type = styled(H2)`
  margin: 0 0 32px;
`;

export const Step = styled.div`
  position: relative;
  padding-left: 46px;
  margin: 0 0 20px;
`;

export const Counter = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 26.4px;
  font-weight: 500;
  text-align: center;
  border-radius: 50%;
  color: ${({ $color }) => $color};
  border: 2px solid ${({ $color }) => $color};
`;

export const Name = styled(H3)`
  margin: 0 0 10px;
  line-height: 1;
`;

export const Text = styled(P1)`
  margin: 0;
`;

export const Button = styled(COMP2)`
  display: block;
  margin: 48px auto 0;
`;
