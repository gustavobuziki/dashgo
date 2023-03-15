import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header, Pagination, Sidebar } from '../../components'

export default function UsersList (){
    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} p='8' bg='gray.800'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>
                            Usuários
                        </Heading>
                        <Button 
                            as='a' 
                            size='sm' 
                            fontSize='sm' 
                            colorScheme='pink'
                            leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                        >
                            Criar novo
                        </Button>
                    </Flex>
                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' w='8' color='gray.300'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr px='6'>
                                <Td>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Gustavo Buziki</Text>
                                        <Text fontSize='sm' color='gray.300'>gbuziki@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                   04 de Abril de 2023
                                </Td>
                                <Td>
                                <Button 
                                    as='a' 
                                    size='sm' 
                                    fontSize='sm' 
                                    colorScheme='purple'
                                    leftIcon={<Icon as={RiPencilLine} fontSize='20' />}
                                >
                                    Editar
                                </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}