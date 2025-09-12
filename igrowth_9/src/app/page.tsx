import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Labtop from "./components/Labtop";
import Curriculum from "./components/Curriculum";
import Teacher from "./components/Teacher";
import Result from "./components/Result";
import Award from "./components/Award";
import Classroom from "./components/Classroom";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Job from "./components/Job";
import Location from "./components/Location";
import ScrollToTop from "./components/ScrollToTop";
import Achieve from "./components/Achieve";

export default function Page() {
    return (
        <>
            <Navbar />
            <Hero />
            <Achieve />
            <Features />
            <Labtop />
            <Curriculum />
            <Job />
            <Teacher />
            <Result />
            <Award />
            <Classroom />
            <FAQ />
            <Location />
            <Footer />
            <ScrollToTop />
        </>
    );
}