const products = [
  {
    name: "Oversized Cotton Shirt",
    description:
      "A breathable oversized cotton shirt designed for all-day comfort. Features a loose fit, drop shoulders, and a classic button-down front.",
    price: 45.99,
    discountPrice: 39.99,
    countInStock: 25,
    sku: "OVS-COT-001",
    category: "Top Wear",
    brand: "Relax Fit",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Olive"],
    collections: "Casual Wear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://images.bewakoof.com/t1080/men-s-blue-striped-oversized-shirt-597301-1718599038-1.jpg",
        altText: "Oversized Cotton Shirt Front View",
      },
      {
        url: "https://images.bewakoof.com/t1080/men-s-blue-striped-oversized-shirt-597301-1704957710-2.jpg",
        altText: "Oversized Cotton Shirt Back View",
      },
    ],
    rating: 4.7,
    numReviews: 18,
  },
  {
    name: "Oversized Denim Shirt",
    description:
      "A rugged oversized denim shirt with a relaxed silhouette, perfect for layering. Features two chest pockets and button cuffs.",
    price: 55.99,
    discountPrice: 49.99,
    countInStock: 20,
    sku: "OVS-DEN-002",
    category: "Top Wear",
    brand: "Street Edge",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Light Blue", "Dark Blue", "Gray"],
    collections: "Street Wear",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://images.bewakoof.com/t1080/men-s-green-textured-oversized-shirt-646394-1732021577-1.jpg",
        altText: "Oversized Denim Shirt Front View",
      },
      {
        url: "https://images.bewakoof.com/t1080/men-s-green-textured-oversized-shirt-646394-1732021582-2.jpg",
        altText: "Oversized Denim Shirt Back View",
      },
    ],
    rating: 4.6,
    numReviews: 12,
  },
  {
    name: "Oversized Flannel Shirt",
    description:
      "A cozy oversized flannel shirt with a plaid pattern. Soft to the touch and ideal for chilly days.",
    price: 49.99,
    discountPrice: 44.99,
    countInStock: 30,
    sku: "OVS-FLN-003",
    category: "Top Wear",
    brand: "Cozy Threads",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Red", "Green", "Blue"],
    collections: "Winter Wear",
    material: "Flannel",
    gender: "Men",
    images: [
      {
        url: "https://images.bewakoof.com/t1080/men-s-navy-blue-textured-shirt-646375-1730808816-1.jpg",
        altText: "Oversized Flannel Shirt Front View",
      },
      {
        url: "https://images.bewakoof.com/t1080/men-s-navy-blue-textured-shirt-646375-1730808820-2.jpg",
        altText: "Oversized Flannel Shirt Back View",
      },
    ],
    rating: 4.8,
    numReviews: 22,
  },
  {
    name: "Oversized Linen Shirt",
    description:
      "A lightweight oversized linen shirt perfect for warm days. Features a relaxed collar and breathable fabric.",
    price: 59.99,
    discountPrice: 54.99,
    countInStock: 15,
    sku: "OVS-LIN-004",
    category: "Top Wear",
    brand: "Breezy Style",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Beige", "White", "Sage"],
    collections: "Summer Wear",
    material: "Linen",
    gender: "Men",
    images: [
      {
        url: "https://images.bewakoof.com/t1080/men-s-rust-orange-checked-oversized-shirt-646373-1734610461-1.jpg",
        altText: "Oversized Linen Shirt Front View",
      },
      {
        url: "hhttps://images.bewakoof.com/t1080/men-s-rust-orange-checked-oversized-shirt-646373-1734610465-2.jpg",
        altText: "Oversized Linen Shirt Back View",
      },
    ],
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: "Oversized Graphic Shirt",
    description:
      "A statement oversized graphic shirt with bold designs. Ideal for a casual, street-smart look.",
    price: 42.99,
    discountPrice: 37.99,
    countInStock: 40,
    sku: "OVS-GPH-005",
    category: "Top Wear",
    brand: "Urban Vibe",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray"],
    collections: "Casual Wear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://images.bewakoof.com/t640/men-s-maroon-white-checked-oversized-shirt-652611-1736312356-1.jpg",
        altText: "Oversized Graphic Shirt Front View",
      }
    ],
    rating: 4.9,
    numReviews: 30,
  },
  {
    name: "Oversized Cotton T-Shirt",
    description:
      "A soft and breathable oversized cotton t-shirt designed for ultimate comfort. Features a relaxed fit and classic crew neck.",
    price: 35.99,
    discountPrice: 29.99,
    countInStock: 30,
    sku: "WOVS-COT-001",
    category: "Top Wear",
    brand: "Chic Comfort",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink", "White", "Black"],
    collections: "Casual Wear",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://images.bewakoof.com/t1080/women-s-black-all-over-printed-oversized-t-shirt-581990-1738831822-1.jpg",
        altText: "Oversized Cotton T-Shirt Front View",
      },
      {
        url: "https://images.bewakoof.com/t1080/women-aop-oversized-t-shirt-2-581990-1700120999-2.JPG",
        altText: "Oversized Cotton T-Shirt Back View",
      },
    ],
    rating: 4.7,
    numReviews: 25,
  },
  {
    name: "Oversized Graphic T-Shirt",
    description:
      "A trendy oversized graphic t-shirt with bold prints. Perfect for a street-style look.",
    price: 39.99,
    discountPrice: 34.99,
    countInStock: 25,
    sku: "WOVS-GPH-002",
    category: "Top Wear",
    brand: "Urban Glow",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Gray", "Black"],
    collections: "Street Wear",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://images.bewakoof.com/t1080/women-s-blue-leviosa-graphic-print-oversized-acid-wash-t-shirt-659430-1735274556-1.jpg",
        altText: "Oversized Graphic T-Shirt Front View",
      },
      {
        url: "https://images.bewakoof.com/t1080/women-s-blue-leviosa-graphic-print-oversized-acid-wash-t-shirt-659430-1735274560-2.jpg",
        altText: "Oversized Graphic T-Shirt Back View",
      },
    ],
    rating: 4.8,
    numReviews: 32,
  },
  {
    name: "Oversized Linen T-Shirt",
    description:
      "A lightweight oversized linen t-shirt for a relaxed, breathable feel. Ideal for warm weather.",
    price: 42.99,
    discountPrice: 37.99,
    countInStock: 20,
    sku: "WOVS-LIN-003",
    category: "Top Wear",
    brand: "Breezy Touch",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "White", "Sage"],
    collections: "Summer Wear",
    material: "Linen",
    gender: "Women",
    images: [
      {
        url: "https://images.bewakoof.com/t640/women-s-granite-green-bambi-sketch-graphic-printed-oversized-t-shirt-647243-1733230733-1.jpg",
        altText: "Oversized Linen T-Shirt Front View",
      },
      
    ],
    rating: 4.6,
    numReviews: 19,
  },
  {
    name: "Oversized Vintage T-Shirt",
    description:
      "A vintage-inspired oversized t-shirt with a faded wash. Combines retro style with modern comfort.",
    price: 38.99,
    discountPrice: 33.99,
    countInStock: 28,
    sku: "WOVS-VTG-004",
    category: "Top Wear",
    brand: "Retro Chic",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown", "Olive", "Charcoal"],
    collections: "Vintage Wear",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://images.bewakoof.com/t640/women-s-orange-fresh-as-a-daisy-graphic-printed-boyfriend-t-shirt-638829-1738331416-1.jpg",
        altText: "Oversized Vintage T-Shirt Front View",
      },
    ],
    rating: 4.9,
    numReviews: 27,
  },
  {
    name: "Oversized Tie-Dye T-Shirt",
    description:
      "A fun and colorful oversized tie-dye t-shirt for a relaxed, playful look.",
    price: 40.99,
    discountPrice: 35.99,
    countInStock: 22,
    sku: "WOVS-TDY-005",
    category: "Top Wear",
    brand: "Color Splash",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink", "Blue", "Purple"],
    collections: "Boho Wear",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://images.bewakoof.com/t640/women-s-multicolor-all-over-printed-oversized-t-shirt-628013-1719330705-1.jpg",
        altText: "Oversized Tie-Dye T-Shirt Front View",
      },
    ],
    rating: 4.7,
    numReviews: 24,
  },
  {
    name: "Cotton Lounge Pajamas",
    description:
      "Comfortable and breathable cotton lounge pajamas designed for all-day relaxation. Features an elastic waistband and a relaxed fit.",
    price: 29.99,
    discountPrice: 24.99,
    countInStock: 40,
    sku: "WPJ-COT-001",
    category: "Bottom Wear",
    brand: "Cozy Comfort",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink", "Blue", "Gray"],
    collections: "Loungewear",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://images.bewakoof.com/t640/women-solid-pyjamas-19-620045-1707312573-1.jpg",
        altText: "Cotton Lounge Pajamas Front View",
      },
      {
        url: "https://images.bewakoof.com/t1080/women-solid-pyjamas-19-620045-1707312579-2.jpg",
        altText: "Cotton Lounge Pajamas Back View",
      },
    ],
    rating: 4.8,
    numReviews: 30,
  },
  {
    name: "Silk Sleep Pajamas",
    description:
      "Luxurious silk sleep pajamas offering a soft and smooth feel. Features a drawstring waist and elegant fit.",
    price: 49.99,
    discountPrice: 44.99,
    countInStock: 25,
    sku: "WPJ-SLK-002",
    category: "Bottom Wear",
    brand: "Silk Dreams",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Burgundy", "Navy"],
    collections: "Sleepwear",
    material: "Silk",
    gender: "Women",
    images: [
      {
        url: "https://images.bewakoof.com/t640/women-s-white-all-over-printed-wide-leg-pyjamas-644700-1733295849-1.jpg",
        altText: "Silk Sleep Pajamas Front View",
      },
    ],
    rating: 4.9,
    numReviews: 27,
  },
  {
    name: "Fleece Winter Pajamas",
    description:
      "Warm fleece winter pajamas to keep you cozy during chilly nights. Features a soft lining and elastic waistband.",
    price: 39.99,
    discountPrice: 34.99,
    countInStock: 30,
    sku: "WPJ-FLC-003",
    category: "Bottom Wear",
    brand: "Warm Bliss",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Green", "Gray"],
    collections: "Winterwear",
    material: "Fleece",
    gender: "Women",
    images: [
      {
        url: "https://images.bewakoof.com/t640/women-s-grey-all-over-printed-wide-leg-pyjamas-645079-1733317677-1.jpg",
        altText: "Fleece Winter Pajamas Front View",
      },
    ],
    rating: 4.7,
    numReviews: 22,
  },
  {
    name: "Printed Cotton Pajamas",
    description:
      "Fun and playful printed cotton pajamas for casual home wear. Soft fabric with a comfy fit and adjustable waist.",
    price: 34.99,
    discountPrice: 29.99,
    countInStock: 35,
    sku: "WPJ-PRT-004",
    category: "Bottom Wear",
    brand: "Playful Prints",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "Purple", "Aqua"],
    collections: "Casual Wear",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://images.bewakoof.com/t640/women-s-white-black-all-over-printed-wide-leg-pyjamas-645080-1733814612-1.jpg",
        altText: "Printed Cotton Pajamas Front View",
      },
    ],
    rating: 4.6,
    numReviews: 29,
  },
  {
    name: "High-Waist Yoga Pajamas",
    description:
      "Stretchy high-waist yoga pajamas for both relaxation and light workouts. Breathable fabric and snug fit.",
    price: 37.99,
    discountPrice: 32.99,
    countInStock: 28,
    sku: "WPJ-YGA-005",
    category: "Bottom Wear",
    brand: "Flex Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Teal"],
    collections: "Activewear",
    material: "Polyester Blend",
    gender: "Women",
    images: [
      {
        url: "https://images.bewakoof.com/t640/women-s-white-all-over-printed-pyjamas-645094-1731049760-1.jpg",
        altText: "High-Waist Yoga Pajamas Front View",
      },
    ],
    rating: 4.8,
    numReviews: 33,
  },
  {
    name: "Classic Cotton Joggers",
    description:
      "Soft and breathable cotton joggers designed for everyday comfort. Features an elastic waistband and cuffed ankles for a perfect fit.",
    price: 34.99,
    discountPrice: 29.99,
    countInStock: 40,
    sku: "MJG-COT-001",
    category: "Bottom Wear",
    brand: "Urban Flex",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    collections: "Casual Wear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://images.bewakoof.com/t1080/men-s-black-oversized-cargo-joggers-552880-1736252662-1.jpg",
        altText: "Classic Cotton Joggers Front View",
      },
      {
        url: "https://images.bewakoof.com/t1080/men-s-black-oversized-cargo-joggers-552880-1723536183-2.jpg",
        altText: "Classic Cotton Joggers Back View",
      },
    ],
    rating: 4.7,
    numReviews: 25,
  },
  {
    name: "Athletic Performance Joggers",
    description:
      "Lightweight joggers with moisture-wicking fabric to keep you dry during workouts. Designed for optimal movement and comfort.",
    price: 44.99,
    discountPrice: 39.99,
    countInStock: 35,
    sku: "MJG-ATH-002",
    category: "Bottom Wear",
    brand: "Active Motion",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Olive", "Charcoal"],
    collections: "Activewear",
    material: "Polyester Blend",
    gender: "Men",
    images: [
      {
        url: "https://images.bewakoof.com/t640/men-s-charcoal-grey-oversized-joggers-646503-1736445094-1.jpg",
        altText: "Athletic Performance Joggers Front View",
      },
    ],
    rating: 4.8,
    numReviews: 32,
  },
  {
    name: "Fleece Lined Joggers",
    description:
      "Warm fleece-lined joggers ideal for colder weather. Soft on the inside with a relaxed fit and adjustable drawstring waistband.",
    price: 39.99,
    discountPrice: 34.99,
    countInStock: 30,
    sku: "MJG-FLC-003",
    category: "Bottom Wear",
    brand: "Winter Comfort",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Gray"],
    collections: "Winterwear",
    material: "Fleece",
    gender: "Men",
    images: [
      {
        url: "https://images.bewakoof.com/t640/men-s-ginger-root-brown-super-loose-fit-cargo-joggers-646427-1732528197-1.jpg",
        altText: "Fleece Lined Joggers Front View",
      },
    ],
    rating: 4.6,
    numReviews: 28,
  },
  {
    name: "Cargo Pocket Joggers",
    description:
      "Stylish cargo pocket joggers combining functionality with street style. Features multiple pockets and an adjustable waist.",
    price: 49.99,
    discountPrice: 44.99,
    countInStock: 25,
    sku: "MJG-CRG-004",
    category: "Bottom Wear",
    brand: "Street Vibe",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Black", "Olive"],
    collections: "Streetwear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://images.bewakoof.com/t640/men-s-grey-super-loose-fit-cargo-joggers-617467-1710768588-1.jpg",
        altText: "Cargo Pocket Joggers Front View",
      },
    ],
    rating: 4.9,
    numReviews: 35,
  },
  {
    name: "Slim-Fit Joggers",
    description:
      "Modern slim-fit joggers perfect for a sleek, streamlined look. Features ribbed cuffs, a drawstring waist, and stretch fabric for ease of movement.",
    price: 42.99,
    discountPrice: 37.99,
    countInStock: 30,
    sku: "MJG-SLM-005",
    category: "Bottom Wear",
    brand: "Metro Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Blue"],
    collections: "Urban Style",
    material: "Poly-Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://images.bewakoof.com/t640/men-s-purple-oversized-joggers-604221-1735206819-1.jpg",
        altText: "Slim-Fit Joggers Front View",
      },
    ],
    rating: 4.7,
    numReviews: 31,
  },

];

module.exports = products;
