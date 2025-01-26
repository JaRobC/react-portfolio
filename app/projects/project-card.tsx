import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { GitHubRepo } from "@/lib/github"
import { Calendar, Github, Globe, Star } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  repo: GitHubRepo
}

export function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight">{repo.name}</h3>
          {repo.topics?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {repo.topics.slice(0, 3).map((topic) => (
                <Badge key={topic} variant="secondary">
                  {topic}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{repo.description || "No description provided"}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(repo.created_at).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1" />
            {repo.stargazers_count}
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <Button asChild variant="outline" className="flex-1">
            <Link href={repo.html_url} target="_blank">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Link>
          </Button>
          {repo.homepage && (
            <Button asChild variant="outline" className="flex-1">
              <Link href={repo.homepage} target="_blank">
                <Globe className="w-4 h-4 mr-2" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

