import Header from "../components/Header";
import {Providers} from "../UIProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Providers>{children}</Providers>
      </main>
    </div>
  );
}
