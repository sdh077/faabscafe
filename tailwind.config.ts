import type { Config } from 'tailwindcss'
const toRgba = (hexCode: string, opacity = 50) => {
   let hex = hexCode.replace('#', '');

   if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
   }

   const r = parseInt(hex.substring(0, 2), 16);
   const g = parseInt(hex.substring(2, 4), 16);
   const b = parseInt(hex.substring(4, 6), 16);

   return `rgba(${r},${g},${b},${opacity / 100})`;
};

const flattenColorPalette = (obj: any, sep = '-') => Object.assign(
   {},
   ...function _flatten(o, p = ''): any {
      return [].concat(...Object.keys(o)
         .map(k =>
            typeof o[k] === 'object' ?
               _flatten(o[k], k + sep) :
               ({ [p + k]: o[k] })
         )
      );
   }(obj)
);
const config: Config = {
   content: [
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      // './node_modules/flowbite-react/lib/**/*.js',
   ],
   theme: {
      spacing: {
         px: '1px',
         0: '0',
         0.5: '0.125rem',
         1: '0.25rem',
         1.5: '0.375rem',
         2: '0.5rem',
         2.5: '0.625rem',
         3: '0.75rem',
         3.5: '0.875rem',
         4: '1rem',
         5: '1.25rem',
         6: '1.5rem',
         7: '1.75rem',
         8: '2rem',
         9: '2.25rem',
         10: '2.5rem',
         11: '2.75rem',
         12: '3rem',
         14: '3.5rem',
         16: '4rem',
         20: '5rem',
         24: '6rem',
         28: '7rem',
         32: '8rem',
         36: '9rem',
         40: '10rem',
         44: '11rem',
         48: '12rem',
         52: '13rem',
         56: '14rem',
         60: '15rem',
         64: '16rem',
         72: '18rem',
         80: '20rem',
         96: '24rem',
      },
      fontSize: {
         base: ['1rem', { lineHeight: '1.5rem', }],
         'sm': ['0.875rem', { lineHeight: '1.25rem', }],
         'lg': ['1.125rem', { lineHeight: '1.75rem', }],
         'xs': ['0.75rem', { lineHeight: '1rem', }],
         'xl': ['1.25rem', { lineHeight: '1.75rem', }],
         '2xl': ['1.5rem', {
            lineHeight: '2rem',
            letterSpacing: '-0.01em',
            fontWeight: '700',
         }],
         '3xl': ['1.875rem', {
            lineHeight: '2.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
         }],
         '4xl': ['2.25rem', {
            lineHeight: '2.5rem',
            fontWeight: '700',
         }],
         '5xl': ['3rem', {
            lineHeight: '1',
            fontWeight: '700',
         }],
         '6xl': ['3.75rem', {
            lineHeight: '1',
            fontWeight: '700',
         }],
         '7xl': ['4.5rem', {
            lineHeight: '1',
            fontWeight: '700',
         }],
         '8xl': ['6rem', {
            lineHeight: '1',
            fontWeight: '700',
         }],
         '9xl': ['8rem', {
            lineHeight: '1',
            fontWeight: '700',
         }],
      },
      extend: {
         colors: {
            primary: {
               50: '#E7F2F6',
               100: '#CFE5ED',
               200: '#B7D8E3',
               300: '#9FCBDA',
               400: '#87BFD1',
               500: '#3E98B5',
               600: '#268BAC',
               700: '#0E7EA3',
               800: '#0A5872',
               900: '#084C62',
            },
            slate: {
               50: '#f8fafc',
               100: '#f1f5f9',
               200: '#e2e8f0',
               300: '#cbd5e1',
               400: '#94a3b8',
               500: '#64748b',
               600: '#475569',
               700: '#334155',
               800: '#1e293b',
               900: '#0f172a',
               950: '#020617',
            },
            red: {
               50: '#fef2f2',
               100: '#fee2e2',
               200: '#fecaca',
               300: '#fca5a5',
               400: '#f87171',
               500: '#ef4444',
               600: '#dc2626',
               700: '#b91c1c',
               800: '#991b1b',
               900: '#7f1d1d',
               950: '#450a0a',
            },
            Blue: {
               50: '#eff6ff',
               100: '#dbeafe',
               200: '#bfdbfe',
               300: '#93c5fd',
               400: '#60a5fa',
               500: '#3b82f6',
               600: '#2563eb',
               700: '#1d4ed8',
               800: '#1e40af',
               900: '#1e3a8a',
               950: '#172554',
            }
         },
         minWidth: {
            0: '0',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',
         },
         maxWidth: {
            '8xl': '90rem',
         },
         keyframes: {
            fadeIn: {
               '0%': { opacity: '0' },
               '100%': { opacity: '1' },
            },
         },
         animation: {
            'fade-in': 'fadeIn 200ms ease-in-out',
         },
         translate: {
            'neg-1/2': '-50%'
         }
         // backgroundImage:{
         //    'bg-stripes': 'linear-gradient(45deg, var(--stripes-color) 12.50%, transparent 12.50%, transparent 50%, var(--stripes-color) 50%, var(--stripes-color) 62.50%, transparent 62.50%, transparent 100%)'
         // }
      },
      fontFamily: {
         sans: [
            'var(--font-inter)',
            'Inter',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'Noto Sans',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'Noto Color Emoji',
         ],
         body: [
            'Inter',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'Noto Sans',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'Noto Color Emoji',
         ],
         mono: [
            'var(--font-roboto-mono)',
            'ui-monospace',
            'SFMono-Regular',
            'Menlo',
            'Monaco',
            'Consolas',
            'Liberation Mono',
            'Courier New',
            'monospace',
         ],
      },

   },
   plugins: [require('flowbite/plugin'),
   function ({ addUtilities, theme }: { addUtilities: any, theme: any }) {
      const utilities: any = {
         '.bg-stripes': {
            backgroundImage: 'linear-gradient(-45deg, var(--stripes-color) 12%, transparent 12%, transparent 50%, var(--stripes-color) 50%, var(--stripes-color) 62%, transparent 62%, transparent 100%)',
            backgroundSize: '7px 7px',
         },
      }

      const addColor = (name: string, color: string) =>
         (utilities[`.bg-stripes-${name}`] = { '--stripes-color': color })

      const colors = flattenColorPalette(theme('backgroundColor'))
      for (let name in colors) {
         try {
            const [r, g, b, a] = toRgba(colors[name])
            if (a !== undefined) {
               addColor(name, colors[name])
            } else {
               addColor(name, `rgba(${r}, ${g}, ${b}, 0.4)`)
            }
         } catch (_) {
            addColor(name, colors[name])
         }
      }

      addUtilities(utilities)
   }
   ],
}
export default config
