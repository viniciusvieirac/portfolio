import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Fira_Sans} from '@next/font/google';

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={firaSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
