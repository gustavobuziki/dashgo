import * as c from "@chakra-ui/react";

import { Header, Input, Sidebar } from '../../components'

export default function CreateUser() {
    return (
        <c.Box>
            <Header />

            <c.Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <c.Box flex='1' borderRadius={8} p='8' bg='gray.800'>
                   <c.Heading size='lg' fontWeight='normal'>
                        Criar usuário
                    </c.Heading>

                    <c.Divider my='6' borderColor='gray.700' />

                    <c.VStack spacing={['6', '8']}>
                        <c.SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input name='name' label='Nome completo'/>
                            <Input name='email' type='email' label='E-mail'/>
                        </c.SimpleGrid>
                        <c.SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input name='password' type='password' label='Senha'/>
                            <Input name='password-confirmation' type='password' label='Confirme a senha'/>
                        </c.SimpleGrid>
                    </c.VStack>

                    <c.Flex mt='8' justify='flex-end'>
                        <c.HStack spacing='4'>
                            <c.Button colorScheme='whiteAlpha'>Cancelar</c.Button>
                            <c.Button colorScheme='pink'>Salvar</c.Button>
                        </c.HStack>
                    </c.Flex>
                </c.Box>
            </c.Flex>
        </c.Box>
    )
}