import LanguageLink from "@/components/languages/LanguageLink";
import MainLayout from "@/layouts/Main";

const CulturesPage = () => {
    const languagesLinks = [...Array(47)];
    const langs = languagesLinks.map((e, index) => (
        <div key={`String ${index}`}>
            <LanguageLink />
        </div>
    ));
    return (
        <MainLayout>
            <div>
                <h1>Main language page</h1>
                <h2>Languages</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    {langs}
                </div>
            </div>
        </MainLayout>
    );
};

export default CulturesPage;
