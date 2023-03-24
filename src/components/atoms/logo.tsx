import { Text } from "@chakra-ui/react"

interface LogoProps {
    isLogin?: boolean
}

export const Logo = ({ isLogin=false }: LogoProps) => {
    return (
        isLogin ? (
            <Text
                fontSize={['4xl', '6xl']}
                letterSpacing='tight'
                fontWeight='bold'
                w='64'
                position='absolute'
                top='4'
                left={['6', '12']}
            >
                dashgo
                <Text as='span' ml='1' color='pink.500'>.</Text>
            </Text>
        ) : (
            <Text
                fontSize={['2xl', '3xl']}
                letterSpacing='tight'
                fontWeight='bold'
                w='64'
            >
                dashgo
                <Text as='span' ml='1' color='pink.500'>.</Text>
        </Text>
        ) 
    )
} 