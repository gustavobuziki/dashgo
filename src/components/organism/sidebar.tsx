import { useSidebarDrawer } from "@/src/context/sidebar-drawer-context"

import { 
    RiContactsLine, 
    RiDashboardLine, 
    RiInputMethodLine, 
    RiGitMergeLine  
} from "react-icons/ri"

import * as c from "@chakra-ui/react"

import { NavSection, NavLink } from '../'

const SidebarContent = () => {
    return (
        <c.Stack spacing='8' align='flex-start'>
            <NavSection title="GERAL"> 
                <NavLink title="Dashboard" icon={RiDashboardLine} href='/dashboard'/> 
                <NavLink title="Usuários" icon={RiContactsLine} href='/users' /> 
            </NavSection>
            <NavSection title="AUTOMAÇÃO"> 
                <NavLink title="Formulários" icon={RiInputMethodLine} href='/forms' /> 
                <NavLink title="Automação" icon={RiGitMergeLine} href='/automation' /> 
            </NavSection>
        </c.Stack>
    )
}

export const Sidebar = () => {
    const isDrawerTrue = c.useBreakpointValue({
        base: true,
        lg: false
    })

    const { isOpen, onClose } = useSidebarDrawer()

    return (
        isDrawerTrue ? (
            <c.Drawer isOpen={isOpen} onClose={onClose} placement='left'>
                <c.DrawerOverlay>
                    <c.DrawerContent bg='gray.800' p='4'>
                        <c.DrawerCloseButton mt='6'/>
                        <c.DrawerHeader>Navegação</c.DrawerHeader>
                        <c.DrawerBody>
                            <SidebarContent />
                        </c.DrawerBody>
                    </c.DrawerContent>
                </c.DrawerOverlay>
            </c.Drawer>
        ) : (
            <c.Box as='aside' w='64' mr='8'>
                <SidebarContent />
            </c.Box>
        )
    )
}