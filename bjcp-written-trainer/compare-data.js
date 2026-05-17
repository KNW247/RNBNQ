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
  }
];
