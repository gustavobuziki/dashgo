import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react"
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri"

export const Profile = () => {
    return (
        <Flex
            align='center'
            ml='auto'
        >
            <HStack
                spacing='4'
                mx='8'
                pr='8'
                py='1'
                color='gray.300'
                borderRightWidth={1}
                borderColor='gray.700'
            >
                <Icon as={RiNotificationLine} fontSize='20'/>
                <Icon as={RiUserAddLine} fontSize='20'/>
            </HStack>

            <Flex align='center'>
                <Box mr='4' textAlign='right'>
                    <Text>Gustavo Buziki</Text>
                    <Text color='gray.300' fontSize='small'>
                        gbuziki@gmail.com
                    </Text>
                </Box>
                <Avatar size='md' name='Gustavo Buziki' src='https://github.com/gustavobuziki.png' />
            </Flex>
        </Flex>
    )
}