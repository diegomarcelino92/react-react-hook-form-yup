import styled from 'styled-components';

export const Container = styled.div<{ fullWidth?: boolean }>`
  padding: 10px 0;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'unset')};
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  padding: 0 0 5px 5px;
  font-size: 1.2rem;
`;

export const InputStyled = styled.input`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #fff;

  &:focus {
    border: 1px solid #76ff03;
  }
`;

export const Error = styled.span`
  padding: 3px 8px;
  color: #f44336;
  font-size: 12px;
`;
