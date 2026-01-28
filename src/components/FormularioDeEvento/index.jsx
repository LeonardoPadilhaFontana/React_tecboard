import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";



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