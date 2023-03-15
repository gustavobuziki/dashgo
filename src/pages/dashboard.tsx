import { Flex } from "@chakra-ui/react"

import { Header, Sidebar } from "../components"

export default function Dashboard() {
    return (
        <Flex direction='column' height='100vh'>
            <Header />
    
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />
            </Flex>
        </Flex>
    )
}