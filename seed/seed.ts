



interface SeedProduct {
  title: string;
  description: string;
  slug: string;
  price: number;
  discountedPrice?: number;
  tags: string[];
  category: 'latex' | 'numbers' | 'decoration';
  material: 'latex' | 'foil';
}


interface SeedData {
  categories: string[];
  products: SeedProduct[];
}


export const initialData: SeedData = {

  categories: ['Latex', 'Numbers', 'Decoration'],

  products: [


    {
      title: 'Room Decoration Pack',
      description: "Transform any space into a vibrant oasis with our Room Decoration Pack. This comprehensive set includes balloons in various sizes and colors, festive garlands, and decorative accessories. Perfect for birthdays, anniversaries, or adding a special touch to any occasion.",
      slug: 'room-decoration-pack',
      price: 200,
      category: 'decoration',
      material: 'foil',
      tags: ['room', 'pack', 'decoration', 'room decoration', 'room decoration pack', 'foil']
    },

    {
      title: 'Gold Number Balloon',
      description: "A Gold Number Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other numbers for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'gold-number',
      price: 20,
      category: 'numbers',
      material: 'foil',
      tags: ['gold', 'number', 'foil']
    },

    {
      title: 'Silver Number Balloon',
      description: "A Silver Number Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other numbers for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'silver-number',
      price: 20,
      category: 'numbers',
      material: 'foil',
      tags: ['silver', 'number', 'foil']
    },


    {
      title: 'Black Latex Balloon',
      description: "A Black Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'black',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['black', 'latex']
    },

    {
      title: 'Blush Latex Balloon',
      description: "A Blush Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'blush',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['blush', 'latex']
    },

    {
      title: 'Caribbean Blue Latex Balloon',
      description: "A Caribbean Blue Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'caribbean-blue',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['blue', 'latex', 'caribbean', 'caribbean blue']
    },

    {
      title: 'Chocolate Brown Latex Balloon',
      description: "A Chocolate Brown Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'chocolate-brown',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['chocolate', 'latex', 'brown', 'chocolate brown']
    }
    ,

    {
      title: 'Chrome Blue Latex Balloon',
      description: "A Chrome Blue Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'chrome-blue',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['blue', 'latex', 'chrome', 'chrome blue']
    },

    {
      title: 'Chrome Gold Latex Balloon',
      description: "A Chrome Gold Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'chrome-gold',
      price: 10,
      discountedPrice: 7,
      category: 'latex',
      material: 'latex',
      tags: ['gold', 'latex', 'chrome', 'chrome gold']
    },

    {
      title: 'Chrome Green Latex Balloon',
      description: "A Chrome Green Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'chrome-green',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['green', 'latex', 'chrome', 'chrome green']
    },

    {
      title: 'Chrome Mauve Pink Latex Balloon',
      description: "A Chrome Mauve Pink Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'chrome-mauve-pink',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['pink', 'latex', 'chrome', 'mauve', 'mauve pink', 'chrome mauve pink']
    },

    {
      title: 'Chrome Purple Latex Balloon',
      description: "A Chrome Purple Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'chrome-purple',
      price: 10,
      discountedPrice: 7,
      category: 'latex',
      material: 'latex',
      tags: ['purple', 'latex', 'chrome', 'chrome purple']
    },

    {
      title: 'Chrome Silver Latex Balloon',
      description: "A Chrome Silver Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'chrome-silver',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['silver', 'latex', 'chrome', 'chrome silver']
    },

    {
      title: 'Coral Latex Balloon',
      description: "A Coral Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'coral',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['coral', 'latex', 'pink']
    },

    {
      title: 'Dark Blue Latex Balloon',
      description: "A Dark Blue Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'dark-blue',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['blue', 'latex', 'dark blue']
    },

    {
      title: 'Diamond Clear Latex Balloon',
      description: "A Diamond Clear Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'diamond-clear',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['diamond', 'latex', 'diamond clear', 'clear', 'white']
    },

    {
      title: 'Emerald Green Latex Balloon',
      description: "An Emerald Green Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'emerald-green',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['green', 'latex', 'emerald', 'emerald green']
    },

    {
      title: 'Green Latex Balloon',
      description: "A Green Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'green',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['green', 'latex']
    },

    {
      title: 'Gray Latex Balloon',
      description: "A Gray Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'gray',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['gray', 'latex']
    },

    {
      title: 'Ivory Silk Latex Balloon',
      description: "An Ivory Silk Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'ivory-silk',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['ivory', 'latex', 'silk', 'ivory silk', 'yellow']
    },

    {
      title: 'Lime Green Latex Balloon',
      description: "A Lime Green Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'lime-green',
      price: 10,
      discountedPrice: 7,
      category: 'latex',
      material: 'latex',
      tags: ['lime', 'latex', 'green', 'lime green']
    },

    {
      title: 'Mandarin Orange Latex Balloon',
      description: "A Mandarin Orange Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'mandarin-orange',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['orange', 'latex', 'mandarin', 'mandarin orange']
    },

    {
      title: 'Maroon Latex Balloon',
      description: "A Maroon Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'maroon',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['maroon', 'latex', 'red', 'dark red']
    },

    {
      title: 'Mocha Brown Latex Balloon',
      description: "A Mocha Brown Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'mocha-brown',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['brown', 'latex', 'mocha', 'mocha brown']
    },

    {
      title: 'Navy Blue Latex Balloon',
      description: "A Navy Blue Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'navy-blue',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['navy', 'latex', 'navy blue', 'blue']
    },

    {
      title: 'Orange Latex Balloon',
      description: "An Orange Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'orange',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['orange', 'latex',]
    },

    {
      title: 'Pale Blue Latex Balloon',
      description: "A Pale Blue Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'pale-blue',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['blue', 'latex', 'pale', 'pale blue']
    },

    {
      title: 'Pearl Burgundy Latex Balloon',
      description: "A Pearl Burgundy Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'pearl-burgundy',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['burgundy', 'latex', 'pearl', 'pearl burgundy', 'wine']
    },
    
    {
      title: 'Pink Latex Balloon',
      description: "A Pink Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'pink',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['pink', 'latex']
    },

    {
      title: 'Purple Violet Latex Balloon',
      description: "A Purple Violet Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'purple-violet',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['purple', 'latex', 'violet', 'purple violet']
    },

    {
      title: 'Red Latex Balloon',
      description: "A Red Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'red',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['red', 'latex']
    },

    {
      title: "Robin's Egg Blue Balloon",
      description: "A Robin's Egg Blue Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'robins-egg-blue',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['blue', 'latex', 'robins egg blue', 'robins', 'egg', 'robins egg', 'robins blue']
    },

    {
      title: 'Rose Latex Balloon',
      description: "A Rose Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'rose',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['rose', 'latex', 'pink']
    },

    {
      title: 'Rose Gold Latex Balloon',
      description: "A Rose Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'rose-gold',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['rose', 'latex', 'pink', 'gold', 'rose gold']
    },

    {
      title: 'Spring Green Latex Balloon',
      description: "A Spring Green Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'spring-green',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['green', 'latex', 'spring', 'spring green']
    },

    {
      title: 'Spring Lilac Latex Balloon',
      description: "A Spring Lilac Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'spring-lilac',
      price: 10,
      discountedPrice: 7,
      category: 'latex',
      material: 'latex',
      tags: ['lilac', 'latex', 'spring', 'spring lilac']
    },

    {
      title: 'Tropical Teal Blue Latex Balloon',
      description: "A Tropical Teal Blue Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'tropical-teal-blue',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['blue', 'latex', 'teal', 'tropical', 'tropical teal blue', 'tropical blue', 'teal blue', 'tropical teal']
    },

    {
      title: 'White Latex Balloon',
      description: "A White Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'white',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['white', 'latex']
    },

    {
      title: 'Wild Berry Latex Balloon',
      description: "A Wild Berry lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'wild-berry',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['berry', 'latex', 'wild', 'wild berry', 'rose', 'pink']
    },

    {
      title: 'Yellow Latex Balloon',
      description: "A Yellow Balloon lets everyone know which big milestone event you're celebrating! You can combine this balloon with other colors for a custom look at a graduation, birthday, New Year's Eve party, or anniversary.",
      slug: 'yellow',
      price: 10,
      category: 'latex',
      material: 'latex',
      tags: ['yellow', 'latex']
    },
    


  ]
}