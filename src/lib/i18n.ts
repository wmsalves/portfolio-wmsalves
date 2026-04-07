export type Language = "en" | "pt-BR";

type Translations = Record<string, any>;

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      about: "About",
      contact: "Contact",
      experience: "Experience",
    },
    header: {
      menu: "Menu",
      openMenu: "Open menu",
      themeToggle: "Toggle theme",
      languageToggle: "Change language",
    },
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    hero: {
      badge: "Open to new projects",
      titleTop: "Building thoughtful",
      titleAccent: "digital products",
      titleBottom: "with a systems mindset.",
      description:
        "I design, architect, and ship full-stack experiences focused on performance, clarity, and long-term maintainability.",
      cta: "See case studies",
      topics: {
        work: "Work",
        toolkit: "Toolkit",
        story: "Story",
        contact: "Contact",
        experience: "Experience",
      },
      card: {
        now: "Now",
        title: "Personal sandbox",
        description:
          "A living portfolio focused on experiments, product thinking, and craft. Built to evolve with new projects and ideas.",
        focus: "Focus",
        focusItems: [
          "Performance-first UI systems",
          "Type-safe, composable codebases",
          "Human-centered product decisions",
        ],
        availability: "Availability",
        availabilityText:
          "Open for select freelance and product partnerships.",
        startConversation: "Start a conversation",
      },
    },
    projects: {
      eyebrow: "Selected",
      title: "Featured",
      titleAccent: "Projects",
      subtitle:
        "A curated selection of work spanning product UX, backend systems, and end-to-end delivery.",
      openRepo: "Open {{title}} repository",
      viewProject: "View {{title}}",
    },
    skills: {
      eyebrow: "Stack",
      title: "Technical",
      titleAccent: "Toolkit",
      subtitle:
        "The tools and technologies I use to ship reliable, high-performance products.",
      cards: {
        frameworks: "Frameworks & Libraries",
        coreLanguages: "Core Languages",
        infraData: "Infra & Data",
        exploring: "Exploring Now",
      },
      frameworksDescription:
        "The core of my full-stack workflow with a focus on performance and UX.",
      exploringDescription:
        "Currently expanding my knowledge in enterprise technologies.",
    },
    about: {
      eyebrow: "Story",
      title: "Beyond the",
      titleAccent: "Code",
      subtitle:
        "A personal snapshot of how I approach building software and life outside the editor.",
      paragraphs: [
        "I am a developer passionate about crafting interfaces that feel intentional and scale cleanly. My journey started with curiosity and turned into a steady pursuit of resilient architectures.",
        "When I am not designing systems, you will likely find me studying design patterns, listening to music, or enjoying a good coffee.",
      ],
      yearsExp: "Years Exp.",
      projects: "Projects",
    },
    contact: {
      title: "Let us build something together",
      subtitle:
        "I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      cta: "Send me an email",
      helper: "Or connect with me on the social networks listed above.",
    },
    experience: {
      eyebrow: "Journey",
      title: "Professional",
      titleAccent: "Experience",
      subtitle:
        "Roles and initiatives where I shipped impactful, user-focused software.",
    },
    footer: {
      tagline:
        "Crafting digital experiences focused on performance, accessibility, and modern design.",
      navigation: "Navigation",
      social: "Social",
      builtWith: "Built with Next.js and Tailwind CSS",
      rights: "(c) {{year}}. All rights reserved.",
    },
    sticky: {
      role: "Full-stack Developer",
      location: "Belo Horizonte, Brazil",
      open: "Open for select projects",
      now: "Now",
      nowText:
        "Building a personal system of case studies, experiments, and product notes.",
      active: "Active",
      exploring: "Exploring {{section}}",
      sections: {
        home: "home",
        projects: "projects",
        skills: "skills",
      },
      insights: {
        home: [
          "Welcome — this is where everything starts.",
          "Scroll to explore my work and mindset.",
        ],
        projects: [
          "A selection of projects focused on quality.",
          "Built with scalability and real-world usage in mind.",
        ],
        skills: [
          "A toolkit shaped by practical experience.",
          "Always evolving with new technologies.",
        ],
      },
    },
    notFound: {
      title: "Page Not Found",
      message:
        "It seems you got lost in hyperspace. The page you are looking for does not exist or has been moved.",
      cta: "Back to Base",
    },
  },
  "pt-BR": {
    nav: {
      home: "Início",
      projects: "Projetos",
      skills: "Habilidades",
      about: "Sobre",
      contact: "Contato",
      experience: "Experiência",
    },
    header: {
      menu: "Menu",
      openMenu: "Abrir menu",
      themeToggle: "Alternar tema",
      languageToggle: "Trocar idioma",
    },
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    hero: {
      badge: "Aberto a novos projetos",
      titleTop: "Construindo",
      titleAccent: "produtos digitais",
      titleBottom: "com mentalidade de sistemas.",
      description:
        "Eu desenho, arquiteturo e entrego experiências full-stack com foco em performance, clareza e manutenibilidade.",
      cta: "Ver estudos de caso",
      topics: {
        work: "Trabalhos",
        toolkit: "Toolkit",
        story: "História",
        contact: "Contato",
        experience: "Experiência",
      },
      card: {
        now: "Agora",
        title: "Sandbox pessoal",
        description:
          "Um portfólio vivo focado em experimentos, pensamento de produto e craft. Evolui com novos projetos e ideias.",
        focus: "Foco",
        focusItems: [
          "Sistemas de UI orientados à performance",
          "Codebases tipadas e componíveis",
          "Decisões centradas no usuário",
        ],
        availability: "Disponibilidade",
        availabilityText:
          "Aberto a projetos seletos de freelance e parcerias de produto.",
        startConversation: "Iniciar conversa",
      },
    },
    projects: {
      eyebrow: "Selecionados",
      title: "Projetos",
      titleAccent: "em destaque",
      subtitle:
        "Uma seleção de trabalhos em UX de produto, sistemas backend e entrega ponta a ponta.",
      openRepo: "Abrir repositório de {{title}}",
      viewProject: "Ver {{title}}",
    },
    skills: {
      eyebrow: "Stack",
      title: "Toolkit",
      titleAccent: "técnico",
      subtitle:
        "Ferramentas e tecnologias que uso para entregar produtos confiáveis e performáticos.",
      cards: {
        frameworks: "Frameworks & Bibliotecas",
        coreLanguages: "Linguagens-chave",
        infraData: "Infra & Dados",
        exploring: "Explorando agora",
      },
      frameworksDescription:
        "O núcleo do meu fluxo full-stack com foco em performance e UX.",
      exploringDescription:
        "Atualmente expandindo meu conhecimento em tecnologias corporativas.",
    },
    about: {
      eyebrow: "História",
      title: "Além do",
      titleAccent: "código",
      subtitle:
        "Um retrato pessoal de como encaro desenvolvimento e vida fora do editor.",
      paragraphs: [
        "Sou um desenvolvedor apaixonado por criar interfaces intencionais e escaláveis. Minha jornada começou com curiosidade e virou uma busca constante por arquiteturas resilientes.",
        "Quando não estou desenhando sistemas, você provavelmente vai me encontrar estudando padrões de projeto, ouvindo música ou apreciando um bom café.",
      ],
      yearsExp: "Anos Exp.",
      projects: "Projetos",
    },
    contact: {
      title: "Vamos construir algo juntos",
      subtitle:
        "Estou sempre aberto para conversar sobre novos projetos, ideias criativas ou oportunidades de colaboração.",
      cta: "Enviar um e-mail",
      helper: "Ou conecte-se comigo nas redes sociais acima.",
    },
    experience: {
      eyebrow: "Jornada",
      title: "Experiência",
      titleAccent: "profissional",
      subtitle:
        "Funções e iniciativas em que entreguei software com foco no usuário.",
    },
    footer: {
      tagline:
        "Criando experiências digitais com foco em performance, acessibilidade e design moderno.",
      navigation: "Navegação",
      social: "Social",
      builtWith: "Feito com Next.js e Tailwind CSS",
      rights: "(c) {{year}}. Todos os direitos reservados.",
    },
    sticky: {
      role: "Desenvolvedor Full-stack",
      location: "Belo Horizonte, Brasil",
      open: "Aberto a projetos seletos",
      now: "Agora",
      nowText:
        "Construindo um sistema pessoal de estudos de caso, experimentos e notas de produto.",
      active: "Ativo",
      exploring: "Explorando {{section}}",
      sections: {
        home: "início",
        projects: "projetos",
        skills: "skills",
      },
      insights: {
        home: [
          "Bem-vindo — é aqui que tudo começa.",
          "Role para explorar meu trabalho e minha visão.",
        ],
        projects: [
          "Uma seleção de projetos focados em qualidade.",
          "Construídos com escalabilidade e uso real em mente.",
        ],
        skills: [
          "Um toolkit moldado pela prática.",
          "Sempre evoluindo com novas tecnologias.",
        ],
      },
    },
    notFound: {
      title: "Página não encontrada",
      message:
        "Parece que você se perdeu no hiperespaço. A página que procura não existe ou foi movida.",
      cta: "Voltar",
    },
  },
};

export function getTranslation(
  lang: Language,
  key: string,
  vars?: Record<string, string | number>,
) {
  const value = key
    .split(".")
    .reduce<any>((acc, part) => (acc ? acc[part] : undefined), translations[lang]) ??
    key
      .split(".")
      .reduce<any>((acc, part) => (acc ? acc[part] : undefined), translations.en) ??
    key;

  if (typeof value !== "string") return value;

  if (!vars) return value;

  return Object.keys(vars).reduce(
    (str, varKey) => str.replace(`{{${varKey}}}`, String(vars[varKey])),
    value,
  );
}
