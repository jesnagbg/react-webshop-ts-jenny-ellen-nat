export interface Product {
  id: string;
  image: string;
  images: string[];
  title: string;
  description: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    id: "000001",
    image: "${process.env.PUBLIC_URL}/assets/calmwoman.jpg",
    images: [
      "${process.env.PUBLIC_URL}/assets/calmwoman2.jpg",
      "${process.env.PUBLIC_URL}/assets/third.jpg",
    ],
    title: "Calm woman",
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    price: 399,
  },
  {
    id: "000002",
    image: "${process.env.PUBLIC_URL}/assets/daisies.jpg",
    images: [
      "${process.env.PUBLIC_URL}/assets/daisies.jpg",
      "${process.env.PUBLIC_URL}/assets/third.jpg",
    ],
    title: "Daisies",
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    price: 349,
  },
  {
    id: "000003",
    image: "${process.env.PUBLIC_URL}/assets/moby.jpg",
    images: [
      "${process.env.PUBLIC_URL}/assets/moby2.jpg",
      "${process.env.PUBLIC_URL}/assets/third.jpg",
    ],
    title: "Moby",
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    price: 399,
  },
  {
    id: "000004",
    image: "${process.env.PUBLIC_URL}/assets/sunriseferns.jpg",
    images: [
      "${process.env.PUBLIC_URL}/assets/sunriseferns2.jpg",
      "${process.env.PUBLIC_URL}/assets/third.jpg",
    ],
    title: "Sunrise ferns",
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    price: 399,
  },
  {
    id: "000005",
    image: "${process.env.PUBLIC_URL}/assets/makingfriends.jpg",
    images: [
      "${process.env.PUBLIC_URL}/assets/makingfriends2.jpg",
      "${process.env.PUBLIC_URL}/assets/third.jpg",
    ],
    title: "Making friends",
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    price: 399,
  },
  {
    id: "000006",
    image: "${process.env.PUBLIC_URL}/assets/checkerboard.jpg",
    images: [
      "${process.env.PUBLIC_URL}/assets/checkerboard2.jpg",
      "${process.env.PUBLIC_URL}/assets/third.jpg",
    ],
    title: "Checkerboard",
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    price: 499,
  },
  {
    id: "000007",
    image: "${process.env.PUBLIC_URL}/assets/discoathome.jpg",
    images: [
      "${process.env.PUBLIC_URL}/assets/discoathome2.jpg",
      "${process.env.PUBLIC_URL}/assets/third.jpg",
    ],
    title: "Disco at home",
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    price: 399,
  },
  {
    id: "000008",
    image: "${process.env.PUBLIC_URL}/assets/villagefarmersmarket.jpg",
    images: [
      "${process.env.PUBLIC_URL}/assets/villagefarmersmarket2.jpg",
      "${process.env.PUBLIC_URL}/assets/third.jpg",
    ],
    title: "Village farmers market",
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    price: 399,
  },
  {
    id: "000009",
    image: "${process.env.PUBLIC_URL}/assets/californialiving.jpg",
    images: [
      "${process.env.PUBLIC_URL}/assets/californialiving2.jpg",
      "${process.env.PUBLIC_URL}/assets/third.jpg",
    ],
    title: "California living",
    description:
      "Our jigsaw puzzles transform your favorite artists' designs into hours of tabletop fun. Exercise your mind with our precision cut puzzles featuring a thick, class-leading paperboard, with a satin finish for added durability. Available in either 200, 500 or 1,000 piece sets.",
    price: 349,
  },
];
