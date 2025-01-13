import styled from 'styled-components';

import COMP1 from 'src/components/Button';

export const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const CardTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Price = styled.span`
  display: block;
  margin-top: 16px;
  span {
    font-weight: 400;
    line-height: 1.4;
    font-size: 2.25rem;
    letter-spacing: 0rem;
  }
`;

export const Button = styled(COMP1)`

`;

export const SubscriptionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  max-width: 100%;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  margin: 24px 0;
`;

export const CardDescription = styled.span`
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 32px;
  text-align: center;
`;