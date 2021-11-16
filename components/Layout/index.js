import React from 'react'
import Footer from '../Footer'

export default function Layout({ children }) {
    return (
        <main className="my-0 mx-auto min-h-full">
            <main className="relative flex flex-col">
                {children}
            </main>
            <Footer />
        </main>
    )
}