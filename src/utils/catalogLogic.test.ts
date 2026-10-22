import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProducts,
  getProductBySlug,
  getServiceBySlug,
  getNewsBySlug,
  filterNews,
  filterGallery,
  filterTeamMembers,
  searchBillerCodes,
  validateContactForm,
} from './catalogLogic';
import {
  PRODUCTS_CATALOG,
  NEWS_ARTICLES,
  GALLERY_ITEMS,
  TEAM_MEMBERS,
} from '../data/siteData';

test('filterProducts filters by category and search query accurately', () => {
  const posOnly = filterProducts(PRODUCTS_CATALOG, 'pos', '');
  assert.equal(posOnly.length, 5);
  assert.ok(posOnly.every((p) => p.category === 'pos'));

  const verifoneSearch = filterProducts(PRODUCTS_CATALOG, 'all', 'X990');
  assert.equal(verifoneSearch.length, 1);
  assert.equal(verifoneSearch[0].slug, 'verifone-x990');

  const mobiwireSearch = filterProducts(PRODUCTS_CATALOG, 'all', 'Mobiwire');
  assert.equal(mobiwireSearch.length, 2); // POS + print plugin
});

test('slug lookup helpers resolve products, services, and news articles', () => {
  const pax = getProductBySlug('pax-a920-pro');
  assert.ok(pax);
  assert.equal(pax.englishModel, 'PAX A920 / A920Pro / A930');

  const service = getServiceBySlug('electronic-payments');
  assert.ok(service);
  assert.equal(service.number, '01');

  const article = getNewsBySlug('bnb-dafatery-contract');
  assert.ok(article);
  assert.deepEqual(article.serviceCodesMentioned, ['3039', '3040', '3041', '3042']);
});

test('filterNews and searchBillerCodes locate BNB Dafatery codes 3039-3042', () => {
  const contractNews = filterNews(NEWS_ARTICLES, 'contracts');
  assert.equal(contractNews.length, 1);
  assert.equal(contractNews[0].slug, 'bnb-dafatery-contract');

  const codes = searchBillerCodes('3039');
  assert.equal(codes.length, 2); // 3039 and 3039-3042
});

test('filterGallery and filterTeamMembers filter accurately', () => {
  const tutorials = filterGallery(GALLERY_ITEMS, 'tutorials');
  assert.equal(tutorials.length, 2);

  const executives = filterTeamMembers(TEAM_MEMBERS, 'executive');
  assert.equal(executives.length, 3);
  assert.equal(TEAM_MEMBERS.length, 11);
});

test('validateContactForm enforces Egyptian phone numbers and required fields', () => {
  const emptyResult = validateContactForm({
    name: '',
    email: 'invalid',
    phone: '12345',
    whatsapp: '',
    subject: '',
    message: 'قصير',
  });
  assert.equal(emptyResult.valid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.phone);
  assert.ok(emptyResult.errors.subject);
  assert.ok(emptyResult.errors.message);

  const validResult = validateContactForm({
    name: 'محمد أحمد علي',
    email: 'merchant@edfally.com',
    phone: '01110666151',
    whatsapp: '01119295111',
    subject: 'طلب ماكينة POS جديدة',
    message: 'أرغب في التعاقد على ماكينة PAX A920 لمحل تجاري في المنصورة.',
  });
  assert.equal(validResult.valid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});
