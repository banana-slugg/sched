const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            gridTemplateRows: {
                9: "repeat(9, minmax(0, 1fr))",
            },
            gridRow: {
                "span-9": "span 9 / span 9",
            },
            gridRowStart: {
                8: "8",
            },
            colors: {
                "my-darkest": "#2E3440",
                "my-more-darker": "#3B4252",
                "my-darker": "#434C5E",
                "my-dark": "#4C566A",

                "my-whitest": "#ECEFF4",
                "my-whiter": "#E5E9F0",
                "my-white": "#D8DEE9",

                "my-cyan": "#8FBCBB",
                "my-purple": "#88C0D0",
                "my-blue": "#5E81AC",
                "my-red": "#BF616A",
                "my-orange": "#D08770",
                "my-yellow": "#EBCB8B",
                "my-green": "#A3BE8C",
                "my-pink": "#B48EAD",
            },
        },
    },

    plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

module.exports = config;
