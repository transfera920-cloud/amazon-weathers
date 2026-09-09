import React from 'react';

export const WeatherSourcesDiagram: React.FC = () => {
  return (
    <figure className="my-6 rounded-2xl border border-stone-200 bg-white p-4 sm:p-6 shadow-sm">
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 800 490"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="教學圖解 04：五種登山氣象資訊來源與時間空間維度比對矩陣"
        >
          <title>圖解 04：五種氣象資訊來源</title>
          <desc>
            比較地面天氣圖、數值預報模型、衛星雲圖、雷達回波、即時測站之適用時間尺度與核心回答問題。
          </desc>

          {/* Background */}
          <rect width="800" height="490" rx="12" fill="#fafaf9" />

          {/* Header */}
          <rect x="24" y="20" width="752" height="46" rx="8" fill="#0f172a" />
          <text x="44" y="48" fill="#f8fafc" fontSize="15" fontWeight="700">
            圖解 04｜五種氣象資訊來源 · 「不同資料回答不同問題 · 交叉比對 ＞ 單一資訊」
          </text>

          {/* Source 1: Official Synoptic Chart */}
          <g transform="translate(36, 85)">
            <rect width="728" height="62" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect x="0" y="0" width="160" height="62" rx="8" fill="#0284c7" />
            <text x="16" y="27" fill="#ffffff" fontSize="13" fontWeight="700">1. 地面天氣圖 / 預報</text>
            <text x="16" y="46" fill="#e0f2fe" fontSize="11">公部門 (中央氣象署)</text>

            <text x="178" y="26" fill="#0f172a" fontSize="12" fontWeight="700">
              回答核心：大尺度天氣系統（高壓、鋒面、低壓槽、西南氣流）
            </text>
            <text x="178" y="46" fill="#64748b" fontSize="11">
              有效時間：未來 1 ~ 7 天 ｜ 功用：掌握未來數天的大氣穩定度基調
            </text>
          </g>

          {/* Source 2: Numerical Models */}
          <g transform="translate(36, 155)">
            <rect width="728" height="62" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect x="0" y="0" width="160" height="62" rx="8" fill="#059669" />
            <text x="16" y="27" fill="#ffffff" fontSize="13" fontWeight="700">2. 數值模型 (EC/GFS)</text>
            <text x="16" y="46" fill="#d1fae5" fontSize="11">Windy / 各國模式</text>

            <text x="178" y="26" fill="#0f172a" fontSize="12" fontWeight="700">
              回答核心：不同高度之風場、降水機率分佈、氣溫趨勢
            </text>
            <text x="178" y="46" fill="#64748b" fontSize="11">
              有效時間：未來 24 ~ 120 小時 ｜ 功用：比對歐洲 (ECMWF) 與美國 (GFS) 模式收斂度
            </text>
          </g>

          {/* Source 3: Satellite Imagery */}
          <g transform="translate(36, 225)">
            <rect width="728" height="62" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect x="0" y="0" width="160" height="62" rx="8" fill="#d97706" />
            <text x="16" y="27" fill="#ffffff" fontSize="13" fontWeight="700">3. 衛星雲圖</text>
            <text x="16" y="46" fill="#fef3c7" fontSize="11">可見光 / 紅外線 / 水氣</text>

            <text x="178" y="26" fill="#0f172a" fontSize="12" fontWeight="700">
              回答核心：雲系真實範圍、發展厚度與高空水氣輸送帶
            </text>
            <text x="178" y="46" fill="#64748b" fontSize="11">
              有效時間：過去 1 ~ 6 小時 ｜ 功用：驗證數值預報與大氣現況是否一致
            </text>
          </g>

          {/* Source 4: Radar Reflectivity */}
          <g transform="translate(36, 295)">
            <rect width="728" height="62" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect x="0" y="0" width="160" height="62" rx="8" fill="#dc2626" />
            <text x="16" y="27" fill="#ffffff" fontSize="13" fontWeight="700">4. 雷達回波圖</text>
            <text x="16" y="46" fill="#fee2e2" fontSize="11">即時降水粒子反演</text>

            <text x="178" y="26" fill="#0f172a" fontSize="12" fontWeight="700">
              回答核心：哪裡「正在下雨」以及雨胞的移動速度與強度
            </text>
            <text x="178" y="46" fill="#64748b" fontSize="11">
              有效時間：即時 ~ 未來 1 小時 (Nowcasting) ｜ 功用：短延時強降雨與午後雷雨追蹤
            </text>
          </g>

          {/* Source 5: Mountain Weather Stations */}
          <g transform="translate(36, 365)">
            <rect width="728" height="62" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect x="0" y="0" width="160" height="62" rx="8" fill="#475569" />
            <text x="16" y="27" fill="#ffffff" fontSize="13" fontWeight="700">5. 山區即時測站</text>
            <text x="16" y="46" fill="#f1f5f9" fontSize="11">高山自動觀測點</text>

            <text x="178" y="26" fill="#0f172a" fontSize="12" fontWeight="700">
              回答核心：現地山頭實測氣溫、陣風級數、累積雨量
            </text>
            <text x="178" y="46" fill="#64748b" fontSize="11">
              有效時間：每 10 分鐘即時更新 ｜ 功用：校正山腳與高山環境落差的真實體感
            </text>
          </g>

          {/* Bottom Crucial Summary */}
          <g transform="translate(36, 436)">
            <rect width="728" height="42" rx="6" fill="#f0fdf4" stroke="#86efac" />
            <text x="20" y="26" fill="#166534" fontSize="12" fontWeight="700">
              黃金判讀原則：先以「地面圖與數值」定趨勢，出發前以「雲圖與雷達」查現況，不可偏廢任一資訊。
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-xs text-stone-500 font-medium">
        圖 4-4：五種登山氣象資訊來源定位與交叉比對矩陣
      </figcaption>
    </figure>
  );
};
