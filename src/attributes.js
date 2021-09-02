import {
	WRAPPER_BG,
	WRAPPER_MARGIN,
	WRAPPER_PADDING,
	WRAPPER_BORDER_SHADOW,
	TITLE_MARGIN,
	BUTTON_MARGIN,
	BUTTON_PADDING,
	BUTTON_BORDER_SHADOW,
	SLIDE_TO_SHOW,
	CUSTOM_HEIGHT,
	SLIDES_GAP,
} from "./constants/constants";
import * as TYPOGRAPHY from "./constants/typography-constant";

import {
	generateDimensionsAttributes,
	generateTypographyAttributes,
	generateBackgroundAttributes,
	generateBorderShadowAttributes,
	generateResponsiveRangeAttributes,
} from "../util/helpers";

const attributes = {
	resOption: {
		type: "string",
		default: "Desktop",
	},

	// blockId attribute for making unique className and other uniqueness
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	blockMeta: {
		type: "object",
	},
	sliderStyle: {
		type: "string",
		default: "style-1"
	},
	images: {
		type: "array",
		default: [],
	},
	sliderData: {
		type: "array",
		// source: "query",
		// selector: ".slide",
		// query: {
		// 	src: {
		// 		type: "string",
		// 		selector: "img",
		// 		source: "attribute",
		// 		attribute: "src",
		// 	},
		// 	alt: {
		// 		type: "string",
		// 		selector: "img",
		// 		source: "attribute",
		// 		attribute: "alt",
		// 	},
		// 	title: {
		// 		type: "string",
		// 		selector: "h2",
		// 		source: "text",
		// 		default: "Add header text here",
		// 	},
		// 	btnText: {
		// 		type: "string",
		// 		selector: "button",
		// 		source: "text",
		// 		default: "Add Text",
		// 	},
		// 	link: {
		// 		type: "string",
		// 		selector: "button",
		// 		source: "attribute",
		// 		attribute: "data-link",
		// 		default: "",
		// 	},
		// },
		default: [],
	},
	intensity: {
		type: "number",
		// selector: ".eb-parallax-container",
		// source: "attribute",
		// attribute: "data-intensity",
		default: 50,
	},
	startIndex: {
		type: "number",
		// selector: ".eb-parallax-container",
		// source: "attribute",
		// attribute: "data-start-index",
		default: 1,
	},
	isCustomHeight: {
		type: "boolean",
		default: true
	},
	current: {
		type: "number",
		default: 0,
	},
	titleColorType: {
		type: "string",
		default: "normal",
	},
	titleColor: {
		type: "string",
	},
	titleBackgroundColor: {
		type: "string",
	},
	iconColor: {
		type: "string",
	},
	preview: {
		type: "boolean",
		default: false,
	},
	buttonColorType: {
		type: "string",
		default: "normal",
	},
	buttonBackgroundColor: {
		type: "string",
	},
	buttonColor: {
		type: "string",
	},
	buttonHoverBackgroundColor: {
		type: "string",
	},
	buttonHoverColor: {
		type: "string",
	},



	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(TYPOGRAPHY)),

	// margin padding attributes ⬇
	...generateDimensionsAttributes(WRAPPER_MARGIN),
	...generateDimensionsAttributes(WRAPPER_PADDING),
	...generateDimensionsAttributes(TITLE_MARGIN, {
		top: 0,
		bottom: 20,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(BUTTON_MARGIN, {
		top: 0,
		bottom: 20,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(BUTTON_PADDING, {
		top: 10,
		bottom: 10,
		right: 30,
		left: 30,
		isLinked: false,
	}),

	// border shadow attributes for Wrapper ⬇
	...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW, {
		bdrDefaults: {
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
		},
		// noShadow: true,
		// noBorder: true,
	}),
	// border shadow attributes for Button ⬇
	...generateBorderShadowAttributes(BUTTON_BORDER_SHADOW, {
		bdrDefaults: {
			top: 1,
			bottom: 1,
			right: 1,
			left: 1,
		},
		// noShadow: true,
		// noBorder: true,
	}),

	// background attributes for Wrapper ⬇
	...generateBackgroundAttributes(WRAPPER_BG, {
		defaultBgGradient: "linear-gradient(45deg,#ffffff,#ffffff)",
		noOverlay: true,
	}),

	// range controller Slide to Show
	...generateResponsiveRangeAttributes(SLIDE_TO_SHOW, {
		defaultRange: 1,
	}),
	
	// range controller Slider Height
	...generateResponsiveRangeAttributes(CUSTOM_HEIGHT, {
		defaultRange: 300,
	}),

	// range controller Slides Gap
	...generateResponsiveRangeAttributes(SLIDES_GAP, {
		defaultRange: 5,
	}),
};

export default attributes;
