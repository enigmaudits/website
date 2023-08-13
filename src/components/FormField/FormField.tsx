import { Form, FormControlProps } from 'react-bootstrap'
import clsx from 'classnames'

interface FormFieldProps extends FormControlProps {
    label?: any;
    isTouched?: boolean;
    error?: any;
    name: string;
    className?: string;
    componentClassName?: string;
}

const FormField: React.FC<FormFieldProps> = ({name, isTouched, className, componentClassName, error, label, ...props}) => {
    
   const isValid = !error;
   const isInvalid = !isTouched && !isValid;
   const formGroupClassNames = clsx("mb-3", className);
   const inputClassNames = clsx(componentClassName);
    return (
        <Form.Group id={name} className={formGroupClassNames}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
                name={name}
                {...props}
                className={inputClassNames}
                isValid={isTouched && isValid}
                isInvalid={isInvalid}
                feedback={error}
            />
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default FormField;