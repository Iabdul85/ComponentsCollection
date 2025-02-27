import {Poppins } from "next/font/google";
import "./globals.css";



const poppins = Poppins({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700" ]
});

export const metadata = {
  title: "Buzinessify",
  description: "Buzinessify website",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        {script?.header && (
          <Script
            defer
            id="gtm"
            dangerouslySetInnerHTML={{
              __html: `${script?.header}`,
            }}
          ></Script>
        )}
        <Script
          id="trustpilot"
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          defer
        ></Script>

        <Script
          id="gtm2"
          defer
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11223411993');`,
          }}
        ></Script>
        <Script
          id="gtm3"
          defer
          src="https://www.googletagmanager.com/gtag/js?id=AW-11223411993"
        ></Script>

        <Script id={`breadcrumb`} type="application/ld+json">
          {{
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Internet Services",
                item: "https://fastbroadbandtv.com/internet-service",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Bundles",
                item: "https://fastbroadbandtv.com/bundle",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Home Phone",
                item: "https://fastbroadbandtv.com/home-phone",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Home Security",
                item: "https://fastbroadbandtv.com/home-security",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "About Us",
                item: "https://fastbroadbandtv.com/about-us",
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "Contact Us",
                item: "https://fastbroadbandtv.com/contact-us",
              },
            ],
          }}
        </Script>
      </head> */}
      <body
        className={`${poppins.variable} antialiased px-2`}
      >
        {/* {script?.body && (
            <>
              <noscript
                dangerouslySetInnerHTML={{
                  __html: script?.body,
                }}
              ></noscript>
            </>
          )} */}
        {children}

        {/* {script?.footer && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `${script?.footer}`,
              }}
            ></noscript>
          )} */}
      </body>
    </html>
  );
}
