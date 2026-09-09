import React from 'react';

export const ImportanceDiagram: React.FC = () => {
  return (
    <figure className="my-6 rounded-2xl border border-stone-200 bg-white p-4 sm:p-6 shadow-sm">
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 800 420"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="教學圖解 01：山岳天氣重要性與安全決策架構"
        >
          <title>圖解 01：山岳天氣重要性</title>
          <desc>
            展示山區微氣候高變異特性，以及氣象判讀如何串聯客觀資料、現場觀察、風險評估與安全決策。
          </desc>

          <defs>
            <linearGradient id="impSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <marker
              id="impArrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#0f766e" />
            </marker>
          </defs>

          {/* Background Canvas */}
          <rect width="800" height="420" rx="12" fill="#fafaf9" />

          {/* Top Title Banner */}
          <rect x="24" y="20" width="752" height="48" rx="8" fill="#0f172a" />
          <text x="44" y="50" fill="#f8fafc" fontSize="16" fontWeight="700" letterSpacing="0.05em">
            圖解 01｜山岳天氣重要性 · 「預報是資訊，現場是證據，判斷才是能力」
          </text>

          {/* Mountain Silhouettes in background */}
          <path
            d="M 50 240 L 160 140 L 260 210 L 380 110 L 520 220 L 660 130 L 760 240"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Left Block: Mountain Environmental Realities */}
          <g transform="translate(40, 90)">
            <rect width="210" height="230" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
            <rect width="210" height="38" rx="8" fill="#334155" />
            <text x="15" y="25" fill="#ffffff" fontSize="14" fontWeight="700">高山環境客觀特性</text>
            
            <g transform="translate(15, 55)">
              <circle cx="6" cy="6" r="4" fill="#0284c7" />
              <text x="18" y="10" fill="#1e293b" fontSize="13" fontWeight="600">微氣候劇烈變化</text>
              <text x="18" y="28" fill="#64748b" fontSize="11">高度/地形引發極端差異</text>
            </g>

            <g transform="translate(15, 110)">
              <circle cx="6" cy="6" r="4" fill="#0284c7" />
              <text x="18" y="10" fill="#1e293b" fontSize="13" fontWeight="600">無遮蔽直接暴露</text>
              <text x="18" y="28" fill="#64748b" fontSize="11">風雨低溫直接威脅生理</text>
            </g>

            <g transform="translate(15, 165)">
              <circle cx="6" cy="6" r="4" fill="#0284c7" />
              <text x="18" y="10" fill="#1e293b" fontSize="13" fontWeight="600">撤退距離長且緩慢</text>
              <text x="18" y="28" fill="#64748b" fontSize="11">無法即時脫離受災環境</text>
            </g>
          </g>

          {/* Arrow 1 */}
          <line x1="250" y1="205" x2="285" y2="205" stroke="#0f766e" strokeWidth="2.5" markerEnd="url(#impArrow)" />

          {/* Middle Block: Interpretation Process */}
          <g transform="translate(295, 90)">
            <rect width="220" height="230" rx="10" fill="#f0fdf4" stroke="#86efac" strokeWidth="2" />
            <rect width="220" height="38" rx="8" fill="#15803d" />
            <text x="15" y="25" fill="#ffffff" fontSize="14" fontWeight="700">登山者的氣象判讀核心</text>

            <g transform="translate(15, 55)">
              <rect x="0" y="0" width="190" height="34" rx="6" fill="#ffffff" stroke="#bbf7d0" />
              <text x="10" y="22" fill="#14532d" fontSize="12" fontWeight="700">1. 看資料 · 掌握天氣大趨勢</text>
            </g>

            <g transform="translate(15, 100)">
              <rect x="0" y="0" width="190" height="34" rx="6" fill="#ffffff" stroke="#bbf7d0" />
              <text x="10" y="22" fill="#14532d" fontSize="12" fontWeight="700">2. 看現場 · 檢視雲霧風壓實況</text>
            </g>

            <g transform="translate(15, 145)">
              <rect x="0" y="0" width="190" height="34" rx="6" fill="#ffffff" stroke="#bbf7d0" />
              <text x="10" y="22" fill="#14532d" fontSize="12" fontWeight="700">3. 評估風險 · 隊伍承受極限</text>
            </g>

            <text x="15" y="210" fill="#166534" fontSize="11" fontWeight="600">
              ※ 不是賭機率，而是管理暴露風險
            </text>
          </g>

          {/* Arrow 2 */}
          <line x1="515" y1="205" x2="550" y2="205" stroke="#0f766e" strokeWidth="2.5" markerEnd="url(#impArrow)" />

          {/* Right Block: Safe Decision Outcomes */}
          <g transform="translate(560, 90)">
            <rect width="200" height="230" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
            <rect width="200" height="38" rx="8" fill="#0f766e" />
            <text x="15" y="25" fill="#ffffff" fontSize="14" fontWeight="700">安全行動決策</text>

            <g transform="translate(15, 52)">
              <rect x="0" y="0" width="170" height="28" rx="4" fill="#ecfdf5" stroke="#a7f3d0" />
              <text x="10" y="19" fill="#065f46" fontSize="12" fontWeight="700">出發 Go</text>
              <text x="80" y="19" fill="#047857" fontSize="11">天氣穩定且可控</text>
            </g>

            <g transform="translate(15, 88)">
              <rect x="0" y="0" width="170" height="28" rx="4" fill="#fefce8" stroke="#fef08a" />
              <text x="10" y="19" fill="#854d0e" fontSize="12" fontWeight="700">調整 Adjust</text>
              <text x="80" y="19" fill="#713f12" fontSize="11">早出發/縮短行程</text>
            </g>

            <g transform="translate(15, 124)">
              <rect x="0" y="0" width="170" height="28" rx="4" fill="#fff7ed" stroke="#fed7aa" />
              <text x="10" y="19" fill="#9a3412" fontSize="12" fontWeight="700">撤退 Return</text>
              <text x="80" y="19" fill="#c2410c" fontSize="11">觸發折返預警點</text>
            </g>

            <g transform="translate(15, 160)">
              <rect x="0" y="0" width="170" height="28" rx="4" fill="#fef2f2" stroke="#fecaca" />
              <text x="10" y="19" fill="#991b1b" fontSize="12" fontWeight="700">取消 Cancel</text>
              <text x="80" y="19" fill="#b91c1c" fontSize="11">出發前風險超標</text>
            </g>

            <text x="15" y="215" fill="#0f766e" fontSize="11" fontWeight="700">
              安全撤退，也是成功登山
            </text>
          </g>

          {/* Bottom Summary Bar */}
          <g transform="translate(40, 340)">
            <rect width="720" height="56" rx="8" fill="#f1f5f9" stroke="#cbd5e1" />
            <text x="20" y="26" fill="#0f172a" fontSize="13" fontWeight="700">
              氣象判讀核心思維：
            </text>
            <text x="20" y="45" fill="#475569" fontSize="12">
              氣象判讀不是算命預測，而是在資訊不完備的高山環境中，為隊伍保留隨時全身而退的彈性與時間餘裕。
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-xs text-stone-500 font-medium">
        圖 4-1：山岳氣象重要性架構 —— 連結客觀大氣環境與登山安全行動決策
      </figcaption>
    </figure>
  );
};
