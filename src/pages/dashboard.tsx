import { Flex, SimpleGrid } from "@chakra-ui/react"

import { Grapic, Header, Sidebar } from "../components"

export default function Dashboard() {
   
    return (
        <Flex direction='column' height='100vh'>
            <Header />
    
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
                    <Grapic title="Inscritos da semana"/>
                    <Grapic title="Taxa de abertura"/>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}