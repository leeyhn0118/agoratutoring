import styled from 'styled-components';

import COMP1 from 'src/components/Button';
import { H2 } from 'src/components/Text';

import { Done as SVG1 } from '@styled-icons/material-rounded';
import SVG2 from 'src/assets/svg/swipe.svg';

export const FeatureBreakdown = styled.div`
  margin: 0 0 60px;
`;

export const Title = styled(H2)`
  margin: 0 0 48px;
  padding: 0 16px;

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  overflow-y: auto;
  padding: 0 16px;
`;

export const Table = styled.table`
  width: 800px;
  margin: 0 auto;
  table-layout: fixed;
  border-collapse: collapse;

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    width: 992px;
  }
`;

export const Head = styled.thead`

`;

export const Body = styled.tbody`

`;

export const Row = styled.tr`
  border-collapse: collapse;

  :not(:last-child) {
    border-bottom: 1px solid #EBEBEB;
  }

  :first-child {
    border-bottom: 2px solid #EBEBEB;
  }
`;

export const Header = styled.th`
  font-weight: 500;
  line-height: 1.4;
  font-size: 1.125rem;
  letter-spacing: 0.0625rem;
  vertical-align: top;
  padding-bottom: 16px;
  width: 210px;
  max-width: 100%;
  text-align: center;
  border-left: 1px solid #EBEBEB;

  :first-child {
    width: auto;
    border: none;
    text-align: left;
    padding: 0 8px 16px;
    vertical-align: bottom;
  }
`;

export const Data = styled.td`
  padding: 8px;
  max-width: 100%;
  width: 210px;
  height: 64px;
  border-left: 1px solid #EBEBEB;

  :first-child {
    width: auto;
    border: none;
    font-weight: 500;
  }

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    height: auto;
    padding: 12px 8px;
  }
`;

export const TableTitle = styled.h5`
  font-weight: 600;
  font-size: 1.125rem;
  margin: 0;
  color: ${({ theme }) => theme.color.blue.dark};
`;

export const Price = styled.span`
  display: block;

  span {
    font-weight: 400;
    line-height: 1.4;
    font-size: 2.25rem;
    letter-spacing: 0rem;
  }
`;

export const BlockFree = styled.span`
  display: block;
  font-size: 0.75rem;
  margin: 8px 0 20px;
  color: ${({ theme }) => theme.color.blue.primary};
`;

export const InlineFree = styled.span`
  display:block;
  margin: 4px 0 0;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.blue.primary};

  @media(min-width: ${({ theme }) => theme.size.sm}) {
    display: inline;
    margin: 0 0 0 12px;
  }
`;

export const Button = styled(COMP1)`

`;

export const Checkmark = styled(SVG1)`
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 24px;
`;

export const Indicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;

  @media(min-width: 952px) {
    display: none;
  }
`;

export const IndicatorIcon = styled(SVG2)`
  display: block;
  margin: 0 14px 0 0;
`;

export const IndicatorText = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.blue.primary};
`;

export const SubscriptionButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;