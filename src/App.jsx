import { React } from 'react'
import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import img1 from './assets/perfil-1.png';
import img2 from './assets/perfil-2.png';


function App() {

  return (
    <div className='bg-slate-100'>
      <Header />
      <Main 
      alt='Hola'
      title='Laravel'
      caption='Aprendiendo laravel'
      autor='Juan Mendez'
      fecha='24 abril 2024'
      imagen={img1} />
      <Main 
      alt='Prueba 2'
      title='Tailwind'
      caption='Estoy aprendiendo sobre Tailwind'
      autor='Ivan Ovando'
      fecha='18 agosto 2024'
      imagen={img2} />
    </div>
  )
}

export default App
