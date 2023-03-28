import Link from 'next/link'

import * as c from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header, Pagination, Sidebar } from '../../components'

export default function UsersList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <c.Box>
            <Header />

            <c.Flex w='100%' my='6' maxWidth={1480} mx='auto' px={['1', '6']}>
                <Sidebar />

                <c.Box flex={[null, '1']} borderRadius={8} p='8' bg='gray.800'>
                    <c.Flex mb='8' justify='space-between' align='center'>
                        <c.Heading size='lg' fontWeight='normal'>
                            Usuários
                        </c.Heading>
                        <Link href='users/create'>
                            <c.Button 
                                size='sm' 
                                fontSize='sm' 
                                colorScheme='pink'
                                leftIcon={<c.Icon as={RiAddLine} fontSize='20' />}
                            >
                                Criar novo
                            </c.Button>
                        </Link>
                    </c.Flex>
                    <c.Table colorScheme='whiteAlpha'>
                        <c.Thead>
                            <c.Tr>
                                <c.Th px={['4', '4', '6']} w='8' color='gray.300'>
                                    <c.Checkbox colorScheme='pink' />
                                </c.Th>
                                <c.Th>Usuário</c.Th>
                               { isWideVersion &&  <c.Th>Data de cadastro</c.Th> }
                                <c.Th w='8'></c.Th>
                            </c.Tr>
                        </c.Thead>
                        <c.Tbody>
                            <c.Tr>
                                <c.Td px={['4', '4', '6']}>
                                    <c.Checkbox colorScheme='pink' />
                                </c.Td>
                                <c.Td>
                                    <c.Box>
                                        <c.Text fontWeight='bold'>Gustavo Buziki</c.Text>
                                        <c.Text fontSize='sm' color='gray.300'>gbuziki@gmail.com</c.Text>
                                    </c.Box>
                                </c.Td>
                                { isWideVersion && <c.Td>04 de Abril de 2023</c.Td> }
                                <c.Td>
                                <c.IconButton 
                                    aria-label="Editar"
                                    as='a' 
                                    size='sm' 
                                    fontSize='sm' 
                                    colorScheme='purple'
                                    icon={<c.Icon as={RiPencilLine} fontSize='20' />}
                                />
                                </c.Td>
                            </c.Tr>
                        </c.Tbody>
                    </c.Table>
                    <Pagination />
                </c.Box>
            </c.Flex>
        </c.Box>
    )
}