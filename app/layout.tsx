import type { Metadata } from 'next'

import { StyledComponentsRegistry, RootLayoutThemeProvider, ModalProvider, ThemeChangeProvider } from '@/UtilsRoot';
import { GlobalStyles, Main } from '@/StylesRoot';
import { Modal, Sidebar, Header } from '@/ComponentsRoot';

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
          <ThemeChangeProvider>
            <RootLayoutThemeProvider>
              <ModalProvider>
                <Header />
                <Main>
                  <Sidebar />
                  {children}
                </Main>
                <Modal />
                <GlobalStyles />
              </ModalProvider>
            </RootLayoutThemeProvider>
          </ThemeChangeProvider>

        </StyledComponentsRegistry>
        <div id='modal-root'></div>
      </body>
    </html>
  )
}
