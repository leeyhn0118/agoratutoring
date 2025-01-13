import styled from 'styled-components';

import COMP1 from 'src/components/Button';

export const CreatePostPage = styled.div`
  max-width: 768px;
  padding: 0 16px;
  margin: 48px auto 120px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.css.h2}

  text-align: center;
`;

export const Button = styled(COMP1)`
  display: block;
  width: 100%;
`;
