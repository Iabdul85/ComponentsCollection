// import BottomStickyCall from "@/components/BottomStickyCall";
import "../globals.css";
// import { StickyNavbar } from "@/components/Navbar/Navbar";
// import Footer from "@/sections/Footer/Footer";

export default async function RootLayout({ children }) {
  return (
    <>
      {/* <StickyNavbar /> */}
      {children}
      {/* <Footer /> */}
      {/* <BottomStickyCall /> */}
    </>
  );
}
