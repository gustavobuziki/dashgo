import type { AppProps } from 'next/app'

import { SidebarDrawertProvider } from '../context/sidebar-drawer-context'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawertProvider>
        <Component {...pageProps} />
      </SidebarDrawertProvider>
    </ChakraProvider>
  )
}
