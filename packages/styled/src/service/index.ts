import { EventBus } from '@primeuix/utils/eventbus';

export const getThemeServiceInstance = () => EventBus();

const ThemeService = getThemeServiceInstance();

export default ThemeService;
