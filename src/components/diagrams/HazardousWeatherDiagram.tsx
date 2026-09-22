import React from 'react';

export const HazardousWeatherDiagram: React.FC = () => {
  return (
    <figure className="my-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 shadow-sm">
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 800 470"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="教學圖解 06：高山常見危險天氣危害機制與現場防護措施"
        >
          <title>圖解 06：高山常見危險天氣</title>
          <desc>
            條列午後雷雨、強風、低溫／寒流、濃霧四大常見高山危險天氣之主要風險機制與防範對策。
          </desc>

          {/* Background */}
          <rect width="800" height="470" rx="12" fill="#0b1015" />

          {/* Header */}
          <rect x="24" y="18" width="752" height="46" rx="8" fill="#020617" stroke="#1e293b" strokeWidth="1" />
          <text x="44" y="46" fill="#f8fafc" fontSize="15" fontWeight="700">
            圖解 06｜高山常見危險天氣 · 風險機制與現場因應原則
          </text>

          {/* 4 Hazard Cards */}
          {/* Card 1: 午後雷雨 */}
          <g transform="translate(36, 80)">
            <rect width="350" height="160" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <rect width="350" height="34" rx="8" fill="#4338ca" />
            <text x="14" y="22" fill="#ffffff" fontSize="13" fontWeight="700">1. 午後雷雨 (Convective Storm)</text>

            <g transform="translate(14, 46)">
              <text x="0" y="15" fill="#a5b4fc" fontSize="12" fontWeight="700">【主要風險機制】</text>
              <text x="12" y="32" fill="#94a3b8" fontSize="11">突發雷擊暴露、短延時暴雨浸濕衣物、溪水暴漲阻斷退路。</text>

              <text x="0" y="58" fill="#a5b4fc" fontSize="12" fontWeight="700">【現場因應原則】</text>
              <text x="12" y="74" fill="#cbd5e1" fontSize="11">迅速離開孤立大樹、裸露稜線與山頂金屬設施；</text>
              <text x="12" y="90" fill="#cbd5e1" fontSize="11">穿著完整雨衣褲保暖，若遇溪溝混濁暴漲切勿冒險強渡。</text>
            </g>
          </g>

          {/* Card 2: 強風 */}
          <g transform="translate(414, 80)">
            <rect width="350" height="160" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <rect width="350" height="34" rx="8" fill="#0f766e" />
            <text x="14" y="22" fill="#ffffff" fontSize="13" fontWeight="700">2. 強風 (Gale & High Winds)</text>

            <g transform="translate(14, 46)">
              <text x="0" y="15" fill="#5eead4" fontSize="12" fontWeight="700">【主要風險機制】</text>
              <text x="12" y="32" fill="#94a3b8" fontSize="11">急速抽離體表熱量造成風寒效應；破壞行進平衡增加墜落率。</text>

              <text x="0" y="58" fill="#5eead4" fontSize="12" fontWeight="700">【現場因應原則】</text>
              <text x="12" y="74" fill="#cbd5e1" fontSize="11">加穿防風硬殼衣帽，束緊袖口與下擺阻絕冷空氣灌入；</text>
              <text x="12" y="90" fill="#cbd5e1" fontSize="11">過窄稜低姿態重心前傾，避開背風面瞬間渦流突風。</text>
            </g>
          </g>

          {/* Card 3: 低溫／寒流 */}
          <g transform="translate(36, 255)">
            <rect width="350" height="160" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <rect width="350" height="34" rx="8" fill="#0369a1" />
            <text x="14" y="22" fill="#ffffff" fontSize="13" fontWeight="700">3. 低溫／寒流 (Extreme Cold & Fronts)</text>

            <g transform="translate(14, 46)">
              <text x="0" y="15" fill="#7dd3fc" fontSize="12" fontWeight="700">【主要風險機制】</text>
              <text x="12" y="32" fill="#94a3b8" fontSize="11">失溫症（Hypothermia）、肢端凍瘡、高山步道結冰打滑。</text>

              <text x="0" y="58" fill="#7dd3fc" fontSize="12" fontWeight="700">【現場因應原則】</text>
              <text x="12" y="74" fill="#cbd5e1" fontSize="11">採用三層洋蔥式穿法，維持「乾爽」避免汗水浸透底層；</text>
              <text x="12" y="90" fill="#cbd5e1" fontSize="11">補充高熱量糖分與溫熱水，若隊員出現發抖口齒不清立即處置。</text>
            </g>
          </g>

          {/* Card 4: 濃霧 */}
          <g transform="translate(414, 255)">
            <rect width="350" height="160" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <rect width="350" height="34" rx="8" fill="#475569" />
            <text x="14" y="22" fill="#ffffff" fontSize="13" fontWeight="700">4. 濃霧 (Dense Mountain Fog)</text>

            <g transform="translate(14, 46)">
              <text x="0" y="15" fill="#cbd5e1" fontSize="12" fontWeight="700">【主要風險機制】</text>
              <text x="12" y="32" fill="#94a3b8" fontSize="11">視線驟減引發空間迷向（Disorientation）、落單失聯、路跡混淆。</text>

              <text x="0" y="58" fill="#cbd5e1" fontSize="12" fontWeight="700">【現場因應原則】</text>
              <text x="12" y="74" fill="#cbd5e1" fontSize="11">縮短隊伍間距維持視線內聯繫，打開離線離線航跡 GPS 比對；</text>
              <text x="12" y="90" fill="#cbd5e1" fontSize="11">在岔路點集合點名，絕不允許單獨脫隊行動。</text>
            </g>
          </g>

          {/* Bottom Crucial Scientific Tone Note */}
          <g transform="translate(36, 426)">
            <rect width="728" height="32" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="20" y="21" fill="#cbd5e1" fontSize="11" fontWeight="600">
              ※ 客觀備註：危險天氣是客觀物理現象，事故通常發生在「裝備不足」、「體能超載」與「勉強前進」的連鎖反應。
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-xs text-stone-400 font-medium">
        圖 4-6：高山常見危險天氣成因機制與對應原則
      </figcaption>
    </figure>
  );
};
