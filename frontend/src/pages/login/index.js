import { website_title } from "@/constants/constant";
import MainLayout from "@/layouts/Main";
import Head from "next/head";

const LoginPage = ({}) => {
    return ( 
        <MainLayout>
            <Head>
                <title>Login | {website_title}</title>
            </Head>
            <h1>Login page</h1>
            <h2>welcome</h2>
        </MainLayout>
 );
}
 
export default LoginPage;