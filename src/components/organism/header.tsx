import { useSidebarDrawer } from '@/src/context/sidebar-drawer-context'

import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

import { Logo, InputSearch, Profile } from '../'

export const Header = () => {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const { onOpen } = useSidebarDrawer()

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
            {!isWideVersion && (
                <IconButton
                    aria-label='Abrir navegação'        
                    icon={<Icon as={RiMenuLine} />}
                    fontSize='24'
                    variant='unstyled'
                    onClick={onOpen}
                    mr='2'
                >

                </IconButton>
            )}

            <Logo />

            { isWideVersion && <InputSearch /> }

            <Profile showPhotoOnly={isWideVersion} />
        </Flex>
    )
}