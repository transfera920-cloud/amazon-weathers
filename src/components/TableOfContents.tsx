import React from 'react';
import { ListOrdered, ChevronRight, BookOpen } from 'lucide-react';

interface TOCProps {
  activeSection: string;
}

export const TableOfContents: React.FC<TOCProps> = ({ activeSection }) => {
  const sections = [
    {
      id: 'sec-01',
      number: '01',
      title: '為什麼登山需要氣象判讀',
      desc: '微氣候特性、暴露風險與氣象判讀的核心價值',
      diagram: '圖 4-1：山岳天氣重要性',
    },
    {
      id: 'sec-02',
      number: '02',
      title: '認識山岳氣象特性',
      desc: '高度遞減率、時間日照循環與迎風背風地形效應',
      diagram: '圖 4-2：三大變數 ＆ 圖 4-3：高度溫度',
    },
    {
      id: 'sec-03',
      number: '03',
      title: '登山前如何取得氣象資訊',
      desc: '五大資料來源、數值模式比對與公部門專業預報',
      diagram: '圖 4-4：五種資訊來源矩陣',
    },
    {
      id: 'sec-04',
      number: '04',
      title: '基礎氣象判讀能力',
      desc: '雲態演變、風向突變、手錶氣壓計與體感驗證',
      diagram: '圖 4-5：現場四大天氣指標',
    },
    {
      id: 'sec-05',
      number: '05',
      title: '高山常見危險天氣',
      desc: '午後雷雨、強風風寒、低溫結冰與濃霧空間迷向',
      diagram: '圖 4-6：危險天氣機制與應對',
    },
    {
      id: 'sec-06',
      number: '06',
      title: '天氣與行程決策',
      desc: '出發、調整、撤退、取消四維決策樹與停損點',
      diagram: '圖 4-7：決策四象限模型',
    },
    {
      id: 'sec-07',
      number: '07',
      title: '常見氣象判讀錯誤',
      desc: '破除降雨機率、平地溫度誤植與手機圖示盲信',
      diagram: '圖 4-8：五大認知迷思防範',
    },
    {
      id: 'sec-08',
      number: '08',
      title: '登山氣象工具介紹',
      desc: '中央氣象署、Windy、雷達回波與離線氣壓計實務',
      diagram: '工具功能矩陣與適用情境',
    },
    {
      id: 'sec-09',
      number: '09',
      title: '領隊氣象判讀流程',
      desc: '行前五階收斂與行程中動態五步回饋閉環（最核心內容）',
      diagram: '圖 4-9：領隊雙軌決策循環',
    },
  ];

  return (
    <section
      id="table-of-contents"
      className="py-10 bg-white border-b border-stone-200"
      aria-label="第四章章節目錄"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
              <ListOrdered className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900">
                本章九大單元目錄
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                點擊可直接快速平滑捲動至對應章節段落
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-block text-xs font-medium px-2.5 py-1 rounded bg-stone-100 text-stone-600 border border-stone-200">
            共 9 節 · 9 個 Native SVG 圖解
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={`p-4 rounded-xl border transition-all text-left group flex flex-col justify-between ${
                activeSection === sec.id
                  ? 'bg-emerald-50/80 border-emerald-400 shadow-sm'
                  : 'bg-stone-50/70 border-stone-200/80 hover:bg-white hover:border-emerald-300 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                    SECTION {sec.number}
                  </span>
                  {sec.number === '09' && (
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded border border-amber-200">
                      本章核心
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                  {sec.title}
                </h3>
                <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                  {sec.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500">
                <span className="truncate pr-1">{sec.diagram}</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-transform flex-shrink-0" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
