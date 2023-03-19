import { useState } from "react"

export const useForm = ( initialFormValue = {}) => {
    const [ inputValue, setInputValue ] = useState( initialFormValue )

    const onInputChange = ( { target } ) => {
        const { name, value } = target
    //    console.log(name, value) 
        setInputValue({
            ...inputValue,
            [ name ]: value
        })
    }

    const inputReset = () => {

        setInputValue( initialFormValue )

    }

    return {
        ...inputValue,
        inputValue,
        onInputChange,
        inputReset,
    }
}
