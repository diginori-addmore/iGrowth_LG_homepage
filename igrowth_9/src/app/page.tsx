import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Labtop from "./components/Labtop";
import Curriculum from "./components/Curriculum";
import Teacher from "./components/Teacher";
// import Testimonials from "./components/Testimonials";
// import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Job from "./components/job";

export default function Page() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Labtop />
            <Curriculum />
            <Job />
            <Teacher />
            {/*
            <Testimonials />
            <FAQ /> */}
            <Footer />
        </>
    );
}