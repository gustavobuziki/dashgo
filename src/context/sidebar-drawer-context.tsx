import { createContext, ReactNode, useContext, useEffect } from "react";
import { useRouter } from 'next/router'

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'

interface SidebarDrawerContextProps {
    children: ReactNode
}

const SidebarDrawerContext = createContext({} as UseDisclosureReturn)

export const SidebarDrawertProvider = ({children}: SidebarDrawerContextProps) => {
    const disclosure = useDisclosure()

    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)