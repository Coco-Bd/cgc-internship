"use client"

import { Navigation } from "@/components/navigation"
import { SectionCard } from "@/components/section-card"
import { Timeline } from "@/components/timeline"
import { ComparisonTable } from "@/components/comparison-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, FileText, Video, MessageCircle, Building2, Calendar, MapPin } from "lucide-react"

export default function InternshipReport() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <header className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-primary/5 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" />
              Academic Internship Report
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6 font-space-grotesk leading-tight">
              Internship Report
              <span className="block text-3xl md:text-4xl text-primary font-normal mt-2">Bachelor 2</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span className="font-medium">Cyber Guardians Challenge (CGC)</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Started August 11, 2025</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Toulouse, France</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Email Infrastructure
              </Badge>
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                DNS Configuration
              </Badge>
              <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                Cost Analysis
              </Badge>
              <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 border-purple-500/20">
                Cybersecurity
              </Badge>
            </div>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building a reliable, secure email infrastructure and documenting technical decisions for CGC's
              professional communication needs.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionCard id="introduction" title="Introduction" className="fade-in-delay-1">
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Company Details</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <strong>Name:</strong> Cyber Guardians Challenge (CGC)
                  </li>
                  <li>
                    <strong>Location:</strong> Toulouse, France
                  </li>
                  <li>
                    <strong>Sector:</strong> Cybersecurity / IT Services (association)
                  </li>
                  <li>
                    <strong>Duration:</strong> August 11, 2025 — Ongoing
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Company Overview</h3>
                <p className="text-sm">
                  CGC is an association focused on cybersecurity awareness and events, including Capture-the-Flag
                  competitions, workshops, and training programs for students and cybersecurity enthusiasts.
                </p>
              </div>
            </div>
            <p>
              This internship focuses on establishing a professional email infrastructure for CGC, ensuring reliable
              communication channels while maintaining security best practices. The objective is to implement a
              cost-effective solution that supports the organization's growth and professional communication needs.
            </p>
          </div>
        </SectionCard>

        <SectionCard id="company" title="Company Presentation" className="fade-in-delay-2">
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">What CGC Does</h3>
            <p>
              Cyber Guardians Challenge operates as a cybersecurity education and community platform, offering hands-on
              learning experiences through competitive events and workshops. The organization bridges the gap between
              academic cybersecurity knowledge and practical industry skills.
            </p>

            <h3 className="font-semibold text-primary">Market Position</h3>
            <p>
              CGC addresses the growing demand for cybersecurity education in the French market, targeting computer
              science students, cybersecurity enthusiasts, SMEs seeking security awareness, and industry partners
              looking for skilled professionals.
            </p>

            <h3 className="font-semibold text-primary">Value Proposition</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Practical cybersecurity education through hands-on challenges</li>
              <li>Community building among cybersecurity professionals and students</li>
              <li>Industry-relevant skill development and certification preparation</li>
              <li>Networking opportunities between students and industry professionals</li>
            </ul>
          </div>
        </SectionCard>

        <SectionCard id="missions" title="Missions & Role" className="fade-in-delay-3">
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Role: IT Intern - Email Infrastructure</h3>
            <p>
              This is my first mission at CGC, and I chose to present this email infrastructure project because it
              represents a complete, foundational task that demonstrates both technical skills and business analysis.
              Since starting on August 11, I haven't been at the company for very long, so I haven't completed many
              projects yet, making this the most substantial work to showcase.
            </p>

            <h3 className="font-semibold text-primary">Concrete Activities</h3>
            <div className="grid gap-2">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Provider benchmarking (Google Workspace, Zoho Mail, Self-hosted Mailcow)</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Cost/feature comparison and decision criteria development</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Proposal document with pros/cons and deployment plan</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>DNS configuration for deliverability & anti-spoofing: MX, SPF, DKIM, DMARC</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Creation of 3 professional mailboxes under the CGC domain</span>
              </div>
            </div>

            <h3 className="font-semibold text-primary">Deliverables Produced</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Comparative proposal PDF with detailed analysis</li>
              <li>Implementation steps documentation</li>
              <li>DNS changes summary and configuration guide</li>
            </ul>
          </div>
        </SectionCard>

        <SectionCard id="tools" title="Tools & Methods" className="fade-in">
          <div className="space-y-6">
            <h3 className="font-semibold text-primary">Technical Specialization</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-primary mb-2">DNS Records Configuration</h4>
                <ul className="text-sm space-y-1">
                  <li>
                    <strong>MX:</strong> Mail routing configuration
                  </li>
                  <li>
                    <strong>SPF:</strong> Sender Policy Framework
                  </li>
                  <li>
                    <strong>DKIM:</strong> DomainKeys Identified Mail
                  </li>
                  <li>
                    <strong>DMARC:</strong> Domain-based Message Authentication
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Protocols & Considerations</h4>
                <ul className="text-sm space-y-1">
                  <li>SMTP/IMAP protocol implementation</li>
                  <li>Spam filtering and deliverability</li>
                  <li>Security best practices</li>
                  <li>Cost-benefit analysis methodology</li>
                </ul>
              </div>
            </div>

            <ComparisonTable />

            <h3 className="font-semibold text-primary">Methodology</h3>
            <p>
              Applied a structured cost-benefit model combining feature matrix analysis, risk assessment, and
              maintenance requirements evaluation. Documentation standards ensured reproducible decision-making and
              clear implementation guidelines.
            </p>
          </div>
        </SectionCard>

        <SectionCard id="responsibilities" title="Responsibilities & Collaboration">
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Reporting Structure</h3>
            <p>
              <strong>Direct Supervisor:</strong> Léo Brévière, Technical Lead
              <br />
              Regular reporting on progress, technical decisions, and implementation status.
            </p>

            <h3 className="font-semibold text-primary">Key Responsibilities</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Owning the complete benchmarking process and analysis</li>
              <li>Drafting technical recommendations with supporting documentation</li>
              <li>Executing DNS configuration changes after validation</li>
              <li>Creating and configuring professional mailboxes</li>
              <li>Ensuring security compliance and best practices</li>
            </ul>

            <h3 className="font-semibold text-primary">Team Collaboration</h3>
            <p>
              Working closely with Léo Brévière as a two-person team, I handled the technical research and
              implementation while receiving guidance and validation on critical decisions. The small team structure
              allowed for direct communication and rapid decision-making throughout the project.
            </p>
          </div>
        </SectionCard>

        <SectionCard id="team" title="Team Organization & Communication">
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Communication Cadence</h3>
            <p>
              Weekly checkpoint meetings to review progress, discuss technical challenges, and align on priorities.
              Additional ad-hoc consultations for critical decisions.
            </p>

            <h3 className="font-semibold text-primary">Communication Channels</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="font-medium">Email</div>
                <div className="text-sm text-muted-foreground">Formal updates</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <Video className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="font-medium">Google Meet</div>
                <div className="text-sm text-muted-foreground">Technical reviews</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <MessageCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="font-medium">Discord</div>
                <div className="text-sm text-muted-foreground">Quick consultations</div>
              </div>
            </div>

            <h3 className="font-semibold text-primary">Collaboration Examples</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>SPF/DKIM alignment review sessions with technical lead</li>
              <li>Mailbox naming convention discussions with management</li>
              <li>Implementation timeline planning and milestone reviews</li>
            </ul>
          </div>
        </SectionCard>

        <SectionCard id="autonomy" title="Curiosity, Creativity & Autonomy">
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Curiosity</h3>
                <p className="text-sm">
                  Proactively researched email deliverability nuances, including SPF alignment mechanisms, DKIM key
                  rotation best practices, and DMARC policy optimization for maximum security without delivery impact.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Creativity</h3>
                <p className="text-sm">
                  Developed a comprehensive cost-reliability trade-off model that balanced immediate needs with future
                  scalability. Created a "what's next" roadmap for advanced features like automated DMARC monitoring and
                  MFA implementation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Autonomy</h3>
                <p className="text-sm">
                  Independently produced decision-ready proposals with detailed implementation plans. Executed DNS
                  configuration changes with minimal supervision while maintaining proper validation protocols.
                </p>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="assessment" title="Personal Assessment">
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Experience Reflection</h3>
            <p>
              After approximately 10 days of intensive work, this internship has provided valuable insights into
              professional IT infrastructure management. The experience has been both challenging and rewarding,
              offering practical application of theoretical knowledge in a real-world context.
            </p>

            <h3 className="font-semibold text-primary">Professional Progress</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Increased autonomy in technical decision-making processes</li>
              <li>Enhanced structured analysis and documentation skills</li>
              <li>Improved technical writing and proposal development abilities</li>
              <li>Strengthened understanding of email infrastructure security</li>
            </ul>

            <h3 className="font-semibold text-primary">Challenge & Growth</h3>
            <p>
              <strong>Key Challenge:</strong> Evaluating spam-filtering differences between providers proved more
              complex than initially anticipated, requiring deep technical analysis beyond surface-level feature
              comparisons.
            </p>
            <p>
              <strong>Resolution Approach:</strong> I addressed this by systematically reading technical documentation,
              consulting community resources, and validating assumptions with my supervisor. This demonstrated
              analytical rigor while revealing my need to develop more practical testing methodologies for future
              evaluations.
            </p>

            <h3 className="font-semibold text-primary">Skills Developed</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Technical Skills</h4>
                <ul className="text-sm space-y-1">
                  <li>DNS record configuration and management</li>
                  <li>Email security protocol implementation</li>
                  <li>Cost-benefit analysis for IT solutions</li>
                  <li>Infrastructure documentation standards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Soft Skills</h4>
                <ul className="text-sm space-y-1">
                  <li>Professional communication and reporting</li>
                  <li>Structured problem-solving approaches</li>
                  <li>Cross-functional collaboration</li>
                  <li>Technical proposal writing</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="conclusion" title="Conclusion">
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Career Impact</h3>
            <p>
              This internship has significantly influenced my career trajectory, reinforcing my interest in
              infrastructure management, DevOps practices, and cybersecurity. The hands-on experience with email
              infrastructure has provided a solid foundation for understanding enterprise communication systems and
              security protocols.
            </p>

            <h3 className="font-semibold text-primary">Knowledge Application</h3>
            <p>The experience gained will be directly applicable to future projects involving:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Email infrastructure setup and configuration</li>
              <li>DNS record management and security protocols</li>
              <li>Cost-benefit analysis for IT solutions</li>
              <li>Professional communication system implementation</li>
              <li>Basic cybersecurity best practices in email systems</li>
            </ul>

            <h3 className="font-semibold text-primary">Final Reflection</h3>
            <p className="font-medium text-primary">
              This internship strengthened CGC's communication reliability while accelerating my growth in
              infrastructure management and cybersecurity practices.
            </p>
          </div>
        </SectionCard>

        <Timeline />
      </main>

      <footer className="bg-muted/50 py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Prepared by <strong>Corentin Bedo</strong> — Computer Science Student (Bachelor 2), Ynov Toulouse
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => window.print()} className="no-print">
              <FileText className="h-4 w-4 mr-2" />
              Print/Export PDF
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:corentin.bedo@example.com">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
