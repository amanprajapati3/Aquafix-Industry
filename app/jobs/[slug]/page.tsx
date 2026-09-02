import { getJobBySlug, site } from "@/data";
import JobDetails from "@/app/components/layout/jobDetails/JobDetails";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function JobDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const detailData = getJobBySlug(slug);

  if (!detailData) {
    return <div>Job not found</div>;
  }

  return (
    <JobDetails jobData={detailData} bannerData={site.jobDetails?.banner} />
  );
}