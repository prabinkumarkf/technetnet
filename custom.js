const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
    "theme": {
        "colors": defaultColors + {
            "custom-yellow": {
                "500": "#eee",
            }
        },
    },
};