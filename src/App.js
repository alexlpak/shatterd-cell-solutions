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

const App = () => {
  return (
    <>
        <ResetStyle />
        <GlobalStyle />
        <AuthProvider>
          <FormProvider>
            <ThemeProvider theme={themes}>
              <Router>
                <Header />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/schedule' element={<PrivateRoute><Schedule /></PrivateRoute>} />
                  <Route path='/signup' element={<SignUp />} />
                  <Route path='/signin' element={<SignIn />} />
                  <Route path='/signin-email' element={<SignInWithEmail />} />
                  <Route path='/reset-password' element={<ResetPassword />} />
                  <Route path='/update-profile' element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
                </Routes>
                <Footer />
              </Router>
            </ThemeProvider>
          </FormProvider>
        </AuthProvider>
    </>
  );
}

export default App;