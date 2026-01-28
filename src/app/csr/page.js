import FullScreenHero from "@/components/sections/hero/FullScreenHero";
import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import HeaderSpace from "@/components/shared/others/HeaderSpace";

import CsrProjects from "@/components/sections/csr/CsrProjects";
import SplitImageQuote from "@/components/shared/sections/SplitImageQuote";
import CsrApproach from "@/components/sections/csr/CsrApproach";

import { csrData } from "@/data/csrData";

export const metadata = {
    title: "CSR - Corporate Social Responsibility | Enfycon",
    description: "Sustainable Impact, Transforming Lives through our CSR initiatives.",
};

export default function CsrPage() {
    return (
        <div>
            <BackToTop />
            <Header />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* Hero */}
                        <HeaderSpace />
                        <FullScreenHero
                            title={csrData.hero.title}
                            text={csrData.hero.text}
                            breadcrums={csrData.hero.breadcrums}
                            image={csrData.hero.image}
                        />

                        {/* Our Approach - White BG */}
                        <CsrApproach data={csrData.approach} />

                        {/* Impact Stats - Blue BG */}
                        <SplitImageQuote data={csrData.impactStats} />

                        {/* Projects - White BG */}
                        <CsrProjects data={csrData.projects} />

                        {/* Impact - Gray BG */}



                    </main>
                    <Footer2 />
                </div>
            </div>

            <ClientWrapper />
        </div>
    );
}
