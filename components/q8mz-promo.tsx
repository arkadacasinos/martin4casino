const promos = [
  { href: '#bonus', mod: 'wheel', img: '/images/q8mz-promo-wheel.jpg', title: 'Колесо Фортуны' },
  { href: '#app', mod: 'app', img: '/images/q8mz-promo-app.jpg', title: 'Скачай приложение' },
  { href: '#registraciya', mod: 'ref', img: '/images/q8mz-promo-ref.jpg', title: 'Реферальная программа' },
  { href: '#bonus', mod: 'chest', img: '/images/q8mz-promo-chest.jpg', title: 'Магазин бонусов' },
]

export default function Q8mzPromo() {
  return (
    <section className="q8mz-promo" aria-label="Акции Martin Casino">
      {promos.map((promo) => (
        <a className={`q8mz-promo-card q8mz-promo-card--${promo.mod}`} href={promo.href} key={promo.mod}>
          <img src={promo.img} alt="" width={320} height={320} loading="lazy" />
          <b>{promo.title}</b>
          <span className="q8mz-promo-arrow" aria-hidden="true">
            <i />
          </span>
        </a>
      ))}
    </section>
  )
}
