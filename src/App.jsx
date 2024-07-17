import { Nav } from "./components";
import {
  ClientTestimonials,
  Footer,
  Hero,
  LatestProjects,
  Services,
  Clients,
  CallToAction,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x pb-10">
        <Services />
      </section>
      <section className="bg-slate-500 padding">
        <Clients />
      </section>
      <section className="padding">
        <LatestProjects />
      </section>
      <section className="bg-pale-blue padding">
        <ClientTestimonials />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <CallToAction />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
