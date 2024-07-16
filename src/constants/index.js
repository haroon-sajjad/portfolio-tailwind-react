import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  skillWordPress,
  skillLaravel,
  skillReactJS,
  skillTailwind,
  TheWhyBuilder,
  UrbanEnigma,
  StephanieWolfPhotography,
  GetLinkked,
  IndonesiaMontessori,
  AliSiam,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const skills = [
  {
    thumbnail: skillWordPress,
    bigSkill: skillWordPress,
  },
  {
    thumbnail: skillLaravel,
    bigSkill: skillLaravel,
  },
  {
    thumbnail: skillReactJS,
    bigSkill: skillReactJS,
  },
  {
    thumbnail: skillTailwind,
    bigSkill: skillTailwind,
  },
];

export const statistics = [
  { value: "200+", label: "Projects" },
  { value: "4.6+", label: "Rating" },
  { value: "50+", label: "Clients" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const testimonials = [
  {
    imgURL: TheWhyBuilder,
    customerName: "Mike Lord",
    companyName: "The Why Builder",
    rating: 5.0,
    feedback:
      "Straight professional! Able to gather requirements and gave first preview with almost 100% accuracy. Fast and accepting of changes and amazing to work with. Great communication skills!",
  },

  {
    imgURL: UrbanEnigma,
    customerName: "Raymond Stencils",
    companyName: "Urban Enigma",
    rating: 5.0,
    feedback:
      "10 out of 10 stars, has a great wealth of knowledge when it comes to both front end and backend applications. Approach is logical and thorough. Understand what I am going for and he shares ideas for implementation. Came up with solutions I did not think of and also provided a great and very custom website site functionality where creativity and coding meet in the middle with awesome results.",
  },

  {
    imgURL: StephanieWolfPhotography,
    customerName: "Stephanie Wolf",
    companyName: "Stephanie Wolf Photography",
    rating: 5.0,
    feedback:
      "Did an amazing job on my website, I have been recommending him to everyone I know in need of work! I went through four different developers, it was getting very frustrating. I asked a lot while building my website from scratch and he was able to do exactly as I wanted in a very timely manner. Prices are also very fair. I will absolutely be using in the future. Thanks for everything!",
  },

  {
    imgURL: GetLinkked,
    customerName: "Shazaf Moonis",
    companyName: "Get Linkked",
    rating: 5.0,
    feedback:
      "It was really great working. Extremely patient and helpful and does the work diligently and efficiently. Our contract took much longer than expected, the delay was on our end, but he was very responsive every time we reached out. He conducted all work professionally and honestly, which is a big asset when working remotely with people. I wish him the best of luck and much success as he well deserves. Thank you!",
  },

  {
    imgURL: IndonesiaMontessori,
    customerName: "Andy Kusumo",
    companyName: "Indonesia Montessori",
    rating: 5.0,
    feedback:
      "Always a pleasure to work with. Highly skilled, very patient, and timely. I would love to work again for future projects.",
  },

  {
    imgURL: AliSiam,
    customerName: "Ali Siam",
    companyName: "Ali Siam",
    rating: 5.0,
    feedback:
      "Excellent, the communication between us was the most important quality I was looking for. Was very kind and helpful with any issues that came up. My WordPress website was up and running in less than one hour. Also taught me how to use the interface and I will continue to work with him in near future. Best of luck!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
