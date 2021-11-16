import Head from 'next/head'
import { Layout, Card } from '../components'

export default function Home() {
    const achievements = [
        { title: '1st Place South East Asia Creative Camp SEAMEO 2019 Smart School' },
        { title: '5th Place at LKS Wilayah Kerja 2 Provinsi Jawa Timur 2019 Web Technologies' },
    ]
    return (
        <>
            <Head>
                <title>Euphoria - Achievements</title>
            </Head>
            <Layout>
                <div className="text-center pt-8 pb-4">
                    <h1 className="text-navy font-bold text-2xl">ACHIEVEMENTS</h1>
                </div>
                <Card
                    description={
                        <ul className="px-4 pt-4">
                            {achievements.map((achievement) => {
                                return (
                                    <li className="flex flex-row my-1">
                                        <span className="inline-block text-md">🏆</span>
                                        <p className="ml-2">{achievement.title}</p>
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
