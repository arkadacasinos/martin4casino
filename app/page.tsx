import Q8mzTopbar from '@/components/q8mz-topbar'
import Q8mzHero from '@/components/q8mz-hero'
import Q8mzTicker from '@/components/q8mz-ticker'
import Q8mzPromo from '@/components/q8mz-promo'
import Q8mzArticle from '@/components/q8mz-article'
import Q8mzFooter from '@/components/q8mz-footer'

export default function Page() {
  return (
    <div className="q8mz-page">
      <Q8mzTopbar />
      <main className="q8mz-main q8mz-wrap" id="top">
        <Q8mzHero />
        <Q8mzTicker />
        <Q8mzPromo />
        <Q8mzArticle />
      </main>
      <Q8mzFooter />
    </div>
  )
}
