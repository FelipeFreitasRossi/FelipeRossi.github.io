import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Shield, Zap, TrendingUp, Users, Check } from 'lucide-react';

export default function Inicio() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Lado Esquerdo */}
          <div className="space-y-6">
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
              <Link
                to="/contato"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition flex items-center justify-center gap-2 group"
              >
                Solicitar Demonstração
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </Link>
              <Link
                to="/servicos"
                className="border-2 border-gray-300 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition text-center"
              >
                Conhecer Serviços
              </Link>
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

          {/* Lado Direito */}
          <div className="relative">
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
          </div>
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por que escolher a EmpresaPro?
            </h2>
            <p className="text-xl text-gray-600">
              Benefícios que fazem a diferença no seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Rocket size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Rápido e Eficiente</h3>
              <p className="text-gray-700">
                Implementação ágil que entrega resultados em tempo recorde, sem comprometer a qualidade.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">100% Seguro</h3>
              <p className="text-gray-700">
                Seus dados protegidos com as mais avançadas tecnologias de segurança do mercado.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Suporte Premium</h3>
              <p className="text-gray-700">
                Equipe especializada disponível 24/7 para garantir seu sucesso contínuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Junte-se a centenas de empresas que já transformaram seus negócios
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition"
          >
            Falar com Especialista
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}