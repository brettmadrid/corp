import Hero from "@/components/hero";
import performanceImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="auto assembly welding"
      title="We Serve High Performance Applications"
    />
  );
}
