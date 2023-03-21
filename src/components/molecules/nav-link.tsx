import { ElementType } from "react"

import { Link, Icon, Text, LinkProps } from '@chakra-ui/react'
 
interface NavLinkProps extends LinkProps {
    title: string,
    icon: ElementType
}

export const NavLink = ({ title, icon, ...props }: NavLinkProps) => {
    return (
            <Link 
                display='flex' 
                alignItems='center' 
                _hover={{
                     textDecoration: 'none',
                     opacity: 0.8
                }}
                     {...props}
            >
                <Icon as={icon} fontSize='20'/>
                <Text ml='4' fontWeight='medium'>
                    {title}
                </Text>
            </Link>
    )
}