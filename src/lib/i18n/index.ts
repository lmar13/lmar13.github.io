import { browser } from '$app/environment';
import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

// initialize translations
register('en', () => import('./locales/en.json'));
register('pl-PL', () => import('./locales/pl.json'));

const defaultLocale = 'en';

init({
	fallbackLocale: 'en',
	initialLocale: browser ? getLocaleFromNavigator() : defaultLocale
});
