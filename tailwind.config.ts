import type { Config } from 'tailwindcss';

const config: Config = {
    plugins: [
        require('@tailwindcss/typography'),
    ],
} satisfies Config;

export default config;