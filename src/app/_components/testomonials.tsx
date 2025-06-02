"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react"
import tutor1 from '../../../public/depositphotos_190984684-stock-photo-portrait-beautiful-man.jpg'
import tutor2 from '../../../public/tutor1.png'
import tutor3 from '../../../public/pessoa-de-origem-indiana-se-divertindo_23-2150285283.avif'
import Image from "next/image"

const testomonials = [
    {
        content: "Sempre levo meu cachorro no Petdev e o atendimento é incrível! A equipe trata os pets com muito carinho e atenção. Dá pra ver que realmente amam o que fazem!",
        author: "samuel mendes",
        role: "Tutor do thor (pitbull)",
        image: tutor1
    },
    {
        content: "O banho e tosa do  é o melhor da região! Meu cachorro sai sempre limpinho, cheiroso e bem tratado. Recomendo de olhos fechados!",
        author: "Luana Nasimento",
        role: "Tutora do bob  (golden)",
        image: tutor3
    },
    {
        content: "Deixo meu pet no [Nome do Petshop] com total confiança. Já usei hotelzinho, banho, consulta... tudo perfeito! Atendimento humano e amor pelos animais.!",
        author: "gabriel Nasicmento",
        role: "Tutor do frank (Husky siberiano)",
        image: tutor2
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
        <section className="bg-[#ffd449] py-16">
            <div className="container mx-auto px-4 ">

                <h2 className="text-4xl text-center font-bold mb-12">Depoimentos dos nossos clientes</h2>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testomonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0  px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-24 h-24">
                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes='96px'
                                                    className="object-cover rounded-full"



                                                />

                                            </div>
                                            <p className="text-gray=200">{item.content}</p>
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