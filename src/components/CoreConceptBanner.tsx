import React from 'react';
import { Compass, Eye, AlertTriangle, CheckCircle2, RotateCcw, Shield } from 'lucide-react';

export const CoreConceptBanner: React.FC = () => {
  return (
    <section
      id="core-concept"
      className="py-10 bg-emerald-950/20 border-b border-slate-900"
      aria-label="第四章核心理念"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-emerald-800/60 bg-gradient-to-br from-emerald-950/40 via-slate-900/60 to-[#0b1015]/90 p-6 sm:p-8 shadow-md">
          {/* Top Heading */}
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-2">
            <Shield className="w-4 h-4" aria-hidden="true" />
            <span>AMNA 登山氣象核心信念</span>
          </div>

          <div className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
            「氣象判讀的核心不是預測，而是判斷。」
          </div>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            天氣不是算命，大氣模型永遠存在極限。高山氣候充滿微地形變異與突發對流，登山者真正的生存能力，在於當客觀條件改變時，能否依循現場事證做出不帶偏見的風險處置。
          </p>

          {/* 5-Step Core Flow */}
          <div className="bg-slate-900/90 rounded-xl p-4 sm:p-5 border border-slate-800 mb-6">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              核心決策流程 · Five-Step Safe Cycle
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center">
              <div className="bg-slate-850/90 rounded-lg p-3 border border-slate-700/80 flex flex-col items-center">
                <Compass className="w-5 h-5 text-sky-400 mb-1.5" aria-hidden="true" />
                <span className="text-xs font-bold text-stone-100">1. 看資料</span>
                <span className="text-[11px] text-stone-400 mt-0.5">掌握大氣趨勢</span>
              </div>

              <div className="bg-slate-850/90 rounded-lg p-3 border border-slate-700/80 flex flex-col items-center">
                <Eye className="w-5 h-5 text-emerald-400 mb-1.5" aria-hidden="true" />
                <span className="text-xs font-bold text-stone-100">2. 看現場</span>
                <span className="text-[11px] text-stone-400 mt-0.5">驗證雲霧風壓</span>
              </div>

              <div className="bg-slate-850/90 rounded-lg p-3 border border-slate-700/80 flex flex-col items-center">
                <AlertTriangle className="w-5 h-5 text-amber-400 mb-1.5" aria-hidden="true" />
                <span className="text-xs font-bold text-stone-100">3. 評估風險</span>
                <span className="text-[11px] text-stone-400 mt-0.5">對照地形與隊伍</span>
              </div>

              <div className="bg-slate-850/90 rounded-lg p-3 border border-slate-700/80 flex flex-col items-center">
                <CheckCircle2 className="w-5 h-5 text-teal-400 mb-1.5" aria-hidden="true" />
                <span className="text-xs font-bold text-stone-100">4. 做決策</span>
                <span className="text-[11px] text-stone-400 mt-0.5">出發/調整/撤退</span>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-slate-850/90 rounded-lg p-3 border border-slate-700/80 flex flex-col items-center">
                <RotateCcw className="w-5 h-5 text-rose-400 mb-1.5" aria-hidden="true" />
                <span className="text-xs font-bold text-stone-100">5. 持續修正</span>
                <span className="text-[11px] text-stone-400 mt-0.5">動態循環複核</span>
              </div>
            </div>
          </div>

          {/* Golden Axiom */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-emerald-900/60 text-xs sm:text-sm">
            <div className="text-emerald-300 font-semibold flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>教育理念：預報是資訊，現場是證據，判斷才是能力。</span>
            </div>
            <div className="text-amber-300 font-bold bg-amber-950/60 px-3 py-1.5 rounded-md border border-amber-800/60 inline-flex items-center space-x-1.5 self-start sm:self-auto">
              <span>✦ 安全撤退，也是成功登山。</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
