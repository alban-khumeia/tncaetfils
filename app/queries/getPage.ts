import {
    CATEGORY_GRID_FRAGMENT,
    HERO_FRAGMENT,
    TRUST_BAR_FRAGMENT,
    TRANSPORT_SECTION_FRAGMENT,
    LOCAL_SECTION_FRAGMENT,
    COMPANY_SETTINGS_FRAGMENT,
    CLIENTS_REVIEWS_FRAGMENT,
    CATALOGUE_LAYOUT_FRAGMENT,
    CATALOG_ITEM_FRAGMENT,
    CTA_LAYOUT_FRAGMENT,
    FAQ_LAYOUT_FRAGMENT,
    CATEGORIES_FRAGMENT,
    REASSURANCE_FRAGMENT,
    EQUIPE_FRAGMENT,
    FORMULAIRE_FRAGMENT
} from './fragments';

export const GET_PAGE_QUERY = `
  query GetPage($uri: ID!) {
    
    page(id: $uri, idType: URI) {
      pageBuilder {
        flexContent {
          __typename
          fieldGroupName
          
          ...HeroFragment
          ...CategoryGridFragment
          ...TrustBarFragment
          ...TransportSectionFragment
          ...LocalSectionFragment
          ...ClientsReviewsFragment
          ...CatalogueLayoutFragment
          ...CtaLayoutFragment
          ...FaqLayoutFragment
          ...CategoriesFragment
          ...ReassuranceFragment
          ...EquipeFragment
          ...FormulaireFragment
        }
      }
    }
    companySettings {
      ...CompanySettingsFragment
    }
    acfOptions {
      optionsCatalogues {
        cataloguesList {
          ...CatalogItemFragment
        }
      }
    }
  }
  
  ${HERO_FRAGMENT}
  ${CATEGORY_GRID_FRAGMENT}
  ${TRUST_BAR_FRAGMENT}
  ${TRANSPORT_SECTION_FRAGMENT}
  ${LOCAL_SECTION_FRAGMENT}
  ${COMPANY_SETTINGS_FRAGMENT}
  ${CLIENTS_REVIEWS_FRAGMENT}
  ${CATALOGUE_LAYOUT_FRAGMENT}
  ${CATALOG_ITEM_FRAGMENT}
  ${CTA_LAYOUT_FRAGMENT}
  ${FAQ_LAYOUT_FRAGMENT}
  ${CATEGORIES_FRAGMENT}
  ${REASSURANCE_FRAGMENT}
  ${EQUIPE_FRAGMENT}
  ${FORMULAIRE_FRAGMENT}
`;
