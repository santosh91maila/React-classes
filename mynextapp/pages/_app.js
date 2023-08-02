import  Footer  from '../components/Footer'
import  Header  from '../components/Header'
import  Menu from '../components/Menu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <Header />
    <Menu />
    <Component {...pageProps} />
    <Footer/>
  </div> 
}

export default MyApp
