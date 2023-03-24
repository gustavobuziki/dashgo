import {
    FormControl,
    FormLabel,
    Input as InputText,
    InputProps as PropsInput
} from '@chakra-ui/react'

interface InputProps extends PropsInput {
    label?: string
    name: string,
}

export const Input = ({label, name, ...props }: InputProps) => {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
                <InputText
                    name={name}
                    id={name}
                    bgColor='gray.900'
                    focusBorderColor='pink.500'
                    variant='filled'
                    _hover={{
                        bgColor: 'gray.900'
                    }}
                    size='lg'
                    {...props}
                    />
            </FormControl>
    )
}