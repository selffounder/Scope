
import {Header} from "@/components/header_content";
import {Content1} from "@/components/landing_content"
import { Demo } from "@/components/demo_content";
import {CallToAction} from "@/components/call_content";
import {Pricing} from "@/components/pricing_content";
export default function Home() {
  return <>
  <Header />
  <Content1 /> 
  <Demo />
  <CallToAction />
  <Pricing />
  </>
  ;
  
}
