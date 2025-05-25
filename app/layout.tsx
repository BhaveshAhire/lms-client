"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "./utils/theme-provider";
import { Providers } from "./Provider";
import { SessionProvider } from "next-auth/react";
import dynamic from 'next/dynamic';
import Loader from "./components/Loader/Loader";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { useEffect, useState } from "react";
import socketIo from "socket.io-client";

const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "";

const ToasterProvider = dynamic(
  () => import('./components/ToasterProvider'),
  { ssr: false }
);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
        suppressHydrationWarning
      >
        <Providers>
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {mounted ? (
                <>
                  <Custom>{children}</Custom>
                  <ToasterProvider />
                </>
              ) : null}
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  const [socketClient, setSocketClient] = useState<any>(null);

  useEffect(() => {
    const socket = socketIo(ENDPOINT, { transports: ["websocket"] });
    setSocketClient(socket);

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (socketClient) {
      socketClient.on("connection", () => {});
    }
  }, [socketClient]);

  return <>{isLoading ? <Loader /> : <>{children}</>}</>;
};
