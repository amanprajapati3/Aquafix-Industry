import Contact from "../components/layout/contact/Contact"
import { site } from "@/data";
export default function ContactPage(){
    return(
        <>
        <Contact contactData={site.contactSection}/>
        </>
    )
}