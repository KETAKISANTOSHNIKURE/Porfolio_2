import './globals.css'

export const metadata = {
  title: 'Portfolio Website',
  description: 'Professional Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


