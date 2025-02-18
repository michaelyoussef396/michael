import Hero from "@/sections/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/sections/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import EducationAndCertifications from "@/sections/EducationAndCertifications";
import Footer from "@/components/Footer";
import Approach from "@/sections/Approach";
import Grid from "@/sections/Grid";
import SubscribeSection from "@/components/SubscribeSection";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Approach />
        <SubscribeSection />
        <RecentProjects />
        <EducationAndCertifications />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
