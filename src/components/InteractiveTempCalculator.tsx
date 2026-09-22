import React, { useState } from 'react';
import { Thermometer, Wind, Mountain, AlertCircle, RefreshCw } from 'lucide-react';

export const InteractiveTempCalculator: React.FC = () => {
  const [baseTemp, setBaseTemp] = useState<number>(25); // 平地海平面氣溫 °C
  const [targetAlt, setTargetAlt] = useState<number>(3100); // 目標海拔公尺
  const [windSpeed, setWindSpeed] = useState<number>(8); // 風速 m/s

  // 環境遞減率：每 1000 公尺約降 6.5°C
  const lapseRatePerKm = 6.5;
  const tempDrop = (targetAlt / 1000) * lapseRatePerKm;
  const estimatedAmbientTemp = Math.round((baseTemp - tempDrop) * 10) / 10;

  // 風寒指數簡易估算 (Wind Chill Approximation for moderate mountain winds)
  // 簡化經驗公式：體感溫 ≈ 氣溫 - (風速 m/s * 0.8 ~ 1.2)
  const windChillDrop = windSpeed > 1 ? Math.round(Math.sqrt(windSpeed) * 2.2 * 10) / 10 : 0;
  const estimatedApparentTemp = Math.round((estimatedAmbientTemp - windChillDrop) * 10) / 10;

  const presets = [
    { label: '合歡山主峰 (3417m)', alt: 3417 },
    { label: '玉山主峰 (3952m)', alt: 3952 },
    { label: '雪山圈谷 (3500m)', alt: 3500 },
    { label: '中海拔營地 (1800m)', alt: 1800 },
  ];

  return (
    <div className="my-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 shadow-sm">
      <div className="flex items-center space-x-2.5 mb-3">
        <div className="p-2 rounded-lg bg-emerald-950/70 text-emerald-400 border border-emerald-800/60">
          <Thermometer className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <div className="text-sm font-bold text-stone-100">
            教學輔助工具：高山海拔氣溫與風寒體感試算
          </div>
          <div className="text-xs text-stone-400">
            依環境遞減率（約 6.5°C / 1000m）與稜線風速進行估算
          </div>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs text-stone-400 self-center">常見高山預設：</span>
        {presets.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setTargetAlt(p.alt)}
            className="text-xs px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-800 text-stone-300 hover:text-emerald-400 border border-slate-800 transition-colors"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        {/* Input 1: Base Temperature */}
        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-semibold text-stone-300 mb-2">
            <span className="flex items-center space-x-1">
              <Thermometer className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
              <span>山腳/平地氣溫</span>
            </span>
            <span className="font-mono text-emerald-400 font-bold">{baseTemp} °C</span>
          </div>
          <input
            type="range"
            min="10"
            max="38"
            step="1"
            value={baseTemp}
            onChange={(e) => setBaseTemp(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
            aria-label="山腳平地氣溫調整滑桿"
          />
          <div className="flex justify-between text-[10px] text-stone-500 mt-1">
            <span>10°C (冬)</span>
            <span>25°C (常溫)</span>
            <span>38°C (酷暑)</span>
          </div>
        </div>

        {/* Input 2: Target Altitude */}
        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-semibold text-stone-300 mb-2">
            <span className="flex items-center space-x-1">
              <Mountain className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              <span>目標海拔高度</span>
            </span>
            <span className="font-mono text-emerald-400 font-bold">{targetAlt} m</span>
          </div>
          <input
            type="range"
            min="500"
            max="4000"
            step="50"
            value={targetAlt}
            onChange={(e) => setTargetAlt(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
            aria-label="目標海拔高度調整滑桿"
          />
          <div className="flex justify-between text-[10px] text-stone-500 mt-1">
            <span>500m</span>
            <span>2000m</span>
            <span>4000m (百岳)</span>
          </div>
        </div>

        {/* Input 3: Wind Speed */}
        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center text-xs font-semibold text-stone-300 mb-2">
            <span className="flex items-center space-x-1">
              <Wind className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
              <span>稜線風速</span>
            </span>
            <span className="font-mono text-emerald-400 font-bold">{windSpeed} m/s</span>
          </div>
          <input
            type="range"
            min="0"
            max="25"
            step="1"
            value={windSpeed}
            onChange={(e) => setWindSpeed(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer"
            aria-label="稜線風速調整滑桿"
          />
          <div className="flex justify-between text-[10px] text-stone-500 mt-1">
            <span>微風 (0m/s)</span>
            <span>中風 (8m/s)</span>
            <span>強風 (20m/s)</span>
          </div>
        </div>
      </div>

      {/* Results Output Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3">
        <div className="bg-emerald-950/80 border border-emerald-800/60 text-white p-4 rounded-xl shadow-sm">
          <div className="text-xs text-emerald-300 font-medium">
            環境估算氣溫 (海拔遞減)
          </div>
          <div className="text-3xl font-extrabold font-mono mt-1 text-white">
            {estimatedAmbientTemp > 0 ? `+${estimatedAmbientTemp}` : estimatedAmbientTemp} °C
          </div>
          <div className="text-xs text-emerald-400 mt-1">
            相較平地降溫約 {Math.round(tempDrop * 10) / 10} °C
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 text-white p-4 rounded-xl shadow-sm">
          <div className="text-xs text-stone-400 font-medium">
            稜線風寒體感溫 (Apparent Chill)
          </div>
          <div className="text-3xl font-extrabold font-mono mt-1 text-amber-400">
            {estimatedApparentTemp > 0 ? `+${estimatedApparentTemp}` : estimatedApparentTemp} °C
          </div>
          <div className="text-xs text-stone-500 mt-1">
            風速 {windSpeed} m/s 額外帶走體熱約 {windChillDrop} °C
          </div>
        </div>
      </div>

      {/* Mandatory Scientific Disclaimer Banner */}
      <div className="flex items-start space-x-2 text-xs text-amber-300 bg-amber-950/40 p-3 rounded-lg border border-amber-800/60">
        <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <span className="font-bold text-amber-200">概念示意，實際氣溫依當日氣象條件變化。</span>
          <span className="text-amber-300/90 ml-1">
            真實高山大氣受水氣飽和度（乾絕熱 vs 濕絕熱遞減率）、逆溫層阻隔與日照直射顯著影響，出發前請以中央氣象署各山頭實測數值為準。
          </span>
        </div>
      </div>
    </div>
  );
};
