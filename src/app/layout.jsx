import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './sidebar.css';
import Footer from "./footer.jsx";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kiley's Website",
  description: "Welcome to my virtual homepage!",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {/*<link rel="icon" href={FavIcon.src} type="image/x-icon" />*/}
        <link href="https://fonts.googleapis.com/css?family=Plus Jakarta Sans" rel="stylesheet"/>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        {children}
      <footer>
      <Footer />
      </footer>
      </body>

    </html>

  );
}

