import OverviewSection from "@/components/OverviewSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import Tech from "@/components/TechSection"; // Importación del componente Tech

export default function About() {
  return (
    <div>
      <OverviewSection />
      {/* Tech section, referenced by the scroll button */}
      <Tech/>
      <CertificationsSection/>
      <SoftSkillsSection/>
    </div>
  );
}
