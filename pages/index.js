import Head from 'next/head'
import { Layout, Card } from '../components'

export default function Home() {
    const imagePath = "https://avatars.githubusercontent.com/u/27538077?s=400&u=e6dc9000c2bb3314440787b1309cddc395a4feeb&v=4";
    const skills = [
        {
            icon: 'devicon-php-plain colored',
            title: 'PHP',
            years: '3 years'
        },
        {
            icon: 'devicon-mysql-plain colored',
            title: 'MySQL',
            years: '3 years'
        },
        {
            icon: 'devicon-laravel-plain-wordmark colored',
            title: 'Laravel',
            years: '2 years'
        },
        {
            icon: 'devicon-css3-plain colored',
            title: 'CSS3',
            years: '2 years'
        },
        {
            icon: 'devicon-nodejs-plain colored',
            title: 'NodeJS',
            years: '8 months'
        },
        {
            icon: 'devicon-tailwindcss-original-wordmark colored',
            title: 'TailwindCSS',
            years: '3 months'
        },
    ]
    return (
        <>
            <Head>
                <title>Euphoria - Home</title>
            </Head>
            <Layout>
                <div className="flex flex-col items-center">
                    <div className="relative mt-10">
                        <img alt="Gambar boz" src={imagePath} className="absolute top-2 left-2 w-32 h-32 rounded-full z-10" />
                        <img alt="Gambar boz" src={imagePath} className="w-36 h-36 rounded-full filter blur-lg z-0" />
                    </div>
                    <div className="text-center p-4">
                        <h1 className="text-navy font-bold text-2xl">ALIF TRIADI</h1>
                        <p className="text-egg">Junior Developer</p>
                    </div>
                </div>
                <Card 
                    title="ABOUT ME"
                    description={
                        <p className="leading-relaxed">
                            Hello!! With all due respect, let me introduce myself. My name is Alif Triadi. I'm 19 y.o freshman at State Polytechnic of Jember and currently studying Informatics Engineering.
                        </p>
                    }
                />
                <Card 
                    className="pb-4"
                    title="MY SKILLS"
                    description={
                        <ul>
                            {skills.map((skill) => {
                                return (
                                    <li className="pt-2">
                                        <div className="flex flex-row">
                                            <i class={`text-5xl ${skill.icon}`}></i>
                                            <div className="ml-3">
                                                <h6 className="text-sm font-semibold">{skill.title}</h6>
                                                <p className="text-xs">{skill.years} of experience</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                />
            </Layout>
        </>
    )
}
