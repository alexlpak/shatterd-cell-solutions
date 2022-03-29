import GlobalStyle from './styles/GlobalStyles.styled';
import ResetStyle from './styles/ResetStyles.styled';
import { themes } from './theme/themes';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/Home';
import Schedule from './pages/Schedule/Schedule';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <ThemeProvider theme={themes}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/schedule' element={<Schedule />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;