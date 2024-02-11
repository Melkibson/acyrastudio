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

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const [data, setData] = useState(null)

    const [servicesRef, servicesInView] = useInView({
      triggerOnce: true,
    });
    const [packageRef, packageInView] = useInView({
      triggerOnce: true,
    });
    const [faqRef, faqInView] = useInView({
      triggerOnce: true,
    });
    const [bookRef, bookInView] = useInView({
      triggerOnce: true,
    });


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
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.5 }}
        >
          <Services />
        </motion.div>

        {/* Package section */}
        <motion.div
          ref={packageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={packageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Package
            cards={data.card}
            description={data.cardHeading}
            title={data.priceTtile}
          />
        </motion.div>

        {/* FAQ section */}
        <motion.div
          ref={faqRef}
          initial={{ opacity: 0, y: 50 }}
          animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FAQ title={data.faq.title} content={data.faq.content} />
        </motion.div>

        {/* Book section */}
        <motion.div
          ref={bookRef}
          initial={{ opacity: 0, y: 50 }}
          animate={bookInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Book
            title={data.book.title}
            insta={data.book.button[0].label}
            tel={data.book.button[1].label}
            hrefTel={`tel:${data.book.button[1].link}`}
            hrefInsta={data.book.button[0].link}
          />
        </motion.div>

        <Footer />
        <GoBackUpBtn />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App
