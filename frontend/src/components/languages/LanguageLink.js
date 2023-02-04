import Image from "next/image";
import Link from "next/link";

const LanguageLink = ({language_data}) => {
    return (
        <div>
            <section className="">
                <Image
                    src={language_data.img_url}
                    alt={`Image of the traditional ${language_data.people} people`}
                ></Image>
            </section>
            <section className="language-desc">
                <h1>{language_data.dialect}</h1>
                <p>{language_data.briefDescription}</p>
                <p>
                    Population:{" "}
                    {convert_population(language_data.population)}
                </p>
                <Link href={`/cultures/${language_data.ethnic_group}/${language_data.people}`} className="lan_link" style={{textTransform:"uppercase"}}>
                    More...
                </Link>
            </section>
        </div>
    );
};

LanguageLink.defaultProps = {
    language_data: {
        ethnic_group: "Bantu",
        dialect: "Kikuyu",
        people: "Agikuyu",
        briefDescription: "A group of ",
        img_url: "",
        population: 20000001,
    },
};

function convert_population(num) {
    const convertedString = num.toLocaleString("en-US");
    return convertedString
}


export default LanguageLink;
