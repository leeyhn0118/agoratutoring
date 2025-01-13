import styled from 'styled-components';

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bg.base};
  box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 20%);
  border-radius: 20px;

  // @media(min-width: ${({ theme }) => theme.size.md}) {
  //   display: grid;
  //   grid-gap: 24px;
  //   grid-template-columns: repeat(${({ $columns }) => $columns}, minmax(0, 1fr));
  //   grid-template-areas: ${({ $template }) => $template.map((row, i) => `"${i !== 0 ? ' ' : ''}${row}"`)};
  // }
`;
