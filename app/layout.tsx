import type { Metadata } from 'next'

import { StyledComponentsRegistry } from '@/UtilsRoot';
import { RootLayoutThemeProvider, ModalProvider, WindowSizeProvider, ReduxProvider } from '@/LibRoot'
import { GlobalStyles, Main } from '@/StylesRoot';
import { Modal, Sidebar, Header } from '@/ComponentsRoot';

export const metadata: Metadata = {
  title: 'Kanban',
  description: 'Kanban application',
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <WindowSizeProvider>
            <RootLayoutThemeProvider>
              <ReduxProvider>
                <ModalProvider>
                  <Header />
                  <Main>
                    <Sidebar />
                    {children}
                  </Main>
                  <Modal />
                  <GlobalStyles />
                </ModalProvider>
              </ReduxProvider>
            </RootLayoutThemeProvider>
          </WindowSizeProvider>
        </StyledComponentsRegistry>
        <div id='modal-root'></div>
      </body>
    </html>
  )
}
