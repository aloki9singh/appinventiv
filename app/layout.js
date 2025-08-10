export const metadata = {
  title: 'Appinventiv',
  description: 'Next.js + Tailwind CSS Starter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
