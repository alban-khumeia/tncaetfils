export const HERO_FRAGMENT = `
  fragment HeroFragment on PageBuilderFlexContentHeroLayoutLayout {
    variant
    title
    subtitle
    breadcrumb
    image {
      node {
        sourceUrl
        altText
      }
    }
    tags {
      tagText
    }
    primaryAction {
      label
      href
      variant
      icon
    }
    secondaryAction {
      label
      href
      variant
      icon
    }
  }
`;

export const CATEGORY_GRID_FRAGMENT = `
  fragment CategoryGridFragment on PageBuilderFlexContentCategoryGridLayoutLayout {
    title
    subtitle
    ctaText
    ctaLink
    categories {
      title
      description
      layoutStyle 
      image {
        node {
          sourceUrl
          altText
        }
      }
      link {
        url
        title
        target
      } 
    }
  }
`;

export const TRUST_BAR_FRAGMENT = `
  fragment TrustBarFragment on PageBuilderFlexContentTrustBarLayoutLayout {
    features {
      icon
      title
      description
    }
  }
`;

export const TRANSPORT_SECTION_FRAGMENT = `
  fragment TransportSectionFragment on PageBuilderFlexContentTransportSectionLayoutLayout {
    badge
    title
    content
    image {
      node {
        sourceUrl
        altText
      }
    }
    services {
      icon
      title
      description
    }
    cta {
      url
      title
      target
    }
  }
`;

export const LOCAL_SECTION_FRAGMENT = `
  fragment LocalSectionFragment on PageBuilderFlexContentLocalSectionLayoutLayout {
    title 
  }
`;

export const COMPANY_SETTINGS_FRAGMENT = `
  fragment CompanySettingsFragment on CompanySettings {
    informationsDeLEntreprise { 
      address
      phone
      openingHours {
        label
        value
        isClosed
      }
    }
  }
`;

export const CLIENTS_REVIEWS_FRAGMENT = `
  fragment ClientsReviewsFragment on PageBuilderFlexContentClientsReviewsLayoutLayout {
    title
    subtitle
    reviews {
      author
      role
      content
      date
      rating
    }
  }
`;

export const CATALOG_ITEM_FRAGMENT = `
  fragment CatalogItemFragment on OptionsCataloguesCataloguesList {
    titre
    description
    date
    badge
    image {
      node {
        sourceUrl
        altText
      }
    }
    fichierPdf {
      node {
        mediaItemUrl
      }
    }
  }
`;

export const CATALOGUE_LAYOUT_FRAGMENT = `
  fragment CatalogueLayoutFragment on PageBuilderFlexContentCatalogueLayoutLayout {
    titreSection
    sousTitre
    modeAffichage
  }
`;

export const CTA_LAYOUT_FRAGMENT = `
  fragment CtaLayoutFragment on PageBuilderFlexContentCtaLayoutLayout {
    titre
    description
    icone
    imageArrierePlan {
      node {
        sourceUrl
        altText
      }
    }
    bouton {
      url
      title
      target
    }
  }
`;

export const FAQ_LAYOUT_FRAGMENT = `
  fragment FaqLayoutFragment on PageBuilderFlexContentFaqLayoutLayout {
    titreSection
    sousTitre
    faqItems {
      question
      reponse
    }
  }
`;

export const MENU_FRAGMENT = `
  fragment MenuFragment on Menu {
    menuItems(first: 20) {
      nodes {
        label
        uri
        target
        cssClasses
      }
    }
  }
`;

export const CATEGORIES_FRAGMENT = `
fragment CategoriesFragment on PageBuilderFlexContentCategoriesLayoutLayout {
  title
  subtitle
  categoryCards {
    icon
    title
    description
  }
}
`;

export const REASSURANCE_FRAGMENT = `
  fragment ReassuranceFragment on PageBuilderFlexContentReassuranceLayoutLayout {
    title
    intro
    pillars {
      title
      description
      icon
    }
    footerGroup {
      sectionTitle
      ctaLink {
        url
        title
        target
      }
    }
  }
`;

export const EQUIPE_FRAGMENT = `
  fragment EquipeFragment on PageBuilderFlexContentEquipeLayoutLayout {
    title
    subtitle
    members {
      name
      role
      quote
      image {
        node {
          sourceUrl
          altText
        }
      }
      focalPoint
    }
  }
`;

export const FORMULAIRE_FRAGMENT = `
  fragment FormulaireFragment on PageBuilderFlexContentFormulaireLayoutLayout {
    title
    subtitle
    customerTypeOptions
    subjectOptions
    rgpdText
    submitButtonText
  }
`;