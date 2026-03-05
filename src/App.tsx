import { useEffect, useMemo, useState } from 'react'
import { termsSections, termsTitle } from './terms'

const REQUIRED_PATH = '/terms-and-conditions'

function normalizePathname(pathname: string): string {
  if (!pathname) return '/'
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

export default function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const normalizedPathname = useMemo(
    () => normalizePathname(pathname),
    [pathname],
  )

  useEffect(() => {
    if (normalizedPathname === REQUIRED_PATH) return
    window.history.replaceState({}, '', REQUIRED_PATH)
    setPathname(REQUIRED_PATH)
  }, [normalizedPathname])

  return (
    <div className="page">
      <header className="header">
        <h1 className="title">{termsTitle}</h1>
      </header>

      <main className="content">
        {termsSections.map((section) => (
          <section key={section.heading} className="section">
            <h2 className="sectionTitle">{section.heading}</h2>
            <p className="sectionBody">{section.body}</p>
          </section>
        ))}
      </main>
    </div>
  )
}
