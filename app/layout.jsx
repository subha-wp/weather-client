import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import SearchComp from "@/components/SearchComp";
import CurrentLocation from "@/components/CurrentLocation";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-GJW3DEZSCS" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-GJW3DEZSCS');
        `}
      </Script>
      <body className={inter.className}>
        <div
          className="bg-cover bg-no-repeat text-white px-2"
          style={{
            backgroundImage: `url('https://www.awxcdn.com/adc-assets/images/hero/4/1920x450.jpg')`,
          }}
        >
          <Nav />
          <div className="max-w-6xl mx-auto flex justify-center">
            <CurrentLocation fullDetails={true} />
          </div>
          <div className="max-w-6xl mx-auto min-h-[250px]">
            <SearchComp />
          </div>
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
