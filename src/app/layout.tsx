import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio Paulo Jorge',
  description: 'Olá, meu nome é Paulo Jorge crio web designs personalizados. Tenho habilidade em escrever códigos bem projetados, testáveis ​e eficientes usando as melhores práticas atuais em desenvolvimento Web. Aprendo rápido, trabalho duro e trabalho em equipe, com proficiência na criação de páginas da web criativas e inovadoras.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <Script src="js/jquery-1.9.1.min.js"  />
      <Script src="js/script.js"  />    
      <Script src="js/relogio.js"  />
      <Script src="js/data.js"  />  
      <Script src="js/audio.js"  /> 
    </html>
    
  )
}
