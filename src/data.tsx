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
    // {
    //     title: "Introduction to Go Routine",
    //     description: "In this blog, we will understand how to reduce the time taken to fetch data by leveraging Go routines. But before diving into concurrency, we'll first explore how to fetch data one by one.",
    //     url: "/blogs/intro-to-go-routine",
    //     date: "Dec 28, 2024",
    //     content: [
    //         "Get the Free API Key from OpenWeatherMap",
    //         "Fetching Weather Data Without Concurrency",
    //         [
    //             "Explanation of Sequential Code"
    //         ],
    //         "Fetching Weather Data With Concurrency",
    //         [
    //             "Explanation of Concurrent Code",
    //         ],
    //         "Benefits of Using Concurrency",
    //     ]
    // },
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
]

export const video : { id:string, imgUrl:string, title:string, description:string, date:string }[] = [
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