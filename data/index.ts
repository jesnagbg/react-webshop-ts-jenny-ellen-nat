export interface Product {
  id: string;
  image: string;
  title: string;
  description?: string;
  price: any;
  images?: string[];
  pieces: any;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    id: '000001',
    image: `/assets/calmwoman.JPG`,
    images: ['/assets/calmwoman2.JPG', '/assets/third.jpg'],
    title: 'Calm woman',
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    pieces: 450,
    price: 399,
  },
  {
    id: '000002',
    image: '/assets/daisies.JPG',
    images: ['/assets/daisies2.JPG', '/assets/third.jpg'],
    title: 'Daisies',
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    pieces: 500,
    price: 349,
  },
  {
    id: '000003',
    image: '/assets/moby.JPG',
    images: ['/assets/moby2.JPG', '/assets/third.jpg'],
    title: 'Moby',
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    pieces: 900,
    price: 399,
  },
  {
    id: '000004',
    image: '/assets/sunriseferns.JPG',
    images: ['/assets/sunriseferns2.JPG', '/assets/third.jpg'],
    title: 'Sunrise ferns',
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    pieces: 650,
    price: 399,
  },
  {
    id: '000005',
    image: '/assets/makingfriends.JPG',
    images: ['/assets/makingfriends2.JPG', '/assets/third.jpg'],
    title: 'Making friends',
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    pieces: 1000,
    price: 399,
  },
  {
    id: '000006',
    image: '/assets/checkerboard.JPG',
    images: ['/assets/checkerboard2.JPG', '/assets/third.jpg'],
    title: 'Checkerboard',
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    pieces: 900,
    price: 499,
  },
  {
    id: '000007',
    image: '/assets/discoathome.JPG',
    images: ['/assets/discoathome2.JPG', '/assets/third.jpg'],
    title: 'Disco at home',
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    pieces: 550,
    price: 399,
  },
  {
    id: '000008',
    image: '/assets/villagefarmersmarket.JPG',
    images: ['/assets/villagefarmersmarket2.JPG', '/assets/third.jpg'],
    title: 'Village farmers market',
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    pieces: 1000,
    price: 399,
  },
  {
    id: '000009',
    image: '/assets/californialiving.JPG',
    images: ['/assets/californialiving2.JPG', '/assets/third.jpg'],
    title: 'California living',
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    pieces: 600,
    price: 349,
  },
];
