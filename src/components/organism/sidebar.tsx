import { Box, Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine  } from "react-icons/ri"

import { NavSection, NavLink } from '../'

export const Sidebar = () => {
    return (
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='8' align='flex-start'>
                <NavSection title="GERAL"> 
                    <NavLink title="Dashboard" icon={RiDashboardLine}/> 
                    <NavLink title="Usuários" icon={RiContactsLine}/> 
                </NavSection>
                <NavSection title="AUTOMAÇÃO"> 
                    <NavLink title="Formulários" icon={RiInputMethodLine}/> 
                    <NavLink title="Automação" icon={RiGitMergeLine}/> 
                </NavSection>
            </Stack>
        </Box>
    )
}