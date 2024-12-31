import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SidebarInput } from "@/components/ui/sidebar"
import { useState } from "react";

export function SidebarOptInForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true)
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setEmail("");
      } else {
        setMessage(data.error || "Subscription failed.");
      }
    } catch (error) {
        setMessage("An unexpected error occurred. Please try again.");
        console.log(error)
    } finally {
        setLoading(false)
    }
  };

  return (
    <Card className="shadow-none bg-inherit">
      <form onSubmit={handleSubmit}>
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-sm">Subscribe to our newsletter</CardTitle>
          <CardDescription>
            Opt-in to receive updates and news.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4">
          <SidebarInput 
          type="email" 
          placeholder="Email" 
          className="bg-inherit" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
            size="sm"
            disabled={isLoading}
          >
            {isLoading?"Subscribing...":"Subscribe"}
          </Button>
          {message && <p className="text-sm text-gray-500 mt-2">{message}</p>}
        </CardContent>
      </form>
    </Card>
  )
}
