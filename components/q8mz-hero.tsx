export default function Q8mzHero() {
  return (
    <section className="q8mz-hero" aria-label="Welcome package Martin Casino">
      <div className="q8mz-hero-parrot">
        <img
          src="/images/q8mz-parrot.jpg"
          alt="Синий попугай — маскот Martin Casino с золотыми монетами"
          width={1100}
          height={1100}
        />
      </div>
      <div className="q8mz-hero-body">
        <p className="q8mz-hero-kicker">Welcome package</p>
        <div className="q8mz-hero-deal">
          <span className="q8mz-hero-do">до</span>
          <span className="q8mz-hero-pct">225%</span>
          <span className="q8mz-hero-spins">
            <b>+600</b>
            <span>FREE SPINS</span>
          </span>
        </div>
        <a className="q8mz-hero-cta" href="#registraciya">
          Получить
        </a>
        <div className="q8mz-pays" aria-label="Способы оплаты">
          <span className="q8mz-pay">Pay via Bank</span>
          <span className="q8mz-pay">Apple Pay</span>
          <span className="q8mz-pay q8mz-pay--visa">VISA</span>
          <span className="q8mz-pay">flex pin</span>
          <span className="q8mz-pay">MFINITY</span>
          <span className="q8mz-pay">Instant Bank</span>
        </div>
      </div>
    </section>
  )
}
