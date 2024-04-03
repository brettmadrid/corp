import Hero from "@/components/hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="auto assembly line"
      title="Professional Cloud Hosting"
    />
  );
}
