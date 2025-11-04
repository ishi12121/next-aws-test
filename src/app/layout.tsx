export const metadata = {
  title: 'Next AWS Test',
  description: 'Next.js app with API endpoints for testing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
