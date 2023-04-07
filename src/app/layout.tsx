import './globals.css'
import BoardProvider from './context'
export const metadata = {
  title: 'KANBAN-PMP',
  description: 'A task management design application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <BoardProvider>
        <body>{children}</body>
      </BoardProvider>
    </html>
  )
}
