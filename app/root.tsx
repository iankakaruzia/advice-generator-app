import styles from "./styles/tailwindcss.css"
import type { MetaFunction, LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Advice Generator',
  viewport: 'width=device-width,initial-scale=1'
})

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  return (
    <html lang='en' className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/images/favicon-32x32.png" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
