import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryClientProvider } from "./components/ReactQueryClientProvider";
import store from "./redux/store";
import { Providers } from "./providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKS",
  description: "msk teste frontend",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <Providers>
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
    </Providers>
    </ReactQueryClientProvider>
  );
}
