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
        anchor: "Slightly Malt-forward",
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
        anchor: "Slightly Malt-forward",
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
        anchor: "Hop-forward",
        min: 20,
        max: 35,
        unit: "IBU"
    },

    body: {
        anchor: "Medium-Light",
        min: 1.008,
        max: 1.014,
        unit: "FG"
    },

    carbonation: {
        anchor: "Moderate",
        min: null,
        max: null,
        unit: null,
        text: "Moderate carbonation."
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
        anchor: "Slightly Malt-forward",
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
        anchor: "Rich Malt", 
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
        anchor: "Firm Bitter",
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
{
    code: "19A",
    name: "American Amber Ale",
    strength: { anchor: "Standard", min: 4.5, max: 6.2, unit: "%" },
    bitterness: { anchor: "Balanced", min: 25, max: 40, unit: "IBU" },
    body: { anchor: "Medium", min: 1.010, max: 1.015, unit: "FG" },
    carbonation: { anchor: "Moderate", min: null, max: null, unit: null, text: "Medium to medium-full body. Moderate to high carbonation." },
    color: { anchor: "Amber", min: 10, max: 17, unit: "SRM" },
    og: { min: 1.045, max: 1.060, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "20A",
    name: "American Porter",
    strength: { anchor: "Standard+", min: 4.8, max: 6.5, unit: "%" },
    bitterness: { anchor: "Firm Bitter", min: 25, max: 50, unit: "IBU" },
    body: { anchor: "Medium", min: 1.012, max: 1.018, unit: "FG" },
    carbonation: { anchor: "Moderate", min: null, max: null, unit: null, text: "Medium to medium-full body. Moderate carbonation." },
    color: { anchor: "Black", min: 22, max: 40, unit: "SRM" },
    og: { min: 1.050, max: 1.070, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "20B",
    name: "American Stout",
    strength: { anchor: "Standard+", min: 5.0, max: 7.0, unit: "%" },
    bitterness: { anchor: "Firm Bitter", min: 35, max: 75, unit: "IBU" },
    body: { anchor: "Medium-Full", min: 1.010, max: 1.022, unit: "FG" },
    carbonation: { anchor: "Moderate", min: null, max: null, unit: null, text: "Medium to full body. Moderate to moderately-high carbonation." },
    color: { anchor: "Black", min: 30, max: 40, unit: "SRM" },
    og: { min: 1.050, max: 1.075, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "20C",
    name: "Imperial Stout",
    strength: { anchor: "Very Strong", min: 8.0, max: 12.0, unit: "%" },
    bitterness: { anchor: "Firm Bitter", min: 50, max: 90, unit: "IBU" },
    body: { anchor: "Full", min: 1.018, max: 1.030, unit: "FG" },
    carbonation: { anchor: "Moderate", min: null, max: null, unit: null, text: "Full to very full body. Low to moderate carbonation." },
    color: { anchor: "Black", min: 30, max: 40, unit: "SRM" },
    og: { min: 1.075, max: 1.115, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "21A",
    name: "American IPA",
    strength: { anchor: "Standard+", min: 5.5, max: 7.5, unit: "%" },
    bitterness: { anchor: "Hop-forward", min: 40, max: 70, unit: "IBU" },
    body: { anchor: "Medium", min: 1.008, max: 1.014, unit: "FG" },
    carbonation: { anchor: "Medium-High", min: null, max: null, unit: null, text: "Medium-light to medium body. Medium to high carbonation." },
    color: { anchor: "Gold", min: 6, max: 14, unit: "SRM" },
    og: { min: 1.056, max: 1.070, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "22A",
    name: "Double IPA",
    strength: { anchor: "Strong", min: 7.5, max: 10.0, unit: "%" },
    bitterness: { anchor: "Aggressive", min: 60, max: 120, unit: "IBU" },
    body: { anchor: "Medium", min: 1.008, max: 1.018, unit: "FG" },
    carbonation: { anchor: "Medium-High", min: null, max: null, unit: null, text: "Medium-light to medium body. Medium to high carbonation." },
    color: { anchor: "Gold", min: 6, max: 14, unit: "SRM" },
    og: { min: 1.065, max: 1.085, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "13C",
    name: "English Porter",
    strength: { anchor: "Standard", min: 4.0, max: 5.4, unit: "%" },
    bitterness: { anchor: "Balanced", min: 18, max: 35, unit: "IBU" },
    body: { anchor: "Medium", min: 1.008, max: 1.014, unit: "FG" },
    carbonation: { anchor: "Moderate", min: null, max: null, unit: null, text: "Medium-light to medium body. Moderate carbonation." },
    color: { anchor: "Brown", min: 20, max: 30, unit: "SRM" },
    og: { min: 1.040, max: 1.052, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "16A",
    name: "Sweet Stout",
    strength: { anchor: "Standard", min: 4.0, max: 6.0, unit: "%" },
    bitterness: { anchor: "Malt-forward", min: 20, max: 40, unit: "IBU", designNote: "Residual lactose sweetness requires firmer bitterness to prevent a cloying finish." },
    body: { anchor: "Full", min: 1.012, max: 1.024, unit: "FG" },
    carbonation: { anchor: "Moderate", min: null, max: null, unit: null, text: "Medium-full to full body. Low to moderate carbonation." },
    color: { anchor: "Black", min: 30, max: 40, unit: "SRM" },
    og: { min: 1.044, max: 1.060, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "16B",
    name: "Oatmeal Stout",
    strength: { anchor: "Standard", min: 4.2, max: 5.9, unit: "%" },
    bitterness: { anchor: "Balanced", min: 25, max: 40, unit: "IBU" },
    body: { anchor: "Medium-Full", min: 1.010, max: 1.018, unit: "FG" },
    carbonation: { anchor: "Moderate", min: null, max: null, unit: null, text: "Medium-full to full body. Low to moderate carbonation." },
    color: { anchor: "Black", min: 22, max: 40, unit: "SRM" },
    og: { min: 1.045, max: 1.065, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "24B",
    name: "Belgian Pale Ale",
    strength: { anchor: "Standard", min: 4.8, max: 5.5, unit: "%" },
    bitterness: { anchor: "Balanced", min: 20, max: 30, unit: "IBU" },
    body: { anchor: "Medium", min: 1.008, max: 1.014, unit: "FG" },
    carbonation: { anchor: "Moderate", min: null, max: null, unit: null, text: "Medium body. Moderate to moderately-high carbonation." },
    color: { anchor: "Amber", min: 8, max: 14, unit: "SRM" },
    og: { min: 1.048, max: 1.054, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "25A",
    name: "Belgian Blond Ale",
    strength: { anchor: "Standard+", min: 6.0, max: 7.5, unit: "%" },
    bitterness: { anchor: "Malt-forward", min: 15, max: 30, unit: "IBU" },
    body: { anchor: "Medium", min: 1.008, max: 1.018, unit: "FG" },
    carbonation: { anchor: "Medium-High", min: null, max: null, unit: null, text: "Medium body. Medium-high to high carbonation." },
    color: { anchor: "Gold", min: 4, max: 7, unit: "SRM" },
    og: { min: 1.062, max: 1.075, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "26A",
    name: "Belgian Single",
    strength: { anchor: "Standard", min: 4.8, max: 6.0, unit: "%" },
    bitterness: { anchor: "Firm Bitter", min: 25, max: 45, unit: "IBU" },
    body: { anchor: "Medium-Light", min: 1.004, max: 1.010, unit: "FG" },
    carbonation: { anchor: "Medium-High", min: null, max: null, unit: null, text: "Medium-light body. Medium-high to high carbonation." },
    color: { anchor: "Gold", min: 3, max: 5, unit: "SRM" },
    og: { min: 1.044, max: 1.054, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "26C",
    name: "Belgian Tripel",
    strength: { anchor: "Strong", min: 7.5, max: 9.5, unit: "%" },
    bitterness: { anchor: "Slightly Malt-forward", min: 20, max: 40, unit: "IBU" },
    body: { anchor: "Medium", min: 1.008, max: 1.014, unit: "FG" },
    carbonation: { anchor: "High", min: null, max: null, unit: null, text: "Medium-light to medium body. High carbonation." },
    color: { anchor: "Gold", min: 4.5, max: 7, unit: "SRM" },
    og: { min: 1.075, max: 1.085, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "26D",
    name: "Belgian Dark Strong Ale",
    strength: { anchor: "Strong", min: 8.0, max: 12.0, unit: "%" },
    bitterness: { anchor: "Malt-forward", min: 20, max: 35, unit: "IBU" },
    body: { anchor: "Medium-Full", min: 1.010, max: 1.024, unit: "FG" },
    carbonation: { anchor: "High", min: null, max: null, unit: null, text: "Medium to full body. High carbonation." },
    color: { anchor: "Brown", min: 12, max: 22, unit: "SRM" },
    og: { min: 1.075, max: 1.110, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "4B",
    name: "Festbier",
    strength: { anchor: "Standard+", min: 5.8, max: 6.3, unit: "%" },
    bitterness: { anchor: "Slightly Malt-forward", min: 18, max: 25, unit: "IBU" },
    body: { anchor: "Medium", min: 1.010, max: 1.012, unit: "FG" },
    carbonation: { anchor: "Moderate", min: null, max: null, unit: null, text: "Medium body. Medium carbonation." },
    color: { anchor: "Gold", min: 4, max: 7, unit: "SRM" },
    og: { min: 1.054, max: 1.057, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "4C",
    name: "Helles Bock",
    strength: { anchor: "Strong", min: 6.3, max: 7.4, unit: "%" },
    bitterness: { anchor: "Slightly Malt-forward", min: 23, max: 35, unit: "IBU" },
    body: { anchor: "Medium-Full", min: 1.011, max: 1.018, unit: "FG" },
    carbonation: { anchor: "Moderate", min: null, max: null, unit: null, text: "Medium body. Moderate to moderately-high carbonation." },
    color: { anchor: "Gold", min: 6, max: 11, unit: "SRM" },
    og: { min: 1.064, max: 1.072, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "5B",
    name: "Kölsch",
    strength: { anchor: "Standard", min: 4.4, max: 5.2, unit: "%" },
    bitterness: { anchor: "Balanced", min: 18, max: 30, unit: "IBU" },
    body: { anchor: "Medium-Light", min: 1.007, max: 1.011, unit: "FG" },
    carbonation: { anchor: "Medium-High", min: null, max: null, unit: null, text: "Medium-light body. Medium to medium-high carbonation." },
    color: { anchor: "Pale Gold", min: 3.5, max: 5, unit: "SRM" },
    og: { min: 1.044, max: 1.050, unit: "OG" },
    foundationEligible: true, comparisonEligible: true, recipeEligible: true, core: true, anchorStatus: "approved"
},

{
    code: "5C",
    name: "German Helles Exportbier",
    strength: { anchor: "Standard+", min: 5.0, max: 6.0, unit: "%" },
    bitterness: { anchor: "Balanced", min: 20, max: 30, unit: "IBU" },
    body: { anchor: "Medium", min: 1.008, max: 1.015, unit: "FG" },
    carbonation: { anchor: "Medium-High", min: null, max: null, unit: null, text: "Medium body. Medium to high carbonation." },
    color: { anchor: "Pale Gold", min: 4, max: 7, unit: "SRM" },
    og: { min: 1.048, max: 1.056, unit: "OG" },
    foundationEligible: true,
    comparisonEligible: true,
    recipeEligible: true,
    core: true,
    anchorStatus: "approved"
}

];

const comparisonMetadata = {
    "5D": {
        compareTargets: ["3B", "4A", "5C", "5B"],
        compareWeight: 10
    },

    "4A": {
        compareTargets: ["5D", "3B", "5C", "4B", "4C"],
        compareWeight: 10
    },

    "3B": {
        compareTargets: ["5D", "4A", "3A", "5C"],
        compareWeight: 9
    },

    "7A": {
        compareTargets: ["6A", "4B", "8A"],
        compareWeight: 9
    },

    "6A": {
        compareTargets: ["7A", "4B", "8A"],
        compareWeight: 9
    },

    "18B": {
        compareTargets: ["18A", "21A", "19A", "11C"],
        compareWeight: 10
    },

    "21A": {
        compareTargets: ["18B", "22A", "18A"],
        compareWeight: 10
    },

    "11B": {
        compareTargets: ["11A", "11C", "18B"],
        compareWeight: 9
    },

    "15B": {
        compareTargets: ["16A", "16B", "20B", "13C"],
        compareWeight: 9
    },

    "26C": {
        compareTargets: ["25A", "26A", "26D"],
        compareWeight: 9
    }
};

styles.forEach(style => {
    const metadata = comparisonMetadata[style.code];

    style.compareTargets = metadata ? metadata.compareTargets : [];
    style.compareWeight = metadata ? metadata.compareWeight : 0;
    style.highFrequencyCompare = metadata ? metadata.compareWeight >= 9 : false;

    const ogMinPoints = Math.round((style.og.min - 1) * 1000);
    const ogMaxPoints = Math.round((style.og.max - 1) * 1000);

    style.bugu = {
        anchor: style.bitterness.anchor,
        min: +(style.bitterness.min / ogMinPoints).toFixed(3),
        max: +(style.bitterness.max / ogMaxPoints).toFixed(3),
        unit: "BU:GU"
    };
});
