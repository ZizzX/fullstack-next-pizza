import React from 'react';
import { Nunito } from 'next/font/google';
import {Header} from "@/components/shared";
import './globals.css';

const nunito = Nunito({
                        subsets: ['cyrillic'],
                        variable: '--font-nunito',
                        weight: ['400', '500', '600', '700', '800', '900'],
                      });

export const metadata = {
	title: 'Next Pizza | Главная',
	description: 'Лучшая пицца в городе',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={nunito.variable} lang="en">
    <head>
      <link data-rh="true" rel="icon" href="/logo.png" />
    </head>
    <body>
    <main>
	    <Header className='mb-4' />
	    {children}
		</main>
    </body>
    </html>
  );
}
