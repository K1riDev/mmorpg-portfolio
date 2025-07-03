// GitHub API utilities
export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  topics: string[];
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const repos: GitHubRepo[] = await response.json();
    return repos.filter(repo => !repo.fork);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
}

// Language colors for GitHub repositories
export function getLanguageColor(language: string | null): string {
  if (!language) return '#6b7280';
  
  const colors: Record<string, string> = {
    'JavaScript': '#fbbf24',
    'TypeScript': '#f59e0b', 
    'Vue': '#84cc16',
    'React': '#06b6d4',
    'HTML': '#ef4444',
    'CSS': '#3b82f6',
    'Python': '#eab308',
    'Astro': '#f97316',
    'Svelte': '#ff3e00',
    'Angular': '#dd0031',
    'PHP': '#777bb4',
    'Go': '#00add8',
    'Rust': '#dea584',
    'Java': '#ed8b00'
  };
  return colors[language] || '#6b7280';
}
