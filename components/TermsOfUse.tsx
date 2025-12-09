import React, { useEffect } from 'react';
import { FileText, Scale, ShieldCheck, AlertCircle, Copyright } from 'lucide-react';

const TermsOfUse: React.FC = () => {
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
                <Scale className="text-brand-primary" size={32} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Termos de <span className="text-brand-primary">Uso</span></h1>
            <p className="text-gray-400">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 backdrop-blur-sm">
            
            <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <FileText className="text-brand-primary" size={24} />
                    1. Aceitação dos Termos
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Ao acessar e utilizar o site e os serviços da <strong>Genns Desenvolvimento</strong>, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <ShieldCheck className="text-brand-primary" size={24} />
                    2. Serviços Oferecidos
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    A Genns Desenvolvimento é especializada na criação de soluções digitais, incluindo, mas não se limitando a: desenvolvimento de sites institucionais, landing pages, e-commerce e manutenção web. Cada projeto é regido por um contrato de prestação de serviços específico, que detalha prazos, custos e escopo, prevalecendo sobre estes termos gerais em caso de conflito.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <Copyright className="text-brand-primary" size={24} />
                    3. Propriedade Intelectual
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Todo o conteúdo presente neste site (textos, logotipos, gráficos, ícones e código) é propriedade exclusiva da Genns Desenvolvimento ou de seus licenciadores e está protegido pelas leis de direitos autorais do Brasil.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base mt-2">
                    Em relação aos projetos entregues aos clientes: A propriedade intelectual do código-fonte e design final é transferida ao cliente após a quitação integral do pagamento acordado, ressalvando-se bibliotecas de código aberto ou frameworks de terceiros utilizados.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <AlertCircle className="text-brand-primary" size={24} />
                    4. Responsabilidades do Usuário
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Ao utilizar nosso site ou contratar nossos serviços, você concorda em:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 text-sm md:text-base">
                    <li>Fornecer informações verdadeiras e precisas para a execução dos projetos;</li>
                    <li>Não utilizar nossos serviços para fins ilegais ou não autorizados;</li>
                    <li>Não tentar violar a segurança do site ou de nossos servidores.</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <Scale className="text-brand-primary" size={24} />
                    5. Limitação de Responsabilidade
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    A Genns Desenvolvimento empenha-se para manter o site e os serviços operacionais 24/7. No entanto, não nos responsabilizamos por indisponibilidades temporárias decorrentes de manutenção técnica, falhas em provedores de hospedagem terceirizados ou eventos de força maior.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <FileText className="text-brand-primary" size={24} />
                    6. Alterações nos Termos
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações entrarão em vigor imediatamente após a publicação no site. Recomendamos a revisão periódica desta página.
                </p>
            </div>

             <div className="pt-6 border-t border-white/10 text-center">
                <p className="text-gray-400 text-sm">
                    Dúvidas? Entre em contato via <a href="mailto:contato@genns.com.br" className="text-brand-primary hover:underline">contato@genns.com.br</a>
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;