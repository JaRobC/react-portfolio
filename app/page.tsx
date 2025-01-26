import { Button } from "@/components/ui/button"
import { getGitHubProfile } from "@/lib/github"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const profile = await getGitHubProfile("JaRobC")

  return (
    <div className="relative flex flex-col min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-custom -z-10" />
      
      {/* Softer animated background shapes */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl animate-float [animation-delay:1s]" />
      </div>

      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 flex flex-col items-center">
          {profile?.avatar_url && (
            <div className="relative w-32 h-32 overflow-hidden rounded-full mb-8 ring-2 ring-primary/10 animate-float shadow-xl">
              <Image
                src={profile.avatar_url}
                alt={profile.name || "Profile"}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
            {profile?.name || "Barsan Robert"}
          </h1>
          <p className="text-muted-foreground text-lg mb-8 font-medium">
            Junior C/C++, Js, Python 🐍
          </p>
          <div className="flex gap-4">
            <Link href="/projects">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                View Projects
              </Button>
            </Link>
            <Link href="https://github.com/JaRobC" target="_blank">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

