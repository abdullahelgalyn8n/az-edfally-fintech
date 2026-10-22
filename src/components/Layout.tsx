import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Send,
  Menu,
  X,
  Link2,
  Check,
  ChevronLeft,
  Download,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { EdfallyLogoMark } from './PosVisuals';

const PRIMARY_NAV_ITEMS = [
  { to: '/', label: 'الرئيسية', end: true },
  { to: '/about', label: 'من نحن' },
  { to: '/services', label: 'خدماتنا' },
  { to: '/apps', label: 'المنتجات والتطبيقات' },
  { to: '/partners', label: 'شركاؤنا' },
];

const ALL_SITE_ROUTES = [
  { to: '/', label: 'الرئيسية', end: true },
  { to: '/about', label: 'من نحن' },
  { to: '/services', label: 'خدماتنا' },
  { to: '/apps', label: 'المنتجات والتطبيقات' },
  { to: '/partners', label: 'شركاؤنا' },
  { to: '/gallery', label: 'المعرض' },
  { to: '/news', label: 'الأخبار' },
  { to: '/contact', label: 'اتصل بنا' },
];

export const PageHeader: React.FC<{
  title: string;
  subtitle: string;
  breadcrumbLabel?: string;
  parentBreadcrumb?: { label: string; to: string };
}> = ({ title, subtitle, breadcrumbLabel, parentBreadcrumb }) => {
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const fullPathDisplay = `edfally.com${location.pathname === '/' ? '/index' : location.pathname}`;

  const handleCopyUrl = () => {
    const shareUrl = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gradient-to-l from-[#0A2540] via-[#0B3B6E] to-[#0369A1] text-white border-b border-sky-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            {/* Breadcrumb Trail */}
            <nav aria-label="مسار الصفحة" className="flex items-center gap-2 text-xs text-sky-200 mb-3">
              <Link to="/" className="hover:text-white transition-colors">
                الرئيسية
              </Link>
              {parentBreadcrumb && (
                <>
                  <ChevronLeft className="w-3.5 h-3.5 text-sky-300/70" />
                  <Link to={parentBreadcrumb.to} className="hover:text-white transition-colors">
                    {parentBreadcrumb.label}
                  </Link>
                </>
              )}
              <ChevronLeft className="w-3.5 h-3.5 text-sky-300/70" />
              <span className="text-white font-semibold">{breadcrumbLabel || title}</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              {title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-sky-100 max-w-2xl leading-relaxed font-medium">
              {subtitle}
            </p>
          </div>

          {/* Dedicated Page Route Bar */}
          <div className="flex items-center gap-2 bg-slate-950/45 border border-white/20 rounded-xl px-3.5 py-2.5 self-start md:self-end">
            <Link2 className="w-4 h-4 text-sky-300 shrink-0" />
            <span
              dir="ltr"
              className="text-xs font-mono-nums text-sky-100 select-all truncate max-w-[220px] sm:max-w-[280px]"
            >
              {fullPathDisplay}
            </span>
            <button
              type="button"
              onClick={handleCopyUrl}
              className="mr-2 px-2.5 py-1 rounded-lg bg-white text-slate-900 hover:bg-sky-50 text-xs font-bold transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>تم النسخ</span>
                </>
              ) : (
                <span>نسخ الرابط</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sub-navigation strip for all 8 pages so every route is 1-click accessible */}
      <div className="bg-slate-950/35 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-1 sm:gap-2">
            {ALL_SITE_ROUTES.map((route) => (
              <NavLink
                key={route.to}
                to={route.to}
                end={route.end}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-sky-100 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {route.label}
              </NavLink>
            ))}
          </div>
          <span className="hidden lg:inline-block text-xs text-sky-200 whitespace-nowrap shrink-0">
            ببساطة أسهل وأسرع · خط ساخن: {COMPANY_INFO.phones[0]}
          </span>
        </div>
      </div>
    </section>
  );
};

export const SiteLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Wordmark */}
          <Link
            to="/"
            aria-label="ادفعلي - الصفحة الرئيسية"
            className="whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 rounded-lg"
          >
            <EdfallyLogoMark variant="dark" />
          </Link>

          {/* Zone 2: 5 Concise Single-Line Text Navigation Links */}
          <nav
            aria-label="التنقل الرئيسي"
            className="hidden md:flex items-center gap-7 text-sm font-bold text-slate-700"
          >
            {PRIMARY_NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'border-sky-700 text-sky-800'
                      : 'border-transparent text-slate-700 hover:text-slate-950 hover:border-slate-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/apps"
              className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>تحميل التطبيق</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 border border-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-lg">
            <nav aria-label="قائمة الموبايل" className="grid grid-cols-2 gap-2">
              {ALL_SITE_ROUTES.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `px-3.5 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                      isActive
                        ? 'bg-sky-700 text-white'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Authentic High-Contrast Footer */}
      <footer className="bg-[#0B1320] text-slate-200 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1: Brand & Overview */}
            <div>
              <EdfallyLogoMark variant="light" />
              <p className="mt-3 text-xs font-bold text-sky-300">
                ببساطة أسهل وأسرع · شركة مساهمة مصرية منذ 2020
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                شركة ادفعلي للمدفوعات الإلكترونية والرقمية - نقدم حلولاً متكاملة للدفع الإلكتروني،
                ماكينات نقاط البيع POS، والتحول الرقمي للتجار والمؤسسات في جميع محافظات مصر.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h2 className="text-base font-bold text-white mb-4">روابط سريعة</h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                    الرئيسية (/index)
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                    من نحن والهيكل الوظيفي (/about)
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                    خدماتنا وأكواد الدفع (/services)
                  </Link>
                </li>
                <li>
                  <Link to="/apps" className="text-slate-300 hover:text-white transition-colors">
                    المنتجات والتطبيقات والماكينات (/apps)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: More Pages */}
            <div>
              <h2 className="text-base font-bold text-white mb-4">المزيد من الصفحات</h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/partners" className="text-slate-300 hover:text-white transition-colors">
                    شركاؤنا ووكلاؤنا المعتمدون (/partners)
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-slate-300 hover:text-white transition-colors">
                    الأخبار والتعاقدات الجديدة (/news)
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-slate-300 hover:text-white transition-colors">
                    المعرض والفيديوهات الإرشادية (/gallery)
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                    اتصل بنا وطلب ماكينة (/contact)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Info */}
            <div>
              <h2 className="text-base font-bold text-white mb-4">تواصل معنا</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-900/60 border border-sky-700/50 flex items-center justify-center text-sky-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">خدمة العملاء والمبيعات</div>
                    <a
                      href={`tel:${COMPANY_INFO.phones[0]}`}
                      dir="ltr"
                      className="block font-mono-nums font-bold text-white hover:text-sky-300"
                    >
                      {COMPANY_INFO.phones[0]}
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phones[1]}`}
                      dir="ltr"
                      className="block font-mono-nums font-bold text-white hover:text-sky-300"
                    >
                      {COMPANY_INFO.phones[1]}
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-300 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">واتساب الدعم والتجار</div>
                    <span dir="ltr" className="font-mono-nums font-bold text-white">
                      {COMPANY_INFO.whatsapp}
                    </span>
                  </div>
                </li>

                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-900/60 border border-sky-700/50 flex items-center justify-center text-sky-300 shrink-0">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">تليجرام</div>
                    <span dir="ltr" className="font-mono-nums font-bold text-white">
                      {COMPANY_INFO.telegram}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>جميع الحقوق محفوظة. <a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">A.Z Agency</a> 2026 ©</p>
            <div className="flex items-center gap-4">
              <Link to="/apps" className="hover:text-white transition-colors">
                ماكينات POS
              </Link>
              <span>·</span>
              <Link to="/services" className="hover:text-white transition-colors">
                أكواد BNB Dafatery
              </Link>
              <span>·</span>
              <Link to="/contact" className="hover:text-white transition-colors">
                طلب وكالة
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
