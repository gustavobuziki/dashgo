import { forwardRef, ForwardRefRenderFunction } from 'react'

import { FieldError } from 'react-hook-form'

import {
    FormControl,
    FormLabel,
    Input as InputText,
    InputProps as PropsInput,
    FormErrorMessage
} from '@chakra-ui/react'

interface InputProps extends PropsInput {
    label?: string
    name: string,
    error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({label, name, error = null, ...props }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
                <InputText
                    name={name}
                    id={name}
                    bgColor='gray.900'
                    focusBorderColor='pink.500'
                    variant='filled'
                    size='lg'
                    ref={ref}
                    _hover={{
                        bgColor: 'gray.900'
                    }}
                    {...props}
                />
                {!!error && (
                    <FormErrorMessage>
                        {error.message}
                    </FormErrorMessage>
                )}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)