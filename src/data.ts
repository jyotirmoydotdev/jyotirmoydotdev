import { File, Folder, Github, Instagram, Linkedin, Twitter, User2Icon, Video, Youtube } from "lucide-react"
import { BiLogoGmail } from "react-icons/bi"
import { SiLeetcode } from "react-icons/si"

// Fist sidebar data
export const sidebar_data = {
    logo: "/jyotirmoy.webp",
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
        }
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

// Second sidebar about section
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

// Second sidebar projects section + list
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

// Type for the blog
type blogsType = {
    title: string,
    description: string,
    url: string,
    date: string,
    content: (string | string[])[],
}

// Second sidebar blogs section + list
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
        title: "Learn basics of SQLite",
        description: "SQLite is a lightweight, serverless, and self-contained relational database management system. It's often used in applications that need a local database.",
        url: "/blogs/learn-basics-of-sqlite",
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