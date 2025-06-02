
import Image from 'next/image'
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import { MapPinAreaIcon } from '@phosphor-icons/react'

export function About() {
    return (
        <section className="bg-[#fdf6ec] py-16">
            <div className="container px-4 mx-auto">
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className='relative'>
                        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
                            <Image
                                src={about1Img}
                                alt='foto dod cachorro'
                                fill
                                quality={100}
                                className='object-cover hover:scale-110 duration-300'
                                priority
                            />
                        </div>
                        <div className='absolute w-40 h-40 right-4 border-white -bottom-8 overflow-hidden border-4 rounded-lg'>
                            <Image
                                src={about2Img}
                                alt='foto dod cachorro'
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                    <div className='space-y-6 mt-10'>
                        <h2 className='text-4xl font-bold '>SOBRE</h2>
                        <p>Somos um pet shop dedicado ao bem-estar e cuidado completo dos animais de estimação. Oferecemos uma ampla variedade de produtos e serviços, incluindo banho e tosa, consultas veterinárias, vacinas, rações, acessórios, brinquedos e muito mais. Nosso compromisso é proporcionar saúde, conforto e felicidade para os pets, além de conveniência e confiança para seus tutores.

                            Contamos com uma equipe apaixonada por animais, treinada para oferecer um atendimento personalizado, atencioso e de alta qualidade. Trabalhamos com as melhores marcas do mercado e seguimos rigorosos padrões de higiene e segurança.

                            Nosso objetivo é ser referência em cuidado animal, promovendo uma relação de carinho, respeito e confiança entre os pets, seus donos e nossa equipe.</p>
                        <ul className='space-y-4'>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-600' />
                                Aberto desde 2006
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-600' />
                                Com mais de 10.000 funcionarios
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-600' />
                                Qualidade é nossa prioridade
                            </li>

                        </ul>
                        <div className='flex gap-2 '>
                            <a
                                href={`https://wa.me/5548996469106?text=olá vim pelo site e gostaria de mais informações`}
                                target="_blank"
                                className='bg-[#e84c3d] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md  '
                            >
                                <WhatsappLogoIcon className='w-5 h-5 text-white' />
                                Contato via whatsapp
                            </a>
                            <a
                                href=""
                                className=' flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md  '
                            >
                                <MapPin className='w-5 h-5 text-black' />
                                Endereço da loja
                            </a>
                        </div>



                    </div>

                </div>

            </div>
        </section>
    )
}