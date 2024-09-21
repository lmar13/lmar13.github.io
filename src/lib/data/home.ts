import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/lmar13' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/marciniaklukasz/'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'lukasz.marciniak@wp.eu'
	}
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('js', 'css', 'html', 'angular', 'vuejs', 'sass', 'svelte', 'ts');
