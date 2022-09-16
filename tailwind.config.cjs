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
                "my-darkest": "#0d1117",
                "my-darker": "#161b22",
                "my-dark": "#30363d",

                "my-gray": "#8b949e",
                "my-white": "#c9d1d9",

                "my-course": "#2e3440",
                "my-course-hov":"#3d4051",

                "my-cyan": "#81c8be",
                "my-purple": "#ca9ee6",
                "my-blue": "#85c1dc",
                "my-red": "#e78284",
                "my-orange": "#ef9f76",
                "my-yellow": "#e5c890",
                "my-green": "#a6d189",
                "my-pink": "#f4b8e4",
            },
        },
    },

    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [],
      },
};

module.exports = config;
