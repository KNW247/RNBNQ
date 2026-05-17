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
  }
];
