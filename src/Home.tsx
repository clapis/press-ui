import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Search />
      <Testimonials />
      <Faq />
    </div>
  );
}
