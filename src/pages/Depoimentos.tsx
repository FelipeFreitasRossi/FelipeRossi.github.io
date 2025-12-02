import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Quote } from 'lucide-react';

export default function Depoimentos() {
  const depoimentos = [
    {
      nome: 'Maria Silva',
      cargo: 'CEO',
      empresa: 'TechCorp Solutions',
      foto: '👩‍💼',
      texto: 'Trabalhamos com a EmpresaPro há mais de 2 anos e os resultados são extraordinários. Triplicamos nosso faturamento e melhoramos drasticamente nossa eficiência operacional. A equipe é extremamente profissional e sempre disponível.',
      estrelas: 5,
      destaque: true
    },
    {
      nome: 'João Santos',
      cargo: 'Diretor de TI',
      empresa: 'Indústrias Unidas',
      foto: '👨‍💼',
      texto: 'A implementação foi rápida e sem dores de cabeça. O suporte técnico é excepcional, sempre resolvendo qualquer questão em tempo recorde. Recomendo fortemente!',
      estrelas: 5,
      destaque: false
    },
    {
      nome: 'Ana Costa',
      cargo: 'Fundadora',
      empresa: 'StartupHub',
      foto: '👩‍🎓',
      texto: 'Como startup, precisávamos de soluções escaláveis e econômicas. A EmpresaPro entendeu perfeitamente nossas necessidades e entregou além das expectativas. Hoje somos uma referência no mercado!',
      estrelas: 5,
      destaque: false
    },
    {
      nome: 'Carlos Oliveira',
      cargo: 'Gerente de Projetos',
      empresa: 'Construtora Alpha',
      foto: '👨‍🔧',
      texto: 'A transformação digital da nossa empresa só foi possível graças à expertise da EmpresaPro. Reduzi mos custos em 40% e aumentamos a produtividade significativamente.',
      estrelas: 5,
      destaque: false
    },
    {
      nome: 'Patricia Lima',
      cargo: 'Diretora Comercial',
      empresa: 'Varejo Premium',
      foto: '👩‍💻',
      texto: 'O sistema de e-commerce desenvolvido pela EmpresaPro revolucionou nossas vendas online. Interface intuitiva, rápida e segura. Nossos clientes adoram!',
      estrelas: 5,
      destaque: true
    },
    {
      nome: 'Roberto Mendes',
      cargo: 'CTO',
      empresa: 'FinTech Brasil',
      foto: '👨‍💻',
      texto: 'Segurança e performance eram nossas prioridades. A EmpresaPro entregou uma solução robusta que atende todas as exigências regulatórias. Parceria de longo prazo garantida!',
      estrelas: 5,
      destaque: false
    },
    {
      nome: 'Fernanda Rocha',
      cargo: 'Gerente de Marketing',
      empresa: 'Agência Criativa',
      foto: '👩‍🎨',
      texto: 'O dashboard de analytics que desenvolveram mudou completamente nossa forma de trabalhar. Decisões baseadas em dados nunca foram tão fáceis. Equipe top!',
      estrelas: 5,
      destaque: false
    },
    {
      nome: 'Lucas Ferreira',
      cargo: 'Proprietário',
      empresa: 'Restaurante Gourmet',
      foto: '👨‍🍳',
      texto: 'O aplicativo de delivery que criaram para nós aumentou nossas vendas em 200%! Interface linda, fácil de usar e integração perfeita com nossa operação.',
      estrelas: 5,
      destaque: false
    },
    {
      nome: 'Juliana Martins',
      cargo: 'Coordenadora Acadêmica',
      empresa: 'Instituto de Ensino',
      foto: '👩‍🏫',
      texto: 'A plataforma EAD desenvolvida superou todas as expectativas. Nossos alunos têm uma experiência incrível e conseguimos escalar nossos cursos nacionalmente.',
      estrelas: 5,
      destaque: true
    }
  ];

  const estatisticas = [
    { numero: '500+', label: 'Clientes Satisfeitos' },
    { numero: '98%', label: 'Taxa de Satisfação' },
    { numero: '1000+', label: 'Projetos Entregues' },
    { numero: '24/7', label: 'Suporte Disponível' }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ⭐ Depoimentos
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            O que nossos clientes{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              dizem sobre nós
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram seus negócios com nossas soluções
          </p>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {estatisticas.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.numero}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid de Depoimentos */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  depoimento.destaque
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white scale-105 shadow-2xl'
                    : 'bg-white border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl'
                }`}
              >
                {depoimento.destaque && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                      DESTAQUE
                    </div>
                  </div>
                )}

                <Quote
                  className={`mb-4 ${depoimento.destaque ? 'text-blue-200' : 'text-blue-600'}`}
                  size={40}
                />

                <div className="flex gap-1 mb-4">
                  {[...Array(depoimento.estrelas)].map((_, i) => (
                    <Star
                      key={i}
                      className={`${depoimento.destaque ? 'text-yellow-300 fill-yellow-300' : 'text-yellow-400 fill-yellow-400'}`}
                      size={20}
                    />
                  ))}
                </div>

                <p className={`mb-6 leading-relaxed italic ${depoimento.destaque ? 'text-blue-50' : 'text-gray-700'}`}>
                  "{depoimento.texto}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t ${depoimento.destaque ? 'border-blue-400' : 'border-gray-200'}">
                  <div className="text-5xl">{depoimento.foto}</div>
                  <div>
                    <div className={`font-bold ${depoimento.destaque ? 'text-white' : 'text-gray-900'}`}>
                      {depoimento.nome}
                    </div>
                    <div className={`text-sm ${depoimento.destaque ? 'text-blue-100' : 'text-gray-600'}`}>
                      {depoimento.cargo}
                    </div>
                    <div className={`text-sm font-semibold ${depoimento.destaque ? 'text-blue-200' : 'text-blue-600'}`}>
                      {depoimento.empresa}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeo Depoimento (Placeholder) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Veja o que nossos clientes têm a dizer
            </h2>
            <p className="text-xl text-gray-600">
              Histórias de sucesso em vídeo
            </p>
          </div>

          <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
              </div>
              <p className="text-2xl font-bold">Depoimento em Vídeo</p>
              <p className="text-blue-100">Clique para assistir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Sucesso */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Casos de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Resultados mensuráveis que comprovam nosso compromisso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                empresa: 'TechCorp',
                resultado: '+300%',
                metrica: 'Aumento de Faturamento',
                periodo: 'em 12 meses',
                cor: 'from-green-500 to-emerald-500'
              },
              {
                empresa: 'Varejo Premium',
                resultado: '+200%',
                metrica: 'Crescimento em Vendas Online',
                periodo: 'em 6 meses',
                cor: 'from-blue-500 to-cyan-500'
              },
              {
                empresa: 'StartupHub',
                resultado: '40%',
                metrica: 'Redução de Custos',
                periodo: 'no primeiro ano',
                cor: 'from-purple-500 to-pink-500'
              }
            ].map((caso, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition">
                <div className={`w-16 h-16 bg-gradient-to-br ${caso.cor} rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-6`}>
                  {caso.resultado}
                </div>
                <h3 className="text-xl font-bold mb-2">{caso.metrica}</h3>
                <p className="text-gray-600 mb-4">{caso.periodo}</p>
                <div className="text-blue-600 font-semibold">{caso.empresa}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Seja o próximo caso de sucesso!
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Junte-se a centenas de empresas que já transformaram seus negócios
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition"
          >
            Começar Minha Transformação
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}