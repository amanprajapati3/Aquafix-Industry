import { site } from "@/data";
import Project from "../components/layout/project/Project";

export default function ProjectPage(){
    return(
        <>
        <Project projectData={site.project}/>
        </>
    )
}