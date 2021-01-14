import React from 'react';

import { Label, InputStyled, Container, Error } from './styles';

type InputProps = {
  label?: string;
  register?: () => {};
  fullWidth?: boolean;
  error?: string;
  name: string;
};

const Input = ({ label, register, fullWidth, error, name }: InputProps) => {
  return (
    <Container fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <InputStyled ref={register} name={name} />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Input;
