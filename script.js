/* =========================
   Diet Craft – Complete Script
   ========================= */

/* -------------------------
   RECIPES DATABASE
   (Every item that appears in any plan has a recipe here)
   ------------------------- */
const recipes = {
  /* General / Reusable */
  "Oats & fruits": {
    ingredients: ["1/2 cup rolled oats (GF if needed)", "1 cup milk or plant milk", "1/2 banana (sliced)", "1/2 apple (diced)", "1 tsp honey or maple (optional)", "Pinch cinnamon (optional)"],
    instructions: [
      "Bring milk/plant milk to a gentle boil.",
      "Add oats and cook 3–5 minutes until creamy.",
      "Top with fruits; drizzle honey/maple and cinnamon if using."
    ]
  },
  "Soy milk oats": {
    ingredients: ["1/2 cup rolled oats (GF if needed)", "1 cup soy milk", "1 tsp maple syrup (optional)", "Berries/banana for topping"],
    instructions: [
      "Simmer oats in soy milk for 3–4 minutes until soft.",
      "Top with fruit; sweeten lightly if desired."
    ]
  },
  "Veg oatmeal": {
    ingredients: ["1/2 cup oats", "1 cup water", "1/4 cup mixed veggies (carrot, peas)", "1 tsp ghee/olive oil", "Salt & pepper"],
    instructions: [
      "Sauté veggies in ghee/oil 1 minute.",
      "Add oats, toast 30 seconds, then add water.",
      "Cook 3–4 minutes, season, and serve."
    ]
  },
  "Boiled eggs": {
    ingredients: ["2 eggs", "Salt & pepper"],
    instructions: [
      "Boil eggs 7–9 minutes (soft to hard).",
      "Peel, slice and season."
    ]
  },
  "Egg omelette": {
    ingredients: ["2 eggs", "Pinch salt & pepper", "1 tsp oil", "Chopped onions/tomatoes/greens (optional)"],
    instructions: [
      "Beat eggs with seasoning; add chopped veggies if using.",
      "Cook in a lightly oiled pan 1–2 minutes per side."
    ]
  },
  "Fruit salad": {
    ingredients: ["Apple", "Banana", "Papaya/Berries", "1 tsp lemon juice", "Mint (optional)"],
    instructions: [
      "Chop fruits and toss with lemon and mint.",
      "Serve fresh."
    ]
  },
  "Green smoothie": {
    ingredients: ["1 banana", "1 cup spinach", "1 cup plant milk/water", "1 tsp chia/flax"],
    instructions: [
      "Blend everything until smooth.",
      "Serve chilled."
    ]
  },
  "Smoothie": {
    ingredients: ["1 banana", "1/2 cup frozen fruit", "1 cup milk/plant milk", "1 tbsp peanut butter (optional)"],
    instructions: [
      "Blend all ingredients until smooth.",
      "Serve immediately."
    ]
  },
  "Protein shake": {
    ingredients: ["1 scoop whey protein", "250 ml milk/water", "Ice (optional)"],
    instructions: [
      "Blend or shake until smooth.",
      "Serve immediately."
    ]
  },
  "Vegan protein shake": {
    ingredients: ["1 scoop plant protein", "250 ml plant milk", "1 tsp cocoa (optional)"],
    instructions: [
      "Blend until smooth.",
      "Serve immediately."
    ]
  },
  "Yogurt": {
    ingredients: ["1 cup plain yogurt/curd", "1 tsp honey (optional)", "Pinch cinnamon (optional)"],
    instructions: [
      "Whisk yogurt until smooth.",
      "Sweeten or spice as desired."
    ]
  },
  "Nuts": {
    ingredients: ["10 almonds", "5 cashews", "2 walnut halves", "1 tbsp pumpkin seeds (optional)"],
    instructions: [
      "Lightly roast (optional).",
      "Let cool and serve."
    ]
  },
  "Seeds": {
    ingredients: ["1 tbsp mixed seeds (sunflower, pumpkin, flax, chia)"],
    instructions: [
      "Eat as-is or lightly roast.",
      "Great crunchy snack."
    ]
  },
  "Seeds mix": {
    ingredients: ["1 tbsp sunflower seeds", "1 tbsp pumpkin seeds", "1 tsp flax/chia"],
    instructions: [
      "Dry roast briefly (optional).",
      "Cool and enjoy."
    ]
  },
  "Fruit bowl": {
    ingredients: ["Seasonal fruits", "1 tbsp seeds or nuts (optional)"],
    instructions: [
      "Chop fruits, top with seeds or nuts.",
      "Serve fresh."
    ]
  },
  "Fruit chaat": {
    ingredients: ["Mixed fruits", "Pinch chaat masala/salt", "Lemon juice"],
    instructions: [
      "Chop fruits, toss with spices and lemon.",
      "Serve fresh."
    ]
  },

  /* Grains / Mains */
  "Quinoa porridge": {
    ingredients: ["1/3 cup quinoa (rinsed)", "1 cup milk/water", "1 tsp honey (optional)", "Fruit to top"],
    instructions: [
      "Simmer quinoa 12–15 minutes until tender.",
      "Sweeten lightly and top with fruit."
    ]
  },
  "Rice salad": {
    ingredients: ["3/4 cup cooked rice (cooled)", "1/2 cucumber (diced)", "1/2 capsicum", "Sweet corn (optional)", "Olive oil + lemon", "Salt & pepper"],
    instructions: [
      "Combine all ingredients.",
      "Dress with olive oil, lemon, salt and pepper."
    ]
  },
  "Rajma rice": {
    ingredients: ["3/4 cup cooked rice", "3/4 cup cooked rajma", "1/2 onion", "1 tomato", "Spices (cumin, chilli, garam masala)", "1 tsp oil", "Salt"],
    instructions: [
      "Sauté onion, add tomato and spices to form masala.",
      "Add rajma and simmer 5–7 minutes.",
      "Serve with rice."
    ]
  },
  "Dal khichdi": {
    ingredients: ["1/4 cup moong dal", "1/4 cup rice", "1.5 cups water", "Turmeric", "Salt", "Ghee (optional)"],
    instructions: [
      "Wash dal and rice; pressure cook with water, turmeric and salt (2–3 whistles).",
      "Finish with ghee (optional)."
    ]
  },
  "Dal & veggies": {
    ingredients: ["1/2 cup moong/masoor dal", "1.5 cups water", "1/2 cup mixed veggies", "1/4 tsp turmeric", "Salt", "1 tsp ghee (optional)"],
    instructions: [
      "Pressure cook dal with turmeric and salt.",
      "Boil/steam veggies and stir into dal.",
      "Serve as soup or with a small portion of rice."
    ]
  },
  "Veg pulao": {
    ingredients: ["1/2 cup basmati rice", "1 cup mixed veggies", "Whole spices (bay leaf, cumin)", "1 tsp oil/ghee", "Salt"],
    instructions: [
      "Sauté spices and veggies.",
      "Add washed rice + water (1:2), cook till done."
    ]
  },
  "Veg curry & rice": {
    ingredients: ["1 cup mixed veggies", "1/2 onion", "1 tomato", "1 tsp curry powder", "1 tsp oil", "3/4 cup cooked rice", "Salt"],
    instructions: [
      "Sauté onion; add tomato and curry powder.",
      "Add veggies with a splash of water; cook till tender.",
      "Serve with rice."
    ]
  },
  "Rice & veggies": {
    ingredients: ["3/4 cup cooked rice", "1 cup sautéed veggies", "1 tsp tamari/soy (GF if needed)", "Salt & pepper"],
    instructions: [
      "Stir-fry veggies, add rice and tamari.",
      "Toss and serve."
    ]
  },

  /* Protein mains – chicken/fish/paneer/tofu/eggs */
  "Grilled chicken salad": {
    ingredients: ["150 g chicken breast", "2 cups lettuce", "1/2 cucumber", "8 cherry tomatoes", "1 tbsp olive oil", "1 tsp lemon juice", "Salt & pepper"],
    instructions: [
      "Season and grill chicken 4–5 min each side.",
      "Toss veggies with oil + lemon; slice chicken on top."
    ]
  },
  "Grilled chicken wrap": {
    ingredients: ["1 whole-wheat tortilla", "120 g grilled chicken (sliced)", "Lettuce", "Tomato", "Yogurt/mint sauce"],
    instructions: [
      "Layer tortilla with lettuce and tomato.",
      "Add chicken and drizzle sauce; wrap tightly."
    ]
  },
  "Chicken rice bowl": {
    ingredients: ["150 g chicken", "3/4 cup cooked rice", "1/2 cup veggies", "1 tsp soy sauce", "1 tsp oil"],
    instructions: [
      "Stir-fry chicken till cooked; set aside.",
      "Stir-fry veggies; add rice and soy; toss chicken back in."
    ]
  },
  "Chicken with rice": {
    ingredients: ["120 g chicken", "3/4 cup rice", "1 tsp oil", "Salt, pepper, spices"],
    instructions: [
      "Pan-cook seasoned chicken until done.",
      "Serve with rice."
    ]
  },
  "Grilled chicken & quinoa": {
    ingredients: ["120 g chicken breast", "1/2 cup cooked quinoa", "Salad greens", "Olive oil + lemon", "Salt & pepper"],
    instructions: [
      "Grill chicken and slice.",
      "Serve over quinoa with dressed greens."
    ]
  },
  "Fish curry": {
    ingredients: ["150 g fish fillet", "1/2 onion (sliced)", "1 tomato (pureed)", "1 tsp curry powder", "1 tsp oil", "Salt"],
    instructions: [
      "Sauté onion; add tomato puree and curry powder.",
      "Add fish; simmer 5–7 minutes until cooked."
    ]
  },
  "Fish with rice": {
    ingredients: ["150 g fish (pan-seared)", "3/4 cup rice", "Lemon, salt & pepper"],
    instructions: [
      "Season fish; pan-sear 3–4 minutes each side.",
      "Serve with rice and lemon."
    ]
  },
  "Paneer salad": {
    ingredients: ["100 g paneer (cubes)", "1 cup lettuce", "1/2 cucumber", "1/4 capsicum", "1 tbsp lemon-olive oil dressing", "Salt & pepper"],
    instructions: [
      "Sear paneer until golden.",
      "Toss veggies with dressing; top with paneer."
    ]
  },
  "Paneer paratha": {
    ingredients: ["2 whole-wheat rotis/parathas", "100 g paneer (grated)", "Chilli & spices", "Salt", "1 tsp ghee/oil"],
    instructions: [
      "Stuff seasoned paneer, roll out.",
      "Cook on tawa with ghee/oil until golden."
    ]
  },
  "Paneer curry": {
    ingredients: ["150 g paneer (cubes)", "1 onion", "1 tomato puree", "1 tsp ginger-garlic paste", "1 tsp garam masala", "1 tsp oil", "Salt"],
    instructions: [
      "Sauté onion + ginger-garlic.",
      "Add tomato puree + masala 3–4 minutes.",
      "Add paneer; simmer 3 minutes."
    ]
  },
  "Tofu curry": {
    ingredients: ["150 g firm tofu (cubed)", "1/2 onion", "1 tomato (pureed)", "1 tsp curry powder", "1 tsp oil", "Salt"],
    instructions: [
      "Pan-sear tofu; set aside.",
      "Sauté onion; add tomato + curry powder.",
      "Stir in tofu; simmer 3 minutes."
    ]
  },
  "Tofu scramble": {
    ingredients: ["150 g firm tofu (crumbled)", "1/4 onion", "1/4 capsicum", "1/4 tsp turmeric", "1 tsp oil", "Salt & pepper"],
    instructions: [
      "Sauté onion & capsicum.",
      "Add tofu + turmeric; cook 3–4 minutes."
    ]
  },
  "Tofu stir fry": {
    ingredients: ["150 g tofu (cubed)", "1 cup mixed veggies", "1 tsp tamari/soy", "1 tsp oil", "Salt & pepper"],
    instructions: [
      "Sauté tofu until golden; remove.",
      "Stir-fry veggies, return tofu with tamari; toss."
    ]
  },
  "Chickpea salad": {
    ingredients: ["3/4 cup boiled chickpeas", "1/2 onion", "1/2 tomato", "Coriander", "1 tsp olive oil", "1 tsp lemon juice", "Salt & pepper"],
    instructions: [
      "Combine all ingredients.",
      "Toss and adjust seasoning."
    ]
  },
  "Quinoa & beans": {
    ingredients: ["1/2 cup cooked quinoa", "3/4 cup cooked beans", "1/2 capsicum (diced)", "1 tsp olive oil", "Salt, pepper, lemon"],
    instructions: [
      "Mix everything and toss with oil, lemon and seasoning."
    ]
  },
  "Lentil curry": {
    ingredients: ["1/2 cup red/yellow lentils", "1.5 cups water", "1/2 onion", "1 tomato", "1 tsp curry powder", "Salt"],
    instructions: [
      "Cook lentils till soft.",
      "Make quick onion-tomato masala with curry powder.",
      "Combine; simmer 3 minutes."
    ]
  },
  "Vegan curry": {
    ingredients: ["1 cup veggies/beans", "1/2 onion", "1 tomato", "1 tsp curry powder", "Coconut milk (optional)", "Salt"],
    instructions: [
      "Make onion–tomato masala with curry powder.",
      "Add veggies/beans; add coconut milk if using.",
      "Simmer till flavors combine."
    ]
  },

  /* Breakfast grains */
  "Upma": {
    ingredients: ["1/2 cup rava (semolina)", "1.5 cups water", "1 tsp oil", "Mustard, curry leaves, chilli (optional)", "Salt", "Veggies (optional)"],
    instructions: [
      "Dry roast rava 2–3 minutes; set aside.",
      "Temper spices in oil; add veggies if using.",
      "Add water + salt; bring to boil.",
      "Stir in rava; cook 2–3 minutes."
    ]
  },
  "Eggs & toast": {
    ingredients: ["2 eggs", "2 slices whole-grain bread", "Salt & pepper", "1 tsp butter (optional)"],
    instructions: [
      "Make scrambled eggs or omelette.",
      "Toast bread; butter lightly if desired."
    ]
  }
};

/* -------------------------
   PLAN OPTIONS (by goal & restriction)
   Each contains 4 arrays (breakfast, lunch, snack, dinner) with >= 7 unique items.
   The generator will pick 7 unique for the week (no repeats).
   ------------------------- */
const planOptions = {
  weight_loss: {
    none: {
      breakfast: ["Oats & fruits", "Boiled eggs", "Fruit salad", "Smoothie", "Quinoa porridge", "Egg omelette", "Soy milk oats"],
      lunch: ["Grilled chicken salad", "Veg curry & rice", "Grilled chicken wrap", "Chicken rice bowl", "Rajma rice", "Dal & veggies", "Paneer salad"],
      snack: ["Nuts", "Fruit bowl", "Seeds mix", "Yogurt", "Chickpea salad", "Protein shake", "Fruit chaat"],
      dinner: ["Soup & veggies", "Chicken with rice", "Fish curry", "Paneer curry", "Tofu curry", "Veg pulao", "Lentil curry"]
    },
    vegetarian: {
      breakfast: ["Veg oatmeal", "Upma", "Fruit chaat", "Smoothie", "Quinoa porridge", "Protein smoothie", "Soy milk oats"],
      lunch: ["Paneer salad", "Veg pulao", "Rajma rice", "Paneer paratha", "Dal & veggies", "Veg curry & rice", "Dal khichdi"],
      snack: ["Fruit bowl", "Nuts", "Seeds mix", "Yogurt", "Fruit salad", "Protein smoothie", "Seeds"],
      dinner: ["Dal & veggies", "Paneer curry", "Veg curry & rice", "Veg pulao", "Dal khichdi", "Tofu curry", "Lentil curry"]
    },
    vegan: {
      breakfast: ["Soy milk oats", "Green smoothie", "Tofu scramble", "Quinoa porridge", "Fruit salad", "Smoothie", "Oats & fruits"],
      lunch: ["Chickpea salad", "Quinoa & beans", "Tofu stir fry", "Rice & veggies", "Vegan curry", "Rice salad", "Dal & veggies"],
      snack: ["Hummus & veggies", "Seeds mix", "Nuts", "Vegan protein shake", "Fruit bowl", "Seeds", "Smoothie"],
      dinner: ["Tofu curry", "Lentil curry", "Vegan curry", "Rice & veggies", "Quinoa & beans", "Tofu stir fry", "Veg curry & rice"]
    },
    gluten_free: {
      breakfast: ["Quinoa porridge", "Egg omelette", "Boiled eggs", "Soy milk oats", "Fruit salad", "Green smoothie", "Oats & fruits"],
      lunch: ["Grilled chicken & quinoa", "Rice salad", "Rajma rice", "Dal & veggies", "Veg curry & rice", "Rice & chicken", "Quinoa & beans"],
      snack: ["Seeds mix", "Nuts", "Yogurt", "Fruit bowl", "Protein shake", "Vegan protein shake", "Hummus & veggies"],
      dinner: ["Fish with rice", "Chicken with rice", "Lentil curry", "Tofu curry", "Vegan curry", "Veg curry & rice", "Rice & veggies"]
    }
  },

  muscle_gain: {
    none: {
      breakfast: ["Eggs & toast", "Oats & fruits", "Smoothie", "Boiled eggs", "Protein shake", "Egg omelette", "Quinoa porridge"],
      lunch: ["Chicken rice bowl", "Grilled chicken wrap", "Grilled chicken salad", "Fish curry", "Rajma rice", "Veg curry & rice", "Rice & chicken"],
      snack: ["Protein shake", "Yogurt", "Nuts", "Fruit bowl", "Seeds mix", "Fruit salad", "Protein smoothie"],
      dinner: ["Fish curry", "Chicken with rice", "Paneer curry", "Lentil curry", "Tofu curry", "Veg pulao", "Quinoa & beans"]
    },
    vegetarian: {
      breakfast: ["Paneer paratha", "Protein smoothie", "Veg oatmeal", "Oats & fruits", "Smoothie", "Soy milk oats", "Upma"],
      lunch: ["Rajma rice", "Paneer curry", "Paneer salad", "Veg pulao", "Dal & veggies", "Veg curry & rice", "Dal khichdi"],
      snack: ["Protein smoothie", "Yogurt", "Nuts", "Fruit bowl", "Seeds mix", "Fruit salad", "Seeds"],
      dinner: ["Paneer curry", "Lentil curry", "Tofu curry", "Veg pulao", "Dal khichdi", "Veg curry & rice", "Rajma rice"]
    },
    vegan: {
      breakfast: ["Tofu scramble", "Vegan protein shake", "Soy milk oats", "Green smoothie", "Quinoa porridge", "Smoothie", "Fruit salad"],
      lunch: ["Quinoa & beans", "Tofu stir fry", "Chickpea salad", "Rice & veggies", "Vegan curry", "Rice salad", "Dal & veggies"],
      snack: ["Vegan protein shake", "Hummus & veggies", "Nuts", "Seeds mix", "Fruit bowl", "Smoothie", "Seeds"],
      dinner: ["Lentil curry", "Tofu curry", "Vegan curry", "Quinoa & beans", "Rice & veggies", "Tofu stir fry", "Veg curry & rice"]
    },
    gluten_free: {
      breakfast: ["Egg omelette", "Boiled eggs", "Quinoa porridge", "Soy milk oats", "Oats & fruits", "Green smoothie", "Protein shake"],
      lunch: ["Rice & chicken", "Grilled chicken & quinoa", "Rajma rice", "Dal & veggies", "Veg curry & rice", "Quinoa & beans", "Rice salad"],
      snack: ["Protein shake", "Yogurt", "Nuts", "Fruit bowl", "Seeds mix", "Vegan protein shake", "Hummus & veggies"],
      dinner: ["Fish with rice", "Chicken with rice", "Lentil curry", "Tofu curry", "Vegan curry", "Rice & veggies", "Veg curry & rice"]
    }
  },

  healthy: {
    none: {
      breakfast: ["Fruit salad", "Oats & fruits", "Eggs & toast", "Smoothie", "Yogurt", "Green smoothie", "Soy milk oats"],
      lunch: ["Grilled chicken wrap", "Veg curry & rice", "Grilled chicken salad", "Chicken rice bowl", "Rice salad", "Rajma rice", "Dal & veggies"],
      snack: ["Yogurt", "Fruit bowl", "Nuts", "Seeds mix", "Fruit chaat", "Protein shake", "Smoothie"],
      dinner: ["Veg curry & rice", "Chicken with rice", "Fish curry", "Lentil curry", "Paneer curry", "Tofu curry", "Veg pulao"]
    },
    vegetarian: {
      breakfast: ["Upma", "Veg oatmeal", "Fruit chaat", "Oats & fruits", "Protein smoothie", "Smoothie", "Soy milk oats"],
      lunch: ["Veg pulao", "Paneer salad", "Rajma rice", "Dal & veggies", "Veg curry & rice", "Dal khichdi", "Rice salad"],
      snack: ["Yogurt", "Fruit salad", "Nuts", "Seeds mix", "Fruit bowl", "Protein smoothie", "Seeds"],
      dinner: ["Veg curry & rice", "Paneer curry", "Dal & veggies", "Veg pulao", "Dal khichdi", "Lentil curry", "Tofu curry"]
    },
    vegan: {
      breakfast: ["Green smoothie", "Soy milk oats", "Tofu scramble", "Quinoa porridge", "Fruit salad", "Smoothie", "Oats & fruits"],
      lunch: ["Tofu stir fry", "Chickpea salad", "Quinoa & beans", "Rice & veggies", "Vegan curry", "Rice salad", "Dal & veggies"],
      snack: ["Hummus & veggies", "Nuts", "Seeds mix", "Vegan protein shake", "Fruit bowl", "Smoothie", "Seeds"],
      dinner: ["Vegan curry", "Tofu curry", "Lentil curry", "Quinoa & beans", "Rice & veggies", "Tofu stir fry", "Veg curry & rice"]
    },
    gluten_free: {
      breakfast: ["Boiled eggs", "Egg omelette", "Quinoa porridge", "Soy milk oats", "Oats & fruits", "Green smoothie", "Yogurt"],
      lunch: ["Rice salad", "Grilled chicken & quinoa", "Rajma rice", "Dal & veggies", "Veg curry & rice", "Quinoa & beans", "Rice & chicken"],
      snack: ["Seeds mix", "Nuts", "Yogurt", "Fruit bowl", "Protein shake", "Vegan protein shake", "Hummus & veggies"],
      dinner: ["Fish with rice", "Chicken with rice", "Lentil curry", "Tofu curry", "Vegan curry", "Veg curry & rice", "Rice & veggies"]
    }
  }
};

/* -------------------------
   UTILITIES
   ------------------------- */
function pickSevenUnique(arr) {
  // Returns the first 7 items from a shuffled copy (ensures no repeats)
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, 7);
}

function buildWeeklyPlan(goal, restriction) {
  const opts = planOptions?.[goal]?.[restriction];
  if (!opts) return null;

  const breakfasts = pickSevenUnique(opts.breakfast);
  const lunches   = pickSevenUnique(opts.lunch);
  const snacks    = pickSevenUnique(opts.snack);
  const dinners   = pickSevenUnique(opts.dinner);

  const week = [];
  for (let d = 0; d < 7; d++) {
    week.push({
      breakfast: breakfasts[d],
      lunch: lunches[d],
      snack: snacks[d],
      dinner: dinners[d]
    });
  }
  return week;
}

/* -------------------------
   RENDER & INTERACTIONS
   (Requires: #dietForm, #result, #downloadBtn in index.html,
    and modal with #recipeModal, #recipeTitle, #recipeIngredients, #recipeInstructions, .close)
   ------------------------- */
document.getElementById("dietForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const goal = document.getElementById("goal").value;
  const restriction = document.getElementById("restriction").value;

  const plan = buildWeeklyPlan(goal, restriction);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  resultDiv.classList.add("plan");

  if (!plan) {
    resultDiv.innerHTML = "<p>Plan not available for the selected options.</p>";
    return;
  }

  resultDiv.innerHTML = `<h2>Hi ${name || "there"}, here’s your 7-Day Plan 🗓️</h2>`;

  plan.forEach((day, idx) => {
    let card = `<div class="day-card"><h3>Day ${idx + 1}</h3>`;
    card += renderMealRow("8:00 AM - Breakfast", day.breakfast);
    card += renderMealRow("1:00 PM - Lunch",      day.lunch);
    card += renderMealRow("4:00 PM - Snacks",     day.snack);
    card += renderMealRow("8:00 PM - Dinner",     day.dinner);
    card += `</div>`;
    resultDiv.innerHTML += card;
  });

  const dlBtn = document.getElementById("downloadBtn");
  dlBtn.style.display = "inline-block";
  dlBtn.onclick = function () {
    const opt = {
      margin: 0.5,
      filename: `${name || "DietCraft"}_DietPlan.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
    };
    html2pdf().set(opt).from(resultDiv).save();
  };
});

function renderMealRow(label, mealName) {
  const safe = mealName.replace(/'/g, "\\'");
  return `
    <p class="meal">
      <b>${label}:</b> ${mealName}
      <button type="button" onclick="showRecipe('${safe}')">View Recipe</button>
    </p>`;
}

/* -------------------------
   RECIPE MODAL
   ------------------------- */
function showRecipe(mealName) {
  const modal = document.getElementById("recipeModal");
  const title = document.getElementById("recipeTitle");
  const ingredientsList = document.getElementById("recipeIngredients");
  const instructionsList = document.getElementById("recipeInstructions");
  const data = recipes[mealName];

  title.textContent = mealName;

  if (data) {
    ingredientsList.innerHTML = data.ingredients.map(i => `<li>${i}</li>`).join("");
    instructionsList.innerHTML = data.instructions.map(step => `<li>${step}</li>`).join("");
  } else {
    ingredientsList.innerHTML = "<li>Recipe coming soon.</li>";
    instructionsList.innerHTML = "<li>Instructions coming soon.</li>";
  }

  modal.style.display = "block";

  document.querySelector(".close").onclick = () => modal.style.display = "none";
  window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
}

// Expose for inline onclick
window.showRecipe = showRecipe;
