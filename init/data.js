const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://www.gohawaii.com/sites/default/files/styles/listing_slide/public/listing_images/hawaii-pauwalu-cottage_DDA444A2-1FB5-4CB2-B294C2B020FB9E3D_ef98f2f3-734e-44d0-b6e14b7811ef7a62_1.jpg.webp?itok=9OV8pFcS",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Beach",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/736x/83/77/f2/8377f23e83cdf9b2baa54171f3165433.jpg",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Lake"
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://www.joali.com/media/sghfirsk/joali_sunsetluxuryvilla_17_2000.jpg?format=webp&v=1698418377",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Amazing-Pools"
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://specials-images.forbesimg.com/imageserve/5d794057c0e1890008d1238c/italy/960x0.jpg?fit=scale",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Historical-Homes"
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/570779797.jpg?k=c238af546926d8b51ba8d6c46ff454eae90d1b7480a41c32d3a3c53b93e05bab&o=&hp=1",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic-Cities"
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.trvl-media.com/lodging/2000000/1900000/1897400/1897321/7e7c3c5d.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains"
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.squarespace-cdn.com/content/v1/65cd0482d3c59114f98ec0de/f6a805af-75e0-4941-bb67-d05d698eab96/THP_HomepageHero.jpg",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Campsite"
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/8c/7e/70/wwwbeachfrontparadisehotelcom.jpg?w=900&h=500&s=1",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Beach"
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://media.modernluxury.com/ntgpghfuax/styles/card-xl/2024/11/01/4_1-0001.jpg.webp?t=58af9343.webp",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "New"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/pictures/862d0f40-ab66-40d3-93ff-2aa3ff618126.jpg",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "Cabins"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://www.skisolutions.com/app/uploads/2023/07/ski-in-ski-out-chalets-1800x975.jpg",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Ski-in-out"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://image-tc.galaxy.tf/wijpeg-f25pfcbbwmrg95wxs37w5xti0/serenaserengeti-71-1.jpg?width=1600&height=1066",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Woodlands"
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8FZ795BmgF0Qp_oWU_06WdYHS0KZDFviIA&s",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Historical-Homes"
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://www.thenautilusmaldives.com/wp-content/uploads/2021/03/Nautilus-image-no.-17.jpg",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Boat"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://png.pngtree.com/background/20230626/original/pngtree-charming-cottage-cotswold-village-building-photo-picture-image_4068017.jpg",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Rooms"
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://newengland.com/wp-content/uploads/beacon-hill-boston-brownstones.jpg",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Iconic-Cities"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/3c/ee/12/the-beachfront-villas.jpg?w=1200&h=-1&s=1",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Amazing-Pools"
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/41ee884e-2c0d-4b90-bca4-92ac05237338.jpg",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Mountains"
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://stardreamscamp.com/wp-content/uploads/2024/02/8-2.jpg",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "Apartment"
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/331272633.jpg?k=7d46678c2c2263b485546eaa19478abbc0c44434d7fe3881619750fca51cfeb9&o=",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "Bed-and-Breakfasts"
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media.tacdn.com/media/vr-splice-j/0d/0b/5f/77.jpg?w=800&h=-1",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles"
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/558637990.jpg?k=f8201421fc2d3ae819b77af6a6bf1a32469e31a68de4bf357dce1fe6e52c2577&o=&hp=1",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Amazing-Pools"
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://www.beachvillas.com/pics/gallery/1035/villa-georgios_94460_1232795516.jpg",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "New"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://the-travel-life.com/wp-content/uploads/2023/02/Screen-Shot-2023-02-10-at-11.47.28-AM.png",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Camping"
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/b22717a4-341c-4138-9672-c08750fc7d56.jpg?im_w=720",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "Farm"
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://violetinjapan.com/wp-content/uploads/2022/01/luxury-tokyo.jpeg",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Apartment"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://www.cummingsarchitectureinteriors.com/wp-content/uploads/New-Hampshire-Lake-House-01-Exterior.jpg",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "Countryside"
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://robbreport.com/wp-content/uploads/2022/12/1-4.jpg?w=1000",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Arctic"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://onekindesign.com/wp-content/uploads/2021/04/Tropical-Beach-House-Retreat-Costa-Rica-Studio-Saxe-02-1-Kindesign.jpg",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Beach"
  },
];

module.exports = { data: sampleListings };