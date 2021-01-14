import React from 'react';

import { useForm, UseFormMethods } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import yup from 'yup';

import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;

  .MuiFormControl-root {
    margin: 10px 5px !important;
  }
  .MuiFormControl-fullWidth {
    width: calc(100% - 10px);
  }
`;

type Object = {
  [key: string]: any;
};

export const withForm = (values: Object, schema: yup.AnyObjectSchema) => (
  WrappedComponent: React.FC<UseFormMethods & Object>
) => (props: Object) => {
  const useFormProps = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: values,
    resolver: yupResolver(schema),
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
  });

  return (
    <Form>
      <WrappedComponent {...props} {...useFormProps} />
    </Form>
  );
};

export default withForm;
