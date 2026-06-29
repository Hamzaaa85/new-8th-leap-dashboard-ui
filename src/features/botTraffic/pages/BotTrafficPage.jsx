import { useOutletContext } from 'react-router-dom'
import UserChip from '../../../components/ui/UserChip'
import BotTrafficSection from '../components/BotTrafficSection'
import CitationLandscapeSection from '../components/CitationLandscapeSection'
import InsightsQualitySection from '../components/InsightsQualitySection'
import { useBotTrafficData } from '../hooks/useBotTrafficData'

export default function BotTrafficPage() {
  const { user } = useOutletContext()
  const { data, error, isLoading } = useBotTrafficData()

  if (isLoading) {
    return (
      <section className="flex min-h-[610px] items-center justify-center rounded-[14px] bg-[#F8FAFE] text-[#1D2634]">
        Loading bot traffic...
      </section>
    )
  }

  if (error) {
    return (
      <section className="flex min-h-[610px] items-center justify-center rounded-[14px] bg-[#F8FAFE] text-[#1D2634]">
        Unable to load bot traffic.
      </section>
    )
  }

  return (
    <div className="min-h-[610px]">
      <div className="mb-[8px] flex justify-end">
        <UserChip user={user} />
      </div>
      <CitationLandscapeSection landscape={data.citationLandscape} />
      <InsightsQualitySection insights={data.insights} scores={data.qualityScores} />
      <BotTrafficSection traffic={data.botTraffic} />
    </div>
  )
}
