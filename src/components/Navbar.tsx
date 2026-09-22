import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, BookOpen, ChevronRight, Mountain } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'sec-01', num: '01', name: '氣象重要性' },
    { id: 'sec-02', num: '02', name: '山岳氣象特性' },
    { id: 'sec-03', num: '03', name: '取得氣象資訊' },
    { id: 'sec-04', num: '04', name: '基礎判讀能力' },
    { id: 'sec-05', num: '05', name: '高山危險天氣' },
    { id: 'sec-06', num: '06', name: '行程安全決策' },
    { id: 'sec-07', num: '07', name: '常見判讀錯誤' },
    { id: 'sec-08', num: '08', name: '登山氣象工具' },
    { id: 'sec-09', num: '09', name: '領隊判讀流程' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-stone-900/95 text-stone-100 shadow-md backdrop-blur-md border-b border-stone-800'
          : 'bg-stone-900 text-stone-100 border-b border-stone-800'
      }`}
    >
      {/* Top Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand & Chapter Identification */}
        <div className="flex items-center space-x-3">
          <a
            href="https://amazon-hike.com/"
            className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-md"
            aria-label="亞馬遜國家山岳協會"
          >
            <Mountain className="w-5 h-5" aria-hidden="true" />
            <span className="font-bold text-sm tracking-wide text-stone-100 hidden xs:inline">
              AMNA · 亞馬遜國家山岳協會
            </span>
          </a>
          <span className="text-stone-600 hidden sm:inline">/</span>
          <div className="flex items-center space-x-1.5 text-xs text-stone-300">
            <span className="bg-stone-800 text-emerald-400 font-semibold px-2 py-0.5 rounded border border-stone-700">
              第 04 章
            </span>
            <span className="hidden md:inline font-medium text-stone-200">氣象判讀</span>
          </div>
        </div>

        {/* Quick Nav for Desktop */}
        <nav className="hidden lg:flex items-center space-x-1 text-xs" aria-label="章節快速導航">
          <a
            href="#sec-01"
            className="px-2.5 py-1 text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors"
          >
            01 重要性
          </a>
          <a
            href="#sec-02"
            className="px-2.5 py-1 text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors"
          >
            02 氣象特性
          </a>
          <a
            href="#sec-05"
            className="px-2.5 py-1 text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors"
          >
            05 危險天氣
          </a>
          <a
            href="#sec-06"
            className="px-2.5 py-1 text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors"
          >
            06 行程決策
          </a>
          <a
            href="#sec-09"
            className="px-2.5 py-1 text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 font-semibold rounded hover:bg-emerald-900 transition-colors"
          >
            09 領隊流程 ★
          </a>
        </nav>

        {/* Mobile Menu Button & Table of Contents Toggle */}
        <div className="flex items-center space-x-2">
          <a
            href="#table-of-contents"
            className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 text-xs rounded bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
            <span>章節目錄</span>
          </a>
          <button
            type="button"
            id="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-stone-300 hover:text-white hover:bg-stone-800 lg:hidden focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? '關閉章節目錄' : '開啟章節目錄'}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Reading Progress Line */}
      <div className="w-full bg-stone-800 h-0.5">
        <div
          className="bg-emerald-500 h-0.5 transition-all duration-150"
          style={{ width: `${readProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(readProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="頁面閱讀進度"
        />
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 py-3 shadow-xl max-h-[80vh] overflow-y-auto"
        >
          <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
            第四章 氣象判讀 · 九大章節快速導覽
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded text-sm transition-colors ${
                  activeSection === sec.id
                    ? 'bg-emerald-900/60 text-emerald-300 font-semibold border border-emerald-700/50'
                    : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs text-stone-400">{sec.num}</span>
                  <span>{sec.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-500" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
