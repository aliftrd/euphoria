import Head from 'next/head'
import { Card, Footer } from '../components'

export default function Home() {
  return (
    <>
    <Head>
        <title>Euphoria - Home</title>
    </Head>
    <main className="my-0 mx-auto min-h-full">
        <main id="home-page" className="relative flex flex-col">
            <div className="flex flex-col items-center">
                <div className="relative mt-10">
                    <img alt="Gambar boz" src="/images/profile.jpg" className="absolute top-2 left-2 w-32 h-32 rounded-full z-10" />
                    <img alt="Gambar boz" src="/images/profile.jpg" className="w-36 h-36 rounded-full filter blur-lg z-0" />
                </div>
                <div className="text-center p-4">
                    <h1 className="text-navy font-bold text-2xl">ALIF TRIADI</h1>
                    <p className="text-egg">Junior Developer</p>
                </div>
            </div>
            <Card 
                title="ABOUT ME"
                description="Hello!! With all due respect, let me introduce myself. My name is Alif Triadi. I'm 19 y.o freshman at State Polytechnic of Jember and currently studying Informatics Engineering."
            />
        </main>
        <Footer />
    </main>
    </>
  )
}
