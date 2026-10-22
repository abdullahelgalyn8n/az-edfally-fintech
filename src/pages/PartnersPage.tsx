import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  MapPin,
  Phone,
  CheckCircle2,
  Award,
  ArrowLeft,
} from 'lucide-react';
import { PageHeader } from '../components/Layout';
import { PARTNERS_LIST, AUTHORIZED_AGENTS, PartnerItem } from '../data/siteData';

type PartnerCategory = 'all' | PartnerItem['category'];

const PARTNER_FILTERS: Array<{ id: PartnerCategory; label: string }> = [
  { id: 'all', label: 'كل الشركاء (8)' },
  { id: 'syndicate', label: 'النقابات المهنية' },
  { id: 'fintech', label: 'التكنولوجيا المالية' },
  { id: 'charity', label: 'المؤسسات الطبية والخيرية' },
  { id: 'telecom', label: 'شركات الاتصالات' },
];

export const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PartnerCategory>('all');

  const visiblePartners =
    selectedCategory === 'all'
      ? PARTNERS_LIST
      : PARTNERS_LIST.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <PageHeader
        title="شركاؤنا ووكلاؤنا"
        subtitle="في كل يوم جديد نتعاقد مع شركاء نجاح جدد لتقديم خدماتنا مع أكبر مقدمي الخدمات الخاصة والحكومية والنقابية في مصر."
      />

      {/* Section 1: شركاء النجاح */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold text-sky-800 mb-1.5">شركاؤنا الاستراتيجيون</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">شركاء النجاح</h2>
              <p className="mt-2 text-base text-slate-700">
                نفتخر بشراكتنا مع أكبر الشركات والنقابات المهنية والمؤسسات في مختلف القطاعات
              </p>
            </div>

            <div
              role="tablist"
              aria-label="تصفية شركاء النجاح"
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl"
            >
              {PARTNER_FILTERS.map((tab) => {
                const active = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visiblePartners.map((partner) => (
              <article
                key={partner.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between hover:border-sky-600 transition-colors"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-sky-700 text-white flex items-center justify-center mb-4 shadow-xs">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-bold text-sky-800 mb-1">{partner.categoryLabel}</div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{partner.name}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{partner.description}</p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>{partner.serviceCount}</span>
                  {partner.codePrefix && (
                    <span className="font-mono-nums text-emerald-800 font-bold">
                      {partner.codePrefix}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: وكلاؤنا وتجارنا المميزين */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold text-sky-800 mb-1.5">وكلاؤنا وتجارنا</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              وكلاؤنا وتجارنا المميزون في المحافظات
            </h2>
            <p className="mt-2 text-base text-slate-700">
              نفتخر بشبكة واسعة من الوكلاء والتجار المعتمدين لخدمة نقاط البيع في جميع أنحاء البلاد
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {AUTHORIZED_AGENTS.map((agent) => (
              <article
                key={agent.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="bg-gradient-to-l from-[#0A2540] via-[#0B3B6E] to-[#0369A1] p-6 text-white">
                    <div className="flex items-center justify-between text-xs text-sky-200 mb-2">
                      <span className="inline-flex items-center gap-1 font-bold text-amber-300">
                        <Award className="w-4 h-4" />
                        {agent.roleTitle}
                      </span>
                      <span className="font-mono-nums">منذ {agent.verifiedSince}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-white">{agent.name}</h3>
                    <div className="text-xs sm:text-sm text-sky-100 mt-1">{agent.companyName}</div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-2.5 text-sm">
                      <MapPin className="w-4 h-4 text-sky-700 shrink-0 mt-1" />
                      <div>
                        <div className="font-bold text-slate-900">{agent.governorate}</div>
                        <div className="text-xs text-slate-600 mt-0.5">
                          نطاق التغطية: {agent.coverageAreas.join(' · ')}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-4">
                      <div className="text-xs font-bold text-slate-900 mb-2">
                        الخدمات المقدمة للتجار:
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {agent.servicesProvided.map((srv) => (
                          <li key={srv} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                            <span>{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Phone className="w-4 h-4 text-sky-700" />
                    <span dir="ltr" className="font-mono-nums">
                      {agent.phone}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-sky-800 hover:text-sky-950 inline-flex items-center gap-1"
                  >
                    <span>تواصل مع الوكيل</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Become an Agent Banner */}
          <div className="mt-14 rounded-3xl bg-white p-8 sm:p-10 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-sky-800 mb-1">توسع معنا في محافظتك</div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                هل ترغب في الحصول على وكالة معتمدة لشركة ادفعلي في محافظتك؟
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-1.5">
                نوفر للوكلاء المعتمدين أعلى نسبة عمولة، دعماً لوجستياً وفنياً كاملاً، وتوريد ماكينات نقاط البيع.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>تقدم بطلب وكالة الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
