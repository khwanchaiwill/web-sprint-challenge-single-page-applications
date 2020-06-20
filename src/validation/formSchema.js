import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    fname: Yup
        .string()
        .min(2,"at least 2 character"),
})
export default formSchema;