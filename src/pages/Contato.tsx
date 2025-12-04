import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Instagram, Github, MessageCircle } from 'lucide-react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    orcamento: '',
    prazo: '',
    mensagem: ''
  });

  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setErro('');

    try {
      // SUBSTITUA ESTES VALORES PELOS SEUS DO EMAILJS
      const result = await emailjs.send(
        'service_3jlwc8d',      // ← Coloque seu Service ID aqui
        'template_wh3cg7o',     // ← Coloque seu Template ID aqui
        {
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          servico: formData.servico,
          orcamento: formData.orcamento,
          prazo: formData.prazo,
          mensagem: formData.mensagem,
          data: new Date().toLocaleString('pt-BR')
        },
        '5UusBrSFXFmh4qbfb'       // ← Coloque sua Public Key aqui
      );

      if (result.text === 'OK') {
        setEnviado(true);
        
        // Reseta o formulário após 5 segundos
        setTimeout(() => {
          setEnviado(false);
          setFormData({
            nome: '',
            email: '',
            telefone: '',
            servico: '',
            orcamento: '',
            prazo: '',
            mensagem: ''
          });
        }, 5000);
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setErro('Ops! Algo deu errado. Tente novamente ou entre em contato pelo WhatsApp.');
    } finally {
      setEnviando(false);
    }
  };

  // Monta mensagem para WhatsApp
  const mensagemWhatsApp = `Olá Felipe! Vim pelo seu portfólio e gostaria de solicitar um orçamento.%0A%0A*Nome:* ${formData.nome}%0A*Email:* ${formData.email}%0A*Serviço:* ${formData.servico}%0A*Orçamento:* ${formData.orcamento}%0A*Prazo:* ${formData.prazo}%0A%0A*Mensagem:*%0A${formData.mensagem}`;

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Entre em Contato
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Vamos conversar sobre{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              seu projeto?
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário ou me chame no WhatsApp. Respondo em até 24 horas!
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <a 
            href="mailto:contato@felipefreitas.dev"
            className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-blue-50 transition group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition">
              <Mail size={28} />
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-600 text-sm">lipeferossi@gmail.com</p>
          </a>

          <a 
            href="https://wa.me/5516996167381"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-green-50 transition group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition">
              <MessageCircle size={28} />
            </div>
            <h3 className="font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-sm">(16) 99616-73819</p>
          </a>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-orange-600 rounded-full flex items-center justify-center text-white mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold mb-2">Localização</h3>
            <p className="text-gray-600 text-sm">São Carlos, SP - Brasil</p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white mb-4">
              <Clock size={28} />
            </div>
            <h3 className="font-bold mb-2">Horário</h3>
            <p className="text-gray-600 text-sm">Seg - Sex: 7h às 19h</p>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Lado Esquerdo - Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Solicite seu orçamento
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário com o máximo de detalhes possível. 
                Receberei um email instantaneamente e retornarei em até 24h!
              </p>

              {/* Redes Sociais */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold mb-4">Me siga nas redes:</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/FelipeFreitasRossi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition shadow"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://www.instagram.com/Fezinn_08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition shadow"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://github.com/FelipeFreitasRossi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition shadow"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>

              {/* Garantias */}
              <div className="space-y-4">
                {[
                  { emoji: '✅', texto: 'Resposta em até 24 horas' },
                  { emoji: '💰', texto: 'Orçamento gratuito e sem compromisso' },
                  { emoji: '🔒', texto: 'Seus dados estão seguros' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="font-semibold">{item.texto}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lado Direito - Formulário */}
            <div>
              {enviado ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-green-600 mb-6">
                    Obrigado pelo contato, {formData.nome}! 🎉<br/>
                    Recebi sua mensagem e vou responder em breve no email: <strong>{formData.email}</strong>
                  </p>
                  <a
                    href={`https://wa.me/5516996167381?text=Olá! Acabei de enviar o formulário do seu site.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                  >
                    <MessageCircle size={20} />
                    Ou me chame no WhatsApp agora
                  </a>
                </div>
              ) : (
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Nome Completo *</label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        disabled={enviando}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition disabled:bg-gray-100"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={enviando}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition disabled:bg-gray-100"
                          placeholder="seu@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Telefone</label>
                        <input
                          type="tel"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleChange}
                          disabled={enviando}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition disabled:bg-gray-100"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Tipo de Serviço *</label>
                      <select
                        name="servico"
                        value={formData.servico}
                        onChange={handleChange}
                        required
                        disabled={enviando}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition disabled:bg-gray-100"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="landing-page">Landing Page</option>
                        <option value="chatbot">ChatBot</option>
                        <option value="sistema-web">Sistema Web</option>
                        <option value="app-mobile">App Mobile</option>
                        <option value="api-backend">API / Backend</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Orçamento Estimado</label>
                        <select
                          name="orcamento"
                          value={formData.orcamento}
                          onChange={handleChange}
                          disabled={enviando}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition disabled:bg-gray-100"
                        >
                          <option value="">Selecione</option>
                          <option value="ate-2000">Até R$ 2.000</option>
                          <option value="2000-5000">R$ 2.000 - R$ 5.000</option>
                          <option value="5000-10000">R$ 5.000 - R$ 10.000</option>
                          <option value="acima-10000">Acima de R$ 10.000</option>
                          <option value="nao-sei">Não tenho certeza</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Prazo Desejado</label>
                        <select
                          name="prazo"
                          value={formData.prazo}
                          onChange={handleChange}
                          disabled={enviando}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition disabled:bg-gray-100"
                        >
                          <option value="">Selecione</option>
                          <option value="urgente">Urgente (1-2 semanas)</option>
                          <option value="normal">Normal (3-4 semanas)</option>
                          <option value="flexivel">Flexível (+1 mês)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Conte sobre seu projeto *</label>
                      <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                        disabled={enviando}
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition resize-none disabled:bg-gray-100"
                        placeholder="Descreva seu projeto, objetivos, funcionalidades desejadas, etc."
                      />
                    </div>

                    {erro && (
                      <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-red-700">
                        {erro}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={enviando}
                      className={`w-full px-8 py-4 rounded-lg font-bold transition flex items-center justify-center gap-2 group ${
                        enviando
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl'
                      }`}
                    >
                      {enviando ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar Solicitação</span>
                          <Send className="group-hover:translate-x-1 transition" size={20} />
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-600 text-center">
                      * Campos obrigatórios
                    </p>

                    <div className="text-center pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-3">Ou prefere WhatsApp?</p>
                      <a
                        href="https://wa.me/5516996167381?text=Olá! Vi seu portfólio e gostaria de solicitar um orçamento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                      >
                        <MessageCircle size={20} />
                        Chamar no WhatsApp
                      </a>
                    </div>
                  </form>
                </div>
              )}
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
                pergunta: 'Quanto tempo demora para receber o orçamento?',
                resposta: 'Respondo todas as solicitações em até 24 horas úteis. Para projetos mais complexos, posso agendar uma call para entender melhor antes de enviar o orçamento.'
              },
              {
                pergunta: 'O orçamento é gratuito?',
                resposta: 'Sim! A primeira consulta e o orçamento são 100% gratuitos e sem compromisso.'
              },
              {
                pergunta: 'Qual a forma de pagamento?',
                resposta: 'Aceito PIX, transferência bancária e cartão de crédito. Geralmente divido em 50% no início e 50% na entrega.'
              },
              {
                pergunta: 'E se eu não gostar do resultado?',
                resposta: 'Todos os projetos incluem revisões. Fazemos ajustes até você ficar 100% satisfeito com o resultado!'
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