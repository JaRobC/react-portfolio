import { Button } from "@/components/ui/button"
import { getGitHubProfile } from "@/lib/github"
import { Github, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function AboutPage() {
  const profile = await getGitHubProfile("JaRobC")

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-custom -z-10" />

      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-6 mb-4">
              {profile?.avatar_url && (
                <div className="relative w-24 h-24 overflow-hidden rounded-full ring-2 ring-primary/20">
                  <Image
                    src={profile.avatar_url}
                    alt={profile.name || "Profile"}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
                  {profile?.name || "Barsan Robert"}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {profile?.bio || "A passionate developer with expertise in modern technologies"}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              {profile?.location && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {profile.location}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>{profile?.public_repos || 0} repositories</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>{profile?.followers || 0} followers</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </Link>
              <Link href={`https://github.com/${profile?.login || 'JaRobC'}`} target="_blank">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
                Skills & Expertise
              </h2>
              <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                <li>C/C++</li>
                <li>Python</li>
                <li>SQL</li>
                <li>Git</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">Student 2nd year</h3>
                  <p className="text-sm text-muted-foreground">2023 - Present</p>
                  <p className="text-muted-foreground">Learning and developing skills in C/C++ and Python and Software Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

