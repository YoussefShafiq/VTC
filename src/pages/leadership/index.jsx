import SectionFade from '../../components/ui/SectionFade'
import LeadershipHero from './sections/LeadershipHero'
import LeadershipTeam from './sections/LeadershipTeam'
import LeadershipCta from './sections/LeadershipCta'

export default function LeadershipPage() {
  return (
    <>
      <LeadershipHero />

      <SectionFade>
        <LeadershipTeam />
      </SectionFade>

      <SectionFade fadeBottom="dark">
        <LeadershipCta />
      </SectionFade>
    </>
  )
}
