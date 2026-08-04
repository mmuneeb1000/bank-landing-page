import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </>
  );
}
