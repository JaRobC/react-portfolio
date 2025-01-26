"use client"

import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Folder, Github } from "lucide-react"

export default function AdminPage() {
  const [files, setFiles] = useState<File[]>([])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles((prev) => [...prev, ...acceptedFiles])
    },
  })

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter">Admin Dashboard</h1>
          <p className="text-gray-500">Manage your portfolio content and files</p>
        </div>
        <Tabs defaultValue="files">
          <TabsList>
            <TabsTrigger value="files">Files</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="github">GitHub</TabsTrigger>
          </TabsList>
          <TabsContent value="files" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary"
                >
                  <input {...getInputProps()} />
                  <Upload className="h-8 w-8 mx-auto mb-4" />
                  <p className="text-sm text-gray-500">Drag and drop files here, or click to select files</p>
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {files.map((file, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-center space-x-4">
                    <Folder className="h-6 w-6" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="projects" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <Input placeholder="Project Title" />
                  <Input placeholder="Project URL" />
                  <Button>Add Project</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="github" className="space-y-4">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Github className="h-8 w-8 mx-auto" />
                <h3 className="text-lg font-medium">GitHub Activity</h3>
                <p className="text-sm text-gray-500">Connect your GitHub account to display your activity</p>
                <Button>Connect GitHub</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

