import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Calendar,
  ArrowLeft,
  ArrowRight,
  Search,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { PageHeader } from '../components/Layout';
import { NEWS_ARTICLES } from '../data/siteData';
import { filterNews, getNewsBySlug, NewsCategoryFilter } from '../utils/catalogLogic';
import { NewsVisualBanner } from '../components/PosVisuals';

const NEWS_TABS: Array<{ id: NewsCategoryFilter; label: string }> = [
  { id: 'all', label: `الكل (${NEWS_ARTICLES.length})` },
  { id: 'fintech', label: 'أخبار التكنولوجيا المالية (4)' },
  { id: 'announcements', label: 'إعلانات ادفعلي (1)' },
  { id: 'contracts', label: 'تعاقدات جديدة (1)' },
];

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const visibleArticles = filterNews(NEWS_ARTICLES, selectedCategory, searchQuery);

  return (
    <div>
      <PageHeader
        title="الأخبار والفعاليات"
        subtitle="تابع آخر أخبار شركة ادفعلي، التعاقدات الجديدة، وأحدث تطورات قطاع التكنولوجيا المالية والمدفوعات الإلكترونية في مصر."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
            {/* Segmented Filter */}
            <div
              role="tablist"
              aria-label="تصنيفات الأخبار"
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl w-fit"
            >
              {NEWS_TABS.map((tab) => {
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

            {/* Search Input */}
            <div className="w-full lg:w-72">
              <label htmlFor="news-search" className="sr-only">
                ابحث في الأخبار
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="news-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث في الأخبار أو الأكواد..."
                  className="w-full pr-10 pl-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-700"
                />
              </div>
            </div>
          </div>

          {visibleArticles.length === 0 ? (
            <div className="bg-slate-50 rounded-2xl p-12 text-center border border-slate-200">
              <p className="text-base font-bold text-slate-800">
                لا توجد أخبار مطابقة لبحثك "{searchQuery}"
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {visibleArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-sky-600 transition-colors overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <NewsVisualBanner
                      theme={article.visualTheme}
                      categoryLabel={article.categoryLabel}
                    />

                    <div className="p-6">
                      {/* Clean unboxed metadata */}
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-medium mb-2.5">
                        <Calendar className="w-3.5 h-3.5 text-sky-700" />
                        <span>{article.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h2 className="text-lg font-extrabold text-slate-900 leading-snug mb-3">
                        <Link
                          to={`/news/${article.slug}`}
                          className="hover:text-sky-700 transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h2>

                      <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-white border-t border-slate-200/80 flex items-center justify-between">
                    <Link
                      to={`/news/${article.slug}`}
                      className="text-xs sm:text-sm font-bold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1.5"
                    >
                      <span>قراءة الخبر كاملاً</span>
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                    <span dir="ltr" className="text-[11px] font-mono-nums text-slate-500">
                      /news/{article.slug.slice(0, 12)}...
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getNewsBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-3">الخبر غير موجود</h1>
        <p className="text-slate-700 mb-6">لم نتمكن من العثور على رابط المقال المطلوب.</p>
        <Link
          to="/news"
          className="px-5 py-2.5 rounded-xl bg-sky-700 text-white font-bold text-sm inline-flex items-center gap-2"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة إلى صفحة الأخبار</span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={article.title}
        subtitle={`${article.categoryLabel} · تاريخ النشر: ${article.date} · ${article.readTime}`}
        breadcrumbLabel={article.categoryLabel}
        parentBreadcrumb={{ label: 'الأخبار', to: '/news' }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200/90">
                <NewsVisualBanner
                  theme={article.visualTheme}
                  categoryLabel={article.categoryLabel}
                />
                <div className="p-7 sm:p-8 bg-slate-50 space-y-5">
                  {article.contentParagraphs.map((para) => (
                    <p
                      key={para}
                      className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {article.serviceCodesMentioned && article.serviceCodesMentioned.length > 0 && (
                <div className="bg-sky-50 rounded-2xl p-6 border border-sky-200">
                  <div className="flex items-center gap-2 text-sky-900 font-extrabold text-base mb-3">
                    <Terminal className="w-5 h-5 text-sky-700" />
                    <span>الأكواد المباشرة المذكورة في هذا الإعلان:</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {article.serviceCodesMentioned.map((code) => (
                      <div
                        key={code}
                        className="px-4 py-2 rounded-xl bg-white border border-sky-300 font-mono-nums font-extrabold text-sky-900 text-sm"
                      >
                        كود الدفع: #{code}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white rounded-2xl p-7 border border-slate-200/90">
                <h3 className="text-lg font-extrabold text-slate-900 mb-4">أبرز النقاط المستفادة</h3>
                <ul className="space-y-3">
                  {article.keyTakeaways.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm sm:text-base text-slate-800 font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90">
                <h3 className="text-base font-extrabold text-slate-900 mb-4">أخبار ومقالات أخرى</h3>
                <ul className="space-y-3.5 text-sm">
                  {NEWS_ARTICLES.filter((a) => a.slug !== article.slug).map((other) => (
                    <li key={other.id} className="border-b border-slate-200 pb-3 last:border-b-0">
                      <Link
                        to={`/news/${other.slug}`}
                        className="font-bold text-slate-800 hover:text-sky-800 block leading-snug"
                      >
                        {other.title}
                      </Link>
                      <span className="text-xs text-slate-500 mt-1 block">
                        {other.categoryLabel} · {other.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
