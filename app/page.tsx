
import {Header} from "@/components/header_content";
import {Content1} from "@/components/landing_content"
import { Demo } from "@/components/demo_content";
import {CallToAction} from "@/components/call_content";
import {Pricing} from "@/components/pricing_content";
import {Footer} from "@/components/footer_content"
import {FAQ_Section} from "@/components/faq_content"
import {AI_Content} from "@/components/chatbot_content"
export default function Home() {
  return <>
  <Header />
  <Content1 /> 
  <Demo />
  <CallToAction />
  <Pricing />
  <FAQ_Section />
  <Footer />
  <AI_Content />
  </>
  ;
  
}
