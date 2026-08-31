import Testimonials from "../components/layout/testimonial/Testimonial";
import { site } from "@/data";
export default function TestimonialPage() {
  return <Testimonials testimonialData={site.testimonial} />;
}
