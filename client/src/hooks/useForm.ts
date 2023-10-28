import { useFormik } from "formik"
import { AuthFormSchema } from "../configs/yup/auth.schema";

function useForm() {
    const form = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: AuthFormSchema,
        onSubmit: () => {}
        
        // values => {
        //     // logInUser(values.logLogin, values.logPassword);
        // },
    });

    return form
}

export default useForm