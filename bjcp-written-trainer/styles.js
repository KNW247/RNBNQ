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
            anchor: "Medium-Light",
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
        anchor: "Medium-Light",
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

{
    code: "3A",
    name: "Czech Pale Lager",

    strength: {
        anchor: "Session / Low",
        min: 3.0,
        max: 4.1,
        unit: "%"
    },

    bitterness: {
        anchor: "Balanced",
        min: 20,
        max: 35,
        unit: "IBU"
    },

    body: {
        anchor: "Light",
        min: 1.008,
        max: 1.014,
        unit: "FG"
    },

    carbonation: {
        anchor: "Moderate",
        min: null,
        max: null,
        unit: null,
        text: "Light to medium-light body. Medium to high carbonation."
    },

    color: {
        anchor: "Gold",
        min: 3,
        max: 6,
        unit: "SRM"
    },

    og: {
        min: 1.028,
        max: 1.044,
        unit: "OG"
    },

    foundationEligible: true,
    comparisonEligible: true,
    recipeEligible: true,
    core: true,
    anchorStatus: "approved"
},

{
    code: "3B",
    name: "Czech Premium Pale Lager",

    strength: {
        anchor: "Standard",
        min: 4.2,
        max: 5.8,
        unit: "%"
    },

    bitterness: {
        anchor: "Firm Bitter",
        min: 30,
        max: 45,
        unit: "IBU"
    },

    body: {
        anchor: "Medium",
        min: 1.013,
        max: 1.017,
        unit: "FG"
    },

    carbonation: {
        anchor: "Medium-High",
        min: null,
        max: null,
        unit: null,
        text: "Medium body. Medium to high carbonation."
    },

    color: {
        anchor: "Gold",
        min: 3.5,
        max: 6,
        unit: "SRM"
    },

    og: {
        min: 1.044,
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
    code: "8A",
    name: "Munich Dunkel",

    strength: {
        anchor: "Standard",
        min: 4.5,
        max: 5.6,
        unit: "%"
    },

    bitterness: {
        anchor: "Malt-forward",
        min: 18,
        max: 28,
        unit: "IBU"
    },

    body: {
        anchor: "Medium",
        min: 1.010,
        max: 1.016,
        unit: "FG"
    },

    carbonation: {
        anchor: "Moderate",
        min: null,
        max: null,
        unit: null,
        text: "Medium body. Moderate carbonation."
    },

    color: {
        anchor: "Brown",
        min: 14,
        max: 28,
        unit: "SRM"
    },

    og: {
        min: 1.048,
        max: 1.056,
        unit: "OG"
    },

    foundationEligible: true,
    comparisonEligible: true,
    recipeEligible: true,
    core: true,
    anchorStatus: "approved"
},

{
    code: "9A",
    name: "Doppelbock",

    strength: {
        anchor: "Strong",
        min: 7.0,
        max: 10.0,
        unit: "%"
    },

    bitterness: {
        anchor: "Balanced",
        min: 16,
        max: 26,
        unit: "IBU"
    },

    body: {
        anchor: "Full",
        min: 1.016,
        max: 1.024,
        unit: "FG"
    },

    carbonation: {
        anchor: "Moderate",
        min: null,
        max: null,
        unit: null,
        text: "Medium-low to moderate carbonation."
    },

    color: {
        anchor: "Brown",
        min: 6,
        max: 25,
        unit: "SRM"
    },

    og: {
        min: 1.072,
        max: 1.112,
        unit: "OG"
    },

    foundationEligible: true,
    comparisonEligible: true,
    recipeEligible: true,
    core: true,
    anchorStatus: "approved"
},

{
    code: "8B",
    name: "Schwarzbier",

    strength: {
        anchor: "Standard",
        min: 4.4,
        max: 5.4,
        unit: "%"
    },

    bitterness: {
        anchor: "Balanced",
        min: 20,
        max: 35,
        unit: "IBU"
    },

    body: {
        anchor: "Medium-Light",
        min: 1.010,
        max: 1.016,
        unit: "FG"
    },

    carbonation: {
        anchor: "Moderate",
        min: null,
        max: null,
        unit: null,
        text: "Moderate to moderately-high carbonation"
    },

    color: {
        anchor: "Black",
        min: 19,
        max: 30,
        unit: "SRM"
    },

    og: {
        min: 1.046,
        max: 1.052,
        unit: "OG"
    },

    foundationEligible: true,
    comparisonEligible: true,
    recipeEligible: true,
    core: true,
    anchorStatus: "approved"
},

{
    code: "11A",
    name: "Ordinary Bitter",

    strength: {
        anchor: "Session / Low",
        min: 3.2,
        max: 3.8,
        unit: "%"
    },

    bitterness: {
        anchor: "Balanced",
        min: 25,
        max: 35,
        unit: "IBU"
    },

    body: {
        anchor: "Light",
        min: 1.007,
        max: 1.011,
        unit: "FG"
    },

    carbonation: {
        anchor: "Low",
        min: null,
        max: null,
        unit: null,
        text: "Low carbonation, although bottled examples can have moderate carbonation"
    },

    color: {
        anchor: "Amber",
        min: 8,
        max: 14,
        unit: "SRM"
    },

    og: {
        min: 1.030,
        max: 1.039,
        unit: "OG"
    },

    foundationEligible: true,
    comparisonEligible: true,
    recipeEligible: true,
    core: true,
    anchorStatus: "approved"
},

{
    code: "11B",
    name: "Best Bitter",

    strength: {
        anchor: "Standard",
        min: 3.8,
        max: 4.6,
        unit: "%"
    },

    bitterness: {
        anchor: "Balanced",
        min: 25,
        max: 40,
        unit: "IBU"
    },

    body: {
        anchor: "Medium-Light",
        min: 1.008,
        max: 1.012,
        unit: "FG"
    },

    carbonation: {
        anchor: "Low",
        min: null,
        max: null,
        unit: null,
        text: "Low carbonation, although bottled examples can have moderate carbonation."
    },

    color: {
        anchor: "Amber",
        min: 8,
        max: 16,
        unit: "SRM"
    },

    og: {
        min: 1.040,
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
    code: "11C",
    name: "Strong Bitter",

    strength: {
        anchor: "Standard+",
        min: 4.6,
        max: 6.2,
        unit: "%"
    },

    bitterness: {
        anchor: "Firm Bitter",
        min: 30,
        max: 50,
        unit: "IBU"
    },

    body: {
        anchor: "Medium",
        min: 1.010,
        max: 1.016,
        unit: "FG"
    },

    carbonation: {
        anchor: "Moderate",
        min: null,
        max: null,
        unit: null,
        text: "Low to moderate carbonation, although bottled versions will be higher."
    },

    color: {
        anchor: "Copper",
        min: 8,
        max: 18,
        unit: "SRM"
    },

    og: {
        min: 1.048,
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
    code: "18A",
    name: "Blonde Ale",

    strength: {
        anchor: "Standard",
        min: 3.8,
        max: 5.5,
        unit: "%"
    },

    bitterness: {
        anchor: "Balanced",
        min: 15,
        max: 28,
        unit: "IBU"
    },

    body: {
        anchor: "Medium-Light",
        min: 1.008,
        max: 1.013,
        unit: "FG"
    },

    carbonation: {
        anchor: "Medium-High",
        min: null,
        max: null,
        unit: null,
        text: "Medium to high carbonation."
    },

    color: {
        anchor: "Gold",
        min: 3,
        max: 6,
        unit: "SRM"
    },

    og: {
        min: 1.038,
        max: 1.054,
        unit: "OG"
    },

    foundationEligible: true,
    comparisonEligible: true,
    recipeEligible: true,
    core: true,
    anchorStatus: "approved"
},

{
    code: "18B",
    name: "American Pale Ale",

    strength: {
        anchor: "Standard",
        min: 4.5,
        max: 6.2,
        unit: "%"
    },

    bitterness: {
        anchor: "Hop-forward",
        min: 30,
        max: 50,
        unit: "IBU"
    },

    body: {
        anchor: "Medium",
        min: 1.010,
        max: 1.015,
        unit: "FG"
    },

    carbonation: {
        anchor: "Medium-High",
        min: null,
        max: null,
        unit: null,
        text: " Moderate to high carbonation. "
    },

    color: {
        anchor: "Gold",
        min: 5,
        max: 10,
        unit: "SRM"
    },

    og: {
        min: 1.045,
        max: 1.060,
        unit: "OG"
    },

    foundationEligible: true,
    comparisonEligible: true,
    recipeEligible: true,
    core: true,
    anchorStatus: "approved"
},

    
];
