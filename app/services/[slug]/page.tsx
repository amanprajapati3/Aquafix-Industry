import { getServiceBySlug } from "@/data";
import ServiceDetails from "@/app/components/layout/serviceDetails.tsx/ServiceDetails";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detailData = getServiceBySlug(slug);

  if (!detailData) {
    return <div>Service not found</div>;
  }

  return <ServiceDetails detailData={detailData} />;
}