import Pricing from "../components/layout/pricing/Pricing"
import { site } from "@/data";

export default function PricingPage(){
    return(
        <>
        <Pricing pricingData={site.pricing}/>
        </>
    )
}