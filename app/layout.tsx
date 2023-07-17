import StyledComponentsRegistry from '@/src/lib/registry';

import Sidebar from '@/src/components/Sidebar/Sidebar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Sidebar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
