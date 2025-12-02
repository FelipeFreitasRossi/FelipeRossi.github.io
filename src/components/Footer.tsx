      
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Linkedin, Instagram, Facebook, Mail, Phone, MapPin, Github } from 'lucide-react';

export default function Footer() {
    function rolarPara(arg0: string): void {
        throw new Error('Function not implemented.');
    }

  return (
  
  <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <img src="https://i.postimg.cc/wjdHbFLm/Evolua-(3).jpg" alt="Foto Empresa" />                
                </div>
                <span className="text-xl font-bold">EmpresaPro</span>
              </div>
              <p className="text-gray-400">
                Transformando negócios com tecnologia e inovação.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre</a></li> 
                <li><a href="/servicos" className="hover:text-white">Serviços</a></li>
                <li><a href="./pages/Planos" className="hover:text-white">Planos</a></li>
                <li><a href="./pages/Contato" className="hover:text-white">Contato</a></li>
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
                <a href="https://www.linkedin.com/in/FelipeFreitasRossi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com/Fezinn_08" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                  <Instagram size={20} />
                </a>
                <a href="https://github.com/FelipeFreitasRossi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                  <Github size={20} />
              </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 EmpresaPro. Todos os direitos reservados.</p>
             
            {/* Informação do Desenvolvedor - Incluído e Corrigido no Footer */}
            <div className="flex items-center gap-2 text-gray-400">
              <span>Desenvolvedor:</span>
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition font-semibold"
              >
                Felipe de Freitas Rossi
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}; 