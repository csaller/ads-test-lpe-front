import { useForm } from "react-hook-form"
import './NovaProposta.css'

function NovaProposta({propostas, setPropostas}) {
  const { register, handleSubmit, reset } = useForm()

  function cadastraProposta(dados) {
    // TODO
  }

  return (
    <div>
      <h2>Inclusão de propostas</h2>
      <form onSubmit={handleSubmit(cadastraProposta)}>
        <p>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" required size={40}
            {...register("nome")} />
        </p>
        <p>
          <label htmlFor="ano">E-mail</label>
          <input type="email" id="email" required size={20}
            {...register("email")} />
        </p>
        <p>
          <label htmlFor="proposta" className="proposta">
            Proposta
          </label>
          <textarea id="proposta" required cols={60} rows={3}
            {...register("proposta")}></textarea>
        </p>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default NovaProposta