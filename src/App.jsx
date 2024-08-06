import Titulo from "./components/Titulo"
import ItemLista from "./components/ItemLista"
import 'react-responsive-modal/styles.css'

import './App.css'
import { useEffect, useState } from "react"

function App() {
  const [carros, setCarros] = useState([])


  useEffect(() => {
    async function getCarros() {
      const response = await fetch("http://localhost:3001/v1/veiculo")
      const dados = await response.json()
      setCarros(dados)
    }
    getCarros()
  }, [])

  const listaCarros = carros.map(carro => (
    <ItemLista key={carro.id} carro={carro} 
       carros={carros} setCarros={setCarros} />
  ))

  return (
    <>
      <Titulo />
      <div className="container">
        <div className="lista-botao">
          <h1>Lista dos carros cadastrados</h1>
        </div>
        <div className="grid-container">
          {listaCarros}
        </div>
      </div>
    </>
  )
}

export default App
