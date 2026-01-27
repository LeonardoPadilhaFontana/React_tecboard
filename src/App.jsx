import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// NO REACT, COMPONENTES SÃO FUNÇÕES
// props é um objeto
//props.algumacoisa
function TituloFormulario({children}) {
  return (
    <h2>{children}</h2>
  )
}

function CampoDeFormulario({children}) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

function Label({children}, htmlFor) {
  return (
    <label htmlFor={htmlFor}>{children}</label>
  )
}

function CampoDeEntrada(props) {
  return (
    <input {...props} />
  )
}

function FormularioDeEvento() {
  return (
    <form action="" className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento
      </TituloFormulario> 
      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento
        </Label>
        <CampoDeEntrada type="text" id="nome" name="nome" placeholder="Summer Dev Hits" />
      </CampoDeFormulario>
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
      <FormularioDeEvento />
    </main>
  )
  
}

export default App
