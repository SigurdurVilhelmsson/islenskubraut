import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Íslenskubraut — Kennsluspjöld',
  description:
    'Verkfæri til að búa til prentvæn kennsluspjöld fyrir íslenskukennslu. Fyrir kennara í íslenskunámi innflytjenda og flóttamanna.',
  keywords: ['íslenska', 'kennsla', 'spjöld', 'íslenskukennsla', 'innflytjendur'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="is">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <span className="text-2xl">📚</span>
                <div>
                  <h1 className="text-lg font-bold text-gray-900 leading-tight">
                    Íslenskubraut
                  </h1>
                  <p className="text-xs text-gray-500 leading-tight">
                    Kennsluspjöld
                  </p>
                </div>
              </a>
              <nav>
                <a
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Allir flokkar
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-sm text-gray-500">
              <p className="font-medium">Íslenskubraut — Kvennaskólinn í Reykjavík</p>
              <p className="mt-1">
                Verkfæri fyrir kennara í íslenskunámi innflytjenda og flóttamanna
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
