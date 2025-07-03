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
      welcome: "Bienvenido al Reino Digital",
      subtitle: "Frontend Developer en progreso hacia el Backend",
      description:
        "Desarrollador frontend especializado en crear experiencias web inmersivas y funcionales. Actualmente expandiendo mis habilidades hacia el desarrollo backend.",
      enterButton: "Entrar al Reino",
      stats: {
        experience: "Años de Experiencia",
        projects: "Proyectos Completados",
        technologies: "Tecnologías Dominadas",
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
      description: "Una colección de mis aventuras en el desarrollo web",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      technologies: "Tecnologías",
      status: {
        completed: "Completado",
        inProgress: "En Progreso",
        maintained: "Mantenido",
      },
    },
    resume: {
      title: "Pergamino de Experiencia",
      download: "Descargar CV",
      sections: {
        experience: "Experiencia Profesional",
        education: "Formación Académica",
        skills: "Competencias Técnicas",
        certifications: "Certificaciones",
      },
    },
    contact: {
      title: "Establecer Comunicación",
      description: "Envía un mensaje a través del portal de comunicación",
      form: {
        name: "Nombre",
        email: "Correo Electrónico",
        message: "Mensaje",
        send: "Enviar Mensaje",
      },
      social: "Canales de Comunicación",
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
      description: "A collection of my adventures in web development",
      viewProject: "View Project",
      viewCode: "View Code",
      technologies: "Technologies",
      status: {
        completed: "Completed",
        inProgress: "In Progress",
        maintained: "Maintained",
      },
    },
    resume: {
      title: "Experience Scroll",
      download: "Download Resume",
      sections: {
        experience: "Professional Experience",
        education: "Academic Formation",
        skills: "Technical Skills",
        certifications: "Certifications",
      },
    },
    contact: {
      title: "Establish Communication",
      description: "Send a message through the communication portal",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
      },
      social: "Communication Channels",
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
