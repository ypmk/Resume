import tailwindcss from "@tailwindcss/postcss";

const config = {
    plugins: [
        tailwindcss({
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        }),
    ],
};

export default config;
