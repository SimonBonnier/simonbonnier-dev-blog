import "./globals.css";
import Navbar from "../components/navBar";
import { Footer } from "@/components/footer/Footer";

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
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;1,300&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-zinc-900 text-white">
                <Navbar />
                <div className="container mx-auto px-5 w-4/5">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
