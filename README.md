# NourishWell Studio — Premium Personalized Indian Nutrition & Wellness Platform

> Evidence-based nutritional coaching and sustainable lifestyle platform tailored for real Indian lifestyles, favorite regional meals, and working routines.

![NourishWell Banner](https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=80)

---

## 🌟 Overview

**NourishWell Studio** is a high-conversion, client-facing wellness web application built for clinical nutritionists, dietitians, and lifestyle coaches. It pairs a comprehensive 14-section client-acquisition landing page with an interactive **Personal Wellness Dashboard & Daily Goal Tracker (`/my-wellness`)**.

- **Live Local Demo**: Run locally on `http://localhost:5173/`
- **Dashboard Direct Route**: `http://localhost:5173/#my-wellness`
- **Target Audience**: Indian consumers, busy professionals, and individuals seeking sustainable weight management without restrictive crash diets.

---

## 🚀 Key Features

### 1. Client-Facing Brand Experience
- **Editorial Lifestyle Hero**: Engaging photography and clear value proposition.
- **Clinical Credibility Strip**: Accreditation and evidence-based coaching badges.
- **Tailored Nutrition Programs**: Sustainable Fat Loss, Working Professional Metabolic Care, Women's Hormone & PCOS Nutrition, and Family Eating Blueprint.
- **3-Step Wellness Assessment**: Interactive readiness checker calculating a personalized nutrition match.
- **Indian Plate & Thali Nutrition**: Visual cultural macronutrient balance guide breaking down dal, roti, paneer, and local staples.
- **Dietitian Consultation Desk**: Integrated appointment booking form and 1-on-1 direct WhatsApp enquiry widget.

### 2. Personal Wellness Dashboard (`/my-wellness`)
- **Whole-Day Habit Checklist (24 Habits)**: Segmented across Morning, Midday & Lunch, Evening, Dinner, and Daily Healthy Living with active filter pills and confetti celebration.
- **Real-Time SVG Donut Chart**: Dynamic circular progress meter calculating exact completion percentage with zero-division guards and category progress breakdown.
- **Curated Indian Meal Planning Guide**: 16 regional meal options across 4 meal windows with dietary filters (Vegetarian, Eggetarian, Non-Vegetarian) and an interactive meal tray.
- **Daily Hydration Tracker**: Configurable glass target with milliliter calculations and interactive fill tracking.
- **7-Day Consistency Tracker**: Real day-1 state + a dedicated **"Preview 7-Day History [Demo]"** toggle designed for client presentations.
- **Date-Scoped LocalStorage**: Persists daily progress under `YYYY-MM-DD` scoped keys with confirmed reset safety.

### 3. Luxury Navigation Bar
- **Frosted Glassmorphism**: `backdrop-blur-xl bg-[#FAF8F2]/90` with adaptive shadow.
- **Zero-Overflow Layout**: Responsively fits on all laptops (1024px–1440px+) and mobile screens.
- **Consistent Home Anchor**: Visible across both the landing page and the wellness portal.
- **Scroll-Spy Active Indicator**: Automatically highlights active sections as the user scrolls.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Celebration Effects**: `canvas-confetti`
- **Typography**: Plus Jakarta Sans & Playfair Display

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ujjwalmaurya2/Wellness-and-well-being.git

# Navigate into the project folder
cd Wellness-and-well-being

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Production Build & Preview

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
nourishwell/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── dashboard/      # Personal Wellness Dashboard components
│   │   │   ├── WellnessDashboard.jsx
│   │   │   ├── DonutChart.jsx
│   │   │   ├── CategoryProgressChart.jsx
│   │   │   ├── HabitChecklist.jsx
│   │   │   ├── MealGuide.jsx
│   │   │   ├── HydrationTracker.jsx
│   │   │   ├── WeeklyConsistency.jsx
│   │   │   └── PreferencesModal.jsx
│   │   ├── Navbar.jsx      # Luxury navigation bar
│   │   ├── Hero.jsx        # Editorial hero section
│   │   ├── Programs.jsx    # Nutrition programs
│   │   ├── Assessment.jsx  # 3-step interactive assessment
│   │   ├── BookingSection.jsx # Consultation scheduler
│   │   └── ...             # Other landing page sections
│   ├── data/
│   │   ├── content.js      # Brand constants & photography URLs
│   │   └── dashboardContent.js # Habit library & meal options
│   ├── App.jsx             # Main router & layout state
│   ├── main.jsx            # React root
│   └── index.css           # Tailwind CSS directives
├── index.html
├── package.json
└── tailwind.config.js
```

---

## 📄 License

This project is created for demonstration and client presentation purposes.
