import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../components/styles/Global.styled'
import Layout from '../components/Layout'



const theme = {
  colors: {
    primary: '#0070f3',
    secondary: 'black',
    tertiary: 'red'
  },
}



function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
