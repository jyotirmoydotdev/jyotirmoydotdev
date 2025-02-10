import { Button } from "@/components/ui/button"
import { SidebarInput } from "@/components/ui/sidebar"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils";
import { MailCheck } from "lucide-react";
import { useState } from "react";

export function SidebarOptInForm({variant = "defalut"}:{variant?:("defalut"| "dark")}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Please enter a valid email address.");
  const [isLoading, setLoading] = useState(false);
  const { toast } = useToast()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!email) {
      setMessage("Please enter a valid email address.");
      toast({
        description: message,
      })
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
        toast({
          description: message,
        })
        setEmail("");
      } else {
        setMessage(data.error || "Subscription failed.");
        toast({
          description: message,
        })
      }
    } catch (error) {
      setMessage("An unexpected error occurred. Please try again.");
      toast({
        description: message,
      })
      console.log(error)
    } finally {
      setLoading(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn(" rounded-none sm:rounded-lg border text-card-foreground shadow p-4 pb-0 flex flex-col space-y-1.5 justify-between", 
      variant == "dark" ? 
      " bg-sidebar" : "bg-orange-500"
    )}>
      <div className={cn("text-sm sm:text-base font-semibold flex gap-2 items-center",
              variant == "dark" ? 
              "text-orange-500" : "text-orange-100 "
      )}>
        <MailCheck className="size-5" />
        <span>
          Newsletter
        </span>
      </div>
      <div className={cn("text-lg sm:text-2xl text-white font-extrabold leading-none tracking-tight",
        variant == "dark" ? 
        "dark:text-white text-gray-600" : "text-white "
      )}>Subscribe for Weekly Updates!</div>
      <div className={cn(" text-sm text-muted-foreground",
        variant == "dark" ? 
        "dark:text-white text-gray-600" : "text-white "
      )}>
        Get weekly updates on the latest backend blogs, project updates, and videos - delivered straight to your inbox!
      </div>
      <div className="flex gap-2 items-center py-4 ">
        <SidebarInput
          type="email"
          placeholder="Email"
          className={cn( 
             variant == "dark" ? 
            "bg-muted border-muted-foreground/50 dark:text-orange-100 text-orange-800" : "bg-orange-200 border-orange-300 text-orange-800"
          )}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          className={cn("transition-colors font-bold shadow-none",
            variant == "dark" ? 
            "bg-muted text-orange-900 dark:text-orange-100 border border-muted-foreground/50" : "bg-orange-200 hover:bg-orange-300 text-orange-800 "
          )}
          variant={'default'}
          size="sm"
          disabled={isLoading}
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
    </form>
  )
}
