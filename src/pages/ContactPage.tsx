import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
} from 'lucide-react';
import { PageHeader } from '../components/Layout';
import { COMPANY_INFO } from '../data/siteData';
import { validateContactForm, ContactFormInput } from '../utils/catalogLogic';

interface SubmittedTicket extends ContactFormInput {
  ticketId: string;
  submittedAt: string;
}

const SUBJECT_OPTIONS = [
  'فتح حساب تاجر جديد وتفعيل التطبيق',
  'طلب شراء أو برمجة ماكينة POS (PAX / Verifone / Mobiwire / SUNMI)',
  'طلب وكالة معتمدة في المحافظات',
  'ربط برمجي API وتعاقد شركات ومؤسسات',
  'الدعم الفني والاستفسارات المالية',
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [submittedTickets, setSubmittedTickets] = useState<SubmittedTicket[]>([]);

  const handleChange = (
    field: keyof ContactFormInput,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const newTicket: SubmittedTicket = {
      ...formData,
      ticketId: `EDF-${1040 + submittedTickets.length + 1}`,
      submittedAt: 'الآن · قيد المتابعة الفورية من فريق خدمة العملاء',
    };

    setSubmittedTickets((prev) => [newTicket, ...prev]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      whatsapp: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <div>
      <PageHeader
        title="اتصل بنا"
        subtitle="نحن هنا لمساعدتك في أي وقت؛ لا تتردد في التواصل معنا لأي استفسار أو طلب ماكينة POS أو فتح حساب تاجر."
      />

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold text-sky-800 mb-1.5">تواصل معنا</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              نحن هنا لمساعدتك على مدار الساعة
            </h2>
            <p className="mt-2 text-base text-slate-700">
              املأ النموذج التالي وسيتواصل معك مسؤول المبيعات أو الدعم الفني فوراً
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Right Column in Contact layout: Contact Information Card */}
            <div className="lg:col-span-4 bg-gradient-to-b from-[#0A2540] via-[#0B3B6E] to-[#0369A1] text-white rounded-3xl p-7 sm:p-8 border border-sky-900 shadow-sm">
              <h3 className="text-xl font-extrabold text-white mb-6">معلومات التواصل المباشر</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-sky-200" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">اتصل بنا (الخطوط المباشرة)</div>
                    <a
                      href={`tel:${COMPANY_INFO.phones[0]}`}
                      dir="ltr"
                      className="block text-sm font-mono-nums font-bold text-sky-100 hover:text-white"
                    >
                      {COMPANY_INFO.phones[0]}
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phones[1]}`}
                      dir="ltr"
                      className="block text-sm font-mono-nums font-bold text-sky-100 hover:text-white mt-0.5"
                    >
                      {COMPANY_INFO.phones[1]}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">واتساب خدمة التجار</div>
                    <span dir="ltr" className="text-sm font-mono-nums font-bold text-sky-100 block">
                      {COMPANY_INFO.whatsapp}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5 text-sky-200" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">تليجرام الدعم الفني</div>
                    <span dir="ltr" className="text-sm font-mono-nums font-bold text-sky-100 block">
                      {COMPANY_INFO.telegram}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-white/15">
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-sky-200" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">المقر والترخيص</div>
                    <p className="text-xs text-sky-100 leading-relaxed">
                      شركة ادفعلي للمدفوعات الإلكترونية والرقمية — شركة مساهمة مصرية منذ عام 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Column: Validated Message Form */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-xs">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">أرسل لنا رسالة</h3>

              {submittedTickets.length > 0 && (
                <div
                  role="status"
                  className="mb-7 bg-emerald-50 border border-emerald-300 rounded-2xl p-5 text-emerald-950"
                >
                  <div className="flex items-center gap-2 font-extrabold text-base text-emerald-900 mb-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                    <span>
                      تم استلام رسالتك بنجاح برقم مرجعي ({submittedTickets[0].ticketId})
                    </span>
                  </div>
                  <p className="text-sm text-emerald-800">
                    شكراً لتواصلك مع شركة ادفعلي. سيقوم فريق خدمة العملاء بالتواصل معك على الرقم{' '}
                    <span dir="ltr" className="font-mono-nums font-bold">
                      {submittedTickets[0].phone}
                    </span>{' '}
                    بخصوص "{submittedTickets[0].subject}".
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-bold text-slate-900 mb-1.5"
                    >
                      الاسم بالكامل <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="أدخل اسمك الثلاثي"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-700 ${
                        errors.name ? 'border-rose-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-bold text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-bold text-slate-900 mb-1.5"
                    >
                      البريد الإلكتروني <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="example@email.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-700 text-right ${
                        errors.email ? 'border-rose-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-bold text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-bold text-slate-900 mb-1.5"
                    >
                      رقم الموبايل <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="01xxxxxxxxx"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-mono-nums text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-700 text-right ${
                        errors.phone ? 'border-rose-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-bold text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-whatsapp"
                      className="block text-sm font-bold text-slate-900 mb-1.5"
                    >
                      رقم الواتساب (اختياري)
                    </label>
                    <input
                      id="contact-whatsapp"
                      type="tel"
                      dir="ltr"
                      value={formData.whatsapp}
                      onChange={(e) => handleChange('whatsapp', e.target.value)}
                      placeholder="01xxxxxxxxx"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-mono-nums text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-700 text-right ${
                        errors.whatsapp ? 'border-rose-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.whatsapp && (
                      <p className="mt-1.5 text-xs font-bold text-rose-700 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.whatsapp}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-bold text-slate-900 mb-1.5"
                  >
                    الموضوع <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-700 ${
                      errors.subject ? 'border-rose-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">اختر الموضوع...</option>
                    {SUBJECT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="mt-1.5 text-xs font-bold text-rose-700 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-bold text-slate-900 mb-1.5"
                  >
                    تفاصيل الموضوع <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="اكتب تفاصيل رسالتك أو نوع الماكينة المطلوبة والمحافظة هنا..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-700 ${
                      errors.message ? 'border-rose-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-bold text-rose-700 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-7 py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm sm:text-base transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>إرسال الرسالة</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
