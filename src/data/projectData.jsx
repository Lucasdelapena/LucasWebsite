

export const projects = [
  {
    title: "Bubble Boat",
    description: "Developed in Unity during the 2025 Global Game Jam (48 hours, theme: Bubble). Players pilot a ship and score points by firing propeller-made bubbles to hit as many sharks as possible.",
    tech: ["Unity", "C#"],
    links: { repo: "https://github.com/Lucasdelapena/BubbleBoat", demo: "https://miyuo.itch.io/bubble-boat" }
  },
  {
    title: "Micro Center Tracker (Chrome Extension)",
    description: "Scrapes product name, price, stock, SKU/UPC and jumps to Amazon/BestBuy/Walmart/Newegg searches.",
    tech: ["JavaScript", "Chrome Extensions", "DOM"],
    links: { repo: "https://github.com/Lucasdelapena/MicrocenterExtension"}
  },
  {
    title: "Image Resizer",
    description: "This program displays images from a chosen directory in a resizable OpenCV window, automatically scaling them to fit the monitor if necessary. It provides details like filename, dimensions, file size, pixel count, and a random pixel’s color, while allowing users to navigate images with keyboard controls.",
    tech: ["Python", "OpenCV"],
    links: { repo: "https://github.com/Lucasdelapena/ImageResizing"}
  },
  {
    title: "Mario Kart Tournament Number Generator",
    description: "An easy to use GUI application that generates random numbers for Mario Kart tournaments. Users can specify the range and quantity of numbers to generate, and the app displays the results in a user-friendly interface.",
    tech: ["Python", "tkinter", "ttkbootstrap"],
    links: { repo: "https://github.com/Lucasdelapena/NumberGenerator4MarioKart" }
  },
  {
    title: "Canvas Painting",
    description: "Takes a canvas of any input size and randomly fills it with colored squares to create a painting. Users can save the painting as an image file and gather data from the results.",
    tech: ["JS", "HTML", "React"],
    links: { repo: "https://github.com/Lucasdelapena/Painting" }
  },
  {
    title: "SVM Classification",
    description: "This program creates two clusters of points, trains a linear SVM to separate them, evaluates its accuracy, and visualizes the decision boundary on a plot.",
    tech: ["Python", "Jupyter Notebook"],
    links: { repo: "https://github.com/Lucasdelapena/SVM-Classification" }
  },
  {
    title: "PLA Classification",
    description: "This notebook implements the Perceptron Learning Algorithm (PLA). It generates sample data points, applies PLA to find a linear boundary that separates the classes, and reports the final weights, misclassifications, and iterations.",
    tech: ["Python", "Jupyter Notebook"],
    links: { repo: "https://github.com/Lucasdelapena/PLA-Classification" }
  },
  {
    title: "Huffman Coding with Highlighting & Equalization",
    description: "highlight.py is an image processing tool that allows users to select a region of interest, dim the surrounding area, and enhance contrast within the selection, while huffman.py performs Huffman coding on grayscale images to calculate entropy, generate codes, and evaluate compression efficiency.",
    tech: ["Python", "OpenCV"],
    links: { repo: "https://github.com/Lucasdelapena/HuffmanCoding-highlighting-equalization" }
  },

];


export const courses = [
  {
    title: "CMP SCI 4760 - Operating Systems",
    description: "Covers the structure of a generic operating system, considering in detail the algorithms for interporcess communication, process scheduling, resource management, memory management, file systems, and device management.",
    tech: ["Topic1", "Topic2"],
    skills: ["C/C++", "Scripting (Bash, Shell, PowerShell)"]
  },
  {
    title: "CMP SCI 4500 - Intro to Software Profession",
    description: "Focuses on software development and on the skills required for successs in the software profession. The course covers the software process, models and views, software architectures, documentation, and testing strategies.",
    tech: ["TopicA", "TopicB"],

    skills: ["C++", "Python", "React", "JS", "HTML", "CSS"],
  },
  {
    title: "CMP SCI 4420 - Image Processing & Comp Vision",
    description: "This course covers data structues and algorithms for image processing, region and texture analysis, image filtering, edge detection, contour following, and image enhancement in both spatial and frequency domain.",
    tech: ["TopicA", "TopicB"],
    skills: [ "Python", "NumPy", "OpenCV" ],
  },
  {
    title: "CMP SCI 4342 - Intro to Data Mining",
    description: "Covers the data mining principles, algorithms, and applications. Data preprocessing, data transformation, similarity and dissimilarity measures, data representation, classification techniques, association analysis, cluster analysis, and anomaly detection",
    tech: ["TopicA", "TopicB"],
    skills: [ "Python", "NumPy", "Jupyter Notebook/Google Colab" ],
  },
  {
    title: "CMP SCI 4340 - Intro to Machine Learning",
    description: "Introduced core concepts of machine learning, including classification, regression, regularization, validation, and reinforcement learning. Gained hands-on experience with algorithms and explored theoretical foundations such as computational learning theory and generalization.",
    tech: ["TopicA", "TopicB"],
    skills: [ "Python", "NumPy", "Jupyter Notebook/Google Colab" ],
  },
  {
    title: "CMP SCI 4300 - Intro to Artificial Intelligence",
    description: "Explored fundamental AI concepts, including search, planning, knowledge-based reasoning, probabilistic inference, and natural language processing. Applied machine learning methods and studied practical applications across multiple domains.",
    tech: ["TopicA", "TopicB"],
    skills: [ "Python", "NumPy", "Jupyter Notebook/Google Colab" ],
  },
  {
    title: "CMP SCI 4280 - Program Translation Project",
    description: "Focused on modular, incremental development and testing for complex programming tasks. Covered translation concepts such as finite automata, BNF grammars, language semantics, and translation models while emphasizing proper software engineering standards.",
    tech: ["TopicA", "TopicB"],
    skills: [ "C++", "Assembley", ],
  },
   {
    title: "CMP SCI 4250 - Programming Languages",
    description: "Studied principles and trade-offs in modern programming languages, with a comparative focus on syntax, semantics, and pragmatics. Explored major paradigms including object-oriented, imperative, functional, and logic programming.",
    tech: ["TopicA", "TopicB"],
    skills: [ "C++", "Numpy", ],
  },
  {
    title: "CMP SCI 3410 - Video Game Development",
    description: "Project-based course using C# and Unity to build a video game in a collaborative team environment. Covered world and level design, UI and character design, game engine programming, 2D/3D modeling, rendering, physics, and animation.",
    tech: ["TopicA", "TopicB"],
    skills: [ "C#", "Unity", ],
  },
  {
    title: "CMP SCI 3130 - Design & Analysis of Algorithms",
    description: "Studied fundamental algorithms including sorting, priority queues, search trees, and hash tables. Emphasized analysis of algorithm correctness, time and space complexity, and amortized complexity, with additional topics such as greedy methods, dynamic programming, graph traversal, and data compression.",
    tech: ["TopicA", "TopicB"],
    skills: [ "Java", ],
  },
  {
    title: "CMP SCI 3010 - Web Full Stack Development ",
    description: "Covered modern web development tools and frameworks, including Git, GitLab, and Docker. Built client–server applications with JavaScript, using React/Redux on the client side and Node.js/Express on the server side, emphasizing standards-compliant, maintainable, and accessible code.",
    tech: ["TopicA", "TopicB"],
    skills: [ "HTML", "PHP", "JS" ],
  },
  {
    title: "CMP SCI 2750 - Systems Programming and Tools",
    description: "Introduced Linux fundamentals with emphasis on command-line usage, file systems, and shell scripting. Covered source control, symbolic debugging, and system programming in C.",
    tech: ["TopicA", "TopicB"],
    skills: [ "C/C++", "Shell Scripting" ],
  },
  {
    title: "CMP SCI 2700 - Computer Organization & Architecture",
    description: "Introduced computer systems from both architectural and organizational perspectives. Covered data representation, digital logic, memory hierarchies, I/O and storage devices, and CPU architectures including RISC, CISC, parallel, and multi-core designs.",
    tech: ["TopicA", "TopicB"],
    skills: [ "Assembly" ],
  },
  {
    title: "CMP SCI 2261 - Object-Oriented Programming",
    description: "Introduced object-oriented principles and UML notation using Java. Covered encapsulation, classes, objects, inheritance, and use of class libraries, with additional exposure to GUIs, applets, and related tools.",
    tech: ["TopicA", "TopicB"],
    skills: [ "Java" ],
  },
  {
    title: "CMP SCI 2250 - Programming & Data Structures",
    description: "Continuation of introductory programming, focusing on abstract data types such as lists, trees, stacks, and queues. Introduced procedural and class abstraction, modular programming, interfaces, basic program architecture, and file processing.",
    tech: ["TopicA", "TopicB"],
    skills: [ "C++" ],
  },
  {
    title: "CMP SCI 1250 - Programming & Data Structures",
    description: "Introduced fundamental programming constructs, basic data types, and modularization using a modern high-level language. Emphasized problem-solving through progressive programming projects while exploring core concepts of computation and computer systems.",
    tech: ["TopicA", "TopicB"],
    skills: [ "C++" ],
  },
];