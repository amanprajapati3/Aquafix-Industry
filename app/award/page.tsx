import Award from "../components/layout/award/Award"
import { site } from "@/data";

export default function AwardPage(){
    return(
        <>
        <Award awardsData={site.awards}/>
        </>
    )
}