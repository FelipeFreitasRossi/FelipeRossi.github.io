import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ArrowRight, Check, 
  Rocket, Shield, Zap, Users, Star, TrendingUp,
  Mail, Phone, MapPin, Linkedin, Instagram, Facebook,
  Award, Target, Clock, Github
} from 'lucide-react';

export default function LandingPage() {
  // Estados - são variáveis que podem mudar e atualizar a tela
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [secaoVisivel, setSecaoVisivel] = useState(''); // Estado não usado, mas mantido

  // Efeito que roda quando a página carrega
  useEffect(() => {
    // Função que detecta quando você rola a página
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Adiciona o "ouvinte" de scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o "ouvinte" quando sair da página (limpeza)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolar suavemente até uma seção
  const rolarPara = (id: string) => { // Tipagem adicionada (TypeScript)
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
      setMenuAberto(false);
    }
  };

  // Dados dos serviços
  const servicos = [
    {
      icone: <Rocket className="w-12 h-12" />,
      titulo: 'Consultoria Estratégica',
      descricao: 'Planejamento completo para impulsionar seu negócio com as melhores práticas do mercado.',
      delay: '0'
    },
    {
      icone: <Shield className="w-12 h-12" />,
      titulo: 'Segurança Garantida',
      descricao: 'Protocolos avançados de segurança para proteger seus dados e operações.',
      delay: '100'
    },
    {
      icone: <Zap className="w-12 h-12" />,
      titulo: 'Resultados Rápidos',
      descricao: 'Metodologia ágil que entrega resultados mensuráveis em tempo recorde.',
      delay: '200'
    }
  ];

  // Dados dos planos
  const planos = [
    {
      nome: 'Básico',
      preco: '1.499',
      periodo: '/mês',
      recursos: [
        'Até 10 usuários',
        'Suporte por email',
        'Relatórios mensais',
        'Armazenamento 10GB'
      ],
      popular: false
    },
    {
      nome: 'Profissional',
      preco: '2.999',
      periodo: '/mês',
      recursos: [
        'Usuários ilimitados',
        'Suporte prioritário 24/7',
        'Relatórios em tempo real',
        'Armazenamento 100GB',
        'API personalizada',
        'Treinamento incluído'
      ],
      popular: true
    },
    {
      nome: 'Enterprise',
      preco: 'Personalizado',
      periodo: '',
      recursos: [
        'Tudo do Profissional',
        'Gerente de conta dedicado',
        'Armazenamento ilimitado',
        'Integrações customizadas',
        'SLA garantido',
        'Consultoria estratégica'
      ],
      popular: false
    }
  ];

  // Dados dos depoimentos
  const depoimentos = [
    {
      nome: 'Maria Silva',
      cargo: 'CEO da TechCorp',
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      texto: 'Triplicamos nosso faturamento em apenas 6 meses. Serviço impecável!',
      estrelas: 5
    },
    {
      nome: 'João Santos',
      cargo: 'Diretor de Marketing',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      texto: 'A melhor decisão que tomamos foi contratar esta empresa. Recomendo!',
      estrelas: 5
    },
    {
      nome: 'Ana Costa',
      cargo: 'Empreendedora',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      texto: 'Profissionalismo e resultados reais. Superou todas as expectativas!',
      estrelas: 5
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* NAVEGAÇÃO FIXA NO TOPO */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 
            ? 'bg-white shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <img src="https://i.postimg.cc/wjdHbFLm/Evolua-(3).jpg" alt="" />
            </div>
            <span className="text-2xl font-bold text-gray-900">EmpresaPro</span>
          </div>

          {/* Menu Desktop - aparece só em telas grandes */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => rolarPara('inicio')} className="hover:text-blue-600 transition">
              Início
            </button>
            <button onClick={() => rolarPara('servicos')} className="hover:text-blue-600 transition">
              Serviços
            </button>
            <button onClick={() => rolarPara('planos')} className="hover:text-blue-600 transition">
              Planos
            </button>
            <button onClick={() => rolarPara('depoimentos')} className="hover:text-blue-600 transition">
              Depoimentos
            </button>
            <button onClick={() => rolarPara('contato')} className="hover:text-blue-600 transition">
              Contato
            </button>
            <button 
              onClick={() => rolarPara('contato')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition"
            >
              Começar Agora
            </button>
          </div>

          {/* Botão do Menu Mobile - aparece só em telas pequenas */}
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
              <button onClick={() => rolarPara('inicio')} className="text-left hover:text-blue-600">
                Início
              </button>
              <button onClick={() => rolarPara('servicos')} className="text-left hover:text-blue-600">
                Serviços
              </button>
              <button onClick={() => rolarPara('planos')} className="text-left hover:text-blue-600">
                Planos
              </button>
              <button onClick={() => rolarPara('depoimentos')} className="text-left hover:text-blue-600">
                Depoimentos
              </button>
              <button onClick={() => rolarPara('contato')} className="text-left hover:text-blue-600">
                Contato
              </button>
              <button 
                onClick={() => rolarPara('contato')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full"
              >
                Começar Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* SEÇÃO INICIAL (HERO) */}
      <section 
        id="inicio"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Lado Esquerdo - Textos */}
          <div 
            className="space-y-6"
            style={{
              opacity: scrollY < 100 ? 1 : 0.5,
              transform: `translateY(${scrollY * 0.1}px)`,
              transition: 'all 0.3s'
            }}
          >
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Líder em Soluções Empresariais
            </div>
             
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transforme seu negócio com{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                soluções profissionais
              </span>
            </h1>
             
            <p className="text-xl text-gray-600 leading-relaxed">
              Aumente sua produtividade, reduza custos e alcance resultados 
              extraordinários com nossa plataforma completa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => rolarPara('contato')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition flex items-center justify-center gap-2 group"
              >
                Solicitar Demonstração
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </button>
              <button 
                onClick={() => rolarPara('servicos')}
                className="border-2 border-gray-300 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition"
              >
                Conhecer Serviços
              </button>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Empresas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">24/7</div>
                <div className="text-sm text-gray-600">Suporte</div>
              </div>
            </div>
          </div>

          {/* Lado Direito - Imagem/Ilustração */}
          <div 
            className="relative"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              transition: 'all 0.3s'
            }}
          >
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Projeto Concluído</div>
                    <div className="text-sm text-gray-600">Cliente XYZ Corp</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Crescimento +150%</div>
                    <div className="text-sm text-gray-600">Últimos 6 meses</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">5.000+ Usuários</div>
                    <div className="text-sm text-gray-600">Ativos mensalmente</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos decorativos flutuantes */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>

        {/* Indicador de Scroll para baixo */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS */}
      <section id="servicos" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Nossos Serviços
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Soluções completas para sua empresa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos um conjunto completo de serviços para transformar seu negócio
            </p>
          </div>

          {/* Grid de Serviços */}
          <div className="grid md:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                // O uso de 'style' para animação de delay pode não ser ideal em todos os ambientes Tailwind
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition">
                  {servico.icone}
                </div>
                <h3 className="text-2xl font-bold mb-4">{servico.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{servico.descricao}</p>
                <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saiba mais <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PLANOS */}
      <section id="planos" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Planos e Preços
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Escolha o plano ideal
            </h2>
            <p className="text-xl text-gray-600">
              Transparência total. Sem taxas escondidas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {planos.map((plano, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 ${
                  plano.popular 
                    ? 'border-4 border-blue-600 shadow-2xl scale-105' 
                    : 'border-2 border-gray-200'
                }`}
              >
                {plano.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plano.nome}</h3>
                  <div className="flex items-end justify-center gap-1 mb-4">
                    <span className="text-5xl font-bold">
                      {plano.preco.includes('Personalizado') ? '' : 'R$'}
                      {plano.preco}
                    </span>
                    <span className="text-gray-600 mb-2">{plano.periodo}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plano.recursos.map((recurso, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{recurso}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => rolarPara('contato')}
                  className={`w-full py-4 rounded-full font-bold transition ${
                    plano.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl'
                      : 'border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  Escolher Plano
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DEPOIMENTOS */}
      <section id="depoimentos" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Depoimentos
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reais de empresas reais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {depoimentos.map((depoimento, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(depoimento.estrelas)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                 
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{depoimento.texto}"
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={depoimento.foto} 
                    alt={depoimento.nome}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-200"
                  />
                  <div>
                    <div className="font-bold">{depoimento.nome}</div>
                    <div className="text-sm text-gray-600">{depoimento.cargo}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Seção de Garantias e Diferenciais */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Garantia de 30 dias</h3>
              <p className="text-gray-600">
                Não ficou satisfeito? Devolvemos 100% do seu investimento
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Resultados mensuráveis</h3>
              <p className="text-gray-600">
                Acompanhe em tempo real o crescimento do seu negócio
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Implementação rápida</h3>
              <p className="text-gray-600">
                Comece a ver resultados em menos de 48 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE CONTATO */}
      <section id="contato" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-12 text-blue-100">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6">
              <Mail className="mx-auto mb-4" size={32} />
              <div className="font-semibold mb-2">Email</div>
              <div className="text-blue-100">contato@empresapro.com</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6">
              <Phone className="mx-auto mb-4" size={32} />
              <div className="font-semibold mb-2">Telefone</div>
              <div className="text-blue-100">(11) 9999-9999</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6">
              <MapPin className="mx-auto mb-4" size={32} />
              <div className="font-semibold mb-2">Endereço</div>
              <div className="text-blue-100">São Paulo, SP</div>
            </div>
          </div>

          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition">
            Falar com Especialista
          </button>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <img src="https://i.postimg.cc/wjdHbFLm/Evolua-(3).jpg" alt="" />                </div>
                <span className="text-xl font-bold">EmpresaPro</span>
              </div>
              <p className="text-gray-400">
                Transformando negócios com tecnologia e inovação.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => rolarPara('inicio')} className="hover:text-white">Sobre</button></li>
                <li><button onClick={() => rolarPara('servicos')} className="hover:text-white">Serviços</button></li>
                <li><button onClick={() => rolarPara('planos')} className="hover:text-white">Planos</button></li>
                <li><button onClick={() => rolarPara('contato')} className="hover:text-white">Contato</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Documentação</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/felipe-de-freitas-rossi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2024 EmpresaPro. Todos os direitos reservados.</p>
             
            {/* Informação do Desenvolvedor - Incluído e Corrigido no Footer */}
            <div className="flex items-center gap-2 text-gray-400">
              <span>Desenvolvedor:</span>
              <a 
                href="https://www.linkedin.com/in/FelipeFreitasRossi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition font-semibold"
              >
                Felipe de Freitas Rossi
              </a>
              <span className="text-gray-600">|</span>
              <a href="https://github.com/FelipeFreitasRossi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div> // Fechamento do elemento div principal
  ); // Fechamento do return
} // Fechamento da função LandingPage