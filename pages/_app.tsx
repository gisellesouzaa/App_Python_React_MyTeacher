import '../styles/globals.css'
import type { AppProps } from 'next/app'
import tema from '../src/themes/theme'
import { ThemeProvider } from '@mui/material'
import BasicMenu from '../src/components/Menu/Menu'
import Footer from '../src/components/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <BasicMenu></BasicMenu>
      <Component {...pageProps} />
      <Footer></Footer>
    </ThemeProvider>
  )
}

export default MyApp
