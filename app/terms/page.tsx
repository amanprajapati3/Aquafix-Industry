import Legal from "../components/layout/legal/Legal"
import { site } from "@/data";

export default function TermsPage(){
    return(
        <>
        <Legal legalData={site.legal.terms} />;
        </>
    )
}