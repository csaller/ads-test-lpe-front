import './Titulo.css'

function Titulo() {
  return (
    <div className="titulo">
      <img src="./logo.webp" alt="Logo" className='logo' />
      <div>
        <h1>Garagem S/A</h1>
        <h2>Gerencia de carros e propostas de compras</h2>
      </div>
    </div>
  )
}

export default Titulo