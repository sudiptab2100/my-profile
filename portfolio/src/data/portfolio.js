// Central content for the terminal portfolio.
// Derived from Sudipta Basak's resume (latex-resume/resume-twocolumn.tex).

export const profile = {
  name: "Sudipta Basak",
  first: "Sudipta",
  last: "Basak",
  handle: "sudiptab2100",
  role: "Software Engineer",
  tagline: "Backend • Blockchain • Distributed Systems",
  pitch:
    "Pragmatic, delivery-oriented engineer building reliable backend, blockchain and distributed systems.",
  location: "Gurgaon, India",
  email: "sudiptab2100@gmail.com",
  phone: "+91 86175 98493",
  resume: `${import.meta.env.BASE_URL}resume-twocolumn.pdf`,
  avatar: `${import.meta.env.BASE_URL}profile.webp`,
  socials: {
    github: "https://github.com/sudiptab2100",
    linkedin: "https://linkedin.com/in/sudiptab2100",
    email: "mailto:sudiptab2100@gmail.com",
  },
};

export const stats = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "", label: "Companies & Internships" },
  { value: 8, suffix: "+", label: "Projects Built" },
  { value: 2, suffix: "", label: "Research Publications" },
];

export const about = [
  "Software Engineer at American Express, working across backend systems,",
  "distributed data pipelines and modern JVM stacks.",
  "",
  "Blockchain & zero-knowledge enthusiast — I've researched Data Availability",
  "with the Ethereum Foundation, Status and Nethermind, and shipped ZK,",
  "decentralised and crypto-tooling side projects.",
  "",
  "M.Tech in CSE from IIT Jammu (minor in Information Security). I like",
  "cryptography, systems, and building things that shouldn't be possible.",
];

export const skills = {
  Languages: ["C/C++", "Java", "Python", "Kotlin", "JavaScript", "TypeScript", "Rust", "Solidity"],
  "Backend & Data": ["Spring Boot", "Micronaut", "REST APIs", "GraphQL", "Kafka", "Redis", "Spring Batch", "PostgreSQL", "Couchbase", "DB2"],
  "Blockchain & ZK": ["Solidity", "Foundry", "Truffle/Hardhat", "Circom & SnarkJS", "ZoKrates", "Waku", "IPFS", "Web3.py"],
  "Tools & Platforms": ["Git", "Docker", "VSCode", "IntelliJ IDEA", "PyCharm", "GitHub Copilot", "Gen AI", "Linux", "macOS", "Windows"],
  Foundations: ["Data Structures & Algorithms", "OOP", "Cryptography", "Problem Solving"],
};

export const experience = [
  {
    company: "American Express",
    role: "Software Developer I",
    location: "Gurgaon, India",
    period: "Aug 2024 - Present",
    points: [
      "Migrated card privacy-preference data from legacy Mainframe/DB2 to a modern Couchbase, Java, and Spring Boot stack.",
      "Modernized internal Lookup Tables, transitioning from Mainframe/DB2 to Java and GraphQL-based services.",
      "Built data-processing workflows leveraging Redis, Kafka, Spring Batch, and PostgreSQL.",
      "Improved code quality and observability via structured logging of events and exceptions across applications.",
    ],
  },
  {
    company: "Nethermind",
    role: "Blockchain Developer & Researcher Intern",
    location: "London, UK (Remote)",
    period: "Jun 2024 - Aug 2024",
    points: [
      "Co-developed FRIDA, a FRI-commitment-scheme-based Data Availability (DA) layer for blockchains.",
      "Built a Rust CLI to drive the FRIDA proof-of-concept and authored Rust test suites validating it.",
    ],
  },
  {
    company: "Status",
    role: "R&D Engineer Intern",
    location: "Zug, Switzerland (Remote)",
    period: "Feb 2024 - Aug 2024",
    points: [
      "Contributed to a Data Availability Sampling (DAS) research project in collaboration with the Ethereum Foundation.",
      "Developed a Python simulator modeling large-scale distributed Ethereum nodes to analyze data sharding.",
    ],
  },
  {
    company: "Pegasystems",
    role: "Software Engineer Intern",
    location: "Hyderabad, India",
    period: "Jun 2023 - Dec 2023",
    points: [
      "Integrated Meta's open-source LLaMA 2 LLM with Pega Launchpad to assist users in authoring expressions.",
      "Curated an expression-examples dataset and applied vector embeddings to fine-tune the LLaMA 2 13B model, improving domain-specific accuracy.",
      "Exposed the model through a Kotlin (Micronaut) REST API and containerized the application with Docker.",
    ],
  },
];

export const projects = [
  {
    name: "WhisUp3 — Decentralised Anonymous Feedback",
    stack: ["ReactJS", "TypeScript", "Waku", "MetaMask"],
    period: "Jan 2024 - Feb 2024",
    url: "https://github.com/sudiptab2100/WhisUp3",
    points: [
      "Decentralised anonymous feedback platform built on the Waku communication protocol.",
      "Anyone can receive encrypted, anonymous messages on their public Ethereum address.",
      "Secured with public-key encryption and MetaMask-based private-key decryption.",
    ],
  },
  {
    name: "ZK Authentication",
    stack: ["Solidity", "Groth16", "ZoKrates"],
    period: "Dec 2023 - Feb 2024",
    url: "https://github.com/sudiptab2100/zkSNARK-Auth-JS",
    points: [
      "zkSNARK (Groth16) on-chain authentication for EVM smart contracts.",
      "Used the ZoKrates toolbox and zokrates.js for proof generation and verification.",
      "Authenticated users via zero-knowledge proof of knowledge of a hash preimage.",
    ],
  },
  {
    name: "Wild-Storage",
    stack: ["Python", "C++", "Docker"],
    period: "Feb 2023 - Jan 2024",
    url: "https://github.com/sudiptab2100/Wild-Storage",
    points: [
      "Uses YouTube as unlimited file storage by encoding file binaries as black/white pixels and decoding videos to restore files.",
      "Encoding scheme resilient to YouTube's video compression to prevent data loss.",
      "Ported hot paths to C++ (wrapped in Python) for a 3x speedup; shipped a CLI and Dockerfile.",
    ],
  },
  {
    name: "PancakeSwap Sniping Bot",
    stack: ["Python", "Web3.py", "Telethon"],
    period: "2021",
    url: "https://github.com/sudiptab2100/PancakeSwapSnippingBot",
    points: [
      "Automates cryptocurrency trading on EVM-based AMMs, sourcing Telegram signals via Telethon and executing on-chain trades through Web3.py.",
    ],
  },
];

export const education = [
  {
    school: "IIT Jammu",
    degree: "M.Tech, Computer Science & Engineering",
    extra: "Minor: Information Security",
    score: "CGPA 8.39",
    year: "2024",
  },
  {
    school: "UEM, Kolkata",
    degree: "B.Tech, Computer Science & Engineering",
    extra: "",
    score: "CGPA 8.50",
    year: "2021",
  },
];

export const achievements = [
  {
    title: "Aptos Winter School & Hackathon",
    detail: "Built CrysPay (crypto transfers via phone numbers); 3rd of 5 finalists; $5,000 grant from the Aptos Foundation.",
  },
  {
    title: "Amex GrowthHack'25",
    detail: "Top-5 finalist team out of 500+ worldwide.",
  },
  {
    title: "Freelance Blockchain Developer",
    detail: "Clients across India, the US, the UK, and Dubai.",
  },
];

export const publications = [
  {
    title: "Privacy-Preserving Location-Based Services: A DQN Algorithmic Perspective",
    venue: "Springer",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-57916-5_33",
  },
  {
    title: "On the Design of Ethereum Data Availability Sampling: A Comprehensive Simulation Study",
    venue: "arXiv",
    url: "https://arxiv.org/pdf/2407.18085",
  },
];
