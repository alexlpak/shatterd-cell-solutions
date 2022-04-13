import GlobalStyle from './styles/GlobalStyles.styled';
import ResetStyle from './styles/ResetStyles.styled';
import { themes } from './theme/themes';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/Home';
import Schedule from './pages/Schedule/Schedule';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignInWithEmail from './components/SignInWithEmail';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ResetPassword from './components/ResetPassword';
import UpdateProfile from './components/UpdateProfile';
import { FormProvider } from './contexts/FormContext';
import { WindowWidthProvider } from './contexts/WindowWidthContext';

const App = () => {
  return (
    <>
        <ResetStyle />
        <GlobalStyle />
        <AuthProvider>
        <WindowWidthProvider>
          <FormProvider>
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
          </FormProvider>
        </WindowWidthProvider>
        </AuthProvider>
    </>
  );
}

export default App;