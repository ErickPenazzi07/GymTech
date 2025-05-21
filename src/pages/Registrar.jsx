import React from 'react'
import { Link } from "react-router"
import Header from '../components/Header'
import Footer from '../components/Footer'

const Registrar = () => {
  return (
    <>
    <Header />
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Criar Conta</h2>

              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="firstName" className="form-label">
                      Nome
                    </label>
                    <input type="text" className="form-control" id="firstName" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Sobrenome
                    </label>
                    <input type="text" className="form-control" id="lastName" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input type="email" className="form-control" id="email" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="cpf" className="form-label">
                    CPF
                  </label>
                  <input type="text" className="form-control" id="cpf" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Telefone
                  </label>
                  <input type="tel" className="form-control" id="phone" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Senha
                  </label>
                  <input type="password" className="form-control" id="password" required />
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirmar Senha
                  </label>
                  <input type="password" className="form-control" id="confirmPassword" required />
                </div>

                <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input" id="termsCheck" required />
                  <label className="form-check-label" htmlFor="termsCheck">
                    Concordo com os <a href="#">Termos de Uso</a> e <a href="#">Política de Privacidade</a>
                  </label>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Criar Conta
                  </button>
                </div>
              </form>

              <div className="mt-4 text-center">
                <p>
                  Já tem uma conta? <Link to="/login">Faça login</Link>
                </p>
              </div>

              <div className="mt-4">
                <p className="text-center mb-3">Ou cadastre-se com</p>
                <div className="d-flex justify-content-center gap-3">
                  <button className="btn btn-outline-dark flex-grow-1">
                    <i className="bi bi-google me-2"></i> Google
                  </button>
                  <button className="btn btn-outline-primary flex-grow-1">
                    <i className="bi bi-facebook me-2"></i> Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Registrar