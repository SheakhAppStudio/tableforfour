import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sharedComponents/Navbar";
import Footer from "@/components/sharedComponents/Footer";
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: "Table For Four - #1 Restaurant Booking System & Reservation Software",
    template: "%s | Table For Four - Restaurant Booking System"
  },
  description:
    "Transform your restaurant with Table For Four - the leading restaurant booking system. Increase bookings by 40%, reduce no-shows by 60%. Free 3-month trial. Trusted by 10,000+ restaurants worldwide.",
  keywords: [
    // Primary keywords - high search volume
    "table for four",
    "tableforfour",
    "tableforfoursync",
    "restaurant booking system",
    "restaurant reservation software",
    "online restaurant booking",
    "table booking software",
    "restaurant management system",
    
    // Secondary keywords - medium search volume
    "restaurant reservation platform",
    "dining reservation software",
    "restaurant booking app",
    "table management software",
    "restaurant pos system",
    "restaurant waitlist app",
    
    // Long-tail keywords - high intent
    "best restaurant booking system 2025",
    "restaurant reservation software for small business",
    "online table booking system for restaurants",
    "restaurant booking widget for website",
    "restaurant no-show prevention software",
    "restaurant customer management system",
    
    // Industry-specific
    "hospitality management software",
    "restaurant technology solutions",
    "food service booking platform",
    "dining management system",
    "restaurant operations software",
    
    // Location-based (add your target locations)
    "restaurant booking system USA",
    "restaurant software United States",
    "restaurant reservation system North America"
  ],
  authors: [{ name: "Table For Four", url: "https://www.tableforfour.com" }],
  creator: "Table For Four",
  publisher: "Table For Four",
  applicationName: "Table For Four",
  
  // Enhanced robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Enhanced Open Graph
  openGraph: {
    title: "Table For Four - #1 Restaurant Booking System | 40% More Bookings Guaranteed",
    description:
      "Join 10,000+ restaurants using Table For Four. Increase bookings by 40%, reduce no-shows by 60%. Free 3-month trial + setup. Get more customers today!",
    url: "https://www.tableforfour.com",
    siteName: "Table For Four",
    images: [
      {
        url: "https://res.cloudinary.com/dc3czyqsb/image/upload/v1754921062/WhatsApp_Image_2025-08-11_at_7.48.20_PM-removebg-preview_pboqww.png",
        width: 1200,
        height: 630,
        alt: "Table For Four - Restaurant Booking System Dashboard",
      },
      {
        url: "https://res.cloudinary.com/dc3czyqsb/image/upload/v1754921062/WhatsApp_Image_2025-08-11_at_7.48.20_PM-removebg-preview_pboqww.png",
        width: 1200,
        height: 600,
        alt: "Restaurant Booking System Features - Table For Four",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Enhanced Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Table For Four - Restaurant Booking System | 40% More Bookings",
    description:
      "Transform your restaurant operations. 10,000+ restaurants trust us. Free 3-month trial. Start getting more bookings today!",
    images: ["https://res.cloudinary.com/dc3czyqsb/image/upload/v1754921062/WhatsApp_Image_2025-08-11_at_7.48.20_PM-removebg-preview_pboqww.png"],
    creator: "@TableForApp",
    site: "@TableForApp",
  },
  
  // Enhanced icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#111827"
      }
    ]
  },
  
  metadataBase: new URL('https://www.tableforfour.com'),
  
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en': '/en',
    },
  },
  
  // Enhanced verification
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
      'facebook-domain-verification': 'your-facebook-verification-code',
    },
  },
  
  category: 'Business Software',
  classification: 'Restaurant Technology',
  
  // Additional metadata for better SEO
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '7 days',
    'language': 'English',
    'geo.region': 'US',
    'geo.placename': 'United States',
    'target': 'all',
    'audience': 'all',
    'copyright': 'Table For Four',
    'abstract': 'Restaurant booking system and reservation management software',
    'topic': 'Restaurant Management Software',
    'summary': 'Complete restaurant booking and reservation management solution',
    'subject': 'Restaurant Technology',
    'url': 'https://www.tableforfour.com',
    'identifier-URL': 'https://www.tableforfour.com',
    'directory': 'submission',
    'pagename': 'Table For Four - Restaurant Booking System',
    'subtitle': 'Professional Restaurant Reservation Software',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Enhanced viewport and mobile optimization */}
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" 
        />
        <meta name="theme-color" content="#111827" />
        <meta name="color-scheme" content="light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#111827" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Rich snippets structured data - this is crucial for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.tableforfour.com/#organization",
                  name: "Table For Four",
                  url: "https://www.tableforfour.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://res.cloudinary.com/dc3czyqsb/image/upload/v1754921062/WhatsApp_Image_2025-08-11_at_7.48.20_PM-removebg-preview_pboqww.png",
                    width: 512,
                    height: 512
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    availableLanguage: "English"
                  },
                  sameAs: [
                    "https://twitter.com/TableForApp",
                    "https://www.facebook.com/TableForApp",
                    "https://www.linkedin.com/company/tablefor"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.tableforfour.com/features",
                  url: "https://www.tableforfour.com",
                  name: "Table For Four",
                  description: "Restaurant booking system and reservation management software",
                  publisher: {
                    "@id": "https://www.tableforfour.com/about"
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate: "https://www.tableforfour.com/search?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Table For Four Restaurant Booking System",
                  operatingSystem: "Web Browser",
                  applicationCategory: "BusinessApplication",
                  description: "Complete restaurant booking and reservation management system",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                    description: "Free 3-month trial"
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "2847",
                    bestRating: "5",
                    worstRating: "1"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white">
        {/* Google Tag Manager (noscript) - Add your GTM ID */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <div className="min-h-screen">
          <Navbar />
          {children}
        </div>
        <Footer />
        
        {/* Google Analytics 4 - Replace with your GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        {/* Google Tag Manager - Replace with your GTM ID */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}