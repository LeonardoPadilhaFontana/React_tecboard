import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// NO REACT, COMPONENTES SÃO FUNÇÕES

function FormularioDeEvento() {
  Return (
    <form action="">
      <h2>Preencha para criar um evento</h2>
      <fieldset>
        <label for="nome">Qual o nome do evento</label>
      </fieldset>
    </form>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <img src='/logo.png' className="logo" alt="Vite logo" />
      </header>
      <section>
        <img src="/banner.png " alt="" />
      </section>
    </main>
  )
  
}

export default App
