import React from 'react';
import { Clock, BookMarked, Smartphone, CloudSun, ShieldCheck, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative pt-20 pb-12 sm:pb-16 bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 text-stone-100 border-b border-stone-800 overflow-hidden"
      aria-labelledby="main-heading"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb Hierarchy */}
        <nav aria-label="麵包屑導航" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-stone-400">
            <li>
              <a href="https://amazon-hike.com/intro" className="hover:text-emerald-400 transition-colors">
                亞馬遜國家山岳協會
              </a>
            </li>
            <li aria-hidden="true" className="text-stone-600">/</li>
            <li>
              <span className="text-stone-300">登山安全教育計畫</span>
            </li>
            <li aria-hidden="true" className="text-stone-600">/</li>
            <li aria-current="page" className="text-emerald-400 font-medium">
              第四章 氣象判讀
            </li>
          </ol>
        </nav>

        {/* Chapter Super-title */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-semibold mb-4 tracking-wider uppercase">
          <CloudSun className="w-3.5 h-3.5" aria-hidden="true" />
          <span>CHAPTER 04 · 教材</span>
        </div>

        {/* The ONLY H1 of the Document */}
        <h1
          id="main-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight"
        >
          氣象判讀
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-stone-300 max-w-3xl leading-relaxed mb-6">
          理解山岳天氣變化，學習利用氣象資訊做出安全登山決策。
        </p>

        {/* Reading Meta Badges */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-stone-400 mb-8 pb-4 border-b border-stone-800">
          <div className="flex items-center space-x-1.5 bg-stone-800/80 px-2.5 py-1 rounded-md border border-stone-700">
            <Clock className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
            <span>閱讀時間 · 約 18 分鐘</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-stone-800/80 px-2.5 py-1 rounded-md border border-stone-700">
            <BookMarked className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
            <span>9 節內容 · 完整架構</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-stone-800/80 px-2.5 py-1 rounded-md border border-stone-700">
            <Smartphone className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>手機優先閱讀 (Mobile-First)</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-stone-800/80 px-2.5 py-1 rounded-md border border-stone-700">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
            <span>AMNA 登山安全標準</span>
          </div>
        </div>

        {/* Quick Jump CTA */}
        <div className="mt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            建議依序循序研讀，或使用下方章節目錄跳轉至特定單元。
          </p>
          <a
            href="#core-concept"
            className="inline-flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <span>開始研讀</span>
            <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
