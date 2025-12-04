import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Bot, Code2, Smartphone, Database, Palette, ArrowRight, Check } from 'lucide-react';

export default function Servicos() {
  const servicos = [
    {
      icone: <Monitor className="w-12 h-12" />,
      titulo: 'Landing Pages',
      descricao: 'Páginas de alta conversão, responsivas e de alta qualidade.',
      precoMin: '1.000',
      precoMax: '3.500',
      detalhes: [
        'Design profissional e moderno',
        'Responsivo (mobile, tablet, desktop)',
        'Formulário de contato funcional',
        'Hospedagem gratuita',
        'Revisões incluidas',
        'Projeto entregue rápido',
      ],
      cor: 'from-blue-500 to-cyan-500',
      tempo: '1-4 dias'
    },
    {
      icone: <Bot className="w-12 h-12" />,
      titulo: 'ChatBots Inteligentes',
      descricao: 'Automatize atendimento com IA para WhatsApp, site ou redes sociais.',
      precoMin: '1.500',
      precoMax: '3.000',
      detalhes: [
        'Integração WhatsApp/Instagram',
        'Respostas automáticas inteligentes',
        'Fluxos de conversa personalizados',
        'Integração com CRM/banco de dados',
        'Treinamento de uso',
        'Sem travar'

      ],
      cor: 'from-purple-500 to-pink-500',
      tempo: '2-5 dias'
    },
    {
      icone: <Code2 className="w-12 h-12" />,
      titulo: 'Sistemas Web',
      descricao: 'Soluções completas e personalizadas para seu negócio.',
      precoMin: '4.000',
      precoMax: '8.000+',
      detalhes: [
        'Desenvolvimento sob medida',
        'Autenticação de usuários',
        'Banco de dados robusto',
        'API REST',
        'Documentação completa',
        'Suporte pós-lançamento'
      ],
      cor: 'from-green-500 to-emerald-500',
      tempo: '5-12 dias'
    },
    {
      icone: <Smartphone className="w-12 h-12" />,
      titulo: 'Apps Mobile',
      descricao: 'Aplicativos híbridos que funcionam em iOS e Android.',
      precoMin: '4.000',
      precoMax: '7.000+',
      detalhes: [
        'Desenvolvimento híbrido (iOS + Android)',
        'Interface nativa e fluida',
        'Offline-first',
        'Sem problemas de interface',
        'Integração com APIs',
        'Publicação nas stores',
        'Manutenção inclusa (3 meses)'
      ],
      cor: 'from-orange-500 to-red-500',
      tempo: '5-12 dias'
    },
    {
      icone: <Database className="w-12 h-12" />,
      titulo: 'APIs e Backend',
      descricao: 'Infraestrutura robusta e escalável para suas aplicações.',
      precoMin: '4.000',
      precoMax: '11.000+',
      detalhes: [
        'API RESTful completa',
        'Banco de dados otimizado',
        'Autenticação de Login e Cadastro',
        'Documentação Swagger',
        'Testes automatizados',
        'Deploy automatizado',
        'Escalabilidade garantida'
      ],
      cor: 'from-indigo-500 to-purple-500',
      tempo: '7-15 dias'
    },
    {
      icone: <Palette className="w-12 h-12" />,
      titulo: 'UI/UX Design',
      descricao: 'Interfaces bonitas, intuitivas e focadas em conversão.',
      precoMin: '800',
      precoMax: '2.500',
      detalhes: [
        'Pesquisa de usuários',
        'Wireframes e protótipos',
        'Design system',
        'Mockups de alta fidelidade',
        'Guia de estilos',
        'Arquivos Figma/Adobe XD',
        'Entrega rapida'
      ],
      cor: 'from-pink-500 to-rose-500',
      tempo: '1-5 dias'
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Meus Serviços
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Serviços e{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Preços Transparentes
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções digitais profissionais com preços justos e qualidade garantida. 
            Todos os projetos incluem suporte pós-entrega.
          </p>
        </div>
      </section>

      {/* Grid de Serviços */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${servico.cor} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition`}>
                  {servico.icone}
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{servico.titulo}</h3>
                <p className="text-gray-600 mb-4">{servico.descricao}</p>

                {/* Preço */}
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="flex items-end gap-1 justify-center">
                    <span className="text-sm text-gray-600">R$</span>
                    <span className="text-3xl font-bold text-gray-900">{servico.precoMin}</span>
                    <span className="text-gray-600 mb-1">- R$ {servico.precoMax}</span>
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-1">
                    ⏱️ Entrega em {servico.tempo}
                  </p>
                </div>

                {/* Detalhes */}
                <ul className="space-y-2 mb-6">
                  {servico.detalhes.map((detalhe, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>{detalhe}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contato"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  Solicitar Orçamento
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantias */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Garantias do Projeto
            </h2>
            <p className="text-xl text-gray-600">
              Seu investimento está seguro comigo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                titulo: '✅ Qualidade Garantida',
                descricao: 'Se não ficar satisfeito, fazemos ajustes até você aprovar 100%'
              },
              {
                titulo: '🚀 Prazo Cumprido',
                descricao: 'Compromisso com cronograma. Atrasos são raros e sempre comunicados'
              },
              {
                titulo: '💬 Suporte Incluso',
                descricao: '30 dias de suporte gratuito após entrega para dúvidas e ajustes'
              }
            ].map((garantia, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-blue-600 transition">
                <h3 className="text-xl font-bold mb-3">{garantia.titulo}</h3>
                <p className="text-gray-600">{garantia.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formas de Pagamento */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Formas de Pagamento
            </h2>
            <p className="text-xl text-gray-600">
              Facilidades para começar seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">💳 À Vista</h3>
              <p className="text-gray-700 mb-2">
                <strong>10% de desconto</strong> para pagamento integral antecipado
              </p>
              <p className="text-sm text-gray-600">
                PIX, Transferência ou Cartão de Crédito
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">📅 Parcelado</h3>
              <p className="text-gray-700 mb-2">
                <strong>50% início + 50% entrega</strong>
              </p>
              <p className="text-sm text-gray-600">
                Pagamento flexível sem juros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {[
              {
                pergunta: 'O que está incluso no preço?',
                resposta: 'Todos os itens listados no card de cada serviço + hospedagem básica (quando aplicável) + suporte de 30 dias.'
              },
              {
                pergunta: 'Posso pagar em parcelas?',
                resposta: 'Sim! Aceito parcelamento de 50% no início e 50% na entrega, sem juros.'
              },
              {
                pergunta: 'E se eu precisar de ajustes depois?',
                resposta: 'Você tem 30 dias de suporte gratuito. Após isso, posso fazer um plano de manutenção mensal.'
              },
              {
                pergunta: 'Quanto tempo leva para começar?',
                resposta: 'Após aprovação do orçamento e pagamento da entrada, inicio em até 1 dias úteis.'
              },

            ].map((item, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition">
                <h3 className="font-bold text-lg mb-2">{item.pergunta}</h3>
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
            Vamos começar seu projeto?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Solicite um orçamento gratuito e sem compromisso
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition"
          >
            Solicitar Orçamento Grátis
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}