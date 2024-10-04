import 'nextra-theme-blog/style.css'
import type { AppProps } from 'next/app'
import '../styles/main.css'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ["latin"]});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} antialiased`}>
      <Component {...pageProps} />
    </div>
  )
}
