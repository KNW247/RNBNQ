const compareClusters = [
  {
    id: "strong-hop-forward-family",
    title: "Strong Hop-Forward Family",
    styles: ["American IPA", "Double IPA", "American Barleywine"],

    sharedIdentity: {
      best: "Strong hop-forward American ales with assertive bitterness and prominent hop character",
      weaker: [
        "Hop-forward strong ales",
        "Strong American ales",
        "Bitter American ales",
        "High-intensity hop ales"
      ]
    },

    anchor: {
      correct: "Double IPA",
      feedback: {
        "American IPA":
          "Usable, but not ideal. American IPA is the smaller, less intense member of the family, making it less effective as the midpoint comparison.",

        "American Barleywine":
          "Not the strongest anchor. American Barleywine shifts toward heavier malt richness and broader malt complexity, making midpoint comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "American IPA",
        prompt: "Compared to Double IPA, American IPA is:",
        correct: [
          "lower alcohol",
          "lighter body",
          "lower hop intensity",
          "less overall bitterness",
          "smaller overall presentation",
          "less malt support"
        ],
        distractors: [
          "higher alcohol",
          "fuller body",
          "greater hop intensity",
          "larger presentation",
          "stronger malt backbone"
        ]
      },

      {
        style: "American Barleywine",
        prompt: "Compared to Double IPA, American Barleywine is:",
        correct: [
          "greater malt richness",
          "fuller body",
          "heavier presentation",
          "more malt-forward balance",
          "less hop-driven dryness",
          "richer dark fruit/caramel complexity"
        ],
        distractors: [
          "leaner body",
          "more hop-driven balance",
          "lighter malt structure",
          "sharper bitterness focus",
          "cleaner drier presentation"
        ]
      }
    ],

    modelAnswer:
      "All three are strong hop-forward American ales with assertive bitterness and prominent hop character. Compared to Double IPA, American IPA is lighter, lower in alcohol, and less intense overall. American Barleywine moves in the opposite direction, becoming fuller, richer, and more malt-driven, while still maintaining strong hop presence.",

    commercialExamples: {
      "American IPA": ["Stone IPA", "Bell’s Two Hearted"],
      "Double IPA": ["Russian River Pliny the Elder", "Stone Ruination"],
      "American Barleywine": ["Sierra Nevada Bigfoot", "Anchor Old Foghorn"]
    }
  },

  {
    id: "porter-family",
    title: "Porter Family",
    styles: ["English Porter", "American Porter", "Baltic Porter"],

    sharedIdentity: {
      best: "Dark malt-forward beers with restrained-to-prominent roast character and smooth drinkability",
      weaker: [
        "Dark beers",
        "Porter-family beers",
        "Roasty dark beers",
        "Malt-forward dark beers"
      ]
    },

    anchor: {
      correct: "English Porter",
      feedback: {
        "American Porter":
          "Usable, but not ideal. American Porter pushes roast, bitterness, and hop expression upward, making it less neutral as the baseline.",

        "Baltic Porter":
          "Not the strongest anchor. Baltic Porter is the stronger, smoother, lagered expression, making midpoint comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "American Porter",
        prompt: "Compared to English Porter, American Porter is:",
        correct: [
          "stronger roast character",
          "firmer bitterness",
          "more hop presence",
          "more assertive American character",
          "greater overall intensity"
        ],
        distractors: [
          "softer roast",
          "lower bitterness",
          "less hop presence",
          "more restrained profile",
          "lighter overall intensity"
        ]
      },

      {
        style: "Baltic Porter",
        prompt: "Compared to English Porter, Baltic Porter is:",
        correct: [
          "higher alcohol",
          "fuller body",
          "cleaner lager fermentation",
          "smoother profile",
          "richer dark malt complexity",
          "stronger overall presentation"
        ],
        distractors: [
          "lower alcohol",
          "lighter body",
          "more ale-like fermentation",
          "sharper roast",
          "leaner presentation",
          "less malt richness"
        ]
      }
    ],

    modelAnswer:
      "All three are dark malt-forward beers with restrained-to-prominent roast character and smooth drinkability. Compared to English Porter, American Porter becomes more assertive, with stronger roast, firmer bitterness, and more hop presence. Baltic Porter moves in a different direction, becoming stronger, fuller, smoother, and cleaner-fermented, with richer dark malt complexity.",

    commercialExamples: {
      "English Porter": ["Fuller’s London Porter", "Samuel Smith Taddy Porter"],
      "American Porter": ["Founders Porter", "Deschutes Black Butte Porter"],
      "Baltic Porter": ["Zywiec Porter", "Okocim Porter"]
    }
  },

  {
    id: "pils-pale-lager-family",
    title: "Pils / Pale Lager Family",
    styles: ["German Pils", "Czech Premium Pale Lager", "Munich Helles"],

    sharedIdentity: {
      best: "Pale continental lagers with clean fermentation, high drinkability, and refined balance",
      weaker: [
        "Pale lagers",
        "Continental pale lagers",
        "Balanced pale lagers",
        "Traditional pale lagers"
      ]
    },

    anchor: {
      correct: "Czech Premium Pale Lager",
      feedback: {
        "German Pils":
          "Usable, but not ideal. German Pils pushes bitterness and dryness upward, making it less effective as the central comparison point.",

        "Munich Helles":
          "Not the strongest anchor. Munich Helles is the softest, most malt-forward member of the group, making midpoint comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "German Pils",
        prompt: "Compared to Czech Premium Pale Lager, German Pils is:",
        correct: [
          "firmer bitterness",
          "drier finish",
          "sharper hop expression",
          "leaner malt profile",
          "crisper presentation"
        ],
        distractors: [
          "softer bitterness",
          "rounder malt profile",
          "richer malt body",
          "less hop emphasis",
          "fuller finish"
        ]
      },

      {
        style: "Munich Helles",
        prompt: "Compared to Czech Premium Pale Lager, Munich Helles is:",
        correct: [
          "softer bitterness",
          "greater malt roundness",
          "less hop emphasis",
          "more delicate presentation",
          "smoother finish"
        ],
        distractors: [
          "firmer bitterness",
          "greater hop intensity",
          "drier finish",
          "leaner body",
          "sharper bitterness"
        ]
      }
    ],

    modelAnswer:
      "All three are pale continental lagers with clean fermentation, high drinkability, and refined balance. Compared to Czech Premium Pale Lager, German Pils becomes drier, firmer in bitterness, and sharper in hop expression. Munich Helles moves in the opposite direction, becoming softer, rounder, more malt-accented, and more delicate in presentation.",

    commercialExamples: {
      "German Pils": ["Bitburger", "Jever"],
      "Czech Premium Pale Lager": ["Pilsner Urquell", "Budvar"],
      "Munich Helles": ["Augustiner Helles", "Weihenstephaner Original"]
    }
  },

  {
    id: "farmhouse-belgian-pale-family",
    title: "Farmhouse / Belgian Pale Family",
    styles: ["Belgian Pale Ale", "Bière de Garde", "Saison"],

    sharedIdentity: {
      best: "Traditional continental ales where fermentation drives defining aroma and flavor characteristics",
      weaker: [
        "Expressive continental ales",
        "European ale styles",
        "Moderate-strength traditional ales",
        "Fermentation-driven ales"
      ]
    },

    anchor: {
      correct: "Belgian Pale Ale",
      feedback: {
        "Bière de Garde":
          "Usable, but not ideal. Bière de Garde shifts toward a more malt-accented and less fermentation-expressive profile, making it less effective as the central comparison point.",

        "Saison":
          "Not the strongest anchor. Saison is the most fermentation-driven and stylistically distinctive expression, making midpoint comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "Bière de Garde",
        prompt: "Compared to Belgian Pale Ale, Bière de Garde is:",
        correct: [
          "greater malt emphasis",
          "cleaner fermentation profile",
          "less expressive yeast character",
          "fuller malt presentation",
          "more restrained phenolic/ester expression"
        ],
        distractors: [
          "more expressive fermentation",
          "drier finish",
          "higher phenolic intensity",
          "lighter body",
          "more rustic presentation"
        ]
      },

      {
        style: "Saison",
        prompt: "Compared to Belgian Pale Ale, Saison is:",
        correct: [
          "drier finish",
          "more expressive fermentation",
          "stronger phenolic character",
          "leaner body",
          "more rustic presentation",
          "higher attenuation"
        ],
        distractors: [
          "cleaner fermentation",
          "greater malt richness",
          "rounder sweeter finish",
          "more restrained yeast expression",
          "fuller malt balance"
        ]
      }
    ],

    modelAnswer:
      "All three are traditional continental ales where fermentation drives defining aroma and flavor characteristics. Compared to Belgian Pale Ale, Bière de Garde becomes more malt-accented and fermentation-restrained, while Saison becomes drier, leaner, more highly attenuated, and far more fermentation-driven.",

    commercialExamples: {
      "Belgian Pale Ale": ["De Koninck", "Palm Speciale"],
      "Bière de Garde": ["Jenlain Ambrée", "St. Sylvestre 3 Monts"],
      "Saison": ["Saison Dupont", "Saison Voisin"]
    }
  },

  {
    id: "blonde-cream-kolsch-family",
    title: "Pale Clean Ale Family",
    styles: ["Blonde Ale", "Cream Ale", "Kölsch"],

    sharedIdentity: {
      best: "Pale, approachable, easy-drinking ales with clean fermentation character",
      weaker: [
        "Pale easy-drinking ales",
        "Standard-strength pale ales",
        "Clean pale ales",
        "Approachable ale styles"
      ]
    },

    anchor: {
      correct: "Blonde Ale",
      feedback: {
        "Cream Ale":
          "Usable, but not ideal. Cream Ale introduces hybrid/lager-like traits that make it less effective as the broad comparison baseline.",

        "Kölsch":
          "Not the strongest anchor. Kölsch is a more specialized, delicate expression. A broader central reference makes comparison cleaner."
      }
    },

    comparisons: [
      {
        style: "Cream Ale",
        prompt: "Compared to Blonde Ale, Cream Ale is:",
        correct: [
          "cleaner fermentation profile",
          "more lager-like impression",
          "possible adjunct character",
          "lighter-bodied",
          "more neutral profile"
        ],
        distractors: [
          "more expressive yeast character",
          "stronger fruity esters",
          "fuller body",
          "richer malt expression",
          "more fermentation complexity"
        ]
      },

      {
        style: "Kölsch",
        prompt: "Compared to Blonde Ale, Kölsch is:",
        correct: [
          "more delicate",
          "crisper",
          "more highly attenuated",
          "more refined",
          "subtle fruit character",
          "more lager-like conditioning impression"
        ],
        distractors: [
          "heavier body",
          "sweeter finish",
          "stronger ester profile",
          "richer malt expression",
          "broader fermentation profile"
        ]
      }
    ],

    modelAnswer:
      "All three are pale, approachable, easy-drinking ales with clean fermentation character. Compared to Blonde Ale, Cream Ale is generally cleaner, lighter, and often presents a more lager-like impression, sometimes with subtle adjunct character. Kölsch is the most delicate and refined of the group, with a crisper, more highly attenuated finish and subtle fermentation character.",

    commercialExamples: {
      "Blonde Ale": [],
      "Cream Ale": ["Genesee Cream Ale"],
      "Kölsch": ["Reissdorf Kölsch", "Früh Kölsch"]
    }
  },

  {
    id: "german-pale-lager-family",
    title: "German Pale Lager Family",
    styles: ["German Pils", "German Helles Exportbier", "Munich Helles"],

    sharedIdentity: {
      best: "Pale German lagers with clean fermentation, high drinkability, and refined balance",
      weaker: [
        "German pale lagers",
        "Clean German lagers",
        "Drinkable pale German lagers",
        "Balanced German lagers"
      ]
    },

    anchor: {
      correct: "German Helles Exportbier",
      feedback: {
        "German Pils":
          "Usable, but not ideal. German Pils sits at the sharper bitter end of the family, making it less effective as the central comparison point.",

        "Munich Helles":
          "Not the strongest anchor. Munich Helles sits at the softer malt-forward end of the family. A central midpoint makes comparison cleaner."
      }
    },

    comparisons: [
      {
        style: "German Pils",
        prompt: "Compared to German Helles Exportbier, German Pils is:",
        correct: [
          "more assertive bitterness",
          "drier finish",
          "sharper hop expression",
          "leaner malt profile",
          "crisper overall presentation"
        ],
        distractors: [
          "softer bitterness",
          "fuller malt expression",
          "rounder finish",
          "lower bitterness",
          "more malt-forward balance"
        ]
      },

      {
        style: "Munich Helles",
        prompt: "Compared to German Helles Exportbier, Munich Helles is:",
        correct: [
          "softer bitterness",
          "more malt-forward",
          "rounder malt profile",
          "less hop emphasis",
          "more delicate presentation"
        ],
        distractors: [
          "more assertive bitterness",
          "drier finish",
          "stronger hop expression",
          "leaner malt balance",
          "sharper finish"
        ]
      }
    ],

    modelAnswer:
      "All three are pale German lagers with clean fermentation, high drinkability, and refined balance. Compared to German Helles Exportbier, German Pils is drier, crisper, and more assertively bitter, with stronger hop emphasis. Munich Helles moves in the opposite direction, with softer bitterness, greater malt roundness, and a more delicate overall presentation.",

    commercialExamples: {
      "German Pils": ["Bitburger", "Jever"],
      "German Helles Exportbier": ["Dortmunder Actien Export", "Great Lakes Dortmunder Gold"],
      "Munich Helles": ["Augustiner Helles", "Weihenstephaner Original"]
    }
  },

  {
    id: "belgian-strong-pale-family",
    title: "Belgian Strong Pale Family",
    styles: ["Belgian Blonde Ale", "Belgian Tripel", "Belgian Golden Strong Ale"],

    sharedIdentity: {
      best: "Strong pale Belgian ales where expressive fermentation and high attenuation define the family",
      weaker: [
        "Strong Belgian ales",
        "Belgian pale ales",
        "Expressive strong ales",
        "High-attenuation Belgian beers"
      ]
    },

    anchor: {
      correct: "Belgian Tripel",
      feedback: {
        "Belgian Blonde Ale":
          "Usable, but not ideal. Belgian Blonde Ale is the softer, less intense member of the family, making it less effective as the central comparison point.",

        "Belgian Golden Strong Ale":
          "Not the strongest anchor. Belgian Golden Strong Ale is the driest and most highly attenuated extreme, making midpoint comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "Belgian Blonde Ale",
        prompt: "Compared to Belgian Tripel, Belgian Blonde Ale is:",
        correct: [
          "lower alcohol",
          "softer presentation",
          "less intense fermentation expression",
          "rounder malt profile",
          "less aggressive attenuation"
        ],
        distractors: [
          "higher alcohol",
          "drier finish",
          "leaner body",
          "more intense fermentation",
          "greater attenuation"
        ]
      },

      {
        style: "Belgian Golden Strong Ale",
        prompt: "Compared to Belgian Tripel, Belgian Golden Strong Ale is:",
        correct: [
          "drier finish",
          "higher attenuation",
          "leaner body",
          "lighter malt structure",
          "more champagne-like presentation",
          "sharper drinkability despite strength"
        ],
        distractors: [
          "fuller malt richness",
          "rounder body",
          "lower attenuation",
          "heavier malt balance",
          "sweeter finish"
        ]
      }
    ],

    modelAnswer:
      "All three are strong pale Belgian ales where expressive fermentation and high attenuation define the family. Compared to Belgian Tripel, Belgian Blonde Ale is softer, lower in alcohol, and less intense overall. Belgian Golden Strong Ale becomes drier, leaner, more highly attenuated, and more champagne-like in presentation.",

    commercialExamples: {
      "Belgian Blonde Ale": ["Leffe Blonde", "Affligem Blonde"],
      "Belgian Tripel": ["Westmalle Tripel", "St. Bernardus Tripel"],
      "Belgian Golden Strong Ale": ["Duvel", "Delirium Tremens"]
    }
  },

  {
    id: "british-bitters-family",
    title: "British Bitters Family",
    styles: ["Ordinary Bitter", "Best Bitter", "Strong Bitter"],

    sharedIdentity: {
      best: "British bitter ales with balanced drinkability and traditional British fermentation character",
      weaker: [
        "British bitter ales",
        "Moderate-strength British ales",
        "Balanced British pale ales",
        "Traditional British session ales"
      ]
    },

    anchor: {
      correct: "Best Bitter",
      feedback: {
        "Ordinary Bitter":
          "Usable, but not ideal. Ordinary Bitter sits at one edge of the family. A central reference makes comparison cleaner.",

        "Strong Bitter":
          "Not the strongest anchor. Strong Bitter represents the upper end of the family. Choose the more central comparison point."
      }
    },

    comparisons: [
      {
        style: "Ordinary Bitter",
        prompt: "Compared to Best Bitter, Ordinary Bitter is:",
        correct: [
          "lower gravity",
          "lower alcohol",
          "lighter body",
          "less flavor intensity",
          "more sessionable"
        ],
        distractors: [
          "higher gravity",
          "higher alcohol",
          "fuller body",
          "greater flavor intensity",
          "less sessionable"
        ]
      },

      {
        style: "Strong Bitter",
        prompt: "Compared to Best Bitter, Strong Bitter is:",
        correct: [
          "higher gravity",
          "higher alcohol",
          "fuller body",
          "greater malt presence",
          "stronger flavor intensity",
          "more hop expression"
        ],
        distractors: [
          "lower gravity",
          "lower alcohol",
          "lighter body",
          "less flavor intensity",
          "less malt presence",
          "less hop expression"
        ]
      }
    ],

    modelAnswer:
      "All three are British bitter ales with traditional British fermentation character and balanced drinkability. Compared to Best Bitter, Ordinary Bitter is lower in gravity, alcohol, body, and overall flavor intensity, making it the most sessionable member of the family. Strong Bitter is the largest and most robust expression, with higher gravity, fuller body, and greater malt and hop intensity.",

    commercialExamples: {
      "Ordinary Bitter": ["Banks’s Mild", "Brains Bitter"],
      "Best Bitter": ["Fuller’s London Pride", "Adnams Southwold Bitter"],
      "Strong Bitter": ["Fuller’s ESB", "Shepherd Neame Bishop’s Finger"]
    }
  },

  {
    id: "german-wheat-family",
    title: "German Wheat Family",
    styles: ["Weissbier", "Dunkles Weissbier", "Weizenbock"],

    sharedIdentity: {
      best: "German wheat ales with distinctive banana/clove fermentation character and a prominent wheat profile",
      weaker: [
        "German wheat ales",
        "Wheat-forward German ales",
        "German wheat beers with expressive fermentation",
        "Traditional German wheat styles"
      ]
    },

    anchor: {
      correct: "Weissbier",
      feedback: {
        "Dunkles Weissbier":
          "Usable, but not ideal. Dunkles Weissbier adds malt complexity that makes it less effective as the clean baseline reference.",

        "Weizenbock":
          "Not the strongest anchor. Weizenbock is the largest and most intense expression of the family. A simpler baseline makes comparison cleaner."
      }
    },

    comparisons: [
      {
        style: "Dunkles Weissbier",
        prompt: "Compared to Weissbier, Dunkles Weissbier is:",
        correct: [
          "darker malt profile",
          "greater malt richness",
          "more bread crust character",
          "more caramelized malt expression",
          "less emphasis on pale wheat brightness"
        ],
        distractors: [
          "lighter body",
          "less malt presence",
          "cleaner fermentation",
          "less expressive yeast character",
          "lower malt complexity"
        ]
      },

      {
        style: "Weizenbock",
        prompt: "Compared to Weissbier, Weizenbock is:",
        correct: [
          "higher alcohol",
          "fuller body",
          "greater malt intensity",
          "richer overall flavor",
          "stronger warming character",
          "more intense expression"
        ],
        distractors: [
          "lower alcohol",
          "lighter body",
          "less malt depth",
          "more restrained profile",
          "more sessionable",
          "cleaner finish"
        ]
      }
    ],

    modelAnswer:
      "All three are German wheat ales with distinctive banana/clove fermentation character and a prominent wheat profile. Compared to Weissbier, Dunkles Weissbier retains the same yeast-driven character but adds darker malt richness and greater bread crust complexity. Weizenbock is the strongest and fullest expression of the family, with higher alcohol, richer malt intensity, and a more warming, intense overall presentation.",

    commercialExamples: {
      "Weissbier": ["Weihenstephaner Hefeweissbier", "Paulaner Hefe-Weizen"],
      "Dunkles Weissbier": ["Franziskaner Dunkel", "Ayinger Urweisse"],
      "Weizenbock": ["Schneider Aventinus", "Weihenstephaner Vitus"]
    }
  }
];
