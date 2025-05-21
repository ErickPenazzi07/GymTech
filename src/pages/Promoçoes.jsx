import React from 'react'
import { useState } from "react"
import Footer from '../components/Footer'
import Header from '../components/Header'
const Promoçoes = () => {
        // Estado para os filtros
        const [priceRange, setPriceRange] = useState([0, 500])
        const [selectedCategories, setSelectedCategories] = useState([])
        const [sortBy, setSortBy] = useState("discount")
      
        // Dados de exemplo para os produtos em promoção
        const promotionProducts = [
          {
            id: 5,
            name: "Shorts de Treino",
            price: 89.9,
            oldPrice: 119.9,
            image: "https://placehold.co/300x300",
            category: "Roupas",
            discount: 25,
            description: "Shorts leves e confortáveis para treinos intensos.",
          },
          {
            id: 6,
            name: "Creatina 300g",
            price: 99.9,
            oldPrice: 129.9,
            image: "https://placehold.co/300x300",
            category: "Suplementos",
            discount: 23,
            description: "Suplemento para aumento de força e desempenho nos treinos.",
          },
          {
            id: 7,
            name: "Corda de Pular Profissional",
            price: 49.9,
            oldPrice: 79.9,
            image: "https://placehold.co/300x300",
            category: "Equipamentos",
            discount: 38,
            description: "Corda de pular com rolamento para treinos de alta intensidade.",
          },
          {
            id: 8,
            name: "Luvas de Treino",
            price: 59.9,
            oldPrice: 89.9,
            image: "https://placehold.co/300x300",
            category: "Acessórios",
            discount: 33,
            description: "Luvas para proteção das mãos durante treinos com peso.",
          },
          {
            id: 13,
            name: "Camiseta Esportiva",
            price: 49.9,
            oldPrice: 79.9,
            image: "https://placehold.co/300x300",
            category: "Roupas",
            discount: 38,
            description: "Camiseta com tecido que absorve o suor para maior conforto.",
          },
          {
            id: 14,
            name: "Whey Protein 900g",
            price: 119.9,
            oldPrice: 149.9,
            image: "https://placehold.co/300x300",
            category: "Suplementos",
            discount: 20,
            description: "Suplemento proteico para recuperação muscular pós-treino.",
          },
          {
            id: 15,
            name: "Bola de Pilates",
            price: 69.9,
            oldPrice: 99.9,
            image: "https://placehold.co/300x300",
            category: "Equipamentos",
            discount: 30,
            description: "Bola para exercícios de pilates e fortalecimento do core.",
          },
          {
            id: 16,
            name: "Mochila Esportiva",
            price: 89.9,
            oldPrice: 129.9,
            image: "https://placehold.co/300x300",
            category: "Acessórios",
            discount: 31,
            description: "Mochila resistente com compartimentos para seus equipamentos.",
          },
          {
            id: 17,
            name: "Legging de Compressão",
            price: 79.9,
            oldPrice: 119.9,
            image: "https://placehold.co/300x300",
            category: "Roupas",
            discount: 33,
            description: "Legging de compressão para melhor circulação durante os exercícios.",
          },
          {
            id: 18,
            name: "BCAA 2:1:1 - 90 cápsulas",
            price: 59.9,
            oldPrice: 89.9,
            image: "https://placehold.co/300x300",
            category: "Suplementos",
            discount: 33,
            description: "Aminoácidos essenciais para recuperação muscular.",
          },
          {
            id: 19,
            name: "Kit Elásticos de Resistência",
            price: 79.9,
            oldPrice: 129.9,
            image: "https://placehold.co/300x300",
            category: "Equipamentos",
            discount: 38,
            description: "Kit com 5 elásticos de diferentes resistências para treino funcional.",
          },
          {
            id: 20,
            name: "Garrafa Térmica 1L",
            price: 49.9,
            oldPrice: 69.9,
            image: "https://placehold.co/300x300",
            category: "Acessórios",
            discount: 29,
            description: "Garrafa térmica que mantém sua bebida gelada por até 24 horas.",
          },
        ]
      
        // Lista de categorias disponíveis
        const categories = ["Roupas", "Suplementos", "Equipamentos", "Acessórios"]
      
        // Função para alternar a seleção de categoria
        const toggleCategory = (category) => {
          if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category))
          } else {
            setSelectedCategories([...selectedCategories, category])
          }
        }
      
        // Filtrar produtos com base nos filtros selecionados
        const filteredProducts = promotionProducts
          .filter((product) => {
            // Filtro de preço
            if (product.price < priceRange[0] || product.price > priceRange[1]) {
              return false
            }
            // Filtro de categoria
            if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
              return false
            }
            return true
          })
          .sort((a, b) => {
            // Ordenação
            switch (sortBy) {
              case "price-asc":
                return a.price - b.price
              case "price-desc":
                return b.price - a.price
              case "discount":
                return b.discount - a.discount
              default:
                return 0
            }
          })
            // Componente de produto
  const ProductCard = ({ product }) => {
    return (
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card card-product h-100">
          <div className="badge bg-danger position-absolute top-0 end-0 m-2">-{product.discount}%</div>
          <img src={product.image || "/placeholder.svg"} className="card-img-top" alt={product.name} />
          <div className="card-body d-flex flex-column">
            <span className="text-muted small mb-1">{product.category}</span>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text text-muted small">{product.description}</p>
            <div className="mt-auto">
              <div>
                <span className="text-decoration-line-through text-muted me-2">R$ {product.oldPrice.toFixed(2)}</span>
                <span className="fw-bold text-danger">R$ {product.price.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-100 mt-3">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    )
  }


  return (
    <>
    <Header />
    <div className="container py-5">
      {/* Banner de Promoções */}
      <div
        className="banner rounded d-flex align-items-center justify-content-center text-white mb-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220, 53, 69, 0.8), rgba(220, 53, 69, 0.8)), url(https://via.placeholder.com/1920x400)",
          height: "300px",
        }}
      >
        <div className="text-center">
          <h1 className="display-4 fw-bold">Ofertas Imperdíveis</h1>
          <p className="lead">Aproveite descontos de até 40% em produtos selecionados</p>
          <div className="mt-4">
            <span className="badge bg-light text-danger me-2 p-2">FRETE GRÁTIS</span>
            <span className="badge bg-light text-danger me-2 p-2">ATÉ 40% OFF</span>
            <span className="badge bg-light text-danger p-2">COMPRE 2 LEVE 3</span>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Filtros */}
        <div className="col-lg-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="mb-3">Filtros</h5>

              {/* Filtro de Preço */}
              <div className="mb-4">
                <h6>Faixa de Preço</h6>
                <div className="d-flex align-items-center mb-2">
                  <span>R$ {priceRange[0]}</span>
                  <span className="mx-2">-</span>
                  <span>R$ {priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="500"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                />
              </div>

              {/* Filtro de Categoria */}
              <div className="mb-4">
                <h6>Categorias</h6>
                {categories.map((category) => (
                  <div className="form-check" key={category}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <label className="form-check-label" htmlFor={`category-${category}`}>
                      {category}
                    </label>
                  </div>
                ))}
              </div>

              {/* Filtro de Desconto */}
              <div className="mb-4">
                <h6>Desconto</h6>
                <div className="d-flex flex-wrap gap-2">
                  <button className="btn btn-sm btn-outline-danger">10%+</button>
                  <button className="btn btn-sm btn-outline-danger">20%+</button>
                  <button className="btn btn-sm btn-outline-danger">30%+</button>
                  <button className="btn btn-sm btn-outline-danger">40%+</button>
                </div>
              </div>

              {/* Botão para limpar filtros */}
              <button
                className="btn btn-outline-secondary w-100"
                onClick={() => {
                  setPriceRange([0, 500])
                  setSelectedCategories([])
                }}
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        </div>

        {/* Lista de Produtos */}
        <div className="col-lg-9">
          {/* Cabeçalho com contagem e ordenação */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="mb-0">
              Mostrando <strong>{filteredProducts.length}</strong> produtos em promoção
            </p>
            <div className="d-flex align-items-center">
              <label htmlFor="sort" className="me-2">
                Ordenar por:
              </label>
              <select id="sort" className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="discount">Maior Desconto</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
            </div>
          </div>

          {/* Grid de Produtos */}
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
              <div className="col-12 text-center py-5">
                <i className="bi bi-emoji-frown display-1 text-muted"></i>
                <h3 className="mt-3">Nenhum produto encontrado</h3>
                <p className="text-muted">Tente ajustar seus filtros para encontrar o que procura.</p>
              </div>
            )}
          </div>

          {/* Paginação */}
          {filteredProducts.length > 0 && (
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                    Anterior
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Próxima
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>

      {/* Seção de Newsletter */}
      <section className="mt-5 py-5 bg-light rounded">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h3>Receba Ofertas Exclusivas</h3>
              <p className="text-muted">
                Inscreva-se em nossa newsletter e seja o primeiro a saber sobre novas promoções
              </p>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Seu melhor e-mail" />
                <button className="btn btn-danger" type="button">
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Promoçoes