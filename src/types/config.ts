export interface SiteConfig {
    is_paid?: boolean;
    metadata: {
        title: string;
        description: string;
        site_url?: string;
    };
    theme: {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
        };
        fonts: {
            heading: string;
            body: string;
        };
        style: string;
    };
    images: {
        hero_keyword: string;
        about_keyword: string;
        feature_keywords: string[];
    };
    seo?: {
        google_verification?: string;
        bing_verification?:   string;
        yandex_verification?: string;
    };
    tracking?: {
        ga4?:          string;
        facebook_pixel?: string;
        google_ads?:   string;
        hotjar?:       string;
    };
    content: {
        hero: {
            headline: string;
            subheadline: string;
            ctaButtonText: string;
            badge_text?: string;
        };
        about: {
            title: string;
            description: string;
            stats: Array<{ label: string; value: string }>;
        };
        services: Array<{
            title: string;
            description: string;
            icon: string;
        }>;
        process: Array<{
            step: string;
            title: string;
            description: string;
        }>;
        faq: Array<{
            question: string;
            answer: string;
        }>;
        testimonials: Array<{
            name: string;
            comment: string;
            role: string;
        }>;
        contact: {
            address: string;
            phone: string;
            email: string;
            map_query: string;
            whatsapp?: string;
            instagram?: string;
            linkedin?: string;
        };
    };
}
