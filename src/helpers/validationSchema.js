import * as yup from 'yup';

const nameSchema = yup.string().min(2);
const emailSchema = yup
  .string()
  .email('Please provide a valid email.')
  .required('Email field required.');
const passwordSchema = yup.string().min(6).required('Password field required.');
const commentSchema = yup.string().min(1);

export let registrationSchema = yup.object().shape({
  name: nameSchema.required('Name is required.'),
  email: emailSchema,
  password: passwordSchema,
  dateOfBirth: yup.date().min('1-1-1900').max('12-31-2020').required(),
});

export let loginSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
});

export let createPostSchema = yup.object().shape({
  title: nameSchema.required('Title is required.'),
  content: nameSchema.required('Content is required.'),
});

export let addCommentSchema = yup.object().shape({
  comment: commentSchema.required('No empty comments.'),
});

export let chatMsgSchema = yup.object().shape({
  message: commentSchema.required('No spam.'),
});
