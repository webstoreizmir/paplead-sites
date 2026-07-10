// Statik arayüz metinleri — site dili site-config.json `locale` alanından gelir.
// Bu repo çok-kiracılı (SSR): config hostname'e göre çözülür, locale prop olarak
// bileşenlere geçer. AI üretilen içerik config'ten; buradaki metinler sabit şablon.

export type Locale = 'tr' | 'en';

const STRINGS = {
  tr: {
    nav: { home: 'Ana Sayfa', about: 'Hakkımızda', services: 'Hizmetler', howItWorks: 'Nasıl Çalışır', testimonials: 'Referanslar', contact: 'İletişim', openMenu: 'Menüyü Aç' },
    hero: { scroll: 'Keşfet' },
    services: { eyebrow: 'Hizmetlerimiz', title: 'Size Nasıl Değer Katabiliriz?', subtitle: 'İhtiyaçlarınıza özel, modern ve ölçeklenebilir çözümler sunuyoruz.', detail: 'Detay Alın' },
    about: { eyebrow: 'Markamız', badge: 'Kesintisiz Hizmet', cta: 'Bizimle Çalışın' },
    process: { eyebrow: 'Çalışma Şeklimiz', title: 'Süreç Nasıl İşliyor?', subtitle: 'Basit, şeffaf ve sonuç odaklı bir yaklaşımla her adımda yanınızdayız.', ctaTitle: 'Hemen Başlamaya Hazır mısınız?', ctaSubtitle: 'Ücretsiz danışmanlık için bize ulaşın.', ctaButton: 'Ücretsiz Danışmanlık Al' },
    testimonials: { eyebrow: 'Referanslar', title: 'Müşterilerimiz Ne Diyor?', subtitle: 'Gerçek müşterilerimizin deneyimlerini okuyun.' },
    faq: { title: 'Sıkça Sorulan Sorular', subtitle: 'Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.' },
    contact: {
      eyebrow: 'İletişim', title: 'Hadi Konuşalım', subtitle: 'Projeniz için en iyi çözümü birlikte belirleyelim.',
      infoTitle: 'İletişime Geçin', addr: 'Adres', phone: 'Telefon', email: 'E-posta',
      formTitle: 'Mesaj Gönderin', name: 'Adınız', namePh: 'Adınız Soyadınız', phonePh: '05xx xxx xxxx',
      emailPh: 'ornek@sirket.com', message: 'Mesajınız', messagePh: 'Size nasıl yardımcı olabiliriz?', send: 'Mesajı Gönder',
    },
    footer: { menu: 'Menü', corporate: 'Kurumsal', privacy: 'Gizlilik Politikası', terms: 'Kullanım Şartları', kvkk: 'KVKK Metni', rights: 'Tüm hakları saklıdır', builtWith: 'paplead.com ile oluşturuldu' },
  },
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', howItWorks: 'How It Works', testimonials: 'Testimonials', contact: 'Contact', openMenu: 'Open Menu' },
    hero: { scroll: 'Scroll' },
    services: { eyebrow: 'Our Services', title: 'How Can We Add Value?', subtitle: 'We deliver modern, scalable solutions tailored to your needs.', detail: 'Learn More' },
    about: { eyebrow: 'Our Brand', badge: 'Nonstop Service', cta: 'Work With Us' },
    process: { eyebrow: 'How We Work', title: 'How the Process Works', subtitle: 'A simple, transparent and results-driven approach by your side at every step.', ctaTitle: 'Ready to Get Started?', ctaSubtitle: 'Reach out to us for a free consultation.', ctaButton: 'Get a Free Consultation' },
    testimonials: { eyebrow: 'Testimonials', title: 'What Our Clients Say', subtitle: 'Read the experiences of our real clients.' },
    faq: { title: 'Frequently Asked Questions', subtitle: 'Find answers to the questions on your mind here.' },
    contact: {
      eyebrow: 'Contact', title: "Let's Talk", subtitle: "Let's find the best solution for your project together.",
      infoTitle: 'Get in Touch', addr: 'Address', phone: 'Phone', email: 'Email',
      formTitle: 'Send a Message', name: 'Your Name', namePh: 'John Doe', phonePh: '+1 555 000 0000',
      emailPh: 'name@company.com', message: 'Your Message', messagePh: 'How can we help you?', send: 'Send Message',
    },
    footer: { menu: 'Menu', corporate: 'Company', privacy: 'Privacy Policy', terms: 'Terms of Service', kvkk: 'Cookie Policy', rights: 'All rights reserved', builtWith: 'built with paplead.com' },
  },
} as const;

export function getUI(locale?: string) {
  return STRINGS[locale === 'en' ? 'en' : 'tr'];
}
