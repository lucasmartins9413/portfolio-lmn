export type Lang = 'pt' | 'en' | 'es';

export const LANGS: { code: Lang; label: string; html: string }[] = [
  { code: 'pt', label: 'PT', html: 'pt-BR' },
  { code: 'en', label: 'EN', html: 'en' },
  { code: 'es', label: 'ES', html: 'es' },
];

/** Texts of one project card. Visual settings (logo, colors, links) live in home.component.ts. */
export interface CardText {
  title: string;
  status: string;
  description: string;
  tags: string[];
  linkLabel?: string;
  note?: string;
}

export interface ExperienceText {
  company: string;
  role: string;
  period: string;
  founder?: boolean;
  text: string;
}

export interface Dict {
  meta: { title: string };
  nav: { about: string; projects: string; clients: string; shopify: string; experience: string; contact: string; language: string };
  theme: { toLight: string; toDark: string };
  hero: { role: string; bio: string; cta: string; productsTitle: string; productMeta: string[] };
  stack: { main: string; ecommerce: string; studying: string };
  projects: { title: string; intro: string; items: CardText[] };
  clients: { title: string; intro: string; items: CardText[] };
  shopify: { title: string; intro: string; items: CardText[] };
  experience: { title: string; intro: string; founder: string; items: ExperienceText[] };
  education: { title: string; inProgress: string; items: { course: string; school: string }[] };
  contact: { title: string; text: string };
  form: {
    name: string; namePh: string; nameRequired: string; nameMin: string;
    email: string; emailPh: string; emailRequired: string; emailInvalid: string;
    phone: string; phoneRequired: string; phoneInvalid: string;
    company: string; companyPh: string; submit: string;
  };
  card: { privateRepo: string; tech: string };
  footer: { rights: string };
}

const pt: Dict = {
  meta: { title: 'Lucas Martins — Desenvolvedor Full Stack' },
  nav: { about: 'Sobre', projects: 'Projetos', clients: 'Clientes', shopify: 'Shopify', experience: 'Experiência', contact: 'Contato', language: 'Idioma' },
  theme: { toLight: 'Usar tema claro', toDark: 'Usar tema escuro' },
  hero: {
    role: 'Desenvolvedor full stack. Crio produtos em Laravel do zero ao deploy, e temas e apps para Shopify.',
    bio: 'Fundador do Correta Fácil, do Raiz Kids e do Litoral Vagas. Trabalho com APIs REST, autenticação, multi-tenant e servidores VPS Linux. No e-commerce, desenvolvo para VTEX IO e Shopify, onde publiquei meu próprio app.',
    cta: 'Falar comigo',
    productsTitle: 'Meus produtos',
    productMeta: ['SaaS para corretores', 'Reforço de matemática', 'Shopify App Store'],
  },
  stack: { main: 'Stack', ecommerce: 'E-commerce', studying: 'Estudando' },
  projects: {
    title: 'Projetos',
    intro: 'Produtos que fundei e desenvolvi sozinho, da modelagem do banco ao deploy.',
    items: [
      {
        title: 'Raiz Kids',
        status: 'Em produção',
        tags: ['Laravel', 'Sessão infantil por PIN', 'Assinaturas', 'Webhooks'],
        description: 'Reforço de matemática em casa para crianças de 5 a 12 anos. Diagnóstico de nível, trilhas com fichas diárias e certificados por etapa, acesso da criança por PIN em sessão separada, painel do responsável, aulas ao vivo e planos de assinatura.',
      },
      {
        title: 'Correta Fácil',
        status: 'Em produção',
        tags: ['Laravel', 'Multi-tenant', 'Pagamentos', 'VPS Linux'],
        description: 'SaaS para corretores autônomos. Arquitetura multi-tenant, permissões por perfil, funil de vendas, automações comerciais e integração com meios de pagamento, rodando em VPS Linux configurada por mim.',
      },
    ],
  },
  clients: {
    title: 'Projetos entregues',
    intro: 'Sites e sistemas que desenvolvi para clientes.',
    items: [
      {
        title: 'VM Investimentos Imobiliários',
        status: 'No ar',
        tags: ['Laravel', 'Integração C2S', 'Busca de imóveis', 'Tailwind CSS', 'SEO'],
        description: 'Site em Laravel para uma imobiliária de Praia Grande (SP), integrado ao CRM C2S para os contatos chegarem direto aos corretores. Tem busca de imóveis por cidade, bairro, tipo, código e venda ou locação, páginas de lançamentos, frente mar e prontos para morar, além da página de cada imóvel.',
      },
    ],
  },
  shopify: {
    title: 'Shopify',
    intro: 'Um app publicado na App Store, um tema próprio e uma skill open source para quem quer aprender a plataforma.',
    items: [
      {
        title: 'Flags: selos de oferta e destaque',
        status: 'Na App Store',
        linkLabel: 'Ver na Shopify App Store',
        tags: ['Remix', 'Polaris', 'App Bridge', 'Prisma', 'Theme App Extension', 'Billing API'],
        description: 'App para o lojista criar selos de produto, como Oferta, Novo ou Pouco estoque, sem editar código. São 8 formatos, cores, gradientes e animações, com regras por tag, coleção, estoque ou desconto. Tem texto dinâmico com o desconto e o estoque, cupom que o cliente copia com um clique, preview ao vivo no editor e planos pagos via Shopify Billing.',
      },
      {
        title: 'Shopify Dev Academy',
        status: 'Open source',
        linkLabel: 'Ver no GitHub',
        tags: ['Agent Skills', 'Liquid', 'Functions', 'Checkout'],
        description: 'Skill para agentes de código, como o Claude Code, que ensina desenvolvimento Shopify com aulas, perguntas e desafios práticos. Cobre temas, apps, Functions, checkout, B2B e SEO, e salva o progresso no computador do aluno.',
      },
      {
        title: 'Alpha Theme',
        status: 'Estudo',
        linkLabel: 'Ver loja',
        note: 'Senha da loja: skaigh',
        tags: ['Liquid', 'Sections', 'Blocks'],
        description: 'Tema Online Store 2.0 construído do zero para dominar Liquid, layouts, templates e seções dinâmicas editáveis pelo lojista.',
      },
    ],
  },
  experience: {
    title: 'Experiência',
    intro: 'Desde 2021 em agências, times de e-commerce e nos meus próprios produtos.',
    founder: 'Fundador',
    items: [
      { company: 'Freelancer', role: 'Desenvolvedor Web', period: 'Mar 2026 — Atual', text: 'Atuação autônoma com foco em desenvolvimento web para diferentes clientes. Desenvolvimento de apps e temas para Shopify, criação de sites com Next.js e Strapi (CMS headless), projetos WordPress e manutenção de sistemas Laravel. Em paralelo, sigo evoluindo os produtos próprios que fundei — Litoral Vagas e Correta Fácil — e aprofundando conhecimentos em Laravel e no ecossistema PHP.' },
      { company: 'Nobox', role: 'Desenvolvedor Laravel', period: 'Mar 2025 — Fev 2026', text: 'Atuei no desenvolvimento e manutenção de sistemas internos e sites institucionais em WordPress e Laravel. Principal entrega: sistema corporativo do zero para gestão de 7.000+ itens em estoque, com módulos de aluguel, logística e eventos. Também evolui funcionalidades existentes em outros projetos da empresa, sempre com Laravel, MySQL e deploy em VPS Linux.' },
      { company: 'Litoral Vagas', founder: true, role: 'Desenvolvedor Full Stack', period: '2024 — Atual', text: 'Projeto pessoal onde aplico os aprendizados do ecossistema Laravel enquanto contribuo com a comunidade da Baixada Santista. Plataforma regional de empregos desenvolvida do zero, com 200+ usuários ativos, sistema de candidaturas e envio de currículo direto ao RH — da modelagem do banco ao deploy em produção.' },
      { company: 'Correta Fácil', founder: true, role: 'Desenvolvedor Full Stack', period: '2026 — Atual', text: 'Produto SaaS criado do zero para corretores autônomos. Laravel com multi-tenancy, sistema de permissões por perfil, funil de vendas, automações comerciais e integração com meios de pagamento. Configuração completa de VPS Linux — servidor, domínio, SSL e fluxo de deploy.' },
      { company: 'Agência FG', role: 'Desenvolvedor Front-End', period: 'Jun 2023 — Fev 2025', text: 'Atuei em squads de evolução de e-commerces em VTEX IO, Deco.cx e Linx, desenvolvendo novas funcionalidades com React em ciclos de sprint. Apoiei o time de projetos na construção de lojas do zero em VTEX IO e iniciei os estudos em Shopify durante esse período. Paralelamente, realizei manutenção e melhorias em projetos legados em WordPress e CodeIgniter.' },
      { company: 'MKTNow', role: 'Desenvolvedor Front-End', period: 'Nov 2022 — Jun 2023', text: 'Primeiro contato com time de desenvolvimento e metodologia ágil com sprints. Atuei na construção de novas funcionalidades para lojas VTEX (IO e CMS) e na manutenção e melhoria de sites desenvolvidos em WordPress e Laravel, sempre com foco em performance, Core Web Vitals e SEO técnico.' },
      { company: 'Renove Digital', role: 'Desenvolvedor Front-End', period: 'Out 2021 — Nov 2022', text: 'Primeira experiência em agência digital, participando de todo o ciclo de projetos — do levantamento de requisitos à entrega. Desenvolvimento de sites institucionais e sistemas web com Laravel, React e WordPress, com foco em acessibilidade e boas práticas de UX.' },
    ],
  },
  education: {
    title: 'Formação',
    inProgress: 'Em andamento',
    items: [
      { course: 'Bacharelado em Ciência da Computação', school: 'UNINTER, Centro Universitário Internacional' },
      { course: 'Licenciatura em Matemática', school: 'UNIVESP' },
    ],
  },
  contact: {
    title: 'Tem um projeto em mente?',
    text: 'Sistema em Laravel, loja em Shopify ou VTEX, ou um app sob medida: me conte o que você precisa e eu respondo por email.',
  },
  form: {
    name: 'Nome', namePh: 'Seu nome', nameRequired: 'Informe seu nome.', nameMin: 'O nome precisa ter pelo menos 3 caracteres.',
    email: 'Email', emailPh: 'Seu email', emailRequired: 'Informe seu email.', emailInvalid: 'Use um email válido, como nome@empresa.com.',
    phone: 'Telefone', phoneRequired: 'Informe seu telefone.', phoneInvalid: 'Use o formato (99) 99999-9999.',
    company: 'Empresa', companyPh: 'Sua empresa', submit: 'Enviar mensagem',
  },
  card: { privateRepo: 'Repositório privado', tech: 'Tecnologias' },
  footer: { rights: 'Todos os direitos reservados' },
};

const en: Dict = {
  meta: { title: 'Lucas Martins — Full Stack Developer' },
  nav: { about: 'About', projects: 'Projects', clients: 'Clients', shopify: 'Shopify', experience: 'Experience', contact: 'Contact', language: 'Language' },
  theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
  hero: {
    role: 'Full stack developer. I build Laravel products from scratch to deploy, plus Shopify themes and apps.',
    bio: 'Founder of Correta Fácil, Raiz Kids and Litoral Vagas. I work with REST APIs, authentication, multi-tenancy and Linux VPS servers. In e-commerce, I build for VTEX IO and Shopify, where I published my own app.',
    cta: 'Get in touch',
    productsTitle: 'My products',
    productMeta: ['SaaS for real estate agents', 'Math tutoring for kids', 'Shopify App Store'],
  },
  stack: { main: 'Stack', ecommerce: 'E-commerce', studying: 'Learning' },
  projects: {
    title: 'Projects',
    intro: 'Products I founded and built on my own, from database design to deploy.',
    items: [
      {
        title: 'Raiz Kids',
        status: 'Live',
        tags: ['Laravel', 'PIN-based kid sessions', 'Subscriptions', 'Webhooks'],
        description: 'At-home math tutoring for kids aged 5 to 12. Level assessment, learning tracks with daily worksheets and a certificate for each stage, kid access by PIN in a separate session, a parent dashboard, live classes and subscription plans.',
      },
      {
        title: 'Correta Fácil',
        status: 'Live',
        tags: ['Laravel', 'Multi-tenant', 'Payments', 'Linux VPS'],
        description: 'SaaS for independent real estate agents. Multi-tenant architecture, role-based permissions, sales pipeline, sales automations and payment integrations, running on a Linux VPS I set up myself.',
      },
    ],
  },
  clients: {
    title: 'Client work',
    intro: 'Websites and systems I built for clients.',
    items: [
      {
        title: 'VM Investimentos Imobiliários',
        status: 'Live',
        tags: ['Laravel', 'C2S integration', 'Property search', 'Tailwind CSS', 'SEO'],
        description: 'Laravel website for a real estate agency in Praia Grande, Brazil, integrated with the C2S CRM so leads reach the agents directly. Includes property search by city, neighborhood, type, listing code and sale or rent, pages for new developments, beachfront and move-in-ready properties, plus a page for each listing.',
      },
    ],
  },
  shopify: {
    title: 'Shopify',
    intro: 'An app published on the App Store, a custom theme and an open source skill for anyone learning the platform.',
    items: [
      {
        title: 'Flags: sale and highlight badges',
        status: 'On the App Store',
        linkLabel: 'View on the Shopify App Store',
        tags: ['Remix', 'Polaris', 'App Bridge', 'Prisma', 'Theme App Extension', 'Billing API'],
        description: 'Lets merchants add product badges such as Sale, New or Low stock without touching code. 8 shapes, colors, gradients and animations, with rules by tag, collection, stock or discount. Supports dynamic text with the discount and stock, coupons shoppers copy in one click, a live preview in the editor and paid plans through Shopify Billing.',
      },
      {
        title: 'Shopify Dev Academy',
        status: 'Open source',
        linkLabel: 'View on GitHub',
        tags: ['Agent Skills', 'Liquid', 'Functions', 'Checkout'],
        description: 'A skill for coding agents such as Claude Code that teaches Shopify development through lessons, questions and hands-on challenges. Covers themes, apps, Functions, checkout, B2B and SEO, and saves progress on the student’s computer.',
      },
      {
        title: 'Alpha Theme',
        status: 'Study project',
        linkLabel: 'View store',
        note: 'Store password: skaigh',
        tags: ['Liquid', 'Sections', 'Blocks'],
        description: 'An Online Store 2.0 theme built from scratch to master Liquid, layouts, templates and dynamic sections merchants can edit.',
      },
    ],
  },
  experience: {
    title: 'Experience',
    intro: 'Since 2021 at agencies, e-commerce teams and on my own products.',
    founder: 'Founder',
    items: [
      { company: 'Freelancer', role: 'Web Developer', period: 'Mar 2026 — Present', text: 'Independent web development for a range of clients: Shopify apps and themes, websites with Next.js and Strapi (headless CMS), WordPress projects and Laravel system maintenance. Alongside that, I keep growing the products I founded — Litoral Vagas and Correta Fácil — and deepening my knowledge of Laravel and the PHP ecosystem.' },
      { company: 'Nobox', role: 'Laravel Developer', period: 'Mar 2025 — Feb 2026', text: 'Built and maintained internal systems and corporate websites in WordPress and Laravel. Main delivery: a company system built from scratch to manage 7,000+ inventory items, with rental, logistics and events modules. I also extended features in other company projects, always with Laravel, MySQL and Linux VPS deploys.' },
      { company: 'Litoral Vagas', founder: true, role: 'Full Stack Developer', period: '2024 — Present', text: 'A personal project where I apply what I learn in the Laravel ecosystem while helping the Baixada Santista community. A regional job board built from scratch, with 200+ active users, job applications and résumés sent straight to HR — from database design to production deploy.' },
      { company: 'Correta Fácil', founder: true, role: 'Full Stack Developer', period: '2026 — Present', text: 'A SaaS product built from scratch for independent real estate agents. Laravel with multi-tenancy, role-based permissions, sales pipeline, sales automations and payment integrations. Full Linux VPS setup — server, domain, SSL and deploy workflow.' },
      { company: 'Agência FG', role: 'Front-End Developer', period: 'Jun 2023 — Feb 2025', text: 'Worked in squads evolving e-commerce stores on VTEX IO, Deco.cx and Linx, shipping new features with React in sprint cycles. Supported the projects team building stores from scratch on VTEX IO and started learning Shopify during this period. I also maintained and improved legacy WordPress and CodeIgniter projects.' },
      { company: 'MKTNow', role: 'Front-End Developer', period: 'Nov 2022 — Jun 2023', text: 'My first development team and first agile sprints. Built new features for VTEX stores (IO and CMS) and maintained and improved WordPress and Laravel websites, with a focus on performance, Core Web Vitals and technical SEO.' },
      { company: 'Renove Digital', role: 'Front-End Developer', period: 'Oct 2021 — Nov 2022', text: 'My first digital agency role, taking part in the full project cycle — from requirements to delivery. Built corporate websites and web systems with Laravel, React and WordPress, with a focus on accessibility and good UX practices.' },
    ],
  },
  education: {
    title: 'Education',
    inProgress: 'In progress',
    items: [
      { course: 'Bachelor’s in Computer Science', school: 'UNINTER, Centro Universitário Internacional' },
      { course: 'Teaching degree in Mathematics', school: 'UNIVESP' },
    ],
  },
  contact: {
    title: 'Have a project in mind?',
    text: 'A Laravel system, a Shopify or VTEX store, or a custom app: tell me what you need and I’ll reply by email.',
  },
  form: {
    name: 'Name', namePh: 'Your name', nameRequired: 'Enter your name.', nameMin: 'Your name needs at least 3 characters.',
    email: 'Email', emailPh: 'Your email', emailRequired: 'Enter your email.', emailInvalid: 'Use a valid email, like name@company.com.',
    phone: 'Phone', phoneRequired: 'Enter your phone number.', phoneInvalid: 'Use the format (99) 99999-9999.',
    company: 'Company', companyPh: 'Your company', submit: 'Send message',
  },
  card: { privateRepo: 'Private repository', tech: 'Technologies' },
  footer: { rights: 'All rights reserved' },
};

const es: Dict = {
  meta: { title: 'Lucas Martins — Desarrollador Full Stack' },
  nav: { about: 'Sobre mí', projects: 'Proyectos', clients: 'Clientes', shopify: 'Shopify', experience: 'Experiencia', contact: 'Contacto', language: 'Idioma' },
  theme: { toLight: 'Usar tema claro', toDark: 'Usar tema oscuro' },
  hero: {
    role: 'Desarrollador full stack. Creo productos en Laravel desde cero hasta el deploy, y temas y apps para Shopify.',
    bio: 'Fundador de Correta Fácil, Raiz Kids y Litoral Vagas. Trabajo con APIs REST, autenticación, multi-tenant y servidores VPS Linux. En e-commerce desarrollo para VTEX IO y Shopify, donde publiqué mi propia app.',
    cta: 'Hablemos',
    productsTitle: 'Mis productos',
    productMeta: ['SaaS para corredores inmobiliarios', 'Refuerzo de matemáticas', 'Shopify App Store'],
  },
  stack: { main: 'Stack', ecommerce: 'E-commerce', studying: 'Aprendiendo' },
  projects: {
    title: 'Proyectos',
    intro: 'Productos que fundé y desarrollé por mi cuenta, desde el modelado de la base de datos hasta el deploy.',
    items: [
      {
        title: 'Raiz Kids',
        status: 'En producción',
        tags: ['Laravel', 'Sesión infantil con PIN', 'Suscripciones', 'Webhooks'],
        description: 'Refuerzo de matemáticas en casa para niños de 5 a 12 años. Diagnóstico de nivel, rutas con fichas diarias y certificados por etapa, acceso del niño con PIN en una sesión separada, panel para los padres, clases en vivo y planes de suscripción.',
      },
      {
        title: 'Correta Fácil',
        status: 'En producción',
        tags: ['Laravel', 'Multi-tenant', 'Pagos', 'VPS Linux'],
        description: 'SaaS para corredores inmobiliarios independientes. Arquitectura multi-tenant, permisos por perfil, embudo de ventas, automatizaciones comerciales e integración con medios de pago, en un VPS Linux configurado por mí.',
      },
    ],
  },
  clients: {
    title: 'Proyectos entregados',
    intro: 'Sitios y sistemas que desarrollé para clientes.',
    items: [
      {
        title: 'VM Investimentos Imobiliários',
        status: 'En línea',
        tags: ['Laravel', 'Integración C2S', 'Búsqueda de inmuebles', 'Tailwind CSS', 'SEO'],
        description: 'Sitio en Laravel para una inmobiliaria de Praia Grande (Brasil), integrado al CRM C2S para que los contactos lleguen directo a los corredores. Incluye búsqueda de inmuebles por ciudad, barrio, tipo, código y venta o alquiler, páginas de lanzamientos, frente al mar y listos para vivir, además de la página de cada inmueble.',
      },
    ],
  },
  shopify: {
    title: 'Shopify',
    intro: 'Una app publicada en la App Store, un tema propio y una skill open source para quien quiere aprender la plataforma.',
    items: [
      {
        title: 'Flags: sellos de oferta y destaque',
        status: 'En la App Store',
        linkLabel: 'Ver en la Shopify App Store',
        tags: ['Remix', 'Polaris', 'App Bridge', 'Prisma', 'Theme App Extension', 'Billing API'],
        description: 'Permite al comerciante crear sellos de producto, como Oferta, Nuevo o Poco stock, sin editar código. 8 formatos, colores, degradados y animaciones, con reglas por etiqueta, colección, stock o descuento. Admite texto dinámico con el descuento y el stock, cupones que el cliente copia con un clic, vista previa en vivo en el editor y planes de pago con Shopify Billing.',
      },
      {
        title: 'Shopify Dev Academy',
        status: 'Open source',
        linkLabel: 'Ver en GitHub',
        tags: ['Agent Skills', 'Liquid', 'Functions', 'Checkout'],
        description: 'Skill para agentes de código, como Claude Code, que enseña desarrollo en Shopify con lecciones, preguntas y desafíos prácticos. Cubre temas, apps, Functions, checkout, B2B y SEO, y guarda el progreso en la computadora del alumno.',
      },
      {
        title: 'Alpha Theme',
        status: 'Estudio',
        linkLabel: 'Ver tienda',
        note: 'Contraseña de la tienda: skaigh',
        tags: ['Liquid', 'Sections', 'Blocks'],
        description: 'Tema Online Store 2.0 construido desde cero para dominar Liquid, layouts, templates y secciones dinámicas que el comerciante puede editar.',
      },
    ],
  },
  experience: {
    title: 'Experiencia',
    intro: 'Desde 2021 en agencias, equipos de e-commerce y en mis propios productos.',
    founder: 'Fundador',
    items: [
      { company: 'Freelancer', role: 'Desarrollador Web', period: 'Mar 2026 — Actual', text: 'Trabajo independiente enfocado en desarrollo web para distintos clientes. Apps y temas para Shopify, sitios con Next.js y Strapi (CMS headless), proyectos WordPress y mantenimiento de sistemas Laravel. En paralelo sigo haciendo crecer los productos que fundé — Litoral Vagas y Correta Fácil — y profundizando en Laravel y el ecosistema PHP.' },
      { company: 'Nobox', role: 'Desarrollador Laravel', period: 'Mar 2025 — Feb 2026', text: 'Desarrollé y mantuve sistemas internos y sitios institucionales en WordPress y Laravel. Entrega principal: un sistema corporativo desde cero para gestionar más de 7.000 artículos en inventario, con módulos de alquiler, logística y eventos. También evolucioné funcionalidades de otros proyectos de la empresa, siempre con Laravel, MySQL y deploy en VPS Linux.' },
      { company: 'Litoral Vagas', founder: true, role: 'Desarrollador Full Stack', period: '2024 — Actual', text: 'Proyecto personal donde aplico lo que aprendo del ecosistema Laravel mientras ayudo a la comunidad de la Baixada Santista. Bolsa de empleo regional desarrollada desde cero, con más de 200 usuarios activos, postulaciones y envío del currículum directo a RR. HH. — desde el modelado de la base de datos hasta el deploy en producción.' },
      { company: 'Correta Fácil', founder: true, role: 'Desarrollador Full Stack', period: '2026 — Actual', text: 'Producto SaaS creado desde cero para corredores inmobiliarios independientes. Laravel con multi-tenancy, permisos por perfil, embudo de ventas, automatizaciones comerciales e integración con medios de pago. Configuración completa de VPS Linux — servidor, dominio, SSL y flujo de deploy.' },
      { company: 'Agência FG', role: 'Desarrollador Front-End', period: 'Jun 2023 — Feb 2025', text: 'Trabajé en squads de evolución de e-commerces en VTEX IO, Deco.cx y Linx, desarrollando nuevas funcionalidades con React en ciclos de sprint. Apoyé al equipo de proyectos en la construcción de tiendas desde cero en VTEX IO y empecé a estudiar Shopify en ese periodo. En paralelo hice mantenimiento y mejoras en proyectos legacy en WordPress y CodeIgniter.' },
      { company: 'MKTNow', role: 'Desarrollador Front-End', period: 'Nov 2022 — Jun 2023', text: 'Primer contacto con un equipo de desarrollo y con metodología ágil por sprints. Construí nuevas funcionalidades para tiendas VTEX (IO y CMS) y mantuve y mejoré sitios en WordPress y Laravel, con foco en rendimiento, Core Web Vitals y SEO técnico.' },
      { company: 'Renove Digital', role: 'Desarrollador Front-End', period: 'Oct 2021 — Nov 2022', text: 'Primera experiencia en agencia digital, participando en todo el ciclo de los proyectos — del relevamiento de requisitos a la entrega. Desarrollo de sitios institucionales y sistemas web con Laravel, React y WordPress, con foco en accesibilidad y buenas prácticas de UX.' },
    ],
  },
  education: {
    title: 'Formación',
    inProgress: 'En curso',
    items: [
      { course: 'Licenciatura en Ciencias de la Computación', school: 'UNINTER, Centro Universitário Internacional' },
      { course: 'Profesorado en Matemáticas', school: 'UNIVESP' },
    ],
  },
  contact: {
    title: '¿Tienes un proyecto en mente?',
    text: 'Un sistema en Laravel, una tienda en Shopify o VTEX, o una app a medida: cuéntame qué necesitas y te respondo por email.',
  },
  form: {
    name: 'Nombre', namePh: 'Tu nombre', nameRequired: 'Escribe tu nombre.', nameMin: 'El nombre necesita al menos 3 caracteres.',
    email: 'Email', emailPh: 'Tu email', emailRequired: 'Escribe tu email.', emailInvalid: 'Usa un email válido, como nombre@empresa.com.',
    phone: 'Teléfono', phoneRequired: 'Escribe tu teléfono.', phoneInvalid: 'Usa el formato (99) 99999-9999.',
    company: 'Empresa', companyPh: 'Tu empresa', submit: 'Enviar mensaje',
  },
  card: { privateRepo: 'Repositorio privado', tech: 'Tecnologías' },
  footer: { rights: 'Todos los derechos reservados' },
};

export const TRANSLATIONS: Record<Lang, Dict> = { pt, en, es };
