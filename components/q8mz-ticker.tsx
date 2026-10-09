const wins = [
  { game: '/images/q8mz-game1.jpg', name: 'KAR****DA09', sum: '132 527 €', hot: true },
  { game: '/images/q8mz-game2.jpg', name: 'M**ha', sum: '15 768 €', hot: true },
  { game: '/images/q8mz-game3.jpg', name: 'V**ox', sum: '2 022 €', hot: false },
  { game: '/images/q8mz-game4.jpg', name: 'Du**en', sum: '2 350 €', hot: false },
  { game: '/images/q8mz-game2.jpg', name: 'As**Ma', sum: '3 032.25 €', hot: false },
  { game: '/images/q8mz-game1.jpg', name: 'Mo**ey', sum: '4 216 €', hot: false },
  { game: '/images/q8mz-game4.jpg', name: 'sp**in', sum: '2 480 €', hot: false },
  { game: '/images/q8mz-game3.jpg', name: 'Ig**or', sum: '1 975 €', hot: false },
]

export default function Q8mzTicker() {
  return (
    <section className="q8mz-ticker" aria-label="Последние выигрыши игроков Martin Casino">
      {wins.map((win) => (
        <div className="q8mz-win" key={win.name}>
          <img src={win.game} alt="" width={200} height={200} loading="lazy" />
          <span className="q8mz-win-name">{win.name}</span>
          <span className={win.hot ? 'q8mz-win-sum q8mz-win-sum--hot' : 'q8mz-win-sum'}>{win.sum}</span>
        </div>
      ))}
    </section>
  )
}
