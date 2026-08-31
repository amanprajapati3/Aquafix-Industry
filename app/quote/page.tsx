import Quote from "../components/layout/quote/Quote"
import { site } from "@/data";

export default function QuotePage(){
    return(
        <>
        <Quote quoteData={site.quote}/>
        </>
    )
}
