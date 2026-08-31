import { site } from "@/data";
import Industry from "../components/layout/industry/Industry";

export default function IndustryPage(){
    return(
        <>
        <Industry industryData={site.industry}/>
        </>
    )
}