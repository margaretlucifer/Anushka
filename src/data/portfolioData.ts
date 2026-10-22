export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  focusAreas: string[];
  deliverables: string[];
  image: string;
  altText: string;
  quote?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: string;
  summary: string;
  responsibilities: string[];
  skillsEmphasized: string[];
  image?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  field: string;
  note?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "fitness" | "yoga" | "dance" | "zumba";
  categoryLabel: string;
  image: string;
  aspectRatio: "tall" | "wide" | "square";
  description: string;
}

export const PERSONAL_DETAILS = {
  name: "Anushka Jadhav",
  shortName: "Anushka",
  headline: "Strength in every move.",
  title: "Fitness Coach · Dance Instructor · Certified Zumba & Yoga Teacher",
  roles: [
    "Physical Fitness Coach",
    "Dance Instructor",
    "Certified Zumba Teacher",
    "Certified Yoga Teacher",
  ],
  bio: "Helping individuals build strength, improve movement, and discover confidence through fitness, dance, Zumba, and yoga.",
  extendedBio:
    "Anushka Jadhav is an experienced movement professional dedicated to transformative physical discipline. Working both as an institutional Ground Coach and independent instructor, she brings rigorous athletic conditioning together with the expressive freedom of dance and the centering grounding of yoga. Her coaching philosophy revolves around longevity, mindful alignment, and building resilient bodies and empowered minds.",
  phone: "+91 7039257669",
  email: "anushkajadhav7669@gmail.com",
  languages: ["English", "Marathi", "Hindi"],
  interests: ["Dance", "Creative Choreography", "Group Dance Performances", "Sports", "Gaming"],
  location: "Mumbai, India",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "sports-ground-training",
    number: "01",
    title: "Sports & Ground Training",
    subtitle: "Athletic Stamina & Field Conditioning",
    shortDescription:
      "Structured ground training, endurance drills, and athletic agility programs engineered for physical conditioning and sports preparedness.",
    fullDescription:
      "Drawing from extensive academy coaching experience at Shivratna Career Academy, ground training builds fundamental athletic capacity. Trainees develop anaerobic stamina, sprint mechanics, multi-directional agility, and physical grit through disciplined, structured outdoor and field workouts.",
    focusAreas: [
      "Stamina & cardiovascular endurance conditioning",
      "Agility ladders, sprint intervals & footwork mechanics",
      "Core stability & athletic ground movement",
      "Injury prevention and biomechanical form alignment",
    ],
    deliverables: [
      "Field-tested endurance routines",
      "Agility & speed drills",
      "Group athletic sessions",
      "Cadence and pacing guidance",
    ],
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    altText: "Athlete doing outdoor ground conditioning and athletic training",
    quote: "True athletic foundation is built from the ground up — with discipline, form, and persistence.",
  },
  {
    id: "personal-fitness-coaching",
    number: "02",
    title: "Personal Fitness Coaching",
    subtitle: "Individualized Guidance & Sustainable Strength",
    shortDescription:
      "Tailored fitness coaching focused on individualized strength building, posture correction, functional movement, and sustainable healthy habits.",
    fullDescription:
      "Every body moves differently. Anushka's personal coaching provides one-on-one attention that prioritizes posture, natural joint mobility, progressive overload, and lasting lifestyle vitality without crash methods or rigid dogmatism.",
    focusAreas: [
      "Targeted strength & full-body conditioning",
      "Posture assessment & corrective movement patterns",
      "Functional mobility and joint resilience",
      "Goal-oriented progress tracking & sustainable routine setting",
    ],
    deliverables: [
      "Personalized movement blueprints",
      "Form audits & continuous feedback",
      "Functional strength coaching",
      "Holistic wellness balance",
    ],
    image:
      "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1200&auto=format&fit=crop",
    altText: "Focused personal fitness coaching session with thoughtful alignment",
    quote: "Confidence isn't given — it is uncovered each time you challenge your limits with intention.",
  },
  {
    id: "zumba-yoga-instruction",
    number: "03",
    title: "Zumba & Yoga Instruction",
    subtitle: "Cardiovascular Energy Meets Mindful Stillness",
    shortDescription:
      "Certified Zumba sessions delivering joyful calorie-burning cardio, complemented by grounding yoga flows for flexibility, breath, and stress relief.",
    fullDescription:
      "A dual practice that honors both exhilarating celebration and quiet restoration. High-energy Zumba routines bring infectious rhythm and heart-pumping aerobic conditioning, while certified yoga classes restore nervous system equilibrium, lengthen tight muscles, and deepen conscious breathing.",
    focusAreas: [
      "High-energy Latin and world-beat cardiovascular fitness",
      "Certified Vinyasa and Hatha yoga postures & alignment",
      "Pranayama (breathwork) & stress mitigation techniques",
      "Flexibility, joint decompression, and inner stillness",
    ],
    deliverables: [
      "Vibrant group Zumba classes",
      "Restorative & strengthening yoga flows",
      "Breathwork integration",
      "Full-spectrum mind-body balance",
    ],
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    altText: "Peaceful yoga practitioner finding balance in warm natural light",
    quote: "Movement should make your heart celebrate, and breath should bring your mind home.",
  },
  {
    id: "dance-choreography",
    number: "04",
    title: "Dance & Choreography",
    subtitle: "Expressive Rhythm & Stage Performance",
    shortDescription:
      "Original choreography, musicality training, and expressive movement instruction for diverse student groups and stage showcases.",
    fullDescription:
      "Dance is the joyful intersection of athletic control and emotional release. Anushka choreographs and teaches dynamic routines spanning contemporary, commercial, and fusion styles, guiding students of all experience levels to dance with poise, stage presence, and organic musicality.",
    focusAreas: [
      "Rhythm fundamentals & musical phrase breakdown",
      "Original stage and performance choreography",
      "Group synchronization, spacing & ensemble dynamics",
      "Expressive confidence and body language artistry",
    ],
    deliverables: [
      "Custom routine choreography",
      "Stage performance readiness",
      "Group workshop facilitation",
      "Technique and style breakdowns",
    ],
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop",
    altText: "Graceful contemporary dancer expressing emotion through fluid movement",
    quote: "When technique becomes second nature, the movement becomes pure freedom.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "shivratna",
    role: "Ground Coach",
    organization: "Shivratna Career Academy",
    type: "Academy Faculty",
    summary:
      "Leads comprehensive physical conditioning and field discipline for academy students preparing for rigorous athletic and physical standards.",
    responsibilities: [
      "Leads daily physical fitness, ground training, and endurance conditioning sessions for academy students.",
      "Develops customized agility and stamina training programs designed to enhance cardiovascular threshold.",
      "Guides and motivates trainees through disciplined fitness routines and rigorous physical standards.",
      "Emphasizes proper form, biomechanical technique, and active injury prevention during heavy athletic workloads.",
    ],
    skillsEmphasized: [
      "Ground Conditioning",
      "Agility Drills",
      "Endurance Training",
      "Group Leadership",
      "Form Correction",
      "Injury Prevention",
    ],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "independent-practice",
    role: "Personal Fitness Coach & Dance Instructor",
    organization: "Independent Practice",
    type: "Private Coaching & Group Classes",
    summary:
      "Delivers personalized fitness coaching, certified group Zumba & yoga classes, and tailored dance choreography across diverse student communities.",
    responsibilities: [
      "Provides individualized sports coaching and personalized fitness guidance tailored to each participant's starting point.",
      "Conducts high-energy Zumba sessions and restorative, alignment-focused yoga practices.",
      "Supports cardiovascular fitness, muscle lengthening, body awareness, and mental stress relief.",
      "Choreographs and teaches expressive dance movements, rhythmic timing, and stage performance skills.",
    ],
    skillsEmphasized: [
      "Personalized Coaching",
      "Certified Zumba",
      "Certified Yoga",
      "Dance Choreography",
      "Stress Relief",
      "Holistic Wellness",
    ],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=900&auto=format&fit=crop",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Arts (B.A.)",
    institution: "K. J. Somaiya College",
    field: "Political Science",
    note: "Comprehensive undergraduate foundation fostering critical perspective, human communication, and structural discipline.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "S. K. Somaiya College",
    field: "Higher Secondary Education",
    note: "Pre-university academic foundation.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Certified Zumba Teacher",
    description: "Specialized in rhythmic cardio choreography, interval training, and group fitness motivation.",
  },
  {
    title: "Certified Yoga Teacher",
    description: "Trained in classical yoga postures (asanas), breath control (pranayama), and restorative alignment.",
  },
  {
    title: "Physical Fitness & Ground Coach",
    description: "Expertise in athletic endurance, stamina programming, and ground fitness conditioning.",
  },
  {
    title: "Dance Instructor & Choreographer",
    description: "Versatile choreography, stage presence development, and movement aesthetics.",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Strength & Ground Conditioning",
    category: "fitness",
    categoryLabel: "Ground Training",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "tall",
    description: "High-intensity athletic stamina, agility drills, and field conditioning routines.",
  },
  {
    id: "g2",
    title: "Mindful Asana Balance",
    category: "yoga",
    categoryLabel: "Yoga",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "wide",
    description: "Restorative flow connecting conscious breath with deliberate physical poise.",
  },
  {
    id: "g3",
    title: "Rhythmic Energy & Zumba Cardio",
    category: "zumba",
    categoryLabel: "Zumba",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "square",
    description: "Heart-pumping group rhythm session fostering stamina, joy, and dynamic coordination.",
  },
  {
    id: "g4",
    title: "Fluid Dance Expression",
    category: "dance",
    categoryLabel: "Dance",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "tall",
    description: "Expressive choreographic sequences merging precision with artistic movement.",
  },
  {
    id: "g5",
    title: "Targeted Strength & Core",
    category: "fitness",
    categoryLabel: "Fitness",
    image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "wide",
    description: "Precision-focused personal guidance establishing sustainable strength habits.",
  },
  {
    id: "g6",
    title: "Sunrise Flexibility & Lengthening",
    category: "yoga",
    categoryLabel: "Yoga",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "tall",
    description: "Joint decompression, muscular lengthening, and centering meditation.",
  },
  {
    id: "g7",
    title: "Stage Movement & Ensemble Cadence",
    category: "dance",
    categoryLabel: "Dance",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "wide",
    description: "Choreographed spatial dynamics and stage poise for performance showcases.",
  },
  {
    id: "g8",
    title: "Agility & Athletic Discipline",
    category: "fitness",
    categoryLabel: "Ground Training",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "square",
    description: "Ground coaching routines structured for speed, explosive power, and discipline.",
  },
];
