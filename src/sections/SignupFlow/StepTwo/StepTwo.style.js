import styled from 'styled-components';
import COMP1 from 'src/components/Button';

export const StepTwo = styled.div`
  max-width: 640px;
  margin: 0 auto;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 16px;
  }
`;
export const SelectWrapper = styled.div`
  width: 100%;
`;

export const TextWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Button = styled(COMP1)`
  display: block;
  width: 100%;
  max-width: 640px;
  margin: 20px auto;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 6px;
  background-color: ${({ isdisabled, theme }) =>
    isdisabled ? theme.bg.gray : theme.color.yellow.primary};
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: ${({ isdisabled }) => (isdisabled ? 'not-allowed' : 'pointer')};
`;

export const Form1 = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 640px;
  margin: 0 auto;
`;

export const Text1 = styled.input`
  ${({ theme }) => theme.css.p1};

  display: block;
  width: 100%;
  height: 40px;
  padding: 12px 12px 12px 12px;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ theme, $error }) => $error ? theme.color.red.dark : theme.bg.hover.medium};
  height: 50px;
  background-color: ${({ theme }) => theme.bg.light};
  :focus-within {
    outline: 1px solid black;
  }
`;
