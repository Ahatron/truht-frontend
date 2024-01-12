import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { md3 } from 'vuetify/blueprints'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import colors from 'vuetify/lib/util/colors.mjs'
import { VCol } from 'vuetify/lib/components/index.mjs'

const theme = {
  defaultTheme: 'light',
  dark: false,
  themes: {
    light: {
      colors: {
        background: colors.grey.lighten2,
        surface: colors.grey.lighten2,
        primary: colors.indigo.darken1,
        secondary: colors.indigo.darken4,
        tertiary: colors.indigo.lighten1,
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        accent: colors.indigo.accent3,
      },
    },
    dark: {
      colors: {
        background: colors.grey.darken3,
        surface: colors.grey.darken3,
        primary: colors.indigo.lighten1,
        secondary: colors.grey.lighten3,
        tertiary: colors.grey.lighten1,

        error: colors.red.base,
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        accent: colors.indigo.accent3,
      }
    }
  },
}

const myAliases = {
  MyCol: VCol
}


export default createVuetify({
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280,
      xl: 1920,
    },
  },
  theme,
  aliases: myAliases,
  defaults: {
    vForm: {
      vBtn: { background: 'secondary', variant: 'flat' }
    },
    MyCol: {
      class: ['pa-0', 'mx-1',]
    },

  },
  blueprint: md3,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
