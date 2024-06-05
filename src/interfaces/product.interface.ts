export interface IProductVariant {
  isDefault: boolean;
  variantName: string;
  variantPhotos: string[];
  inStock: number;
  soldQuantity?: number;
  stockAlert: number;
  buyingPrice: number;
  sellingPrice: number;
  discountPercentage?: number;
  discountedPrice?: number;
}

export interface IProduct {
  _id: string;
  productName: string;
  brand: {
    brandName: string;
    brandPhoto: string;
    brandId: string;
  };
  category: {
    categoryName: string;
    categoryPhoto: string;
    categoryId: string;
    subcategory: {
      subcategoryName: string;
      subcategoryId: string;
    };
  };
  activityStatus: boolean;
  productPhotos: Array<string>;
  variants: Array<{
    isDefault: boolean;
    variantName: string;
    variantPhotos: string[];
    inStock: number;
    soldQuantity?: number;
    stockAlert: number;
    buyingPrice: number;
    sellingPrice: number;
    discountPercentage?: number;
    discountedPrice?: number;
  }>;
  series?: string;
  productModel?: string;
  videoLink: string;
  warranty?: string;
  supportedPrinter?: string;
  specifications: Array<{
    sectionName: string;
    blocks: Array<{
      title: string;
      description: string;
    }>;
  }>;
  shortDescription?: string;
  description: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    metaPhoto: string;
  };
  bulk?: {
    minOrder: number;
    discount: number;
  };
}