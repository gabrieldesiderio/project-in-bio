import { Button } from "@/components/ui/button";

export function Hero() {
  return <section className="flex">
    <div className="w-full flex flex-col gap-2 mt-[35vh]">
      <h1 className="text-5xl font-bold text-white leading-[64px]">
        Seus projetos e redes sociais em um único link
      </h1>
      <h2 className="text-xl leading-6">
        Crie sua própria página de projetos e compartilhe eles com o mundo.
        <br />
        Acompanhe o engajamento com Analytics de cliques
      </h2>
      <div className="flex items-center gap-2 w-full mt-[10vh]">
        <span className="text-white text-xl">projectinbio.com</span>
        <input type="text" />
        <Button>Criar agora</Button>
      </div>
    </div>
    <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%, #4B2DBB, transparent_55%)]">
      <div className="relative">
        <div className="absolute -bottom-[7%] -right-[45%]">a</div>
        <div className="absolute top-[20%] -left-[45%] -z-10">b</div>
        <div className="absolute -top-[5%] -left-[55%] -z-10">c</div>
      </div>
    </div>
  </section>
}