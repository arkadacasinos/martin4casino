const tags = [
  { label: '#martin_casino', href: '#o-saite' },
  { label: '#martin_casino_официальный_сайт', href: '#o-saite' },
  { label: '#martin_casino_официальный', href: '#bezopasnost' },
  { label: '#martin_casino_зеркало', href: '#zerkalo' },
  { label: '#мартин_казино', href: '#itog' },
  { label: '#martin_casino_играть', href: '#igry' },
  { label: '#мартин_казино_официальный_сайт', href: '#registraciya' },
  { label: '#мартин_казино_официальный', href: '#bonus' },
  { label: '#мартин_казино_онлайн', href: '#platizhi' },
  { label: '#мартин_казино_играть', href: '#app' },
  { label: '#мартин_казино_зеркало', href: '#zerkalo-rabochee' },
  { label: '#мартин_казино_зеркало_рабочее', href: '#zerkalo-rabochee' },
]

export default function Q8mzFooter() {
  return (
    <footer className="q8mz-footer">
      <div className="q8mz-wrap">
        <nav className="q8mz-tags" aria-label="Навигация по ключевым фразам">
          {tags.map((tag, index) => (
            <a className="q8mz-tag" href={tag.href} key={`${tag.label}-${index}`}>
              {tag.label}
            </a>
          ))}
        </nav>
        <p className="q8mz-foot-note">
          18+ | Мартин Казино (Martin Casino) — информационный сайт. Азартные игры могут быть запрещены в вашем
          регионе, играйте ответственно. © 2026 Martin Casino.
        </p>
      </div>
    </footer>
  )
}
