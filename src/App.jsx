import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './utils/theme'
import { Wrapper } from './components/Wrapper'
import Header from './components/Header'
import data from "./utils/data/data.json";
function App() {

console.log(data.header.titleSrc)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header 
          image={data.header.titleSrc}
          title={data.header.subtitle}
          />
      </Wrapper>
    </ThemeProvider>

      
  )
}

export default App
