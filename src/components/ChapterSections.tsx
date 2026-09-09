import React from 'react';
import {
  ImportanceDiagram,
} from './diagrams/ImportanceDiagram';
import {
  AltitudeTopographyTimeDiagram,
} from './diagrams/AltitudeTopographyTimeDiagram';
import {
  LapseRateDiagram,
} from './diagrams/LapseRateDiagram';
import {
  WeatherSourcesDiagram,
} from './diagrams/WeatherSourcesDiagram';
import {
  FieldObservationDiagram,
} from './diagrams/FieldObservationDiagram';
import {
  HazardousWeatherDiagram,
} from './diagrams/HazardousWeatherDiagram';
import {
  DecisionMatrixDiagram,
} from './diagrams/DecisionMatrixDiagram';
import {
  CommonMistakesDiagram,
} from './diagrams/CommonMistakesDiagram';
import {
  LeaderCycleDiagram,
} from './diagrams/LeaderCycleDiagram';
import { InteractiveTempCalculator } from './InteractiveTempCalculator';
import { LeaderChecklist } from './LeaderChecklist';
import {
  Compass,
  CloudRain,
  Wind,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Wrench,
  Navigation,
  ShieldCheck,
  Thermometer,
  Layers,
  Radio,
  Eye,
  Info,
} from 'lucide-react';

export const ChapterSections: React.FC = () => {
  return (
    <div className="space-y-16 max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* ======================================================== */}
      {/* SECTION 01 */}
      {/* ======================================================== */}
      <section id="sec-01" className="scroll-mt-20" aria-labelledby="heading-sec-01">
        <div className="flex items-center space-x-2 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider mb-2">
          <span>SECTION 01</span>
          <span>·</span>
          <span>登山安全基石</span>
        </div>
        <h2 id="heading-sec-01" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
          01 為什麼登山需要氣象判讀
        </h2>
        <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4 text-base">
          <p>
            在平地生活中，天氣預報往往只決定我們出門是否攜帶雨傘；但在高山環境中，氣象條件直接關係到人體的生理極限與隊伍的生存界線。台灣高山海拔劇升至 3,000 公尺以上，中央山脈如同大氣巨牆，阻擋來自海洋與季風的水氣，造就了極端複雜且劇烈變化的微氣候（Microclimate）。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose">
            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center space-x-2 text-sky-800 font-bold text-sm mb-1.5">
                <CloudRain className="w-4 h-4" aria-hidden="true" />
                <span>環境高暴露度</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                高山多數稜線缺乏天然遮蔽，一旦遭遇強風冰雨，人體熱量會以數倍速度流失，極短時間內即可誘發致命失溫。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm mb-1.5">
                <Wind className="w-4 h-4" aria-hidden="true" />
                <span>撤退距離極度受限</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                與平地避雨不同，高山撤退往往需要數小時甚至整天的徒步行進，無法「隨時跳上車離開」。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center space-x-2 text-amber-800 font-bold text-sm mb-1.5">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                <span>微地形劇烈放大</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                即便山腳預報晴朗，山區局部受熱產生的熱對流，常在 1 至 2 小時內醞釀出傾盆暴雨與強烈雷擊。
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
            氣象判讀的核心價值：不是算命，而是管理風險
          </h3>
          <p>
            許多初學者常有一種誤解，以為學習氣象判讀是為了「準確預測每小時的晴雨」。然而大氣科學在複雜高山地形中本就具有混沌性，**氣象判讀的核心不是預測，而是判斷**。
          </p>
          <div className="p-4 rounded-xl bg-emerald-50 border-l-4 border-emerald-600 text-emerald-950 my-4 text-sm font-medium">
            <span className="font-bold">AMNA 教育理念：</span>「預報是資訊，現場是證據，判斷才是能力。」優秀的登山者從不賭天氣，而是依據手中的資訊與眼前的證據，替自己與隊友保留充足的時間與撤退餘裕。
          </div>
        </div>

        {/* Native SVG Diagram 1 */}
        <ImportanceDiagram />
      </section>

      {/* ======================================================== */}
      {/* SECTION 02 */}
      {/* ======================================================== */}
      <section id="sec-02" className="scroll-mt-20 pt-8 border-t border-stone-200" aria-labelledby="heading-sec-02">
        <div className="flex items-center space-x-2 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider mb-2">
          <span>SECTION 02</span>
          <span>·</span>
          <span>物理機制</span>
        </div>
        <h2 id="heading-sec-02" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
          02 認識山岳氣象特性
        </h2>
        <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4 text-base">
          <p>
            走入山林前，必須先理解山岳大氣運作的基本物理法則。山岳氣象是由三大變數交織而成的動態系統：<strong>高度（Altitude）</strong>、<strong>時間（Time）</strong> 與 <strong>地形（Topography）</strong>。
          </p>

          <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
            一、高度與環境遞減率（Lapse Rate）
          </h3>
          <p>
            在大氣對流層中，空氣越往高處越稀薄，氣壓下降導致絕熱膨脹冷卻。在大氣標準模型中，平均環境遞減率約為：
          </p>
          <div className="inline-block px-4 py-2 bg-stone-100 rounded-lg font-mono text-sm font-bold text-emerald-900 border border-stone-300 my-2">
            平均環境垂直遞減率：約 6.5°C / 1000m（每上升 1000 公尺氣溫約下降 6.5°C）
          </div>
          <p className="text-sm text-stone-600">
            <strong>重要概念澄清：</strong>「實際氣溫變化會受到當日氣象條件影響，並非固定值。」當空氣極為乾燥時，乾絕熱遞減率可接近 9.8°C/km；而水氣飽和凝結釋放潛熱時，濕絕熱遞減率可能僅約 5°C/km。此外，夜間谷地若發生輻射冷卻，更可能出現「逆溫現象」（山頂比山谷溫暖）。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4 not-prose">
            <div className="p-3 bg-white border border-stone-200 rounded-xl text-center">
              <div className="text-xs text-stone-500">海平面基準</div>
              <div className="text-lg font-bold font-mono text-stone-800 mt-0.5">0m ≈ 25°C</div>
              <div className="text-[11px] text-stone-400 mt-1">平地日常常態</div>
            </div>
            <div className="p-3 bg-white border border-stone-200 rounded-xl text-center">
              <div className="text-xs text-stone-500">中海拔林道</div>
              <div className="text-lg font-bold font-mono text-emerald-700 mt-0.5">1500m ≈ 15°C</div>
              <div className="text-[11px] text-stone-400 mt-1">舒適但水氣易凝結</div>
            </div>
            <div className="p-3 bg-white border border-stone-200 rounded-xl text-center">
              <div className="text-xs text-stone-500">百岳基線</div>
              <div className="text-lg font-bold font-mono text-sky-700 mt-0.5">3000m ≈ 5°C</div>
              <div className="text-[11px] text-stone-400 mt-1">需嚴格保暖裝備</div>
            </div>
            <div className="p-3 bg-white border border-stone-200 rounded-xl text-center">
              <div className="text-xs text-stone-500">最高峰稜線</div>
              <div className="text-lg font-bold font-mono text-indigo-700 mt-0.5">3800m ≈ 0°C</div>
              <div className="text-[11px] text-stone-400 mt-1">接近冰點結霜風險</div>
            </div>
          </div>
          <p className="text-xs text-amber-800 font-semibold bg-amber-50 p-2.5 rounded border border-amber-200">
            ※ 標示說明：上述數據為概念示意，實際氣溫依當日氣象條件變化。
          </p>
        </div>

        {/* Native SVG Diagram 2 & 3 */}
        <AltitudeTopographyTimeDiagram />
        <LapseRateDiagram />

        {/* Interactive Calculator */}
        <InteractiveTempCalculator />
      </section>

      {/* ======================================================== */}
      {/* SECTION 03 */}
      {/* ======================================================== */}
      <section id="sec-03" className="scroll-mt-20 pt-8 border-t border-stone-200" aria-labelledby="heading-sec-03">
        <div className="flex items-center space-x-2 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider mb-2">
          <span>SECTION 03</span>
          <span>·</span>
          <span>情資蒐集</span>
        </div>
        <h2 id="heading-sec-03" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
          03 登山前如何取得氣象資訊
        </h2>
        <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4 text-base">
          <p>
            合格的登山者在踏出家門之前，就已經透過多維度的氣象資料建立好大局觀。然而許多山友常犯的錯誤，是只看單一手機 App 的簡易圖示（如「週六：晴」）。
          </p>
          <div className="p-4 rounded-xl bg-sky-50 border-l-4 border-sky-600 text-sky-950 my-4 text-sm font-medium">
            <span className="font-bold">情報金律：</span>「不同資料回答不同問題；交叉比對 ＞ 單一資訊。」
          </div>

          <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
            掌握五大氣象資訊的解答維度
          </h3>
          <div className="space-y-3 not-prose my-4">
            <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-stone-900 text-sm">1. 中央氣象署 (CWA) 地面天氣圖與警特報</span>
                <p className="text-xs text-stone-600 mt-0.5">回答：宏觀大氣系統（高壓、冷鋒、滯留鋒、颱風路徑）與法定豪大雨警報。</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-sky-100 text-sky-800 rounded font-mono self-start sm:self-auto flex-shrink-0">
                尺度：1~7天
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-stone-900 text-sm">2. 數值預報模型 (ECMWF 歐洲中尺度 / GFS 美國模式)</span>
                <p className="text-xs text-stone-600 mt-0.5">回答：目標山區 850hPa/700hPa 高空風速、相對濕度垂直剖面與降水量分佈。</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded font-mono self-start sm:self-auto flex-shrink-0">
                尺度：24~120小時
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-stone-900 text-sm">3. 氣象衛星雲圖 (Visible / IR / Water Vapor)</span>
                <p className="text-xs text-stone-600 mt-0.5">回答：雲系目前真實覆蓋邊界、高空卷雲推移與大氣水氣傳輸路徑。</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-amber-100 text-amber-800 rounded font-mono self-start sm:self-auto flex-shrink-0">
                尺度：過去1~6小時
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-stone-900 text-sm">4. 雷達回波圖 (Radar Reflectivity)</span>
                <p className="text-xs text-stone-600 mt-0.5">回答：哪裡正在降水？雨胞強度多少 dBZ？是否正在往登山路線快速逼近？</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-rose-100 text-rose-800 rounded font-mono self-start sm:self-auto flex-shrink-0">
                尺度：即時~未來1小時
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-stone-900 text-sm">5. 山區自動氣象站實測紀錄</span>
                <p className="text-xs text-stone-600 mt-0.5">回答：合歡山、玉山等鄰近測站現在幾度？過去 1 小時陣風幾級？是否有降水？</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-stone-100 text-stone-800 rounded font-mono self-start sm:self-auto flex-shrink-0">
                尺度：現地實況
              </span>
            </div>
          </div>
        </div>

        {/* Native SVG Diagram 4 */}
        <WeatherSourcesDiagram />
      </section>

      {/* ======================================================== */}
      {/* SECTION 04 */}
      {/* ======================================================== */}
      <section id="sec-04" className="scroll-mt-20 pt-8 border-t border-stone-200" aria-labelledby="heading-sec-04">
        <div className="flex items-center space-x-2 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider mb-2">
          <span>SECTION 04</span>
          <span>·</span>
          <span>實地觀測</span>
        </div>
        <h2 id="heading-sec-04" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
          04 基礎氣象判讀能力
        </h2>
        <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4 text-base">
          <p>
            進入沒有行動網路覆蓋的深山之後，登山者最可靠的氣象雷達，就是「自己的眼睛、身體感知與手錶氣壓計」。
          </p>

          <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
            打破絕對化認知：觀察大氣演化的「趨勢」
          </h3>
          <p>
            在山區切忌做出武斷且絕對化的推論：
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-stone-600">
            <li><strong>禁止誤判「看到雲就一定下雨」：</strong>高山常有層積雲或碎積雲，關鍵在於雲層是否持續快速向垂直方向向上爆發發展成「塔狀積雲」。</li>
            <li><strong>禁止誤判「風大就一定會下雨」：</strong>風大可能是越過鞍部的地形過隙風或乾冷氣團平流，需搭配氣壓變化交叉解讀。</li>
            <li><strong>禁止誤判「下午一定會下雨」：</strong>雖然夏季有熱對流週期，但若環境風場強烈且水氣不足，亦可能整天雲霧開散。</li>
          </ul>

          <div className="p-4 rounded-xl bg-stone-100 border border-stone-300 text-stone-800 my-4 text-sm font-semibold">
            正確思維架構：資料（行前模型） → 趨勢（大氣動態） → 現場（實地驗證） → 風險（隊伍暴露） → 判斷（行動方案）
          </div>
        </div>

        {/* Native SVG Diagram 5 */}
        <FieldObservationDiagram />
      </section>

      {/* ======================================================== */}
      {/* SECTION 05 */}
      {/* ======================================================== */}
      <section id="sec-05" className="scroll-mt-20 pt-8 border-t border-stone-200" aria-labelledby="heading-sec-05">
        <div className="flex items-center space-x-2 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider mb-2">
          <span>SECTION 05</span>
          <span>·</span>
          <span>高山環境風險</span>
        </div>
        <h2 id="heading-sec-05" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
          05 高山常見危險天氣
        </h2>
        <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4 text-base">
          <p>
            在山岳教育中，我們客觀稱之為<strong>「高山常見危險天氣」</strong>（不採用煽情或絕對化的「四大殺手」稱號）。這些天氣是大自然客觀的物理規律，本身不必然造成災難；真正的風險在於隊伍裝備未到位、忽視現場徵兆與未能及時做出撤退決策。
          </p>

          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-stone-900 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                  <span>1. 午後雷雨 (Convective Thunderstorms)</span>
                </span>
                <span className="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded font-medium">夏秋典型</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                成因：日光強烈加溫谷底，濕暖空氣沿坡面急速抬升，水氣在冷凝高度凝結成積雨雲。<br />
                實務防範：規劃行程時，要求在上午 11:30 前完成高風險斷崖或裸露瘦稜行進；雷擊時迅速蹲低遠離金屬杖與孤立大樹。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-stone-900 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                  <span>2. 強風 (Gales & Ridge Winds)</span>
                </span>
                <span className="text-xs px-2 py-0.5 bg-teal-50 text-teal-700 rounded font-medium">稜線鞍部高發</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                成因：強大氣壓梯度風，或高空噴射氣流下壓，遭遇山脈阻擋在鞍部收窄產生狹管加速（文丘里效應）。<br />
                實務防範：風速達 8~10 m/s 以上時體感溫劇降；上稜線前務必束緊風雨衣下擺與頭套，防止冷風灌入帶走胸腹核心熱量。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-stone-900 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                  <span>3. 低溫／寒流 (Extreme Cold & Frontal Surges)</span>
                </span>
                <span className="text-xs px-2 py-0.5 bg-sky-50 text-sky-700 rounded font-medium">秋冬與鋒面過境</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                成因：強烈大陸冷氣團伴隨水氣南下，高山環境氣溫驟降至零度以下，步道與岩面形成薄冰（黑冰）。<br />
                實務防範：行進嚴防出汗浸濕底層衣物（內濕外冷）；持續定時補充高碳水化合物與保溫瓶熱水，維持核心體溫。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-stone-900 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <span>4. 濃霧 (Dense Mountain Fog & Whiteout)</span>
                </span>
                <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-medium">常態高頻</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                成因：雲底高度下降或水氣層飽和，視野壓縮至數公尺內，地表參照物消失。<br />
                實務防範：全隊強制緊縮隊形，嚴禁隊員落單超前或落後；在任何路徑轉折點一律停等並以離線離線航跡確認方位。
              </p>
            </div>
          </div>
        </div>

        {/* Native SVG Diagram 6 */}
        <HazardousWeatherDiagram />
      </section>

      {/* ======================================================== */}
      {/* SECTION 06 */}
      {/* ======================================================== */}
      <section id="sec-06" className="scroll-mt-20 pt-8 border-t border-stone-200" aria-labelledby="heading-sec-06">
        <div className="flex items-center space-x-2 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider mb-2">
          <span>SECTION 06</span>
          <span>·</span>
          <span>動態管理</span>
        </div>
        <h2 id="heading-sec-06" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
          06 天氣與行程決策
        </h2>
        <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4 text-base">
          <p>
            氣象判讀的最終目的，只有一個：<strong>做出正確且安全的行動決策</strong>。
          </p>
          <div className="p-4 rounded-xl bg-emerald-900 text-white font-medium my-4 text-sm leading-relaxed">
            <span className="font-bold text-emerald-300">「不是預測，而是提前做決策。」</span><br />
            氣象預報永遠包含不確定性，優秀的隊伍會在出發前就針對不同天氣劇本擬定好四大行動預案：<strong>出發（Go）</strong>、<strong>調整（Adjust）</strong>、<strong>撤退（Turn Around）</strong>、<strong>取消（Cancel）</strong>。
          </div>

          <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
            四維行動策略與停損界線
          </h3>
          <p>
            每一條登山路線都必須在出發前明訂<strong>「折返時間點 (Turn-around Time)」</strong>。例如：「無論走到哪裡，中午 12:00 一到若未抵達山頂，或雲霧積雨雲已遮蔽稜線，全隊立刻原路下撤。」
          </p>
          <p className="font-bold text-stone-900">
            記住登山界最崇高的座右銘：<span className="text-emerald-700">安全撤退，也是成功登山。</span>
          </p>
        </div>

        {/* Native SVG Diagram 7 */}
        <DecisionMatrixDiagram />
      </section>

      {/* ======================================================== */}
      {/* SECTION 07 */}
      {/* ======================================================== */}
      <section id="sec-07" className="scroll-mt-20 pt-8 border-t border-stone-200" aria-labelledby="heading-sec-07">
        <div className="flex items-center space-x-2 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider mb-2">
          <span>SECTION 07</span>
          <span>·</span>
          <span>破除迷思</span>
        </div>
        <h2 id="heading-sec-07" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
          07 常見氣象判讀錯誤
        </h2>
        <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4 text-base">
          <p>
            山難檢討報告中，因誤解天氣資訊而導致判斷失誤的案例屢見不鮮。以下是登山者最容易落入的五大認知盲點：
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-stone-700">
            <li>
              <strong>迷思一：「降雨機率高就一定不能爬？降雨機率 30% 代表很安全不用帶雨衣？」</strong><br />
              <span className="text-stone-600">
                降雨機率（Probability of Precipitation, PoP）指的是該預報區域內出現大於 0.1mm 降雨的綜合統計機率。即使只有 30%，在山區局地熱對流加持下，降雨一旦發生在稜線上就是 100% 的暴露。高山雨衣褲是標準求生裝備，不因預報機率高低而減省。
              </span>
            </li>
            <li>
              <strong>迷思二：「用山腳市區的氣溫推估山頂，只穿薄外套？」</strong><br />
              <span className="text-stone-600">
                忽略了垂直遞減率（平均 6.5°C / 1000m）與稜線風寒效應。台中市區 28°C，合歡山頂可能只有 8°C，若加上 10m/s 強風，體感溫度直接逼近 0°C。
              </span>
            </li>
            <li>
              <strong>迷思三：「手機內建天氣 App 顯示整排太陽，代表整天晴空萬里？」</strong><br />
              <span className="text-stone-600">
                多數通用手機 App 採用平地測站粗糙內插計算，完全無法解析高山地形的午後局地熱對流，常出現「App 顯示大太陽、山上卻下著冰雹暴雨」的強烈反差。
              </span>
            </li>
            <li>
              <strong>迷思四：「早上出發萬里無雲，今天行程絕對穩了？」</strong><br />
              <span className="text-stone-600">
                夏秋季清晨因夜間輻射冷卻，空氣層通常極為穩定；但隨著日光加溫，上午 10 點後對流即會快速啟動，不能以清晨好天氣推估午後情況。
              </span>
            </li>
            <li>
              <strong>迷思五：「App 可以準確預測山區天氣？或者預報不準就乾脆不看？」</strong><br />
              <span className="text-stone-600">
                這兩種極端想法都忽視了大氣科學的本質。預報提供的是宏觀穩定度與水氣輸送趨勢，為現場觀察提供參考座標，兩者必須相輔相成。
              </span>
            </li>
          </ul>
        </div>

        {/* Native SVG Diagram 8 */}
        <CommonMistakesDiagram />
      </section>

      {/* ======================================================== */}
      {/* SECTION 08 */}
      {/* ======================================================== */}
      <section id="sec-08" className="scroll-mt-20 pt-8 border-t border-stone-200" aria-labelledby="heading-sec-08">
        <div className="flex items-center space-x-2 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider mb-2">
          <span>SECTION 08</span>
          <span>·</span>
          <span>裝備與平台</span>
        </div>
        <h2 id="heading-sec-08" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
          08 登山氣象工具介紹
        </h2>
        <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4 text-base">
          <p>
            現代登山者擁有豐富的數位與硬體工具，但每一種工具都有其適用的極限與盲區。謹記：<strong>沒有任何單一工具能百分之百預知山區瞬息萬變的天氣</strong>。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm mb-2">
                <Radio className="w-4 h-4" aria-hidden="true" />
                <span>中央氣象署 (CWA) 登山氣象專區</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                優勢：整合國內百岳山頭數值預報、日落時間、體感溫度、高山即時自動觀測站實測數據與各類陸上強風/大雨警特報，是台灣最具權威的本土資料庫。
              </p>
              <div className="text-[11px] text-stone-500 bg-stone-50 p-2 rounded">
                最佳時機：行前 D-7 至 D-1 逐日檢視大趨勢與特報發布。
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <div className="flex items-center space-x-2 text-sky-800 font-bold text-sm mb-2">
                <Wind className="w-4 h-4" aria-hidden="true" />
                <span>Windy 視覺化氣象平台</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                優勢：可即時切換歐洲中期預報中心（ECMWF）、美國全球預報（GFS）、德國氣象局（ICON）等多種數值模式；能切換不同大氣高度（地面、850hPa、700hPa）查看風場與湧浪。
              </p>
              <div className="text-[11px] text-stone-500 bg-stone-50 p-2 rounded">
                最佳時機：行前比對不同數值模式對降雨時段與風速的收斂程度。
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <div className="flex items-center space-x-2 text-rose-800 font-bold text-sm mb-2">
                <Layers className="w-4 h-4" aria-hidden="true" />
                <span>雷達回波圖與即時降水即時追蹤</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                優勢：透過微波反射粒子呈現真實降水位置與強度（dBZ）。回波強度超過 40~45 dBZ 時，常伴隨傾盆暴雨與強烈雷電。
              </p>
              <div className="text-[11px] text-stone-500 bg-stone-50 p-2 rounded">
                最佳時機：登山口出發前、或行經有手機訊號山頭時進行即時（Nowcasting）查核。
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200">
              <div className="flex items-center space-x-2 text-stone-800 font-bold text-sm mb-2">
                <Thermometer className="w-4 h-4" aria-hidden="true" />
                <span>登山專用手錶氣壓計／高度計</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                優勢：完全脫離網路限制。高山原地休息時，若高度計讀數莫名上升，代表環境氣壓正在驟降，大氣結構極可能正急遽惡化中。
              </p>
              <div className="text-[11px] text-stone-500 bg-stone-50 p-2 rounded">
                最佳時機：高山行進間與營地就寢前後定期校正與判讀氣壓走勢。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 09 */}
      {/* ======================================================== */}
      <section id="sec-09" className="scroll-mt-20 pt-8 border-t border-stone-200" aria-labelledby="heading-sec-09">
        <div className="flex items-center space-x-2 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider mb-2">
          <span>SECTION 09</span>
          <span>·</span>
          <span>本章核心精華</span>
        </div>
        <h2 id="heading-sec-09" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
          09 領隊氣象判讀流程
        </h2>
        <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4 text-base">
          <p className="text-lg font-medium text-stone-900">
            第九章是整篇教材最核心的實務篇章。任何氣象理論，最終都必須轉化為領隊在行前與現場的具體作業程序。
          </p>

          <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">
            階段一：出發前五階段風險收斂流程 (Pre-trip Workflow)
          </h3>
          <p>
            出發前的決策是一層層將不確定性篩除的過程：
          </p>
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 font-medium text-sm text-stone-800 my-2 space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold">1</span>
              <span><strong>氣象資料蒐集</strong>：提早 5 天開始關注 CWA 與數值模型。</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold">2</span>
              <span><strong>天氣趨勢分析</strong>：確認是高壓穩定型、鋒面推移型、或午後對流型。</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold">3</span>
              <span><strong>路線風險對照</strong>：盤點該路線的暴露斷崖、過溪點與風口鞍部。</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold">4</span>
              <span><strong>隊伍能力評估</strong>：衡量隊員體力、雨具完備度與負重行進經驗。</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold">5</span>
              <span><strong>出發／調整／取消</strong>：做出果斷決策，並定好現場折返停損時間。</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-stone-900 mt-8 mb-2">
            階段二：行程中現地動態循環閉環 (On-trail Dynamic Loop)
          </h3>
          <p>
            到了山上，靜態的預報結束，動態的考驗開始。領隊必須啟動不間斷的觀察循環：
          </p>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 font-medium text-sm text-amber-950 my-2 space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold">A</span>
              <span><strong>觀察現場</strong>：持續監看手錶氣壓計、雲霧發展垂直速度與風向變化。</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold">B</span>
              <span><strong>比較預報</strong>：天氣演化是否比預報快？下雨是否提前發生？</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold">C</span>
              <span><strong>重新評估</strong>：此時通過前方地形是否有被雷擊或失溫風險？隊友狀況如何？</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold">D</span>
              <span><strong>調整決策</strong>：加穿雨衣褲？原路折返？或者在安全營地就地避難？</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold">E</span>
              <span><strong>持續循環</strong>：每隔 1~2 小時重新覆核，絕不死守舊印象。</span>
            </div>
          </div>
        </div>

        {/* Native SVG Diagram 9 */}
        <LeaderCycleDiagram />

        {/* Leader Practical Checklist Tool */}
        <LeaderChecklist />
      </section>
    </div>
  );
};
