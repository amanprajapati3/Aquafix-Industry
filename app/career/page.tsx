import { site } from "@/data";
import Career from "../components/layout/career/Career";

export default function CareerPage(){
    return(
        <>
        <Career careerData={site.career}/>
        </>
    )
}