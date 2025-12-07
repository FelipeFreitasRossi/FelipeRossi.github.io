import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Zap, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

export default function Inicio() {
  // SUAS 7 TECNOLOGIAS (altere aqui se quiser)
  const tecnologias = [
    'React', 
    'TypeScript', 
    'Node.js', 
    'CSS', 
    'JavaScript', 
    'HTML', 
    'Java',
    'Python',
    'React', 
    'TypeScript', 
    'Node.js', 
    'CSS', 
    'JavaScript', 
    'HTML', 
    'Java',
    'Python',
    'React', 
    'TypeScript', 
    'Node.js', 
    'CSS', 
    'JavaScript', 
    'HTML', 
    'Java',
    'Python',
    'React', 
    'TypeScript', 
    'Node.js', 
    'CSS', 
    'JavaScript', 
    'HTML', 
    'Java',
    'Python'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Lado Esquerdo */}
          <div className="space-y-6">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              👋 Olá, eu sou Felipe de Freitas Rossi
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Desenvolvedor{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Full Stack
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Crio <strong>Landing Pages profissionais</strong>, <strong>ChatBots inteligentes</strong> e 
              soluções web que transformam visitantes em clientes. Especialista em 
              <strong> TypeScript</strong> e <strong>React</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contato"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition flex items-center justify-center gap-2 group"
              >
                Solicitar Orçamento
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-gray-300 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition text-center"
              >
                Ver Portfólio
              </Link>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Projetos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">1+</div>
                <div className="text-sm text-gray-600">Anos Exp.</div>
              </div>
            </div>
          </div>

          {/* Lado Direito - Cartões de Destaque */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Landing Pages</div>
                    <div className="text-sm text-gray-600">A partir de R$ 1.000</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Code2 className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">ChatBots IA</div>
                    <div className="text-sm text-gray-600">Automação inteligente</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Entrega Rápida</div>
                    <div className="text-sm text-gray-600">1-4 dias úteis</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Tecnologias - CARROSSEL INFINITO PERFEITO */}
      <section className="py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 mb-8 font-semibold">
            Tecnologias que domino:
          </p>
          
          <div className="relative overflow-hidden">
            {/* Gradientes de fade nas bordas */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Container do carrossel - SÓ 2 CÓPIAS PARA LOOP PERFEITO */}
            <div className="flex gap-12 animate-scroll-seamless">
              {/* Primeira cópia das 7 tecnologias */}
              {tecnologias.map((tech, index) => (
                <div 
                  key={`first-${index}`}
                  className="text-3xl font-bold text-gray-400 hover:text-blue-600 whitespace-nowrap flex-shrink-0 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
              
              {/* Segunda cópia (para loop infinito sem corte) */}
              {tecnologias.map((tech, index) => (
                <div 
                  key={`second-${index}`}
                  className="text-3xl font-bold text-gray-400 hover:text-blue-600 whitespace-nowrap flex-shrink-0 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes scroll-seamless {
            0% {
              transform: translateX(+90%);
            }
            100% {
              transform: translateX(-1000%);
            }
          }
          
          /* VELOCIDADE: Mude 12s para o que quiser (menor = mais rápido) */
          .animate-scroll-seamless {
            animation: scroll-seamless 40s linear infinite;
          }
          
          // .animate-scroll-seamless:hover {
          //   animation-play-state: paused;
          // }
        `}</style>
      </section>

      {/* Destaques */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por que me contratar?
            </h2>
            <p className="text-xl text-gray-600">
              Diferenciais que garantem o sucesso do seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Qualidade Premium</h3>
              <p className="text-gray-600">
                Código limpo, otimizado e seguindo as melhores práticas do mercado. 
                Seu projeto será escalável e fácil de manter.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white mb-6">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Foco em Resultados</h3>
              <p className="text-gray-600">
                Não entrego apenas código, entrego soluções que convertem visitantes 
                em clientes e geram ROI positivo.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Suporte Contínuo</h3>
              <p className="text-gray-600">
                Comunicação clara e constante. Você sempre saberá o status do seu 
                projeto e poderá tirar dúvidas quando precisar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Como funciona?
            </h2>
            <p className="text-xl text-gray-600">
              Processo simples e transparente do início ao fim
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                numero: '01', 
                titulo: 'Briefing', 
                descricao: 'Conversamos sobre suas necessidades, objetivos e prazos' 
              },
              { 
                numero: '02', 
                titulo: 'Proposta', 
                descricao: 'Envio orçamento detalhado com escopo e cronograma' 
              },
              { 
                numero: '03', 
                titulo: 'Desenvolvimento', 
                descricao: 'Codifico seu projeto com atualizações constantes' 
              },
              { 
                numero: '04', 
                titulo: 'Entrega', 
                descricao: 'Projeto finalizado, testado e pronto para uso' 
              }
            ].map((etapa, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {etapa.numero}
                </div>
                <h3 className="text-xl font-bold mb-2">{etapa.titulo}</h3>
                <p className="text-gray-600">{etapa.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para tirar seu projeto do papel?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Vamos conversar sobre como posso ajudar seu negócio a crescer online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition"
            >
              Solicitar Orçamento Grátis
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/5516996167381?text=Olá! Vi seu portfólio e gostaria de um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}