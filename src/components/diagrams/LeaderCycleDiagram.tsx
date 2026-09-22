import React from 'react';

export const LeaderCycleDiagram: React.FC = () => {
  return (
    <figure className="my-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 shadow-sm">
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 800 520"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="教學圖解 09：領隊氣象判讀雙軌動態決策循環模型"
        >
          <title>圖解 09：領隊氣象判讀循環</title>
          <desc>
            展示出發前五階段風險收斂（資料、趨勢、路線、隊伍、決策）以及行程中五步驟現地動態閉環（現場、比對、重估、調策、循環）。
          </desc>

          <defs>
            <marker
              id="cycleArrowTeal"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#14b8a6" />
            </marker>
            <marker
              id="cycleArrowAmber"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="800" height="520" rx="12" fill="#0b1015" />

          {/* Header */}
          <rect x="24" y="16" width="752" height="46" rx="8" fill="#020617" stroke="#1e293b" strokeWidth="1" />
          <text x="44" y="44" fill="#f8fafc" fontSize="15" fontWeight="700">
            圖解 09｜領隊氣象判讀雙軌循環 · 出發前風險收斂 × 行程中動態反饋
          </text>

          {/* Left Column: 出發前評估流程 */}
          <g transform="translate(36, 75)">
            <rect width="345" height="370" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <rect width="345" height="38" rx="8" fill="#0f766e" />
            <text x="16" y="24" fill="#ffffff" fontSize="14" fontWeight="700">
              【階段一】出發前評估流程 (Pre-trip)
            </text>

            {/* Step 1 */}
            <g transform="translate(18, 52)">
              <rect width="309" height="46" rx="6" fill="#062e24" stroke="#059669" />
              <text x="14" y="20" fill="#6ee7b7" fontSize="12" fontWeight="700">1. 氣象資料蒐集</text>
              <text x="14" y="36" fill="#a7f3d0" fontSize="11">CWA地面圖、Windy風場、ECMWF/GFS模式</text>
            </g>
            <line x1="172" y1="98" x2="172" y2="110" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#cycleArrowTeal)" />

            {/* Step 2 */}
            <g transform="translate(18, 114)">
              <rect width="309" height="46" rx="6" fill="#062e24" stroke="#059669" />
              <text x="14" y="20" fill="#6ee7b7" fontSize="12" fontWeight="700">2. 天氣趨勢分析</text>
              <text x="14" y="36" fill="#a7f3d0" fontSize="11">判定高壓穩定、鋒面推移時間、對流旺盛區間</text>
            </g>
            <line x1="172" y1="160" x2="172" y2="172" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#cycleArrowTeal)" />

            {/* Step 3 */}
            <g transform="translate(18, 176)">
              <rect width="309" height="46" rx="6" fill="#062e24" stroke="#059669" />
              <text x="14" y="20" fill="#6ee7b7" fontSize="12" fontWeight="700">3. 路線風險對照</text>
              <text x="14" y="36" fill="#a7f3d0" fontSize="11">比對裸露稜線、斷崖、過溪點、撤退腹地</text>
            </g>
            <line x1="172" y1="222" x2="172" y2="234" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#cycleArrowTeal)" />

            {/* Step 4 */}
            <g transform="translate(18, 238)">
              <rect width="309" height="46" rx="6" fill="#062e24" stroke="#059669" />
              <text x="14" y="20" fill="#6ee7b7" fontSize="12" fontWeight="700">4. 隊伍能力評估</text>
              <text x="14" y="36" fill="#a7f3d0" fontSize="11">隊員耐寒體能、雨具裝備等級、領隊控隊比</text>
            </g>
            <line x1="172" y1="284" x2="172" y2="296" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#cycleArrowTeal)" />

            {/* Step 5 */}
            <g transform="translate(18, 300)">
              <rect width="309" height="54" rx="6" fill="#042f2e" stroke="#10b981" strokeWidth="2" />
              <text x="14" y="22" fill="#34d399" fontSize="13" fontWeight="800">5. 決策制定與預案</text>
              <text x="14" y="42" fill="#6ee7b7" fontSize="11">決定「出發／調整／取消」，明訂折返停損時間</text>
            </g>
          </g>

          {/* Right Column: 行程中動態反饋循環 */}
          <g transform="translate(419, 75)">
            <rect width="345" height="370" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <rect width="345" height="38" rx="8" fill="#d97706" />
            <text x="16" y="24" fill="#ffffff" fontSize="14" fontWeight="700">
              【階段二】行程中動態循環 (On-trail Loop)
            </text>

            {/* Step 1 */}
            <g transform="translate(18, 52)">
              <rect width="309" height="46" rx="6" fill="#422006" stroke="#b45309" />
              <text x="14" y="20" fill="#fde047" fontSize="12" fontWeight="700">1. 觀察現場徵兆</text>
              <text x="14" y="36" fill="#fef08a" fontSize="11">監控手錶氣壓計、高空風速、積雲垂直堆疊</text>
            </g>
            <line x1="172" y1="98" x2="172" y2="110" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#cycleArrowAmber)" />

            {/* Step 2 */}
            <g transform="translate(18, 114)">
              <rect width="309" height="46" rx="6" fill="#422006" stroke="#b45309" />
              <text x="14" y="20" fill="#fde047" fontSize="12" fontWeight="700">2. 比較行前預報</text>
              <text x="14" y="36" fill="#fef08a" fontSize="11">天氣演化是如期、提前發生，還是超乎預估？</text>
            </g>
            <line x1="172" y1="160" x2="172" y2="172" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#cycleArrowAmber)" />

            {/* Step 3 */}
            <g transform="translate(18, 176)">
              <rect width="309" height="46" rx="6" fill="#422006" stroke="#b45309" />
              <text x="14" y="20" fill="#fde047" fontSize="12" fontWeight="700">3. 重新評估風險</text>
              <text x="14" y="36" fill="#fef08a" fontSize="11">前方地形是否安全？隊員是否有失溫或失足風險？</text>
            </g>
            <line x1="172" y1="222" x2="172" y2="234" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#cycleArrowAmber)" />

            {/* Step 4 */}
            <g transform="translate(18, 238)">
              <rect width="309" height="46" rx="6" fill="#422006" stroke="#b45309" />
              <text x="14" y="20" fill="#fde047" fontSize="12" fontWeight="700">4. 調整現場決策</text>
              <text x="14" y="36" fill="#fef08a" fontSize="11">加速前進 / 穿妥風雨衣 / 啟動撤退折返</text>
            </g>
            <line x1="172" y1="284" x2="172" y2="296" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#cycleArrowAmber)" />

            {/* Step 5 Loop back */}
            <g transform="translate(18, 300)">
              <rect width="309" height="54" rx="6" fill="#451a03" stroke="#f59e0b" strokeWidth="2" />
              <text x="14" y="22" fill="#fbbf24" fontSize="13" fontWeight="800">5. 持續動態循環 (Loop)</text>
              <text x="14" y="42" fill="#fde68a" fontSize="11">每隔 1~2 小時重新執行回饋，絕不停留在過去印象</text>
            </g>
          </g>

          {/* Footer Ribbon */}
          <g transform="translate(36, 460)">
            <rect width="728" height="44" rx="8" fill="#1e293b" stroke="#334155" />
            <text x="364" y="28" fill="#f8fafc" fontSize="13" fontWeight="700" textAnchor="middle">
              領隊鐵律：預報是靜態資訊，現場是動態考驗；唯有持續循環覆核，方能守護全隊平安下山。
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-xs text-stone-400 font-medium">
        圖 4-9：領隊氣象判讀雙軌循環決策模型（行前評估與現地動態回饋閉環）
      </figcaption>
    </figure>
  );
};
