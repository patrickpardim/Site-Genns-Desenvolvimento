import { Globe, Rocket, ShoppingBag, FileCode, Wrench, Upload, LifeBuoy, Zap, Shield, Telescope, Laptop } from "lucide-react";
import { ServiceItem, AdvantageItem, TestimonialItem, ProcessItem, PricingPlan, FAQItem } from "./types";

export const COMPANY_NAME = "GENNS DESENVOLVIMENTO";

export const QUOTE = {
  text: "“Olhe para as estrelas e não para os seus pés. Tente entender o que você vê e maravilhe-se sobre o que faz o universo existir. Seja curioso.”",
  author: "Stephen Hawking"
};

export const ABOUT_TEXT = "Na Genns, não apenas escrevemos código; nós mapeamos constelações digitais. Somos a tripulação que você precisa para pilotar sua marca através da vasta imensidão da internet. Transformamos poeira estelar (ideias) em supernovas (resultados), garantindo que sua presença online não seja apenas mais uma estrela, mas o centro do seu próprio sistema solar.";

export const SERVICES: ServiceItem[] = [
  {
    title: "ESTAÇÕES WEB (SITES)",
    description: "Bases digitais robustas, preparadas para receber visitantes de qualquer lugar do cosmos.",
    icon: Globe,
  },
  {
    title: "MÓDULOS DE POUSO (LANDING PAGES)",
    description: "Páginas de alta conversão projetadas para capturar leads como gravidade.",
    icon: Rocket,
  },
  {
    title: "COMÉRCIO INTERGALÁCTICO (E-COMMERCE)",
    description: "Lojas virtuais seguras e velozes para vender seus produtos em qualquer órbita.",
    icon: ShoppingBag,
  }
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    id: "01",
    title: "DESIGN DE OUTRA GALÁXIA",
    description: "Esqueça o comum. Criamos interfaces visuais que prendem a atenção como um buraco negro, unindo estética futurista com usabilidade intuitiva para uma experiência de usuário sem gravidade."
  },
  {
    id: "02",
    title: "PROPULSÃO HYPERDRIVE",
    description: "Velocidade é sobrevivência no espaço digital. Otimizamos cada linha de código para que seu site carregue na velocidade da luz, garantindo performance máxima em qualquer dispositivo."
  },
  {
    id: "03",
    title: "NAVEGAÇÃO ESTRATÉGICA",
    description: "Não voamos às cegas. Utilizamos dados e SEO avançado para traçar a rota perfeita, garantindo que sua marca seja detectada pelos radares dos maiores buscadores do universo."
  },
  {
    id: "04",
    title: "ESCUDOS E SUPORTE",
    description: "O espaço é hostil, mas sua nave estará protegida. Oferecemos manutenção contínua e protocolos de segurança para blindar seu negócio contra ameaças e manter sistemas operacionais."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "A Genns transformou nossa presença digital. O site novo é rápido, intuitivo e nossa taxa de conversão aumentou 40% no primeiro mês de lançamento.",
    author: "Carla Dias",
    company: "Pense S.A.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Profissionalismo impecável. A equipe entendeu perfeitamente nossa demanda complexa e entregou uma solução robusta e escalável dentro do prazo.",
    author: "Ricardo Silva",
    company: "Grupo Timmerman",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "O suporte contínuo deles é o diferencial. Não apenas entregaram o site, mas garantem que tudo funcione perfeitamente dia após dia.",
    author: "Amanda Torres",
    company: "StartLog Logística",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "Excelente trabalho de SEO e design. Saímos da invisibilidade para a primeira página do Google em termos estratégicos para nosso negócio.",
    author: "Tim Castro",
    company: "Rimberio Consultoria",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    quote: "Contratar a Genns foi nosso melhor investimento do ano. A clareza na comunicação e o cumprimento dos prazos nos deram total segurança.",
    author: "Fernanda Costa",
    company: "Inova Varejo",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    quote: "A qualidade técnica do código é notável. O site carrega instantaneamente em dispositivos móveis, o que era nossa principal dor com a agência anterior.",
    author: "Lucas Mendes",
    company: "TechMob",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg"
  }
];

export const PROCESS: ProcessItem[] = [
  {
    title: "ENGENHARIA (DEV)",
    description: "Montagem da estrutura da nave com base nos diagramas aprovados e combustível (sinal) liberado.",
    timeframe: "12 Dias Terrestres",
    icon: FileCode
  },
  {
    title: "CALIBRAGEM (AJUSTES)",
    description: "Ajustes de trajetória, alinhamento de imagens e correção de atmosfera textual.",
    timeframe: "05 Dias Terrestres",
    icon: Wrench
  },
  {
    title: "LANÇAMENTO (DEPLOY)",
    description: "Ignição final e liberação da plataforma no ambiente de produção do cliente.",
    timeframe: "03 Dias Terrestres",
    icon: Upload
  },
  {
    title: "CONTROLE DA MISSÃO (SUPORTE)",
    description: "Monitoramento constante para bugs, anomalias e estabilidade do sistema.",
    timeframe: "Horário Comercial",
    icon: LifeBuoy
  }
];

export const PLANS: PricingPlan[] = [
  {
    name: "ÓRBITA BAIXA",
    price: "R$ 140,00",
    features: [
      "Monitoramento de radar básico",
      "Escudos de segurança atualizados",
      "Caixa preta (Backups) mensal",
      "Comunicação via Rádio (E-mail)"
    ]
  },
  {
    name: "INTERESTELAR",
    price: "R$ 240,00",
    features: [
      "Tudo do plano Órbita Baixa",
      "Propulsão extra (Otimização Trimestral)",
      "Reabastecimento (2 a 4h conteúdo)",
      "Canal Direto (Prioridade Zap/Email)",
      "Mapeamento Estelar (SEO On-Page)"
    ],
    highlight: true
  },
  {
    name: "COMANDANTE",
    price: "R$ 360,00",
    features: [
      "Tudo do plano Interestelar",
      "Reparos Avançados de Fuselagem",
      "Carga Extra (6 a 8h conteúdo)",
      "Varredura Completa (Auditoria SEO)",
      "Aceleração de Partículas (CDN/Cache)"
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quanto tempo leva para lançar meu site?",
    answer: "O tempo de lançamento varia conforme a complexidade da missão. Um site institucional (Landing Page) geralmente leva cerca de 15 a 20 dias úteis desde a aprovação do design até a ignição final."
  },
  {
    question: "Vocês fazem a hospedagem da minha nave?",
    answer: "Sim! Oferecemos servidores de alta performance para garantir que sua site orbite sem interrupções. Consulte nossos planos de 'Combustível e Hangar' (Hospedagem e Manutenção)."
  },
  {
    question: "O site será visível em comunicadores móveis?",
    answer: "Absolutamente. Utilizamos tecnologia responsiva para garantir que sua plataforma funcione perfeitamente em desktops, tablets e smartphones de qualquer galáxia."
  },
  {
    question: "Como funciona o pagamento da missão?",
    answer: "Trabalhamos com um sinal para iniciar a construção da fuselagem e o restante na entrega, ou parcelamento via cartão de crédito. Tudo transparente, sem letras miúdas de contratos alienígenas."
  }
];

export const CONTACT_INFO = {
  instagram: "@genns.desenvolvimento",
  website: "www.genns.com.br",
  email: "contato@genns.com.br",
  phone: "(28) 99275-2202"
};