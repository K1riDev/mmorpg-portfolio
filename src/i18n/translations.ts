export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      projects: "Proyectos",
      resume: "CV",
      contact: "Contacto",
    },
    home: {
      welcome: "Bienvenido al Reino KiriDev",
      subtitle: "Frontend Developer en progreso hacia el Backend",
      description:
        "Desarrollador frontend especializado en crear experiencias web inmersivas y funcionales. Actualmente expandiendo mis habilidades hacia el desarrollo backend.",
      enterButton: "Entrar al Reino",
      stats: {
        experience: "Años de Experiencia",
        projects: "Proyectos Completados",
        technologies: "Tecnologías Dominadas",
        stars: "Estrellas en GitHub",
        forks: "Forks en GitHub",
      },
    },
    about: {
      title: "Perfil del Desarrollador",
      description:
        "Soy KiriDev, un desarrollador frontend apasionado por crear interfaces de usuario excepcionales. Mi viaje comenzó con curiosidad por la web y ha evolucionado hacia una dedicación completa al desarrollo.",
      skills: "Habilidades de Combate",
      experience: "Experiencia de Batalla",
      learning: "Actualmente Aprendiendo",
    },
    projects: {
      title: "Arsenal de Proyectos",
      subtitle: "Una colección de mis aventuras en el desarrollo web",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      viewAll: "Ver todos los proyectos",
      technologies: "Tecnologías",
      status: {
        completed: "Completado",
        inProgress: "En Progreso",
        maintained: "Mantenido",
      },
    },
    resume: {
      title: "Pergamino de Experiencia",
      subtitle: "Mi trayectoria profesional y habilidades técnicas",
      download: "Descargar CV",
      summary: {
        title: "Resumen Profesional",
        description:
          "Desarrollador frontend apasionado con experiencia en tecnologías modernas, enfocado en la creación de interfaces de usuario excepcionales y experiencias web inmersivas. Actualmente expandiendo conocimientos hacia el desarrollo backend.",
      },
      experience: {
        title: "Experiencia Profesional",
      },
      education: {
        title: "Formación Académica",
      },
      skills: {
        title: "Habilidades Técnicas",
      },
      languages: {
        title: "Idiomas",
      },
      sections: {
        experience: "Experiencia Profesional",
        education: "Formación Académica",
        skills: "Competencias Técnicas",
      },
    },
    contact: {
      title: "Establecer Comunicación",
      subtitle: "Envía un mensaje a través del portal de comunicación",
      form: {
        title: "Enviar Mensaje",
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Correo Electrónico",
        emailPlaceholder: "tu@email.com",
        subject: "Asunto",
        subjectPlaceholder: "¿En qué puedo ayudarte?",
        message: "Mensaje",
        messagePlaceholder: "Escribe tu mensaje aquí...",
        send: "Enviar Mensaje",
      },
      info: {
        title: "Información de Contacto",
        availability: "Disponible para proyectos freelance",
      },
      social: {
        title: "Redes Sociales",
      },
      response: {
        title: "Tiempo de Respuesta",
        description:
          "Normalmente respondo en un plazo de 24-48 horas. Para proyectos urgentes, puedes contactarme directamente por email.",
      },
      success: "Mensaje enviado exitosamente",
      error: "Error al enviar el mensaje",
    },
    theme: {
      light: "Modo Día",
      dark: "Modo Noche",
      toggle: "Cambiar Tema",
    },
    loading: "Cargando el Reino...",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume",
      contact: "Contact",
    },
    home: {
      welcome: "Welcome to the Digital Realm",
      subtitle: "Frontend Developer progressing towards Backend",
      description:
        "Frontend developer specialized in creating immersive and functional web experiences. Currently expanding my skills towards backend development.",
      enterButton: "Enter the Realm",
      stats: {
        experience: "Years of Experience",
        projects: "Completed Projects",
        technologies: "Technologies Mastered",
        stars: "GitHub Stars",
        forks: "GitHub Forks",
      },
    },
    about: {
      title: "Developer Profile",
      description:
        "I am KiriDev, a frontend developer passionate about creating exceptional user interfaces. My journey started with curiosity about the web and has evolved into a complete dedication to development.",
      skills: "Combat Skills",
      experience: "Battle Experience",
      learning: "Currently Learning",
    },
    projects: {
      title: "Project Arsenal",
      subtitle: "A collection of my adventures in web development",
      viewProject: "View Project",
      viewCode: "View Code",
      viewAll: "View all projects",
      technologies: "Technologies",
      status: {
        completed: "Completed",
        inProgress: "In Progress",
        maintained: "Maintained",
      },
    },
    resume: {
      title: "Experience Scroll",
      subtitle: "My professional journey and technical skills",
      download: "Download Resume",
      summary: {
        title: "Professional Summary",
        description:
          "Passionate frontend developer with experience in modern technologies, focused on creating exceptional user interfaces and immersive web experiences. Currently expanding knowledge towards backend development.",
      },
      experience: {
        title: "Professional Experience",
      },
      education: {
        title: "Education",
      },
      skills: {
        title: "Technical Skills",
      },
      languages: {
        title: "Languages",
      },
      sections: {
        experience: "Professional Experience",
        education: "Academic Formation",
        skills: "Technical Skills",
      },
    },
    contact: {
      title: "Establish Communication",
      subtitle: "Send a message through the communication portal",
      form: {
        title: "Send Message",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjectPlaceholder: "How can I help you?",
        message: "Message",
        messagePlaceholder: "Write your message here...",
        send: "Send Message",
      },
      info: {
        title: "Contact Information",
        availability: "Available for freelance projects",
      },
      social: {
        title: "Social Media",
      },
      response: {
        title: "Response Time",
        description:
          "I usually respond within 24-48 hours. For urgent projects, you can contact me directly by email.",
      },
      success: "Message sent successfully",
      error: "Error sending message",
    },
    theme: {
      light: "Day Mode",
      dark: "Night Mode",
      toggle: "Toggle Theme",
    },
    loading: "Loading the Realm...",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;
