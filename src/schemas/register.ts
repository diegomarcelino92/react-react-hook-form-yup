import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required(),
  mail: yup.string().required(),
  password: yup.string().required(),
  cellphone: yup.string().required(),
  ddd: yup.string().required(),
});

export const defaultValues = {
  name: '',
  mail: '',
  password: '',
  cellphone: '',
  ddd: '',
};
