import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SectionCardProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

export function SectionCard({ id, title, children, className = "" }: SectionCardProps) {
  return (
    <section id={id} className={`fade-in ${className}`}>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary font-space-grotesk">{title}</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none dark:prose-invert">{children}</CardContent>
      </Card>
    </section>
  )
}
