import Link from 'next/link'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as c from "@chakra-ui/react";

import { Header, Input, Sidebar } from '../../components'
import { createUserSchemeValidation } from '@/src/utils/validate-form';

type CreateUserFormData = {
    name: string,
    email: string, 
    password: string,
    password_confirm: string
}

export default function CreateUser() {
    const { handleSubmit, register, formState } = useForm<CreateUserFormData>({
        resolver: yupResolver(createUserSchemeValidation)
    })

    const errors = formState.errors

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log(data)
    }

    return (
        <c.Box>
            <Header />

            <c.Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <c.Box 
                    as='form' 
                    onSubmit={handleSubmit(handleCreateUser)} 
                    flex='1' 
                    borderRadius={8} 
                    p='8' 
                    bg='gray.800'
                >
                   <c.Heading size='lg' fontWeight='normal'>
                        Criar usuário
                    </c.Heading>

                    <c.Divider my='6' borderColor='gray.700' />

                    <c.VStack spacing={['6', '8']}>
                        <c.SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input 
                                label='Nome completo'
                                {...register('name')}
                                error={errors.name}
                            />
                            <Input 
                                type='email' 
                                label='E-mail'
                                {...register('email')}
                                error={errors.email}
                            />
                        </c.SimpleGrid>
                        <c.SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input
                                type='password' 
                                label='Senha'
                                {...register('password')}
                                error={errors.password}
                            />
                            <Input
                                type='password' 
                                label='Confirme a senha'
                                {...register('password_confirm')}
                                error={errors.password_confirm}
                            />
                        </c.SimpleGrid>
                    </c.VStack>

                    <c.Flex mt='8' justify='flex-end'>
                        <c.HStack spacing='4'>
                            <Link href='/users'>
                                <c.Button colorScheme='whiteAlpha'>Cancelar</c.Button>
                            </Link>
                            <c.Button 
                                type='submit'
                                isLoading={formState.isSubmitting}
                                colorScheme='pink' 
                            >
                                Salvar
                            </c.Button>
                        </c.HStack>
                    </c.Flex>
                </c.Box>
            </c.Flex>
        </c.Box>
    )
}