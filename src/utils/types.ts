export interface ProductItemType {
  room: string;
  item_category: string;
  colour: string;
  height: number;
  width: number;
  length: number;
  form: string;
  collection: string;
  manufacturer: string;
  photo: [];
  title: string;
  article_code: number;
  availability: boolean;
  price: number;
  discount: number;
  description: string;
  rating: number;
  reviews: Review[];
  hard_body: BodyType[];
  soft_body: BodyType[];
}

interface Review {
  first_name: string;
  last_name: string;
  rating: number;
  id: number;
}

interface BodyType {
  material_type: string;
  manufacturer: string;
  title: string;
  colour: string;
  photo: string;
  filler: string;
  body_material: BodyMaterial;
  tabletop_material: BodyMaterial;
}

interface BodyMaterial {
  material_type: string;
  manufacturer: string;
  title: string;
  colour: string;
  photo: string;
}
