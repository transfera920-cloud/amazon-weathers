import React from 'react';

export const FieldObservationDiagram: React.FC = () => {
  return (
    <figure className="my-6 rounded-2xl border border-stone-200 bg-white p-4 sm:p-6 shadow-sm">
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 800 460"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="教學圖解 05：現場天氣觀察指標 —— 雲態、風速、氣壓與體感微環境"
        >
          <title>圖解 05：現場天氣觀察</title>
          <desc>
            建立五感與儀表結合的現場氣象線索解讀系統：包含雲狀垂直發展、風向突變、手錶氣壓計趨勢與環境能見度。
          </desc>

          {/* Background */}
          <rect width="800" height="460" rx="12" fill="#fafaf9" />

          {/* Header */}
          <rect x="24" y="18" width="752" height="46" rx="8" fill="#0f172a" />
          <text x="44" y="46" fill="#f8fafc" fontSize="15" fontWeight="700">
            圖解 05｜現場天氣觀察 · 「預報是參考，現場是證據」四大現地指標
          </text>

          {/* Grid of 4 Observation Pillars */}
          {/* Card 1: Clouds 雲態演變 */}
          <g transform="translate(36, 80)">
            <rect width="350" height="155" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect width="350" height="34" rx="8" fill="#0284c7" />
            <text x="14" y="22" fill="#ffffff" fontSize="13" fontWeight="700">指標 A · 雲態與天空形態</text>

            <g transform="translate(14, 46)">
              <text x="0" y="16" fill="#0f172a" fontSize="12" fontWeight="700">▸ 積雲垂直聳立 (塔狀積雲)：</text>
              <text x="12" y="32" fill="#64748b" fontSize="11">熱對流旺盛，1~2小時內可能轉為雷雨胞。</text>

              <text x="0" y="56" fill="#0f172a" fontSize="12" fontWeight="700">▸ 卷層雲逐漸增厚、天色發灰：</text>
              <text x="12" y="72" fill="#64748b" fontSize="11">鋒面或大尺度降雨系統前緣接近徵兆。</text>

              <text x="0" y="94" fill="#0369a1" fontSize="11" fontWeight="600">
                ※ 叮嚀：見雲不等於必雨，需觀察垂直堆疊速度。
              </text>
            </g>
          </g>

          {/* Card 2: Wind 風場變化 */}
          <g transform="translate(414, 80)">
            <rect width="350" height="155" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect width="350" height="34" rx="8" fill="#0d9488" />
            <text x="14" y="22" fill="#ffffff" fontSize="13" fontWeight="700">指標 B · 風向與陣風強度</text>

            <g transform="translate(14, 46)">
              <text x="0" y="16" fill="#0f172a" fontSize="12" fontWeight="700">▸ 風向突然反轉或逆風增強：</text>
              <text x="12" y="32" fill="#64748b" fontSize="11">常為下衝氣流（Gust Front）或鋒面過境。</text>

              <text x="0" y="56" fill="#0f172a" fontSize="12" fontWeight="700">▸ 稜線出現呼嘯旗雲與強烈側風：</text>
              <text x="12" y="72" fill="#64748b" fontSize="11">高空噴射氣流下壓，失溫與失衡風險驟增。</text>

              <text x="0" y="94" fill="#0f766e" fontSize="11" fontWeight="600">
                ※ 叮嚀：風速每增加 1m/s，體感溫即明顯下滑。
              </text>
            </g>
          </g>

          {/* Card 3: Barometer 氣壓計趨勢 */}
          <g transform="translate(36, 250)">
            <rect width="350" height="155" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect width="350" height="34" rx="8" fill="#ea580c" />
            <text x="14" y="22" fill="#ffffff" fontSize="13" fontWeight="700">指標 C · 手錶氣壓計趨勢 (Trend)</text>

            <g transform="translate(14, 46)">
              <text x="0" y="16" fill="#0f172a" fontSize="12" fontWeight="700">▸ 3 小時內氣壓下降超過 3~4 hPa：</text>
              <text x="12" y="32" fill="#64748b" fontSize="11">代表低壓槽、鋒面或強對流系統逼近。</text>

              <text x="0" y="56" fill="#0f172a" fontSize="12" fontWeight="700">▸ 高度計原地靜止但高度數值莫名上升：</text>
              <text x="12" y="72" fill="#64748b" fontSize="11">典型氣壓走低表現，預示天氣即將轉壞。</text>

              <text x="0" y="94" fill="#c2410c" fontSize="11" fontWeight="600">
                ※ 叮嚀：必須在同一營地/停等點比對才有意義。
              </text>
            </g>
          </g>

          {/* Card 4: Human Senses 體感與能見度 */}
          <g transform="translate(414, 250)">
            <rect width="350" height="155" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect width="350" height="34" rx="8" fill="#4f46e5" />
            <text x="14" y="22" fill="#ffffff" fontSize="13" fontWeight="700">指標 D · 體感濕度與視野能見度</text>

            <g transform="translate(14, 46)">
              <text x="0" y="16" fill="#0f172a" fontSize="12" fontWeight="700">▸ 遠山稜線被整片白幕迅速吞沒：</text>
              <text x="12" y="32" fill="#64748b" fontSize="11">水氣飽和層抬升，即將進入濃霧與白化環境。</text>

              <text x="0" y="56" fill="#0f172a" fontSize="12" fontWeight="700">▸ 體感黏濕、風吹帶刺骨冰涼感：</text>
              <text x="12" y="72" fill="#64748b" fontSize="11">大氣即將降水，衣物排汗不良易導致內濕外冷。</text>

              <text x="0" y="94" fill="#4338ca" fontSize="11" fontWeight="600">
                ※ 叮嚀：見微知著，提早在起風前穿妥防風雨層。
              </text>
            </g>
          </g>

          {/* Bottom Logic Line */}
          <g transform="translate(36, 416)">
            <rect width="728" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
            <text x="20" y="22" fill="#334155" fontSize="12" fontWeight="700">
              觀察金律：單一線索不恐慌，多重徵兆共振（氣壓降＋積雲厚＋風向變）即啟動應變預案。
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-xs text-stone-500 font-medium">
        圖 4-5：現場四大氣象指標觀察與風險交叉驗證
      </figcaption>
    </figure>
  );
};
