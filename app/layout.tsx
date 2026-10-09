import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <head>
        <title>Мартин Казино — Martin Casino официальный сайт: играть онлайн, рабочее зеркало</title>
        <meta
          name="description"
          content="Martin Casino официальный сайт: мартин казино онлайн — слоты и live-игры, welcome package до 225% + 600 фриспинов, martin casino зеркало рабочее, вход и регистрация. Мартин казино играть бесплатно."
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0e0e13" />
        <link rel="canonical" href="https://martin4casino.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Martin Casino" />
        <meta property="og:title" content="Мартин Казино — Martin Casino официальный сайт: играть онлайн, рабочее зеркало" />
        <meta
          property="og:description"
          content="Martin Casino официальный сайт: слоты и live-игры, welcome package до 225% + 600 фриспинов, martin casino зеркало рабочее, вход и регистрация."
        />
        <meta property="og:url" content="https://martin4casino.vercel.app/" />
        <meta property="og:image" content="https://martin4casino.vercel.app/images/q8mz-parrot.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Мартин Казино — Martin Casino официальный сайт: играть онлайн, рабочее зеркало" />
        <meta
          name="twitter:description"
          content="Martin Casino официальный сайт: слоты и live-игры, welcome package до 225% + 600 фриспинов, martin casino зеркало рабочее, вход и регистрация."
        />
        <meta name="twitter:image" content="https://martin4casino.vercel.app/images/q8mz-parrot.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
