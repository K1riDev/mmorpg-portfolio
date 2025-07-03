// Static data to avoid excessive GitHub API calls during development
export const staticGitHubData = {
  user: {
    login: "K1riDev",
    name: "KiriDev",
    bio: "Frontend Developer passionate about creating exceptional web experiences",
    public_repos: 39,
    followers: 25,
    following: 30,
    created_at: "2019-07-08T00:00:00Z",
    avatar_url: "https://github.com/K1riDev.png"
  },
  
  stats: {
    yearsOfExperience: 5,
    totalProjects: 39,
    technologiesUsed: [
      "JavaScript",
      "Lua", 
      "Astro",
      "TypeScript",
      "CSS",
      "HTML",
      "C#",
      "C++",
      "Node.js",
      "React",
      "Vue.js",
      "TailwindCSS",
      "Git",
      "Docker"
    ],
    totalStars: 47,
    totalForks: 12
  },

  featuredRepos: [
    {
      id: 1,
      name: "mmorpg-portfolio",
      description: "Portfolio personal con diseño inspirado en MMORPG usando Astro y TailwindCSS",
      html_url: "https://github.com/K1riDev/mmorpg-portfolio",
      homepage: "https://kiridev.dev",
      language: "Astro",
      stargazers_count: 15,
      forks_count: 3,
      fork: false,
      topics: ["astro", "portfolio", "mmorpg", "tailwindcss", "typescript"],
      created_at: "2024-12-15T00:00:00Z"
    },
    {
      id: 2,
      name: "vue-dashboard",
      description: "Dashboard moderno construido con Vue 3, TypeScript y TailwindCSS",
      html_url: "https://github.com/K1riDev/vue-dashboard",
      homepage: "https://vue-dashboard-demo.netlify.app",
      language: "Vue",
      stargazers_count: 12,
      forks_count: 4,
      fork: false,
      topics: ["vue", "typescript", "dashboard", "tailwindcss"],
      created_at: "2024-10-20T00:00:00Z"
    },
    {
      id: 3,
      name: "react-components",
      description: "Librería de componentes React reutilizables con Storybook",
      html_url: "https://github.com/K1riDev/react-components",
      homepage: "https://react-components-storybook.netlify.app",
      language: "TypeScript",
      stargazers_count: 8,
      forks_count: 2,
      fork: false,
      topics: ["react", "components", "storybook", "typescript"],
      created_at: "2024-08-15T00:00:00Z"
    },
    {
      id: 4,
      name: "fivem-scripts",
      description: "Colección de scripts para servidores FiveM con Lua y JavaScript",
      html_url: "https://github.com/K1riDev/fivem-scripts",
      homepage: null,
      language: "Lua",
      stargazers_count: 6,
      forks_count: 2,
      fork: false,
      topics: ["fivem", "lua", "gaming", "roleplay"],
      created_at: "2023-05-10T00:00:00Z"
    },
    {
      id: 5,
      name: "discord-bot",
      description: "Bot de Discord multi-funcional desarrollado con Node.js",
      html_url: "https://github.com/K1riDev/discord-bot",
      homepage: null,
      language: "JavaScript",
      stargazers_count: 4,
      forks_count: 1,
      fork: false,
      topics: ["discord", "bot", "nodejs", "javascript"],
      created_at: "2022-03-20T00:00:00Z"
    },
    {
      id: 6,
      name: "learning-rust",
      description: "Proyectos de aprendizaje en Rust - ejercicios y experimentación",
      html_url: "https://github.com/K1riDev/learning-rust",
      homepage: null,
      language: "Rust",
      stargazers_count: 2,
      forks_count: 0,
      fork: false,
      topics: ["rust", "learning", "experiments"],
      created_at: "2024-06-01T00:00:00Z"
    }
  ]
};

// Flag to control API usage
export const USE_GITHUB_API = process.env.NODE_ENV === 'production' || process.env.GITHUB_TOKEN;
