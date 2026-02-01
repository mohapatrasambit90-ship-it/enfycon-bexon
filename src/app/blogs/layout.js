import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function BlogsLayout({ children }) {
    return (
        <div>
            <BackToTop />
            <Header />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <HeaderSpace />
                        {children}
                    </main>
                    <Footer2 />
                </div>
            </div>
            <ClientWrapper />
        </div>
    );
}
