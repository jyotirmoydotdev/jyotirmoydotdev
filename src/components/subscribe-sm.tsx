import { Button } from "@/components/ui/button"
import { SidebarInput, SidebarMenu } from "@/components/ui/sidebar"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react";

export function SubscribeSm() {
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
        <form onSubmit={handleSubmit}>
            <SidebarMenu className=''>
                <div className="flex gap-2 rounded-none sm:rounded-lg border text-card-foreground shadow p-4  items-center justify-between bg-sidebar">
                    <SidebarInput
                        type='email'
                        placeholder='Enter Email'
                        className='bg-muted border-muted-foreground/50 dark:text-orange-100 text-orange-800'
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </SidebarInput>
                    <Button
                        type="submit"
                        variant={'outline'}
                        size="sm"
                        className='transition-colors font-bold shadow-none bg-muted text-orange-900 dark:text-orange-100 border border-muted-foreground/50'
                        disabled={isLoading}
                    >
                        {isLoading ? "Subscribing..." : "Subscribe"}
                    </Button>
                </div>
            </SidebarMenu>
        </form>
    )
}
