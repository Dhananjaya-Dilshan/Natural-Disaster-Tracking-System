import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import DesastersListComponents from './components/DesastersListComponents';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import DesastersComponents from './components/DesastersComponents';
import AdminLogin from './components/AdminLogin';
import HomePage from './components/HomePage';
import Alart from './components/Alart';
import Educated from './components/Educated';
import DesastersMap from './components/DesastersMap';
import MapViewComponent from './components/MapViewComponent';



function App() {
   
    return (
        <>
        <BrowserRouter>
            <NavigationBar/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/DesastersListComponents" element={<DesastersListComponents />} />
              <Route path="/add-desasater" element={<DesastersComponents />} />
              <Route path="/AdminLogin" element={<AdminLogin />} />
              <Route path="/edit-desasater/:id" element={<DesastersComponents />} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/Alart/" element={<Alart />} />
              <Route path="/DesastersMap" element={<DesastersMap />} />
              <Route path="/Educated" element={<Educated />} />
              <Route path="/MapViewComponent" element={<MapViewComponent />} />
             
    
            </Routes>
          
            
            <Footer/>
        </BrowserRouter>
        </>
    );
}

export default App;
