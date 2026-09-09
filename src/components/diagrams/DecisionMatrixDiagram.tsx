import React from 'react';

export const DecisionMatrixDiagram: React.FC = () => {
  return (
    <figure className="my-6 rounded-2xl border border-stone-200 bg-white p-4 sm:p-6 shadow-sm">
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 800 480"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="教學圖解 07：天氣到行程決策矩陣 —— 出發、調整、撤退、取消四大行動模型"
        >
          <title>圖解 07：天氣 → 行程決策</title>
          <desc>
            展示氣象判讀如何導向具體的安全管理決策：出發、調整、撤退、取消，並貫徹安全撤退也是成功登山的核心理念。
          </desc>

          {/* Background */}
          <rect width="800" height="480" rx="12" fill="#fafaf9" />

          {/* Header */}
          <rect x="24" y="18" width="752" height="46" rx="8" fill="#0f172a" />
          <text x="44" y="46" fill="#f8fafc" fontSize="15" fontWeight="700">
            圖解 07｜天氣 → 行程決策 · 「不是預測，而是提前做決策」
          </text>

          {/* 4 Quadrants / Process Cards */}
          {/* Option 1: Go 出發 */}
          <g transform="translate(36, 80)">
            <rect width="350" height="160" rx="10" fill="#f0fdf4" stroke="#86efac" strokeWidth="2" />
            <rect width="350" height="36" rx="8" fill="#16a34a" />
            <text x="16" y="24" fill="#ffffff" fontSize="14" fontWeight="700">A · 依計出發 (Go)</text>

            <g transform="translate(16, 50)">
              <text x="0" y="15" fill="#166534" fontSize="12" fontWeight="700">【觸發情境】</text>
              <text x="12" y="32" fill="#14532d" fontSize="11">大尺度高壓籠罩、數值模式收斂良好、無顯著警特報。</text>

              <text x="0" y="58" fill="#166534" fontSize="12" fontWeight="700">【執行關鍵】</text>
              <text x="12" y="74" fill="#14532d" fontSize="11">按原定時間出發，嚴格維持排程節奏與水分補給；</text>
              <text x="12" y="90" fill="#14532d" fontSize="11">不因好天氣而鬆懈現場每兩小時的氣壓與雲況覆核。</text>
            </g>
          </g>

          {/* Option 2: Adjust 調整 */}
          <g transform="translate(414, 80)">
            <rect width="350" height="160" rx="10" fill="#fefce8" stroke="#fde047" strokeWidth="2" />
            <rect width="350" height="36" rx="8" fill="#ca8a04" />
            <text x="16" y="24" fill="#ffffff" fontSize="14" fontWeight="700">B · 彈性調整 (Adjust)</text>

            <g transform="translate(16, 50)">
              <text x="0" y="15" fill="#854d0e" fontSize="12" fontWeight="700">【觸發情境】</text>
              <text x="12" y="32" fill="#713f12" fontSize="11">午後熱對流旺盛機率高、或部分時段風速接近受風上限。</text>

              <text x="0" y="58" fill="#854d0e" fontSize="12" fontWeight="700">【執行關鍵】</text>
              <text x="12" y="74" fill="#713f12" fontSize="11">將清晨出發時間提早 1~2 小時，爭取在下雨前通過危險稜線；</text>
              <text x="12" y="90" fill="#713f12" fontSize="11">啟動備用營地方案或刪除次要山頭，降低隊員疲勞。</text>
            </g>
          </g>

          {/* Option 3: Turn Around 撤退 */}
          <g transform="translate(36, 255)">
            <rect width="350" height="160" rx="10" fill="#fff7ed" stroke="#fdba74" strokeWidth="2" />
            <rect width="350" height="36" rx="8" fill="#ea580c" />
            <text x="16" y="24" fill="#ffffff" fontSize="14" fontWeight="700">C · 果斷撤退 (Turn Around)</text>

            <g transform="translate(16, 50)">
              <text x="0" y="15" fill="#9a3412" fontSize="12" fontWeight="700">【觸發情境】</text>
              <text x="12" y="32" fill="#7c2d12" fontSize="11">行程中現地惡化超出預估：氣壓驟跌、雷雲在頭頂發展、隊員失溫。</text>

              <text x="0" y="58" fill="#9a3412" fontSize="12" fontWeight="700">【執行關鍵】</text>
              <text x="12" y="74" fill="#7c2d12" fontSize="11">觸發預設「折返時間點 (Turn-around Time)」，全隊原路折返；</text>
              <text x="12" y="90" fill="#7c2d12" fontSize="11">絕不心存僥倖，山永遠都在，生命無法重來。</text>
            </g>
          </g>

          {/* Option 4: Cancel 取消 */}
          <g transform="translate(414, 255)">
            <rect width="350" height="160" rx="10" fill="#fef2f2" stroke="#fca5a5" strokeWidth="2" />
            <rect width="350" height="36" rx="8" fill="#dc2626" />
            <text x="16" y="24" fill="#ffffff" fontSize="14" fontWeight="700">D · 主動取消 (Cancel)</text>

            <g transform="translate(16, 50)">
              <text x="0" y="15" fill="#991b1b" fontSize="12" fontWeight="700">【觸發情境】</text>
              <text x="12" y="32" fill="#7f1d1d" fontSize="11">出發前預報強烈颱風、滯留鋒面豪雨特報、低溫強烈冷氣團。</text>

              <text x="0" y="58" fill="#991b1b" fontSize="12" fontWeight="700">【執行關鍵】</text>
              <text x="12" y="74" fill="#7f1d1d" fontSize="11">在山下立刻通知全員取消或延期，將風險歸零；</text>
              <text x="12" y="90" fill="#7f1d1d" fontSize="11">把入園入山與退費當作學習代價，杜絕沈沒成本心理障礙。</text>
            </g>
          </g>

          {/* Core Philosophy Center Ribbon */}
          <g transform="translate(36, 428)">
            <rect width="728" height="38" rx="6" fill="#0f766e" />
            <text x="364" y="24" fill="#ffffff" fontSize="14" fontWeight="800" textAnchor="middle" letterSpacing="0.05em">
              ✦ 核心理念：安全撤退，也是成功登山 ✦
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-xs text-stone-500 font-medium">
        圖 4-7：氣象風險導向之登山決策四象限模型
      </figcaption>
    </figure>
  );
};
