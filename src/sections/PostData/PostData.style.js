import styled from 'styled-components';

export const PostData = styled.div`
  grid-area: PostData;

  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: ${({ theme }) => theme.bg.light};
`;

export const TypeIndicator = styled.span`
  display: block;
  height: 6px;
  width: 100%;
  background: ${({ $color }) => $color};
`;

export const Info = styled.div`
  padding: 16px;
  border-bottom: 2px solid #ACB7C6;

  padding: 16px 0;
  margin: 0 16px;

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 60px;
  }
`;

export const Data = styled.div`

`;

export const Label = styled.span`
  ${({ theme }) => theme.css.caption};

  display: block;
`;

export const Category = styled.span`
  ${({ theme }) => theme.css.p1};

  display: block;
  margin: 0 0 8px;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 32px;
`;

export const Tag = styled.span`
  ${({ theme }) => theme.css.p2};

  padding: 4px;
  border-radius: 2px;
  white-space: nowrap;
  background: ${({ $color }) => $color};
`;

export const Details = styled.div`
  margin: 0 0 24px;

  @media(min-width: ${({ theme }) => theme.size.xl }) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    justify-content: space-between;
  }
`;

export const Detail = styled.span`
  ${({ theme }) => theme.css.p2};

  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0 0 32px;
`;

export const DetailContainer = styled.div`
  font-size: 14px;
`;

export const DetailTitle = styled.p`
  ${({ theme }) => theme.css.overline}

  margin: 0;
  color: ${({ theme }) => theme.color.blue.primary};
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  margin: 0 8px 0 0;
  color: ${({ theme }) => theme.color.blue.dark};
`;

export const Content = styled.div`
  padding: 16px 16px 0;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.css.h3}

  margin: 0 0 32px;
`;

export const SectionTitle = styled.h5`
  ${({ theme }) => theme.css.h5}

  font-weight: 600;
  font-size: 0.875rem;
  margin: 0 0 16px;
`;

export const Description = styled.p`
  ${({ theme }) => theme.css.p1}

  margin: 0 0 32px;
  white-space: pre-wrap;
`;

export const SaveButton = styled.button`
  position: absolute;
  display: inline-block;
  top: 8px;
  right: 16px;
  padding: 0;
  border: none;
  background: none;
`;

export const SaveIcon = styled.svg`
  cursor: pointer;
  width: 48px;
  height: 48px;
  padding: 10px;
  transition: color 0.25s;
  color: ${({ theme }) => theme.color.blue.dark};

  :hover {
    color: ${({ theme }) => theme.color.yellow.dark};
  }
`;