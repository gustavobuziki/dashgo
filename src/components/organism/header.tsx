import { Flex } from '@chakra-ui/react'

import { Logo, InputSearch, Profile } from '../'

export const Header = () => {
    return (
        <Flex
            as='header'
            w='100%'
            maxWidth={1480}
            h='20'
            mx='auto'
            mt='4'
            px='6'
            align='center'
        >
            <Logo />

            <InputSearch />

            <Profile />
        </Flex>
    )
}