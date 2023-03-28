import { Flex, Button, Stack } from '@chakra-ui/react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input, Logo } from '../components'
import { signinSchemeValidation } from '../utils/validate-form'

type SigninFormData = {
    email: string, 
    password: string
}

export default function Home() {
    const { handleSubmit, formState,  register } = useForm<SigninFormData>({
        resolver: yupResolver(signinSchemeValidation)
    }) 

    const errors = formState.errors

    const handleSignin: SubmitHandler<SigninFormData> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log(data)
    }

	return (
		<Flex w='100vw' h='100vh' align='center' justify='center' direction='column' position='relative'>
            <Logo isLogin={true}/>
            <Flex 
                as='form'
                w='100%' 
                maxW={360} 
                bg='gray.800' 
                p={8} 
                borderRadius={8} 
                flexDir='column' 
                onSubmit={handleSubmit(handleSignin)}
            >
                <Stack spacing={4}>
                    <Input 
                        label='E-mail' 
                        type='email'
                        error={errors.email}
                        {...register('email')}
                    />
                    <Input 
                        label='Senha' 
                        type='password' 
                        error={errors.password}
                        {...register('password')}
                    />
                </Stack>
                
                <Button type='submit' mt={6} colorScheme='pink' size='lg' isLoading={formState.isSubmitting}>
                    Entrar
                </Button>
			</Flex>
		</Flex>
	)
}
