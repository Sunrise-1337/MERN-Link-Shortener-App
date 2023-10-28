import * as Yup from "yup";

export const AuthFormSchema = Yup.object().shape({
  email: Yup.string()
            .required('You must enter email')
            .email('You should enter valid email'),
  password: Yup.string()
            .required('You should enter email')
            .min(5, 'The password should contain at least 5 characters'),
});