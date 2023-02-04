import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/NavBar";
import { website_title } from "@/constants/constant";
import Head from "next/head";

const MainLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>
                    {website_title}
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className="mt-12 h-screen">{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;
