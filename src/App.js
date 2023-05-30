import useFormulario from './hooks/useFormulario'
import Input from './components/Input'

function App() {
  const [formulario, handleChange] = useFormulario({name: '', lastname: ''})

  console.log(formulario)
  return (
   <form>
      <Input
      name="name"
      label="Nombre"
      value={formulario.name}
      onChange={handleChange}
      />
      <Input
      name="lastname"
      label="Apellido"
      value={formulario.lastname}
      onChange={handleChange}
      />
   </form>
  )
}

export default App;
