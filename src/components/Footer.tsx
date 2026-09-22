import React from 'react';
import { Mountain, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="bg-stone-900 text-stone-300 py-10 border-t border-stone-800"
      aria-label="頁尾資訊"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* FOOT區品牌置中 */}
        <div className="flex items-center space-x-2 text-emerald-400 font-bold text-base">
          <Mountain className="w-5 h-5" aria-hidden="true" />
          <a
            href="https://amazon-hike.com/chapter01/"
            className="hover:text-emerald-300 transition-colors"
          >
            亞馬遜國家山岳協會
          </a>
        </div>

        {/* 返回頁首按鈕 */}
        <div className="sm:absolute sm:right-6">
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
    </footer>
  );
};
