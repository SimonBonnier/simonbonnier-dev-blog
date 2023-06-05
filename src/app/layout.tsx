import "./globals.css";
import Navbar from "../components/navBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-zinc-900 text-white">
        <Navbar />
        {children}
        <div id="page-bottom-spacer" className="h-16"></div>
      </body>
    </html>
  );
}