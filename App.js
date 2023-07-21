import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Home';
import NotFound from './Components/NotFound';
import ProjectPage from './Components/ProjectPage';
import AddProject from './Components/AddProject';
import { Provider } from './Components/Context';
import AllProjects from './Components/AllProjects';
import ScrollToTop from './Components/ScrollToTop';
import RecommendationsSection from './Components/Recommendation';

function App() {
  return (
    <Provider>
    <BrowserRouter>
    <ScrollToTop />
         <Navbar />
           <Routes>
             <Route exact path='/' element={<Home />} />
             <Route exact path='/contact' element={<Contact />} />
             <Route exact path='/allprojects' element={<AllProjects />} />
             <Route exact path='/project/add' element={<AddProject />} />
             <Route exact path='/project/:id' element={<ProjectPage />} />
             <Route path='*' element={<NotFound />} />
           </Routes>   
    </BrowserRouter>
    </Provider>
  );
}
export default App;
