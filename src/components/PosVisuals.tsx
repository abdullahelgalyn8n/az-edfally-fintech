import React from 'react';
import {
  Smartphone,
  Printer,
  Wifi,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  CreditCard,
  Building2,
  Play,
  MapPin,
  Cpu,
} from 'lucide-react';
import { ProductItem, NewsArticle, GalleryMediaItem } from '../data/siteData';

export const EdfallyLogoMark: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'dark' }) => {
  const isLightText = variant === 'light';
  return (
    <div className="inline-flex items-center gap-3 select-none">
      <div
        className={`relative flex items-center justify-center w-10 h-10 rounded-xl border ${
          isLightText
            ? 'bg-white/10 border-white/25 text-white'
            : 'bg-sky-700 border-sky-800 text-white shadow-sm'
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 36 36" className="w-6 h-6 fill-current">
          <path d="M6 10C6 7.79086 7.79086 6 10 6H26C28.2091 6 30 7.79086 30 10V13H6V10Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 16H30V26C30 28.2091 28.2091 30 26 30H10C7.79086 30 6 28.2091 6 26V16ZM11 21C11 20.4477 11.4477 20 12 20H18C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22H12C11.4477 22 11 21.5523 11 21ZM12 25C11.4477 25 11 25.4477 11 26C11 26.5523 11.4477 27 12 27H15C15.5523 27 16 26.5523 16 26C16 25.4477 15.5523 25 15 25H12Z"
          />
        </svg>
      </div>
      <span
        className={`text-xl font-extrabold tracking-tight font-display whitespace-nowrap ${
          isLightText ? 'text-white' : 'text-slate-900'
        }`}
      >
        ادفعلي
      </span>
    </div>
  );
};

export const ProductDeviceIllustration: React.FC<{
  visualType: ProductItem['visualType'];
  modelName: string;
  compact?: boolean;
}> = ({ visualType, modelName, compact = false }) => {
  const heightClass = compact ? 'h-44' : 'h-56';

  if (visualType === 'mobile-app') {
    return (
      <div
        className={`relative w-full ${heightClass} rounded-xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 p-4 flex items-center justify-center overflow-hidden border border-slate-800`}
      >
        <div className="w-36 bg-white rounded-2xl border-4 border-slate-800 shadow-lg p-2.5 text-right">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2">
            <span className="text-[10px] font-bold text-sky-800">ادفعلي للتجار</span>
            <Wifi className="w-3 h-3 text-emerald-600" />
          </div>
          <div className="bg-sky-50 rounded-lg p-1.5 mb-2 border border-sky-200">
            <div className="text-[9px] text-slate-600">الرصيد المتاح</div>
            <div className="text-xs font-bold text-slate-900 font-mono-nums">14,850.00 ج.م</div>
          </div>
          <div className="grid grid-cols-2 gap-1 text-[9px] font-semibold text-slate-800">
            <div className="bg-slate-100 rounded p-1 text-center">شحن رصيد</div>
            <div className="bg-slate-100 rounded p-1 text-center">فواتير نت</div>
            <div className="bg-slate-100 rounded p-1 text-center">الكهرباء</div>
            <div className="bg-emerald-50 text-emerald-900 rounded p-1 text-center">BNB 3039</div>
          </div>
        </div>
        <div className="mr-4 text-right text-white hidden sm:block">
          <div className="text-xs font-semibold text-sky-300 mb-1">روّق دماغك.. ادفعلي هتدفعلك</div>
          <div className="text-sm font-bold mb-2">{modelName}</div>
          <ul className="text-xs text-slate-200 space-y-1">
            <li>• فواتير الموبايل والإنترنت</li>
            <li>• فواتير الكهرباء والمرافق</li>
            <li>• مصروفات الدراسة والجامعات</li>
          </ul>
        </div>
      </div>
    );
  }

  if (visualType === 'printer-plugin') {
    return (
      <div
        className={`relative w-full ${heightClass} rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-4 flex items-center justify-center overflow-hidden border border-slate-800`}
      >
        <div className="flex items-center gap-4">
          <div className="w-28 bg-white rounded-xl p-3 border-2 border-slate-700 shadow-md text-center">
            <Printer className="w-8 h-8 text-sky-700 mx-auto mb-1.5" />
            <div className="text-[11px] font-bold text-slate-900">إيصال ادفعلي</div>
            <div className="text-[9px] text-slate-600 font-mono-nums mt-0.5">عملية ناجحة #98412</div>
            <div className="mt-2 border-t border-dashed border-slate-300 pt-1 text-[9px] font-semibold text-emerald-800">
              58mm Thermal Ready
            </div>
          </div>
          <div className="text-right text-white">
            <div className="text-xs text-sky-300 font-semibold">محرك الطباعة الحرارية</div>
            <div className="text-sm font-bold mt-0.5">{modelName}</div>
            <div className="text-xs text-slate-300 mt-1">دعم كامل للخطوط العربية والباركود</div>
          </div>
        </div>
      </div>
    );
  }

  if (visualType === 'api-gateway') {
    return (
      <div
        className={`relative w-full ${heightClass} rounded-xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-4 flex items-center justify-center overflow-hidden border border-slate-800`}
      >
        <div className="w-full max-w-xs bg-slate-950/90 border border-slate-700 rounded-xl p-3 text-left font-mono-nums text-xs text-emerald-300">
          <div className="flex items-center justify-between text-slate-400 text-[10px] border-b border-slate-800 pb-1.5 mb-2">
            <span>POST /api/v2/biller/pay</span>
            <span className="text-emerald-400">200 OK</span>
          </div>
          <div className="space-y-1 text-[11px]">
            <div>{`{ "biller": "BNB_DAFATERY",`}</div>
            <div>{`  "codes": [3039, 3040, 3041, 3042],`}</div>
            <div>{`  "status": "INSTANT_SETTLED" }`}</div>
          </div>
        </div>
      </div>
    );
  }

  // POS hardware terminal visual (PAX, SUNMI, Verifone, Mobiwire, UROVO)
  const accentMap: Record<string, { header: string; screenBg: string; label: string }> = {
    pax: { header: 'PAX SmartPOS', screenBg: 'bg-sky-50', label: 'A920 / A920Pro / A930' },
    sunmi: { header: 'SUNMI OS', screenBg: 'bg-amber-50', label: 'P2 & V2 Pro' },
    verifone: { header: 'VERIFONE X990', screenBg: 'bg-indigo-50', label: 'PCI5 & PCI6 Security' },
    mobiwire: { header: 'MobiWire POS', screenBg: 'bg-emerald-50', label: 'MobiPrint v3 & v4' },
    urovo: { header: 'UROVO POS', screenBg: 'bg-slate-100', label: 'i9000S / i9100 Rugged' },
  };

  const info = accentMap[visualType] || accentMap.pax;

  return (
    <div
      className={`relative w-full ${heightClass} rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 p-4 flex items-center justify-center overflow-hidden border border-slate-800`}
    >
      <div className="flex items-center gap-4">
        {/* POS Terminal Body */}
        <div className="w-32 bg-slate-950 rounded-2xl p-2 border-2 border-slate-600 shadow-xl">
          {/* Paper receipt slot top */}
          <div className="w-20 h-3 bg-white mx-auto -mt-3 mb-1.5 rounded-t border border-slate-300 flex items-center justify-center">
            <span className="text-[7px] font-bold text-slate-700 font-mono-nums">EDFALLY POS</span>
          </div>
          <div className="text-[8px] text-center font-mono-nums text-slate-300 mb-1 tracking-wider">
            {info.header}
          </div>
          {/* Screen */}
          <div className={`${info.screenBg} rounded-lg p-2 text-right border border-slate-300`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-extrabold text-sky-900">ادفعلي</span>
              <span className="text-[8px] font-bold text-emerald-800">متصل 4G</span>
            </div>
            <div className="bg-white rounded p-1 border border-slate-200 mb-1">
              <div className="text-[8px] text-slate-600">جاهز للتحصيل والطباعة</div>
              <div className="text-[9px] font-bold text-slate-900 font-mono-nums">{info.label}</div>
            </div>
            <div className="grid grid-cols-3 gap-0.5 text-center font-mono-nums text-[8px] font-bold text-slate-800">
              <span className="bg-white rounded py-0.5 border border-slate-200">1</span>
              <span className="bg-white rounded py-0.5 border border-slate-200">2</span>
              <span className="bg-white rounded py-0.5 border border-slate-200">3</span>
            </div>
          </div>
          {/* Bottom NFC indicator */}
          <div className="mt-1.5 flex items-center justify-between px-1 text-[8px] text-slate-400 font-mono-nums">
            <span>NFC</span>
            <span className="text-emerald-400">PRINT OK</span>
          </div>
        </div>

        {/* Device Key Callouts */}
        <div className="text-right text-white hidden sm:block max-w-[180px]">
          <div className="text-xs font-semibold text-sky-300 mb-0.5">ماكينة تحصيل معتمدة</div>
          <div className="text-sm font-bold text-white leading-snug mb-2">{modelName}</div>
          <div className="space-y-1 text-xs text-slate-200">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>طباعة فورية للإيصالات</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>تحديث تلقائي للخدمات</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewsVisualBanner: React.FC<{
  theme: NewsArticle['visualTheme'];
  categoryLabel: string;
}> = ({ theme, categoryLabel }) => {
  return (
    <div className="relative h-48 w-full bg-gradient-to-br from-[#0A2540] via-[#0B3B6E] to-[#0369A1] p-5 flex flex-col justify-between overflow-hidden border-b border-slate-200">
      <div className="flex items-center justify-between z-10">
        <span className="text-xs font-bold text-sky-200 tracking-wide">{categoryLabel}</span>
        <span className="text-xs font-mono-nums text-white/80">EDFALLY NEWS</span>
      </div>

      <div className="my-auto z-10 flex items-center gap-4">
        {theme === 'bnb-dafatery' && (
          <div className="flex items-center gap-3 w-full">
            <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-emerald-300 font-semibold">ربط وتعاقد فوري</div>
              <div className="text-base font-extrabold text-white font-mono-nums">
                BNB Dafatery • 3039 / 3040 / 3041 / 3042
              </div>
            </div>
          </div>
        )}

        {theme === 'edfally-brand' && (
          <div className="flex items-center gap-3 w-full">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-extrabold text-sm shrink-0">
              POS
            </div>
            <div>
              <div className="text-xs text-amber-300 font-semibold">حياتك أسهل مع ادفعلي</div>
              <div className="text-base font-extrabold text-white">تحديث تطبيقات الـ POS والموبايل</div>
            </div>
          </div>
        )}

        {theme === 'card-terminal' && (
          <div className="flex items-center gap-3 w-full">
            <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-sky-200 font-semibold">التحول الرقمي والشمول المالي</div>
              <div className="text-base font-extrabold text-white">منظومة الدفع والتحصيل الإلكتروني</div>
            </div>
          </div>
        )}

        {theme === 'finance-press' && (
          <div className="flex items-center gap-3 w-full">
            <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-sky-200 font-semibold">استثمارات قطاع المدفوعات</div>
              <div className="text-base font-extrabold text-white">نمو التكنولوجيا المالية في مصر</div>
            </div>
          </div>
        )}

        {theme === 'mobile-wallet' && (
          <div className="flex items-center gap-3 w-full">
            <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white shrink-0">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-sky-200 font-semibold">دليل التاجر والمواطن</div>
              <div className="text-base font-extrabold text-white">أهمية أنظمة الدفع الإلكتروني الحديثة</div>
            </div>
          </div>
        )}

        {theme === 'pos-keypad' && (
          <div className="flex items-center gap-3 w-full">
            <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white shrink-0">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-sky-200 font-semibold">البطاقات البنكية ومسبقة الدفع</div>
              <div className="text-base font-extrabold text-white">أنواع بطاقات الدفع الإلكتروني ومزاياها</div>
            </div>
          </div>
        )}
      </div>

      <div className="text-[11px] text-sky-100/90 z-10 flex items-center justify-between border-t border-white/15 pt-2">
        <span>شركة ادفعلي للمدفوعات الإلكترونية</span>
        <span>ببساطة أسهل وأسرع</span>
      </div>
    </div>
  );
};

export const GalleryVisualPreview: React.FC<{ item: GalleryMediaItem }> = ({ item }) => {
  return (
    <div className="relative h-52 w-full bg-gradient-to-br from-slate-900 via-[#0B3B6E] to-slate-900 p-5 flex flex-col justify-between text-white overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-sky-200">
          {item.categoryLabel} {item.duration ? `· ${item.duration}` : ''}
        </span>
        {item.mediaType === 'video' ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300">
            <Play className="w-3.5 h-3.5 fill-current" />
            فيديو إرشادي
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs text-slate-200">
            <MapPin className="w-3.5 h-3.5 text-sky-300" />
            {item.location || 'مصر'}
          </span>
        )}
      </div>

      <div className="my-auto flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
          {item.mediaType === 'video' ? (
            <Play className="w-7 h-7 text-amber-300 fill-current" />
          ) : (
            <Cpu className="w-7 h-7 text-sky-300" />
          )}
        </div>
        <div>
          <div className="text-base font-extrabold text-white leading-snug">{item.title}</div>
          <div className="text-xs text-sky-200 mt-1">{item.subtitle}</div>
        </div>
      </div>

      <div className="text-xs text-slate-300 border-t border-white/15 pt-2 flex items-center justify-between">
        <span>ادفعلي | ببساطة أسهل وأسرع</span>
        <span className="text-sky-300 font-semibold">اضغط للاستعراض الكامل ←</span>
      </div>
    </div>
  );
};
