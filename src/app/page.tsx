"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, MapPin, Instagram, Twitter, Linkedin, Youtube, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="animatedGrid"
      cardStyle="floating"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Let's F*ck Around"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Destinations", id: "destinations" },
            { name: "Team", id: "team" },
            { name: "Episodes", id: "blog" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Subscribe",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          description="Join us for unscripted adventures across the globe. No plans, no limits, just pure exploration and unforgettable moments."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890682623-xcxkcxik.jpg"
          imageAlt="Adventurous travelers exploring exotic destinations"
          frameStyle="card"
        />
      </div>

      <div id="destinations" data-section="destinations">
        <ProductCardSix
          title="Featured Destinations"
          description="Explore the incredible locations we've visited on our journey around the world"
          tag="Travel Inspiration"
          tagIcon={MapPin}
          products={[
            {
              id: "1",
              name: "Bali Paradise",
              price: "Episode 12",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890683525-5es87b8v.jpg",
              imageAlt: "Tropical beach in Bali"
            },
            {
              id: "2",
              name: "Alpine Adventure",
              price: "Episode 15",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890684283-sitryue4.jpg",
              imageAlt: "Mountain hiking in Alps"
            },
            {
              id: "3",
              name: "Urban Exploration",
              price: "Episode 18",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890685122-e3giagqv.jpg",
              imageAlt: "City streets exploration"
            },
            {
              id: "4",
              name: "Desert Discovery",
              price: "Episode 21",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890685969-jk3he5jf.jpg",
              imageAlt: "Desert safari adventure"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet the Adventurers"
          description="The crazy crew behind every unforgettable moment"
          members={[
            {
              id: "1",
              name: "Alex Chen",
              role: "Lead Explorer & Host",
              description: "Fearless adventurer with a passion for discovering hidden gems and pushing boundaries. 5+ years of travel vlogging.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890686990-1kb110tj.jpg",
              imageAlt: "Alex Chen portrait",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Jordan Mitchell",
              role: "Adventure Scout & Co-Host",
              description: "Expert at finding the most random and amazing experiences. Local connections everywhere around the world.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890687889-2fh0f2vr.jpg",
              imageAlt: "Jordan Mitchell portrait",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",
              name: "Casey Rodriguez",
              role: "Filmmaker & Editor",
              description: "Captures every chaotic moment in stunning 4K. Makes our disasters look like cinematic gold.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890688667-bazk36gb.jpg",
              imageAlt: "Casey Rodriguez portrait",
              socialLinks: [
                { icon: Youtube, url: "https://youtube.com" },
                { icon: Instagram, url: "https://instagram.com" }
              ]
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardNine
          title="What Our Viewers Say"
          description="Join thousands of people who follow our adventures around the globe"
          tag="Viewer Reviews"
          testimonials={[
            {
              id: "1",
              quote: "These guys make travel look so fun and spontaneous. I've literally booked trips to places they've featured. Absolute legends!",
              name: "Sarah Thompson",
              role: "Travel Enthusiast",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890689498-4rj2pebj.jpg",
              imageAlt: "Sarah Thompson"
            },
            {
              id: "2",
              quote: "The energy is infectious. Every episode I watch, I feel like I'm right there with them experiencing the chaos and joy firsthand.",
              name: "Marcus Johnson",
              role: "Adventure Seeker",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890690071-h1wlx5r7.jpg",
              imageAlt: "Marcus Johnson"
            },
            {
              id: "3",
              quote: "Finally a travel show that's real and unscripted. No boring narration, just genuine moments and hilarious situations.",
              name: "Emma Williams",
              role: "Content Creator",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890690654-ubbdz5el.jpg",
              imageAlt: "Emma Williams"
            },
            {
              id: "4",
              quote: "Honestly, this show inspired me to quit my job and travel. Best decision ever. These guys showed me it's possible.",
              name: "David Park",
              role: "Digital Nomad",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890691564-yxm09iqe.jpg",
              imageAlt: "David Park"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our show and travel adventures"
          tag="Help & Info"
          faqs={[
            {
              id: "1",
              title: "How often do you release new episodes?",
              content: "We release new episodes every week, usually on Thursdays. But honestly, sometimes we go off schedule if something crazy is happening. Follow our socials for surprise drops!"
            },
            {
              id: "2",
              title: "Can I suggest a destination for you to visit?",
              content: "Absolutely! We love hearing from our viewers. Send us suggestions through our social media channels or email. We've actually visited several locations suggested by our community."
            },
            {
              id: "3",
              title: "How do you plan your trips if there's no plan?",
              content: "That's the beauty of it - we don't really plan! We pick a region, get random flight deals, and let fate guide us. Sometimes we'll have one activity booked, but otherwise we wake up and decide what to do that day."
            },
            {
              id: "4",
              title: "Where can I watch your episodes?",
              content: "All our episodes are available on YouTube, with highlights on Instagram and TikTok. We're also available on streaming platforms like Patreon for exclusive behind-the-scenes content."
            },
            {
              id: "5",
              title: "Have you ever gotten into serious trouble?",
              content: "We've had some sketchy moments for sure, but we prioritize safety above all. We do take precautions and have local guides who help us stay safe while still finding adventures."
            },
            {
              id: "6",
              title: "How can I support the show?",
              content: "You can support us by subscribing, leaving comments, sharing episodes, and joining our Patreon for exclusive content. Every bit helps us keep exploring!"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay in the Loop"
          description="Get notified about new episodes, travel tips, and exclusive behind-the-scenes content delivered straight to your inbox."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890692767-8ur5c0pm.jpg"
          imageAlt="Travel vlogging and content creation"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="We respect your privacy. You can unsubscribe anytime. No spam, just adventures."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Explore",
              items: [
                { label: "Home", href: "hero" },
                { label: "Destinations", href: "destinations" },
                { label: "Episodes", href: "blog" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "YouTube", href: "https://youtube.com" },
                { label: "TikTok", href: "https://tiktok.com" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms of Service", href: "#terms" },
                { label: "Contact Us", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 Let's F*ck Around and Find Out. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}