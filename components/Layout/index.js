import React from 'react'
import Footer from '../Footer'

export default function Layout({ children }) {
    return (
        <main className="mx-auto min-h-full">
            <main className="bg-white dark:bg-navy flex flex-col">
                {children}
            </main>
            <Footer />
        </main>
    )
}