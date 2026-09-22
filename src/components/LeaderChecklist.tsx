import React, { useState } from 'react';
import { CheckSquare, Square, RotateCcw, AlertOctagon, CheckCircle } from 'lucide-react';

interface ChecklistItem {
  id: string;
  stage: 'pre' | 'trail';
  title: string;
  detail: string;
}

export const LeaderChecklist: React.FC = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const items: ChecklistItem[] = [
    // Pre-trip
    {
      id: 'pre-1',
      stage: 'pre',
      title: '出發前 D-5 ~ D-1：追蹤大氣系統穩定度',
      detail: '查閱中央氣象署地面天氣圖，確認是否有一週以上冷高壓覆蓋或滯留鋒面逼近。',
    },
    {
      id: 'pre-2',
      stage: 'pre',
      title: '出發前 D-3 ~ D-1：多模式 (ECMWF / GFS) 交叉驗證',
      detail: '於 Windy 比對歐洲與美國模式在目標山區之風速、雲層厚度與 3 小時累積雨量收斂度。',
    },
    {
      id: 'pre-3',
      stage: 'pre',
      title: '出發前 D-1：對照地形脆弱點與撤退節點',
      detail: '標定全路線之暴露瘦稜、易暴漲溪溝、崩塌地與折返時間點 (Turn-around Time)。',
    },
    {
      id: 'pre-4',
      stage: 'pre',
      title: '出發前 24H：隊伍能力與防護裝備逐一確認',
      detail: '檢核全員是否攜帶合格兩截式雨衣褲、保暖中層、備用乾衣物及離線 GPS 航跡。',
    },
    {
      id: 'pre-5',
      stage: 'pre',
      title: '出發當日清晨：最後查核即時雷達回波與警特報',
      detail: '確認無突發海上/陸上颱風警報、大雨特報或低溫特報，做最終「出發 / 調整 / 取消」決策。',
    },
    // On-trail
    {
      id: 'trail-1',
      stage: 'trail',
      title: '行程中：每 2 小時紀錄高度計與手錶氣壓計趨勢',
      detail: '若原地休息時氣壓在 3 小時內急遽下滑超過 3 hPa，需高度警戒天氣突變。',
    },
    {
      id: 'trail-2',
      stage: 'trail',
      title: '行程中：觀察谷底雲霧上升速度與積雲垂直發育',
      detail: '注意積雲是否在上午 10:30 前已發展為雄偉積雲或塔狀積雲，提早防範午後雷陣雨。',
    },
    {
      id: 'trail-3',
      stage: 'trail',
      title: '行程中：過稜前嚴格落實防風防寒著裝檢查',
      detail: '在脫離林道遮蔽登上強風稜線前，要求隊員先穿好防風硬殼與毛帽，防範急速風寒失溫。',
    },
    {
      id: 'trail-4',
      stage: 'trail',
      title: '行程中：遇惡劣天氣嚴格執行「折返時間點」',
      detail: '一旦抵達預設停損時間且天候不穩，全隊立刻回頭，絕不以「再走半小時就到了」為藉口。',
    },
  ];

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetAll = () => {
    setChecked({});
  };

  const totalCount = items.length;
  const completedCount = Object.values(checked).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="my-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-7 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-950/70 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded border border-emerald-800/60">
              實務工具
            </span>
            <h3 className="text-base font-bold text-stone-100">
              領隊氣象判讀實務檢核表 (Leader Weather Checklist)
            </h3>
          </div>
          <p className="text-xs text-stone-400 mt-1">
            出發前與行程中隨時逐項勾選，確保無任何致命盲區被遺漏。
          </p>
        </div>

        <div className="flex items-center space-x-3 self-end sm:self-auto">
          <div className="text-right">
            <div className="text-xs text-stone-400">檢核完成度</div>
            <div className="font-mono text-base font-extrabold text-emerald-400">
              {completedCount} / {totalCount} ({progressPercent}%)
            </div>
          </div>
          <button
            type="button"
            onClick={resetAll}
            className="p-1.5 rounded-lg border border-slate-800 bg-slate-950 text-stone-400 hover:text-stone-200 hover:bg-slate-850 text-xs flex items-center space-x-1 transition-colors"
            title="清空重置"
            aria-label="清空檢核表重置"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="hidden xs:inline">重置</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden mt-4 mb-6">
        <div
          className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Checklist Sections */}
      <div className="space-y-6">
        {/* Pre-trip Items */}
        <div>
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>第一階段：出發前評估流程 (Pre-trip Verification)</span>
          </div>
          <div className="space-y-2">
            {items
              .filter((i) => i.stage === 'pre')
              .map((item) => {
                const isChecked = !!checked[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggle(item.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-start space-x-3 ${
                      isChecked
                        ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-200'
                        : 'bg-slate-950/70 border-slate-800/90 hover:bg-slate-850/80 text-stone-300'
                    }`}
                  >
                    <div className="mt-0.5 text-emerald-400 flex-shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 fill-emerald-950" aria-hidden="true" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500" aria-hidden="true" />
                      )}
                    </div>
                    <div>
                      <div
                        className={`text-sm font-bold ${
                          isChecked ? 'text-emerald-300/80 line-through' : 'text-stone-200'
                        }`}
                      >
                        {item.title}
                      </div>
                      <div className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                        {item.detail}
                      </div>
                    </div>
                  </button>
                );
              })}
          </div>
        </div>

        {/* On-trail Items */}
        <div>
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>第二階段：行程中動態循環 (On-trail Real-time Loop)</span>
          </div>
          <div className="space-y-2">
            {items
              .filter((i) => i.stage === 'trail')
              .map((item) => {
                const isChecked = !!checked[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggle(item.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-start space-x-3 ${
                      isChecked
                        ? 'bg-amber-950/40 border-amber-800/80 text-amber-200'
                        : 'bg-slate-950/70 border-slate-800/90 hover:bg-slate-850/80 text-stone-300'
                    }`}
                  >
                    <div className="mt-0.5 text-amber-400 flex-shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 fill-amber-950" aria-hidden="true" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500" aria-hidden="true" />
                      )}
                    </div>
                    <div>
                      <div
                        className={`text-sm font-bold ${
                          isChecked ? 'text-amber-300/80 line-through' : 'text-stone-200'
                        }`}
                      >
                        {item.title}
                      </div>
                      <div className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                        {item.detail}
                      </div>
                    </div>
                  </button>
                );
              })}
          </div>
        </div>
      </div>

      {/* Completion Status Note */}
      {completedCount === totalCount ? (
        <div className="mt-5 p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-800/80 text-emerald-200 flex items-center space-x-2 text-xs font-bold">
          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
          <span>恭喜！您已完成全套領隊氣象判讀核對程序，請隨時依現場實測動態保持警戒！</span>
        </div>
      ) : (
        <div className="mt-5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-stone-400 text-xs flex items-center space-x-2">
          <AlertOctagon className="w-4 h-4 text-slate-500 flex-shrink-0" aria-hidden="true" />
          <span>備註：高山環境充滿未知，領隊的成熟在於永遠保有隨時依新事證調整決策的勇氣。</span>
        </div>
      )}
    </div>
  );
};
