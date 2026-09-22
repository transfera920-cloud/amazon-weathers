import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { CoreConceptBanner } from './components/CoreConceptBanner';
import { TableOfContents } from './components/TableOfContents';
import { ChapterSections } from './components/ChapterSections';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('sec-01');

  useEffect(() => {
    const sectionIds = [
      'sec-01',
      'sec-02',
      'sec-03',
      'sec-04',
      'sec-05',
      'sec-06',
      'sec-07',
      'sec-08',
      'sec-09',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -60% 0%',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#0b1015] text-stone-100 antialiased">
      {/* Main Educational Article Content */}
      <main className="flex-1 w-full" id="main-content">
        {/* Hero Section containing the only H1 */}
        <Hero />

        {/* Core Philosophy Banner */}
        <CoreConceptBanner />

        {/* Quick Chapter Navigation Index */}
        <TableOfContents activeSection={activeSection} />

        {/* The 9 Comprehensive Chapter Sections with 9 Native SVGs */}
        <ChapterSections />
      </main>

      {/* Standard Fixed Footer */}
      <Footer />
    </div>
  );
}
