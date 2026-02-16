import { ArrowDown, ArrowRight, ArrowUp, Files, Folders, User2Icon } from "lucide-react"
import { IconType } from "react-icons/lib"
import { FaTerminal, FaEthereum, FaCode } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { LuBookText, LuFileCode2, LuMail } from "react-icons/lu"
import { TbSmartHome } from "react-icons/tb";

export const sidebar_data = {
  logo: "/logo.png",
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: TbSmartHome,
      isActive: false,
    },
    {
      title: "Blogs",
      url: "/blogs",
      icon: Files,
      isActive: false,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: Folders,
      isActive: false,
    },
    {
      title: "Practice",
      url: "/practice",
      icon: LuFileCode2,
      isActive: false,
    },
    {
      title: "Courses",
      url: "/courses",
      icon: LuBookText,
      isActive: false,
    }
  ],
  bottomMain: [
    {
      title: "About",
      url: "/about",
      icon: User2Icon,
      isActive: false,
    },
    {
      title: "Subscribe",
      url: "/subscribe",
      icon: LuMail,
      isActive: false,
    },
  ]
}

export const alltags = [
  { label: "Array", value: "Array" },
  { label: "String", value: "String" },
  { label: "Hash Table", value: "Hash Table" },
  { label: "Dynamic Programming", value: "Dynamic Programming" },
  { label: "Math", value: "Math" },
  { label: "Sorting", value: "Sorting" },
  { label: "Greedy", value: "Greedy" },
  { label: "Depth-First Search", value: "Depth-First Search" },
  { label: "Database", value: "Database" },
  { label: "Binary Search", value: "Binary Search" },
  { label: "Matrix", value: "Matrix" },
  { label: "Tree", value: "Tree" },
  { label: "Breadth-First Search", value: "Breadth-First Search" },
  { label: "Bit Manipulation", value: "Bit Manipulation" },
  { label: "Two Pointers", value: "Two Pointers" },
  { label: "Prefix Sum", value: "Prefix Sum" },
  { label: "Heap (Priority Queue)", value: "Heap (Priority Queue)" },
  { label: "Binary Tree", value: "Binary Tree" },
  { label: "Simulation", value: "Simulation" },
  { label: "Stack", value: "Stack" },
  { label: "Graph", value: "Graph" },
  { label: "Counting", value: "Counting" },
  { label: "Sliding Window", value: "Sliding Window" },
  { label: "Design", value: "Design" },
  { label: "Backtracking", value: "Backtracking" },
  { label: "Enumeration", value: "Enumeration" },
  { label: "Union Find", value: "Union Find" },
  { label: "Linked List", value: "Linked List" },
  { label: "Ordered Set", value: "Ordered Set" },
  { label: "Number Theory", value: "Number Theory" },
  { label: "Monotonic Stack", value: "Monotonic Stack" },
  { label: "Trie", value: "Trie" },
  { label: "Segment Tree", value: "Segment Tree" },
  { label: "Bitmask", value: "Bitmask" },
  { label: "Queue", value: "Queue" },
  { label: "Divide and Conquer", value: "Divide and Conquer" },
  { label: "Recursion", value: "Recursion" },
  { label: "Combinatorics", value: "Combinatorics" },
  { label: "Binary Indexed Tree", value: "Binary Indexed Tree" },
  { label: "Geometry", value: "Geometry" },
  { label: "Binary Search Tree", value: "Binary Search Tree" },
  { label: "Hash Function", value: "Hash Function" },
  { label: "Memoization", value: "Memoization" },
  { label: "String Matching", value: "String Matching" },
  { label: "Topological Sort", value: "Topological Sort" },
  { label: "Shortest Path", value: "Shortest Path" },
  { label: "Rolling Hash", value: "Rolling Hash" },
  { label: "Game Theory", value: "Game Theory" },
  { label: "Interactive", value: "Interactive" },
  { label: "Data Stream", value: "Data Stream" },
  { label: "Monotonic Queue", value: "Monotonic Queue" },
  { label: "Brainteaser", value: "Brainteaser" },
  { label: "Randomized", value: "Randomized" },
  { label: "Merge Sort", value: "Merge Sort" },
  { label: "Doubly-Linked List", value: "Doubly-Linked List" },
  { label: "Counting Sort", value: "Counting Sort" },
  { label: "Iterator", value: "Iterator" },
  { label: "Concurrency", value: "Concurrency" },
  { label: "Probability and Statistics", value: "Probability and Statistics" },
  { label: "Quickselect", value: "Quickselect" },
  { label: "Suffix Array", value: "Suffix Array" },
  { label: "Bucket Sort", value: "Bucket Sort" },
  { label: "Minimum Spanning Tree", value: "Minimum Spanning Tree" },
  { label: "Line Sweep", value: "Line Sweep" },
  { label: "Shell", value: "Shell" },
  { label: "Reservoir Sampling", value: "Reservoir Sampling" },
  { label: "Strongly Connected Component", value: "Strongly Connected Component" },
  { label: "Eulerian Circuit", value: "Eulerian Circuit" },
  { label: "Radix Sort", value: "Radix Sort" },
  { label: "Rejection Sampling", value: "Rejection Sampling" },
  { label: "Biconnected Component", value: "Biconnected Component" },
]

export const difficulties = [
  {
    label: "Easy",
    value: "Easy",
    iconColour: "text-green-500",
    icon: <ArrowDown className={`mr-2 h-4 w-4  text-green-500`} />
  },
  {
    label: "Medium",
    value: "Medium",
    iconColour: "text-yellow-500",
    icon: <ArrowRight className={`mr-2 h-4 w-4  text-yellow-500`} />
  },
  {
    label: "Hard",
    value: "Hard",
    iconColour: "text-red-500",
    icon: <ArrowUp className={`mr-2 h-4 w-4 text-red-500`} />
  },
]

export const practices: practiceType[] = [
  {
    id: "LC0001",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Two Sum",
    titleSlug: "two-sum",
    topicTags: [
      "Array",
      "Hash Table"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Brute Force',
      'Hash Map',
      'Explanation'
    ]
  },
  {
    id: "LC1415",
    difficulty: "Medium",
    isFavor: false,
    status: 'Done',
    title: "The k-th Lexicographical String of All Happy Strings of Length n",
    titleSlug: "the-k-th-lexicographical-string-of-all-happy-strings-of-length-n",
    topicTags: [
      "String",
      "Backtracking",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Combinatorics',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC1752",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Check if Array Is Sorted and Rotated",
    titleSlug: "check-if-array-is-sorted-and-rotated",
    topicTags: [
      "Array"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Solution',
      'Explanation',
      [
        'Approach',
        'Example Walkthrough',
        'Complexity Analysis'
      ]
    ]
  },
  {
    id: "LC1790",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Check if One String Swap Can Make Strings Equal",
    titleSlug: "check-if-one-string-swap-can-make-strings-equal",
    topicTags: [
      "Hash Table",
      "String",
      "Counting",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Solution',
      'Explanation',
      [
        'Check Length Equality and Immediate Equality',
        'Using Hash Maps and a Counter',
        'Loop Through the Strings',
        'Verify Character Frequencies'
      ],
      'Complexity Analysis'
    ]
  },
  {
    id: "LC1800",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Maximum Ascending Subarray Sum",
    titleSlug: "maximum-ascending-subarray-sum",
    topicTags: [
      "Array"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Solution',
      'Explanation',
      [
        'Approach',
        'Example Walkthrough',
        'Complexity Analysis'
      ]
    ]
  },
  {
    id: "LC1910",
    difficulty: "Medium",
    isFavor: false,
    status: 'Done',
    title: "Remove All Occurrences of a Substring",
    titleSlug: "remove-all-occurrences-of-a-substring",
    topicTags: [
      "String",
      "Stack",
      "Simulation",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Stack',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC3151",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Special Array I",
    titleSlug: "special-array-i",
    topicTags: [
      "Array"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Solution',
      'Explanation',
      [
        'Approach',
        'Example Walkthrough',
        'Complexity Analysis'
      ]
    ]
  },
  {
    id: "LC3105",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Longest Strictly Increasing or Strictly Decreasing Subarray",
    titleSlug: "longest-strictly-increasing-or-strictly-decreasing-subarray",
    topicTags: [
      "Array"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Solution',
      'Explanation',
      [
        'Approach',
        'Example Walkthrough',
        'Complexity Analysis'
      ]
    ]
  },
  {
    id: "LC1726",
    difficulty: "Medium",
    isFavor: false,
    status: 'Done',
    title: "Tuple with Same Product",
    titleSlug: "tuple-with-same-product",
    topicTags: [
      "Array",
      "Hash Table",
      "Counting"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Solution',
      'Explanation',
      [
        'Counting Products',
        'Iterating Over Pairs',
        'Calculating the Result',
        'Return the Result'
      ],
      'Complexity Analysis'
    ]
  },
  {
    id: "LC3160",
    difficulty: "Medium",
    isFavor: false,
    status: 'Done',
    title: "Find the Number of Distinct Colors Among the Balls",
    titleSlug: "find-the-number-of-distinct-colors-among-the-balls",
    topicTags: [
      "Array",
      "Hash Table",
      "Simulation"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Solution',
      'Explanation',
      [
        'Initial Setup',
        'Processing Each Query',
      ],
      'Complexity Analysis'
    ]
  },
  {
    id: "LC2364",
    difficulty: "Medium",
    isFavor: false,
    status: 'Done',
    title: "Count Number of Bad Pairs",
    titleSlug: "count-number-of-bad-pairs",
    topicTags: [
      "Array",
      "Hash Table",
      "Math",
      "Counting"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Solution',
      'Explanation',
      'The Key Observation',
      'Step-by-Step Explanation',
      'Complexity Analysis'
    ]
  },
  {
    id: "LC3174",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Clear Digits",
    titleSlug: "clear-digits",
    topicTags: [
      "String",
      "Stack",
      "Simulation"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Solution',
      'Explanation',
      [
        '1. Iteration and Stack Building',
        '2. Edge Case Handling',
        '3. Example Walkthrough',
      ],
      'Complexity Analysis'
    ]
  },
  {
    id: "LC2342",
    difficulty: "Medium",
    isFavor: false,
    status: 'Done',
    title: "Max Sum of a Pair With Equal Sum of Digits",
    titleSlug: "max-sum-of-a-pair-with-equal-sum-of-digits",
    topicTags: [
      "Array",
      "Hash Table",
      "Sorting",
      "Heap (Priority Queue)",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Store Maximum Value',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC3065",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Minimum Operations to Exceed Threshold Value I",
    titleSlug: "minimum-operations-to-exceed-threshold-value-i",
    topicTags: [
      "Array",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC3438",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Find Valid Pair of Adjacent Digits in String",
    titleSlug: "find-valid-pair-of-adjacent-digits-in-string",
    topicTags: [
      "Hash Table",
      "String",
      "Counting",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC2460",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Apply Operations to an Array",
    titleSlug: "apply-operations-to-an-array",
    topicTags: [
      "Array",
      "Two Pointers",
      "Simulation",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Brute Force Simulation',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'One Pass',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC1757",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Recyclable and Low Fat Products",
    titleSlug: "recyclable-and-low-fat-products",
    topicTags: [
      "Database",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Selecting rows based on conditions',
      'Wrap up'
    ]
  },
  {
    id: "LC2570",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Merge Two 2D Arrays by Summing Values",
    titleSlug: "merge-two-2d-arrays-by-summing-values",
    topicTags: [
      "Array",
      "Hash Table",
      "Two Pointers",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach 1: Hash Map',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Approach 2: Two Pointers',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC2161",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Partition Array According to Given Pivot",
    titleSlug: "partition-array-according-to-given-pivot",
    topicTags: [
      "Array",
      "Two Pointers",
      "Simulation",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach 1: Dynamic Slices',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC1780",
    difficulty: "Medium",
    isFavor: false,
    status: 'Done',
    title: "Check if Number is a Sum of Powers of Three",
    titleSlug: "check-if-number-is-a-sum-of-powers-of-three",
    topicTags: [
      "Math"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach: Ternary Representation',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC2579",
    difficulty: "Medium",
    isFavor: false,
    status: 'Done',
    title: "Count Total Number of Colored Cells",
    titleSlug: "count-total-number-of-colored-cells",
    topicTags: [
      "Math"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach: Mathematical Formula',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC2356",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Number of Unique Subjects Taught by Each Teacher",
    titleSlug: "number-of-unique-subjects-taught-by-each-teacher",
    topicTags: [
      "Database"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach: Grouping and Counting Unique Subjects',
      [
        'Intuition',
        'Algorithm',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC2965",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Find Missing and Repeated Values",
    titleSlug: "find-missing-and-repeated-values",
    topicTags: [
      "Array",
      "Hash Table",
      "Math",
      "Matrix",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach: Hash Map Counting',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC2206",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Divide Array Into Equal Pairs",
    titleSlug: "divide-array-into-equal-pairs",
    topicTags: [
      "Array",
      "Hash Table",
      "Bit Manipulation",
      "Counting"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach: Hash Map',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC3417",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Zigzag Grid Traversal With Skip",
    titleSlug: "zigzag-grid-traversal-with-skip",
    topicTags: [
      "Array",
      "Matrix",
      "Simulation",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach: Traversal With Skip',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC2427",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Number of Common Factors",
    titleSlug: "number-of-common-factors",
    topicTags: [
      "Math",
      "Enumeration",
      "Number Theory",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach: Brute Force Iteration',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC2303",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Calculate Amount Paid in Taxes",
    titleSlug: "calculate-amount-paid-in-taxes",
    topicTags: [
      "Array",
      "Simulation",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach: Iterative Simulation',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC1688",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Count of Matches in Tournament",
    titleSlug: "count-of-matches-in-tournament",
    topicTags: [
      "Math",
      "Simulation",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach: Simulation',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC2644",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Find the Maximum Divisibility Score",
    titleSlug: "find-the-maximum-divisibility-score",
    topicTags: [
      "Array",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach: Brute Force with Optimization',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC2140",
    difficulty: "Medium",
    isFavor: false,
    status: 'Done',
    title: "Solving Questions With Brainpower",
    titleSlug: "solving-questions-with-brainpower",
    topicTags: [
      "Array",
      "Dynamic Programming"
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach: Dynamic Programming',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  },
  {
    id: "LC0344",
    difficulty: "Easy",
    isFavor: false,
    status: 'Done',
    title: "Reverse String",
    titleSlug: "reverse-string",
    topicTags: [
      "Two Pointers",
      "String",
    ],
    hasSolution: true,
    hasVideoSolution: false,
    content: [
      'Question',
      'Approach: Two-Pointer Technique',
      [
        'Intuition',
        'Algorithm',
        'Complexity Analysis',
      ],
      'Wrap up'
    ]
  }
]

export const blogCategories: { icon: IconType, classname: string, label: string, value: string }[] = [
  { icon: FaTerminal, classname: "fill-green-500", label: "Backend", value: "backend" },
  // { icon:  ,label: "Full-Stack", value: "full-stack" },
  { icon: FaEthereum, classname: "fill-blue-500", label: "Blockchain", value: "blockchain" },
  { icon: RiGeminiFill, classname: "fill-orange-500", label: "AI & Machine Learning", value: "ai-machine-learning" },
  { icon: FaCode, classname: "fill-blue-500", label: "Frontend", value: "frontend" },
]

export const blogs: blogsType[] = [
  {
    title: "How to Change the Default Permission String for the Location-Access Alert in Expo",
    description: "Learn how to customize the default permission string for the location access alert in Expo applications, ensuring a better user experience.",
    titleSlug: "how-to-change-the-default-permission-string-for-the-location-access-alert-in-expo",
    date: "Jul 19, 2025",
    category: 'frontend',
    content: [
      'The Problem',
      'The Fix: Clean Prebuild + EAS Build',
      'Why This Works',
      'Wrap up'
    ]
  },
  {
    title: "Run Stable Diffusion on Your MacBook M1 Using Python",
    description: "Turn your MacBook M1 into an art machine with Python, watch your words come to life in vivid images!",
    titleSlug: 'run-stable-diffusion-on-your-macBook-m1-using-python',
    date: "Feb 10, 2025",
    category: 'ai-machine-learning',
    content: [
      "Project Setup",
      [
        'Creating a Virtual Environment',
        'Adding Dependencies',
        'Create a Python File',
      ],
      "Generate AI Image",
      [
        'Code Implementation',
        'Execution',
        'Explanation'
      ],
      "Wrap up"
    ]
  },
  {
    title: "Build your Golang Proxy Server",
    description: "Learn to build a robust Go proxy server supporting HTTP and HTTPS, complete with health checks and detailed logging.",
    titleSlug: 'build-your-golang-proxy-server',
    date: "Feb 8, 2025",
    category: 'backend',
    content: [
      "Prerequisites",
      "Project Setup",
      "Writing the Proxy Program",
      "Overview of main.go",
      [
        "Configuring the Server Port",
        "Implementing a Health Check Endpoint",
        "Initializing the Proxy Server",
        "Full Code (main.go)"
      ],
      "Overview of proxy.go",
      [
        "Resolving Host IP Addresses",
        "Extracting the Host from an HTTP Request",
        "Handling Client Requests",
        "Handling HTTPS Traffic",
        "Handling HTTP Requests",
        "Full Code (proxy.go)"
      ],
      "Running the Proxy",
      ["Configuring the Proxy on macOS"],
      "Stop the Proxy",
      "Wrap up"
    ]
  },
  {
    title: "Simple way to run deepseek-r1 Locally",
    description: "Learn how to install and use DeepSeek-R1, a lightweight, distilled AI model, with the open-source Ollama tool.",
    titleSlug: 'simple-way-to-run-deepseek-r1-locally',
    date: "Feb 4, 2025",
    category: 'ai-machine-learning',
    content: [
      "Installation",
      "Usages",
      "Wrap up",
    ]
  },
  {
    title: "Learn basics of SQLite",
    description: "SQLite is a lightweight, serverless, and self-contained relational database management system. It's often used in applications that need a local database.",
    titleSlug: 'learn-basics-of-sqlite',
    date: "Aug 25, 2023",
    category: 'backend',
    content: [
      "Installation",
      "Opening a Database",
      "Creating a Table",
      "Inserting Data",
      "Querying Data",
      "Updating Data",
      "Deleting Data",
      "Closing the Database",
      "Conclusion",
    ]
  },
  {
    title: "Building a JSON Validation Pipeline with Go and Gin",
    description: "Imagine a scenario where we're transmitting crucial data from our website to a database. However, before this information is stored",
    titleSlug: 'building-a-json-validation-pipeline-with-go-and-gin',
    date: "Aug 19, 2023",
    category: 'backend',
    content: [
      "Full Code",
      "Import Statements",
      "Data Structures",
      "Main Function main()",
      "Router Function Router()",
      "ValidateBook Handler Function",
      "Reflection and Validation",
      "Test Using Thunder Client",
      "Test With CURL"
    ]
  },
  {
    title: "Use Gin Web Framework to build your server",
    description: "Let's build a simple web service using the Go programming language and the Gin web framework. We will define a basic web server that listens for incoming HTTP requests and responds with JSON data.",
    titleSlug: 'use-gin-web-framework-to-build-your-server',
    date: "Aug 19, 2023",
    category: 'backend',
    content: [
      "Setup",
      "main.go",
      "web/assignments.go",
      "web/router.go",
      "Thanks for reading"
    ]
  },
  {
    title: "How to interact with Smart Contract?",
    description: "This article will teach you how to interact with a smart contract in the Ethereum blockchain, starting this article we first need to install some dependencies in our computer.",
    titleSlug: "how-to-interact-with-smart-contract",
    date: "Mar 22, 2023",
    category: 'blockchain',
    content: [
      "Import ethers.js",
      "Set the provider",
      "Import the Contract ABI",
      "Connecting with Contract",
      "Fetching the DAI balance of an account",
      "Fetch the Token Details"
    ]
  },
  {
    title: "Fetch Balance from Ethereum Blockchain",
    description: "To Fetch the balance of an account in the Ethereum blockchain first we need to install some dependencies on our computer.",
    titleSlug: "fetch-balance-from-ethereum-blockchain",
    date: "Mar 17, 2023",
    category: 'blockchain',
    content: [
      "Import Ethers.js",
      "Connect with a Node Provider",
      "Get an account address to fetch the balance",
      "Fetch balance",
      "Print the Balance in the console",
      "Full Code"
    ]
  },
  {
    title: "Blockchain Storage",
    description: "Learn about IPFS(InterPlanetary File System) and how we store data on blockchain. The blockchain contains some data, such as transactions or other information,",
    titleSlug: "blockchain-storage",
    date: "Feb 27, 2023",
    category: 'blockchain',
    content: [
      "Introduction to blockchain storage",
      "Traditional storage vs blockchain storage",
      "Decentralized storage and its benefits",
      "Distributed ledger technology",
      "IPFS (InterPlanetary File System)",
      [
        "IPFS (InterPlanetary File System)",
        "Storage of data",
        "Versioning"
      ],
      "Versioning"
    ]
  },
  {
    title: "Cryptography",
    description: "Cryptography is a huge topic and constantly evolving as the internet get advances. Here I will explain the topics that will help you understand blockchain better.",
    titleSlug: "cryptography",
    date: "Feb 23, 2023",
    category: 'blockchain',
    content: [
      "Hash Function",
      "SHA256 Hash Function",
      "Nonce",
      "What is Encryption",
      "Symmetric Key Encryption",
      "Public Key Cryptography",
      "Secure Communication",
      "Digital Signatures",
      [
        "Adding a Digital Signature",
        "Verifying a Digital Signature",
      ],
      "Certificate Authority",
      [
        "How does a Certificate Authority work?"
      ],
      "What's on the next article?"
    ]
  },
  {
    title: "Decentralization with Blockchain",
    description: "How does the internet works? How the internet is centralized? What is Decentralization? Why it matters? Applications and uses of blockchain?",
    titleSlug: "decentralization-with-blockchain",
    date: "Feb 17, 2023",
    category: 'blockchain',
    content: [
      "How does the internet works?",
      "How the internet is centralized?",
      "What is Decentralization?",
      "Why it matters?",
      "Applications and uses",
      "What's on the next article?"
    ]
  },
  {
    title: "Blockchain Structure",
    description: "Understand how a blockchain work and what makes a blockchain. Today we are going to see how a blockchain work.",
    titleSlug: "blockchain-structure",
    date: "Feb 12, 2023",
    category: 'blockchain',
    content: [
      "SHA256 Hash",
      "Block",
      "Blockchain",
      "Distributed Blockchain",
      "Tokens or Transaction",
      "Coinbase Transactions",
      "What's on the next article?"
    ]
  },
  {
    title: "What is Blockchain?",
    description: "Blockchain is a distributed ledger (ok but what this really mean ?). Let me explain it !",
    titleSlug: "what-is-blockchain",
    date: "Feb 8, 2023",
    category: 'blockchain',
    content: [
      "Terminology",
      [
        "Immutability",
        "Distribution",
        "Ledger",
        "Node ( Host or Peer)",
      ],
      "What's on the next article?"
    ]
  },
  {
    title: "Set up Tailwind in your Project",
    description: "Tailwind CSS is a utility class framework that helps you make a responsive web design. In this article, I will teach you, how to set up a tailwind in the project.",
    titleSlug: "set-up-tailwind-in-your-project",
    date: "Jan 19, 2023",
    category: 'frontend',
    content: [
      "Play CDN ( Method 1)",
      "Tailwind CLI ( Method 2 )",
    ],
  },
  {
    title: "Git for Termux",
    description: "As the internet says git is a version control to track the code changes and there is not any second thought. I am not going to explain it in detail, If you want to read more",
    titleSlug: "git-for-termux",
    date: "Jan 26, 2022",
    category: 'backend',
    content: [
      "Git",
      "Installation",
      [
        "step 1",
        "step 2",
        "What is Github?"
      ],
      "Learn",
      [
        "Make Repository",
        "Push and Pull"
      ],
      "Command table",
      "Thanks"
    ],
  },
  {
    title: "Tmux for Termux",
    description: "Have you ever wonder how to open multiple sessions in a singel screen in termux. Here is a solution, an open source terminal multiplexer for Linux or Unix operating systems.",
    titleSlug: "tmux-for-termux",
    date: "Dec 19, 2021",
    category: 'backend',
    content: [
      "Installation",
      "Basic command",
    ],
  },
  {
    title: "What is Cmatrix",
    description: "Want to see some animation in termux you can install cmatrix. Cmatrix shows cool matrix scrolling lines animation in terminal , you probably have seen in the Sci-fi movies.",
    titleSlug: "what-is-cmatrix",
    date: "Oct 16, 2021",
    category: 'backend',
    content: [
      "Install",
      "Start and stop",
      "Colours",
      "More option",
      "Manual",
    ]
  },
]

export type blogsType = {
  title: string,
  description: string,
  titleSlug: string,
  date: string,
  category: string,
  content: (string | string[])[],
}

export type practiceType = {
  id: string,
  difficulty: ("Easy" | "Medium" | "Hard"),
  isFavor: boolean,
  status: ("Done" | "Attempt" | "Unattempt"),
  title: string,
  titleSlug: string,
  topicTags: string[],
  hasSolution: boolean,
  hasVideoSolution: boolean,
  content: (string | string[])[]
}
