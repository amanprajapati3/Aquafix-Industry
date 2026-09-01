import Legal from "../components/layout/legal/Legal"
import { site } from "@/data";

export default function RefundPage(){
    return(
        <>
        <Legal legalData={site.legal.refund} />;
        </>
    )
}