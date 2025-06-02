import premier from "../../../public/primier.png"
import royal from "../../../public/royal.png"
import whiskas from "../../../public/whiskas.png"
import golden from "../../../public/golden.png"
import natural from "../../../public/natural.png"
import Image from "next/image"
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr"
const brands = [
    {name: "Royal Canin", logo: royal},
    {name: "Golden", logo: golden},
    {name: "Premier", logo: premier},
    {name: "Formula natural", logo: natural},
    {name: "Whiskas", logo: whiskas},
    {name: "Golden", logo: golden},
]
export function Footer(){
    return(
        <section className="bg-[#e84c3d] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-8">
                <h4 className="text-3xl font-semibold mb-8 text-center ">Mrcas que trabalhamos</h4>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                    {brands.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center ">
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
                        <h3 className="text-2xl font-semibold mb-2">Pet shop Dev</h3>
                        <p className="mb-4">Cuidando do seu amigo com amor e dedicação</p>
                        <a href="#"
                        className="bg-green-500 px-4 py-2 rounded-md"
                        >
                            Contato via whatsapp 
                        </a>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
                        <p>Email: Email@teste.com</p>
                        <p>Telefone: (48) 99985-0058</p>
                        <p>Rua x, centro, Florianopolis | SC </p>

                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
                        <div className="flex gap-4">
                            <a href="#" target="_blank"><FacebookLogoIcon className="w-8 h-8"/></a>
                            <a href="#" target="_blank"><InstagramLogoIcon className="w-8 h-8"/></a>
                            <a href="#" target="_blank"><YoutubeLogoIcon className="w-8 h-8"/></a>

                        </div>

                    </div>

                </footer>

            </div>

        </section>
    )
}