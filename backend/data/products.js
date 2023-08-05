const products = [{
  "_id": {
    "$oid": "621000a1ef011b23c456ef01"
  },
  "user": {
    "$oid": "651526c28f374b07b16c9003"
  },
  "name": "Digital Drip Coffee Scale",
  "image": [
    "/uploads/product-1-1.jpeg",
    "/uploads/product-1-2.jpeg",
    "/uploads/product-1-3.jpeg",
    "/uploads/product-1-4.jpeg",
    "/uploads/product-1-5.jpeg"
  ],
  "brand": "UNKNOWN",
  "category": "Electronics",
  "description": "Precision Coffee Scale: 0.1g accuracy, LED screen, double cup design. Waterproof 304 stainless steel, anti-slip pad, USB fast charging with lithium battery. Ideal for espresso brewing.",
  "reviews": [
    {
      "user": {
        "$oid": "65150ce4a5d7374f3be0d2ab"
      },
      "name": "John Williams",
      "rating": 4.5,
      "comment": "Incredibly accurate and sleek design. The USB charging is a game-changer.",
      "reviewTime": {
        "$date": "2023-05-28T05:22:06.111Z"
      },
      "_id": {
        "$oid": "651526c28f374b07b16c901c"
      },
      "createdAt": {
        "$date": "2023-05-28T05:22:06.111Z"
      },
      "updatedAt": {
        "$date": "2023-05-28T05:22:06.111Z"
      }
    },
    {
      "user": {
        "$oid": "65150ce4a5d7374f3be0d2ad"
      },
      "name": "Emily Thompson",
      "rating": 5,
      "comment": "Sturdy construction, easy to clean. Slightly pricey but worth the investment.",
      "reviewTime": {
        "$date": "2023-05-30T05:22:06.111Z"
      },
      "_id": {
        "$oid": "651526c28f374b07b16c901d"
      },
      "createdAt": {
        "$date": "2023-05-30T05:22:06.111Z"
      },
      "updatedAt": {
        "$date": "2023-05-30T05:22:06.111Z"
      }
    },
    {
      "user": {
        "$oid": "65150ce4a5d7374f3be0d2ae"
      },
      "name": "David Johnson",
      "rating": 5,
      "comment": "Compact yet functional. The anti-slip pad keeps it steady during weighing.",
      "reviewTime": {
        "$date": "2023-06-06T05:22:06.111Z"
      },
      "_id": {
        "$oid": "651526c28f374b07b16c901e"
      },
      "createdAt": {
        "$date": "2023-06-06T05:22:06.111Z"
      },
      "updatedAt": {
        "$date": "2023-06-06T05:22:06.111Z"
      }
    },
    {
      "user": {
        "$oid": "65150ce4a5d7374f3be0d2af"
      },
      "name": "Sarah Anderson",
      "rating": 3.5,
      "comment": "Disappointed with the battery life. Otherwise, a great coffee scale.",
      "reviewTime": {
        "$date": "2023-06-09T05:22:06.111Z"
      },
      "_id": {
        "$oid": "651526c28f374b07b16c901f"
      },
      "createdAt": {
        "$date": "2023-06-09T05:22:06.111Z"
      },
      "updatedAt": {
        "$date": "2023-06-09T05:22:06.111Z"
      }
    },
    {
      "user": {
        "$oid": "65150ce4a5d7374f3be0d2af"
      },
      "name": "Michael Brown",
      "rating": 5,
      "comment": "Versatile scale for coffee, baking, and more. Highly recommended.",
      "reviewTime": {
        "$date": "2023-06-11T05:22:06.111Z"
      },
      "_id": {
        "$oid": "651526c28f374b07b16c901f"
      },
      "createdAt": {
        "$date": "2023-06-11T05:22:06.111Z"
      },
      "updatedAt": {
        "$date": "2023-06-11T05:22:06.111Z"
      }
    }
  ],
  "rating": 4.5,
  "numReviews": 5,
  "price": 25.99,
  "countInStock": 10,
  "__v": 0,
  "createdAt": {
    "$date": "2023-09-28T07:09:54.997Z"
  },
  "updatedAt": {
    "$date": "2023-09-28T07:09:54.997Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef02"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f2a"
  },
  "name": "Smart Touch Electronic Lighter",
  "image": [
    "/uploads/product-2-1.jpeg",
    "/uploads/product-2-2.jpeg",
    "/uploads/product-2-3.jpeg",
    "/uploads/product-2-4.jpeg",
    "/uploads/product-2-5.jpeg"
  ],
  "brand": "UNKNOWN",
  "category": "Electronics",
  "description": "Smart Touch Fashion Dual Arc Lighter: USB Rechargeable, Windproof, with Power Display - Ideal Gadget for Men",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a4b"
      },
      "name": "Raj Sinha",
      "rating": 5,
      "comment": "Stylish and reliable. Windproof feature is a game-changer.",
      "reviewTime": {
        "$date": "2023-04-15T10:30:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a6b"
      },
      "createdAt": {
        "$date": "2023-04-15T10:30:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-04-15T10:30:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "7c8d9e0f1a2b3c4d5e6f7a8b"
      },
      "name": "Liam Johnson",
      "rating": 4,
      "comment": "Decent lighter but battery life could be better. Looks cool though.",
      "reviewTime": {
        "$date": "2023-05-01T14:45:00.000Z"
      },
      "_id": {
        "$oid": "9c0d1e2f3a4b5c6d7e8f9a0b"
      },
      "createdAt": {
        "$date": "2023-05-01T14:45:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-05-01T14:45:00.000Z"
      }
    }
  ],
  "rating": 4.5,
  "numReviews": 2,
  "price": 12.99,
  "countInStock": 25,
  "__v": 0,
  "createdAt": {
    "$date": "2023-04-01T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-05-10T12:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef03"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f2a"
  },
  "name": "Sweeping Robot 3C",
  "image": [
    "/uploads/product-3-1.jpeg",
    "/uploads/product-3-2.jpeg",
    "/uploads/product-3-3.jpeg",
    "/uploads/product-3-4.jpeg",
    "/uploads/product-3-5.jpeg"
  ],
  "brand": "Xiaomi",
  "category": "Home Appliances",
  "description": "Advanced robot vacuum: LDS navigation, 4000Pa suction, smart Y-mop, sensor tech, app & voice control.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a4b"
      },
      "name": "Olivia Smith",
      "rating": 4.5,
      "comment": "Impressive cleaning power and smart navigation. Worth every penny!",
      "reviewTime": {
        "$date": "2023-06-10T12:30:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a6b"
      },
      "createdAt": {
        "$date": "2023-06-10T12:30:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-06-10T12:30:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "7c8d9e0f1a2b3c4d5e6f7a8b"
      },
      "name": "Sarah Brown",
      "rating": 4,
      "comment": "Good suction but struggles on high-pile carpets. App is intuitive.",
      "reviewTime": {
        "$date": "2023-05-18T09:15:00.000Z"
      },
      "_id": {
        "$oid": "9c0d1e2f3a4b5c6d7e8f9a0b"
      },
      "createdAt": {
        "$date": "2023-05-18T09:15:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-05-18T09:15:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "1c2d3e4f5a6b7c8d9e0f1a2b"
      },
      "name": "Emma Williams",
      "rating": 5,
      "comment": "Excellent mapping and cleans every corner. Highly recommended!",
      "reviewTime": {
        "$date": "2023-07-02T16:45:00.000Z"
      },
      "_id": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a4b"
      },
      "createdAt": {
        "$date": "2023-07-02T16:45:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-02T16:45:00.000Z"
      }
    }
  ],
  "rating": 4.5,
  "numReviews": 3,
  "price": 399.99,
  "countInStock": 15,
  "__v": 0,
  "createdAt": {
    "$date": "2023-04-15T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-10T10:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef04"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f2b"
  },
  "name": "Electronic Measuring Spoon",
  "image": [
    "/uploads/product-4-1.jpeg",
    "/uploads/product-4-2.jpeg",
    "/uploads/product-4-3.jpeg",
    "/uploads/product-4-4.jpeg",
    "/uploads/product-4-5.jpeg"
  ],
  "brand": "UNKNOWN",
  "category": "Kitchen & Dining",
  "description": "2-in-1 Electronic Spoon Scale & Thermometer: Space-saving, intuitive, multifunctional with LCD. Ideal for precise ingredient measurements.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a4e"
      },
      "name": "Elijah Martinez",
      "rating": 4,
      "comment": "Handy little gadget, but the temperature feature is a bit inaccurate.",
      "reviewTime": {
        "$date": "2023-05-12T10:30:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a6b"
      },
      "createdAt": {
        "$date": "2023-05-12T10:30:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-05-12T10:30:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "7c8d9e0f1a2b3c4d5e6f7a7b"
      },
      "name": "Sophia Miller",
      "rating": 4.5,
      "comment": "Surprisingly useful for measuring small quantities. Compact design.",
      "reviewTime": {
        "$date": "2023-06-25T14:45:00.000Z"
      },
      "_id": {
        "$oid": "9c0d1e2f3a4b5c6d7e8f9a0b"
      },
      "createdAt": {
        "$date": "2023-06-25T14:45:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-06-25T14:45:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "1c2d3e4f5a6b7c8d9e0f1a1b"
      },
      "name": "Oliver Garcia",
      "rating": 3.5,
      "comment": "Decent for the price, but not the most accurate or durable option.",
      "reviewTime": {
        "$date": "2023-07-08T08:15:00.000Z"
      },
      "_id": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a4b"
      },
      "createdAt": {
        "$date": "2023-07-08T08:15:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-08T08:15:00.000Z"
      }
    }
  ],
  "rating": 4,
  "numReviews": 3,
  "price": 9.99,
  "countInStock": 50,
  "__v": 0,
  "createdAt": {
    "$date": "2023-04-01T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-15T12:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef05"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f2c"
  },
  "name": "Call Center Headphones",
  "image": [
    "/uploads/product-5-1.jpeg",
    "/uploads/product-5-2.jpeg",
    "/uploads/product-5-3.jpeg",
    "/uploads/product-5-4.jpeg"
  ],
  "brand": "VoiceJoy",
  "category": "Electronics",
  "description": "Headset with 300° rotating noise-canceling mic, adjustable headband, dual earpieces, RJ9 plug, and 2-year warranty.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a4d"
      },
      "name": "Alex Rodriguez",
      "rating": 4.5,
      "comment": "Great audio quality and comfortable fit. Highly recommended!",
      "reviewTime": {
        "$date": "2023-06-01T12:30:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a6d"
      },
      "createdAt": {
        "$date": "2023-06-01T12:30:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-06-01T12:30:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "7c8d9e0f1a2b3c4d5e6f7a8d"
      },
      "name": "Mia Hernandez",
      "rating": 4,
      "comment": "Decent noise cancellation, but mic quality could be better.",
      "reviewTime": {
        "$date": "2023-07-10T09:45:00.000Z"
      },
      "_id": {
        "$oid": "9c0d1e2f3a4b5c6d7e8f9a0d"
      },
      "createdAt": {
        "$date": "2023-07-10T09:45:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-10T09:45:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "1c2d3e4f5a6b7c8d9e0f1a2d"
      },
      "name": "Lucas White",
      "rating": 5,
      "comment": "Excellent value for money! Comfortable and clear audio.",
      "reviewTime": {
        "$date": "2023-07-20T15:00:00.000Z"
      },
      "_id": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a4d"
      },
      "createdAt": {
        "$date": "2023-07-20T15:00:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-20T15:00:00.000Z"
      }
    }
  ],
  "rating": 4.5,
  "numReviews": 3,
  "price": 35.99,
  "countInStock": 20,
  "__v": 0,
  "createdAt": {
    "$date": "2023-05-15T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-25T10:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef06"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f2d"
  },
  "name": "Air Pro6 TWS Earbuds",
  "image": [
    "/uploads/product-6-1.jpeg",
    "/uploads/product-6-2.jpeg",
    "/uploads/product-6-3.jpeg",
    "/uploads/product-6-4.jpeg"
  ],
  "brand": "UNKNOWN",
  "category": "Electronics",
  "description": "Bluetooth 5.0 earphones with HiFi sound, touch control, Siri support. No logos or LEDs. Includes case, cable, manual. Compatible with iOS/Android.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a4e"
      },
      "name": "Lily Baker",
      "rating": 4,
      "comment": "Good sound quality, but battery life could be better.",
      "reviewTime": {
        "$date": "2023-06-15T16:30:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a6e"
      },
      "createdAt": {
        "$date": "2023-06-15T16:30:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-06-15T16:30:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "7c8d9e0f1a2b3c4d5e6f7a8e"
      },
      "name": "Daniel Nelson",
      "rating": 4.5,
      "comment": "Impressive audio quality for the price! Easy to pair.",
      "reviewTime": {
        "$date": "2023-07-05T11:00:00.000Z"
      },
      "_id": {
        "$oid": "9c0d1e2f3a4b5c6d7e8f9a0e"
      },
      "createdAt": {
        "$date": "2023-07-05T11:00:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-05T11:00:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "1c2d3e4f5a6b7c8d9e0f1a2e"
      },
      "name": "Chloe Carter",
      "rating": 3.5,
      "comment": "Touch controls are finicky, but decent audio quality.",
      "reviewTime": {
        "$date": "2023-07-18T08:45:00.000Z"
      },
      "_id": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a4e"
      },
      "createdAt": {
        "$date": "2023-07-18T08:45:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-18T08:45:00.000Z"
      }
    }
  ],
  "rating": 4,
  "numReviews": 3,
  "price": 21.99,
  "countInStock": 30,
  "__v": 0,
  "createdAt": {
    "$date": "2023-05-20T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-25T12:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef07"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f2e"
  },
  "name": "T31 Wireless Earbuds",
  "image": [
    "/uploads/product-7-1.jpeg",
    "/uploads/product-7-2.jpeg",
    "/uploads/product-7-3.jpeg",
    "/uploads/product-7-4.jpeg",
    "/uploads/product-7-5.jpeg"
  ],
  "brand": "UNKNOWN",
  "category": "Electronics",
  "description": "Dynamic TWS BL31 Headset: True Wireless, BT 5.2, dual mic noise cancellation, 30hr case life, ergonomic fit.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a4f"
      },
      "name": "Jack Morris",
      "rating": 5,
      "comment": "Great battery life and noise cancellation. Comfortable fit.",
      "reviewTime": {
        "$date": "2023-07-01T10:30:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a6f"
      },
      "createdAt": {
        "$date": "2023-07-01T10:30:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-01T10:30:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "7c8d9e0f1a2b3c4d5e6f7a8f"
      },
      "name": "Isla Peterson",
      "rating": 4,
      "comment": "Good sound quality, but connection can be spotty at times.",
      "reviewTime": {
        "$date": "2023-07-12T14:15:00.000Z"
      },
      "_id": {
        "$oid": "9c0d1e2f3a4b5c6d7e8f9a0f"
      },
      "createdAt": {
        "$date": "2023-07-12T14:15:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-12T14:15:00.000Z"
      }
    }
  ],
  "rating": 4.5,
  "numReviews": 2,
  "price": 26.99,
  "countInStock": 40,
  "__v": 0,
  "createdAt": {
    "$date": "2023-06-01T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-25T15:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef08"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f2f"
  },
  "name": "PS5 Cooling Stand",
  "image": [
    "/uploads/product-8-1.jpeg",
    "/uploads/product-8-2.jpeg",
    "/uploads/product-8-3.jpeg",
    "/uploads/product-8-4.jpeg",
    "/uploads/product-8-5.jpeg"
  ],
  "brand": "UNKNOWN",
  "category": "Video Games",
  "description": "PS5 cooling fan stand with dual charging stations, quiet operation, fast 3H charge, LED indicators, and safe, space-saving design.",
  "reviews": [],
  "rating": 0,
  "numReviews": 0,
  "price": 24.99,
  "countInStock": 25,
  "__v": 0,
  "createdAt": {
    "$date": "2023-05-28T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-20T10:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef09"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f30"
  },
  "name": "Electrical Table Lamp",
  "image": [
    "/uploads/product-9-1.jpeg",
    "/uploads/product-9-2.jpeg",
    "/uploads/product-9-3.jpeg",
    "/uploads/product-9-4.jpeg"
  ],
  "brand": "UNKNOWN",
  "category": "Home & Garden",
  "description": "Elegant ceramic jar table lamp with fabric shade, high-grade ceramic and copper details, H55 cm x W33 cm, available in various plug types.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a51"
      },
      "name": "Jessica Parker",
      "rating": 5,
      "comment": "Stunning lamp with exquisite craftsmanship. Elevates any room's decor.",
      "reviewTime": {
        "$date": "2023-07-01T14:30:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a71"
      },
      "createdAt": {
        "$date": "2023-07-01T14:30:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-01T14:30:00.000Z"
      }
    }
  ],
  "rating": 5,
  "numReviews": 1,
  "price": 429.99,
  "countInStock": 8,
  "__v": 0,
  "createdAt": {
    "$date": "2023-06-15T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-05T12:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef10"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f31"
  },
  "name": "Mini Air Conditioner",
  "image": [
    "/uploads/product-10-1.jpeg",
    "/uploads/product-10-2.jpeg",
    "/uploads/product-10-3.jpeg",
    "/uploads/product-10-4.jpeg",
    "/uploads/product-10-5.jpeg"
  ],
  "brand": "UNKNOWN",
  "category": "Home Appliances",
  "description": "Versatile Desktop Air Conditioning Fan: Features blowing, cooling, and humidifying functions, 300ml tank, USB-powered.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a52"
      },
      "name": "Lily Baker",
      "rating": 3.5,
      "comment": "Provides a nice breeze, but the cooling effect is minimal.",
      "reviewTime": {
        "$date": "2023-06-20T11:45:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a72"
      },
      "createdAt": {
        "$date": "2023-06-20T11:45:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-06-20T11:45:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "7c8d9e0f1a2b3c4d5e6f7a91"
      },
      "name": "Henry Mitchell",
      "rating": 4,
      "comment": "Compact and portable. Perfect for small spaces.",
      "reviewTime": {
        "$date": "2023-07-10T16:30:00.000Z"
      },
      "_id": {
        "$oid": "9c0d1e2f3a4b5c6d7e8f9a11"
      },
      "createdAt": {
        "$date": "2023-07-10T16:30:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-10T16:30:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "1c2d3e4f5a6b7c8d9e0f1a31"
      },
      "name": "Ella Bell",
      "rating": 3,
      "comment": "Decent for a quick cool down, but the water tank is small.",
      "reviewTime": {
        "$date": "2023-07-18T09:00:00.000Z"
      },
      "_id": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a52"
      },
      "createdAt": {
        "$date": "2023-07-18T09:00:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-18T09:00:00.000Z"
      }
    }
  ],
  "rating": 3.5,
  "numReviews": 3,
  "price": 19.99,
  "countInStock": 40,
  "__v": 0,
  "createdAt": {
    "$date": "2023-06-01T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-20T12:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef11"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f32"
  },
  "name": "Electric Hot Pot",
  "image": [
    "/uploads/product-11-1.jpeg",
    "/uploads/product-11-2.jpeg",
    "/uploads/product-11-3.jpeg",
    "/uploads/product-11-4.jpeg",
    "/uploads/product-11-5.jpeg"
  ],
  "brand": "UNKNOWN",
  "category": "Home & Kitchen",
  "description": "Multifunctional Electric Hot Pot: Dual-zone temperature control, 5L capacity, non-stick material, perfect for diverse cooking styles.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a53"
      },
      "name": "Isla Peterson",
      "rating": 5,
      "comment": "Excellent for hosting hot pot parties! Easy to use and clean.",
      "reviewTime": {
        "$date": "2023-06-25T19:00:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a73"
      },
      "createdAt": {
        "$date": "2023-06-25T19:00:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-06-25T19:00:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "1c2d3e4f5a6b7c8d9e0f1a32"
      },
      "name": "Matthew Cox",
      "rating": 5,
      "comment": "Versatile and easy to clean. Perfect for all kinds of hot pot dishes.",
      "reviewTime": {
        "$date": "2023-07-12T14:30:00.000Z"
      },
      "_id": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a53"
      },
      "createdAt": {
        "$date": "2023-07-12T14:30:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-12T14:30:00.000Z"
      }
    }
  ],
  "rating": 5,
  "numReviews": 2,
  "price": 82.99,
  "countInStock": 15,
  "__v": 0,
  "createdAt": {
    "$date": "2023-06-10T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-15T10:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef12"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f33"
  },
  "name": "Electric Moka Pot",
  "image": [
    "/uploads/product-12-1.jpeg",
    "/uploads/product-12-2.jpeg",
    "/uploads/product-12-3.jpeg",
    "/uploads/product-12-4.jpeg",
    "/uploads/product-12-5.jpeg"
  ],
  "brand": "SAINTCIAGA",
  "category": "Home & Kitchen",
  "description": "Automatic Electric Moka Pot: One-click extraction, adjustable power settings for rich, mellow coffee.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a54"
      },
      "name": "Alexander Scott",
      "rating": 4.5,
      "comment": "Fantastic for making rich, flavorful coffee at home. Easy to use.",
      "reviewTime": {
        "$date": "2023-06-18T08:30:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a74"
      },
      "createdAt": {
        "$date": "2023-06-18T08:30:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-06-18T08:30:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "7c8d9e0f1a2b3c4d5e6f7a93"
      },
      "name": "Abigail Green",
      "rating": 4,
      "comment": "Brews great coffee, but the pot can be tricky to clean.",
      "reviewTime": {
        "$date": "2023-07-02T14:00:00.000Z"
      },
      "_id": {
        "$oid": "9c0d1e2f3a4b5c6d7e8f9a13"
      },
      "createdAt": {
        "$date": "2023-07-02T14:00:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-02T14:00:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "1c2d3e4f5a6b7c8d9e0f1a33"
      },
      "name": "Mason Wong",
      "rating": 5,
      "comment": "Consistent, rich coffee every time. Highly recommended for espresso lovers!",
      "reviewTime": {
        "$date": "2023-07-10T10:15:00.000Z"
      },
      "_id": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a54"
      },
      "createdAt": {
        "$date": "2023-07-10T10:15:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-10T10:15:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a75"
      },
      "name": "Mia Hernandez",
      "rating": 4.5,
      "comment": "Produces rich, flavorful coffee with minimal effort.",
      "reviewTime": {
        "$date": "2023-07-18T16:00:00.000Z"
      },
      "_id": {
        "$oid": "7c8d9e0f1a2b3c4d5e6f7a94"
      },
      "createdAt": {
        "$date": "2023-07-18T16:00:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-18T16:00:00.000Z"
      }
    }
  ],
  "rating": 4.5,
  "numReviews": 4,
  "price": 82.99,
  "countInStock": 12,
  "__v": 0,
  "createdAt": {
    "$date": "2023-06-01T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-20T12:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef13"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f34"
  },
  "name": "24MP Video Camera",
  "image": [
    "/uploads/product-13-1.jpeg",
    "/uploads/product-13-2.jpeg",
    "/uploads/product-13-3.jpeg",
    "/uploads/product-13-4.jpeg",
    "/uploads/product-13-5.jpeg"
  ],
  "brand": "UNKNOWN",
  "category": "Electronics",
  "description": "24MP Vlogging Camera with 2.7K HD, 180° flip screen, built-in flashlight, digital zoom, and versatile shooting modes.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a55"
      },
      "name": "Avery Reed",
      "rating": 4,
      "comment": "Good image quality, but low-light performance could be better.",
      "reviewTime": {
        "$date": "2023-10-22T13:45:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a76"
      },
      "createdAt": {
        "$date": "2023-10-22T13:45:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-10-22T13:45:00.000Z"
      }
    }
  ],
  "rating": 4,
  "numReviews": 1,
  "price": 119.99,
  "countInStock": 18,
  "__v": 0,
  "createdAt": {
    "$date": "2023-06-10T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-20T14:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef14"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f34"
  },
  "name": "Wanbo T6 Mini Projector",
  "image": [
    "/uploads/product-14-1.jpeg",
    "/uploads/product-14-2.jpeg",
    "/uploads/product-14-3.jpeg",
    "/uploads/product-14-4.jpeg",
    "/uploads/product-14-5.jpeg"
  ],
  "brand": "Wanbo",
  "category": "Electronics",
  "description": "Compact 1080P projector, 4K decoding, HDR10+, 650 ANSI lumens, Android 9.0, AI voice control, dual fan, auto-focus, and WiFi sync.",
  "reviews": [],
  "rating": 0,
  "numReviews": 0,
  "price": 429.99,
  "countInStock": 6,
  "__v": 0,
  "createdAt": {
    "$date": "2023-06-10T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-20T14:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef15"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f35"
  },
  "name": "DM9 Wired Earphone",
  "image": [
    "/uploads/product-15-1.jpeg",
    "/uploads/product-15-2.jpeg",
    "/uploads/product-15-3.jpeg",
    "/uploads/product-15-4.jpeg",
    "/uploads/product-15-5.jpeg"
  ],
  "brand": "QKZ",
  "category": "Electronics",
  "description": "DM9 in-ear wired earphones with mic, heavy bass, 3.5mm plug. Metal build, comfortable fit. Includes 3 ear plug sizes. Compatible with phones/tablets.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a56"
      },
      "name": "Ayaan Chaudhary",
      "rating": 4.5,
      "comment": "Impressive sound quality for the price. Solid bass and clarity.",
      "reviewTime": {
        "$date": "2023-06-25T20:30:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a77"
      },
      "createdAt": {
        "$date": "2023-06-25T20:30:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-06-25T20:30:00.000Z"
      }
    }
  ],
  "rating": 4.5,
  "numReviews": 1,
  "price": 13.99,
  "countInStock": 50,
  "__v": 0,
  "createdAt": {
    "$date": "2023-06-15T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-15T12:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef16"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f36"
  },
  "name": "Corn Kernel Peeler",
  "image": [
    "/uploads/product-16-1.jpeg",
    "/uploads/product-16-2.jpeg",
    "/uploads/product-16-3.jpeg",
    "/uploads/product-16-4.jpeg",
    "/uploads/product-16-5.jpeg"
  ],
  "brand": "TEMPS DETIR",
  "category": "Kitchen & Dining",
  "description": "Corn Thresher Attachment for Drills: Efficient, compact tool for quickly stripping corn. Made of durable nylon, compatible with most drills.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a57"
      },
      "name": "Aria Collins",
      "rating": 5,
      "comment": "Such a time-saver! Strips corn effortlessly and quickly.",
      "reviewTime": {
        "$date": "2023-07-01T18:00:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a78"
      },
      "createdAt": {
        "$date": "2023-07-01T18:00:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-01T18:00:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "1c2d3e4f5a6b7c8d9e0f1a36"
      },
      "name": "Oliver Ward",
      "rating": 5,
      "comment": "A must-have kitchen gadget! Saves so much time and effort.",
      "reviewTime": {
        "$date": "2023-07-15T11:00:00.000Z"
      },
      "_id": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a57"
      },
      "createdAt": {
        "$date": "2023-07-15T11:00:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-15T11:00:00.000Z"
      }
    }
  ],
  "rating": 4.5,
  "numReviews": 2,
  "price": 27.99,
  "countInStock": 25,
  "__v": 0,
  "createdAt": {
    "$date": "2023-06-20T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-20T10:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef17"
  },
  "user": {
    "$oid": "6b2c3d4e5f6a7b8c9d0e1f37"
  },
  "name": "Tire Inflator for Car",
  "image": [
    "/uploads/product-17-1.jpeg",
    "/uploads/product-17-2.jpeg",
    "/uploads/product-17-3.jpeg",
    "/uploads/product-17-4.jpeg",
    "/uploads/product-17-5.jpeg"
  ],
  "brand": "UNKNOWN",
  "category": "Automotive",
  "description": "Versatile car air pump with 120W power, 35L/min flow, digital display, and tire pressure auto-stop feature. Includes light and 3m power cord.",
  "reviews": [
    {
      "user": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a58"
      },
      "name": "Sebastian Bello",
      "rating": 4.5,
      "comment": "Powerful and easy to use. The auto-stop feature is very handy.",
      "reviewTime": {
        "$date": "2023-06-28T20:15:00.000Z"
      },
      "_id": {
        "$oid": "5c6d7e8f9a0b1c2d3e4f5a79"
      },
      "createdAt": {
        "$date": "2023-06-28T20:15:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-06-28T20:15:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "7c8d9e0f1a2b3c4d5e6f7a97"
      },
      "name": "Jack Murphy",
      "rating": 4,
      "comment": "Decent inflator, but the cord could be longer for better reach.",
      "reviewTime": {
        "$date": "2023-07-05T11:30:00.000Z"
      },
      "_id": {
        "$oid": "9c0d1e2f3a4b5c6d7e8f9a17"
      },
      "createdAt": {
        "$date": "2023-07-05T11:30:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-05T11:30:00.000Z"
      }
    },
    {
      "user": {
        "$oid": "1c2d3e4f5a6b7c8d9e0f1a37"
      },
      "name": "Isla Cook",
      "rating": 5,
      "comment": "Powerful and reliable. The built-in light is very helpful.",
      "reviewTime": {
        "$date": "2023-07-12T16:45:00.000Z"
      },
      "_id": {
        "$oid": "3c4d5e6f7a8b9c0d1e2f3a58"
      },
      "createdAt": {
        "$date": "2023-07-12T16:45:00.000Z"
      },
      "updatedAt": {
        "$date": "2023-07-12T16:45:00.000Z"
      }
    }
  ],
  "rating": 4.5,
  "numReviews": 3,
  "price": 23.99,
  "countInStock": 30,
  "__v": 0,
  "createdAt": {
    "$date": "2023-06-15T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-15T12:00:00.000Z"
  }
},
{
  "_id": {
    "$oid": "621000a1ef011b23c456ef18"
  },
  "user": {
    "$oid": "6b2c3d4e5e6a7b8c9d0f1f21"
  },
  "name": "Folding Washing Machine",
  "image": [
    "/uploads/product-18-1.jpeg",
    "/uploads/product-18-2.jpeg",
    "/uploads/product-18-3.jpeg",
    "/uploads/product-18-4.jpeg"
  ],
  "brand": "UNKNOWN",
  "category": "House Appliances",
  "description": "Compact 15L folding washing machine with drain basket, 3 timing settings, and pulsator that mimics hand-washing for gentle, effective cleaning.",
  "reviews": [],
  "rating": 0,
  "numReviews": 0,
  "price": 99.99,
  "countInStock": 9,
  "__v": 0,
  "createdAt": {
    "$date": "2023-06-15T00:00:00.000Z"
  },
  "updatedAt": {
    "$date": "2023-07-15T12:00:00.000Z"
  }
}];

export default products;
