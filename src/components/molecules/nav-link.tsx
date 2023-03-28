import { ElementType } from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Link as CLink, Icon, Text, LinkProps } from '@chakra-ui/react'
 
interface NavLinkProps extends LinkProps {
    title: string,
    icon: ElementType,
    href: string
}

export const NavLink = ({ title, icon, href, ...props }: NavLinkProps) => {
    let isActive 
    const { asPath } = useRouter()
    const exactBaseUrl = asPath.startsWith(href)

    if (asPath === href || exactBaseUrl) isActive = true

    return (
        <Link href={href}>
            <CLink 
                display='flex' 
                alignItems='center' 
                _hover={{
                     textDecoration: 'none',
                     opacity: 0.8
                }}
                color={isActive ? 'pink.500' : 'gray.50'}
                {...props}
            >
                <Icon as={icon} fontSize='20'/>
                <Text ml='4' fontWeight='medium'>
                    {title}
                </Text>
            </CLink>
        </Link>
    )
}