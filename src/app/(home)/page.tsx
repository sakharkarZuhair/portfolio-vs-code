import { Typography } from "@/components/typography/Typography";
import Description from "./_components/Description";
import SnakeGame from "./_components/SnakeGame";

export default function Home() {
  return (
    <main className="text-white flex flex-row items-center justify-between m-auto max-w-[1200px] h-[100%] w-full gap-16">
      <Description />
      <SnakeGame />
    </main>
  );
}
