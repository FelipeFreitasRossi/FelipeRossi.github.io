import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';

export default function Planos() {
  const [anual, setAnual] = useState(false);

  const planos = [
    {
      nome: 'Starter',
      descricao: 'Ideal para pequenos projetos e startups',
      precoMensal: '1.499',
      precoAnual: '14.990',
      economia: '20%',
      recursos: [
        { nome: 'Até 10 usuários', incluido: true },
        { nome: 'Suporte por email', incluido: true },
        { nome: 'Relatórios mensais', incluido: true },
        { nome: 'Armazenamento 10GB', incluido: true },
        { nome: 'API básica', incluido: true },
        { nome: 'Suporte prioritário', incluido: false },
        { nome: 'Treinamento dedicado', incluido: false },
        { nome: 'Gerente de conta', incluido: false }
      ],
      popular: false,
      cor: 'from-blue-500 to-cyan-500'
    },
    {
      nome: 'Professional',
      descricao: 'Para empresas em crescimento',
      precoMensal: '2.999',
      precoAnual: '29.990',
      economia: '17%',
      recursos: [
        { nome: 'Usuários ilimitados', incluido: true },
        { nome: 'Suporte prioritário 24/7', incluido: true },
        { nome: 'Relatórios em tempo real', incluido: true },
        { nome: 'Armazenamento 100GB', incluido: true },
        { nome: 'API avançada', incluido: true },
        { nome: 'Integrações customizadas', incluido: true },
        { nome: 'Treinamento incluído', incluido: true },
        { nome: 'Gerente de conta', incluido: false }
      ],
      popular: true,
      cor: 'from-purple-500 to-pink-500'
    },
    {
      nome: 'Enterprise',
      descricao: 'Soluções corporativas personalizadas',
      precoMensal: 'Personalizado',
      precoAnual: 'Personalizado',
      economia: null,
      recursos: [
        { nome: 'Tudo do Professional', incluido: true },
        { nome: 'Gerente de conta dedicado', incluido: true },
        { nome: 'Armazenamento ilimitado', incluido: true },
        { nome: 'Integrações ilimitadas', incluido: true },
        { nome: 'SLA garantido 99.9%', incluido: true },
        { nome: 'Consultoria estratégica', incluido: true },
        { nome: 'Infraestrutura dedicada', incluido: true },
        { nome: 'Suporte white-label', incluido: true }
      ],
      popular: false,
      cor: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Planos e Preços
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Escolha o plano{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              perfeito para você
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transparência total. Sem taxas escondidas. Cancele quando quiser.
          </p>

          {/* Toggle Mensal/Anual */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-semibold ${!anual ? 'text-blue-600' : 'text-gray-600'}`}>
              Mensal
            </span>
            <button
              onClick={() => setAnual(!anual)}
              className={`relative w-16 h-8 rounded-full transition ${
                anual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  anual ? 'translate-x-8' : ''
                }`}
              />
            </button>
            <span className={`font-semibold ${anual ? 'text-blue-600' : 'text-gray-600'}`}>
              Anual
            </span>
            {anual && (
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                Economize até 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Grid de Planos */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {planos.map((plano, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  plano.popular
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white scale-105 shadow-2xl'
                    : 'bg-white border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl'
                }`}
              >
                {plano.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plano.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plano.nome}
                  </h3>
                  <p className={`text-sm mb-6 ${plano.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plano.descricao}
                  </p>

                  <div className="flex items-end justify-center gap-1 mb-2">
                    {plano.precoMensal !== 'Personalizado' && (
                      <span className={`text-2xl ${plano.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        R$
                      </span>
                    )}
                    <span className={`text-5xl font-bold ${plano.popular ? 'text-white' : 'text-gray-900'}`}>
                      {anual ? plano.precoAnual : plano.precoMensal}
                    </span>
                    {plano.precoMensal !== 'Personalizado' && (
                      <span className={`text-lg mb-2 ${plano.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        /{anual ? 'ano' : 'mês'}
                      </span>
                    )}
                  </div>

                  {anual && plano.economia && (
                    <div className="text-sm text-green-400 font-semibold">
                      Economize {plano.economia}
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plano.recursos.map((recurso, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {recurso.incluido ? (
                        <Check className={`flex-shrink-0 mt-0.5 ${plano.popular ? 'text-green-300' : 'text-green-500'}`} size={20} />
                      ) : (
                        <X className={`flex-shrink-0 mt-0.5 ${plano.popular ? 'text-white opacity-30' : 'text-gray-400'}`} size={20} />
                      )}
                      <span className={`${
                        plano.popular 
                          ? recurso.incluido ? 'text-white' : 'text-white opacity-50'
                          : recurso.incluido ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {recurso.nome}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contato"
                  className={`w-full py-4 rounded-full font-bold transition flex items-center justify-center gap-2 ${
                    plano.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl'
                  }`}
                >
                  Começar Agora
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparação de Recursos */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Compare todos os recursos
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="text-left p-6 font-bold">Recursos</th>
                  <th className="p-6 font-bold">Starter</th>
                  <th className="p-6 font-bold">Professional</th>
                  <th className="p-6 font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Usuários', '10', 'Ilimitado', 'Ilimitado'],
                  ['Armazenamento', '10GB', '100GB', 'Ilimitado'],
                  ['Suporte', 'Email', '24/7', '24/7 Premium'],
                  ['API', 'Básica', 'Avançada', 'Enterprise'],
                  ['Integrações', '5', '20', 'Ilimitadas'],
                  ['SLA', '-', '99%', '99.9%']
                ].map((linha, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-6 font-semibold text-gray-900">{linha[0]}</td>
                    <td className="p-6 text-center text-gray-700">{linha[1]}</td>
                    <td className="p-6 text-center text-gray-700">{linha[2]}</td>
                    <td className="p-6 text-center text-gray-700">{linha[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                pergunta: 'Posso mudar de plano depois?',
                resposta: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.'
              },
              {
                pergunta: 'Como funciona o período de teste?',
                resposta: 'Oferecemos 14 dias grátis em todos os planos, sem necessidade de cartão de crédito.'
              },
              {
                pergunta: 'Há taxa de cancelamento?',
                resposta: 'Não! Você pode cancelar seu plano a qualquer momento, sem multas ou taxas.'
              },
              {
                pergunta: 'Vocês oferecem suporte em português?',
                resposta: 'Sim, nosso suporte é 100% em português, com equipe local e especializada.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.pergunta}</h3>
                <p className="text-gray-600">{item.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Fale com nossa equipe e encontre o plano perfeito para você
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition"
          >
            Falar com Consultor
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}