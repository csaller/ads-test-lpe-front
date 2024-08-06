import { FaCheckCircle } from "react-icons/fa";
import './ItemLista.css'
import NovaProposta from './NovaProposta';
import { Modal } from 'react-responsive-modal'
import { useState } from "react"

function ItemLista({ carro, carros, setCarros }) {
  const [open, setOpen] = useState(false)

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2
  })

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  return (
    <div className="grid-item">
      <div className='foto-container'>
        <img src={carro.urlFoto} alt="Carro" />
      </div>
      <div>
        <h3>{carro.marca} {carro.modelo} - {carro.ano}</h3>
        <h4>Valor: {formatter.format(carro.preco)}</h4>
        <p className='comentario'>{carro.comentarios}</p>
        {!carro.data ?
          <div>
            <p><button onClick={onOpenModal}>
              Criar uma proposta <FaCheckCircle />
            </button></p>
            <Modal open={open} onClose={onCloseModal} center>
              <NovaProposta carros={carros} setCarros={setCarros} />
            </Modal>

          </div> :
          <div>
            <h4>Data do test drive:</h4>
            <p className='agendamento'>{new Date(carro.data).toLocaleDateString('pt-BR')}</p>
          </div>
        }
      </div>
    </div>
  )
}

export default ItemLista