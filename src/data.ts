import { File, Folder, Github, Instagram, Linkedin, Twitter, User2Icon, Video, Youtube } from "lucide-react"
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
            title: "Projects",
            url: "/projects",
            icon: Folder,
            isActive: false,
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
        }
    ],
    links: [
        {
            url: 'https://github.com/jyotirmoydotdev',
            name: 'Github | Jyotirmoy Barman | @jyotirmoydotdev',
            icon: Github
        },
        {
            url: 'https://leetcode.com/jyotirmoydotdev',
            name: 'Leetcode | Jyotirmoy Barman | @jyotirmoydotdev',
            icon: SiLeetcode
        },
        {
            url: 'https://x.com/jyotirmoydotdev',
            name: 'x | Jyotirmoy Barman | @jyotirmoydotdev',
            icon: Twitter
        },
        {
            url: 'https://linkedin.com/in/jyotirmoydotdev',
            name: 'Linkedin | Jyotirmoy Barman | @jyotirmoydotdev',
            icon: Linkedin
        },
        {
            url: 'https://www.youtube.com/@Jyotirmoydotdev',
            name: 'Youtube | Jyotirmoy Barman | @jyotirmoydotdev',
            icon: Youtube
        },
        {
            url: 'https://www.instagram.com/Jyotirmoydotdev',
            name: 'Instagram | Jyotirmoy Barman | @jyotirmoydotdev',
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
        externalUrl: "http://mymeghalaya.in",
        source: null,
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

export const video = [
    
]
