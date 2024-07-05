import React, {useEffect} from "react";

import './App.css';
import { NavBar } from './componenets/NavBar';
import { Home } from './componenets/Home';
import {Experience} from './componenets/Experience';
import { Skills } from './componenets/Skills';
import { Projects } from './componenets/Projects';
import { Contacts } from './componenets/Contacts';
import Aos from "aos";
import "aos/dist/aos.css"




function App() {
  useEffect(() => {
    Aos.init();
  
   
  }, [])
  
  return (
    
    <div className="App">

      <NavBar />
      
      <div className='container'>
      
      <Home />
              
           <Experience />
              
            
            <Skills />
             
           
            <Projects />
              
            
            <Contacts />
              
            
      
      </div>

      



      
    </div>
    
  );
}

export default App;
