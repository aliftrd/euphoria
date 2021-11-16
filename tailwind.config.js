module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            container: {
                center: 'true',
                padding: '1rem'
            },
            colors: {
                "navy": '#161E54',
                "egg": '#FAAD80',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}