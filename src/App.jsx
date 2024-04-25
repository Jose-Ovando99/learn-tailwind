import { React } from 'react'
import './App.css'
import Header from './components/Header';
import Main from './components/Main';


function App() {

  return (
    <div className='bg-slate-100'>
      <Header />
      <Main 
      alt='Hola'
      title='Laravel'
      caption='Aprendiendo laravel'
      autor='Juan Mendez'
      fecha=' 24 abril 2024' />
    </div>
  )
}

export default App
