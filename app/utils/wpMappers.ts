// --- TYPES ---
// Une interface minimale pour arrêter de deviner
interface WpBlock {
    __typename: string;

    [key: string]: any;
}

interface MapContext {
    globalData?: any;
    acfOptions?: any;
}

// --- UTILITAIRES ---

const normalizeSelect = (value: any) => {
    // ACF retourne parfois un objet { value, label } si configuré en "Return Object"
    if (value && typeof value === 'object' && !Array.isArray(value)) {
        return value.value;
    }
    if (Array.isArray(value)) {
        return value[0] || undefined;
    }
    return value;
};

// Sécurise les tableaux pour éviter le crash "map of null"
const safeArray = (arr: any): any[] => Array.isArray(arr) ? arr : [];

// CORRECTION HYDRATATION DATE
const formatDateToMonthYear = (dateString: string): string => {
    if (!dateString) return '';
    // On force le format YYYY-MM-DD sans heure pour éviter les décalages UTC/Local
    // On ajoute une heure fixe à midi pour être sûr de tomber le bon jour
    const date = new Date(`${dateString}T12:00:00`);

    if (isNaN(date.getTime())) return dateString;

    try {
        const formatted = new Intl.DateTimeFormat('fr-FR', {
            month: 'long',
            year: 'numeric'
        }).format(date);
        return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    } catch (e) {
        return dateString;
    }
};

const GRID_STYLES: Record<string, string> = {
    'standard': '',
    'big_square': 'md:col-span-2 md:row-span-2',
    'wide': 'md:col-span-2',
    'tall': 'md:row-span-2'
};

// --- MAPPERS ---

export const mapHero = (wpData: any) => {
    return {
        variant: normalizeSelect(wpData.variant) || 'home',
        title: wpData.title || '',
        subtitle: wpData.subtitle || '',
        breadcrumb: wpData.breadcrumb || '',
        imageSrc: wpData.image?.node?.sourceUrl || '',
        imageAlt: wpData.image?.node?.altText || wpData.title || 'Image',
        imageWidth: wpData.image?.node?.mediaDetails?.width,
        imageHeight: wpData.image?.node?.mediaDetails?.height,
        tags: safeArray(wpData.tags).map((item: any) => item.tagText || ''),
        primaryAction: wpData.primaryAction?.label ? {
            label: wpData.primaryAction.label,
            href: wpData.primaryAction.href || '#',
            variant: normalizeSelect(wpData.primaryAction.variant) || 'solid',
            icon: wpData.primaryAction.icon
        } : undefined,
        secondaryAction: wpData.secondaryAction?.label ? {
            label: wpData.secondaryAction.label,
            href: wpData.secondaryAction.href || '#',
            variant: normalizeSelect(wpData.secondaryAction.variant) || 'glass',
            icon: wpData.secondaryAction.icon
        } : undefined
    };
};

export const mapCategoryGrid = (data: any) => {
    return {
        title: data.title || '',
        subtitle: data.subtitle || '',
        ctaText: data.ctaText || '',
        ctaLink: data.ctaLink?.url || data.ctaLink || '#',
        categories: safeArray(data.categories).map((cat: any) => {
            const styleKey = normalizeSelect(cat.layoutStyle) || 'standard';
            return {
                title: cat.title || '',
                description: cat.description || '',
                image: cat.image?.node?.sourceUrl || '',
                href: cat.link?.url || '#',
                gridClasses: GRID_STYLES[styleKey] || ''
            };
        })
    };
};

export const mapTrustBar = (data: any) => {
    return {
        features: safeArray(data.features).map((item: any) => ({
            icon: item.icon || 'lucide:check',
            title: item.title || '',
            description: item.description || ''
        }))
    };
};

export const mapTransportSection = (data: any) => {
    return {
        badge: data.badge || 'Service',
        title: data.title || '',
        description: data.content || '',
        imageSrc: data.image?.node?.sourceUrl || '/camion.png',
        imageAlt: data.image?.node?.altText || data.title || 'Transport',
        imageWidth: data.image?.node?.mediaDetails?.width || 820,
        imageHeight: data.image?.node?.mediaDetails?.height || 590,
        services: safeArray(data.services).map((s: any) => ({
            icon: s.icon || 'lucide:box',
            title: s.title || '',
            description: s.description || ''
        })),
        cta: data.cta ? {
            label: data.cta.title || 'En savoir plus',
            href: data.cta.url || '#',
            target: data.cta.target || '_self'
        } : null
    };
};

export const mapLocalSection = (block: any, globalData: any) => {
    const infos = globalData?.settings?.informationsDeLEntreprise || {};
    const phoneRaw = infos.phone || '';
    // Normaliser le numéro : retirer espaces, et ajouter +262 si absent
    let normalizedPhone = phoneRaw.replace(/\s+/g, '');
    if (normalizedPhone && !normalizedPhone.startsWith('+')) {
        normalizedPhone = `+262${normalizedPhone}`;
    }
    const phoneHref = normalizedPhone ? `tel:${normalizedPhone}` : '';

    return {
        title: block.title || '',
        address: infos.address || '',
        phoneDisplay: infos.phone || '',
        phoneHref: phoneHref,
        hours: safeArray(infos.openingHours).map((h: any) => ({
            label: h.label || '',
            value: h.value || '',
            isClosed: h.isClosed || false
        }))
    };
};

const mapClientsReviews = (block: any) => {
    return {
        title: block.title || 'Avis vérifiés de nos clients',
        subtitle: block.subtitle || '',
        items: safeArray(block.reviews).map((review: any, index: number) => ({
            id: index,
            author: review.author || 'Anonyme',
            role: review.role || '',
            content: review.content || '',
            date: review.date || '',
            rating: Number(review.rating) || 5
        }))
    };
};

const mapCatalogue = (block: any, globalCatalogs: any[] = []) => {
    const fields = block || {};
    const mode = normalizeSelect(fields.modeAffichage);

    // Sécurité sur globalCatalogs
    const sourceCatalogs = safeArray(globalCatalogs);

    let formattedCatalogs = sourceCatalogs.map((item: any) => ({
        title: item.titre || '',
        description: item.description || '',
        image: item.image?.node?.sourceUrl || '',
        pdfUrl: item.fichierPdf?.node?.mediaItemUrl || '#',
        date: formatDateToMonthYear(item.date),
        badge: item.badge || null,
    }));

    if (mode === 'latest') {
        formattedCatalogs = formattedCatalogs.slice(0, 3);
    }

    return {
        title: fields.titreSection || 'Nos catalogues',
        subtitle: fields.sousTitre || '',
        catalogs: formattedCatalogs
    };
};

export const mapCta = (block: any) => {
    const link = block.bouton || {};
    const image = block.imageArrierePlan?.node;

    return {
        title: block.titre || 'Un projet ?',
        description: block.description || '',
        imageSrc: image?.sourceUrl || '/cta.png',
        imageAlt: image?.altText || block.titre || '',
        imageWidth: image?.node?.mediaDetails?.width || 1408,
        imageHeight: image?.node?.mediaDetails?.height || 736,
        ctaLabel: link.title || 'Contact',
        ctaLink: link.url || '/contact',
        ctaIcon: block.icone || 'lucide:arrow-right'
    };
};

const mapFaq = (block: any) => {
    return {
        title: block.titreSection || 'FAQ',
        subtitle: block.sousTitre || '',
        items: safeArray(block.faqItems).map((item: any) => ({
            question: item.question || '',
            answer: item.reponse || ''
        }))
    };
};

const mapCategories = (block: any) => {
    return {
        title: block.title || '',
        subtitle: block.subtitle || '',
        categories: safeArray(block.categoryCards).map((cat: any) => ({
            title: cat.title || '',
            description: cat.description || '',
            icon: cat.icon || ''
        }))
    };
};

export const mapReassurance = (block: any) => {
    const pillars = safeArray(block.pillars).map((pillar: any) => ({
        title: pillar.title || '',
        description: pillar.description || '',
        icon: pillar.icon || undefined,
    }));

    let cta = undefined;
    if (block.footerGroup?.ctaLink) {
        cta = {
            text: block.footerGroup.ctaLink.title || 'En savoir plus',
            to: block.footerGroup.ctaLink.url || '#',
        };
    }

    return {
        title: block.title || '',
        intro: block.intro || '',
        pillars,
        cta,
        header: block.footerGroup?.sectionTitle ? {title: block.footerGroup.sectionTitle} : undefined,
    };
};

const mapEquipe = (block: any) => {
    return {
        title: block.title || "L'équipe",
        subtitle: block.subtitle || '',
        teamMembers: safeArray(block.members).map((member: any, index: number) => ({
            id: index + 1,
            name: member.name || '',
            role: member.role || '',
            quote: member.quote || '',
            image: member.image?.node?.sourceUrl || '',
            focalPoint: member.focalPoint || undefined
        }))
    };
};

const mapFormulaire = (block: any) => {
    const parseOptions = (str: any) => {
        if (typeof str !== 'string') return [];
        return str.split(',').map(item => item.trim()).filter(Boolean);
    };

    return {
        title: block.title || 'Contact',
        subtitle: block.subtitle || '',
        customerTypeOptions: parseOptions(block.customerTypeOptions).length ? parseOptions(block.customerTypeOptions) : ['Professionnel', 'Particulier'],
        subjectOptions: parseOptions(block.subjectOptions).length ? parseOptions(block.subjectOptions) : ['Devis', 'Autre'],
        rgpdText: block.rgpdText || '',
        submitButtonText: block.submitButtonText || 'Envoyer'
    };
};

// --- MAPPERS MENU & GLOBAL ---

export const mapMenu = (menuData: any) => {
    // node.menuItems.nodes est la structure standard WPGraphQL pour les menus
    const items = menuData?.menuItems?.nodes || [];
    return items.map((item: any) => ({
        name: item.label || '',
        to: item.uri || '#', // Attention: WP peut renvoyer l'URL absolue ici, il faudra peut-être la nettoyer si tu veux du routing interne propre
        target: item.target || null
    }));
};

export const mapGlobalData = (data: any) => {
    if (!data) return {menuItems: [], settings: {}};

    return {
        menuItems: mapMenu(data.menu || {}),
        settings: data.companySettings || {}
    };
};


// --- ROUTER DE BLOCS PRINCIPAL ---

// Mapping des __typename WPGraphQL vers nos Noms de Composants Vue
// C'est ici qu'on gère la correspondance "Laide" -> "Propre"
const TYPE_TO_COMPONENT: Record<string, string> = {
    'PageBuilderFlexContentHeroLayoutLayout': 'HeroSection',
    'PageBuilderFlexContentCategoryGridLayoutLayout': 'CategoryGrid',
    'PageBuilderFlexContentCategoriesLayoutLayout': 'Categories',
    'PageBuilderFlexContentTrustBarLayoutLayout': 'TrustBar',
    'PageBuilderFlexContentTransportSectionLayoutLayout': 'TransportSection',
    'PageBuilderFlexContentLocalSectionLayoutLayout': 'LocalSection',
    'PageBuilderFlexContentClientsReviewsLayoutLayout': 'ClientsReviews',
    'PageBuilderFlexContentCatalogueLayoutLayout': 'Catalogue',
    'PageBuilderFlexContentCtaLayoutLayout': 'CtaSection',
    'PageBuilderFlexContentFaqLayoutLayout': 'FaqSection',
    'PageBuilderFlexContentReassuranceLayoutLayout': 'Reassurance',
    'PageBuilderFlexContentEquipeLayoutLayout': 'Equipe',
    'PageBuilderFlexContentFormulaireLayoutLayout': 'Formulaire'
};

export const mapPageBuilder = (blocks: any[], globalData: any = null, acfOptions: any = {}) => {
    if (!blocks) return [];

    // Récupération sécurisée des catalogues globaux
    const globalCatalogs = acfOptions?.optionsCatalogues?.cataloguesList || [];

    return blocks.map((block: WpBlock, index: number) => {
        const typeName = block.__typename;
        const componentName = TYPE_TO_COMPONENT[typeName];

        if (!componentName) {
            if (process.dev) {
                console.warn(`[Mapper] Bloc ignoré : ${typeName}`);
            }
            return null;
        }

        // Switch case simplifié car on a déjà résolu le nom du composant
        let props = {};

        try {
            switch (componentName) {
                case 'HeroSection':
                    props = mapHero(block);
                    break;
                case 'CategoryGrid':
                    props = mapCategoryGrid(block);
                    break;
                case 'Categories':
                    props = mapCategories(block);
                    break;
                case 'TrustBar':
                    props = mapTrustBar(block);
                    break;
                case 'TransportSection':
                    props = mapTransportSection(block);
                    break;
                case 'LocalSection':
                    props = mapLocalSection(block, globalData);
                    break;
                case 'ClientsReviews':
                    props = mapClientsReviews(block);
                    break;
                case 'Catalogue':
                    props = mapCatalogue(block, globalCatalogs);
                    break;
                case 'CtaSection':
                    props = mapCta(block);
                    break;
                case 'FaqSection':
                    props = mapFaq(block);
                    break;
                case 'Reassurance':
                    props = mapReassurance(block);
                    break;
                case 'Equipe':
                    props = mapEquipe(block);
                    break;
                case 'Formulaire':
                    props = mapFormulaire(block);
                    break;
                default:
                    return null;
            }
        } catch (error) {
            console.error(`[Mapper] Erreur lors du mapping du bloc ${componentName} à l'index ${index}`, error);
            return null; // Si un bloc plante, on ne tue pas toute la page
        }

        return {
            id: index, // Utile pour la clé :key dans le v-for
            component: componentName,
            props
        };

    }).filter(Boolean); // On retire les nulls (blocs inconnus ou plantés)
};