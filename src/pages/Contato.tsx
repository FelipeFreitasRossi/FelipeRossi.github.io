import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    assunto: '',
    mensagem: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o formulário
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        assunto: '',
        mensagem: ''
      });
    }, 5000);
  };

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Entre em Contato
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Vamos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              conversar?
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ouvir suas necessidades e criar a solução perfeita para seu negócio
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-4">
              <Mail size={28} />
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-600">contato@empresapro.com</p>
            <p className="text-gray-600">suporte@empresapro.com</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white mb-4">
              <Phone size={28} />
            </div>
            <h3 className="font-bold mb-2">Telefone</h3>
            <p className="text-gray-600">(11) 9999-9999</p>
            <p className="text-gray-600">0800-123-4567</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-orange-600 rounded-full flex items-center justify-center text-white mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold mb-2">Endereço</h3>
            <p className="text-gray-600">Av. Paulista, 1000</p>
            <p className="text-gray-600">São Paulo, SP - Brasil</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white mb-4">
              <Clock size={28} />
            </div>
            <h3 className="font-bold mb-2">Horário</h3>
            <p className="text-gray-600">Seg - Sex: 9h às 18h</p>
            <p className="text-gray-600">Suporte 24/7</p>
          </div>
        </div>
      </section>

      {/* Formulário e Mapa */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Envie sua mensagem
            </h2>
            <p className="text-gray-600 mb-8">
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas
            </p>

            {enviado ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
                <h3 className="text-2xl font-bold text-green-700 mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-green-600">
                  Obrigado pelo contato. Responderemos em breve!
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Empresa</label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Assunto *</label>
                  <select
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="duvida">Dúvida Técnica</option>
                    <option value="suporte">Suporte</option>
                    <option value="parceria">Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Mensagem *</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition flex items-center justify-center gap-2 group"
                >
                  <span>Enviar Mensagem</span>
                  <Send className="group-hover:translate-x-1 transition" size={20} />
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Campos obrigatórios
                </p>
              </div>
            )}
          </div>

          {/* Mapa e Informações Adicionais */}
          <div className="space-y-8">
            {/* Mapa (Placeholder) */}
            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto text-blue-600 mb-4" size={64} />
                  <p className="text-gray-700 font-semibold">Mapa Interativo</p>
                  <p className="text-gray-600 text-sm">Av. Paulista, 1000 - São Paulo</p>
                </div>
              </div>
            </div>

            {/* Cards Informativos */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">🚀 Resposta Rápida</h3>
                <p className="text-gray-700">
                  Respondemos todas as mensagens em até 24 horas úteis
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">💼 Reunião Gratuita</h3>
                <p className="text-gray-700">
                  Agende uma consulta sem compromisso para discutir seu projeto
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">🎯 Orçamento Personalizado</h3>
                <p className="text-gray-700">
                  Cada projeto é único. Fazemos um orçamento sob medida para você
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {[
              {
                pergunta: 'Qual o prazo médio de resposta?',
                resposta: 'Respondemos em até 24 horas úteis para todas as solicitações.'
              },
              {
                pergunta: 'Vocês fazem reunião presencial?',
                resposta: 'Sim! Temos escritório em São Paulo e também fazemos reuniões online.'
              },
              {
                pergunta: 'Como funciona o processo de orçamento?',
                resposta: 'Após o primeiro contato, agendamos uma reunião para entender seu projeto e em até 3 dias úteis enviamos uma proposta detalhada.'
              },
              {
                pergunta: 'Atendem empresas de todo o Brasil?',
                resposta: 'Sim! Trabalhamos com clientes em todo território nacional, com suporte 100% remoto.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition">
                <h3 className="font-bold mb-2">{item.pergunta}</h3>
                <p className="text-gray-600">{item.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}