import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const providers = [
  {
    provider: "Google Workspace",
    cost: "~€18/mo (3 users)",
    storage: "30GB per user",
    spam: "Excellent",
    setup: "Easy",
    maintenance: "Minimal",
  },
  {
    provider: "Zoho Mail",
    cost: "~€9/mo (3 users)",
    storage: "5GB per user",
    spam: "Good",
    setup: "Moderate",
    maintenance: "Low",
  },
  {
    provider: "Self-hosted Mailcow",
    cost: "~€4/mo (VPS)",
    storage: "VPS dependent",
    spam: "Configurable",
    setup: "Complex",
    maintenance: "High",
  },
]

export function ComparisonTable() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-primary">Email Provider Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Provider</TableHead>
                <TableHead>Cost for 3 users</TableHead>
                <TableHead>Storage</TableHead>
                <TableHead>Spam Protection</TableHead>
                <TableHead>Setup Difficulty</TableHead>
                <TableHead>Maintenance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {providers.map((provider) => (
                <TableRow key={provider.provider}>
                  <TableCell className="font-medium">{provider.provider}</TableCell>
                  <TableCell>{provider.cost}</TableCell>
                  <TableCell>{provider.storage}</TableCell>
                  <TableCell>{provider.spam}</TableCell>
                  <TableCell>{provider.setup}</TableCell>
                  <TableCell>{provider.maintenance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
