import impulse from "../../../public/brand impulse.png"
import totalhelth from "../../../public/brand totalhelt.png"
import kikos from "../../../public/brand kikos.png"
import matrix from "../../../public/brand matrix.webp"

import Image from "next/image"
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr"
const brands = [
    { name: "Impulse", logo: impulse },
    { name: "Totalhelth", logo: totalhelth },
    { name: "Matrix", logo: matrix },
    { name: "Kikos", logo: kikos }

]
export function Footer() {
    return (
        <section className="bg-[#000274] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center ">Marcas que trabalhamos</h4>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {brands.map((item, index) => (
                            <div key={index} className="bg-black p-4 rounded-lg flex items-center justify-center ">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    quality={100}
                                    width={100}
                                    height={100}
                                    style={{
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    className="object-contain"

                                />
                            </div>

                        ))}
                    </div>

                </div>
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5 ">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Nascimento Fitness</h3>
                        <p className="mb-4">Cuidando da sua academia com qualidade e Confiança!</p>
                        <a href={`https://wa.me/+554896469106?text=olá vim pelo site e gostaria de mais informações`}
                            target="_blank"
                            className="bg-green-500 px-4 py-2 rounded-md"
                        >
                            Contato via whatsapp
                        </a>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
                        <p>Email: Email@teste.com</p>
                        <p>Telefone: (48) 9646-9106</p>
                        <p>centro, Florianopolis | SC </p>

                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
                        <div className="flex gap-4">
                            <a href="#" target="_blank"><FacebookLogoIcon className="w-8 h-8" /></a>
                            <a href="#" target="_blank"><InstagramLogoIcon className="w-8 h-8" /></a>
                            <a href="#" target="_blank"><YoutubeLogoIcon className="w-8 h-8" /></a>

                        </div>

                    </div>

                </footer>

            </div>

        </section>
    )
}