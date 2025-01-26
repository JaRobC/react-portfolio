import { getGitHubRepos } from "@/lib/github"
import { ProjectCard } from "./project-card"

export default async function ProjectsPage() {
  const username = "JaRobC"; // Replace with your actual GitHub username
  const repos = await getGitHubRepos(username);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-custom -z-10" />
      
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
              Projects
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of my work and open source contributions
            </p>
          </div>
          {repos.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              No repositories found. Please check your GitHub configuration.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

