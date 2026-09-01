import { getTeamMemberBySlug } from "@/data";
import TeamDetails from "@/app/components/layout/teamDetails/TeamDetails"; // Adjust component path as needed

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TeamDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detailData = getTeamMemberBySlug(slug);

  if (!detailData) {
    return <div>Team member not found</div>;
  }

  return <TeamDetails detailData={detailData} />;
}