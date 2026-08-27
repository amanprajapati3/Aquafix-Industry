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
  const bannerdata = site?.ServiceIndustries?.sections?.Banner?.variants?.ServiceBanner1;
  const featurecardsdata = site?.ServiceIndustries?.sections?.FeatureCards?.variants?.ServiceFeatureCards1;
  
  const aboutpagedata = site?.ServiceIndustries?.sections?.AboutPage?.variants?.ServiceAboutPage1;
  const featurestripdata = site?.ServiceIndustries?.sections?.FeatureStrip?.variants?.ServiceFeatureStrip1;

  const partnersdata = site?.ServiceIndustries?.sections?.Partners?.variants?.ServicePartners1;
  const whychoosedata = site?.ServiceIndustries?.sections?.WhyChooseUs?.variants?.ServiceWhyChooseUs1;

  // Updated JSON path to match your structure exactly
  const processdata = site?.ServiceIndustries?.sections?.HowWeWork?.variants?.ServiceHowWeWork1;

  const servicedata = site?.Service?.variants?.ServiceService1;
  const testimonialdata = site?.ServiceIndustries?.sections?.Testimonial?.variants?.ServiceTestimonial1;
  const blogdata = site?.ServiceIndustries?.sections?.Blog?.variants?.ServiceBlog1;

  const contactsectionData = site?.ServiceIndustries?.sections?.ContactSection?.variants?.ServiceContactSection1;

  return (
    <>
      <Banner data={bannerdata} featureCardsData={featurecardsdata} />
      <AboutSection aboutData={aboutpagedata} featureStripData={featurestripdata} />
      <Partners partnersData={partnersdata} />
      <ServicesSection serviceData={servicedata} />
      <Choose chooseData={whychoosedata} />
      <ProcessSection processData={processdata} />
      <TestimonialSection testimonialData={testimonialdata} />
      <BlogSection blogData={blogdata} />
      <ContactSection contactData={contactsectionData} />
    </>
  );
}