import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SidebarInput } from "@/components/ui/sidebar"
import { MailCheck } from "lucide-react";
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
    <Card className="bg-orange-500 rounded-none sm:rounded-lg">
      <form onSubmit={handleSubmit}>
        <CardHeader className="p-4 pb-0">
          <div className=" text-orange-100 text-sm sm:text-base font-semibold flex gap-2 items-center">
            <MailCheck className=" size-5"/>
            <span>
            Newsletter
            </span>
          </div>
          <CardTitle className="text-lg sm:text-2xl text-white">Subscribe for Weekly Updates!</CardTitle>
          <CardDescription className="text-white">
            Get weekly updates on the latest backend blogs, project updates, and videos - delivered straight to your inbox!
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4 relative">
          <div className="flex gap-2 items-center">
          <SidebarInput 
          type="email" 
          placeholder="Email" 
          className=" bg-orange-200 border-orange-300 text-orange-800 " 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-orange-200 hover:bg-orange-300 transition-colors text-orange-800 font-bold shadow-none"
            variant={'default'}
            size="sm"
            disabled={isLoading}
          >
            {isLoading?"Subscribing...":"Subscribe"}
          </Button>
          </div>
          {message && <p className="text-sm sm:absolute -bottom-3 left-4 text-orange-100 mt-1">{message}</p>}
        </CardContent>
      </form>
    </Card>
  )
}
