import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const timelineEvents = [
  { date: "Aug 11", event: "Onboarding & scope" },
  { date: "Aug 13–15", event: "Provider benchmarking & cost model" },
  { date: "Aug 16–17", event: "DNS plan & records" },
  { date: "Aug 17–20", event: "Mailbox creation & tests" },
  { date: "Next", event: "DMARC monitoring, MFA, awareness" },
]

export function Timeline() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary font-space-grotesk">Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 justify-center">
          {timelineEvents.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-muted rounded-lg min-w-[140px]">
              <div className="font-semibold text-primary text-sm mb-2">{item.date}</div>
              <div className="text-sm text-muted-foreground">{item.event}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
