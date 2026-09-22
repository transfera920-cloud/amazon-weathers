import React from 'react';

export const LapseRateDiagram: React.FC = () => {
  return (
    <figure className="my-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 shadow-sm">
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 800 480"
          className="w-full h-auto max-w-full block select-none"
          role="img"
          aria-label="教學圖解 03：高度與溫度關係圖 —— 環境垂直遞減率與概念示意"
        >
          <title>圖解 03：高度與溫度</title>
          <desc>
            依據每升高1000公尺約降溫6.5度C之平均環境遞減率，呈現自0公尺至3800公尺高山氣溫垂直落差。
          </desc>

          <defs>
            <linearGradient id="lapseMountainGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="40%" stopColor="#047857" />
              <stop offset="75%" stopColor="#334155" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="tempBarGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="40%" stopColor="#f59e0b" />
              <stop offset="75%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="480" rx="12" fill="#0b1015" />

          {/* Top Banner */}
          <rect x="24" y="18" width="752" height="46" rx="8" fill="#020617" stroke="#1e293b" strokeWidth="1" />
          <text x="44" y="46" fill="#f8fafc" fontSize="15" fontWeight="700">
            圖解 03｜高度與溫度 · 平均環境遞減率約 6.5°C / 1000m
          </text>

          {/* Mountain Profile in Center Left */}
          <g transform="translate(40, 75)">
            {/* Elevation axis */}
            <line x1="60" y1="30" x2="60" y2="310" stroke="#475569" strokeWidth="2" />
            
            {/* Mountain polygon */}
            <polygon
              points="60,310 160,250 240,180 320,100 380,40 440,110 500,200 560,310"
              fill="url(#lapseMountainGrad)"
              opacity="0.9"
            />
            {/* Snow cap at summit */}
            <polygon points="360,60 380,40 400,60 380,70" fill="#f8fafc" opacity="0.95" />

            {/* Level 3800m */}
            <line x1="50" y1="40" x2="680" y2="40" stroke="#334155" strokeDasharray="4 4" strokeWidth="1.5" />
            <circle cx="60" cy="40" r="4" fill="#38bdf8" />
            <text x="15" y="45" fill="#7dd3fc" fontSize="12" fontWeight="700">3800m</text>
            <rect x="420" y="24" width="260" height="32" rx="6" fill="#0c4a6e" stroke="#0284c7" />
            <text x="432" y="45" fill="#bae6fd" fontSize="13" fontWeight="700">
              3800m ≈ 約 0°C（高山主峰與稜線）
            </text>

            {/* Level 3000m */}
            <line x1="50" y1="100" x2="680" y2="100" stroke="#334155" strokeDasharray="4 4" strokeWidth="1.5" />
            <circle cx="60" cy="100" r="4" fill="#0284c7" />
            <text x="15" y="105" fill="#38bdf8" fontSize="12" fontWeight="700">3000m</text>
            <rect x="420" y="84" width="260" height="32" rx="6" fill="#082f49" stroke="#0369a1" />
            <text x="432" y="105" fill="#7dd3fc" fontSize="13" fontWeight="700">
              3000m ≈ 約 5°C（高山百岳基線）
            </text>

            {/* Level 1500m */}
            <line x1="50" y1="200" x2="680" y2="200" stroke="#334155" strokeDasharray="4 4" strokeWidth="1.5" />
            <circle cx="60" cy="200" r="4" fill="#10b981" />
            <text x="15" y="205" fill="#34d399" fontSize="12" fontWeight="700">1500m</text>
            <rect x="420" y="184" width="260" height="32" rx="6" fill="#064e3b" stroke="#059669" />
            <text x="432" y="205" fill="#a7f3d0" fontSize="13" fontWeight="700">
              1500m ≈ 約 15°C（中海拔林道/隘口）
            </text>

            {/* Level 0m */}
            <line x1="50" y1="310" x2="680" y2="310" stroke="#64748b" strokeWidth="2" />
            <circle cx="60" cy="310" r="4" fill="#ea580c" />
            <text x="25" y="315" fill="#fb923c" fontSize="12" fontWeight="700">0m</text>
            <rect x="420" y="294" width="260" height="32" rx="6" fill="#7c2d12" stroke="#ea580c" />
            <text x="432" y="315" fill="#fed7aa" fontSize="13" fontWeight="700">
              0m ≈ 約 25°C（平地海平面標準）
            </text>
          </g>

          {/* Crucial Mandatory Scientific Note Banner */}
          <g transform="translate(36, 400)">
            <rect width="728" height="62" rx="8" fill="#450a0a" stroke="#991b1b" strokeWidth="1.5" />
            <text x="20" y="24" fill="#fca5a5" fontSize="13" fontWeight="700">
              ※ 重要科學備註：概念示意，實際氣溫依當日氣象條件變化。
            </text>
            <text x="20" y="44" fill="#fecaca" fontSize="12">
              實際氣溫變化受到當日大氣水氣含量、逆溫層（Inversion Layer）、冷空氣下沉及日照輻射強烈影響，並非恆定不變之線性常數。
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-center text-xs text-stone-400 font-medium">
        圖 4-3：高度垂直環境遞減率與氣溫對照模型（概念示意，實際氣溫依當日氣象條件變化）
      </figcaption>
    </figure>
  );
};
