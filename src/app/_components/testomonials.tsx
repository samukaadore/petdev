"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react"
import academiafinalizadatotal from '../../../public/acemia montada total.jpg'
import supinodeclinadomontado from '../../../public/supinodecline montado.jpg'
import supinodeclinadodemontado from '../../../public/supinodeclinado desmontado.jpg'
import academiafinalizaimpulse from '../../../public/academia impulse.jpg'
import abdutor from '../../../public/abdutoramontada.jpg'
import sumomontado from '../../../public/sumo montado.jpg'
import esteiralimpa from '../../../public/esterira aberta.jpg'
import sumodesmontado from '../../../public/sumodesmontado.jpg'
import Image from "next/image"

const testomonials = [
    {
        author: "Academia finalizada",
        role: "Total health",
        image: academiafinalizadatotal
    },
        {
        author: "Academia finalizada ",
        role: "Impulse ",
        image: academiafinalizaimpulse
    },
    {
        author: "Preventiva",
        role: "Esteira sendo limpa",
        image: esteiralimpa
    },
    {
        author: "Sumo ",
        role: "sumo sendo montado",
        image: sumodesmontado
    },

    {
        author: "Sumo ",
        role: "Sumo finalizado",
        image: sumomontado
    },
    {
        author: "Supino ",
        role: "Supino sendo finalizado",
        image: supinodeclinadodemontado
    },
    {
        author: "Supino ",
        role: "Supino finalizado",
        image: supinodeclinadomontado
    },
    {
        author: "abdutor ",
        role: "abdutor finalizado",
        image: abdutor
    },

]




export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    })


    function scrollPrev() {
        emblaApi?.scrollPrev();
    }
    function scrollnext() {
        emblaApi?.scrollNext();
    }


    return (
        <section className="bg-[#6e6e6e] py-16">
            <div className="container mx-auto px-4 ">

                <h2 className="text-4xl text-center font-bold mb-12">Fotos de nossos Serviços</h2>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testomonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0  px-3">
                                    <article className="bg-[#000274] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-80 h-50">
                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes='' 
                                                    className="object-cover rounded-2xl"
 


                                                />

                                            </div>
                                            
                                            <div>
                                                <p className="font-bold">{item.author}</p>
                                                <p className="tex-sm text-gray-400">{item.role}</p>
                                            </div>


                                        </div>


                                    </article>

                                </div>

                            ))}
                            =
                        </div>

                    </div>
                    <button className=" bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute lef-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollPrev}

                    >
                        <ChevronLeft
                            className="w-6 h-6 text-gray-600 "
                        />
                    </button>
                    <button className=" bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollnext}

                    >
                        <ChevronRight
                            className="w-6 h-6 text-gray-600 "
                        />
                    </button>

                </div>


            </div>

        </section>

    )
}