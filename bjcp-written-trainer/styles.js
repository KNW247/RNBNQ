const styles = [
    {
        code: "5D",
        name: "German Pils",

        strength: {
            anchor: "Standard",
            min: 4.4,
            max: 5.2,
            unit: "%"
        },

        bitterness: {
            anchor: "Firm Bitter",
            min: 22,
            max: 40,
            unit: "IBU"
        },

        body: {
            anchor: "Dry",
            min: 1.008,
            max: 1.013,
            unit: "FG"
        },

        carbonation: {
            anchor: "Medium-High",
            min: null,
            max: null,
            unit: null,
            text: "Medium-light body. Medium to high carbonation."
        },

        color: {
            anchor: "Pale Gold",
            min: 2,
            max: 5,
            unit: "SRM"
        },

        og: {
            min: 1.044,
            max: 1.050,
            unit: "OG"
        },

        foundationEligible: true,
        comparisonEligible: true,
        recipeEligible: true,
        core: true,
        anchorStatus: "approved"
    },

{
    code: "4A",
    name: "Munich Helles",

    strength: {
        anchor: "Standard",
        min: 4.7,
        max: 5.4,
        unit: "%"
    },

    bitterness: {
        anchor: "Malt-forward",
        min: 16,
        max: 22,
        unit: "IBU"
    },

    body: {
        anchor: "Medium",
        min: 1.006,
        max: 1.012,
        unit: "FG"
    },

    carbonation: {
        anchor: "Moderate",
        min: null,
        max: null,
        unit: null,
        text: "Medium body. Medium carbonation. Smooth, well-lagered character."
    },

    color: {
        anchor: "Pale Gold",
        min: 3,
        max: 5,
        unit: "SRM"
    },

    og: {
        min: 1.044,
        max: 1.048,
        unit: "OG"
    },

    foundationEligible: true,
    comparisonEligible: true,
    recipeEligible: true,
    core: true,
    anchorStatus: "approved"
},
  {
    code: "7A",
    name: "Vienna Lager",

    strength: {
        anchor: "Standard",
        min: 4.7,
        max: 5.5,
        unit: "%"
    },

    bitterness: {
        anchor: "Balanced",
        min: 18,
        max: 30,
        unit: "IBU"
    },

    body: {
        anchor: "Medium",
        min: 1.010,
        max: 1.014,
        unit: "FG"
    },

    carbonation: {
        anchor: "Moderate",
        min: null,
        max: null,
        unit: null,
        text: "Medium-light to medium body, with a gentle creaminess. Moderate carbonation. Smooth."
    },

    color: {
        anchor: "Amber",
        min: 9,
        max: 15,
        unit: "SRM"
    },

    og: {
        min: 1.048,
        max: 1.055,
        unit: "OG"
    },

    foundationEligible: true,
    comparisonEligible: true,
    recipeEligible: true,
    core: true,
    anchorStatus: "approved"
},
   {
    code: "6A",
    name: "Märzen",

    strength: {
        anchor: "Standard+",
        min: 5.6,
        max: 6.3,
        unit: "%"
    },

    bitterness: {
        anchor: "Balanced",
        min: 18,
        max: 24,
        unit: "IBU"
    },

    body: {
        anchor: "Medium",
        min: 1.010,
        max: 1.014,
        unit: "FG"
    },

    carbonation: {
        anchor: "Moderate",
        min: null,
        max: null,
        unit: null,
        text: "Medium body, with a smooth, creamy texture that often suggests a fuller mouthfeel. Medium carbonation. Fully attenuated, without a sweet or cloying impression."
    },

    color: {
        anchor: "Amber",
        min: 8,
        max: 17,
        unit: "SRM"
    },

    og: {
        min: 1.054,
        max: 1.060,
        unit: "OG"
    },

    foundationEligible: true,
    comparisonEligible: true,
    recipeEligible: true,
    core: true,
    anchorStatus: "approved"
},

   {
    code: "15B",
    name: "Irish Stout",

    strength: {
        anchor: "Session / Low",
        min: 3.8,
        max: 5.0,
        unit: "%"
    },

    bitterness: {
        anchor: "Firm Bitter",
        min: 25,
        max: 45,
        unit: "IBU"
    },

    body: {
        anchor: "Medium",
        min: 1.007,
        max: 1.011,
        unit: "FG"
    },

    carbonation: {
        anchor: "Moderate",
        min: null,
        max: null,
        unit: null,
        text: "Medium-light to medium body. Moderate carbonation. Smooth."
    },

    color: {
        anchor: "Black",
        min: 25,
        max: 40,
        unit: "SRM"
    },

    og: {
        min: 1.036,
        max: 1.044,
        unit: "OG"
    },

    foundationEligible: true,
    comparisonEligible: true,
    recipeEligible: true,
    core: true,
    anchorStatus: "approved"
},
];
