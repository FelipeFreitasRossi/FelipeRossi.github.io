import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [filtro, setFiltro] = useState('Todos');
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const categorias = ['Todos', 'Landing Pages', 'ChatBots', 'Sistemas Web', 'Apps Mobile'];

  const menuItems = [
    { nome: 'Início', path: '/' },
    { nome: 'Serviços', path: '/servicos' },
    { nome: 'Portfólio', path: '/portfolio' },
    { nome: 'Sobre', path: '/sobre' },
    { nome: 'Contato', path: '/contato' }
  ];

  // Detectar scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projetos = [
    {
      titulo: 'Landing Page - Clínica Médica',
      categoria: 'Landing Pages',
      descricao: 'Landing page moderna e responsiva para uma clínica médica, com agendamento online integrado.',
      imagem: '🏥',
      tecnologias: ['HTML', 'CSS', 'JavaScript', "Java", "SQL"],
      resultado: '+100% em agendamentos',
      link: '#',
      github: 'https://github.com/FelipeFreitasRossi/Clinica',
      valor: 'R$ 5.000'
    },
    {
      titulo: 'ChatBot para WhatsApp',
      categoria: 'ChatBots',
      descricao: 'Bot inteligente para WhatsApp que automatiza atendimento, rastreia pedidos e processa vendas.',
      imagem: '🤖',
      tecnologias: ['Node.js', 'Python'],
      resultado: '90% de redução no tempo de resposta',
      link: '#',
      github: 'https://github.com/FelipeFreitasRossi/Chatbot',
      valor: 'R$ 2.000'
    },
    {
      titulo: 'Gerenciamento de Estoque',
      categoria: 'Sistemas Web',
      descricao: 'Gestão de ferramentas na área da mecânica e elétrica em tempo real.',
      imagem: '📊',
      tecnologias: ['HTML', 'CSS', 'JavaScript', "Java", "SQL"],
      resultado: '90% mais eficiência',
      link: '#',
      github: 'https://github.com/SENAISP-Unid601-Projetos/ControlTech',
      valor: 'R$ 9.500'
    },
    {
      titulo: 'Landing Page - Worshop Senai 2025',
      categoria: 'Landing Pages',
      descricao: 'Site feito para divulgação de WorkShop da escola SENAI - São Carlos 2025.',
      imagem: '🏢',
      tecnologias: ['HTML', 'JavaScript', 'CSS'],
      resultado: '+450 leads buscados',
      link: '#',
      github: 'https://github.com/FelipeFreitasRossi/ProjetoSenai',
      valor: 'R$ 3.500'
    },
  ];

  const projetosFiltrados = filtro === 'Todos' 
    ? projetos 
    : projetos.filter(p => p.categoria === filtro);

  return (
    <div className="bg-white">
      {/* Header/Navbar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg py-3' 
            : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img 
              src="/logo.png" 
              alt="Felipe Freitas Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                // Se a imagem não carregar, mostra um fallback
                e.currentTarget.style.display = 'none';
                const nextEl = e.currentTarget.nextElementSibling;
                if (nextEl) nextEl.classList.remove('hidden');
              }}
            />
            {/* Fallback se a logo não carregar */}
            <div className="hidden w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <img src="https://i.postimg.cc/Vsbx9RcS/FFR-(3).jpg" alt="logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Felipe Freitas</span>
              <span className="text-xs text-gray-600">Desenvolvedor Full Stack</span>
            </div>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`font-medium transition ${
                  window.location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.nome}
              </a>
            ))}
            <a
              href="/contato"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile Expandido */}
        {menuAberto && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="flex flex-col p-6 gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`text-left font-medium transition ${
                    window.location.pathname === item.path
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setMenuAberto(false)}
                >
                  {item.nome}
                </a>
              ))}
              <a
                href="/contato"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-center"
                onClick={() => setMenuAberto(false)}
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Meu Portfólio
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Projetos que{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              geram resultados
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos projetos que desenvolvi e os resultados alcançados 
            pelos meus clientes
          </p>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { numero: '20+', label: 'Projetos Entregues' },
            { numero: '100%', label: 'Clientes Satisfeitos' },
            { numero: '100%', label: 'Projetos no Prazo' },
            { numero: '1+', label: 'Anos de Experiência' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.numero}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setFiltro(categoria)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition text-sm md:text-base ${
                  filtro === categoria
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projetosFiltrados.map((projeto, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-600 hover:shadow-2xl transition-all duration-300"
              >
                {/* Imagem do Projeto (placeholder com emoji) */}
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 aspect-video flex items-center justify-center text-6xl md:text-8xl group-hover:scale-105 transition">
                  {projeto.imagem}
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                    {projeto.categoria}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{projeto.titulo}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{projeto.descricao}</p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projeto.tecnologias.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Resultado */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-4">
                    <p className="text-sm font-semibold text-green-700">
                      📈 {projeto.resultado}
                    </p>
                  </div>

                  {/* Valor */}
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-gray-600">Investimento:</p>
                    <p className="text-xl font-bold text-gray-900">{projeto.valor}</p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      Ver Demo
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={projeto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition"
                      title="Ver no GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projetosFiltrados.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl md:text-2xl text-gray-600">
                Nenhum projeto encontrado nesta categoria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Depoimento Destaque */}
      <section className="py-12 md:py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="text-4xl md:text-6xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-lg md:text-2xl font-bold text-gray-900 mb-4 italic">
               "O Felipe entregou muito mais do que prometeu. Os projetos de controle 
               de máquinas para a minha empresa ficaram ótimos e me ajudaram a gerenciar tudo muito melhor."
              </p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-4xl md:text-5xl"></div>
              <div>
                <div className="font-bold text-base md:text-lg">Neverton Marciano</div>
                <div className="text-sm md:text-base text-gray-600">Empresa Grupo Marciano - São Carlos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Seu projeto pode ser o próximo!
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade
          </p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-2xl transition"
          >
            Começar Meu Projeto
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}