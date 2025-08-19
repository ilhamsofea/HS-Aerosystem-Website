// Edit here to add more products
export const categories = ["Assemblies", "Sheet Metal and Machinated Part"] as const;

export type Category = (typeof categories)[number];

export const productImages: Record<Category, string[]> = {
  "Assemblies": [
    "assets/ProductApp/assembly1.jpg",
    "assets/ProductApp/assembly2.png",
    "assets/ProductApp/assembly3.png",
    "assets/ProductApp/assembly4.png",
    "assets/ProductApp/assembly5.png",
  ],
  /* also update this block for picture */
  "Sheet Metal and Machinated Part": [
    "assets/ProductApp/smm4.jpg",
    "assets/ProductApp/smm5.jpg",
  ]
  /*end block */
  
};
