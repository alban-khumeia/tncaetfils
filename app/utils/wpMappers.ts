// 1. LE GARDE DU CORPS
const normalizeSelect = (value: any) => {
    if (Array.isArray(value)) {
        return value[0] || undefined;
    }
    return value;
};

const GRID_STYLES: Record<string, string> = {
    'standard': '',
    'big_square': 'md:col-span-2 md:row-span-2',
    'wide': 'md:col-span-2',
    'tall': 'md:row-span-2'
};

const formatDateToMonthYear = (dateString: string): string => {
    if (!dateString) return '';

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    const formatted = new Intl.DateTimeFormat('fr-FR', {
        month: 'long',
        year: 'numeric'
    }).format(date);

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

// 2. MAPPERS INDIVIDUELS
export const mapHero = (wpData: any) => {
    return {
        variant: normalizeSelect(wpData.variant) || 'home',
        title: wpData.title,
        subtitle: wpData.subtitle,
        breadcrumb: wpData.breadcrumb,
        imageSrc: wpData.image?.node?.sourceUrl || '',
        imageAlt: wpData.image?.node?.altText || wpData.title,
        tags: wpData.tags ? wpData.tags.map((item: any) => item.tagText) : [],
        primaryAction: wpData.primaryAction?.label ? {
            label: wpData.primaryAction.label,
            href: wpData.primaryAction.href,
            variant: normalizeSelect(wpData.primaryAction.variant) || 'solid',
            icon: wpData.primaryAction.icon
        } : undefined,
        secondaryAction: wpData.secondaryAction?.label ? {
            label: wpData.secondaryAction.label,
            href: wpData.secondaryAction.href,
            variant: normalizeSelect(wpData.secondaryAction.variant) || 'glass',
            icon: wpData.secondaryAction.icon
        } : undefined
    };
};

export const mapCategoryGrid = (data: any) => {
    return {
        title: data.title,
        subtitle: data.subtitle,
        ctaText: data.ctaText,
        ctaLink: data.ctaLink?.url || data.ctaLink || '#',
        categories: data.categories ? data.categories.map((cat: any) => {
            const styleKey = normalizeSelect(cat.layoutStyle) || 'standard';
            return {
                title: cat.title,
                description: cat.description,
                image: cat.image?.node?.sourceUrl,
                href: cat.link?.url || '#',
                gridClasses: GRID_STYLES[styleKey] || ''
            };
        }) : []
    };
};

export const mapTrustBar = (data: any) => {
    const features = data.features ? data.features.map((item: any) => ({
        icon: item.icon || 'lucide:check',
        title: item.title || '',
        description: item.description || ''
    })) : [];

    return {
        features
    };
};

export const mapTransportSection = (data: any) => {
    return {
        badge: data.badge || 'Service',
        title: data.title || '',
        description: data.content || '',
        imageSrc: data.image?.node?.sourceUrl || '/camion.png',
        imageAlt: data.image?.node?.altText || data.title || 'Transport',
        services: data.services ? data.services.map((s: any) => ({
            icon: s.icon || 'lucide:box',
            title: s.title,
            description: s.description
        })) : [],
        cta: data.cta ? {
            label: data.cta.title,
            href: data.cta.url,
            target: data.cta.target
        } : null
    };
};

export const mapLocalSection = (block: any, globalData: any) => {
    const infos = globalData?.informationsDeLEntreprise || {};
    const phoneRaw = infos.phone || '';
    const phoneHref = `tel:${phoneRaw.replace(/\s+/g, '')}`;

    return {
        title: block.title || undefined,
        address: infos.address || '',
        phoneDisplay: infos.phone || '',
        phoneHref: phoneHref,
        hours: infos.openingHours ? infos.openingHours.map((h: any) => ({
            label: h.label,
            value: h.value,
            isClosed: h.isClosed || false
        })) : []
    };
};

const mapClientsReviews = (block: any) => {
    return {
        title: block.title || 'Avis vérifiés de nos clients',
        subtitle: block.subtitle || '',
        items: Array.isArray(block.reviews)
            ? block.reviews.map((review: any, index: number) => ({
                id: index,
                author: review.author || 'Anonyme',
                role: review.role || '',
                content: review.content || '',
                date: review.date || '',
                rating: Number(review.rating) || 5
            }))
            : []
    };
};

const mapCatalogue = (block: any, globalCatalogs: any[] = []) => {
    const fields = block || {};
    const mode = normalizeSelect(fields.modeAffichage);

    let formattedCatalogs = globalCatalogs.map((item: any) => ({
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

const mapCta = (block: any) => {
    const link = block.bouton || {};
    const image = block.imageArrierePlan?.node;

    return {
        title: block.titre || 'Un projet ?',
        description: block.description || '',

        imageSrc: image?.sourceUrl || undefined,
        imageAlt: image?.altText || block.titre,

        ctaLabel: link.title || 'En savoir plus',
        ctaLink: link.url || '#',

        ctaIcon: block.icone || undefined
    };
};

const mapFaq = (block: any) => {
    return {
        title: block.titreSection || 'Foire aux questions',
        subtitle: block.sousTitre || '',
        items: (block.faqItems || []).map((item: any) => ({
            question: item.question || '',
            answer: item.reponse || ''
        }))
    };
};

export const mapMenu = (menuData: any) => {
    const items = menuData?.menuItems?.nodes || [];

    return items.map((item: any) => ({
        name: item.label || '',
        to: item.uri || '#',
        target: item.target || null
    }));
};

export const mapGlobalData = (data: any) => {
    if (!data) return {menuItems: [], settings: {}};

    return {
        // 1. Le Menu
        menuItems: mapMenu(data.menu),
        settings: data.companySettings || {}
    };
};

const mapCategories = (block: any) => {
    return {
        title: block.title || '',
        subtitle: block.subtitle || undefined,
        categories: Array.isArray(block.categoryCards)
            ? block.categoryCards.map((cat: any) => ({
                title: cat.title || '',
                description: cat.description || '',
                icon: cat.icon || ''
            }))
            : []
    };
};

export const mapReassurance = (block: any) => {
    const pillars = block.pillars?.map((pillar: any) => ({
        title: pillar.title || '',
        description: pillar.description || '',
        icon: pillar.icon || undefined,
    })) || [];

    // Gestion du CTA optionnel
    let cta = undefined;
    if (block.footerGroup?.ctaLink) {
        cta = {
            text: block.footerGroup.ctaLink.title || 'En savoir plus',
            to: block.footerGroup.ctaLink.url || '#',
        };
    }

    // Gestion du Header secondaire optionnel
    let header = undefined;
    if (block.footerGroup?.sectionTitle) {
        header = {
            title: block.footerGroup.sectionTitle,
        };
    }

    return {
        title: block.title || '',
        intro: block.intro || '',
        pillars,
        cta,
        header,
    };
};

const mapEquipe = (block: any) => {
    return {
        title: block.title || "L'équipe terrain.",
        subtitle: block.subtitle || '',
        teamMembers: Array.isArray(block.members)
            ? block.members.map((member: any, index: number) => ({
                id: index + 1,
                name: member.name || '',
                role: member.role || '',
                quote: member.quote || '',
                image: member.image?.node?.sourceUrl || '',
                focalPoint: member.focalPoint || undefined
            }))
            : []
    };
};

const mapFormulaire = (block: any) => {
    // Convertir les strings séparées par des virgules en tableaux
    const parseOptions = (str: string) => {
        if (!str) return [];
        return str.split(',').map(item => item.trim()).filter(Boolean);
    };

    return {
        title: block.title || 'Pour un devis ou une demande écrite',
        subtitle: block.subtitle || 'Remplissez ce formulaire, nous vous répondons sous 24h ouvrées.',
        customerTypeOptions: parseOptions(block.customerTypeOptions) || ['Un professionnel', 'Un particulier', 'Une collectivité'],
        subjectOptions: parseOptions(block.subjectOptions) || ['Demande de devis Quincaillerie', 'Demande de devis Transport', 'Question sur un produit / stock', 'Autre...'],
        rgpdText: block.rgpdText || 'J\'accepte que mes données soient stockées et traitées pour répondre à ma demande.',
        submitButtonText: block.submitButtonText || 'Envoyer ma demande'
    };
};

// 3. FONCTION PRINCIPALE (ROUTER DE BLOCS)
export const mapPageBuilder = (blocks: any[], globalData: any = null, acfOptions: any = {}) => {
    if (!blocks) return [];

    const globalCatalogs = acfOptions?.optionsCatalogues?.cataloguesList || [];

    return blocks.map((block: any, index: number) => {
        const type = block.__typename || '';

        // DEBUG : Décommente cette ligne si un bloc ne s'affiche pas pour voir son VRAI nom
        //console.log(`Bloc ${index}:`, type);

        switch (type) {
            // 1. Hero
            case 'PageBuilderFlexContentHeroLayoutLayout':
                return {
                    component: 'HeroSection',
                    props: mapHero(block)
                };

            // 2. Category Grid (L'ancien)
            case 'PageBuilderFlexContentCategoryGridLayoutLayout':
                return {
                    component: 'CategoryGrid',
                    props: mapCategoryGrid(block)
                };

            // 3. Categories
            case 'PageBuilderFlexContentCategoriesLayoutLayout':
                return {
                    component: 'Categories',
                    props: mapCategories(block)
                };

            // 4. Trust Bar
            case 'PageBuilderFlexContentTrustBarLayoutLayout':
                return {
                    component: 'TrustBar',
                    props: mapTrustBar(block)
                };

            // 5. Transport Section
            case 'PageBuilderFlexContentTransportSectionLayoutLayout':
                return {
                    component: 'TransportSection',
                    props: mapTransportSection(block)
                };

            // 6. Local / Contact
            case 'PageBuilderFlexContentLocalSectionLayoutLayout':
                return {
                    component: 'LocalSection',
                    props: mapLocalSection(block, globalData)
                };

            // 7. Clients Reviews
            case 'PageBuilderFlexContentClientsReviewsLayoutLayout':
                return {
                    component: 'ClientsReviews',
                    props: mapClientsReviews(block)
                };

            // 8. Catalogue
            case 'PageBuilderFlexContentCatalogueLayoutLayout':
                return {
                    component: 'Catalogue',
                    props: mapCatalogue(block, globalCatalogs),
                };

            // 9. CTA
            case 'PageBuilderFlexContentCtaLayoutLayout':
                return {
                    component: 'CtaSection',
                    props: mapCta(block)
                };

            // 10. FAQ
            case 'PageBuilderFlexContentFaqLayoutLayout':
                return {
                    component: 'FaqSection',
                    props: mapFaq(block)
                };

            //11. Reassurance
            case 'PageBuilderFlexContentReassuranceLayoutLayout':
                return {
                    component: 'Reassurance',
                    props: mapReassurance(block),
                };

            //12. Équipe
            case 'PageBuilderFlexContentEquipeLayoutLayout':
                return {
                    component: 'Equipe',
                    props: mapEquipe(block),
                };

            //13. Formulaire
            case 'PageBuilderFlexContentFormulaireLayoutLayout':
                return {
                    component: 'Formulaire',
                    props: mapFormulaire(block),
                };

            default:
                console.warn(`[Mapper] Bloc inconnu ou non mappé : "${type}"`);
                return null;
        }
    }).filter(Boolean);
};