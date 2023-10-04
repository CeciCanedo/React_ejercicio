import { useState } from 'react'
import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Ceci from './assets/Ceci.png'
import { Route, Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Main from './Components/Main.jsx'
import Astros from './Components/Astros.jsx'
import './App.css'

function App() {

  const linksData=[
    { name: 'Home', href: '/'},
    { name: 'About', href: '/'},
    { name: 'Astros', href: '/'},
  ]

  const nombre="Cecilia Cañedo Lozada"
  const edad= 24 + " años"
  const correo= "ceciliacanedolozada@gmail.com"
  const descripcion="Me gustan los patos y los perritos. Mi color favorito es el rosa."


  return (
    <>

    <BrowserRouter>
     <Navbar header='Navbar' links={linksData} />
     <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<Astros />} path='/Astros' />

      </Routes>
      </BrowserRouter>
      
      <div className='contenedor'>
      <div className='caja'>
        <img src={Ceci} className='Picture' />
        <h4>{nombre}</h4>
        <h4>{edad}</h4>
        <p>{correo}</p>
        <p>{descripcion}</p>
      </div>
     </div>

    </>
  );
}

export default App
