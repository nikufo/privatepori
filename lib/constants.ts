import {
  BookOpen,
  Calculator,
  Cpu,
  FlaskConical,
  Globe2,
  Languages,
  Leaf,
  Mic2,
  MoonStar,
  Palette,
  School,
  ScrollText,
  Sigma,
  Trophy,
  WalletCards
} from "lucide-react";

export const FEATURED_TEACHERS = [
  { id: 1, name: "Md. Rafiqul Islam", subjects: ["গণিত", "পদার্থ"], classes: "Class 6–HSC", location: "Dinajpur", rating: 4.9, reviews: 38, hireCount: 52, fee: 2500, verified: true, image: "/images/teacher-rafiqul.svg" },
  { id: 2, name: "Fatema Akter", subjects: ["ইংরেজি", "বাংলা"], classes: "Class 1–10", location: "Rangpur", rating: 4.8, reviews: 27, hireCount: 31, fee: 2000, verified: true, image: "/images/teacher-fatema.svg" },
  { id: 3, name: "Ariful Hasan", subjects: ["রসায়ন", "জীববিজ্ঞান"], classes: "Class 9–HSC", location: "Bogura", rating: 4.7, reviews: 19, hireCount: 24, fee: 3000, verified: true, image: "/images/teacher-ariful.svg" },
  { id: 4, name: "Nusrat Jahan", subjects: ["গণিত", "ICT"], classes: "Class 6–10", location: "Rajshahi", rating: 4.9, reviews: 44, hireCount: 61, fee: 2200, verified: true, image: "/images/teacher-nusrat.svg" },
  { id: 5, name: "Tanvir Ahmed", subjects: ["উচ্চতর গণিত", "পদার্থ"], classes: "HSC | Admission", location: "Dinajpur", rating: 5, reviews: 15, hireCount: 18, fee: 3500, verified: true, image: "/images/teacher-tanvir.svg" },
  { id: 6, name: "Sadia Islam", subjects: ["ইংরেজি"], classes: "Class 1–8", location: "Rangpur", rating: 4.8, reviews: 22, hireCount: 29, fee: 1800, verified: true, image: "/images/teacher-sadia.svg" }
] as const;

export const STATS = [
  { value: "৬৭,০০০+", label: "নিবন্ধিত শিক্ষক", numericValue: 67000, suffix: "+" },
  { value: "১৫,০০০+", label: "সন্তুষ্ট পরিবার", numericValue: 15000, suffix: "+" },
  { value: "৯৮%", label: "সন্তুষ্টির হার", numericValue: 98, suffix: "%" },
  { value: "৬৪", label: "জেলায় সেবা", numericValue: 64, suffix: "" }
] as const;

export const SUBJECTS = [
  { name: "গণিত", icon: Calculator },
  { name: "ইংরেজি", icon: Languages },
  { name: "পদার্থ", icon: Sigma },
  { name: "রসায়ন", icon: FlaskConical },
  { name: "জীববিজ্ঞান", icon: Leaf },
  { name: "বাংলা", icon: BookOpen },
  { name: "ICT", icon: Cpu },
  { name: "ইসলাম শিক্ষা", icon: MoonStar },
  { name: "আরবি", icon: Globe2 },
  { name: "অ্যাকাউন্টিং", icon: WalletCards },
  { name: "IELTS", icon: ScrollText },
  { name: "ভর্তি কোচিং", icon: School },
  { name: "সংগীত", icon: Mic2 },
  { name: "চিত্রকলা", icon: Palette },
  { name: "ক্যাডেট প্রস্তুতি", icon: Trophy }
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Find Tutor", href: "#featured-teachers" },
  { label: "Become a Tutor", href: "#cta" },
  { label: "How it Works", href: "#how-it-works" }
] as const;

export const HERO_STATS = [
  { value: "67,000+", label: "Registered Tutors", icon: "Users" },
  { value: "15,000+", label: "Happy Families", icon: "HeartHandshake" },
  { value: "64", label: "Districts Covered", icon: "MapPinned" }
] as const;

export const GUARDIAN_STEPS = [
  { number: "01", title: "Post your requirement", description: "Subject, class, location, budget দিয়ে আপনার প্রয়োজন জানান।", icon: "FileText" },
  { number: "02", title: "Browse matched teachers", description: "Rating, experience, fee অনুযায়ী teacher short-list করুন।", icon: "Search" },
  { number: "03", title: "Book a demo class", description: "প্রথম session demo হিসেবে trial নিন এবং fit দেখে নিন।", icon: "CalendarDays" },
  { number: "04", title: "Confirm & Pay", description: "Secure bKash বা Nagad payment দিয়ে teacher confirm করুন।", icon: "BadgeCheck" }
] as const;

export const TEACHER_STEPS = [
  { number: "01", title: "Create your profile", description: "Subjects, experience, photo আর preferred area যোগ করুন।", icon: "UserRound" },
  { number: "02", title: "Browse tuition jobs", description: "আপনার এলাকায় active tuition requirement গুলো দেখুন।", icon: "ClipboardList" },
  { number: "03", title: "Apply for tuitions", description: "এক click-এ application পাঠিয়ে guardian-এর সাথে connect হন।", icon: "Send" },
  { number: "04", title: "Get hired & earn", description: "Selected হলে direct payment নিয়ে confidently tutoring শুরু করুন।", icon: "Wallet" }
] as const;

export const TESTIMONIALS = [
  { quote: "আমার ছেলের গণিতে অনেক দুর্বলতা ছিল। TeachLink থেকে শিক্ষক নিয়ে মাত্র ২ মাসে অসাধারণ উন্নতি হয়েছে।", author: "Rina Begum, Dinajpur", detail: "Class 8 student's mother" },
  { quote: "যাচাইকৃত শিক্ষকের profile দেখে বিশ্বাস করে নিয়েছিলাম। Reviews সত্যিই সঠিক ছিল।", author: "Karim Hossain, Rangpur", detail: "HSC student's father" },
  { quote: "অনলাইনে সহজেই payment করা গেছে। কোনো ঝামেলা ছাড়াই শিক্ষক পেয়েছি।", author: "Tahmina Akter, Bogura", detail: "Class 5 student's mother" }
] as const;

export const SEARCH_SUBJECTS = ["Math", "English", "Physics", "Chemistry", "Biology", "Bangla", "ICT"] as const;
export const SEARCH_LEVELS = ["Class 1–5", "Class 6–10", "SSC", "HSC", "Degree", "Admission"] as const;
