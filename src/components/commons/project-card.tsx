import Image from "next/image";

export function ProjectCard() {
  return <div className="w-[340px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
    <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
      <Image src="/project1.jpg" alt="Project" className="w-full h-full object-cover" width={97} height={109} />
    </div>
    <div className="flex flex-col gap-2">
      <span className="uppercase text-xs font-bold text-accent-green">
        10 Cliques
      </span>
      <div className="flex flex-col">
        <span className="text-white font-bold">Projeto 1</span>
        <span className="text-content-body text-sm">Descrição super detalhada do que o projeto faz</span>
      </div>
    </div>
  </div>
}