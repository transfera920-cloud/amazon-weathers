import React from 'react';

export const CommonMistakesDiagram: React.FC = () => {
  return (
    <figure className="my-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 shadow-sm">
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 800 480"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="教學圖解 08：五種常見登山氣象判讀認知迷思與正確防範觀念"
        >
          <title>圖解 08：常見判讀錯誤</title>
          <desc>
            對比常見的絕對化預測錯誤（如降雨機率迷思、平地氣溫誤植、手機圖示盲信）與登山者的正確動態思維。
          </desc>

          {/* Background */}
          <rect width="800" height="480" rx="12" fill="#0b1015" />

          {/* Header */}
          <rect x="24" y="18" width="752" height="46" rx="8" fill="#020617" stroke="#1e293b" strokeWidth="1" />
          <text x="44" y="46" fill="#f8fafc" fontSize="15" fontWeight="700">
            圖解 08｜常見判讀錯誤 · 破除絕對化思維 · 錯誤認知 vs. 正確觀念
          </text>

          {/* Row 1: 降雨機率迷思 */}
          <g transform="translate(36, 75)">
            <rect width="350" height="66" rx="6" fill="#450a0a" stroke="#991b1b" strokeWidth="1" />
            <text x="12" y="24" fill="#fca5a5" fontSize="12" fontWeight="700">❌ 錯誤迷思：降雨機率30%很低，不用帶雨衣？</text>
            <text x="12" y="48" fill="#fecaca" fontSize="11">以為30%代表幾乎不下雨，或只下30%的雨量。</text>

            <rect x="378" y="0" width="350" height="66" rx="6" fill="#062e24" stroke="#059669" strokeWidth="1" />
            <text x="390" y="24" fill="#6ee7b7" fontSize="12" fontWeight="700">✔ 正確思維：高山水氣抬升極易觸發局部對流</text>
            <text x="390" y="48" fill="#a7f3d0" fontSize="11">高山雨具是不可或缺的保命裝備，30%機率亦須做好淋雨防護。</text>
          </g>

          {/* Row 2: 平地氣溫誤植 */}
          <g transform="translate(36, 150)">
            <rect width="350" height="66" rx="6" fill="#450a0a" stroke="#991b1b" strokeWidth="1" />
            <text x="12" y="24" fill="#fca5a5" fontSize="12" fontWeight="700">❌ 錯誤迷思：山下氣溫28°C很熱，少帶保暖衣？</text>
            <text x="12" y="48" fill="#fecaca" fontSize="11">忽略高度遞減率與稜線大風，導致高山失溫。</text>

            <rect x="378" y="0" width="350" height="66" rx="6" fill="#062e24" stroke="#059669" strokeWidth="1" />
            <text x="390" y="24" fill="#6ee7b7" fontSize="12" fontWeight="700">✔ 正確思維：每升高1000m約降6.5°C＋風寒效應</text>
            <text x="390" y="48" fill="#a7f3d0" fontSize="11">3000公尺高山氣溫常低於10°C，稜線陣風會讓體感降至冰點。</text>
          </g>

          {/* Row 3: 手機簡易圖示盲信 */}
          <g transform="translate(36, 225)">
            <rect width="350" height="66" rx="6" fill="#450a0a" stroke="#991b1b" strokeWidth="1" />
            <text x="12" y="24" fill="#fca5a5" fontSize="12" fontWeight="700">❌ 錯誤迷思：手機App畫一個太陽就高枕無憂？</text>
            <text x="12" y="48" fill="#fecaca" fontSize="11">依賴平地測站內插演算法，看不到山脈微地形。</text>

            <rect x="378" y="0" width="350" height="66" rx="6" fill="#062e24" stroke="#059669" strokeWidth="1" />
            <text x="390" y="24" fill="#6ee7b7" fontSize="12" fontWeight="700">✔ 正確思維：查看垂直大氣水氣與對流有效位能</text>
            <text x="390" y="48" fill="#a7f3d0" fontSize="11">使用專業高山預報模式（ECMWF/GFS）交叉驗證風場與雲層。</text>
          </g>

          {/* Row 4: 清晨天氣推導整天 */}
          <g transform="translate(36, 300)">
            <rect width="350" height="66" rx="6" fill="#450a0a" stroke="#991b1b" strokeWidth="1" />
            <text x="12" y="24" fill="#fca5a5" fontSize="12" fontWeight="700">❌ 錯誤迷思：清晨出發藍天無雲，今天穩了？</text>
            <text x="12" y="48" fill="#fecaca" fontSize="11">忽視夏日太陽加溫引發之旺盛午後熱對流。</text>

            <rect x="378" y="0" width="350" height="66" rx="6" fill="#062e24" stroke="#059669" strokeWidth="1" />
            <text x="390" y="24" fill="#6ee7b7" fontSize="12" fontWeight="700">✔ 正確思維：高山天氣具有強烈日照時間週期</text>
            <text x="390" y="48" fill="#a7f3d0" fontSize="11">上午10點後雲量會迅速增長，重要攻頂與過稜應盡量在正午前完成。</text>
          </g>

          {/* Row 5: 預報絕對化 (非黑即白) */}
          <g transform="translate(36, 375)">
            <rect width="350" height="66" rx="6" fill="#450a0a" stroke="#991b1b" strokeWidth="1" />
            <text x="12" y="24" fill="#fca5a5" fontSize="12" fontWeight="700">❌ 錯誤迷思：預報常不準所以根本不需要看？</text>
            <text x="12" y="48" fill="#fecaca" fontSize="11">因局部落差而全盤否定大尺度天氣圖與模式價值。</text>

            <rect x="378" y="0" width="350" height="66" rx="6" fill="#062e24" stroke="#059669" strokeWidth="1" />
            <text x="390" y="24" fill="#6ee7b7" fontSize="12" fontWeight="700">✔ 正確思維：預報看「趨勢」，現場驗「證據」</text>
            <text x="390" y="48" fill="#a7f3d0" fontSize="11">預報提供可能情境分佈，搭配現地觀察就能大幅降低決策盲區。</text>
          </g>

          {/* Bottom Note */}
          <g transform="translate(36, 450)">
            <text x="364" y="16" fill="#2dd4bf" fontSize="12" fontWeight="700" textAnchor="middle">
              氣象判讀核心：不作絕對性保證，而是依據多方情資做機率性風險管理
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-xs text-stone-400 font-medium">
        圖 4-8：五大高山氣象判讀認知誤區與科學思維防範
      </figcaption>
    </figure>
  );
};
