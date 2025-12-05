import React, { useEffect } from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 star-bg opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-brand-primary/20 rounded-full mb-4">
                <Shield className="text-brand-primary" size={32} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Política de <span className="text-brand-primary">Privacidade</span></h1>
            <p className="text-gray-400">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 backdrop-blur-sm">
            
            <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <FileText className="text-brand-primary" size={24} />
                    1. Introdução
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    A Genns Desenvolvimento ("nós", "nosso") valoriza sua privacidade. Esta política descreve como coletamos, usamos e protegemos as informações pessoais que você nos fornece ao utilizar nosso site e serviços. Ao navegar em nossa plataforma, você concorda com as práticas descritas neste documento.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <Eye className="text-brand-primary" size={24} />
                    2. Coleta de Informações
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Coletamos informações que você nos fornece diretamente, principalmente através do nosso formulário de contato ou solicitação de orçamento. Isso pode incluir:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 text-sm md:text-base">
                    <li>Nome completo;</li>
                    <li>Endereço de e-mail;</li>
                    <li>Número de telefone;</li>
                    <li>Informações sobre sua empresa ou projeto.</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <Lock className="text-brand-primary" size={24} />
                    3. Uso das Informações
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    As informações coletadas são utilizadas exclusivamente para:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 text-sm md:text-base">
                    <li>Responder às suas consultas e solicitações de orçamento;</li>
                    <li>Fornecer suporte técnico e atendimento ao cliente;</li>
                    <li>Melhorar nossos serviços e a experiência do usuário no site;</li>
                    <li>Enviar comunicações relacionadas aos projetos contratados.</li>
                </ul>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base mt-2">
                    Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing sem seu consentimento explícito.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <Shield className="text-brand-primary" size={24} />
                    4. Segurança de Dados
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos protocolos seguros (HTTPS) e práticas recomendadas de desenvolvimento web.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <FileText className="text-brand-primary" size={24} />
                    5. Seus Direitos
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais armazenados em nossos sistemas. Para exercer esses direitos, entre em contato conosco através do e-mail: contato@genns.com.br.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;