import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Labtop from "./components/Labtop";
// import Curriculum from "./components/Curriculum";
// import Testimonials from "./components/Testimonials";
// import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Page() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Labtop />
            {/* <Curriculum />
            <Testimonials />
            <FAQ /> */}
            <Footer />
        </>
    );
}