import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from "@next/font/google"
import { StyledComponentsRegistry } from '@/UtilsRoot';
import { RootLayoutThemeProvider, ModalProvider, WindowSizeProvider, ReduxProvider, ToastHoc } from '@/LibRoot'
import { GlobalStyles, Main } from '@/StylesRoot';
import { Modal, Sidebar, Header } from '@/ComponentsRoot';

const jacarta = Plus_Jakarta_Sans({
  weight: ['500', '600', '700'],
  style: "normal",
  subsets: ["latin"]
});

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
      <body className={jacarta.className}>
        <StyledComponentsRegistry>
          <WindowSizeProvider>
            <RootLayoutThemeProvider>
              <ReduxProvider>
                <ModalProvider>
                  <ToastHoc>
                    <Header />
                    <Main>
                      <Sidebar />
                      {children}
                    </Main>
                  </ToastHoc>
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
