import {MENU_FRAGMENT, COMPANY_SETTINGS_FRAGMENT} from './fragments';

export const GET_LAYOUT_DATA = `
  query GetLayoutData {
    headerMenu: menu(id: "primary", idType: LOCATION) {
      ...MenuFragment
    }

    footerMenu: menu(id: "footer", idType: SLUG) {
      ...MenuFragment
    }
    
    companySettings {
      ...CompanySettingsFragment
    }
  }
  ${MENU_FRAGMENT}
  ${COMPANY_SETTINGS_FRAGMENT}
`;