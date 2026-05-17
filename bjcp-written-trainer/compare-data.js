const compareClusters = [
 {
  id: "strong-hop-forward-family",
  title: "Strong Hop-Forward Family",
  styles: ["American Barleywine", "American IPA", "Double IPA"],

  sharedIdentity: {
    best: "Strong hop-forward American ales with assertive bitterness and prominent hop character",
    weaker: [
      "Strong American ales with bold malt flavor and elevated alcohol",
      "Hop-forward American ales with clean fermentation and moderate strength",
      "American ales with prominent hops but restrained alcohol presence",
      "High-intensity American ales with rich malt complexity and warming strength"
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
  styles: ["American Porter", "Baltic Porter", "English Porter"],

  sharedIdentity: {
    best: "Dark malt-forward beers with restrained-to-prominent roast character and smooth drinkability",
    weaker: [
      "Dark American and British ales with noticeable roast character and firm bitterness",
      "Strong dark lager beers with smooth malt complexity and restrained roast character",
      "Traditional dark ales with moderate strength, roast character, and easy drinkability",
      "Dark malt-driven beers with aggressive roast bitterness and sharp dry finish"
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
  styles: ["Czech Premium Pale Lager", "German Pils", "Munich Helles"],

  sharedIdentity: {
    best: "Pale continental lagers with clean fermentation, high drinkability, and refined balance",
    weaker: [
      "Pale bitter continental lagers with assertive hop character and dry finish",
      "Soft malt-forward continental lagers with delicate bitterness and smooth drinkability",
      "Traditional pale lagers with prominent noble hop bitterness and crisp dry balance",
      "Clean pale European lagers with fuller malt expression and restrained hop bitterness"
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
      "Traditional continental ales with restrained fermentation and stronger malt-driven balance",
      "European farmhouse ales with highly expressive rustic fermentation and dry finish",
      "Moderate-strength Belgian ales with clean fermentation and balanced malt character",
      "Continental ales with rich malt expression, soft bitterness, and restrained yeast character"
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
      "Pale American ales with soft malt balance and restrained hop bitterness",
      "Hybrid-style pale beers with lager-like smoothness and subtle fermentation character",
      "Traditional European pale ales with delicate fermentation and crisp drinkability",
      "Pale refreshing ales with sharper bitterness and drier overall presentation"
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
  styles: ["German Helles Exportbier", "German Pils", "Munich Helles"],

  sharedIdentity: {
    best: "Pale German lagers with clean fermentation, high drinkability, and refined balance",
    weaker: [
      "Pale German lagers with assertive bitterness and crisp dry finish",
      "Soft malt-forward German lagers with delicate bitterness and smooth drinkability",
      "Stronger pale German lagers with fuller body and elevated malt intensity",
      "Clean German lagers with prominent hop bitterness and firm dry balance"
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
  styles: ["Belgian Blonde Ale", "Belgian Golden Strong Ale", "Belgian Tripel"],

  sharedIdentity: {
    best: "Strong pale Belgian ales where expressive fermentation and high attenuation define the family",
    weaker: [
      "Strong Belgian ales with darker malt richness and layered dark fruit complexity",
      "Highly attenuated Belgian ales with lean body and champagne-like presentation",
      "Expressive Belgian ales with moderate strength and softer malt-forward balance",
      "Belgian strong ales with fuller sweetness and restrained fermentation character"
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
  styles: ["Best Bitter", "Ordinary Bitter", "Strong Bitter"],

  sharedIdentity: {
    best: "British bitter ales with balanced drinkability and traditional British fermentation character",
    weaker: [
      "Traditional British session ales with low alcohol and restrained flavor intensity",
      "British pale ales with stronger alcohol, fuller body, and richer malt expression",
      "Balanced British ales with firm bitterness and cleaner fermentation character",
      "Moderate-strength British ales with aggressive hop bitterness and dry finish"
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
  styles: ["Dunkles Weissbier", "Weissbier", "Weizenbock"],

  sharedIdentity: {
    best: "German wheat ales with distinctive banana/clove fermentation character and a prominent wheat profile",
    weaker: [
      "German wheat ales with darker malt richness and restrained fermentation character",
      "Strong German wheat ales with elevated alcohol and intense warming malt complexity",
      "Traditional wheat ales with expressive fermentation and light refreshing body",
      "German ales with prominent wheat character and clean restrained fermentation"
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
  },

{
  id: "abbey-dark-family",
  title: "Abbey Dark Family",
  styles: ["Belgian Dark Strong Ale", "Belgian Dubbel", "Old Ale"],

  sharedIdentity: {
    best: "Strong malt-forward ales with layered dark fruit complexity and expressive fermentation character",
    weaker: [
      "Strong dark ales with clean fermentation and roast-driven bitterness",
      "Malt-forward English ales with restrained fermentation and aged oxidative complexity",
      "Belgian strong ales with pale malt profile, high attenuation, and expressive fruity fermentation",
      "High-strength dark ales with aggressive roast character and sharp dry finish"
    ]
  },

    anchor: {
      correct: "Belgian Dark Strong Ale",
      feedback: {
        "Belgian Dubbel":
          "Usable, but not ideal. Belgian Dubbel is the smaller, less intense expression, making it less effective as the central comparison point.",

        "Old Ale":
          "Not the strongest anchor. Old Ale shifts toward English malt complexity and restrained fermentation, making midpoint comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "Belgian Dubbel",
        prompt: "Compared to Belgian Dark Strong Ale, Belgian Dubbel is:",
        correct: [
          "lower alcohol",
          "lighter body",
          "less overall intensity",
          "less dark fruit complexity",
          "less warming character",
          "smaller overall presentation"
        ],
        distractors: [
          "higher alcohol",
          "fuller body",
          "greater malt richness",
          "stronger fermentation intensity",
          "larger presentation"
        ]
      },

      {
        style: "Old Ale",
        prompt: "Compared to Belgian Dark Strong Ale, Old Ale is:",
        correct: [
          "more restrained fermentation character",
          "more English malt complexity",
          "less expressive fruity/spicy fermentation",
          "lower carbonation",
          "rounder malt presentation"
        ],
        distractors: [
          "more expressive Belgian fermentation",
          "higher carbonation",
          "stronger phenolic character",
          "lighter malt complexity",
          "more effervescent presentation"
        ]
      }
    ],

    modelAnswer:
      "All three are strong malt-forward ales with layered dark fruit complexity and expressive fermentation character. Compared to Belgian Dark Strong Ale, Belgian Dubbel is smaller, less intense, and less warming, while Old Ale moves toward a rounder English malt-driven expression with more restrained fermentation character.",

    commercialExamples: {
      "Belgian Dubbel": ["Westmalle Dubbel", "Chimay Red"],
      "Belgian Dark Strong Ale": ["Chimay Blue", "Rochefort 10"],
      "Old Ale": ["Theakston Old Peculier", "Greene King Strong Suffolk Ale"]
    }
  },

{
  id: "british-dark-family",
  title: "British Dark Family",
  styles: ["Brown Porter", "Dark Mild", "Sweet Stout"],

  sharedIdentity: {
    best: "Malt-driven dark British ales emphasizing drinkability over aggressive roast",
    weaker: [
      "Dark British ales with aggressive roast bitterness and sharp dry finish",
      "Traditional British session ales with low alcohol and restrained dark malt character",
      "Sweet dark ales with fuller body, residual sweetness, and soft roast character",
      "Malt-forward dark beers with stronger alcohol and assertive hop bitterness"
    ]
  },

    anchor: {
      correct: "Brown Porter",
      feedback: {
        "Dark Mild":
          "Usable, but not ideal. Dark Mild is the smallest, lightest member of the family, making it less effective as the central comparison point.",

        "Sweet Stout":
          "Not the strongest anchor. Sweet Stout pushes roast and fullness upward, making midpoint comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "Dark Mild",
        prompt: "Compared to Brown Porter, Dark Mild is:",
        correct: [
          "lower alcohol",
          "lighter body",
          "less roast intensity",
          "less overall intensity",
          "more sessionable"
        ],
        distractors: [
          "higher alcohol",
          "fuller body",
          "stronger roast",
          "greater intensity",
          "less drinkable"
        ]
      },

      {
        style: "Sweet Stout",
        prompt: "Compared to Brown Porter, Sweet Stout is:",
        correct: [
          "fuller body",
          "sweeter finish",
          "greater roast intensity",
          "more residual sweetness",
          "heavier presentation"
        ],
        distractors: [
          "drier finish",
          "lighter body",
          "less roast",
          "leaner presentation",
          "lower sweetness"
        ]
      }
    ],

    modelAnswer:
      "All three are malt-driven dark British ales emphasizing drinkability over aggressive roast. Compared to Brown Porter, Dark Mild is lighter, lower in alcohol, and more sessionable. Sweet Stout becomes fuller, sweeter, and more roast-forward, with a heavier overall presentation.",

    commercialExamples: {
      "Dark Mild": ["Theakston Traditional Mild"],
      "Brown Porter": ["Fuller’s London Porter", "Samuel Smith Taddy Porter"],
      "Sweet Stout": ["Mackeson XXX", "Left Hand Milk Stout"]
    }
  },

{
  id: "american-hop-family",
  title: "American Hop Family",
  styles: ["American Amber Ale", "American IPA", "American Pale Ale"],

  sharedIdentity: {
    best: "Hop-forward American ales with clean fermentation and assertive bitterness",
    weaker: [
      "American ales with prominent caramel malt character and balanced hop bitterness",
      "Strong American hop ales with elevated alcohol and aggressive bitterness",
      "Clean American ales with restrained bitterness and broad drinkability",
      "Hop-forward ales with expressive fermentation character and softer bitterness"
    ]
  },

    anchor: {
      correct: "American Amber Ale",
      feedback: {
        "American Pale Ale":
          "Usable, but not ideal. American Pale Ale sits toward the lighter end of the family.",

        "American IPA":
          "Not the strongest anchor. American IPA is the most intense hop-forward expression."
      }
    },

    comparisons: [
      {
        style: "American Pale Ale",
        prompt: "Compared to American Amber Ale, American Pale Ale is:",
        correct: [
          "lighter body",
          "less malt richness",
          "paler color",
          "leaner presentation",
          "less caramel character"
        ],
        distractors: [
          "fuller body",
          "greater malt richness",
          "darker color",
          "more caramel malt",
          "heavier presentation"
        ]
      },

      {
        style: "American IPA",
        prompt: "Compared to American Amber Ale, American IPA is:",
        correct: [
          "higher bitterness",
          "stronger hop aroma",
          "leaner malt balance",
          "more aggressive hop expression",
          "drier finish"
        ],
        distractors: [
          "lower bitterness",
          "more malt sweetness",
          "less hop aroma",
          "rounder malt profile",
          "fuller sweeter finish"
        ]
      }
    ],

    modelAnswer:
      "All three are hop-forward American ales with clean fermentation and assertive bitterness. Compared to American Amber Ale, American Pale Ale is lighter, leaner, and less malt-driven. American IPA becomes more bitter, drier, and much more aggressively hop-forward.",

    commercialExamples: {
      "American Pale Ale": ["Sierra Nevada Pale Ale", "Deschutes Mirror Pond"],
      "American Amber Ale": ["Bell’s Amber Ale", "Anderson Valley Boont Amber"],
      "American IPA": ["Stone IPA", "Bell’s Two Hearted"]
    }
  },

{
  id: "stout-family",
  title: "Stout Family",
  styles: ["Foreign Extra Stout", "Irish Stout", "Sweet Stout"],

  sharedIdentity: {
    best: "Dark stout ales with prominent roasted malt character and roast-driven bitterness",
    weaker: [
      "Dark stout ales with soft sweetness, fuller body, and restrained roast bitterness",
      "Roasted dark ales with lean body, dry finish, and highly sessionable presentation",
      "Strong export dark ales with elevated alcohol, richer body, and greater complexity",
      "Dark British ales with chocolate malt character, moderate bitterness, and smooth drinkability"
    ]
  },

    anchor: {
      correct: "Irish Stout",
      feedback: {
        "Sweet Stout":
          "Usable, but not ideal. Sweet Stout introduces sweetness as a defining variable, making it less neutral as a comparison baseline.",

        "Foreign Extra Stout":
          "Not the strongest anchor. Foreign Extra Stout represents the largest and most intense expression of the group. A simpler baseline makes comparison cleaner."
      }
    },

    comparisons: [
      {
        style: "Sweet Stout",
        prompt: "Compared to Irish Stout, Sweet Stout is:",
        correct: [
          "sweeter",
          "fuller-bodied",
          "less dry",
          "lower roast sharpness",
          "creamier impression",
          "greater residual sweetness"
        ],
        distractors: [
          "drier",
          "leaner body",
          "higher alcohol",
          "sharper roast",
          "more assertive bitterness",
          "more attenuated"
        ]
      },

      {
        style: "Foreign Extra Stout",
        prompt: "Compared to Irish Stout, Foreign Extra Stout is:",
        correct: [
          "higher alcohol",
          "stronger roast intensity",
          "fuller body",
          "greater overall flavor intensity",
          "more complex profile",
          "stronger bitterness"
        ],
        distractors: [
          "lower alcohol",
          "lighter body",
          "less roast character",
          "softer profile",
          "less bitterness",
          "more restrained expression"
        ]
      }
    ],

    modelAnswer:
      "All three are dark stout ales with prominent roasted malt character and roast-driven bitterness. Compared to Irish Stout, Sweet Stout is fuller-bodied, sweeter, and less dry, with a softer roast presentation. Foreign Extra Stout moves in the opposite direction, with higher alcohol, stronger roast intensity, greater bitterness, and a more intense overall profile.",

    commercialExamples: {
      "Irish Stout": ["Guinness Draught", "Murphy’s Stout"],
      "Sweet Stout": ["Mackeson XXX Stout", "Left Hand Milk Stout"],
      "Foreign Extra Stout": ["Guinness Foreign Extra", "Dragon Stout"]
    }
  },

{
  id: "stout-variants-family",
  title: "Stout Family Variants",
  styles: ["American Stout", "Irish Stout", "Oatmeal Stout"],

  sharedIdentity: {
    best: "Dark stout ales with prominent roasted malt character and roast-driven bitterness",
    weaker: [
      "Dark stout ales with aggressive American hop bitterness and assertive roast intensity",
      "Roasted dark ales with lean body, dry finish, and highly sessionable drinkability",
      "Smooth dark ales with fuller body, creamy texture, and softened roast presentation",
      "Dark malt-forward ales with chocolate complexity, restrained roast, and smooth drinkability"
    ]
  },

    anchor: {
      correct: "Irish Stout",
      feedback: {
        "American Stout":
          "Usable, but not ideal. American Stout introduces stronger American bitterness and intensity, making it less neutral as a baseline.",

        "Oatmeal Stout":
          "Not the strongest anchor. Oatmeal Stout introduces texture/body shifts that make it less ideal as the central comparison point."
      }
    },

    comparisons: [
      {
        style: "American Stout",
        prompt: "Compared to Irish Stout, American Stout is:",
        correct: [
          "stronger bitterness",
          "more assertive hop character",
          "greater roast intensity",
          "higher overall flavor intensity",
          "more aggressive overall profile",
          "stronger American hop influence"
        ],
        distractors: [
          "lower bitterness",
          "softer roast",
          "less intense flavor",
          "more restrained bitterness",
          "lighter profile"
        ]
      },

      {
        style: "Oatmeal Stout",
        prompt: "Compared to Irish Stout, Oatmeal Stout is:",
        correct: [
          "fuller body",
          "smoother mouthfeel",
          "creamier texture",
          "less dry finish",
          "softer roast presentation"
        ],
        distractors: [
          "leaner body",
          "sharper roast",
          "drier finish",
          "lighter mouthfeel",
          "more aggressive bitterness"
        ]
      }
    ],

    modelAnswer:
      "All three are dark stout ales with prominent roasted malt character and roast-driven bitterness. Compared to Irish Stout, American Stout is more assertive, with stronger bitterness, more pronounced hop character, and greater overall roast intensity. Oatmeal Stout moves toward fullness and texture, with a creamier body, softer roast presentation, and less dryness than Irish Stout.",

    commercialExamples: {
      "American Stout": ["Sierra Nevada Stout", "Bell’s Kalamazoo Stout"],
      "Irish Stout": ["Guinness Draught", "Murphy’s Stout"],
      "Oatmeal Stout": ["Samuel Smith Oatmeal Stout"]
    }
  },

{
  id: "american-lager-family",
  title: "American Lager Family",
  styles: ["American Lager", "Cream Ale", "International Pale Lager"],

  sharedIdentity: {
    best: "Clean, highly drinkable pale beers built around subtle flavor and easy consumption",
    weaker: [
      "Clean pale beers with soft ale fermentation character and balanced malt presentation",
      "Highly drinkable pale lagers with stronger malt flavor and firmer hop bitterness",
      "Light-bodied pale beers with very low flavor intensity and highly neutral presentation",
      "Easy-drinking hybrid beers with restrained fermentation and slightly fuller body"
    ]
  },
 
    anchor: {
      correct: "International Pale Lager",
      feedback: {
        "American Lager":
          "Usable, but not ideal. American Lager is the lightest and most neutral edge of the group, making it less useful as a central comparison point.",

        "Cream Ale":
          "Not the strongest anchor. Cream Ale introduces ale fermentation and hybrid characteristics, making it less neutral as the comparison baseline."
      }
    },

    comparisons: [
      {
        style: "American Lager",
        prompt: "Compared to International Pale Lager, American Lager is:",
        correct: [
          "lighter-bodied",
          "more neutral",
          "lower flavor intensity",
          "less malt presence",
          "more restrained overall"
        ],
        distractors: [
          "fuller-bodied",
          "greater flavor intensity",
          "stronger malt presence",
          "more characterful fermentation",
          "richer overall profile"
        ]
      },

      {
        style: "Cream Ale",
        prompt: "Compared to International Pale Lager, Cream Ale is:",
        correct: [
          "more ale-like",
          "slightly more fermentation character",
          "more body",
          "less neutral",
          "more stylistic complexity"
        ],
        distractors: [
          "cleaner lager character",
          "lighter body",
          "less fermentation presence",
          "more neutral profile",
          "lower complexity"
        ]
      }
    ],

    modelAnswer:
      "All three are clean, highly drinkable pale beers built around subtle flavor and easy consumption. Compared to International Pale Lager, American Lager is lighter, more neutral, and more restrained overall. Cream Ale moves toward slightly greater body, subtle fermentation character, and a less neutral hybrid presentation.",

    commercialExamples: {
      "American Lager": ["Miller High Life", "Coors Banquet"],
      "International Pale Lager": ["Heineken", "Stella Artois"],
      "Cream Ale": ["Genesee Cream Ale"]
    }
  },

 {
  id: "american-strong-family",
  title: "American Strong Family",
  styles: ["American Barleywine", "American Strong Ale", "Double IPA"],

  sharedIdentity: {
    best: "High-intensity American ales with prominent alcohol, bold flavor, and assertive bitterness",
    weaker: [
      "High-gravity American ales with rich malt complexity, warming alcohol, and softer hop balance",
      "Aggressively hop-forward American ales with dry finish, sharp bitterness, and lean malt support",
      "Strong American ales with moderate bitterness, clean fermentation, and balanced drinkability",
      "Big American beers with dark malt richness, roast intensity, and warming alcohol presence"
    ]
  },

    anchor: {
      correct: "American Strong Ale",
      feedback: {
        "Double IPA":
          "Usable, but not ideal. Double IPA shifts hard toward hop dominance, making it less balanced as the baseline.",

        "American Barleywine":
          "Not the strongest anchor. American Barleywine is the richest and heaviest extreme of the family."
      }
    },

    comparisons: [
      {
        style: "Double IPA",
        prompt: "Compared to American Strong Ale, Double IPA is:",
        correct: [
          "more hop-forward",
          "drier",
          "more aggressively bitter",
          "leaner malt balance",
          "more aromatic hop intensity"
        ],
        distractors: [
          "more malt-driven",
          "rounder sweetness",
          "less bitterness",
          "heavier malt balance",
          "less hop intensity"
        ]
      },

      {
        style: "American Barleywine",
        prompt: "Compared to American Strong Ale, American Barleywine is:",
        correct: [
          "fuller-bodied",
          "richer malt profile",
          "heavier presentation",
          "greater alcohol warmth",
          "more malt-forward balance",
          "greater dark fruit/caramel complexity"
        ],
        distractors: [
          "leaner body",
          "lighter malt profile",
          "more hop-driven dryness",
          "less alcohol warmth",
          "more restrained malt character"
        ]
      }
    ],

    modelAnswer:
      "All three are high-intensity American ales with prominent alcohol, bold flavor, and assertive bitterness. Compared to American Strong Ale, Double IPA becomes drier, more aggressively bitter, and far more hop-driven. American Barleywine moves in the opposite direction, becoming fuller, richer, heavier, and more malt-forward.",

    commercialExamples: {
      "American Strong Ale": ["Stone Arrogant Bastard Ale"],
      "Double IPA": ["Pliny the Elder", "Stone Ruination"],
      "American Barleywine": ["Sierra Nevada Bigfoot", "Anchor Old Foghorn"]
    }
  },

{
  id: "belgian-abbey-family",
  title: "Belgian Abbey / Strong Family",
  styles: ["Belgian Blond Ale", "Belgian Dubbel", "Belgian Tripel"],

  sharedIdentity: {
    best: "Strong Belgian ales with fruity/spicy fermentation character and high drinkability relative to strength",
    weaker: [
      "Strong Belgian ales with darker malt richness, layered dark fruit complexity, and fuller sweetness",
      "Highly attenuated Belgian ales with lean body, bright dryness, and champagne-like presentation",
      "Expressive Belgian ales with moderate strength, soft malt balance, and restrained alcohol presence",
      "Belgian monastery ales with aggressive phenolics, sharp dryness, and highly rustic fermentation character"
    ]
  },

    anchor: {
      correct: "Belgian Blond Ale",
      feedback: {
        "Belgian Dubbel":
          "Usable, but not ideal. Belgian Dubbel introduces darker malt complexity that makes it less effective as the broad baseline reference.",

        "Belgian Tripel":
          "Not the strongest anchor. Belgian Tripel is a more specialized high-strength expression. A broader midpoint comparison is cleaner."
      }
    },

    comparisons: [
      {
        style: "Belgian Dubbel",
        prompt: "Compared to Belgian Blond Ale, Belgian Dubbel is:",
        correct: [
          "darker malt profile",
          "richer malt complexity",
          "more caramelized/dark fruit malt expression",
          "deeper color",
          "greater malt richness",
          "less pale presentation"
        ],
        distractors: [
          "lighter color",
          "drier finish",
          "more highly attenuated",
          "leaner malt profile",
          "less malt depth"
        ]
      },

      {
        style: "Belgian Tripel",
        prompt: "Compared to Belgian Blond Ale, Belgian Tripel is:",
        correct: [
          "higher alcohol",
          "drier finish",
          "more highly attenuated",
          "lighter body relative to strength",
          "stronger fruity/spicy fermentation character",
          "greater overall intensity"
        ],
        distractors: [
          "lower alcohol",
          "fuller sweeter finish",
          "less attenuation",
          "more restrained fermentation",
          "lower intensity"
        ]
      }
    ],

    modelAnswer:
      "All three are strong Belgian ales with fruity/spicy fermentation character and impressive drinkability for their strength. Compared to Belgian Blond Ale, Belgian Dubbel shifts toward darker malt richness, deeper color, and greater caramelized complexity. Belgian Tripel moves in the opposite direction, becoming stronger, drier, more highly attenuated, and more intensely expressive in fermentation character.",

    commercialExamples: {
      "Belgian Blond Ale": ["Leffe Blond", "Affligem Blond"],
      "Belgian Dubbel": ["Westmalle Dubbel", "Chimay Red"],
      "Belgian Tripel": ["Westmalle Tripel", "Tripel Karmeliet"]
    }
  },

{
  id: "traditional-sour-family",
  title: "Traditional Sour Ale Family",
  styles: ["Berliner Weisse", "Gueuze", "Lambic"],

  sharedIdentity: {
    best: "Traditional pale sour ales with fermentation-derived acidity and high refreshment",
    weaker: [
      "Pale sour ales with simple lactic acidity, light body, and highly refreshing presentation",
      "Traditional sour ales with complex funk character, aged fermentation, and developed acidity",
      "Blended sour ales with high carbonation, integrated acidity, and refined mature complexity",
      "European sour beers with darker malt character, rich body, and restrained acidity"
    ]
  },

    anchor: {
      correct: "Lambic",
      feedback: {
        "Berliner Weisse":
          "Usable, but not ideal. Berliner Weisse is a lighter, more narrowly focused expression that makes broader family comparison less effective.",

        "Gueuze":
          "Not the strongest anchor. Gueuze is a blended derivative expression rather than the foundational baseline style."
      }
    },

    comparisons: [
      {
        style: "Berliner Weisse",
        prompt: "Compared to Lambic, Berliner Weisse is:",
        correct: [
          "lighter body",
          "cleaner acidity profile",
          "lower complexity",
          "less funk character",
          "more refreshment-focused",
          "simpler fermentation profile"
        ],
        distractors: [
          "greater funk intensity",
          "fuller body",
          "higher complexity",
          "more developed aged character",
          "greater fermentation complexity"
        ]
      },

      {
        style: "Gueuze",
        prompt: "Compared to Lambic, Gueuze is:",
        correct: [
          "higher carbonation",
          "blended expression",
          "greater complexity",
          "more integrated acidity",
          "more developed fermentation character",
          "more refined overall presentation"
        ],
        distractors: [
          "still presentation",
          "simpler fermentation",
          "lower carbonation",
          "less complexity",
          "less developed acidity"
        ]
      }
    ],

    modelAnswer:
      "All three are traditional pale sour ales with fermentation-derived acidity and high refreshment. Lambic serves as the foundational baseline style for comparison. Compared to Lambic, Berliner Weisse is lighter, cleaner, and more refreshment-focused, with less fermentation complexity. Gueuze is a more developed blended expression, with higher carbonation, greater integration, and increased overall complexity.",

    commercialExamples: {
      "Berliner Weisse": ["Berliner Kindl Weisse", "Schultheiss Berliner Weisse"],
      "Lambic": ["Cantillon Grand Cru Bruocsella", "Boon Lambic"],
      "Gueuze": ["Cantillon Gueuze", "Boon Oude Gueuze"]
    }
  },

 {
  id: "ipa-family",
  title: "IPA Family",
  styles: ["American IPA", "Double IPA", "English IPA"],

  sharedIdentity: {
    best: "Hop-forward ales with firm-to-expressive bitterness and hop character as a defining trait",
    weaker: [
      "Aggressively hop-forward ales with elevated alcohol, lean body, and intense bitterness",
      "Traditional hop-forward ales with stronger malt balance, estery fermentation, and rounded bitterness",
      "Clean American hop ales with citrus-forward aroma, dry finish, and assertive bitterness",
      "Strong bitter ales with restrained hop aroma, fuller malt body, and moderate bitterness"
    ]
  },

    anchor: {
      correct: "American IPA",
      feedback: {
        "Double IPA":
          "Usable, but not ideal. Double IPA pushes strength, bitterness, and intensity upward, making it less effective as the central comparison baseline.",

        "English IPA":
          "Not the strongest anchor. English IPA shifts toward traditional British malt and fermentation character, making it less central as the midpoint reference."
      }
    },

    comparisons: [
      {
        style: "Double IPA",
        prompt: "Compared to American IPA, Double IPA is:",
        correct: [
          "higher alcohol",
          "greater hop intensity",
          "fuller body",
          "greater bitterness",
          "more intense overall profile",
          "stronger malt support"
        ],
        distractors: [
          "lower alcohol",
          "lighter body",
          "less bitterness",
          "more restrained hop character",
          "lower intensity"
        ]
      },

      {
        style: "English IPA",
        prompt: "Compared to American IPA, English IPA is:",
        correct: [
          "more traditional British hop character",
          "greater malt presence",
          "more estery fermentation character",
          "less aggressive hop intensity",
          "rounder bitterness profile"
        ],
        distractors: [
          "cleaner fermentation",
          "stronger American citrus hop profile",
          "leaner malt balance",
          "sharper modern hop expression",
          "more aggressive bitterness"
        ]
      }
    ],

    modelAnswer:
      "All three are hop-forward ales with firm-to-expressive bitterness and hop character as a defining trait. Compared to American IPA, Double IPA increases strength, bitterness, body, and overall hop intensity. English IPA moves toward a more traditional British expression, with greater malt presence, more estery fermentation character, and less aggressively modern hop character.",

    commercialExamples: {
      "American IPA": ["Stone IPA", "Bell’s Two Hearted"],
      "Double IPA": ["Russian River Pliny the Elder", "Stone Ruination"],
      "English IPA": ["Samuel Smith India Ale"]
    }
  },

{
  id: "strong-malt-ale-family",
  title: "Strong Malt Ale Family",
  styles: ["American Barleywine", "English Barleywine", "Wee Heavy"],

  sharedIdentity: {
    best: "Big malt-forward ales with substantial body and intense flavor complexity",
    weaker: [
      "High-gravity ales with aggressive hop bitterness, lean malt balance, and assertive dryness",
      "Strong malt ales with rich English character, layered sweetness, and rounded drinkability",
      "Big Scottish ales with deep caramel richness, restrained bitterness, and warming malt intensity",
      "Dark strong ales with prominent roast bitterness, sharp dryness, and intense roasted complexity"
    ]
  },

    anchor: {
      correct: "English Barleywine",
      feedback: {
        "American Barleywine":
          "Usable, but not ideal. American Barleywine shifts the family toward stronger hop intensity, making it less neutral as the comparison midpoint.",

        "Wee Heavy":
          "Not the strongest anchor. Wee Heavy emphasizes a richer malt-forward Scottish expression, making it less central for comparison."
      }
    },

    comparisons: [
      {
        style: "American Barleywine",
        prompt: "Compared to English Barleywine, American Barleywine is:",
        correct: [
          "greater hop bitterness",
          "more assertive hop character",
          "leaner malt balance",
          "more aggressive overall presentation",
          "stronger American hop expression"
        ],
        distractors: [
          "lower bitterness",
          "softer hop expression",
          "greater malt sweetness",
          "rounder balance",
          "less hop intensity"
        ]
      },

      {
        style: "Wee Heavy",
        prompt: "Compared to English Barleywine, Wee Heavy is:",
        correct: [
          "lower hop emphasis",
          "richer malt-forward balance",
          "more caramelized malt character",
          "less bitterness",
          "rounder malt presentation"
        ],
        distractors: [
          "greater hop intensity",
          "leaner malt balance",
          "drier bitterness-driven profile",
          "more aggressive hop character",
          "sharper bitterness"
        ]
      }
    ],

    modelAnswer:
      "All three are big malt-forward ales with substantial body and intense flavor complexity. Compared to English Barleywine, American Barleywine shifts toward stronger bitterness, more assertive hop character, and a more aggressive overall presentation. Wee Heavy moves in the opposite direction, emphasizing richer malt expression, lower hop emphasis, and a rounder, more malt-driven profile.",

    commercialExamples: {
      "American Barleywine": ["Sierra Nevada Bigfoot", "Anchor Old Foghorn"],
      "English Barleywine": ["JW Lees Harvest Ale", "Thomas Hardy’s Ale"],
      "Wee Heavy": ["Traquair House Ale", "Belhaven Wee Heavy"]
    }
  },

{
  id: "pale-lager-family",
  title: "Pale Lager Family",
  styles: ["American Lager", "American Light Lager", "International Pale Lager"],

  sharedIdentity: {
    best: "Pale highly drinkable lagers with clean fermentation and restrained flavor profiles",
    weaker: [
      "Ultra-light pale lagers with very low flavor intensity, lean body, and highly neutral presentation",
      "Pale international lagers with stronger malt presence, fuller body, and firmer hop balance",
      "Clean pale lagers with moderate alcohol, broader malt flavor, and more assertive overall character",
      "Pale easy-drinking beers with subtle ale fermentation character and slightly fuller body"
    ]
  },

    anchor: {
      correct: "American Lager",
      feedback: {
        "American Light Lager":
          "Not the strongest anchor. American Light Lager is the smallest and most restrained expression, making it less effective as the central baseline.",

        "International Pale Lager":
          "Usable, but not ideal. International Pale Lager often increases malt or hop presence beyond the neutral American midpoint."
      }
    },

    comparisons: [
      {
        style: "American Light Lager",
        prompt: "Compared to American Lager, American Light Lager is:",
        correct: [
          "lighter body",
          "lower flavor intensity",
          "lower alcohol",
          "more highly attenuated",
          "more restrained malt presence"
        ],
        distractors: [
          "fuller body",
          "greater malt flavor",
          "higher alcohol",
          "greater flavor intensity",
          "richer profile"
        ]
      },

      {
        style: "International Pale Lager",
        prompt: "Compared to American Lager, International Pale Lager is:",
        correct: [
          "greater malt flavor",
          "fuller body",
          "higher overall flavor intensity",
          "stronger hop/malt presence",
          "more characterful overall presentation"
        ],
        distractors: [
          "lighter body",
          "lower flavor intensity",
          "more neutral profile",
          "less malt presence",
          "more restrained flavor"
        ]
      }
    ],

    modelAnswer:
      "All three are pale highly drinkable lagers with clean fermentation and restrained flavor profiles. Compared to American Lager, American Light Lager is lighter-bodied, lower in flavor intensity, and even more restrained in overall character. International Pale Lager moves in the opposite direction, with fuller body, greater malt presence, and a more characterful overall presentation.",

    commercialExamples: {
      "American Lager": ["Miller High Life", "Coors Banquet"],
      "American Light Lager": ["Bud Light", "Miller Lite"],
      "International Pale Lager": ["Heineken", "Stella Artois"]
    }
  },

{
  id: "amber-balanced-family",
  title: "Amber Balanced Family",
  styles: ["Altbier", "Märzen", "Vienna Lager"],

  sharedIdentity: {
    best: "Amber balanced beers with noticeable malt character and high drinkability",
    weaker: [
      "Amber beers with firm bitterness, dry finish, and clean ale fermentation character",
      "Amber lagers with richer malt depth, fuller body, and pronounced toast-driven complexity",
      "Clean amber lagers with softer malt balance, delicate toast character, and refined drinkability",
      "Amber malt-forward beers with aggressive caramel sweetness, low bitterness, and heavy body"
    ]
  },

    anchor: {
      correct: "Vienna Lager",
      feedback: {
        "Altbier":
          "Usable, but not ideal. Altbier introduces ale fermentation character that makes it less neutral as the central comparison point.",

        "Märzen":
          "Not the strongest anchor. Märzen sits at the richer malt-forward end of the family, making a midpoint comparison less efficient."
      }
    },

    comparisons: [
      {
        style: "Altbier",
        prompt: "Compared to Vienna Lager, Altbier is:",
        correct: [
          "ale fermentation character",
          "firmer bitterness",
          "drier finish",
          "leaner malt profile",
          "more assertive bitterness balance"
        ],
        distractors: [
          "clean lager fermentation",
          "softer bitterness",
          "rounder malt profile",
          "fuller malt richness",
          "lower bitterness"
        ]
      },

      {
        style: "Märzen",
        prompt: "Compared to Vienna Lager, Märzen is:",
        correct: [
          "richer malt expression",
          "fuller body",
          "deeper toast/bread crust character",
          "more robust malt profile",
          "greater malt intensity"
        ],
        distractors: [
          "lighter body",
          "leaner malt profile",
          "less toast character",
          "more delicate presentation",
          "lower malt intensity"
        ]
      }
    ],

    modelAnswer:
      "All three are amber balanced beers with noticeable malt character and strong drinkability. Compared to Vienna Lager, Altbier is drier, more bitter, and distinguished by clean ale fermentation rather than lager fermentation. Märzen moves in the opposite direction, with richer malt expression, fuller body, and deeper toast-driven malt complexity.",

    commercialExamples: {
      "Altbier": ["Uerige Alt", "Schlüssel Alt"],
      "Märzen": ["Ayinger Oktober Fest-Märzen", "Paulaner Oktoberfest Märzen"],
      "Vienna Lager": ["Great Lakes Eliot Ness", "Devils Backbone Vienna Lager"]
    }
  },

{
  id: "stout-intensity-family",
  title: "Stout Intensity Family",
  styles: ["American Stout", "Foreign Extra Stout", "Sweet Stout"],

  sharedIdentity: {
    best: "Dark stout ales with prominent roasted malt character and roast-driven bitterness",
    weaker: [
      "Dark stout ales with aggressive American hop bitterness, assertive roast intensity, and clean fermentation",
      "Strong export stouts with elevated alcohol, richer body, and greater dark fruit complexity",
      "Sweet dark stouts with fuller body, residual sweetness, and softened roast bitterness",
      "Dark malt-forward ales with chocolate complexity, restrained roast, and smooth easy drinkability"
    ]
  },

    anchor: {
      correct: "Foreign Extra Stout",
      feedback: {
        "American Stout":
          "Usable, but not ideal. American Stout introduces stronger American hop character, making it less neutral as the midpoint.",

        "Sweet Stout":
          "Not the strongest anchor. Sweet Stout sits at the softer sweeter end of the family, making comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "American Stout",
        prompt: "Compared to Foreign Extra Stout, American Stout is:",
        correct: [
          "more assertive American hop character",
          "cleaner fermentation profile",
          "more aggressive bitterness",
          "less dark fruit complexity",
          "more modern hop expression"
        ],
        distractors: [
          "lower bitterness",
          "softer roast",
          "greater sweetness",
          "less hop character",
          "more restrained bitterness"
        ]
      },

      {
        style: "Sweet Stout",
        prompt: "Compared to Foreign Extra Stout, Sweet Stout is:",
        correct: [
          "sweeter",
          "fuller smoother body",
          "less dry",
          "softer roast bitterness",
          "greater residual sweetness"
        ],
        distractors: [
          "drier finish",
          "stronger bitterness",
          "leaner body",
          "more aggressive roast",
          "higher attenuation"
        ]
      }
    ],

    modelAnswer:
      "All three are dark stout ales with prominent roasted malt character and roast-driven bitterness. Compared to Foreign Extra Stout, American Stout shifts toward a cleaner, more aggressively hopped American expression. Sweet Stout moves in the opposite direction, becoming sweeter, fuller, softer in bitterness, and less dry overall.",

    commercialExamples: {
      "American Stout": ["Sierra Nevada Stout", "Bell’s Kalamazoo Stout"],
      "Foreign Extra Stout": ["Guinness Foreign Extra", "Dragon Stout"],
      "Sweet Stout": ["Mackeson XXX Stout", "Left Hand Milk Stout"]
    }
  },

{
  id: "bock-family",
  title: "Bock Family",
  styles: ["Doppelbock", "Dunkles Bock", "Helles Bock"],

  sharedIdentity: {
    best: "Strong German lagers with prominent malt character and clean fermentation",
    weaker: [
      "Strong German lagers with intense dark malt richness, warming alcohol, and substantial body",
      "Pale strong German lagers with brighter malt profile, lighter color, and firmer hop presence",
      "Amber German lagers with rich toast character, moderate strength, and smooth malt-forward balance",
      "Strong continental lagers with expressive fermentation character, fruity esters, and warming complexity"
    ]
  },

    anchor: {
      correct: "Dunkles Bock",
      feedback: {
        "Doppelbock":
          "Not the strongest anchor. Doppelbock is the largest and richest expression of the family, making it less effective as a midpoint reference.",

        "Helles Bock":
          "Usable, but not ideal. Helles Bock shifts toward a paler, lighter expression, making it less central for family comparison."
      }
    },

    comparisons: [
      {
        style: "Doppelbock",
        prompt: "Compared to Dunkles Bock, Doppelbock is:",
        correct: [
          "higher alcohol",
          "fuller body",
          "greater malt intensity",
          "richer malt depth",
          "more intense overall presentation",
          "stronger warming character"
        ],
        distractors: [
          "lower alcohol",
          "lighter body",
          "less malt richness",
          "more delicate presentation",
          "lower intensity"
        ]
      },

      {
        style: "Helles Bock",
        prompt: "Compared to Dunkles Bock, Helles Bock is:",
        correct: [
          "lighter color",
          "leaner malt profile",
          "less dark malt richness",
          "more hop presence",
          "cleaner brighter presentation"
        ],
        distractors: [
          "darker malt profile",
          "greater malt richness",
          "deeper toast character",
          "heavier presentation",
          "lower hop presence"
        ]
      }
    ],

    modelAnswer:
      "All three are strong German lagers with prominent malt character and clean fermentation. Compared to Dunkles Bock, Doppelbock increases alcohol, malt richness, and overall intensity, becoming the largest and richest family member. Helles Bock moves in the opposite direction, with a lighter malt profile, brighter presentation, and relatively greater hop presence.",

    commercialExamples: {
      "Doppelbock": ["Paulaner Salvator", "Ayinger Celebrator"],
      "Dunkles Bock": ["Einbecker Ur-Bock Dunkel", "Ayinger Bock"],
      "Helles Bock": ["Einbecker Mai-Ur-Bock", "Ayinger Maibock"]
    }
  },

{
  id: "strong-german-ale-lager-family",
  title: "Strong German Ale/Lager Family",
  styles: ["Doppelbock", "Dunkles Bock", "Weizenbock"],

  sharedIdentity: {
    best: "Big malt-forward German beers with substantial body and elevated strength",
    weaker: [
      "Strong German lagers with clean fermentation, deep malt richness, and warming alcohol presence",
      "German wheat ales with expressive banana/clove fermentation and elevated strength",
      "Amber German lagers with moderate strength, balanced drinkability, and smooth toast-driven malt character",
      "Strong German beers with aggressive hop bitterness, dry finish, and lean malt balance"
    ]
  },

    anchor: {
      correct: "Dunkles Bock",
      feedback: {
        "Doppelbock":
          "Not the strongest anchor. Doppelbock is the richest and most intense lager expression, making midpoint comparison less efficient.",

        "Weizenbock":
          "Usable, but not ideal. Weizenbock introduces a distinct wheat ale fermentation character that makes it less neutral as the central comparison point."
      }
    },

    comparisons: [
      {
        style: "Doppelbock",
        prompt: "Compared to Dunkles Bock, Doppelbock is:",
        correct: [
          "higher alcohol",
          "greater malt richness",
          "fuller body",
          "more intense overall presentation",
          "stronger warming character"
        ],
        distractors: [
          "lower alcohol",
          "lighter body",
          "less malt depth",
          "more delicate presentation",
          "lower intensity"
        ]
      },

      {
        style: "Weizenbock",
        prompt: "Compared to Dunkles Bock, Weizenbock is:",
        correct: [
          "expressive wheat fermentation character",
          "banana/clove fermentation profile",
          "wheat-derived body contribution",
          "ale fermentation",
          "less clean lager profile"
        ],
        distractors: [
          "clean lager fermentation",
          "neutral fermentation",
          "less expressive yeast character",
          "no wheat contribution",
          "cleaner malt-only profile"
        ]
      }
    ],

    modelAnswer:
      "All three are big malt-forward German beers with substantial body and elevated strength. Compared to Dunkles Bock, Doppelbock becomes richer, stronger, and more intensely malt-driven. Weizenbock differentiates through expressive wheat ale fermentation character, with banana/clove yeast expression, wheat contribution, and a less clean lager presentation.",

    commercialExamples: {
      "Doppelbock": ["Paulaner Salvator", "Ayinger Celebrator"],
      "Dunkles Bock": ["Einbecker Ur-Bock Dunkel", "Ayinger Bock"],
      "Weizenbock": ["Schneider Aventinus", "Weihenstephaner Vitus"]
    }
  },

{
  id: "wheat-ale-family",
  title: "Wheat Ale Family",
  styles: ["American Wheat Beer", "Weissbier", "Witbier"],

  sharedIdentity: {
    best: "Refreshing wheat-based ales with similar pale base profiles and high drinkability",
    weaker: [
      "Wheat ales with expressive banana/clove fermentation character and traditional German yeast profile",
      "Refreshing wheat ales with Belgian fermentation, spice complexity, and soft citrus character",
      "Clean pale wheat ales with restrained fermentation and subtle hop-balanced drinkability",
      "Pale refreshing ales with firm bitterness, dry finish, and prominent hop aroma"
    ]
  },

    anchor: {
      correct: "American Wheat Beer",
      feedback: {
        "Weissbier":
          "Usable, but not ideal. Weissbier introduces a much stronger yeast-driven fermentation signature, making it less neutral as the comparison baseline.",

        "Witbier":
          "Not the strongest anchor. Witbier adds Belgian fermentation and spice complexity, making it less ideal as the central reference."
      }
    },

    comparisons: [
      {
        style: "Weissbier",
        prompt: "Compared to American Wheat Beer, Weissbier is:",
        correct: [
          "banana/clove fermentation character",
          "more expressive yeast profile",
          "greater fermentation complexity",
          "German wheat ale character",
          "less neutral fermentation"
        ],
        distractors: [
          "clean neutral fermentation",
          "less expressive yeast",
          "lower fermentation complexity",
          "cleaner American ale profile",
          "more restrained fermentation"
        ]
      },

      {
        style: "Witbier",
        prompt: "Compared to American Wheat Beer, Witbier is:",
        correct: [
          "coriander/orange spice character",
          "Belgian fermentation character",
          "more expressive yeast profile",
          "spiced complexity",
          "softer presentation"
        ],
        distractors: [
          "neutral fermentation",
          "no spice contribution",
          "clean American fermentation",
          "restrained yeast character",
          "less expressive complexity"
        ]
      }
    ],

    modelAnswer:
      "All three are refreshing wheat-based ales with similar pale base profiles and high drinkability. Compared to American Wheat Beer, Weissbier introduces expressive banana/clove fermentation character and a much stronger yeast-driven profile. Witbier differentiates through Belgian fermentation character, spice additions, and a softer, more complex spiced presentation.",

    commercialExamples: {
      "American Wheat Beer": ["Bell’s Oberon", "Widmer Hefeweizen"],
      "Weissbier": ["Weihenstephaner Hefeweissbier", "Paulaner Hefe-Weizen"],
      "Witbier": ["Hoegaarden Wit", "St. Bernardus Wit"]
    }
  },

{
  id: "big-dark-complex-family",
  title: "Big Dark Complex Family",
  styles: ["Baltic Porter", "Belgian Dark Strong Ale", "Imperial Stout"],

  sharedIdentity: {
    best: "Big dark beers with bold malt-driven flavor and layered malt complexity",
    weaker: [
      "Strong dark ales with expressive Belgian fermentation, dark fruit complexity, and warming alcohol presence",
      "Big roasted dark beers with aggressive bitterness, intense roast character, and assertive dark malt dryness",
      "Strong smooth dark lagers with restrained roast, clean fermentation, and rich malt complexity",
      "Dark beers with moderate strength, soft chocolate malt character, and easy drinkability"
    ]
  },

    anchor: {
      correct: "Baltic Porter",
      feedback: {
        "Belgian Dark Strong Ale":
          "Usable, but not ideal. Belgian Dark Strong introduces a very specific fermentation-driven Belgian profile, making it less neutral as the comparison midpoint.",

        "Imperial Stout":
          "Not the strongest anchor. Imperial Stout is the most aggressively roasted and intense expression, making comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "Belgian Dark Strong Ale",
        prompt: "Compared to Baltic Porter, Belgian Dark Strong Ale is:",
        correct: [
          "Belgian fruity/spicy fermentation character",
          "less roast emphasis",
          "more expressive yeast complexity",
          "lighter roast profile",
          "more fermentation-driven complexity"
        ],
        distractors: [
          "clean lager fermentation",
          "stronger roast emphasis",
          "neutral fermentation",
          "less expressive yeast",
          "clean malt-driven profile"
        ]
      },

      {
        style: "Imperial Stout",
        prompt: "Compared to Baltic Porter, Imperial Stout is:",
        correct: [
          "stronger roast intensity",
          "greater bitterness",
          "more aggressive dark malt profile",
          "heavier overall intensity",
          "more assertive roast bitterness"
        ],
        distractors: [
          "less roast intensity",
          "lower bitterness",
          "cleaner malt profile",
          "lighter overall presentation",
          "more restrained roast"
        ]
      }
    ],

    modelAnswer:
      "All three are big dark beers with bold malt-driven flavor and layered malt complexity. Compared to Baltic Porter, Belgian Dark Strong Ale shifts toward expressive Belgian fermentation complexity with less roast emphasis, while Imperial Stout becomes more aggressively roasted, more bitter, and heavier in overall presentation.",

    commercialExamples: {
      "Baltic Porter": ["Zywiec Porter", "Okocim Porter"],
      "Belgian Dark Strong Ale": ["Chimay Blue", "Rochefort 10"],
      "Imperial Stout": ["North Coast Old Rasputin"]
    }
  },

{
  id: "amber-ale-lager-family",
  title: "Amber Balanced Ale/Lager Family",
  styles: ["California Common", "Irish Red Ale", "Märzen"],

  sharedIdentity: {
    best: "Amber balanced beers with noticeable malt character, drinkability, and restrained complexity",
    weaker: [
      "Amber beers with firm bitterness, dry finish, and distinctive Northern Brewer hop character",
      "Amber ales with soft caramel malt balance, restrained bitterness, and easy session drinkability",
      "Amber lagers with richer toast-driven malt complexity, fuller body, and smooth clean fermentation",
      "Amber malt-forward beers with aggressive sweetness, low bitterness, and heavy full-bodied presentation"
    ]
  },

    anchor: {
      correct: "Irish Red Ale",
      feedback: {
        "California Common":
          "Usable, but not ideal. California Common introduces a distinctive hop/fermentation profile that makes it less neutral as the central baseline.",

        "Märzen":
          "Not the strongest anchor. Märzen pushes further into richer lager malt expression, making midpoint comparison less efficient."
      }
    },

    comparisons: [
      {
        style: "California Common",
        prompt: "Compared to Irish Red Ale, California Common is:",
        correct: [
          "firmer bitterness",
          "clean lager fermentation character",
          "Northern Brewer hop character",
          "more assertive bitterness balance",
          "more toasty dryness"
        ],
        distractors: [
          "softer bitterness",
          "greater caramel sweetness",
          "fuller malt richness",
          "less hop presence",
          "rounder malt balance"
        ]
      },

      {
        style: "Märzen",
        prompt: "Compared to Irish Red Ale, Märzen is:",
        correct: [
          "richer malt expression",
          "fuller body",
          "deeper toast/bread crust character",
          "clean lager fermentation",
          "greater malt intensity"
        ],
        distractors: [
          "lighter body",
          "firmer bitterness",
          "more hop-forward balance",
          "leaner malt profile",
          "less malt intensity"
        ]
      }
    ],

    modelAnswer:
      "All three are amber balanced beers with noticeable malt character and strong drinkability. Compared to Irish Red Ale, California Common is firmer in bitterness, drier in balance, and distinguished by its clean lager fermentation and Northern Brewer hop character. Märzen moves toward richer malt expression, fuller body, and deeper toast-driven lager malt complexity.",

    commercialExamples: {
      "California Common": ["Anchor Steam"],
      "Irish Red Ale": ["Smithwick’s"],
      "Märzen": ["Ayinger Oktober Fest-Märzen", "Paulaner Oktoberfest Märzen"]
    }
  },

{
  id: "irish-export-stout-family",
  title: "Irish / Export Stout Family",
  styles: ["Foreign Extra Stout", "Irish Extra Stout", "Irish Stout"],

  sharedIdentity: {
    best: "Dark stout ales with prominent roasted malt character and roast-driven bitterness",
    weaker: [
      "Lean dry stout ales with lower alcohol, sharp roast bitterness, and highly sessionable drinkability",
      "Strong export stouts with elevated alcohol, richer body, and layered dark fruit complexity",
      "Roasted stout ales with fuller body, softened bitterness, and noticeable residual sweetness",
      "Dark malt-forward ales with chocolate complexity, restrained roast, and smooth porter-like drinkability"
    ]
  },

    anchor: {
      correct: "Irish Extra Stout",
      feedback: {
        "Foreign Extra Stout":
          "Usable, but not ideal. Foreign Extra Stout pushes strength and intensity upward, making it less effective as the midpoint reference.",

        "Irish Stout":
          "Not the strongest anchor. Irish Stout is the leanest and driest family member, making midpoint comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "Foreign Extra Stout",
        prompt: "Compared to Irish Extra Stout, Foreign Extra Stout is:",
        correct: [
          "higher alcohol",
          "greater overall intensity",
          "more complex flavor profile",
          "stronger dark fruit complexity",
          "richer body",
          "larger overall presentation"
        ],
        distractors: [
          "lower alcohol",
          "leaner body",
          "less complexity",
          "lighter overall presentation",
          "more restrained profile"
        ]
      },

      {
        style: "Irish Stout",
        prompt: "Compared to Irish Extra Stout, Irish Stout is:",
        correct: [
          "drier finish",
          "leaner body",
          "lower alcohol",
          "sharper roast presentation",
          "more sessionable profile"
        ],
        distractors: [
          "fuller body",
          "greater sweetness",
          "higher alcohol",
          "richer complexity",
          "larger overall profile"
        ]
      }
    ],

    modelAnswer:
      "All three are dark stout ales with prominent roasted malt character and roast-driven bitterness. Compared to Irish Extra Stout, Foreign Extra Stout becomes stronger, richer, and more complex, with higher alcohol and greater overall intensity. Irish Stout moves in the opposite direction, becoming leaner, drier, and more sessionable, with a sharper roast presentation.",

    commercialExamples: {
      "Foreign Extra Stout": ["Guinness Foreign Extra"],
      "Irish Extra Stout": ["O’Hara’s Irish Stout", "Beamish Irish Stout"],
      "Irish Stout": ["Guinness Draught", "Murphy’s Stout"]
    }
  },
{
  id: "german-malt-lager-family",
  title: "German Malt Lager Family",
  styles: ["Märzen", "Munich Dunkel", "Munich Helles"],

  sharedIdentity: {
    best: "German malt-accented lagers with clean fermentation, high drinkability, and balanced malt character",
    weaker: [
      "Pale German lagers with delicate malt expression, lower alcohol, and restrained bitterness",
      "Amber German lagers with richer toast character, fuller body, and festival-style malt balance",
      "Dark German lagers with smooth malt richness, clean fermentation, and restrained roast character",
      "German lagers with expressive fruity fermentation, soft sweetness, and ale-like complexity"
    ]
  },

    anchor: {
      correct: "Munich Dunkel",
      feedback: {
        "Munich Helles":
          "Usable, but not ideal. Munich Helles sits at the lighter, softer end of the family, making it less effective as the central comparison point.",

        "Märzen":
          "Not the strongest anchor. Märzen is the richer, fuller expression, making midpoint comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "Munich Helles",
        prompt: "Compared to Munich Dunkel, Munich Helles is:",
        correct: [
          "lighter color",
          "softer malt expression",
          "less toast character",
          "more delicate presentation",
          "lower malt intensity",
          "less richness"
        ],
        distractors: [
          "darker malt profile",
          "greater toast character",
          "fuller malt expression",
          "richer presentation",
          "higher malt intensity"
        ]
      },

      {
        style: "Märzen",
        prompt: "Compared to Munich Dunkel, Märzen is:",
        correct: [
          "fuller body",
          "richer malt expression",
          "greater toast/bread crust character",
          "higher malt intensity",
          "more robust presentation"
        ],
        distractors: [
          "lighter body",
          "less toast character",
          "more delicate presentation",
          "lower malt intensity",
          "leaner malt profile"
        ]
      }
    ],

    modelAnswer:
      "All three are German malt-accented lagers with clean fermentation, high drinkability, and balanced malt character. Compared to Munich Dunkel, Munich Helles is lighter, softer, and less toasty, with a more delicate malt presentation. Märzen moves in the opposite direction, becoming richer, fuller, and more intensely malt-driven, with stronger toast and bread crust character.",

    commercialExamples: {
      "Munich Helles": ["Augustiner Helles", "Weihenstephaner Original"],
      "Munich Dunkel": ["Ayinger Altbairisch Dunkel", "Weltenburger Kloster Barock Dunkel"],
      "Märzen": ["Paulaner Oktoberfest Märzen", "Ayinger Oktober Fest-Märzen"]
    }
  },

{
  id: "amber-lager-strength-family",
  title: "Amber Lager Strength Family",
  styles: ["Czech Amber Lager", "Dunkles Bock", "Märzen"],

  sharedIdentity: {
    best: "Amber lager beers with clean fermentation, prominent malt character, and balanced drinkability",
    weaker: [
      "Amber lagers with firmer hop bitterness, Czech hop character, and leaner balanced presentation",
      "Strong amber lagers with elevated alcohol, richer malt depth, and fuller warming body",
      "Amber lagers with deep toast-driven malt complexity, fuller body, and richer festival-style drinkability",
      "Amber beers with expressive fruity fermentation, soft malt sweetness, and restrained bitterness"
    ]
  },
    anchor: {
      correct: "Märzen",
      feedback: {
        "Czech Amber Lager":
          "Usable, but not ideal. Czech Amber Lager introduces a more Czech hop/malt balance and generally lower strength, making it less effective as the midpoint comparison.",

        "Dunkles Bock":
          "Not the strongest anchor. Dunkles Bock is the stronger, richer end of the family, making comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "Czech Amber Lager",
        prompt: "Compared to Märzen, Czech Amber Lager is:",
        correct: [
          "lower alcohol",
          "leaner body",
          "more Czech hop character",
          "firmer hop presence",
          "less malt intensity",
          "more balanced bitterness expression"
        ],
        distractors: [
          "higher alcohol",
          "fuller body",
          "greater malt richness",
          "lower hop presence",
          "heavier presentation"
        ]
      },

      {
        style: "Dunkles Bock",
        prompt: "Compared to Märzen, Dunkles Bock is:",
        correct: [
          "higher alcohol",
          "fuller body",
          "greater malt richness",
          "more intense malt presentation",
          "stronger warming character",
          "larger overall profile"
        ],
        distractors: [
          "lower alcohol",
          "leaner body",
          "less malt richness",
          "lighter presentation",
          "lower intensity"
        ]
      }
    ],

    modelAnswer:
      "All three are amber lager beers with clean fermentation, prominent malt character, and balanced drinkability. Compared to Märzen, Czech Amber Lager is leaner, lower in strength, and shows firmer hop presence with a more Czech balance profile. Dunkles Bock moves upward in strength, body, and malt richness, becoming the largest and most intense member of the group.",

    commercialExamples: {
      "Czech Amber Lager": ["Bernard Jantarový Ležák", "Primátor Amber Lager"],
      "Dunkles Bock": ["Einbecker Ur-Bock Dunkel", "Ayinger Bock"],
      "Märzen": ["Paulaner Oktoberfest Märzen", "Ayinger Oktober Fest-Märzen"]
    }
  },

{
  id: "pale-strong-german-lager-family",
  title: "Pale Strong German Lager Family",
  styles: ["Festbier", "Helles Bock", "Munich Helles"],

  sharedIdentity: {
    best: "Pale German lagers with clean fermentation, strong drinkability, and malt-forward balance",
    weaker: [
      "Pale German lagers with delicate malt expression, lower alcohol, and highly restrained overall intensity",
      "Strong pale German lagers with elevated alcohol, fuller body, and warming malt-driven richness",
      "Festival pale lagers with smooth drinkability, rounded malt balance, and moderate celebratory strength",
      "Pale lagers with expressive fruity fermentation, soft sweetness, and restrained clean lager character"
    ]
  },

    anchor: {
      correct: "Festbier",
      feedback: {
        "Helles Bock":
          "Usable, but not ideal. Helles Bock pushes the family upward in strength and intensity, making it less effective as the midpoint comparison.",

        "Munich Helles":
          "Not the strongest anchor. Munich Helles is the smallest and most delicate expression, making midpoint comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "Helles Bock",
        prompt: "Compared to Festbier, Helles Bock is:",
        correct: [
          "higher alcohol",
          "fuller body",
          "greater malt intensity",
          "stronger warming character",
          "larger overall presentation"
        ],
        distractors: [
          "lower alcohol",
          "lighter body",
          "more delicate profile",
          "lower malt intensity",
          "more restrained presentation"
        ]
      },

      {
        style: "Munich Helles",
        prompt: "Compared to Festbier, Munich Helles is:",
        correct: [
          "lower alcohol",
          "lighter body",
          "more delicate malt expression",
          "softer overall presentation",
          "less intensity"
        ],
        distractors: [
          "higher alcohol",
          "greater malt richness",
          "fuller body",
          "stronger warming character",
          "larger presentation"
        ]
      }
    ],

    modelAnswer:
      "All three are pale German lagers with clean fermentation, strong drinkability, and malt-forward balance. Compared to Festbier, Helles Bock increases strength, body, and malt intensity, becoming the richer and stronger expression. Munich Helles moves in the opposite direction, becoming lighter, softer, and more delicate in overall presentation.",

    commercialExamples: {
      "Festbier": ["Augustiner Oktoberfestbier", "Paulaner Festbier"],
      "Helles Bock": ["Einbecker Mai-Ur-Bock", "Ayinger Maibock"],
      "Munich Helles": ["Augustiner Helles", "Weihenstephaner Original"]
    }
  },

{
  id: "english-strong-malt-family",
  title: "English Strong Malt Family",
  styles: ["British Strong Ale", "English Barleywine", "Old Ale"],

  sharedIdentity: {
    best: "Strong malt-forward British ales with expressive malt complexity and traditional English fermentation character",
    weaker: [
      "Strong British ales with cleaner malt profile, moderate strength, and restrained complexity",
      "Rich English ales with intense alcohol warmth, fuller body, and layered malt sweetness",
      "Traditional British ales with aged oxidative complexity, dark fruit character, and softer bitterness",
      "Strong dark ales with aggressive roast bitterness, dry finish, and intense roasted complexity"
    ]
  },

    anchor: {
      correct: "Old Ale",
      feedback: {
        "British Strong Ale":
          "Usable, but not ideal. British Strong Ale tends to be somewhat cleaner and less complex, making it less effective as the midpoint comparison.",

        "English Barleywine":
          "Not the strongest anchor. English Barleywine is the largest and richest expression, making midpoint comparison less balanced."
      }
    },

    comparisons: [
      {
        style: "British Strong Ale",
        prompt: "Compared to Old Ale, British Strong Ale is:",
        correct: [
          "lower alcohol",
          "cleaner malt profile",
          "less complexity",
          "lighter body",
          "less aged character",
          "more restrained overall presentation"
        ],
        distractors: [
          "higher alcohol",
          "greater malt richness",
          "fuller body",
          "more intense complexity",
          "heavier presentation"
        ]
      },

      {
        style: "English Barleywine",
        prompt: "Compared to Old Ale, English Barleywine is:",
        correct: [
          "higher alcohol",
          "fuller body",
          "greater malt intensity",
          "richer malt complexity",
          "larger overall presentation",
          "stronger warming character"
        ],
        distractors: [
          "lower alcohol",
          "lighter body",
          "less malt richness",
          "more restrained presentation",
          "lower complexity"
        ]
      }
    ],

    modelAnswer:
      "All three are strong malt-forward British ales with expressive malt complexity and traditional English fermentation character. Compared to Old Ale, British Strong Ale is somewhat cleaner, lighter, and less complex, while English Barleywine becomes larger, richer, fuller-bodied, and more intensely malt-driven.",

    commercialExamples: {
      "British Strong Ale": ["Samuel Smith’s Winter Welcome", "Fuller’s 1845"],
      "English Barleywine": ["JW Lees Harvest Ale", "Thomas Hardy’s Ale"],
      "Old Ale": ["Theakston Old Peculier", "Greene King Strong Suffolk Ale"]
    }
  }
];
