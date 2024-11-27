import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <>
      <main>
        <h1 className=" h1-bold">Welcome to the world of next.js</h1>
        <h2>Please make this look better</h2>
        <h2>Hmmm will this work</h2>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </main>

      <main>
        <h1 className=" h1-bold font-space-grotesk text-primary-500">
          Welcome to the world of next.js (INTER)
        </h1>
        <h2>Please make this look better</h2>
        <h2>Hmmm will this work</h2>
      </main>
    </>
  );
}
