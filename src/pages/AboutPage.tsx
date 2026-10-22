import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Eye, Target, ArrowLeft, ShieldCheck } from 'lucide-react';
import { PageHeader } from '../components/Layout';
import { TEAM_MEMBERS } from '../data/siteData';
import { filterTeamMembers, TeamDepartmentFilter } from '../utils/catalogLogic';

const DEPARTMENT_TABS: Array<{ id: TeamDepartmentFilter; label: string }> = [
  { id: 'all', label: 'كل الإدارات (11)' },
  { id: 'executive', label: 'الإدارة التنفيذية' },
  { id: 'technology', label: 'البرمجيات وأمن المعلومات' },
  { id: 'operations', label: 'العمليات والتسويق' },
  { id: 'finance-legal', label: 'المالية والشؤون القانونية' },
];

export const AboutPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<TeamDepartmentFilter>('all');
  const filteredTeam = filterTeamMembers(TEAM_MEMBERS, selectedDept);

  return (
    <div>
      <PageHeader
        title="من نحن"
        subtitle="شركة ادفعلي هي شركة مساهمة مصرية تعمل في مجال المدفوعات الإلكترونية والرقمية وتطوير حلول نقاط البيع منذ عام 2020."
      />

      {/* Section 1: قصتنا + رؤيتنا ورسالتنا */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Right Column: Our Story */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-sky-800 mb-2">قصتنا · نشأة الشركة</div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  شركة مساهمة مصرية منذ عام 2020
                </h2>
                <p className="mt-4 text-base text-slate-700 leading-relaxed">
                  شركة ادفعلي هي شركة مساهمة مصرية تمارس نشاطها منذ عام 2020 في مجال المدفوعات
                  الإلكترونية والرقمية، بعد مسيرة خبرة ممتدة في قطاع التكنولوجيا والاتصالات في مصر
                  منذ عام 2005 وانضمام شركة انترنت ايجيبت ليشكلا كياناً واحداً يدار من خلال إدارة
                  ادفعلي للدفع الإلكتروني.
                </p>
                <p className="mt-3 text-base text-slate-700 leading-relaxed">
                  بدأت الشركة نشاطها بتطوير أنظمة المدفوعات والتحول الرقمي مواكبةً لرؤية الدولة
                  المصرية في هذا التحول الرقمي، مع التركيز على بناء سيرفرات محلية فائقة السرعة
                  وتطوير تطبيقات التجار وماكينات الـ POS بأيدي مهندسين مصريين متخصصين.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-slate-900 font-mono-nums">2020</div>
                    <div className="text-xs font-bold text-slate-600">سنة التأسيس الرسمي</div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-slate-900 font-mono-nums">+50</div>
                    <div className="text-xs font-bold text-slate-600">موظف ومهندس متخصص</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Column: Vision & Mission */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200/90">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2.5 text-sky-800 font-bold text-sm mb-2">
                    <Eye className="w-5 h-5" />
                    <span>رؤيتنا</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    الريادة في المدفوعات والتحول الرقمي
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    نسعى لأن نكون الشركة الرائدة في مجال المدفوعات الإلكترونية والتحول الرقمي في
                    مصر والمنطقة العربية من خلال بنية تحتية يعتمد عليها التاجر والمواطن.
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-sm mb-2">
                    <Target className="w-5 h-5" />
                    <span>رسالتنا</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    حلول دفع مبتكرة وآمنة للجميع
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    تقديم حلول دفع إلكترونية مبتكرة وآمنة تسهل على المواطنين والتجار إتمام معاملاتهم
                    اليومية وسداد الفواتير بسهولة ويسر وبأعلى عائد للتاجر.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span>شركة مساهمة مصرية خاضعة للقوانين المصرية</span>
                <Link to="/contact" className="font-bold text-sky-800 hover:text-sky-950">
                  تواصل مع الإدارة ←
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: فريقنا - الهيكل الوظيفي */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold text-sky-800 mb-1.5">فريقنا · قيادات الشركة</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                الهيكل الوظيفي والإداري
              </h2>
              <p className="mt-2 text-base text-slate-700">
                فريق عمل متميز من الخبراء والمهندسين والمتخصصين في إدارة وتشغيل منظومة ادفعلي
              </p>
            </div>

            {/* Interactive Department Filter Tabs */}
            <div
              role="tablist"
              aria-label="تصفية أقسام الهيكل الوظيفي"
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl"
            >
              {DEPARTMENT_TABS.map((tab) => {
                const active = selectedDept === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedDept(tab.id)}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeam.map((member) => (
              <article
                key={member.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* High-contrast executive card header */}
                  <div className="bg-gradient-to-l from-slate-900 via-[#0B3B6E] to-sky-900 p-5 flex items-center gap-4 text-white">
                    <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 flex flex-col items-center justify-center font-extrabold shrink-0 border-2 border-white/80 shadow-sm">
                      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-slate-900">
                        <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3
                        dir="ltr"
                        className="text-base sm:text-lg font-extrabold text-white truncate text-right"
                      >
                        {member.name}
                      </h3>
                      <div className="text-xs font-bold text-amber-300 mt-0.5">{member.role}</div>
                      <div className="text-xs text-sky-100 mt-0.5">{member.arabicRole}</div>
                    </div>
                  </div>

                  {/* Bio Body */}
                  <div className="p-6">
                    <p className="text-sm text-slate-700 leading-relaxed">{member.bio}</p>
                  </div>
                </div>

                {/* Unboxed quiet metadata footer */}
                <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                  <span>ادفعلي للمدفوعات الإلكترونية</span>
                  <span className="font-mono-nums">منذ {member.joinedYear}</span>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-14 bg-white rounded-2xl p-8 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  هل ترغب في الانضمام لشبكة وكلاء وتجار ادفعلي؟
                </h3>
                <p className="text-sm text-slate-700 mt-1">
                  تواصل مباشرة مع فريق المبيعات والعمليات لتفعيل حسابك واستلام ماكينة الـ POS الخاصة بك.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>تواصل معنا الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
