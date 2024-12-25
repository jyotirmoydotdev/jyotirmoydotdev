import { File, Folder, Github, Linkedin, Twitter, User2Icon } from "lucide-react"

export const about = [
    {
        title : "About",
        url: "/"
    },
    {
        title : "Experiences (2)",
        url: "/#experiences"
    },
    {
        title : "Projects (3)",
        url: "/#projects"
    },
    {
        title : "Educations (2)",
        url: "/#educations"
    }
]

export const projects = [
    {
        icon: null,
        title: "MyMeghalaya",
        description: "MyMeghalaya is a website I created to showcase the rich culture and natural beauty of my homeland to the world, inviting everyone to witness its splendor firsthand.",
        url: "/projects/mymeghalaya",
        externalUrl: "http://mymeghalaya.in",
        source: null,
        tags: ["Nextjs", "Supabase", "Vercel", "Resend"],
    },
    {
        icon: null,
        title: "Openfy",
        description: "Openfy is a self-hosted e-commerce platform built with Go and Gin, providing a flexible and customizable solution for managing products and handling user authentication.",
        url: "/projects/openfy",
        externalUrl: null,
        source: "https://github.com/jyotirmoydotdev/openfy",
        tags: ["Go", "Gin", "Pocketbase", "Docker"],
    },
    {
        icon: null,
        title: "Blog App",
        description: "Blog application built with Next.js and MongoDB. The app includes a dashboard for managing posts and viewing a list of subscribers.",
        url: "/projects/blog-app",
        externalUrl: null,
        source: "https://github.com/jyotirmoydotdev/blog-app",
        tags: ["Nextjs", "MongoDB", "Vercel"]
    }
]

export const blogs = [
    {
        cover: null,
        title : "Building a JSON Validation Pipeline with Go and Gin",
        description: "Imagine a scenario where we're transmitting crucial data from our website to a database. However, before this information is stored",
        url: "/blogs/building-a-json-validation-pipeline-with-go-and-gin",
        readTime: "6 min read",
        date: "Aug 19, 2023"
    }
]

export const sidebar_data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    links: [
        {
            url: 'https://github.com/jyotirmoydotdev',
            name: 'Github | Jyotirmoy Barman | @jyotirmoydotdev',
            icon: Github
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
        }
    ],
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
        }
    ],
    mails: [
        {
            name: "William Smith",
            email: "williamsmith@example.com",
            subject: "Meeting Tomorrow",
            date: "09:34 AM",
            teaser:
                "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
        },
        {
            name: "Alice Smith",
            email: "alicesmith@example.com",
            subject: "Re: Project Update",
            date: "Yesterday",
            teaser:
                "Thanks for the update. The progress looks great so far.\nLet's schedule a call to discuss the next steps.",
        },
        {
            name: "Bob Johnson",
            email: "bobjohnson@example.com",
            subject: "Weekend Plans",
            date: "2 days ago",
            teaser:
                "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
        },
        {
            name: "Emily Davis",
            email: "emilydavis@example.com",
            subject: "Re: Question about Budget",
            date: "2 days ago",
            teaser:
                "I've reviewed the budget numbers you sent over.\nCan we set up a quick call to discuss some potential adjustments?",
        },
        {
            name: "Michael Wilson",
            email: "michaelwilson@example.com",
            subject: "Important Announcement",
            date: "1 week ago",
            teaser:
                "Please join us for an all-hands meeting this Friday at 3 PM.\nWe have some exciting news to share about the company's future.",
        },
        {
            name: "Sarah Brown",
            email: "sarahbrown@example.com",
            subject: "Re: Feedback on Proposal",
            date: "1 week ago",
            teaser:
                "Thank you for sending over the proposal. I've reviewed it and have some thoughts.\nCould we schedule a meeting to discuss my feedback in detail?",
        },
        {
            name: "David Lee",
            email: "davidlee@example.com",
            subject: "New Project Idea",
            date: "1 week ago",
            teaser:
                "I've been brainstorming and came up with an interesting project concept.\nDo you have time this week to discuss its potential impact and feasibility?",
        },
        {
            name: "Olivia Wilson",
            email: "oliviawilson@example.com",
            subject: "Vacation Plans",
            date: "1 week ago",
            teaser:
                "Just a heads up that I'll be taking a two-week vacation next month.\nI'll make sure all my projects are up to date before I leave.",
        },
        {
            name: "James Martin",
            email: "jamesmartin@example.com",
            subject: "Re: Conference Registration",
            date: "1 week ago",
            teaser:
                "I've completed the registration for the upcoming tech conference.\nLet me know if you need any additional information from my end.",
        },
        {
            name: "Sophia White",
            email: "sophiawhite@example.com",
            subject: "Team Dinner",
            date: "1 week ago",
            teaser:
                "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
        },
    ],
}