/* Mini Database */
export const PRODUCTS = [
        
      // --- BOOKMARKS ---
      { id: "bk1", category: "Bookmarks", name: "Let Your Light Shine", basePrice: 79, image: "https://placeholder.co/bk1.jpg", description: "Bright, uplifting typography reminding you to live boldly in faith. A daily encouragement tucked into every page.", hasVariants: false },
      { id: "bk2", category: "Bookmarks", name: "Turn the Page, Chase the Dream", basePrice: 79, image: "https://placeholder.co/bk2.jpg", description: "A gentle nudge toward hope and perseverance. Perfect for readers who see books as journeys.", hasVariants: false },
      { id: "bk3", category: "Bookmarks", name: "Jeremiah 29:11 Promise", basePrice: 79, image: "https://placeholder.co/bk3.jpg", description: "Scripture-based bookmark reminding you of God’s plans and faithfulness.", hasVariants: false },
      { id: "bk4", category: "Bookmarks", name: "Faith – Hebrews 11:1", basePrice: 79, image: "https://placeholder.co/bk4.jpg", description: "Minimal scripture design centred on assurance and hope.", hasVariants: false },
      { id: "bk5", category: "Bookmarks", name: "We Love Because He Loved Us", basePrice: 79, image: "https://placeholder.co/bk5.jpg", description: "A soft, reflective reminder of God’s first love.", hasVariants: false },
      { id: "bk6", category: "Bookmarks", name: "Be Still and Know", basePrice: 79, image: "https://placeholder.co/bk6.jpg", description: "Psalm-inspired design encouraging stillness and trust.", hasVariants: false },
      { id: "bk7", category: "Bookmarks", name: "God Is Love", basePrice: 79, image: "https://placeholder.co/bk7.jpg", description: "Simple declaration of God’s nature, perfect for daily reflection.", hasVariants: false },
      { id: "bk8", category: "Bookmarks", name: "Restless Until They Rest in You", basePrice: 79, image: "https://placeholder.co/bk8.jpg", description: "Augustinian-inspired quote for thoughtful readers.", hasVariants: false },
    
      { id: "bk9", category: "Bookmarks", name: "New Creation – 2 Corinthians 5:17", basePrice: 79, image: "https://placeholder.co/bk9.jpg", description: "A fresh start captured in scripture and art.", hasVariants: false },
      { id: "bk10", category: "Bookmarks", name: "For God So Loved the World", basePrice: 79, image: "https://placeholder.co/bk10.jpg", description: "Classic John 3:16 bookmark with warm tones.", hasVariants: false },
      { id: "bk11", category: "Bookmarks", name: "The Lord Is With You", basePrice: 79, image: "https://placeholder.co/bk11.jpg", description: "Joshua 1:9 encouragement for courage and confidence.", hasVariants: false },
      { id: "bk12", category: "Bookmarks", name: "As the Deer Longs", basePrice: 79, image: "https://placeholder.co/bk12.jpg", description: "Psalm-inspired imagery symbolising spiritual longing.", hasVariants: false },
      { id: "bk13", category: "Bookmarks", name: "Hope in the Lord", basePrice: 79, image: "https://placeholder.co/bk13.jpg", description: "Renewal and strength captured in scripture.", hasVariants: false },
      { id: "bk14", category: "Bookmarks", name: "Faith Can Move Mountains", basePrice: 79, image: "https://placeholder.co/bk14.jpg", description: "Bold declaration paired with landscape art.", hasVariants: false },
      { id: "bk15", category: "Bookmarks", name: "Lost in the Pages", basePrice: 79, image: "https://placeholder.co/bk15.jpg", description: "A calm, book-lover-friendly design with faith undertones.", hasVariants: false },
    
      { id: "bk16", category: "Bookmarks", name: "Bloom Where You Are", basePrice: 79, image: "https://placeholder.co/bk16.jpg", description: "Encouraging growth and faithfulness wherever life places you.", hasVariants: false },
      { id: "bk17", category: "Bookmarks", name: "Faith Hope Love – 1 Corinthians 13", basePrice: 79, image: "https://placeholder.co/bk17.jpg", description: "Elegant scripture bookmark highlighting love above all.", hasVariants: false },
      { id: "bk18", category: "Bookmarks", name: "One Page at a Time", basePrice: 79, image: "https://placeholder.co/bk18.jpg", description: "Gentle reminder to grow steadily in faith and life.", hasVariants: false },
      { id: "bk19", category: "Bookmarks", name: "Greater Love Has No One", basePrice: 79, image: "https://placeholder.co/bk19.jpg", description: "A powerful verse reflecting sacrifice and devotion.", hasVariants: false },
    
      { id: "bk20", category: "Bookmarks", name: "Dreams Blossom in Silence", basePrice: 79, image: "https://placeholder.co/bk20.jpg", description: "Soft abstract art encouraging patience and trust.", hasVariants: false },
      { id: "bk21", category: "Bookmarks", name: "His Mercies Are New Every Morning", basePrice: 79, image: "https://placeholder.co/bk21.jpg", description: "Hope-filled bookmark inspired by Lamentations.", hasVariants: false },
      { id: "bk22", category: "Bookmarks", name: "Let All That You Do Be Done in Love", basePrice: 79, image: "https://placeholder.co/bk22.jpg", description: "Scripture-based reminder for daily living.", hasVariants: false },
      { id: "bk23", category: "Bookmarks", name: "Do Not Fear, I Am With You", basePrice: 79, image: "https://placeholder.co/bk23.jpg", description: "Isaiah-inspired encouragement bookmark.", hasVariants: false },
    
    // --- POSTERS (Diaries, Bookmarks) ---
    const posters = [
      {
        id: "po1",
        category: "Posters",
        name: "Faith Is the Assurance – Hebrews 11:1",
        basePrice: 199,
        image: "https://placeholder.co/po1.jpg",
        description: "Minimal typographic poster reflecting faith in the unseen and trust in God’s promises.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po2",
        category: "Posters",
        name: "Hope – Jeremiah 29:11",
        basePrice: 199,
        image: "https://placeholder.co/po2.jpg",
        description: "Scripture poster reminding of God’s plans to prosper and give hope for the future.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po3",
        category: "Posters",
        name: "Love – John 3:16",
        basePrice: 199,
        image: "https://placeholder.co/po3.jpg",
        description: "Soft pastel scripture poster centred on sacrificial and unconditional love.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po4",
        category: "Posters",
        name: "Fearfully and Wonderfully Made",
        basePrice: 249,
        image: "https://placeholder.co/po4.jpg",
        description: "Psalm 139:14 inspired artwork celebrating identity, worth, and divine creation.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po5",
        category: "Posters",
        name: "Jesus With the Heroes",
        basePrice: 299,
        image: "https://placeholder.co/po5.jpg",
        description: "Creative illustration portraying Jesus above all cultural and historical heroes.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po6",
        category: "Posters",
        name: "Hallelujah – Meaning & Origin",
        basePrice: 249,
        image: "https://placeholder.co/po6.jpg",
        description: "Typography poster explaining the meaning and roots of the word Hallelujah.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po7",
        category: "Posters",
        name: "While We Were Still Sinners",
        basePrice: 249,
        image: "https://placeholder.co/po7.jpg",
        description: "Bold visual reminder of Christ’s sacrifice and unconditional love.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po8",
        category: "Posters",
        name: "Forever Kinda Love – Adoration",
        basePrice: 249,
        image: "https://placeholder.co/po8.jpg",
        description: "Eucharistic-inspired artwork reflecting Christ’s eternal presence in adoration.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po9",
        category: "Posters",
        name: "Jesus – Digital Art Portrait",
        basePrice: 299,
        image: "https://placeholder.co/po9.jpg",
        description: "Modern digital illustration of Jesus with a calm and contemporary aesthetic.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po10",
        category: "Posters",
        name: "Jesus Hugging a Girl",
        basePrice: 299,
        image: "https://placeholder.co/po10.jpg",
        description: "Tender illustration symbolising comfort, protection, and healing in Christ.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
    
      {
        id: "po11",
        category: "Posters",
        name: "Psalm 23 – The Lord Is My Shepherd",
        basePrice: 249,
        image: "https://placeholder.co/po11.jpg",
        description: "Comforting scripture poster inspired by Psalm 23 and God’s guidance.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po12",
        category: "Posters",
        name: "Psalm 91 – He Who Dwells",
        basePrice: 249,
        image: "https://placeholder.co/po12.jpg",
        description: "Full Psalm 91 displayed in an editorial-style layout symbolising refuge.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po13",
        category: "Posters",
        name: "Psalm 91:4 – Under His Wings",
        basePrice: 249,
        image: "https://placeholder.co/po13.jpg",
        description: "Verse-focused poster highlighting protection under God’s wings.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
    
      {
        id: "po14",
        category: "Posters",
        name: "The Way, the Truth, and the Life",
        basePrice: 199,
        image: "https://placeholder.co/po14.jpg",
        description: "John 14:6 inspired typography declaring Christ as the only way.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
    
      {
        id: "po15",
        category: "Posters",
        name: "The Good Shepherd – Classic",
        basePrice: 299,
        image: "https://placeholder.co/po15.jpg",
        description: "Gentle illustration of Jesus holding the lamb, symbolising care and redemption.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po16",
        category: "Posters",
        name: "The Good Shepherd – Cute Style",
        basePrice: 299,
        image: "https://placeholder.co/po16.jpg",
        description: "Soft, childlike illustration of Jesus as the Good Shepherd.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
    
      {
        id: "po17",
        category: "Posters",
        name: "Cross of Flowers",
        basePrice: 249,
        image: "https://placeholder.co/po17.jpg",
        description: "Floral cross artwork symbolising life, beauty, and redemption.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po18",
        category: "Posters",
        name: "Cross – Watercolor",
        basePrice: 249,
        image: "https://placeholder.co/po18.jpg",
        description: "Soft watercolor cross expressing sacrifice, grace, and reverence.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
    
      {
        id: "po19",
        category: "Posters",
        name: "Wanted – The 100th Sheep",
        basePrice: 249,
        image: "https://placeholder.co/po19.jpg",
        description: "Creative illustration inspired by the parable of the lost sheep and God’s pursuit.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
    
      {
        id: "po20",
        category: "Posters",
        name: "Whatever It Takes",
        basePrice: 249,
        image: "https://placeholder.co/po20.jpg",
        description: "Bold declaration of sacrifice and commitment rooted in the cross.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
    
      {
        id: "po21",
        category: "Posters",
        name: "You Are Loved",
        basePrice: 199,
        image: "https://placeholder.co/po21.jpg",
        description: "Minimal affirmation poster declaring unconditional love and worth.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po22",
        category: "Posters",
        name: "I'd Rather Have Jesus",
        basePrice: 199,
        image: "https://placeholder.co/po22.jpg",
        description: "Faith-forward declaration choosing Christ above all else.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po23",
        category: "Posters",
        name: "Blessed",
        basePrice: 199,
        image: "https://placeholder.co/po23.jpg",
        description: "Simple, calming typography reminding of God’s blessings.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po24",
        category: "Posters",
        name: "Saved by Grace",
        basePrice: 199,
        image: "https://placeholder.co/po24.jpg",
        description: "Modern typography celebrating salvation through grace alone.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po25",
        category: "Posters",
        name: "Holy, Holy, Holy",
        basePrice: 199,
        image: "https://placeholder.co/po25.jpg",
        description: "Worship-inspired typography focused on reverence and praise.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
    
      {
        id: "po26",
        category: "Posters",
        name: "Chosen, Loved, Beautiful",
        basePrice: 199,
        image: "https://placeholder.co/po26.jpg",
        description: "Affirmation-based typography celebrating identity in Christ.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po27",
        category: "Posters",
        name: "Daughter of the King – Light Skin",
        basePrice: 199,
        image: "https://placeholder.co/po27.jpg",
        description: "Identity poster affirming belonging and worth in Christ.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
      {
        id: "po28",
        category: "Posters",
        name: "Daughter of the King – Dark Skin",
        basePrice: 199,
        image: "https://placeholder.co/po28.jpg",
        description: "Alternate illustration celebrating representation and identity.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
    
      {
        id: "po29",
        category: "Posters",
        name: "Ave Maria",
        basePrice: 299,
        image: "https://placeholder.co/po29.jpg",
        description: "Gentle Marian illustration suitable for prayer corners and sacred spaces.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      },
    
      {
        id: "po30",
        category: "Posters",
        name: "The Boss  Jesus (The Chosen)",
        basePrice: 299,
        image: "https://placeholder.co/po30.jpg",
        description: "Bold poster portraying Jesus as authority and leader, inspired by The Chosen.",
        hasVariants: true,
        variants: [{ name: "Size", options: ["A5", "A4", "A3"] }]
      }
    ];
  
// This simulates a Database Query
export async function getProducts() {
  return PRODUCTS;
}

export async function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}
