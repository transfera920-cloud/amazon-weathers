import React from 'react';
import { Mountain, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="bg-stone-900 text-stone-300 pt-12 pb-14 border-t border-stone-800"
      aria-label="頁尾資訊"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-base mb-1">
              <Mountain className="w-5 h-5" aria-hidden="true" />
              <a href="https://amazon-hike.com/intro">亞馬遜國家山岳協會</a>
            </div>
            <div className="text-xs text-stone-400 font-medium">
              Amazon National Mountain Association · 登山教育計畫
            </div>
            <div className="text-sm font-semibold text-stone-200 mt-2">
              第四章 · 氣象判讀
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium border border-stone-700 transition-colors"
              aria-label="返回頁首"
            >
              <ArrowUp className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>返回頁首</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-500">
          <p className="leading-relaxed">
            本章為登山教育教材，未來將與其他章節整合。
          </p>
          <p className="font-mono">
            © 2026 AMNA · 教育用途
          </p>
        </div>
      </div>
    </footer>
  );
};
