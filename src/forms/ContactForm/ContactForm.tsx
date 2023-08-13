import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';


import { FormData, schema } from './schema';
import FormField from '../../components/FormField';



const ContactForm = () => {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik<FormData>({
        validationSchema: schema,
        initialValues: {
            name: "",
            contact: "",
            comment: "",
        },
        onSubmit: (values: FormData) => {
            alert(JSON.stringify(values))
        }
    })
    const getFieldProps = (name: string) => {
        const error = (errors as any)[name];
        const isTouched = (touched as any)[name];
        const value = (values as any)[name];
        return {
            name,
            error,
            isTouched,
            value,
            onChange: handleChange,
            onBlur: handleBlur
        }
    }
    const onSubmit = () => handleSubmit();
    return (
        <Form noValidate>
            <FormField
                label="Your name"
                placeholder="Enigma"
                {...getFieldProps("name")}
            />
            <FormField
                label="Your contact"
                placeholder="me@website.com or @telegram"
                {...getFieldProps("contact")}
            />
            <FormField
                label="Your comment"
                placeholder="I want an audit"
                {...getFieldProps("comment")}
            />
            <Button onClick={onSubmit} variant="success">
                Place order
            </Button>
        </Form>
    )
}

export default ContactForm;