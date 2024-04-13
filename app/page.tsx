import Image from "next/image";
import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Counter />
    </main>
  );
}
