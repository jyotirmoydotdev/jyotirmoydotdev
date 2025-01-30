import * as React from "react";
// import localFont from "next/font/local";

interface EmailTemplateProps {
    email: string;
}

// const baloo = localFont({
//     src: '../fonts/Baloo2-VariableFont_wght.ttf',
//     weight: '800',
//     display: 'swap',
// })

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    email,
}) => (
    <div style={{ maxWidth: "28rem", width: "100%", margin: "0 auto", padding: "1rem" }}>
        <div style={{ marginBottom: "2rem", fontSize: "1.875rem", fontWeight: "800", fontFamily: "monospace" }}>
            Jyotirmoy.dev
        </div>
        <p style={{ margin: "2rem 0" }}>
            Thanks {email} for subscribing to The Weekly Dev Dispatch! I'm excited to share my journey with you.
        </p>
        <p style={{ margin: "2rem 0" }}>Every week, you'll receive:</p>
        <ol style={{ margin: "2rem 0", paddingLeft: "1rem", listStyleType: "disc" }}>
            <li>New backend development articles and insights from my personal blog 📝</li>
            <li>Latest YouTube tutorials and code-along videos on backend technologies 🎥</li>
            <li>Updates on my current projects and what I'm building 🚀</li>
        </ol>
        <p style={{ margin: "1rem 0" }}>
            Happy coding,<br />
            Jyotirmoy
        </p>
        <p style={{ margin: "1rem 0" }}>
            P.S. To ensure you don't miss any updates, please add{" "}
            <a style={{ color: "#3b82f6" }} href="mailto:newsletter@jyotirmoy.dev">
                newsletter@jyotirmoy.dev
            </a>{" "}
            to your safe sender list.
        </p>
    </div>
);

export default EmailTemplate;