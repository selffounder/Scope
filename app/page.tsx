import Image from "next/image";
import {Header} from "@/components/header_content";
import {Content1} from "@/components/landing_content"
import { Demo } from "@/components/demo_content";
export default function Home() {
  return <>
  <Header />
  <Content1 /> 
  <Demo />
  </>
  ;
  
}
