export type GitHubRepo = {
  id: number
  name: string
  full_name: string
  description: string
  html_url: string
  homepage: string | null
  stargazers_count: number
  language: string
  topics: string[]
  created_at: string
  updated_at: string
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  if (!process.env.GITHUB_TOKEN) {
    console.error("GITHUB_TOKEN is not defined");
    return [];
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`, 
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("GitHub API Error:", error);
      return [];
    }

    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export type GitHubProfile = {
  name: string
  avatar_url: string
  bio: string
  location: string
  blog: string
  twitter_username: string | null
  public_repos: number
  followers: number
  following: number
}

export async function getGitHubProfile(username: string): Promise<GitHubProfile | null> {
  if (!process.env.GITHUB_TOKEN) {
    console.error("GITHUB_TOKEN is not defined");
    return null;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error("GitHub API Error:", await response.text());
      return null;
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    return null;
  }
}

