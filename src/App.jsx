import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './utils/theme'
import { Wrapper } from './components/Wrapper'
import Header from './components/Header'
import Services from './components/Services'
import Package from './components/Package'
import FAQ from './components/FAQ'
import Book from './components/Book'
import Footer from './components/Footer'
import GoBackUpBtn from './utils/GoBackUpBtn'
import { useGetData } from './hooks/useGetData'
import data from './utils/data/data.json'
import { useState } from 'react'
import { useEffect } from 'react'


function App() {
  const jsonData = useGetData('http://localhost:5173/data.json')
  const [newData, setNewData] = useState({})

  useEffect(() => {
    if (newData === undefined || Object.entries(newData).length === 0) {
      setNewData(jsonData)
    }
  }, [])

  console.log(newData)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header 
          image={data?.header.titleSrc}
          title={data.header.subtitle}
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
