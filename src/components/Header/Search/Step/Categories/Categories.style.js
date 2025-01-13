import styled from 'styled-components';

export const Categories = styled.ul`
  display: block;
  position: relative;
  list-style: none;
  padding: 0;

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    width: 600px;
    display: ${({ $open }) => $open ? 'block' : 'none'};
    position: absolute;
    border-radius: 8px;
    margin: 16px 0 0;
    padding: 10px 8px;
    background: ${({ theme }) => theme.bg.base};
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    columns: 3;
    column-gap: 16px;
  }
`;

export const Category = styled.div`
  margin: 0 0 24px;

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    margin: 0 0 16px;
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;

export const Name = styled.li`
  border: none;
  background: ${({ $active, theme }) => $active ? theme.bg.light : 'none'};

  width: 100%;
  line-height: 1.15;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 1.25px;
  margin: 0 0 8px 16px;
  padding: 8px;
  text-align: left;
  color: ${({ theme }) => theme.color.blue.primary};
  transition: background 0.2s;
  border-radius: 4px;

  :hover, :focus {
    background: ${({ theme }) => theme.bg.light};
  }

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    margin: 0;
    font-size: 0.875rem;
  }
`;

export const Subcategory = styled.li`
  border: none;
  background: ${({ $active, theme }) => $active ? theme.bg.light : 'none'};

  width: 100%;
  line-height: 1.15;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 1.25px;
  margin: 0 0 8px 16px;
  padding: 8px;
  text-align: left;
  color: ${({ theme }) => theme.text.base};
  transition: background 0.2s;
  border-radius: 4px;

  :hover, :focus {
    background: ${({ theme }) => theme.bg.medium};
  }

  @media(min-width: ${({ theme }) => theme.size.xl}) {
    margin: 0;
    font-size: 0.875rem;
  }
`;
