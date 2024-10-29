import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <div className="flex size-full flex-col gap-y-5 p-5">
      <div>Hello 👋 </div>
      <div>
        <Button variant="destructive" size="lg">
          Click me
        </Button>
      </div>
    </div>
  );
}
