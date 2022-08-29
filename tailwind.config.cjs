const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            colors: {
                dracbg: "#282a36",
                dracfg: "#f8f8f2",
                comment: "#6272a4",
                cyan: {
                    dark: "#67e1fb",
                    DEFAULT: "#8be9fd",
                },
                green: {
                    dark: "#2df760",
                    DEFAULT: "#50fa7b",
                },
                orange: {
                    dark: "#fda648",
                    DEFAULT: "#ffb86c",
                },
                pink: {
                    dark: "#fd55b6",
                    DEFAULT: "#ff79c6",
                },
                purple: {
                    dark: "#a771f6",
                    DEFAULT: "#bd93f9",
                },
                red: {
                    dark: "#fd3131",
                    DEFAULT: "#ff5555",
                },
                yellow: {
                    dark: "#ebf769",
                    DEFAULT: "#f1fa8c",
                },
            },
        },
    },

    plugins: [require("daisyui")],
};

module.exports = config;
