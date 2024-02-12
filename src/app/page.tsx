import { DarkModeToggle } from "@/components/dark-mode-toggle";

export default function Home() {
  return (
    <main className="relative container flex min-h-screen flex-col">
      <div className="p-4 flex h-14 items-center justify-between supports-backdrop-blur:bg-background">
        <span className="font-bold">PDF Chat</span>
        <DarkModeToggle />
      </div>
    </main>
  );
}
