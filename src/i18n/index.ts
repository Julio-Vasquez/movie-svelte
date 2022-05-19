import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n'

import EN from './resources/EN.json'
import ES from './resources/ES.json'
addMessages('en', EN)
addMessages('es', ES)

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
})
