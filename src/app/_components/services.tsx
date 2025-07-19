"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight,  Hotel, Clock, BrushCleaning, Wrench, SplineIcon 

  } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react"

const services = [
    {
        title: "Montagem ",
        description: "inclui montagem do aparelho, ajustes e a Lubrificação ",
        duration: "1D",
        price: "$2.500",
        icon: <Wrench />,
        linkText: 'olá, vi no site sobre a Montagenm e gostaria de mais informações.'
    },
    {
        title: "Manutenção preventiva e lubrificação ",
        description: "Feito toda a limpeza dos equipamentos (Bateria - Peso Livre - esteiras - spinning) . logo após a Limpeza os aparelhos são lubrificados e ajustados .",
        duration: "2H",
        price: "$400",
        icon: <BrushCleaning />,
        linkText: 'olá, vi no site sobre Manutenção preventiva e lubrificação e gostaria de mais informações.'
    },
    {
        title: "Desmontagem",
        description: "Inclui a desmontagem do aparelho seja ela 100% ou parcial.",
        duration: "1D",
        price: "$2.500",
        icon: <Wrench />,
        linkText: 'olá, vi no site sobre a desmontagem e gostaria de mais informações.'
    },
    {
        title: "Eletronicos",
        description: "Concertos e reparos de eletronicos (placas, inversores etc...).",
        duration: "2H",
        price: "$450",
        icon: <SplineIcon />,
        linkText: 'olá, vi no site sobre reparos eletronicos e gostaria de mais informações.'
    },
]




export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }



    })


    function scrollPrev() {
        emblaApi?.scrollPrev();
    }
    function scrollnext() {
        emblaApi?.scrollNext();
    }


    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 ">

                <h2 className="text-4xl font-bold mb-12">Serviços</h2>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#000274] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">
                                            <div className="flex gap-4">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl mb-1 my-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className=" border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>
                                            <a
                                                href={`https://wa.me/5548996469106?text=olá vim pelo site e gostaria de mais informações sobre ${item.title}`}
                                                target="_blank"
                                                className="flex justify-center items-center gap-2 hover:bg-orange-500 px-4 py-1 rounded-md duration-300  "
                                            >
                                                <WhatsappLogoIcon className="w-4 h-4" />
                                                Entrar em contato

                                            </a>
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