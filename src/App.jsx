import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormularioDeEvento } from './components/FormularioDeEvento'

// NO REACT, COMPONENTES SÃO FUNÇÕES
// props é um objeto
//props.algumacoisa

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
      <FormularioDeEvento />
    </main>
  )
  
}

export default App
