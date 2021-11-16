import React from 'react'
import Footer from '../Footer'

export default function Layout({ children }) {
    return (
        <div className="max-w-screen-sm my-0 mx-auto min-h-full">
            <main className="relative flex flex-col">
                {children}
                <Footer />
            </main>
        </div>
    )
}