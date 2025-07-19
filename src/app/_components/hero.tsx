import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import nascimentofit from '../../../public/brand nasicmento fit.png'
import Image from "next/image"
import catImg from "../../../public/cat-hero.png"
export function Hero(){
    return(
        <section className="bg-[#000274] text-white relative overflow-hidden">
                                <div>
                        <Image

                          src={nascimentofit}
                          alt="foto do cachorro"
                          fill
                          sizes="100vw"
                          priority
                          className="object-cover opacity-60 lg:hidden"
                          
                          
                        
                        />
                        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
                    </div>
            <div className="container mx-auto pt-16 pb-16 md:pb-0 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    <div className="space-y-6">
                        <h1  className="text-3xl font-bold md:text-4xl lg:font-bold leading-10">
                            Sua academia merece um cuidado especial!
                        </h1>
                        <p className="lg:text-lg">
                            Oferecemos os melhores serviços para garantir o funcionamento da sua academia.
                        </p>
                        <div>
                            <a href={`https://wa.me/+554896469106?text=olá vim pelo site e gostaria de mais informações`} 
                            target="_blank"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                            >
                                <WhatsappLogoIcon className="w-5 h-5"/>
                                Contato via whatsapp
                            </a>
                        </div>
                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 mr-1 rounded-md">%5 </b>
                                de desconto na primeiro atendimento!
                            </p>
                            <div className="flex mt-4">
                                <div className="w-32 hidden lg:block">
                                    

                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block h-full relative">
                        <Image
                          src={nascimentofit}
                          alt="foto do dog"
                          className="object-contain"
                          fill
                          sizes="(max-width: 768px) 0vw 50vw"
                          quality={100}
                          priority
                        
                        />
                    </div>
                </article>
            </div>

        </section>
    
    )

}