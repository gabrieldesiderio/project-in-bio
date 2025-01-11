import { Header } from "@/components/landing-page/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket } from "lucide-react";

export default function Create() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">EScolha seu link</h1>
          <Rocket className="size-10" />
        </div>
        <form action="" className="w-full flex items-center gap-2">
          <span className="text-white">projectin.bio.com/</span>
          <Input />
          <Button className="w-[126px]">Criar</Button>
        </form>
        <div>
          <span className="text-accent-pink">Erro de exemplo</span>
        </div>
      </div>
    </div>
  );
}
