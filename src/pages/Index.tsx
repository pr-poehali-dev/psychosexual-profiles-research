import { useState } from "react";
import { psychosexualProfiles } from "@/data/profiles.ts";
import ProfileCard from "@/components/ProfileCard";
import ProfileDetails from "@/components/ProfileDetails";
import PieChart from "@/components/PieChart";
import ResearchInfo from "@/components/ResearchInfo";

const Index = () => {
  const [selectedProfile, setSelectedProfile] = useState<
    (typeof psychosexualProfiles)[0] | null
  >(null);

  const chartData = psychosexualProfiles.map((profile) => ({
    name: profile.title,
    value: profile.percentage,
    color: profile.color,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-montserrat text-gray-900 mb-2">
              Психосексуальные профили мужчин
            </h1>
            <p className="text-xl text-gray-600 font-source-sans">
              Эмпирическая модель сексуального разнообразия
            </p>
            <div className="mt-4 text-sm text-gray-500 font-source-sans">
              Исследование: Александр Романов, 2025
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Top section with chart and info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-center">
            <PieChart data={chartData} size={350} />
          </div>
          <ResearchInfo />
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Profiles grid */}
          <div className="xl:col-span-2">
            <h2 className="text-2xl font-semibold font-montserrat text-gray-900 mb-6">
              11 психосексуальных профилей
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {psychosexualProfiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  title={profile.title}
                  percentage={profile.percentage}
                  description={profile.description}
                  color={profile.color}
                  isActive={selectedProfile?.id === profile.id}
                  onClick={() => setSelectedProfile(profile)}
                />
              ))}
            </div>
          </div>

          {/* Details panel */}
          <div className="xl:col-span-1">
            <h2 className="text-2xl font-semibold font-montserrat text-gray-900 mb-6">
              Детальная информация
            </h2>
            <ProfileDetails profile={selectedProfile} />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500 font-source-sans">
            <p>© 2025 Александр Романов — Intellectus — Anima</p>
            <p className="mt-1">Междисциплинарный исследовательский проект</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
