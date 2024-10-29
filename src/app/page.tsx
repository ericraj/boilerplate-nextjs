import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <div className="flex size-full flex-col gap-y-5 p-5">
      <div className="font-bold">Hello World 👋 </div>
      <div>
        <Button variant="destructive" size="lg">
          Click me w 10
        </Button>
      </div>
    </div>
  );
}
