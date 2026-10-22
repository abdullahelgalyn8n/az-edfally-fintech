import {
  PRODUCTS_CATALOG,
  SERVICES_LIST,
  NEWS_ARTICLES,
  GALLERY_ITEMS,
  TEAM_MEMBERS,
  ProductItem,
  ServiceItem,
  NewsArticle,
  GalleryMediaItem,
  TeamMember,
  ServiceBillerCode,
} from '../data/siteData';

export type ProductCategoryFilter = 'all' | 'pos' | 'mobile' | 'plugin' | 'api';
export type NewsCategoryFilter = 'all' | 'fintech' | 'announcements' | 'contracts';
export type GalleryCategoryFilter = 'all' | 'branches' | 'tutorials' | 'devices';
export type TeamDepartmentFilter = 'all' | 'executive' | 'technology' | 'operations' | 'finance-legal';

export function filterProducts(
  products: ProductItem[],
  category: ProductCategoryFilter,
  searchQuery: string
): ProductItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return products.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.englishModel.toLowerCase().includes(normalizedQuery) ||
      item.shortDescription.toLowerCase().includes(normalizedQuery) ||
      item.supportedVersions.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS_CATALOG.find((p) => p.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_LIST.find((s) => s.slug === slug);
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((n) => n.slug === slug);
}

export function filterNews(
  articles: NewsArticle[],
  category: NewsCategoryFilter,
  searchQuery = ''
): NewsArticle[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return articles.filter((article) => {
    const matchesCategory = category === 'all' || article.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      article.title.toLowerCase().includes(normalizedQuery) ||
      article.excerpt.toLowerCase().includes(normalizedQuery) ||
      (article.serviceCodesMentioned || []).some((c) => c.includes(normalizedQuery))
    );
  });
}

export function filterGallery(
  items: GalleryMediaItem[],
  category: GalleryCategoryFilter
): GalleryMediaItem[] {
  if (category === 'all') return items;
  return items.filter((item) => item.category === category);
}

export function filterTeamMembers(
  members: TeamMember[],
  department: TeamDepartmentFilter
): TeamMember[] {
  if (department === 'all') return members;
  return members.filter((m) => m.department === department);
}

export function searchBillerCodes(query: string): Array<ServiceBillerCode & { serviceTitle: string; serviceSlug: string }> {
  const normalized = query.trim().toLowerCase();
  const allCodes: Array<ServiceBillerCode & { serviceTitle: string; serviceSlug: string }> = [];

  for (const service of SERVICES_LIST) {
    for (const codeItem of service.billerCodes) {
      allCodes.push({
        ...codeItem,
        serviceTitle: service.title,
        serviceSlug: service.slug,
      });
    }
  }

  if (!normalized) return allCodes;
  return allCodes.filter(
    (c) =>
      c.code.toLowerCase().includes(normalized) ||
      c.name.toLowerCase().includes(normalized) ||
      c.provider.toLowerCase().includes(normalized)
  );
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  subject: string;
  governorate?: string;
  message: string;
}

export interface ContactValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormInput, string>>;
}

export function validateContactForm(input: ContactFormInput): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  if (!input.name || input.name.trim().length < 3) {
    errors.name = 'يرجى إدخال الاسم بالكامل (3 أحرف على الأقل)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email = 'يرجى إدخال بريد إلكتروني صحيح';
  }

  const cleanPhone = (input.phone || '').replace(/\s+/g, '');
  const egyptPhoneRegex = /^(010|011|012|015)\d{8}$/;
  if (!cleanPhone || !egyptPhoneRegex.test(cleanPhone)) {
    errors.phone = 'يرجى إدخال رقم موبايل مصري صحيح مكون من 11 رقماً يبدأ بـ 01';
  }

  if (input.whatsapp && input.whatsapp.trim().length > 0) {
    const cleanWhatsapp = input.whatsapp.replace(/\s+/g, '');
    if (!egyptPhoneRegex.test(cleanWhatsapp)) {
      errors.whatsapp = 'يرجى إدخال رقم واتساب صحيح مكون من 11 رقماً';
    }
  }

  if (!input.subject || input.subject.trim().length === 0) {
    errors.subject = 'يرجى اختيار موضوع الرسالة';
  }

  if (!input.message || input.message.trim().length < 10) {
    errors.message = 'يرجى كتابة تفاصيل الطلب (10 أحرف على الأقل)';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
