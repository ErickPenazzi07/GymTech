import { Link } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Home = () => {
  // Dados de exemplo para os produtos
  const featuredProducts = [
    {
      id: 1,
      name: "Tênis de Corrida Pro",
      price: 299.9,
      image: "https://placehold.co/300x300",
      category: "Roupas",
      discount: 0,
    },
    {
      id: 2,
      name: "Whey Protein 900g",
      price: 149.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      discount: 0,
    },
    {
      id: 3,
      name: "Kit Halteres 10kg",
      price: 199.9,
      image: "https://placehold.co/300x300",
      category: "Equipamentos",
      discount: 0,
    },
    {
      id: 4,
      name: "Camiseta Dry-Fit",
      price: 79.9,
      image: "https://placehold.co/300x300",
      category: "Roupas",
      discount: 0,
    },
  ]

  const promotionProducts = [
    {
      id: 5,
      name: "Shorts de Treino",
      price: 89.9,
      oldPrice: 119.9,
      image: "https://placehold.co/300x300",
      category: "Roupas",
      discount: 25,
    },
    {
      id: 6,
      name: "Creatina 300g",
      price: 99.9,
      oldPrice: 129.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      discount: 23,
    },
    {
      id: 7,
      name: "Corda de Pular Profissional",
      price: 49.9,
      oldPrice: 79.9,
      image: "https://placehold.co/300x300",
      category: "Equipamentos",
      discount: 38,
    },
    {
      id: 8,
      name: "Luvas de Treino",
      price: 59.9,
      oldPrice: 89.9,
      image: "https://placehold.co/300x300",
      category: "Acessórios",
      discount: 33,
    },
  ]

  const otherProducts = [
    {
      id: 9,
      name: "Mochila Esportiva",
      price: 129.9,
      image: "https://placehold.co/300x300",
      category: "Acessórios",
      discount: 0,
    },
    {
      id: 10,
      name: "Garrafa Térmica 1L",
      price: 69.9,
      image: "https://placehold.co/300x300",
      category: "Acessórios",
      discount: 0,
    },
    {
      id: 11,
      name: "Colchonete de Exercícios",
      price: 89.9,
      image: "https://placehold.co/300x300",
      category: "Equipamentos",
      discount: 0,
    },
    {
      id: 12,
      name: "Barra de Proteína",
      price: 9.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      discount: 0,
    },
  ]

  const categories = [
    {
      id: 1,
      name: "Roupas Esportivas",
      image: "https://placehold.co/400x250",
      description: "Roupas de alta performance para todos os esportes",
    },
    {
      id: 2,
      name: "Suplementos",
      image: "https://placehold.co/400x250",
      description: "Suplementos para melhorar seu desempenho e recuperação",
    },
    {
      id: 3,
      name: "Equipamentos",
      image: "https://placehold.co/400x250",
      description: "Equipamentos de qualidade para seu treino",
    },
  ]

  // Componente de produto
  const ProductCard = ({ product }) => {
    return (
      <div className="col-md-6 col-lg-3 mb-4">
        <div className="card card-product h-100">
          {product.discount > 0 && (
            <div className="badge bg-danger position-absolute top-0 end-0 m-2">-{product.discount}%</div>
          )}
          <img src={product.image || "/placeholder.svg"} className="card-img-top" alt={product.name} />
          <div className="card-body d-flex flex-column">
            <span className="text-muted small mb-1">{product.category}</span>
            <h5 className="card-title">{product.name}</h5>
            <div className="mt-auto">
              {product.oldPrice ? (
                <div>
                  <span className="text-decoration-line-through text-muted me-2">R$ {product.oldPrice.toFixed(2)}</span>
                  <span className="fw-bold text-danger">R$ {product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="fw-bold">R$ {product.price.toFixed(2)}</span>
              )}
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
      <div>
      {/* Banner Principal */}
      <div
        className="banner d-flex align-items-center justify-content-center text-white mb-5"
        style={{
            backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://placehold.co/1920x400)",
        }}
        >
        <div className="text-center">
          <h1 className="display-4 fw-bold">Equipamentos Esportivos de Qualidade</h1>
          <p className="lead">Encontre tudo o que você precisa para seu treino</p>
          <button className="btn btn-primary btn-lg mt-3">Ver Ofertas</button>
        </div>
      </div>

      <div className="container">
        {/* Categorias */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Nossas Categorias</h2>
          <div className="row">
            {categories.map((category) => (
                <div key={category.id} className="col-md-4 mb-4">
                <div className="card category-card h-100">
                  <img src={category.image || "/placeholder.svg"} className="card-img-top" alt={category.name} />
                  <div className="card-body text-center">
                    <h3 className="card-title">{category.name}</h3>
                    <p className="card-text">{category.description}</p>
                    <a href="#" className="btn btn-outline-primary">
                      Ver Produtos
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Produtos em Destaque */}
        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Produtos em Destaque</h2>
            <Link to="/destaque" className="btn btn-outline-primary">
              Ver Todos
            </Link>
          </div>
          <div className="row">
            {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Banner de Promoção */}
        <section className="mb-5">
          <div
            className="banner rounded d-flex align-items-center justify-content-center text-white"
            style={{
                backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://via.placeholder.com/1920x400)",
                height: "300px",
            }}
            >
            <div className="text-center">
              <h2 className="display-5 fw-bold">Promoção de Verão</h2>
              <p className="lead">Até 40% de desconto em produtos selecionados</p>
              <button className="btn btn-danger btn-lg mt-3">Aproveite Agora</button>
            </div>
          </div>
        </section>

        {/* Produtos em Promoção */}
        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Ofertas Imperdíveis</h2>
            <Link to="/promocoes" className="btn btn-outline-danger">
              Ver Todas
            </Link>
          </div>
          <div className="row">
            {promotionProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Outros Produtos */}
        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Mais Produtos</h2>
            <Link to="/produtos" className="btn btn-outline-primary">
              Ver Todos
            </Link>
          </div>
          <div className="row">
            {otherProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mb-5 py-5 bg-light rounded">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <h3>Inscreva-se em nossa Newsletter</h3>
                <p className="text-muted">Receba ofertas exclusivas e novidades diretamente no seu e-mail</p>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Seu melhor e-mail" />
                  <button className="btn btn-primary" type="button">
                    Inscrever-se
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />
</>
    
)
}

export default Home
