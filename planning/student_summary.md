# Student Summary Design - Product Requirements Document

## Overview

The Student Summary is a post-game/quiz experience screen that displays a student's performance results after completing a quiz or game session in Wayground. It serves as both a celebratory moment and an informative recap, designed to motivate continued engagement while providing actionable feedback.

---

## Goals & Objectives

### Primary Goals
1. **Celebrate Achievement** - Provide positive reinforcement through visual celebration of performance
2. **Inform & Educate** - Display comprehensive performance statistics in an easily digestible format
3. **Drive Re-engagement** - Encourage students to play again or explore new quizzes
4. **Showcase Rewards** - Highlight coins earned and promote the shop/customization ecosystem

### Success Metrics
- Time spent on summary screen
- Click-through rate to "Play Again" or "Find New Quiz"
- Shop visit rate from summary screen
- Question review engagement rate

---

## Target Audience

- **Primary**: Students (K-12) who have just completed a quiz/game
- **Secondary**: Students reviewing their past performance

---

## Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#8B1538` | Primary dark maroon |
| `--color-bg-dark` | `#1A0812` | Page background |
| `--color-accent-gold` | `#FFB800` | Coins, rewards |
| `--color-accent-pink` | `#FC349F` | Primary CTAs |
| `--color-success` | `#00c985` | Correct answers |
| `--color-error` | `#ef3c69` | Incorrect answers |
| `--color-warning` | `#efa929` | Partial/ungraded |

### Typography
- **Font Family**: Quicksand
- **Title**: 24px, Bold, White
- **Section Headers**: 13px, Semibold, Uppercase, 50% white
- **Stats Values**: 18-28px, Bold, White
- **Body Text**: 13-15px, Medium, 85% white

### Spacing & Layout
- Page padding: 16px
- Card border-radius: 12-16px
- Gap between sections: 16px
- Card padding: 16-20px

---

## Layout Variants

### Layout 1: Classic Game Summary (3-Column)

```
┌──────────────────────────────────────────────────────────────┐
│ [HUD] ✕ 📌 │ ⚙️ 💬               🏆 1st    ⛶ │
├────┬─────────────────────────────────────┬───────────────────┤
│    │                                     │                   │
│ 🔄 │         SUMMARY • 👥 Live           │   [QBIT AVATAR]   │
│    │                                     │                   │
│ ── │    "Kudos, keep up the motivation!" │   Great job, Aman!│
│    │                                     │                   │
│ 🤨 │  ┌─────────────────────────────┐    │   🪙 560 coins    │
│ 🧠 │  │ Accuracy     [████████░] 90%│    │   +60 earned!     │
│ 💪 │  │ Rank: 1/4  Score: 3360  +60 │    │                   │
│ 👻 │  └─────────────────────────────┘    │   [Shop] [Friends]│
│ 🎮 │                                     │   ─────────────── │
│ 😭 │  ┌─ Performance Stats ──────────┐   │   What's New      │
│    │  │ 5 Correct │ 2 Wrong │ 1 Ungr │   │   • Join forum    │
│    │  │ 17.5s/q   │ 5 Streak│ 2 Skip │   │   • Reattempt quiz│
│    │  └─────────────────────────────┘    │                   │
│    │                                     │                   │
│    │  ┌─ Review Questions ───────────┐   │                   │
│    │  │ 1. Who is the President...   │   │                   │
│    │  │ 2. What is the capital...    │   │                   │
│    │  │ 3. Which planet is...        │   │                   │
│    │  └─────────────────────────────┘    │                   │
│    │                                     │                   │
│    │  [  Play Again  ] [ Find New Quiz ] │                   │
│    │                                     │                   │
└────┴─────────────────────────────────────┴───────────────────┘
```

#### Components
1. **HUD (Header)** - Navigation controls, rank badge, fullscreen toggle
2. **Reaction Rail** - Left-side emoji reactions for social engagement
3. **Main Content Area** - Stats, performance, questions review
4. **Context Panel** - Qbit avatar, coins, actions, announcements

### Layout 2: Hero-Centered Summary (Compact)

```
┌──────────────────────────────────────────────────────────────┐
│ [HUD]                                                        │
├────┬─────────────────────────────────────────────────────────┤
│    │  ┌─────────────────────────┬───────────────────────────┐│
│ 🔄 │  │    GAME SUMMARY         │      NEW DROP BANNER      ││
│ ── │  │                         │                           ││
│ 🤨 │  │ 1/4   3360   90%       │   [Stranger Qbits]        ││
│ 🧠 │  │ Rank  Score  Accuracy   │   Limited Edition         ││
│ 💪 │  │ 5 correct • 2 wrong    │                           ││
│ 👻 │  │                         │                           ││
│ 🎮 │  │ [Play Again][Find Quiz] │                           ││
│ 😭 │  │                         │                           ││
│    │  │ [QBIT] 🪙560 +60 [Shop]│                           ││
│    │  └─────────────────────────┴───────────────────────────┘│
│    │                                                         │
│    │  ┌─ Review Questions ───────────────────────────┐ ┌───┐│
│    │  │ 1. Who is... ✓  A B C D                      │ │Wha││
│    │  │ 2. What is... ✗  A B C D                     │ │New││
│    │  │ 3. Which...   ✓  A B C D                     │ │   ││
│    │  │ ...                                          │ │   ││
│    │  └──────────────────────────────────────────────┘ └───┘│
└────┴─────────────────────────────────────────────────────────┘
```

#### Key Differences
- Horizontal hero section with stats + Qbit side-by-side
- Prominent promotional banner area
- Questions displayed with inline options
- Compact sidebar for announcements

---

## Component Specifications

### 1. HUD (Header Bar)

**Purpose**: Persistent navigation and status display

| Element | Description |
|---------|-------------|
| Close Button (✕) | Returns to layout selector |
| Pin Button (📌) | Pins summary for reference |
| Settings (⚙️) | Opens settings modal |
| Chat (💬) | Opens chat/discussion |
| Rank Badge | Shows current rank with gold styling |
| Fullscreen (⛶) | Toggle fullscreen mode |

**Styling**:
- Height: 64px
- Background: Gradient with blur (glassmorphism)
- Border-bottom: 1px solid rgba(255,255,255,0.06)

### 2. Reaction Rail

**Purpose**: Enable social expression and engagement

**Elements**:
- Once More button (🔄) - Request to replay
- Divider
- Reaction stickers: SUS 🤨, Big Brain 🧠, OP 💪, Imposter 👻, GG 🎮, Loser 😭

**Behavior**:
- Hover: Scale 1.1-1.15
- Click: Animation burst, reaction sent

**Styling**:
- Width: 64px
- Background: rgba(9,9,9,0.4)
- Sticker size: 40x40px

### 3. Stats Zone

**Purpose**: Display core performance metrics

#### Accuracy Bar
- Visual progress bar showing correct vs incorrect ratio
- Percentage badge on right side
- Green (#00c985) for correct, Red remaining for incorrect

#### Stat Cards (3-column grid)
| Stat | Icon | Color |
|------|------|-------|
| Rank | 🏅 | Purple gradient |
| Score | ⭐ | Green gradient |
| Coins | 💰 | Gold gradient |

### 4. Performance Stats Grid

**Purpose**: Detailed breakdown of quiz performance

| Metric | Icon | Description |
|--------|------|-------------|
| Correct | ✓ | Number of correct answers |
| Incorrect | ✗ | Number of wrong answers |
| Ungraded | ◐ | Pending manual grading |
| Time/Question | ⏱ | Average response time |
| Streak | 🔥 | Longest correct streak |
| Unattempted | ⊖ | Skipped questions |

**Layout**: 2 rows × 3 columns grid

### 5. Review Questions Section

**Purpose**: Allow students to review their answers

**Question Card States**:
| State | Left Border Color | Indicator |
|-------|-------------------|-----------|
| Correct | Green (#00c985) | ✓ |
| Incorrect | Red (#ef3c69) | ✗ |
| Partial | Yellow (#efa929) | ~ |

**Question Card Contents**:
- Question number and text
- Options displayed in 2-column grid
- Visual indicators for correct/user answers

**Interactions**:
- Hover: Slight lift (translateY -2px)
- Click: Expands to show detailed explanation (future)

### 6. Qbit Avatar Zone

**Purpose**: Personalization and emotional connection

**Elements**:
- Avatar image with glow effect
- Greeting message ("Great job, {name}!")
- Coins display pill
- Coins earned badge

**Animations**:
- Avatar glow: Radial gradient pulse
- Coins badge: Spring animation on mount

### 7. Action Buttons

**Primary CTA**: "Play Again"
- Gradient background: #FC349F → #A91A8F
- Box shadow glow
- Height: 52px

**Secondary CTA**: "Find New Quiz"
- Transparent with border
- White text
- Height: 52px

### 8. Announcements Zone

**Purpose**: Promote engagement and new features

**Card Structure**:
- Icon (emoji)
- Text content
- Action link
- Dismiss button (appears on hover)

---

## Data Model

```typescript
interface GameSummary {
  gameType: 'Live' | 'Solo' | 'Challenge';
  motivationalMessage: string;
  studentName: string;
  totalCoins: number;
  coinsEarned: number;
  accuracy: number; // 0-100
  rank: string; // e.g., "1/4"
  score: number;
  stats: {
    correct: number;
    incorrect: number;
    ungraded: number;
    timePerQuestion: string;
    streak: number;
    unattempted: number;
  };
  questions: Question[];
  announcements: Announcement[];
}

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  userAnswer: number;
  status: 'correct' | 'incorrect' | 'partial';
}

interface Announcement {
  id: number;
  icon: string;
  text: string;
  action: string;
  link?: string;
}
```

---

## Animations & Motion

### Entry Animations (Framer Motion)
1. **Stage Container**: Fade in + slide up (y: 20 → 0)
2. **Reaction Rail**: Slide in from left (x: -20 → 0)
3. **Context Panel**: Slide in from right (x: 20 → 0)
4. **Stats Cards**: Staggered fade-in (delay: 0.1s each)
5. **Question Cards**: Staggered slide-in (delay: 0.1s each)
6. **Accuracy Bar**: Width animation from 0% to actual value

### Micro-interactions
- Button hover: Scale 1.02, translateY -2px
- Card hover: Border color lighten, subtle lift
- Reaction click: Bounce animation
- Coins earned: Spring bounce on mount

---

## Responsive Behavior

### Desktop (>1200px)
- Full 3-column layout
- Context panel: 340px width
- All sections visible

### Tablet (900-1200px)
- Context panel: 280-300px
- Reduced avatar size
- Tighter spacing

### Mobile (<900px)
- Stack layout vertically
- Reaction rail becomes horizontal at top
- Context panel moves below main content
- Qbit zone becomes horizontal row
- Questions list full width

### Small Mobile (<600px)
- Reduced stat card sizes
- Single-column options in questions
- Stacked CTA buttons
- Simplified performance grid

---

## Accessibility

### Keyboard Navigation
- Tab through all interactive elements
- Enter/Space to activate buttons and reactions
- Escape to close modals

### Screen Reader Support
- ARIA labels on all buttons
- Meaningful alt text for avatar
- Progress bar announces percentage
- Question status announced

### Color Contrast
- All text meets WCAG AA standards
- Status colors have additional indicators (icons)

---

## Future Enhancements

### Phase 2
- [ ] Question deep-dive with explanations
- [ ] Share results to social media
- [ ] Compare with friends leaderboard
- [ ] Achievement unlocks display

### Phase 3
- [ ] Personalized improvement suggestions
- [ ] Study resources for incorrect topics
- [ ] Parent/teacher sharing options
- [ ] Performance trend charts

---

## Technical Notes

### Dependencies
- React 18+
- Framer Motion for animations
- React Router for navigation
- CSS Modules for styling

### Performance Considerations
- Lazy load question cards if > 20 questions
- Optimize avatar image loading
- Debounce reaction clicks
- Cache summary data for quick revisits

### File Structure
```
src/pages/
├── StudentSummaryLayouts/
│   ├── StudentSummaryLayouts.tsx
│   ├── StudentSummaryLayouts.module.css
│   └── index.ts
├── SummaryLayout1/
│   ├── SummaryLayout1.tsx
│   ├── SummaryLayout1.module.css
│   └── index.ts
└── SummaryLayout2/
    ├── SummaryLayout2.tsx
    ├── SummaryLayout2.module.css
    └── index.ts
```

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-20 | AI Assistant | Initial PRD creation |

---

## Appendix

### Design References
- Dark immersive theme matching Figma designs
- Quicksand typography for playful, kid-friendly feel
- Glassmorphism effects for depth
- Maroon/magenta color scheme for brand consistency

### Related Documents
- `variables.css` - Design tokens
- Figma designs - UI mockups
- Component library documentation

