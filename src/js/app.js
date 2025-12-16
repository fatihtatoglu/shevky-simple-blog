const THEME_KEY = "theme";
const LANG_KEY = "lang";
const DEFAULT_LANG = "tr";

const html = document.documentElement;
const themeToggleButton = document.querySelector("[data-theme-toggle]");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const translations = {
    tr: {
        siteTitle: "Örnek Blog",
        langToggleLabel: "TR",
        themeToggleLabel: "Temayı değiştir",
        post1Title: "Modern Web Geliştirmeye Başlangıç",
        post1Date: "15 Ocak 2025",
        post1ReadingTime: "5 dk okuma",
        post1Excerpt:
            "Modern web geliştirmenin temel araçlarını ve çerçevelerini keşfedin. Duyarlı tasarım prensiplerinden en yeni JavaScript çatılarına kadar bu kapsamlı rehber, değişen teknoloji dünyasında güvenle ilerlemenize yardımcı olur.",
        postHeroSubtitle:
            "Modern araç zincirlerini anlamanıza yardımcı olacak kapsamlı bir başlangıç rehberi.",
        postHeroAuthor: "Yazar: Ayşe Demir",
        postHeroUpdated: "Güncellendi: 20 Ocak 2025",
        postHeroFigureLabel: "Atölye Notları",
        postHeroFigureText:
            "“İyi bir geliştirici, doğru aracı doğru zamanda kullanmayı öğrenen kişidir.”",
        postSection1Title: "1. Doğru Temeli Kurun",
        postSection2Title: "2. Tasarım Sistemleriyle Tutarlılık Sağlayın",
        postSection3Title: "3. Otomasyonla Akışı Hızlandırın",
        postParagraph1:
            "Projeye başlamadan önce ihtiyaçlarınızı netleştirmek, uzun vadeli başarı için kritik öneme sahiptir. Tasarım sisteminiz, kullanılacak paket yöneticileri ve test stratejileri gibi temel kararlar, ürün büyürken karşılaşacağınız sorunları azaltır.",
        postParagraph2:
            "Ekipler genellikle “önce bir şeyler yapalım” yaklaşımına kapılır. Ancak mantıklı standartlar belirlemek, kod incelemelerini hızlandırır ve bilgi paylaşımını kolaylaştırır. Bu sayede yeni katılanlar için onboarding süresi ciddi biçimde kısalır.",
        postParagraph3:
            "UI bileşenlerini merkezi bir yerde tutmak ve yeniden kullanmak, ürününüzdeki tutarlılığı artırır. Tasarım sistemi sayesinde farklı ekipler aynı dili konuşur, kullanıcı deneyimi tahmin edilebilir hale gelir.",
        postParagraph4:
            "CI/CD, kod kalitesini güvence altına almak için yalnızca bir başlangıçtır. Linting, tip kontrolü ve görsel regresyon testleri gibi otomasyon katmanları eklemek, üretim ortamına güvenle çıkmanıza yardımcı olur.",
        postListTitle: "Bu yazıda öğrenecekleriniz",
        postListItem1: "Takımınız için sürdürülebilir bir teknoloji yığını seçme yöntemleri.",
        postListItem2: "Daha hızlı UI teslim etmek için bileşen kitaplıklarını nasıl organize edeceğiniz.",
        postListItem3: "Kaliteyi düşürmeden teslim hızını artıran otomasyon teknikleri.",
        postCalloutTitle: "İpucu",
        postCalloutBody:
            "Küçük deneysel projeler, yeni teknolojileri test etmek için mükemmeldir. Öğrendiklerinizi dokümante ederek ekibinizle paylaşın; böylece bilgi tek bir kişide toplanmaz.",
        postTagsHeading: "Etiketler",
        relatedPostsHeading: "İlgili Yazılar",
        breadcrumbHome: "Ana sayfa",
        breadcrumbArticles: "Yazılar",
        post2Title: "Duyarlı Tasarım Sanatı",
        post2Date: "12 Ocak 2025",
        post2ReadingTime: "8 dk okuma",
        post2Excerpt:
            "Tüm cihazlarda kusursuz çalışan güzel ve duyarlı web siteleri oluşturmayı öğrenin. Gelişmiş CSS tekniklerini, grid sistemlerini ve mobil öncelikli yaklaşımı keşfederek projelerinizi bir üst seviyeye taşıyın.",
        post3Title: "TypeScript ile Ölçeklenebilir Uygulamalar",
        post3Date: "8 Ocak 2025",
        post3ReadingTime: "12 dk okuma",
        post3Excerpt:
            "TypeScript'e derinlemesine dalın ve statik tiplerin geliştirme sürecinizi nasıl iyileştireceğini keşfedin. Temel tiplerden ileri desenlere kadar sağlam, bakımı kolay ve büyüyen ekiplerle uyumlu uygulamalar oluşturun.",
        readMore: "Devamını oku",
        webDevelopment: "Web Geliştirme",
        javascript: "JavaScript",
        css: "CSS",
        design: "Tasarım",
        typescript: "TypeScript",
        architecture: "Mimari",
        cookie: "Çerez Politikası",
        privacy: "Gizlilik Politikası",
        footerNote: "Örnek Blog © 2025",
        tagHeroTitle: "Etiket",
        tagHeroHeading: "Web Geliştirme",
        tagHeroDescription:
            "Performanslı ve ölçeklenebilir web uygulamaları oluşturmak isteyen geliştiriciler için rehber notları, vaka analizleri ve modern teknikler.",
        tagHeroStats: "3 makale · Haftalık güncellenir",
        tagHeroCTA: "Bu etiketi takip eden 1.200+ geliştiriciye katıl.",
        tagFilterTitle: "Hızlı filtreler",
        tagFilterDescription: "Bu etiket altındaki trend konular",
        tagPostsHeading: "Öne çıkan yazılar",
        policyLabel: "Politika",
        cookiePageTitle: "Çerez Politikası",
        cookieIntro:
            "Çerezleri, deneyiminizi kişiselleştirmek ve içeriklerimizin performansını anlamak için kullanıyoruz. Bu bölümde hangi verileri neden topladığımızı şeffaf biçimde bulabilirsiniz.",
        cookieUpdated: "Son güncelleme: 10 Ocak 2025",
        cookieEssentialTitle: "Neden çerez kullanıyoruz?",
        cookieEssentialBody:
            "Ziyaretçilerimizin dil tercihi, tema ayarı gibi temel tercihleri hatırlamak için zorunlu çerezler kullanılır. Bu çerezler olmadan site temel işlevlerini yerine getiremez.",
        cookieAnalyticsTitle: "Analitik ve performans çerezleri",
        cookieAnalyticsBody:
            "Hangi sayfaların daha çok ilgi gördüğünü ve kullanıcıların site içinde nasıl ilerlediğini anlamak için anonim analitik çerezleri kullanırız. Bu veriler, yeni içerikleri önceliklendirmemize yardımcı olur.",
        cookieControlTitle: "Tercihlerinizi nasıl yönetebilirsiniz?",
        cookieControlBody:
            "Tarayıcınızın ayarları üzerinden çerezleri silebilir veya engelleyebilirsiniz. Çerezleri devre dışı bırakmanız durumunda bazı özelliklerin beklenmedik biçimde çalışmayabileceğini unutmayın.",
        cookieListItem1: "Tarayıcı ayarlarınızdan çerezleri temizleyebilir veya tamamen engelleyebilirsiniz.",
        cookieListItem2: "Tema ve dil tercihlerinizi kaydetmek için gerekli çerezler her zaman etkin kalır.",
        cookieListItem3: "Analitik çerezleri kabul etmemeniz durumunda raporlarımız anonim kalmaya devam eder.",
        cookieContactTitle: "Sorularınız mı var?",
        cookieContactBody:
            "Çerez politikamız hakkında daha fazla bilgi almak isterseniz hello@example.com adresinden bizimle iletişime geçebilirsiniz.",
        privacyPageTitle: "Gizlilik Politikası",
        privacyIntro:
            "Topladığımız sınırlı verileri, blog deneyiminizi kişiselleştirmek ve topluluk güvenliğini korumak için kullanıyoruz. Verilerinizi nasıl sakladığımızı ve paylaştığımızı aşağıda bulabilirsiniz.",
        privacyUpdated: "Son güncelleme: 10 Ocak 2025",
        privacyDataTitle: "Hangi verileri topluyoruz?",
        privacyDataBody:
            "İletişim formlarını doldurduğunuzda adınız ve e-posta adresiniz gibi temel bilgiler talep edilebilir. İstatistikler için kullandığımız araçlar yalnızca anonim ve toplu veriler üretir.",
        privacyUsageTitle: "Verileri nasıl kullanıyoruz?",
        privacyUsageBody:
            "Geri bildirimlerinizi yanıtlamak, içerikleri geliştirmek ve güvenlik ihlallerini tespit etmek için verileri işleriz. Kişisel bilgilerinizi üçüncü taraflarla satmayız ve paylaşmayız.",
        privacyRightsTitle: "Haklarınız nelerdir?",
        privacyRightsBody:
            "Bilgilerinize erişme, güncelleme veya silme talebinde bulunma hakkına sahipsiniz. Lütfen aşağıdaki listede yer alan seçeneklerden size uygun olanı kullanın.",
        privacyListItem1: "Profil bilgilerinizin bir kopyasını talep edebilirsiniz.",
        privacyListItem2: "E-posta ilettiğinizde, abonelikten istediğiniz zaman çıkabilirsiniz.",
        privacyListItem3: "Verilerin tamamen silinmesini hello@example.com adresine yazarak isteyebilirsiniz.",
        privacyContactTitle: "Veri sorumlusu ile iletişim",
        privacyContactBody:
            "Herhangi bir gizlilik talebi için hello@example.com adresine e-posta gönderebilir veya sosyal medya hesaplarımız üzerinden bize ulaşabilirsiniz.",
    },
    en: {
        siteTitle: "Sample Blog",
        langToggleLabel: "EN",
        themeToggleLabel: "Toggle theme",
        post1Title: "Getting Started with Modern Web Development",
        post1Date: "January 15, 2025",
        post1ReadingTime: "5 min read",
        post1Excerpt:
            "Discover the essential tools and frameworks that are shaping modern web development. From responsive design principles to the latest JavaScript frameworks, this comprehensive guide will help you navigate the ever-evolving landscape of web technologies.",
        postHeroSubtitle:
            "A comprehensive primer to help you understand modern tooling without the overwhelm.",
        postHeroAuthor: "Author: Ayşe Demir",
        postHeroUpdated: "Updated: January 20, 2025",
        postHeroFigureLabel: "Workshop Notes",
        postHeroFigureText:
            '"A great developer knows how to pick the right tool at the right time."',
        postSection1Title: "1. Lay the Right Foundation",
        postSection2Title: "2. Stay Consistent with Design Systems",
        postSection3Title: "3. Accelerate with Automation",
        postParagraph1:
            "Clarifying your needs before writing a single line of code is critical for long-term success. Decisions around design systems, package managers, and testing strategies reduce friction as your product scales.",
        postParagraph2:
            "Teams often jump into building immediately. Establishing sensible standards speeds up code reviews, simplifies knowledge sharing, and significantly shortens onboarding time for new members.",
        postParagraph3:
            "Keeping UI components centralized and reusable boosts consistency across the product. A shared design language makes the experience predictable for users and maintainers alike.",
        postParagraph4:
            "CI/CD is only the starting line. Layering linting, type checking, and visual regression testing lets you ship to production with confidence.",
        postListTitle: "What you'll learn",
        postListItem1: "How to choose a sustainable technology stack for your team.",
        postListItem2: "Ways to organize component libraries for faster UI delivery.",
        postListItem3: "Automation practices that increase velocity without hurting quality.",
        postCalloutTitle: "Tip",
        postCalloutBody:
            "Small experimental projects are perfect for trying new tech. Document what you learn and share it broadly so knowledge never bottlenecks on one person.",
        postTagsHeading: "Tags",
        relatedPostsHeading: "Related articles",
        breadcrumbHome: "Home",
        breadcrumbArticles: "Articles",
        post2Title: "The Art of Responsive Design",
        post2Date: "January 12, 2025",
        post2ReadingTime: "8 min read",
        post2Excerpt:
            "Learn how to create beautiful, responsive websites that work seamlessly across all devices. Explore advanced CSS techniques, grid systems, and mobile-first design principles that will elevate your web projects to the next level.",
        post3Title: "Building Scalable Applications with TypeScript",
        post3Date: "January 8, 2025",
        post3ReadingTime: "12 min read",
        post3Excerpt:
            "Dive deep into TypeScript and discover how static typing can improve your development workflow. From basic types to advanced patterns, learn how to build robust, maintainable applications that scale with your team and project requirements.",
        readMore: "Read more",
        webDevelopment: "Web Development",
        javascript: "JavaScript",
        css: "CSS",
        design: "Design",
        typescript: "TypeScript",
        architecture: "Architecture",
        cookie: "Cookie Policy",
        privacy: "Privacy Policy",
        footerNote: "Sample Blog © 2025",
        tagHeroTitle: "Tag",
        tagHeroHeading: "Web Development",
        tagHeroDescription:
            "Guides, case studies, and modern techniques for building performant, scalable web applications.",
        tagHeroStats: "3 articles · Updated weekly",
        tagHeroCTA: "Join 1,200+ developers following this tag.",
        tagFilterTitle: "Quick filters",
        tagFilterDescription: "Trending topics for this tag",
        tagPostsHeading: "Featured articles",
        policyLabel: "Policy",
        cookiePageTitle: "Cookie Policy",
        cookieIntro:
            "We use cookies to personalize your experience and understand how our content performs. Below you can see what data we collect and why.",
        cookieUpdated: "Last updated: January 10, 2025",
        cookieEssentialTitle: "Why do we use cookies?",
        cookieEssentialBody:
            "Essential cookies remember basics such as your language and theme preferences. Without them, the site cannot deliver its core functionality.",
        cookieAnalyticsTitle: "Analytics and performance cookies",
        cookieAnalyticsBody:
            "Anonymous analytics cookies show which pages get attention and how people move through the site. These insights help us prioritize future content.",
        cookieControlTitle: "How can you control cookies?",
        cookieControlBody:
            "You can clear or block cookies via your browser settings. Keep in mind that some features may not behave as expected if you disable cookies entirely.",
        cookieListItem1: "Use your browser settings to delete or block cookies whenever you prefer.",
        cookieListItem2: "Essential cookies stay enabled so we can remember your theme and language selections.",
        cookieListItem3: "Declining analytics cookies keeps our reports anonymous but still functional.",
        cookieContactTitle: "Have questions?",
        cookieContactBody:
            "Email us at hello@example.com if you need more information about how we use cookies.",
        privacyPageTitle: "Privacy Policy",
        privacyIntro:
            "We collect minimal data to personalize the blog experience and keep the community secure. Learn how we store and share that information below.",
        privacyUpdated: "Last updated: January 10, 2025",
        privacyDataTitle: "What data do we collect?",
        privacyDataBody:
            "When you fill out contact forms we may ask for basic details such as your name and email. Analytics tools we use only produce aggregated, anonymous statistics.",
        privacyUsageTitle: "How do we use the data?",
        privacyUsageBody:
            "We process information to respond to feedback, improve content, and detect security issues. We never sell or trade your personal information.",
        privacyRightsTitle: "What are your rights?",
        privacyRightsBody:
            "You may request access, updates, or deletion of your data at any time. Choose one of the options below to exercise your rights.",
        privacyListItem1: "Ask for a copy of the profile information you shared with us.",
        privacyListItem2: "Unsubscribe from email updates whenever you no longer wish to hear from us.",
        privacyListItem3: "Request complete deletion by emailing hello@example.com.",
        privacyContactTitle: "Contact the data controller",
        privacyContactBody:
            "Reach us at hello@example.com or via our social channels for any privacy-related request.",
    },
};

document.addEventListener("click", (event) => {
    const themeToggle = event.target.closest("[data-theme-toggle]");
    if (themeToggle) {
        const nextTheme = html.classList.contains("dark") ? "light" : "dark";
        setTheme(nextTheme);
        return;
    }

    const langToggle = event.target.closest("[data-lang-toggle]");
    if (langToggle) {
        const current = html.getAttribute("lang") || DEFAULT_LANG;
        const next = current === "tr" ? "en" : "tr";
        setLang(next, { redirect: true });
        return;
    }

    const shareTrigger = event.target.closest("[data-share-network]");
    if (shareTrigger) {
        event.preventDefault();
        handleShareClick(shareTrigger);
        return;
    }

    const copyTrigger = event.target.closest("[data-copy-link]");
    if (copyTrigger) {
        event.preventDefault();
        handleCopyLink(copyTrigger);
        return;
    }
});

function applyTheme(theme) {
    const isDark = theme === "dark";
    html.classList.toggle("dark", isDark);
    if (themeToggleButton) {
        themeToggleButton.setAttribute("aria-pressed", String(isDark));
    }
}

function resolveTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") {
        return stored;
    }
    return prefersDark.matches ? "dark" : "light";
}

function setTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
}

function getLangDatasetKey(lang) {
    if (!lang) {
        return "";
    }
    return `lang${lang.charAt(0).toUpperCase()}${lang.slice(1)}`;
}

function normalizeLangUrl(url) {
    if (!url) {
        return "";
    }
    const trimmed = url.trim();
    if (!trimmed) {
        return "";
    }

    const siteBase = (html.dataset.siteBase || "").replace(/\/+$/, "");
    if (siteBase && trimmed.startsWith(siteBase)) {
        const relative = trimmed.slice(siteBase.length) || "/";
        return relative.startsWith("/") ? relative : `/${relative}`;
    }

    return trimmed;
}

function redirectToLangPage(lang) {
    const datasetKey = getLangDatasetKey(lang);
    if (!datasetKey) {
        return;
    }
    const rawTarget = html.dataset[datasetKey];
    const normalizedTarget = normalizeLangUrl(rawTarget);
    if (!normalizedTarget) {
        return;
    }
    const finalUrl = new URL(normalizedTarget, window.location.origin).href;
    if (finalUrl !== window.location.href) {
        window.location.assign(finalUrl);
    }
}

function setLang(lang, options = {}) {
    const shouldRedirect = Boolean(options.redirect);
    const safeLang = translations[lang] ? lang : DEFAULT_LANG;
    localStorage.setItem(LANG_KEY, safeLang);
    html.setAttribute("lang", safeLang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        const translation = translations[safeLang][key];
        if (translation) {
            el.textContent = translation;
        }
    });

    if (shouldRedirect) {
        redirectToLangPage(safeLang);
    }
}

function handleShareClick(element) {
    const network = element.dataset.shareNetwork;
    if (!network) {
        return;
    }

    const shareTitle = element.dataset.shareTitle || document.title;
    const shareUrl = element.dataset.shareUrl || window.location.href;
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedUrl = encodeURIComponent(shareUrl);
    let targetUrl = "";

    switch (network) {
        case "whatsapp":
            targetUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
            break;
        case "x":
            targetUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
            break;
        case "linkedin":
            targetUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
            break;
        case "facebook":
            targetUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
            break;
        default:
            break;
    }

    if (targetUrl) {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
}

function copyTextToClipboard(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        return navigator.clipboard.writeText(text);
    }

    return new Promise((resolve, reject) => {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand("copy");
            resolve();
        } catch (error) {
            reject(error);
        } finally {
            document.body.removeChild(textarea);
        }
    });
}

function handleCopyLink(button) {
    const targetUrl = button.dataset.copyUrl || window.location.href;
    const defaultLabel = button.dataset.copyLabel || button.textContent || "";
    const successLabel = button.dataset.copySuccess || defaultLabel;

    copyTextToClipboard(targetUrl)
        .then(() => {
            button.dataset.copyState = "copied";
            button.textContent = successLabel;
            setTimeout(() => {
                button.dataset.copyState = "";
                button.textContent = defaultLabel;
            }, 2000);
        })
        .catch(() => {
            button.dataset.copyState = "";
        });
}

(function init() {
    applyTheme(resolveTheme());
    setLang(localStorage.getItem(LANG_KEY) || DEFAULT_LANG, { redirect: false });

    const handleSchemeChange = (event) => {
        if (!localStorage.getItem(THEME_KEY)) {
            applyTheme(event.matches ? "dark" : "light");
        }
    };

    if (typeof prefersDark.addEventListener === "function") {
        prefersDark.addEventListener("change", handleSchemeChange);
    } else if (typeof prefersDark.addListener === "function") {
        prefersDark.addListener(handleSchemeChange);
    }
})();
