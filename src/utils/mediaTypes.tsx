import { brakePoints } from "@/ConstantsRoot";

type TypeWidth = 576 | 992 | 1024;

const mediaQueryMax = (width: TypeWidth): string => `@media screen and (max-width: ${width - 1}px)`;

export const media = {
	mobile: mediaQueryMax(brakePoints.MOBILE),
	tablet: mediaQueryMax(brakePoints.TABLET),
	desktop: mediaQueryMax(brakePoints.DESKTOP),
};