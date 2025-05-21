import React from 'react'
import { Link } from 'react-router'
const Footer = () => {
  return (
<footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">GymTech</h5>
            <p>Sua loja esportiva completa com os melhores produtos para seu desempenho e bem-estar.</p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-white">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-youtube fs-4"></i>
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Categorias</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Roupas Esportivas
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Suplementos
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Equipamentos
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Acessórios
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Links Úteis</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Sobre Nós
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Política de Privacidade
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">Contato</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i> Av. Esportiva, 1007
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i> contato@gymtech.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i> (11) 99999-9999
              </li>
              <li className="mb-2">
                <i className="bi bi-clock me-2"></i> Seg - Sex: 9h às 18h
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} GymTech. Todos os direitos reservados.</p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <img src="https://placehold.co/50x30" alt="Visa" className="ms-2" />
            <img src="https://placehold.co/50x30" alt="Mastercard" className="ms-2" />
            <img src="https://placehold.co/50x30" alt="PayPal" className="ms-2" />
            <img src="https://placehold.co/50x30" alt="Pix" className="ms-2" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer