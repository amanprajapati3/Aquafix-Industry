// @ts-nocheck
import Banner from "../../homelayout/Banner";
import AboutSection from "../../homelayout/AboutSection";
import Partners from "../../homelayout/PartnersSection";
import ServicesSection from "../../homelayout/ServicesSection";
import Choose from "../../homelayout/Choose";
import { site } from "@/data";
import BlogSection from "../../homelayout/BlogSection";
import ContactSection from "../../homelayout/ContactSection";
import ProcessSection from "../../homelayout/ProcessSection";
import TestimonialSection from "../../homelayout/TestimonialSection";

export default function HomeSection() {
  return (
    <>
      <Banner data={site.banner} featureCardsData={site.featureCards} />

      <AboutSection
        aboutData={site.aboutPage}
        featureStripData={site.featureStrip}
      />

      <Partners partnersData={site.partners} />

      <ServicesSection serviceData={site.service} />

      <Choose chooseData={site.whyChooseUs} />

      <ProcessSection processData={site.howWeWork} />

      <TestimonialSection testimonialData={site.testimonial} />

      <BlogSection blogData={site.blog} />

      <ContactSection contactData={site.contactSection} />
    </>
  );
}
