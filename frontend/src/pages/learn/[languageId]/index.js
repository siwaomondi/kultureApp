import { useRouter } from "next/router";

const LanguageToLearn = () => {
    const router = useRouter()
    const {languageId} = router.query
    return ( 
        <div>
            your languge is:{languageId}
        </div>
     );
}
 
export default LanguageToLearn;