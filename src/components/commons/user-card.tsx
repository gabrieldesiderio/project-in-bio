import Image from "next/image";
import { Github, Instagram, Linkedin, Plus, Twitter } from 'lucide-react'
import { Button } from "../ui/button";

export function UserCard() {
  const icons = [
    Github, Instagram, Linkedin, Twitter, Plus
  ]

  return <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
    <div className="size-48">
      <Image className="rounded-full object-cover object-top w-full h-full" src="/me.jpeg" width={349} height={496} alt="" />
    </div>
    <div className="flex flex-col gap-2 w-full text-center">
      <div className="items items-center gap-2">
        <h3 className="text-3xl font-bold min-w-0 overflow-hidden">Gabs Dev</h3>
      </div>
      <div className="opacity-40">&quot;Eu faço produtos para a Internet&quot;</div>
    </div>
    <div className="flex flex-col gap-2 w-full">
      <span className="uppercase text-xs font-medium text-center opacity-80 tracking-wide">Links</span>
      <div className="flex justify-center gap-3">
        {icons.map((Icon, i) => (
          <button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]" key={i}>
            <Icon />
          </button>
        ))}
      </div>
    </div>
      <div className="flex flex-col gap-3 w-full h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          <Button className="w-full">Template Saas - Compre Agora</Button>
          <button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
            <Plus />
          </button>
        </div>
      </div>
  </div>
}