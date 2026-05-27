import "./App.css"
import { useState } from "react"

function App() {

  const [tipoConta, setTipoConta] = useState("")

  return (

    <div className="container">

      <div className="left-side">

        <div className="overlay">

          <div className="brand">
            <span>🍃</span>
            <h2>Replace</h2>
          </div>

          <h1>
            Evite desperdícios.
            Economize todos os dias.
          </h1>

          <p>
            Conectamos pessoas, mercados e instituições
            para reduzir desperdícios de alimentos.
          </p>

        </div>

      </div>

      <div className="right-side">

        <div className="form-box">

          <h1>Criar Conta</h1>

          <p className="subtitle">
            Preencha os dados abaixo
          </p>

          <form>

            <div className="input-group">

              <label>Tipo de conta</label>

              <select
                value={tipoConta}
                onChange={(e) =>
                  setTipoConta(e.target.value)
                }
              >

                <option value="">
                  Selecione
                </option>

                <option value="pessoa">
                  Pessoa Física
                </option>

                <option value="mercado">
                  Mercado
                </option>

                <option value="ong">
                  ONG / Instituição
                </option>

              </select>

            </div>

            {/* PESSOA */}

            {tipoConta === "pessoa" && (

              <>

                <div className="input-group">
                  <label>Nome</label>

                  <input
                    type="text"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div className="input-group">
                  <label>Email</label>

                  <input
                    type="email"
                    placeholder="Digite seu email"
                  />
                </div>

              </>

            )}

            {/* MERCADO */}

            {tipoConta === "mercado" && (

              <>

                <div className="input-group">
                  <label>Nome do Mercado</label>

                  <input
                    type="text"
                    placeholder="Nome do mercado"
                  />
                </div>

                <div className="input-group">
                  <label>CNPJ</label>

                  <input
                    type="text"
                    placeholder="Digite o CNPJ"
                  />
                </div>

                <div className="input-group">
                  <label>Endereço</label>

                  <input
                    type="text"
                    placeholder="Digite o endereço"
                  />
                </div>

              </>

            )}

            {/* ONG */}

            {tipoConta === "ong" && (

              <>

                <div className="input-group">
                  <label>Nome da Instituição</label>

                  <input
                    type="text"
                    placeholder="Nome da ONG"
                  />
                </div>

                <div className="input-group">
                  <label>CNPJ</label>

                  <input
                    type="text"
                    placeholder="Digite o CNPJ"
                  />
                </div>

                <div className="input-group">
                  <label>Área de atuação</label>

                  <input
                    type="text"
                    placeholder="Ex: alimentação"
                  />
                </div>

              </>

            )}

            {/* SENHA */}

            {tipoConta && (

              <>

                <div className="input-group">
                  <label>Senha</label>

                  <input
                    type="password"
                    placeholder="Digite sua senha"
                  />
                </div>

                <div className="input-group">
                  <label>Confirmar senha</label>

                  <input
                    type="password"
                    placeholder="Confirme sua senha"
                  />
                </div>

                <button>
                  Cadastrar
                </button>

              </>

            )}

          </form>

        </div>

      </div>

    </div>

  )
}

export default App  