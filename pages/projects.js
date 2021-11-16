import Head from 'next/head'
import { Layout, Card } from '../components'

export default function Home() {
    return (
        <>
            <Head>
                <title>Euphoria - Projects</title>
            </Head>
            <Layout>
                <div className="text-center pt-8 pb-4">
                    <h1 className="text-navy font-bold text-2xl">UNDER</h1>
                </div>
                <Card
                    description={
                        <p className="text-center">This page under development</p>
                    }
                />
            </Layout>
        </>
    )
}
