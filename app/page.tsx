import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Pillars from "@/components/Pillars";
import Stats from "@/components/Stats";
import Works from "@/components/Works";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WarmthProvider from "@/components/WarmthProvider";

export default function Home() {
  return (
    <WarmthProvider>
      <a href="#main" className="skipToContent">
        メインコンテンツへスキップ
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Concept />
        <div className="sectionDivider" aria-hidden="true">
          では、どうやって？
        </div>
        <Pillars />
        <Stats />
        <div className="sectionDivider" aria-hidden="true">
          その結果が、これだ。
        </div>
        <Works />
        <div className="sectionDivider" aria-hidden="true">
          誰がつくっているのか。
        </div>
        <Profile />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </WarmthProvider>
  );
}
