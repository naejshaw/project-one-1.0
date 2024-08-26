"use client"
import About from "./ui/partials/about";
import Activity from "./ui/partials/activity";
import Contact from "./ui/partials/contact";
import Index from "./ui/partials/home";
import Testimonials from "./ui/partials/testimonials";

export default function Home() {
    
  return (<>
        <main className="w-full h-auto inline-flex flex-col justify-between items-center">
            <Index />
            <About />
            <Activity />
            <Testimonials />
            <Contact />
        </main>
    </>);
}
