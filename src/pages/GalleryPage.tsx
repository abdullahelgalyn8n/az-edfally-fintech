import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, X, Play, Image as ImageIcon, ArrowLeft } from 'lucide-react';
import { PageHeader } from '../components/Layout';
import { GALLERY_ITEMS, GalleryMediaItem } from '../data/siteData';
import { filterGallery, GalleryCategoryFilter } from '../utils/catalogLogic';
import { GalleryVisualPreview } from '../components/PosVisuals';

const GALLERY_TABS: Array<{ id: GalleryCategoryFilter; label: string }> = [
  { id: 'all', label: `الكل (${GALLERY_ITEMS.length})` },
  { id: 'branches', label: 'الفروع والوكلاء' },
  { id: 'tutorials', label: 'فيديوهات إرشادية' },
  { id: 'devices', label: 'أجهزة نقاط البيع' },
];

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategoryFilter>('all');
  const [activeItem, setActiveItem] = useState<GalleryMediaItem | null>(null);

  const visibleItems = filterGallery(GALLERY_ITEMS, selectedCategory);

  return (
    <div>
      <PageHeader
        title="المعرض والفيديوهات الإرشادية"
        subtitle="استعرض صور فروعنا ووكلائنا المعتمدين وفيديوهات الشرح العملي لتثبيت وتشغيل تطبيق ادفعلي على ماكينات الـ POS."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Category Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">مكتبة الصور والشروحات المرئية</h2>
              <p className="text-sm text-slate-700 mt-1">
                اضغط على أي بطاقة لعرض خطوات الشرح الكاملة أو تفاصيل الفرع
              </p>
            </div>

            <div
              role="tablist"
              aria-label="تصنيفات المعرض"
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl w-fit"
            >
              {GALLERY_TABS.map((tab) => {
                const active = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-white text-slate-950 shadow-xs'
                        : 'text-slate-700 hover:text-slate-950'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Item Expanded View Modal/Panel */}
          {activeItem && (
            <div
              role="dialog"
              aria-label={activeItem.title}
              className="mb-10 bg-slate-900 text-white rounded-3xl p-7 sm:p-8 border border-slate-700 shadow-lg"
            >
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4 mb-5">
                <div>
                  <div className="text-xs font-bold text-sky-300 mb-1">
                    {activeItem.categoryLabel}{' '}
                    {activeItem.duration ? `· مدة الشرح: ${activeItem.duration}` : ''}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {activeItem.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  aria-label="إغلاق العرض"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
                {activeItem.description}
              </p>

              <div className="bg-slate-950/70 rounded-2xl p-5 border border-slate-800">
                <h4 className="text-sm font-extrabold text-sky-300 mb-3">
                  {activeItem.mediaType === 'video'
                    ? 'الخطوات العملية المشروحة في الفيديو:'
                    : 'أبرز تفاصيل الفرع / المعرض:'}
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-100">
                  {activeItem.stepsOrHighlights.map((step) => (
                    <li key={step} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/apps"
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2"
                >
                  <span>الانتقال لصفحة تحميل تطبيقات الماكينات</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 cursor-pointer"
                >
                  إغلاق المعاينة
                </button>
              </div>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {visibleItems.map((item) => (
              <article
                key={item.id}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-sky-600 transition-colors overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <GalleryVisualPreview item={item} />

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-slate-600 font-semibold mb-2">
                      <span className="text-sky-800 font-bold">{item.categoryLabel}</span>
                      <span className="inline-flex items-center gap-1">
                        {item.mediaType === 'video' ? (
                          <>
                            <Play className="w-3.5 h-3.5 text-amber-600" />
                            <span>فيديو تعليمي ({item.duration})</span>
                          </>
                        ) : (
                          <>
                            <ImageIcon className="w-3.5 h-3.5 text-sky-700" />
                            <span>{item.location}</span>
                          </>
                        )}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-white border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveItem(item)}
                    className="text-xs sm:text-sm font-bold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>
                      {item.mediaType === 'video' ? 'مشاهدة خطوات الشرح' : 'عرض التفاصيل الكاملة'}
                    </span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-500">ادفعلي</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
