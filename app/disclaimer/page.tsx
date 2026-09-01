import Legal from "../components/layout/legal/Legal"
import { site } from "@/data";

export default function DisclaimerPage(){
    return(
        <>
        <Legal legalData={site.legal.disclaimer} />;
        </>
    )
}