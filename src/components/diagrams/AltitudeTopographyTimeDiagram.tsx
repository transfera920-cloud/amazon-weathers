import React from 'react';

export const AltitudeTopographyTimeDiagram: React.FC = () => {
  return (
    <figure className="my-6 rounded-2xl border border-stone-200 bg-white p-4 sm:p-6 shadow-sm">
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 800 460"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="教學圖解 02：山岳氣象三大關鍵變數 —— 高度、時間、地形交織模型"
        >
          <title>圖解 02：高度 × 時間 × 地形</title>
          <desc>
            剖析高度遞減率、地形抬升與背風效應、以及山區日照時間週期的三維互動關係。
          </desc>

          {/* Background */}
          <rect width="800" height="460" rx="12" fill="#fafaf9" />

          {/* Top Banner */}
          <rect x="24" y="20" width="752" height="46" rx="8" fill="#1e293b" />
          <text x="44" y="48" fill="#f8fafc" fontSize="15" fontWeight="700" letterSpacing="0.05em">
            圖解 02｜山岳氣象三大變數 · 高度 (Altitude) × 時間 (Time) × 地形 (Topography)
          </text>

          {/* Column 1: Altitude 高度 */}
          <g transform="translate(36, 85)">
            <rect width="224" height="270" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect width="224" height="38" rx="8" fill="#0284c7" />
            <text x="16" y="24" fill="#ffffff" fontSize="14" fontWeight="700">1. 高度變數 · 垂直梯度</text>

            {/* Visual Altitude Ladder */}
            <g transform="translate(16, 52)">
              <line x1="20" y1="10" x2="20" y2="190" stroke="#94a3b8" strokeWidth="3" />
              
              {/* Level 3000m+ */}
              <circle cx="20" cy="20" r="5" fill="#0284c7" />
              <text x="35" y="24" fill="#0369a1" fontSize="12" fontWeight="700">3000m+ 高山帶</text>
              <text x="35" y="40" fill="#64748b" fontSize="11">低溫、稀薄空氣、無遮蔽稜線</text>

              {/* Level 1500m */}
              <circle cx="20" cy="90" r="5" fill="#38bdf8" />
              <text x="35" y="94" fill="#0284c7" fontSize="12" fontWeight="700">1500~2500m 霧林帶</text>
              <text x="35" y="110" fill="#64748b" fontSize="11">水氣常態凝結、午後濃霧層</text>

              {/* Level 0m */}
              <circle cx="20" cy="165" r="5" fill="#bae6fd" />
              <text x="35" y="169" fill="#0f172a" fontSize="12" fontWeight="700">0~500m 平地與登山口</text>
              <text x="35" y="185" fill="#64748b" fontSize="11">高溫濕熱、平地天氣不等於山頂</text>
            </g>
          </g>

          {/* Column 2: Time 時間 */}
          <g transform="translate(288, 85)">
            <rect width="224" height="270" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect width="224" height="38" rx="8" fill="#d97706" />
            <text x="16" y="24" fill="#ffffff" fontSize="14" fontWeight="700">2. 時間變數 · 日照循環</text>

            {/* Time Timeline */}
            <g transform="translate(16, 52)">
              <line x1="20" y1="10" x2="20" y2="190" stroke="#fcd34d" strokeWidth="3" />

              {/* 05:00 - 09:00 */}
              <circle cx="20" cy="20" r="5" fill="#d97706" />
              <text x="35" y="24" fill="#b45309" fontSize="12" fontWeight="700">05:00 - 09:00 清晨穩定</text>
              <text x="35" y="40" fill="#78350f" fontSize="11">輻射冷卻後氣流穩定、能見度佳</text>

              {/* 10:00 - 13:00 */}
              <circle cx="20" cy="90" r="5" fill="#f59e0b" />
              <text x="35" y="94" fill="#b45309" fontSize="12" fontWeight="700">10:00 - 13:00 熱力抬升</text>
              <text x="35" y="110" fill="#78350f" fontSize="11">太陽加溫谷底，積雲快速垂直堆疊</text>

              {/* 13:00 - 17:00 */}
              <circle cx="20" cy="165" r="5" fill="#fbbf24" />
              <text x="35" y="169" fill="#9a3412" fontSize="12" fontWeight="700">13:00 - 17:00 午後降雨高發</text>
              <text x="35" y="185" fill="#78350f" fontSize="11">高山對流雨、雷雨、氣溫驟降</text>
            </g>
          </g>

          {/* Column 3: Topography 地形 */}
          <g transform="translate(540, 85)">
            <rect width="224" height="270" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect width="224" height="38" rx="8" fill="#059669" />
            <text x="16" y="24" fill="#ffffff" fontSize="14" fontWeight="700">3. 地形變數 · 微氣候效應</text>

            <g transform="translate(16, 52)">
              {/* Feature 1 */}
              <rect x="0" y="5" width="192" height="52" rx="6" fill="#ecfdf5" stroke="#a7f3d0" />
              <text x="10" y="24" fill="#065f46" fontSize="12" fontWeight="700">迎風面 vs 背風面</text>
              <text x="10" y="42" fill="#047857" fontSize="11">迎風面水氣抬升多雲霧降雨</text>

              {/* Feature 2 */}
              <rect x="0" y="68" width="192" height="52" rx="6" fill="#ecfdf5" stroke="#a7f3d0" />
              <text x="10" y="87" fill="#065f46" fontSize="12" fontWeight="700">稜線鞍部狹管效應</text>
              <text x="10" y="105" fill="#047857" fontSize="11">風速加倍，風寒效應顯著劇增</text>

              {/* Feature 3 */}
              <rect x="0" y="131" width="192" height="52" rx="6" fill="#ecfdf5" stroke="#a7f3d0" />
              <text x="10" y="150" fill="#065f46" fontSize="12" fontWeight="700">深谷冷空氣積聚</text>
              <text x="10" y="168" fill="#047857" fontSize="11">夜間輻射冷卻，營地常低於預期</text>
            </g>
          </g>

          {/* Bottom Interactive Connection Note */}
          <g transform="translate(36, 370)">
            <rect width="728" height="66" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
            <text x="20" y="28" fill="#0f172a" fontSize="13" fontWeight="700">
              綜合格律結論：山區氣象絕非單一平面預報
            </text>
            <text x="20" y="48" fill="#475569" fontSize="12">
              即便同一個行政區，「海拔高度」、「抵達鞍部的時刻」、與「身處迎風還是背風面」會形成截然不同的氣候現實。
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-xs text-stone-500 font-medium">
        圖 4-2：山岳氣象三大關鍵變數 —— 高度、時間、地形交織模型
      </figcaption>
    </figure>
  );
};
