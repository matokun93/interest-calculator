import styled from 'styled-components'
import { useField } from 'formik'

const Control = styled.div`
    margin-bottom: 20px;
`
const Label = styled.label`
    margin-bottom: 5px;
    display: block;
    color: #000;
`

const MyInput = styled.input`
    outline: none;
    padding: 8px;
    border: 1px solid #b1b3b5;
    width: 100%;
    margin-bottom: 5px;
`

const ErrorMessage = styled.div`
    color: #f00;
`

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <Control>
            <Label>
                {label}
            </Label>
            <MyInput {...field} {...props} />
            {meta.touched && meta.error
                ? (<ErrorMessage> {meta.error} </ErrorMessage>)
                : null
            }
        </Control>
    )
}

export default Input