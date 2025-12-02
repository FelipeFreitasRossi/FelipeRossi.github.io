import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Smartphone, Globe, Database, LineChart, Shield, ArrowRight } from 'lucide-react';

export default function Servicos() {
  const servicos = [
    {
      icone: <Code2 className="w-12 h-12" />,
      titulo: 'Desenvolvimento Web',
      descricao: 'Criamos sites e sistemas web modernos, responsivos e otimizados para performance.',
      detalhes: [
        'Sites institucionais',
        'Landing pages',
        'E-commerce completo',
        'Sistemas web personalizados'
      ],
      cor: 'from-blue-500 to-cyan-500'
    },
    {
      icone: <Smartphone className="w-12 h-12" />,
      titulo: 'Aplicativos Mobile',
      descricao: 'Apps nativos para iOS e Android com experiência excepcional para o usuário.',
      detalhes: [
        'Apps iOS e Android',
        'Design intuitivo',
        'Performance otimizada',
        'Integração com APIs'
      ],
      cor: 'from-purple-500 to-pink-500'
    },
    {
      icone: <Globe className="w-12 h-12" />,
      titulo: 'Soluções Cloud',
      descricao: 'Infraestrutura escalável na nuvem com alta disponibilidade e segurança.',
      detalhes: [
        'Migração para nuvem',
        'Arquitetura escalável',
        'Backup automático',
        'Monitoramento 24/7'
      ],
      cor: 'from-green-500 to-emerald-500'
    },
    {
      icone: <Database className="w-12 h-12" />,
      titulo: 'Banco de Dados',
      descricao: 'Gestão e otimização de bancos de dados para máxima performance.',
      detalhes: [
        'Modelagem de dados',
        'Otimização de queries',
        'Backup e recuperação',
        'Migração de dados'
      ],
      cor: 'from-orange-500 to-red-500'
    },
    {
      icone: <LineChart className="w-12 h-12" />,
      titulo: 'Business Intelligence',
      descricao: 'Transforme dados em insights estratégicos para seu negócio.',
      detalhes: [
        'Dashboards interativos',
        'Análise de dados',
        'Relatórios automatizados',
        'Previsões e tendências'
      ],
      cor: 'from-indigo-500 to-purple-500'
    },
    {
      icone: <Shield className="w-12 h-12" />,
      titulo: 'Segurança da Informação',
      descricao: 'Proteja seus dados e sistemas com as melhores práticas de segurança.',
      detalhes: [
        'Auditoria de segurança',
        'Proteção contra ataques',
        'Criptografia de dados',
        'Conformidade LGPD'
      ],
      cor: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Nossos Serviços
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Soluções completas para{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              seu negócio
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços de tecnologia para 
            impulsionar sua empresa ao próximo nível
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
                
                <h3 className="text-2xl font-bold mb-4">{servico.titulo}</h3>
                <p className="text-gray-600 mb-6">{servico.descricao}</p>

                <ul className="space-y-2 mb-6">
                  {servico.detalhes.map((detalhe, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{detalhe}</span>
                    </li>
                  ))}
                </ul>

                <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saiba mais <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Como trabalhamos
            </h2>
            <p className="text-xl text-gray-600">
              Nossa metodologia comprovada para entregar resultados
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { numero: '01', titulo: 'Análise', descricao: 'Entendemos suas necessidades e objetivos' },
              { numero: '02', titulo: 'Planejamento', descricao: 'Criamos uma estratégia personalizada' },
              { numero: '03', titulo: 'Desenvolvimento', descricao: 'Executamos com excelência técnica' },
              { numero: '04', titulo: 'Entrega', descricao: 'Garantimos resultados mensuráveis' }
            ].map((etapa, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {etapa.numero}
                </div>
                <h3 className="text-xl font-bold mb-2">{etapa.titulo}</h3>
                <p className="text-gray-600">{etapa.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos transformar sua ideia em realidade?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato e descubra como podemos ajudar seu negócio
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition"
          >
            Solicitar Orçamento
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}