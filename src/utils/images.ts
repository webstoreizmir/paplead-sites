const stockImages: Record<string, string[]> = {
    architecture: [
        "https://images.unsplash.com/photo-1600596542815-e328d4de4bf7?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
    ],
    food: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1920&q=80"
    ],
    tech: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
    ],
    health: [
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80"
    ],
    fashion: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1920&q=80"
    ],
    beauty: [
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1920&q=80"
    ],
    fitness: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1920&q=80"
    ],
    law: [
        "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80"
    ],
    automotive: [
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1920&q=80"
    ],
    education: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80"
    ],
    finance: [
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1920&q=80"
    ],
    business: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80"
    ]
};

function detectCategory(keyword: string): string {
    const k = keyword.toLowerCase();

    if (k.includes('villa') || k.includes('ev') || k.includes('mimari') || k.includes('inşaat') ||
        k.includes('dekorasyon') || k.includes('interior') || k.includes('architecture') ||
        k.includes('yapı') || k.includes('emlak') || k.includes('real estate') || k.includes('construction') ||
        k.includes('bina') || k.includes('proje') || k.includes('konut') || k.includes('building') ||
        k.includes('design studio') || k.includes('architect')) {
        return 'architecture';
    }
    if (k.includes('kahve') || k.includes('kafe') || k.includes('cafe') || k.includes('coffee') ||
        k.includes('yemek') || k.includes('restoran') || k.includes('restaurant') ||
        k.includes('gıda') || k.includes('mutfak') || k.includes('food') || k.includes('bakery') ||
        k.includes('pastane') || k.includes('catering') || k.includes('diner')) {
        return 'food';
    }
    if (k.includes('yazılım') || k.includes('teknoloji') || k.includes('dijital') ||
        k.includes('bilgisayar') || k.includes('kod') || k.includes('tech') || k.includes('software') ||
        k.includes('web') || k.includes('app') || k.includes('mobile') || k.includes('digital') ||
        k.includes('it ') || k.includes('startup') || k.includes('saas') || k.includes('code') ||
        k.includes('developer') || k.includes('agency') || k.includes('data')) {
        return 'tech';
    }
    if (k.includes('sağlık') || k.includes('diş') || k.includes('doktor') ||
        k.includes('klinik') || k.includes('estetik') || k.includes('health') || k.includes('medical') ||
        k.includes('dental') || k.includes('clinic') || k.includes('hospital') || k.includes('doctor') ||
        k.includes('psikolog') || k.includes('fizyoterapi') || k.includes('veteriner')) {
        return 'health';
    }
    if (k.includes('moda') || k.includes('giyim') || k.includes('tekstil') ||
        k.includes('butik') || k.includes('fashion') || k.includes('kıyafet') ||
        k.includes('clothing') || k.includes('boutique') || k.includes('apparel')) {
        return 'fashion';
    }
    if (k.includes('güzellik') || k.includes('kuaför') || k.includes('saç') ||
        k.includes('cilt') || k.includes('makyaj') || k.includes('beauty') || k.includes('spa') ||
        k.includes('hair') || k.includes('salon') || k.includes('nail') || k.includes('kozmetik')) {
        return 'beauty';
    }
    if (k.includes('spor') || k.includes('fitness') || k.includes('gym') ||
        k.includes('jimnastik') || k.includes('antrenman') || k.includes('sport') ||
        k.includes('pilates') || k.includes('yoga') || k.includes('crossfit')) {
        return 'fitness';
    }
    if (k.includes('hukuk') || k.includes('avukat') || k.includes('law') ||
        k.includes('legal') || k.includes('dava') || k.includes('noter') ||
        k.includes('attorney') || k.includes('counsel') || k.includes('justice')) {
        return 'law';
    }
    if (k.includes('otomotiv') || k.includes('araba') || k.includes('araç') ||
        k.includes('car') || k.includes('auto') || k.includes('garaj') || k.includes('servis') ||
        k.includes('vehicle') || k.includes('tire') || k.includes('motosiklet')) {
        return 'automotive';
    }
    if (k.includes('eğitim') || k.includes('okul') || k.includes('kurs') ||
        k.includes('özel ders') || k.includes('education') || k.includes('akademi') ||
        k.includes('school') || k.includes('training') || k.includes('course') || k.includes('learn')) {
        return 'education';
    }
    if (k.includes('muhasebe') || k.includes('finans') || k.includes('mali') ||
        k.includes('finance') || k.includes('yatırım') || k.includes('sigorta') ||
        k.includes('accounting') || k.includes('insurance') || k.includes('invest') || k.includes('bank')) {
        return 'finance';
    }

    return 'business';
}

function hashString(str: string): number {
    let h = 5381;
    for (let i = 0; i < str.length; i++) {
        h = ((h << 5) + h) ^ str.charCodeAt(i);
    }
    return Math.abs(h);
}

export function getSmartImage(keyword: string): string {
    const k = (keyword || '').toLowerCase().trim();
    // Direct category key match (Gemini sends exact category names)
    const direct = stockImages[k];
    if (direct) return direct[hashString(k) % direct.length];
    // Fallback: fuzzy keyword detection
    const category = detectCategory(k);
    const images = stockImages[category] || stockImages.business;
    return images[hashString(k) % images.length];
}
