
import { getBlogBySlug, site } from "@/data";
import BlogDetailsPage from "@/app/components/layout/blogdetails/BlogDetails";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const detailData = getBlogBySlug(slug);

  if (!detailData) {
    return <div>Blog not found</div>;
  }

  const recentPosts = site.blog?.posts || [];

  return <BlogDetailsPage detailData={detailData} recentPosts={recentPosts} />;
}
