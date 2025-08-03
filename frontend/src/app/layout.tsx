
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'Michelle Almonte - Professional Image Consultant & Personal Stylist',
  description: 'Transform your personal image with professional styling, color analysis, and wardrobe consulting. Boost your confidence with expert image coaching services.',
  keywords: 'image consultant, personal stylist, color analysis, wardrobe consulting, professional styling, confidence coaching',
  author: 'Michelle Almonte',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}
