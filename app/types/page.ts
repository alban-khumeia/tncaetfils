export interface PageData {
  page: {
    title: string;
    excerpt: string;
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
    pageBuilder: {
      flexContent: any[];
    };
  };
  companySettings: any;
  acfOptions: {
    optionsCatalogues: {
      cataloguesList: any[];
    };
  };
}
