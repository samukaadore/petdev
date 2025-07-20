
import Image from 'next/image'
import abdutor from '../../../public/abdutor.png'
import sumo from '../../../public/sumo.png'
import { Check, MapPin } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import { MapPinAreaIcon } from '@phosphor-icons/react'

export function About() {
    return (
        <section className="bg-[#6e6e6e] py-16">
            <div className="container px-4 mx-auto">
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className='relative'>
                        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
                            <Image
                                src={sumo}
                                alt='foto dod cachorro'
                                fill
                                quality={100}
                                className='object-cover hover:scale-110 duration-300'
                                priority
                            />
                        </div>
                        <div className='absolute w-40 h-40 right-4 border-white -bottom-8 overflow-hidden border-4 rounded-lg'>
                            <Image
                                src={abdutor}
                                alt='foto dod cachorro'
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                    <div className='space-y-6 mt-10'>
                        <h2 className='text-4xl font-bold text-blue-900'>Nascimento Fitness a manutenção que move seu negocio!</h2>
                        <h2 className='text-3xl font-bold pt-5 '>SOBRE</h2>
                        <p>A NascimentoFitness é especializada em montagem e manutenção de equipamentos fitness das marcas Impulse, Total Health, Kikos e Matrix. Atuamos com profissionalismo e agilidade, oferecendo soluções completas para academias, condomínios e empresas que buscam segurança e máxima performance em seus aparelhos. Realizamos instalação, manutenção preventiva e corretiva, garantindo o funcionamento ideal dos equipamentos e a satisfação dos seus clientes. Confie na NascimentoFitness para manter sua estrutura sempre pronta para o treino.

                            </p>
                        <ul className='space-y-4'>
                            <li className='flex items-center gap-2'>
                                <Check className='text-orange-600' />
                                Mais de 3 anos de experiência.
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-orange-600' />
                                Com mais de 40 unidades atendidas.
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-orange-600' />
                                Qualidade é nossa prioridade.
                            </li>

                        </ul>
                        <div className='flex gap-2 '>
                            <a
                                href={`https://wa.me/+554896469106?text=olá vim pelo site e gostaria de mais informações`}
                                target="_blank"
                                className='bg-[#ff6600] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md  '
                            >
                                <WhatsappLogoIcon className='w-5 h-5 text-white' />
                                Contato via Whatsapp
                            </a>
                            <a
                                href=""
                                className=' flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md  '
                            >
                                
                            </a>
                        </div>



                    </div>

                </div>

            </div>
        </section>
    )
}