import React from 'react';

import { UseFormMethods, SubmitHandler } from 'react-hook-form';

import withForm from '../../hocs/with-form';

import { validationSchema, defaultValues } from '../../schemas/register';

import Input from '../input';

import { Container, Title, Button, Phone, Number } from './styles';

const RegisterForm = ({ register, handleSubmit, errors }: UseFormMethods) => {
  function handleOnSubmit(data: SubmitHandler<typeof defaultValues>) {
    console.log(data);
  }

  return (
    <Container>
      <Title>Cadastro</Title>
      <Input
        fullWidth
        label="Nome"
        register={register}
        name="name"
        error={errors.name?.message}
      />
      <Input
        fullWidth
        label="Email"
        register={register}
        name="mail"
        error={errors.mail?.message}
      />
      <Input
        fullWidth
        label="Senha"
        register={register}
        name="password"
        error={errors.password?.message}
      />
      <Phone>
        <Number>
          <Input
            fullWidth
            label="DDD"
            register={register}
            name="ddd"
            error={errors.ddd?.message}
          />
        </Number>
        <Input
          fullWidth
          label="Telefone"
          register={register}
          name="cellphone"
          error={errors.cellphone?.message}
        />
      </Phone>
      <Button onClick={handleSubmit(handleOnSubmit)}>Enviar</Button>
    </Container>
  );
};

export default withForm(defaultValues, validationSchema)(RegisterForm);
