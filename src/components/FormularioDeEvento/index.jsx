import {TituloFormulario} from './components/TituloFormulario'
import {CampoDeFormulario} from './components/CampoDeFormulario'
import {Label} from './components/Label'
import {CampoDeEntrada} from './components/CampoDeEntrada'


export function FormularioDeEvento() {
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