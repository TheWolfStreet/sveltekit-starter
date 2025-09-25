export function applyTheme(theme: string) {
	const classList = document.documentElement.classList;
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	switch (theme) {
		case 'dark':
			classList.add('dark');
			break;
		case 'light':
			classList.remove('dark');
			break;
		case 'system':
			if (prefersDark) {
				classList.add('dark');
			} else {
				classList.remove('dark');
			}
			break;
		default:
			classList.remove('dark');
			break;
	}
}
