import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Labtop from "./components/Labtop";
import Curriculum from "./components/Curriculum";
import Teacher from "./components/Teacher";
import Result from "./components/Result";
// import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Job from "./components/Job";

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
<<<<<<< HEAD
            <FAQ />
=======
            <Result />
>>>>>>> d3240f3cad36c7f5c6f63b300d04ea690c42da27
            {/*
            <Testimonials /> */}
            <Footer />
        </>
    );
}