import Legal from "../components/layout/legal/Legal"
import { site } from "@/data";

export default function CookiePage(){
    return(
        <>
        <Legal legalData={site.legal.cookie} />;
        </>
    )
}