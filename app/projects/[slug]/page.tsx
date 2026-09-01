import { getProjectBySlug, site } from "@/data";
import ProjectDetails from "@/app/components/layout/projectDetails/ProjectDetails";

interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;

  const detailData = getProjectBySlug(slug);

  if (!detailData) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectDetails
      detailData={detailData}
      bannerData={site.projectDetails?.banner}
    />
  );
}
