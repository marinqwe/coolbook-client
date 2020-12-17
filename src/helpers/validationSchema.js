import * as yup from 'yup';


let registrationSchema = yup.object().shape({
  name: yup.string().min(2).required('Name is required.'),
  email: yup.string().email('Please provide a valid email.').required('Email field required.'),
  password: yup.string().min(6).required('Password field required.'),
  dateOfBirth: yup.date().min('1-1-1900').max('12-31-2020').required(),
});

let loginSchema = yup.object().shape({
  email: yup.string().email('Please provide a valid email.').required('Email field required.'),
  password: yup.string().min(6).required('Password field required.'),
});

let createPostSchema = yup.object().shape({
  title: yup.string().min(2).required('Title is required.'),
  content: yup.string().min(2).required('Content is required.'),
});

let addCommentSchema = yup.object().shape({
  comment: yup.string().min(1).required('No empty comments.'),
});

export { registrationSchema, loginSchema, createPostSchema, addCommentSchema };
