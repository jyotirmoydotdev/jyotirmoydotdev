import { ArrowDown, ArrowRight, ArrowUp, File, Folder, Github, Instagram, Linkedin, Twitter, User2Icon, Video, Youtube } from "lucide-react"
import { BiLogoGmail } from "react-icons/bi"
import { SiLeetcode } from "react-icons/si"

export const sidebar_data = {
    logo: "/logo.png",
    navMain: [
        {
            title: "About",
            url: "/",
            icon: User2Icon,
            isActive: true,
        },
        {
            title: "Blogs",
            url: "/blogs",
            icon: File,
            isActive: false,
        },
        {
            title: "Videos",
            url: "/video",
            icon: Video,
            isActive: false,
        },
        {
            title: "Projects",
            url: "/projects",
            icon: Folder,
            isActive: false,
        },
        {
            title: "Leetcode",
            url: "/leetcode",
            icon: SiLeetcode,
            isActive: false,
        },
        // {
        //     title: "AoC",
        //     url: "/leetcode",
        //     icon: SiAdventofcode,
        //     isActive: false,
        // }
    ],
    links: [
        {
            url: 'mailto:jyotirmoydotdev@gmail.com',
            name: 'Gmail | Jyotirmoy Barman | jyotirmoydotdev@gmail.com',
            social: 'Gmail',
            icon: BiLogoGmail
        },
        {
            url: 'https://github.com/jyotirmoydotdev',
            name: 'Github | Jyotirmoy Barman | @jyotirmoydotdev',
            social: 'Github',
            icon: Github
        },
        {
            url: 'https://x.com/jyotirmoydotdev',
            name: 'x | Jyotirmoy Barman | @jyotirmoydotdev',
            social: 'Twitter',
            icon: Twitter
        },
        {
            url: 'https://linkedin.com/in/jyotirmoydotdev',
            name: 'Linkedin | Jyotirmoy Barman | @jyotirmoydotdev',
            social: 'Linkedin',
            icon: Linkedin
        },
        {
            url: 'https://www.youtube.com/@Jyotirmoydotdev',
            name: 'Youtube | Jyotirmoy Barman | @jyotirmoydotdev',
            social: 'Youtube',
            icon: Youtube
        },
        {
            url: 'https://leetcode.com/jyotirmoydotdev',
            name: 'Leetcode | Jyotirmoy Barman | @jyotirmoydotdev',
            social: 'Leetcode',
            icon: SiLeetcode
        },
        {
            url: 'https://www.instagram.com/Jyotirmoydotdev',
            name: 'Instagram | Jyotirmoy Barman | @jyotirmoydotdev',
            social: 'Instagram',
            icon: Instagram
        }
    ]
}

export const about = [
    {
        title: "About",
        url: "/"
    },
    {
        title: "Experiences",
        url: "/#experiences"
    },
    {
        title: "Projects",
        url: "/#projects"
    },
    {
        title: "Educations",
        url: "/#educations"
    },
    {
        title: "Blogs",
        url: "/#blogs"
    }
]

export const projects = [
    {
        icon: null,
        title: "MyMeghalaya",
        description: "MyMeghalaya is a website I created to showcase the rich culture and natural beauty of my homeland to the world, inviting everyone to witness its splendor firsthand.",
        url: "/projects",
        externalUrl: null,
        source: "https://github.com/jyotirmoydotdev/mymeghalaya",
        tags: ["Nextjs", "Supabase", "Vercel", "Resend"],
    },
    {
        icon: null,
        title: "Openfy",
        description: "Openfy is a self-hosted e-commerce platform built with Go and Gin, providing a flexible and customizable solution for managing products and handling user authentication.",
        url: "/projects",
        externalUrl: null,
        source: "https://github.com/jyotirmoydotdev/openfy",
        tags: ["Go", "Gin", "Pocketbase", "Docker"],
    },
    {
        icon: null,
        title: "Blog App",
        description: "Blog application built with Next.js and MongoDB. The app includes a dashboard for managing posts and viewing a list of subscribers.",
        url: "/projects",
        externalUrl: null,
        source: "https://github.com/jyotirmoydotdev/blog-app",
        tags: ["Nextjs", "MongoDB", "Vercel"]
    }
]

export type blogsType = {
    title: string,
    description: string,
    url: string,
    titleSlug: string,
    date: string,
    content: (string | string[])[],
}

export const blogs: blogsType[] = [
    {
        title: "Run Stable Diffusion on Your MacBook M1 Using Python",
        description: "Turn your MacBook M1 into an art machine with Python, watch your words come to life in vivid images!",
        url: "/blogs/run-stable-diffusion-on-your-macBook-m1-using-python",
        titleSlug: 'run-stable-diffusion-on-your-macBook-m1-using-python',
        date: "Feb 10, 2025",
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
        url: "/blogs/build-your-golang-proxy-server",
        titleSlug: 'build-your-golang-proxy-server',
        date: "Feb 8, 2025",
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
        url: "/blogs/simple-way-to-run-deepseek-r1-locally",
        titleSlug: 'simple-way-to-run-deepseek-r1-locally',
        date: "Feb 4, 2025",
        content: [
            "Installation",
            "Usages",
            "Wrap up",
        ]
    },
    {
        title: "Learn basics of SQLite",
        description: "SQLite is a lightweight, serverless, and self-contained relational database management system. It's often used in applications that need a local database.",
        url: "/blogs/learn-basics-of-sqlite",
        titleSlug: 'learn-basics-of-sqlite',
        date: "Aug 25, 2023",
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
        url: "/blogs/building-a-json-validation-pipeline-with-go-and-gin",
        titleSlug: 'building-a-json-validation-pipeline-with-go-and-gin',
        date: "Aug 19, 2023",
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
        url: "/blogs/use-gin-web-framework-to-build-your-server",
        titleSlug: 'use-gin-web-framework-to-build-your-server',
        date: "Aug 19, 2023",
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
        url: "/blogs/how-to-interact-with-smart-contract",
        titleSlug: "how-to-interact-with-smart-contract",
        date: "Mar 22, 2023",
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
        url: "/blogs/fetch-balance-from-ethereum-blockchain",
        titleSlug: "fetch-balance-from-ethereum-blockchain",
        date: "Mar 17, 2023",
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
        url: "/blogs/blockchain-storage",
        titleSlug: "blockchain-storage",
        date: "Feb 27, 2023",
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
        url: "/blogs/cryptography",
        titleSlug: "cryptography",
        date: "Feb 23, 2023",
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
        url: "/blogs/decentralization-with-blockchain",
        titleSlug: "decentralization-with-blockchain",
        date: "Feb 17, 2023",
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
        url: "/blogs/blockchain-structure",
        titleSlug: "blockchain-structure",
        date: "Feb 12, 2023",
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
        url: "/blogs/what-is-blockchain",
        titleSlug: "what-is-blockchain",
        date: "Feb 8, 2023",
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
        url: "/blogs/set-up-tailwind-in-your-project",
        titleSlug: "set-up-tailwind-in-your-project",
        date: "Jan 19, 2023",
        content: [
            "Play CDN ( Method 1)",
            "Tailwind CLI ( Method 2 )",
        ],
    },
    {
        title: "Git for Termux",
        description: "As the internet says git is a version control to track the code changes and there is not any second thought. I am not going to explain it in detail, If you want to read more",
        url: "/blogs/git-for-termux",
        titleSlug: "git-for-termux",
        date: "Jan 26, 2022",
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
        url: "/blogs/tmux-for-termux",
        titleSlug: "tmux-for-termux",
        date: "Dec 19, 2021",
        content: [
            "Installation",
            "Basic command",
        ],
    },
    {
        title: "What is Cmatrix",
        description: "Want to see some animation in termux you can install cmatrix. Cmatrix shows cool matrix scrolling lines animation in terminal , you probably have seen in the Sci-fi movies.",
        url: "/blogs/what-is-cmatrix",
        titleSlug: "what-is-cmatrix",
        date: "Oct 16, 2021",
        content: [
            "Install",
            "Start and stop",
            "Colours",
            "More option",
            "Manual",
        ]
    },
]

export type leetcodeType = {
    id: number,
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

export const leetcodes: leetcodeType[] = [
    {
        id: 1,
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
        id: 1415,
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
        id: 1752,
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
        id: 1790,
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
        id: 1800,
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
        id: 1910,
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
        id: 3151,
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
        id: 3105,
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
        id: 1726,
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
        id: 3160,
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
        id: 2364,
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
        id: 3174,
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
        id: 2342,
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
        id: 3065,
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
        id: 3438,
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
        id: 2460,
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
]

export type videoType = {
    id: string,
    imgUrl: string,
    title: string,
    description: string,
    date: string
}

export const video: videoType[] = [
    {
        "id": "tOASWm8I7sk",
        "imgUrl": "https://i.ytimg.com/vi/tOASWm8I7sk/default.jpg",
        "title": "2116. Check if a Parentheses String Can Be Valid - Go",
        "description": "",
        "date": "2025-01-12T17:01:47Z"
    },
    {
        "id": "D_cfXKdYu4M",
        "imgUrl": "https://i.ytimg.com/vi/D_cfXKdYu4M/default.jpg",
        "title": "1400. Construct K Palindrome Strings - Go",
        "description": "00:00 Code explanation (tried) 06:15 Code Implementation.",
        "date": "2025-01-11T17:52:26Z"
    },
    {
        "id": "5XfjayX8HAE",
        "imgUrl": "https://i.ytimg.com/vi/5XfjayX8HAE/default.jpg",
        "title": "916. Word Subsets - Go",
        "description": "",
        "date": "2025-01-10T15:57:53Z"
    },
    {
        "id": "X2vwqQNiJks",
        "imgUrl": "https://i.ytimg.com/vi/X2vwqQNiJks/default.jpg",
        "title": "2185. Counting Words With a Given Prefix - Go",
        "description": "Tried to explain the solution, I know it is is not good but trying to improve.",
        "date": "2025-01-09T18:52:49Z"
    },
    {
        "id": "oe4PYLTGVTY",
        "imgUrl": "https://i.ytimg.com/vi/oe4PYLTGVTY/default.jpg",
        "title": "3042  Count Prefix and Suffix Pairs I - Go",
        "description": "",
        "date": "2025-01-08T15:02:38Z"
    }
];