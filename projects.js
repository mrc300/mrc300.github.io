const PROJECTS = [
  {
    title: "TV Broadcast Test-Card Detection Pipeline",
    tag: "Computer Vision / ML / Work Project",
    description: "Built a computer vision pipeline from scratch at the Royal Danish Library to detect test cards and extract timestamps from digitized VHS broadcast tapes. Processed 10,000+ video files, correctly identifying and cutting 13K programs out of 140K, reaching 96% accuracy after QA, used in production at scale.",
    stack: ["PyTorch", "YOLO11n", "EasyOCR", "OpenVINO", "Tesseract", "OpenCV"],
    github: null
  },

  {
    title: "Program Schedule Time Extraction",
    tag: "Computer Vision / ML / Work Project",
    description: "A separate digit-recognition model built at the Royal Danish Library to extract program schedule timestamps from a wallclock display in broadcast footage.",
    stack: ["PyTorch", "OpenCV"],
    github: null
  },

  {
    title: "Coastline Matching (Thesis)",
    tag: "Computer Vision / Deep Learning",
    description: "Master's thesis benchmark study on localizing aerial coastline imagery patches within a much larger reference map, comparing feature matching, spatial transformer, and dense-matching approaches. Best pipeline achieved 95% top-1 accuracy across 352 tiles on synthetic data.",
    stack: ["PyTorch", "LoFTR", "SuperPoint/SuperGlue", "RANSAC", "Python"],
    github: "https://github.com/mrc300/Coastline-Matching-Thesis"
  },

  {
    title: "Icebreak",
    tag: "Mobile / Social",
    description: "A prototype social networking app for connecting with people nearby, built on Expo/React Native.",
    stack: ["React Native", "Expo", "TypeScript"],
    github: "https://github.com/mrc300/Icebreak"
  },

  {
    title: "Survey Management System",
    tag: "Full-Stack / Software Architecture",
    description: "Software Engineering & Architecture course project (Master's, Jan–Jul 2025). A full survey platform built end-to-end, covering requirements elicitation, architecture design, implementation, and testing. Features such as survey creation and data export.",
    stack: ["Java", "Spring Boot", "React Native", "PostgreSQL", "Figma"],
    github: "https://github.com/abhirukth/SurveySite"
  },

  {
    title: "Audio Metadata Classifier",
    tag: "AI Service / Deep Learning",
    description: "A FastAPI service that transcribes audio, segments speech with voice activity detection, detects language, and extracts keywords for metadata enrichment. Containerized with GPU support for production use.",
    stack: ["FastAPI", "Whisper", "Silero VAD", "YAKE", "Docker", "Python"],
    github: "https://github.com/mrc300/AudioMetadataClassifier"
  },

  {
    title: "EyesFreeMusic",
    tag: "Mobile / Accessibility",
    description: "An accessible drum pad app for visually impaired users, with an audio-first interface, full screen reader support, and haptic feedback for touch response.",
    stack: ["React Native", "Expo", "TypeScript"],
    github: "https://github.com/mrc300/EyesFreeMusic"
  },

  {
    title: "Chess2",
    tag: "Game Development",
    description: "A chess project combining software and hardware components, built with a Unity-based engine and a companion physical interface.",
    stack: ["C++", "C#", "ShaderLab", "Unity"],
    github: "https://github.com/mrc300/Chess2"
  },
];