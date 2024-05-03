import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mini Sheets",
  description: "Created Mini application using Google Sheet api",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer
          position="bottom-center"
          draggable={false}
          autoClose={1000}
          theme="dark"
        />
        {children}
      </body>
    </html>
  );
}
