import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="relative z-10">
          <Features />
        </section>

        <Articles />
      </main>

      <Footer />
    </>
  );
}
