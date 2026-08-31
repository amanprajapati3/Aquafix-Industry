import Enquiry from "../components/layout/enquiry/Enquiry"
import { site } from "@/data";

export default function EnquiryPage(){
    return(
        <>
        <Enquiry enquiryData={site.enquiry}/>
        </>
    )
}