import ContactForm from "@/components/forms/contactForm";
import { website_title } from "@/constants/constant";
import MainLayout from "@/layouts/Main";
import Head from "next/head";

const ContactPage = () => {
    return (
        <MainLayout>
            <Head>
                <title>Contact us | {website_title}</title>
            </Head>
            <ContactForm />
        </MainLayout>
    );
};

export default ContactPage;
