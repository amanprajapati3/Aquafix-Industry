import { site } from "@/data";
import SiteMap from "../components/layout/sitemap/SiteMap";

export default function SiteMapPage(){
    return(
        <>
        <SiteMap data={site.sitemap}/>
        </>
    )
}