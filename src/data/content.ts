export interface Resource {
  name: string;
  url: string;
}

export const RESOURCES: Record<string, Resource> = {
  evalGuide: { name: "Free Evaluation Guide", url: "https://shineadvocacy.myflodesk.com/evaluations" },
  cheatSheet: { name: "Free 504 vs IEP Cheat Sheet", url: "https://shineadvocacy.myflodesk.com/504vsiep" },
  efGuide: { name: "Free Executive Functions Guide", url: "https://shineadvocacy.myflodesk.com/executivefunctions" },
  ldChecklist: { name: "Free LD Checklist", url: "https://bit.ly/LD-Checklist" },
  freeConsult: { name: "Free Consultation", url: "https://shineadvocacy.com/contact/" },
  fbGroup: { name: "FB Community Group", url: "https://www.facebook.com/groups/shineu" },
  shineBright: { name: "Shine Bright Community", url: "https://shannon-wilke.mykajabi.com/offers/zJvmu45t/checkout" }
};

export interface Tip {
  id: string;
  global_number: number;
  section: string;
  tip_number: number;
  tip_text: string;
  scheduled_date: string;
  day_of_week: string;
  hook: string;
  caption: string;
  cta_base: string;
  resource_a: string;
  resource_b: string;
  hashtags: string[];
  recommended_format: string;
}

export const TIPS: Tip[] = [
  {
    id: "tip_01",
    global_number: 1,
    section: "Foundations of Advocacy",
    tip_number: 1,
    tip_text: "Their childhood isn't a race.",
    scheduled_date: "2026-03-09",
    day_of_week: "Monday",
    hook: "Stop comparing timelines. Your child is right on time for their life.",
    caption: "Your child does not have to hit every milestone by a certain age to matter. Their path looks different and that is not a problem to fix. When you stop racing against other kids' timelines, you start seeing your own child more clearly. Their wins, their growth, their breakthroughs. That is where the magic is. Not in the comparison.",
    cta_base: "Save this for the next time the comparison spiral starts.",
    resource_a: "fbGroup",
    resource_b: "freeConsult",
    hashtags: ["#specialeducation", "#iep", "#advocacy", "#parenting"],
    recommended_format: "2.1"
  },
  {
    id: "tip_02",
    global_number: 2,
    section: "Foundations of Advocacy",
    tip_number: 2,
    tip_text: "Their childhood isn't a competition.",
    scheduled_date: "2026-03-11",
    day_of_week: "Wednesday",
    hook: "Your neighbor's kid just got into the gifted program. Your kid just learned to tie their shoes. Both wins count.",
    caption: "Social media makes it feel like parenting is a sport with a scoreboard. Whose kid is reading the earliest, speaking the clearest, mainstreaming the fastest. That game is not real. And it is exhausting. Your child's wins are not smaller because they look different. A meltdown managed. A word spoken. A friendship made. These count. These matter.",
    cta_base: "Tag a parent who needs to hear this today.",
    resource_a: "fbGroup",
    resource_b: "freeConsult",
    hashtags: ["#neurodiversity", "#autismmom", "#adhdparenting", "#shineadvocacy"],
    recommended_format: "2.1"
  },
  {
    id: "tip_03",
    global_number: 3,
    section: "Foundations of Advocacy",
    tip_number: 3,
    tip_text: "Look inward, not out (focus on your family, not social media).",
    scheduled_date: "2026-03-13",
    day_of_week: "Friday",
    hook: "The highlight reel online has nothing to do with your real life.",
    caption: "Every time you scroll and see a perfect special needs family thriving, something in you deflates a little. You wonder if you are doing enough. Here is the truth: you are looking at a curated moment, not a full life. Your family's story is written in the everyday. Put the phone down. Look at your people. That is where your answers are.",
    cta_base: "Follow for real, honest parenting content that skips the highlight reel.",
    resource_a: "fbGroup",
    resource_b: "freeConsult",
    hashtags: ["#specialneedsfamily", "#honestparenting", "#advocacy", "#shine"],
    recommended_format: "2.1"
  },
  {
    id: "tip_04",
    global_number: 4,
    section: "Foundations of Advocacy",
    tip_number: 4,
    tip_text: "Go with your gut, make a written plan.",
    scheduled_date: "2026-03-18",
    day_of_week: "Wednesday",
    hook: "You know your child better than any expert in that room. Trust that.",
    caption: "Parent instinct is a real thing. When something feels off about your child's IEP, their placement, their progress, that feeling is data. The problem is feelings do not hold weight in an IEP meeting. Written plans do. Write it down. Your concerns. Your goals. Your observations at home. Then bring that paper into the room with you.",
    cta_base: "Need help putting your thoughts into a plan? Book a free consultation.",
    resource_a: "freeConsult",
    resource_b: "cheatSheet",
    hashtags: ["#iepmeeting", "#advocacytips", "#specialeducationrights", "#parentgut"],
    recommended_format: "2.3"
  },
  {
    id: "tip_05",
    global_number: 5,
    section: "Foundations of Advocacy",
    tip_number: 5,
    tip_text: "Not always a superpower and that's ok (allow yourself the hard days).",
    scheduled_date: "2026-03-20",
    day_of_week: "Friday",
    hook: "Can we stop calling ADHD and Autism a superpower for just one second?",
    caption: "Some days it absolutely is. The creativity, the focus, the way your child sees the world. And some days it is just hard. The meltdowns. The school calls. The exhaustion that lives in your bones. Both are true. You do not have to spin every hard day into a silver lining. Allow yourself the grief. Allow the frustration. Feel it, then come back.",
    cta_base: "Save this for a hard day. You are allowed to have them.",
    resource_a: "fbGroup",
    resource_b: "freeConsult",
    hashtags: ["#adhd", "#autism", "#specialneedsreality", "#parentingishard"],
    recommended_format: "2.3"
  }
  // ... more tips would be added here in a real scenario, but I'll start with these 5 for the prototype
];

export interface CarouselSlide {
  number: number;
  headline: string;
  body: string;
  format: string;
}

export interface Carousel {
  id: string;
  scheduled_date: string;
  title: string;
  seo_query: string;
  seo_keywords: string[];
  persona: string;
  cta_resource: string;
  slides: CarouselSlide[];
}

export const CAROUSELS: Carousel[] = [
  {
    id: "carousel_01",
    scheduled_date: "2026-03-17",
    title: "What Is an IEP? Everything Parents Need to Know",
    seo_query: "what is an iep",
    seo_keywords: ["individualized education program", "iep for beginners", "special education"],
    persona: "Rebecca / Hope",
    cta_resource: "evalGuide",
    slides: [
      { number: 1, headline: "What is an IEP?", body: "A legal document outlining specialized instruction, services, and accommodations your child receives at school. Governed by IDEA.", format: "2.2" },
      { number: 2, headline: "Who qualifies?", body: "Your child must have a disability that impacts their ability to access and progress in the general education curriculum. 13 categories under IDEA.", format: "2.1" },
      { number: 3, headline: "What does an IEP include?", body: "Present levels of performance, annual goals, special education services, accommodations and modifications, related services, and transition planning.", format: "2.1" },
      { number: 4, headline: "Who is on the IEP team?", body: "Parents, general ed teacher, special ed teacher, school administrator, any specialist involved. YOU are an equal member of this team.", format: "2.1" },
      { number: 5, headline: "How do I request an evaluation?", body: "Submit a written request to the school's principal or special education coordinator. School has 15 school days to respond, 60 days to complete evaluation.", format: "2.1" },
      { number: 6, headline: "What if I disagree with the IEP?", body: "You have the right to request changes, seek an IEE at school's expense, request mediation, or file a complaint. You do not have to sign an IEP you disagree with.", format: "2.1" },
      { number: 7, headline: "You have rights. Use them.", body: "IDEA protects your child's right to a Free Appropriate Public Education (FAPE) in the least restrictive environment. Know these rights. Document everything.", format: "2.2" }
    ]
  }
];

export interface QA {
  id: string;
  scheduled_date: string;
  title: string;
  persona: string;
  engagement_hook: string;
  opening: string;
  question: string;
  prompts: string[];
  closing: string;
  recommended_format: string;
  cta_fb: string;
  cta_ig: string;
  hashtags: string[];
}

export const QAS: QA[] = [
  {
    id: "qa_01",
    scheduled_date: "2026-03-19",
    title: "What Was the Hardest Part of Getting Your Child's First IEP?",
    persona: "Hope / Rebecca",
    engagement_hook: "Getting a child's first IEP is a marathon, not a sprint.",
    opening: "And for most parents, there is one part that nearly broke them. Was it the school telling you to 'wait and see'? The evaluation that took forever? The meeting where you felt like the only one who did not speak the language? Whatever it was, you are not alone.",
    question: "What was the hardest part of getting your child's first IEP or 504?",
    prompts: ["Drop your experience in the comments.", "Share what you wish someone had told you.", "Reply to someone who is going through it right now."],
    closing: "We're in this together.",
    recommended_format: "2.1",
    cta_fb: "Join our FB community for support: https://www.facebook.com/groups/shineu",
    cta_ig: "Link in bio for our free community.",
    hashtags: ["#iep", "#advocacy", "#specialneeds", "#parentingcommunity"],
  }
];

export const CONTENT_DATA = {
  tips: TIPS,
  carousels: CAROUSELS,
  qas: QAS,
  resources: RESOURCES
};
