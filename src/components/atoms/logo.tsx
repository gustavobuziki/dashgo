import { Text } from "@chakra-ui/react"

export const Logo = () => {
    return (
        <Text
            fontSize='3xl'
            letterSpacing='tight'
            fontWeight='bold'
            w='64'
        >
            dashgo
            <Text as='span' ml='1' color='pink.500'>.</Text>
        </Text>
    )
} 