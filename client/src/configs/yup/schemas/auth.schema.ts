import * as Yup from "yup";

export const AuthFormSchema = Yup.object().shape({
  email: Yup.string()
            .email('You should enter valid email'),
  password: Yup.string()
            .min(5, 'The password should contain at least 5 characters'),
});