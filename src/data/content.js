// Comprehensive Content & Asset Data for NourishWell Studio
// Designed for client presentation by iWAAT Digital Studio

export const BRAND = {
  name: "NourishWell",
  studioName: "NourishWell Nutrition Studio",
  tagline: "Feel Better. Eat Better. Live Better.",
  subtagline: "Personalized nutrition and sustainable weight-management guidance designed around your real lifestyle.",
  nutritionistName: "Dietitian Priya Sharma", // clearly indicated placeholder
  nutritionistCredentials: "M.Sc. Clinical Nutrition, RD (Registered Dietitian) [Placeholder]",
  whatsappNumber: "+919876543210", // demo number
  whatsappDisplay: "+91 98765 43210",
  email: "consult@nourishwell.demo",
  location: "Bandra West, Mumbai & Online Nationwide [Demo]",
  clientAgency: "Presented by iWAAT for Client Evaluation",
};

export const IMAGES = {
  // Hero & Nutritionist
  heroMain: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85", // Professional Indian woman in wellness/consulting setting
  heroSecondary: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80", // Doctor / nutritionist consulting patient
  nutritionistPortrait: "https://images.unsplash.com/photo-1594824813618-97ff910f54e1?auto=format&fit=crop&w=800&q=85", // Warm, approachable professional portrait
  nutritionistWorkspace: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", // Nutrition review on modern laptop

  // Indian Food & Ingredients
  indianThali: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1000&q=85", // Authentic wholesome Indian thali
  dalBowl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80", // Dal tadka bowl
  southIndianBreakfast: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80", // Steamed Idli & Sambar
  freshProduce: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80", // Fresh veggies & greens
  sproutsSalad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80", // Vibrant sprouts salad
  mealPrep: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80", // Meal prep in modern kitchen

  // Programs
  weightManagement: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80", // Wholesome balanced bowl
  fatLossLifestyle: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80", // Colorful balanced meal
  personalizedNutrition: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80", // Clinical nutrition consultation
  habitCoaching: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80", // Active walking & lifestyle routine

  // Lifestyle & Routine
  busyProfessional: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80", // Working professional with healthy habits
  activeYoga: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80", // Everyday movement & yoga
  finalCtaBanner: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85", // Sunrise outdoor wellness

  // Journal Covers
  journal1: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80", // Sustainable weight management
  journal2: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80", // Indian plate balance
  journal3: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80", // Consistent habits & mindfulness
};

export const TRUST_VALUES = [
  {
    id: "guidance",
    title: "Personalized Guidance",
    description: "Customized to your food culture, medical profile, and daily working hours.",
    icon: "Target",
    color: "forest",
    bgColor: "bg-forest/10",
    iconColor: "text-forest",
  },
  {
    id: "food",
    title: "Practical Food Choices",
    description: "Enjoy home-cooked dal, roti, and regional favorites without guilt or extreme cuts.",
    icon: "UtensilsCrossed",
    color: "warmYellow",
    bgColor: "bg-warmYellow/15",
    iconColor: "text-warmYellow-dark",
  },
  {
    id: "habits",
    title: "Sustainable Habits",
    description: "No crash dieting or temporary gimmicks. Focus on lasting metabolic consistency.",
    icon: "Flame",
    color: "freshGreen",
    bgColor: "bg-freshGreen/15",
    iconColor: "text-freshGreen",
  },
  {
    id: "support",
    title: "Ongoing 1-on-1 Support",
    description: "Direct WhatsApp check-ins, routine adjustments, and weekend dining strategies.",
    icon: "MessageSquareHeart",
    color: "coral",
    bgColor: "bg-coral/15",
    iconColor: "text-coral-dark",
  },
];

export const PROGRAMS = [
  {
    id: "weight-management",
    title: "Weight Management & Metabolic Health",
    shortDesc: "Sustainable weight balance through calorie-conscious, nutrient-dense Indian meals without hunger pangs.",
    badge: "Most Popular",
    badgeColor: "bg-forest text-ivory",
    icon: "Scale",
    iconColor: "text-freshGreen",
    iconBg: "bg-sage/40",
    image: IMAGES.weightManagement,
    duration: "12 Weeks (Recommended)",
    suitableFor: "Adults seeking gradual, steady fat loss while protecting energy levels and muscle tone.",
    keyPoints: [
      "No food deprivation — includes home-cooked staples",
      "Metabolic rate assessment & customized calorie targets",
      "Weekly plate calibrations and grocery shopping guidance",
      "Fortnightly video reviews & WhatsApp monitoring",
    ],
    details: "This program moves away from punishing starvation diets. We build realistic caloric deficits using everyday Indian meals like rajma chawal, roti sabzi, and eggs/paneer with calibrated portioning and fiber pairings that keep you energized throughout the workday.",
  },
  {
    id: "fat-loss-lifestyle",
    title: "Fat-Loss Lifestyle Coaching",
    shortDesc: "Body recomposition designed for working professionals balancing desk jobs, dining out, and travel.",
    badge: "Lifestyle Focused",
    badgeColor: "bg-coral text-white",
    icon: "Flame",
    iconColor: "text-coral-dark",
    iconBg: "bg-coral/15",
    image: IMAGES.fatLossLifestyle,
    duration: "8 to 16 Weeks",
    suitableFor: "Professionals who struggle with evening cravings, client dinners, and irregular sleep routines.",
    keyPoints: [
      "Desk-worker snack guide and tea/coffee optimizations",
      "Smart dining-out frameworks for social events",
      "Protein optimization for vegetarians and non-vegetarians",
      "Metabolism-supporting hydration and sleep strategies",
    ],
    details: "Focuses on steady body composition improvement. Rather than isolating you from family meals or social weekends, we teach you how to make informed choices at restaurants, manage alcohol or festive treats, and maintain effortless nutritional discipline.",
  },
  {
    id: "personalized-nutrition",
    title: "Personalized Clinical Nutrition",
    shortDesc: "Targeted dietary therapy for PCOS/PCOD, Thyroid imbalances, pre-diabetes, and sluggish digestion.",
    badge: "Clinical Care",
    badgeColor: "bg-lavender-dark text-white",
    icon: "HeartPulse",
    iconColor: "text-forest",
    iconBg: "bg-sage/50",
    image: IMAGES.personalizedNutrition,
    duration: "12 to 24 Weeks",
    suitableFor: "Individuals with medical lab reports requiring anti-inflammatory and hormonal nutrition support.",
    keyPoints: [
      "Comprehensive analysis of blood panels & medical history",
      "Gut-friendly, low-glycemic Indian meal compositions",
      "Anti-inflammatory spice & herbal additions based on science",
      "Coordination with your treating physician when indicated",
    ],
    details: "Food is powerful physiological medicine. We design targeted menus that help stabilize post-meal glucose spikes, soothe digestive bloating, and support hormonal balance through specific micronutrient density and balanced meal timing.",
  },
  {
    id: "habit-coaching",
    title: "Sustainable Healthy Habit Coaching",
    shortDesc: "Mindful eating rituals, healthy relationship with food, and breaking emotional snacking cycles.",
    badge: "Long-Term Habit",
    badgeColor: "bg-warmYellow-dark text-white",
    icon: "Compass",
    iconColor: "text-warmYellow-dark",
    iconBg: "bg-warmYellow/20",
    image: IMAGES.habitCoaching,
    duration: "6 to 12 Weeks",
    suitableFor: "Anyone overwhelmed by contradictory internet diet trends seeking peace of mind with everyday food.",
    keyPoints: [
      "Breaking guilt associated with traditional Indian sweets & carbs",
      "Hunger vs. emotional craving recognition techniques",
      "Simplified 20-minute batch prep ideas for busy weeks",
      "Lifetime maintenance toolkit to stay on track independently",
    ],
    details: "The biggest barrier to wellness isn't lack of knowledge; it's unsustainable restriction. We help you build a peaceful, intuitive relationship with food so healthy eating becomes an effortless second nature rather than an exhausting chore.",
  },
];

export const ASSESSMENT_DATA = {
  steps: [
    {
      id: "goal",
      stepNumber: 1,
      title: "What is your primary wellness goal?",
      subtitle: "Select the primary outcome you would like to work towards with your nutritionist.",
      options: [
        {
          id: "manage-weight",
          label: "Manage weight & fat loss",
          description: "Gradual, steady body composition change without feeling depleted.",
          icon: "Scale",
          color: "forest",
        },
        {
          id: "eating-habits",
          label: "Improve everyday eating habits",
          description: "Better digestion, wholesome meals, and eliminating afternoon energy slumps.",
          icon: "Apple",
          color: "freshGreen",
        },
        {
          id: "consistent-routine",
          label: "Build a more consistent routine",
          description: "Organize meals around hectic workdays, travel, and family obligations.",
          icon: "CalendarCheck",
          color: "warmYellow",
        },
        {
          id: "personalized-diet",
          label: "Get personalized nutrition guidance",
          description: "Tailored dietary support for PCOS, thyroid, gut health, or specific health markers.",
          icon: "Activity",
          color: "coral",
        },
      ],
    },
    {
      id: "lifestyle",
      stepNumber: 2,
      title: "What best describes your everyday lifestyle?",
      subtitle: "Understanding your daily activity helps us calibrate realistic meal timing.",
      options: [
        {
          id: "sedentary",
          label: "Mostly sitting during the day",
          description: "Desk work, screen time, long commutes, and limited daily steps.",
          icon: "Monitor",
          color: "charcoal",
        },
        {
          id: "moderate",
          label: "A mix of sitting and movement",
          description: "Active work hours, household chores, and occasional walks or light workouts.",
          icon: "Footprints",
          color: "freshGreen",
        },
        {
          id: "active",
          label: "Regularly active",
          description: "Structured gym workouts, yoga, running, sports, or demanding physical routines.",
          icon: "Bike",
          color: "forest",
        },
      ],
    },
    {
      id: "support",
      stepNumber: 3,
      title: "What kind of consultation support do you prefer?",
      subtitle: "Choose how you'd most comfortably like to connect with your nutritionist.",
      options: [
        {
          id: "online",
          label: "Online consultation (Video & WhatsApp)",
          description: "Convenient weekly video calls with daily WhatsApp guidance from anywhere in India.",
          icon: "Video",
          color: "forest",
        },
        {
          id: "in-person",
          label: "In-person clinic consultation",
          description: "Face-to-face appointments at our consultation studio (Mumbai location [Demo]).",
          icon: "Building2",
          color: "coral",
        },
        {
          id: "undecided",
          label: "Not sure yet — discuss during discovery",
          description: "Begin with a quick 10-minute discovery call to choose the best format.",
          icon: "HelpCircle",
          color: "lavender",
        },
      ],
    },
  ],
};

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Share your lifestyle & goals",
    description: "Complete a simple lifestyle & food preference questionnaire. We review your daily schedule, past diet struggles, and medical history.",
    icon: "Compass",
    color: "forest",
    badge: "15-min Intake",
  },
  {
    step: "02",
    title: "Consult",
    subtitle: "Deep-dive 1-on-1 consultation",
    description: "A 45-minute comprehensive video or clinic session to uncover your metabolic baseline, food relationship, and realistic weekly targets.",
    icon: "Users",
    color: "coral",
    badge: "45-min Session",
  },
  {
    step: "03",
    title: "Personalize",
    subtitle: "Custom Indian nutrition blueprint",
    description: "Receive your practical, home-cooked food guide featuring familiar recipes, smart portioning rules, and easy restaurant alternatives.",
    icon: "FileText",
    color: "warmYellow",
    badge: "Custom Blueprint",
  },
  {
    step: "04",
    title: "Review & Refine",
    subtitle: "Ongoing support & calibrations",
    description: "Weekly check-ins, continuous WhatsApp support, habit tracking, and monthly metric assessments to ensure lasting, plateau-free progress.",
    icon: "Sparkles",
    color: "freshGreen",
    badge: "Weekly Tracking",
  },
];

export const INDIAN_LIFE_CARDS = [
  {
    id: "everyday-meals",
    title: "Everyday Meal Inspiration",
    subtitle: "Healthy eating with dal, roti, and sabzi",
    description: "You do not need exotic superfoods or bland salads to manage weight. We teach you how to balance simple Indian home-cooking with the 2:1:1 plate method: 2 parts colorful sabzi/salad, 1 part protein-rich dal/paneer/egg, and 1 part fiber-rich roti or rice.",
    image: IMAGES.indianThali,
    tag: "Cultural Harmony",
    highlights: ["Dal & Lentil Pairings", "Whole Grain Roti Ratios", "Seasonal Sabzi Prep"],
  },
  {
    id: "smarter-choices",
    title: "Smarter Food Swaps",
    subtitle: "Enjoy flavor without excess calories",
    description: "Simple, flavorful adjustments that transform heavy meals into nourishing feasts. Learn how to temper with measured cold-pressed oils, boost vegetable volume in curries, incorporate sprouted pulses, and enjoy chai without blood-sugar spikes.",
    image: IMAGES.freshProduce,
    tag: "Practical Habits",
    highlights: ["Chai & Snack Tweaks", "Oil Tempering Hacks", "High-Protein Sprouts"],
  },
  {
    id: "busy-routines",
    title: "Building Consistent Habits",
    subtitle: "Nutrition tailored for busy working lives",
    description: "Whether you have back-to-back corporate meetings, late commutes, or frequent travel, we design a failsafe nutritional plan. Includes quick 10-minute office tiffin ideas, healthy roadside snack swaps, and festive feast navigation.",
    image: IMAGES.busyProfessional,
    tag: "Modern Lifestyle",
    highlights: ["Office Lunchbox Guides", "Travel & Flight Strategies", "Festive Dining Playbook"],
  },
];

export const THALI_EXPLORER = {
  title: "The Balanced Indian Plate Framework",
  subtitle: "Click each component to see how everyday Indian ingredients create a nutritionally complete, metabolism-supporting meal.",
  components: [
    {
      id: "protein",
      name: "Protein & Lentils (25%)",
      portion: "1-2 Servings",
      examples: "Moong / Toor / Chana Dal, Paneer, Tofu, Sprouts, Eggs, Chicken",
      role: "Protects lean muscle tissue, supports satiety, and prevents rapid blood glucose spikes after eating.",
      coachTip: "Add a handful of sprouted moong or paneer cubes directly to your dal to naturally double the protein density.",
      color: "border-coral text-coral-dark bg-coral/10",
      badge: "Satiety & Muscle",
    },
    {
      id: "fiber",
      name: "Vegetables & Greens (50%)",
      portion: "Half the Plate",
      examples: "Bhindi, Lauki, Palak, Methi, Cucumber, Tomato Kachumber Salad",
      role: "Provides essential gut-microbiome prebiotic fiber, vital phytonutrients, and natural fullness on fewer calories.",
      coachTip: "Start your meal with the salad or crunchy sabzi first. Eating fiber before carbs significantly reduces the glycemic response.",
      color: "border-freshGreen text-freshGreen bg-freshGreen/10",
      badge: "Gut Health & Fullness",
    },
    {
      id: "carbs",
      name: "Complex Carbs (25%)",
      portion: "Controlled Portions",
      examples: "Phulka / Roti, Brown Rice, Jowar, Bajra, Foxtail Millets",
      role: "Fuel for your brain, thyroid hormone conversion, and clean sustained physical energy.",
      coachTip: "You do not need to quit rice or roti. Pair 1-2 multigrain phulkas or a small katori of rice with generous portions of dal and sabzi.",
      color: "border-warmYellow text-warmYellow-dark bg-warmYellow/15",
      badge: "Sustained Energy",
    },
    {
      id: "fats",
      name: "Healthy Fats & Probiotics (Accents)",
      portion: "1 Tsp Ghee + 1 Cup Curd",
      examples: "A2 Desi Cow Ghee, Fresh Dahi / Buttermilk (Chaas), Roasted Flaxseeds",
      role: "Essential for fat-soluble vitamin absorption (A, D, E, K), joint health, and live probiotic digestive enzymes.",
      coachTip: "A teaspoon of pure ghee on hot rotis lowers the glycemic index and improves nutrient bioavailability.",
      color: "border-lavender text-forest bg-lavender/20",
      badge: "Hormone & Digestion",
    },
  ],
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ananya Deshmukh",
    role: "Senior Product Manager, Bengaluru [Demo]",
    tag: "PCOS & Fat Loss",
    quote: "Sample testimonial — replace with an approved client review. Working 10-hour days in tech, I assumed healthy eating required raw salads. The nutritionist showed me how to structure regular ghar ka khana (dal, roti, curd) so my energy stayed high without constant sugar cravings.",
    outcome: "Sustainable habit transformation",
    metric: "Better energy & regular routine",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Vikram Sengupta",
    role: "Management Consultant, Mumbai [Demo]",
    tag: "Busy Professional Lifestyle",
    quote: "Sample testimonial — replace with an approved client review. Traveling 3 days a week made routine diets fail. What worked was having a practical framework for airport meals and hotel breakfasts instead of rigid rules. I never felt hungry or restricted.",
    outcome: "Metabolic consistency on travel",
    metric: "Consistent routine while traveling",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Meera Kulkarni",
    role: "Architect & Mother, Pune [Demo]",
    tag: "Postpartum Wellness",
    quote: "Sample testimonial — replace with an approved client review. The biggest relief was not having to cook separate meals for myself. The whole family eats the same healthy, balanced Indian food with slight portion adjustments.",
    outcome: "Realistic family-friendly nutrition",
    metric: "Balanced plate habits for home",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
];

export const JOURNAL_ARTICLES = [
  {
    id: "sustainable-weight-management",
    title: "Understanding Sustainable Weight Management: Why Starvation Fails",
    category: "Weight Science",
    categoryColor: "bg-forest text-ivory",
    readTime: "5 min read",
    date: "Nutrition Journal",
    image: IMAGES.journal1,
    summary: "Why severe calorie restriction triggers adaptive thermogenesis and rebound weight gain — and how eating sufficient protein and Indian fiber protects your metabolism.",
    content: [
      "Crash diets fail 95% of the time because your body treats sudden calorie starvation as a famine. When you slash calories drastically, your basal metabolic rate (BMR) slows down, thyroid output downregulates, and hunger hormones like ghrelin spike intensely.",
      "Sustainable fat loss is an act of gentle consistency. By creating a modest, manageable caloric deficit of 300 to 500 kcal while keeping protein adequate (1.2 to 1.6g per kg of target weight), your body burns stored adipose tissue while sparing active metabolic muscle mass.",
      "In an Indian dietary context, this means keeping your comforting daal, vegetables, and rotis, while smartly swapping deep-fried snacks for roasted makhana, boiled chana chaat, or paneer cubes.",
    ],
    takeaways: [
      "A modest 300-500 kcal deficit protects thyroid and metabolic speed.",
      "High protein and high fiber curb mid-afternoon hunger crashes.",
      "Consistency over 16 weeks outperforms intensity over 16 days.",
    ],
  },
  {
    id: "balanced-indian-plate",
    title: "Building a Balanced Indian Plate: The Modern Science of Ghar Ka Khana",
    category: "Indian Food Habits",
    categoryColor: "bg-freshGreen text-ivory",
    readTime: "4 min read",
    date: "Practical Nutrition",
    image: IMAGES.journal2,
    summary: "Traditional Indian meals are deeply nourishing when configured with the right macro proportions. Discover how to balance carbohydrates, dals, sabzis, and ghee.",
    content: [
      "There is an unfortunate myth that Indian cuisine is 'too carb-heavy' for effective fat loss. In reality, traditional Indian home cooking features rich culinary wisdom: probiotic curds, anti-inflammatory spices like turmeric and cumin, and diverse lentils.",
      "The issue is usually plate proportions: when meals are 70% white rice or phulkas with a small watery bowl of dal and oily curry. By flipping this ratio — making vegetables and salads 50% of the plate, doubling the dal or adding paneer/eggs, and enjoying 1-2 phulkas — the meal becomes a blood-sugar stabilizing powerhouse.",
      "A teaspoon of desi cow ghee is not the enemy. It slows stomach emptying, blunts glucose surges, and assists in the assimilation of vitamins A, D, E, and K.",
    ],
    takeaways: [
      "Follow the 2:1:1 plate visual guide: 50% fiber, 25% protein, 25% complex carbs.",
      "Eat your salad or vegetables first to reduce post-prandial glucose peaks.",
      "Do not eliminate ghee; measure 1-2 teaspoons mindfully.",
    ],
  },
  {
    id: "habits-routine",
    title: "Simple Daily Habits for a More Consistent Wellness Routine",
    category: "Lifestyle & Mindset",
    categoryColor: "bg-warmYellow-dark text-ivory",
    readTime: "6 min read",
    date: "Habit Coaching",
    image: IMAGES.journal3,
    summary: "How busy working professionals can maintain nutritional rhythm during high-stress weeks, dining out, and unexpected travel.",
    content: [
      "Most diet attempts crumble not because of lack of discipline, but because of poor friction design. When hunger strikes at 5:00 PM in the office and the only convenient option is samosas or biscuits, willpower will inevitably lose.",
      "The secret is friction management: keeping a jar of roasted chana, almonds, or walnuts at your desk; carrying a water bottle to prevent confusing dehydration with hunger; and deciding your restaurant dinner choice before you arrive hungry.",
      "Remember the 80/20 lifestyle rule: if 80% of your weekly meals come from wholesome, nourishing home-style food, the 20% enjoyed at social celebrations or family dinners will not derail your health.",
    ],
    takeaways: [
      "Pre-pack convenient high-fiber afternoon snacks at your work desk.",
      "Prioritize 7+ hours of restful sleep to regulate leptin and ghrelin hormones.",
      "Adopt the 80/20 guideline — perfection is unnecessary for remarkable health.",
    ],
  },
];

export const FAQS = [
  {
    q: "How does a nutrition consultation work?",
    a: "Your journey starts with a detailed lifestyle intake questionnaire covering your routine, dietary likes, medical history, and past challenges. During the 45-minute consultation (via video call or at our studio), we analyze your metabolic baseline and co-create an enjoyable, personalized nutrition roadmap tailored to your daily schedule.",
    icon: "Stethoscope",
  },
  {
    q: "Are the nutrition plans completely personalized?",
    a: "Yes, 100%. We do not provide generic template diet charts. Every plan takes into account your cultural food preferences (North, South, East, or West Indian), vegetarian or non-vegetarian habits, work shifts, cooking availability, and medical lab reports.",
    icon: "Sliders",
  },
  {
    q: "Can consultations and coaching be conducted entirely online?",
    a: "Absolutely. Over 80% of our clients work with us online across India and internationally. All consultations happen via secure Google Meet or Zoom, and ongoing meal reviews, adjustments, and guidance are provided seamlessly via WhatsApp.",
    icon: "Globe",
  },
  {
    q: "What happens during a follow-up review?",
    a: "Follow-up reviews take place weekly or fortnightly. We evaluate your energy levels, digestive comfort, sleep quality, and physical progress. We troubleshoot any roadblocks (like upcoming weddings, work travel, or plateaus) and update your meal recommendations accordingly.",
    icon: "Repeat",
  },
  {
    q: "How do I choose the right program for my needs?",
    a: "You can use our interactive Wellness Assessment above to receive an instant program recommendation, or schedule a free 10-minute discovery call where we understand your goals and suggest the ideal coaching timeline.",
    icon: "CheckCircle2",
  },
  {
    q: "How can I contact the nutritionist directly?",
    a: "You can book directly using the Consultation Booking form on this page, or click the WhatsApp button to initiate an instant chat with our consultation desk. We typically respond within 2 to 4 business hours.",
    icon: "MessageSquare",
  },
  {
    q: "Will I have to quit rice, rotis, or family dinners?",
    a: "Never. Sustainable nutrition must fit into real Indian family life. We show you how to balance carbohydrates with proteins and dietary fiber so you can continue enjoying warm rotis, fragrant rice, and festive meals without guilt.",
    icon: "Utensils",
  },
  {
    q: "Do you prescribe weight loss pills or meal replacement shakes?",
    a: "No. We believe strictly in real, wholesome, home-cooked food. We do not sell proprietary slimming powders, teas, or artificial meal replacements. Real food creates permanent metabolic habits.",
    icon: "ShieldAlert",
  },
];
