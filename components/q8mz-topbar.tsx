export default function Q8mzTopbar() {
  return (
    <header className="q8mz-topbar">
      <div className="q8mz-wrap">
        <div className="q8mz-topbar-in">
          <a className="q8mz-burger" href="#q8mz-menu" aria-label="Открыть меню сайта">
            <span />
            <span />
            <span />
          </a>
          <a className="q8mz-logo" href="#top">
            <i className="q8mz-logo-mark" aria-hidden="true" />
            MARTIN
          </a>
          <div className="q8mz-search" role="search" aria-label="Поиск игр">
            <i className="q8mz-search-i" aria-hidden="true" />
            Поиск
          </div>
          <div className="q8mz-spacer" aria-hidden="true" />
          <div className="q8mz-bell" role="img" aria-label="Уведомления: 1">
            <i className="q8mz-bell-i" aria-hidden="true" />
            <b aria-hidden="true">1</b>
          </div>
          <a className="q8mz-btn q8mz-btn-login" href="#registraciya">
            Вход
          </a>
          <a className="q8mz-btn q8mz-btn-reg" href="#registraciya">
            Регистрация
          </a>
        </div>
      </div>
      <nav id="q8mz-menu" className="q8mz-drawer" aria-label="Меню сайта">
        <div className="q8mz-drawer-head">
          <span className="q8mz-logo">
            <i className="q8mz-logo-mark" aria-hidden="true" />
            MARTIN
          </span>
          <a className="q8mz-drawer-close" href="#!">
            Закрыть
          </a>
        </div>
        <a className="q8mz-drawer-link" href="#o-saite">
          О сайте
        </a>
        <a className="q8mz-drawer-link" href="#bonus">
          Бонусы
        </a>
        <a className="q8mz-drawer-link" href="#igry">
          Игры
        </a>
        <a className="q8mz-drawer-link" href="#registraciya">
          Вход и регистрация
        </a>
        <a className="q8mz-drawer-link" href="#zerkalo">
          Зеркало
        </a>
        <a className="q8mz-drawer-link" href="#platizhi">
          Платежи
        </a>
        <a className="q8mz-drawer-link" href="#app">
          Приложение
        </a>
        <a className="q8mz-drawer-link" href="#voprosy">
          Вопросы
        </a>
      </nav>
      <a className="q8mz-scrim" href="#!" aria-hidden="true" tabIndex={-1} />
    </header>
  )
}
