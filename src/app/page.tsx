import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Background Grid */}
      <div className="fixed inset-0 -z-10">
        <AnimatedGridPattern
          width={32}
          height={32}
          x={0}
          y={0}
          className="fill-[#f9cee7]/30 stroke-[#f9cee7]/30"
        />
      </div>

      {/* Main Content */}
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </p>
          </BlurFade>
        </section>

        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                  showChevron={true}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <ResumeCard
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                  showChevron={true}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="awards">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-xl font-bold">Awards</h2>
            </BlurFade>
            {DATA.award.map((award, id) => (
              <BlurFade key={award.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ResumeCard
                  logoUrl={award.logoUrl}
                  altText={award.title}
                  title={award.title}
                  subtitle={award.issued}
                  date={award.date}
                  certificateUrl={award.certificateUrl}
                  showChevron={false}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="volunteering">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Volunteering</h2>
          </BlurFade>
          {DATA.volunteering.map((item, id) => (
            <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
              <ResumeCard
                logoUrl={item.logoUrl}
                altText={item.title}
                title={item.title}
                subtitle={item.issued}
                date={item.date}
                certificateUrl={item.certificateUrl}
                showChevron={false}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      </main>
    </div>
  );
}
