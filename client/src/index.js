import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,  Routes, Route} from "react-router-dom";
import About from './view/about';
import Contact from './view/contact';
import Services from './view/services';
import Home from './view/home';
import Header from './components/header';
import Footer from './components/footer';
import Process from './view/process';
import FAQ from './view/faq';
import BLOG from './view/blog';
import CASE from './view/caseStudies';
import My404Component from './view/error';
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/services" element={<Services />} />
          <Route  path="/process" element={<Process />} />
          <Route  path="/faq" element={<FAQ />} />
          <Route  path="/blog" element={<BLOG />} />
          <Route  path="/case-studies" element={<CASE />} />
          <Route path='*' exact={true} element={<My404Component />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
