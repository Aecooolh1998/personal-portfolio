import { Route, Routes } from 'react-router';
import './App.css';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Landing from './pages/Landing';
import MasterPage from './pages/MasterPage';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

function App() {
  return (
    <>
    <MasterPage>
    <Routes>
             <Route path='/' element={<Landing />} />
             <Route path='about-me' element={<AboutMe />} />
             <Route path='projects' element={<Projects />} />
             <Route path='contact-me' element={<ContactMe />} />
             <Route path='*' element={<NotFound />} />
          </Routes>
    </MasterPage>
    </>
  );
}

export default App;
