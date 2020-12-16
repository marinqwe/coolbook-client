import * as yup from 'yup';

export let registrationSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  dateOfBirth: yup.date().min('1-1-1900').max('12-31-2020').required(),
});
