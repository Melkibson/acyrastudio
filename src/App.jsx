import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './utils/theme'

import { Wrapper} from './components/Wrapper'
import Header from './components/Header'
import Services from './components/Services'
import Package from './components/Package'
import FAQ from './components/FAQ'
import Book from './components/Book'
import Footer from './components/Footer'
import GoBackUpBtn from './utils/GoBackUpBtn'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null)
  const fetchData = async () => {
    await axios.get(`${window.location.href}data.json`)
    .then(res => {
      setData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(window.location.href)
  if(!data) return null

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header 
          image={data.header.titleSrc}
          title={data.header.subtitle}
          videoSrc="vinyl.mp4"
          />
          <Services/>
          <Package 
            cards={data.card}
            description={data.cardHeading}
            title={data.priceTtile}

          />
          <FAQ 
            title={data.faq.title}
            content={data.faq.content}
          />
          <Book 
              title={data.book.title}
              insta={data.book.button[0].label}
              tel={data.book.button[1].label}
              hrefTel={`tel:${data.book.button[1].link}`}
              hrefInsta={data.book.button[0].link}
            />
            <Footer/> 
            <GoBackUpBtn/> 
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
