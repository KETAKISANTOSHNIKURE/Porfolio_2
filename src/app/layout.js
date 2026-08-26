import './globals.css'

export const metadata = {
  title: 'Karan KR Portfolio',
  description: 'Professional Portfolio - Showcasing Projects & Skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


