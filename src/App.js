import './App.css';
import Home from "./Home.js"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header.js"
import Footer from './Footer';
import Contact from './Contact';
import BookNow from './BookNow';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import StorePolicies from './StorePolicies';
import Shop from './Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/> 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Contact" element={<Contact bkgCol="#F7F7F7"/>}/>
            <Route path="/Book-Now" element={<BookNow/>}/>
            <Route path="/Shop" element={<Shop/>}/>
            <Route path="/Testimonials" element={<Testimonials/>}/>
            <Route path="/FAQ" element={<FAQ/>}/>
            <Route path="/Store-Policies" element={<StorePolicies/>}/>
          </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
