import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CompetitionTabs } from "@/components/CompetitionTabs";
import { TierComparison } from "@/components/TierComparison";
import { ScheduleTable } from "@/components/ScheduleTable";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { InfoModal } from "@/components/InfoModal";
import { StatsOverview } from "@/components/StatsOverview";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <StatsOverview />
      <CompetitionTabs />
      <TierComparison onOpenModal={openModal} />
      <ScheduleTable />
      <BenefitsGrid />
      <Footer />
      <InfoModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={modalContent.title}
        content={modalContent.content}
      />
    </div>
  );
};

export default Index;
