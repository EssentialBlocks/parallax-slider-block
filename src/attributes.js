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
		source: "query",
		selector: ".slide",
		query: {
			src: {
				type: "string",
				selector: "img",
				source: "attribute",
				attribute: "src",
			},
			alt: {
				type: "string",
				selector: "img",
				source: "attribute",
				attribute: "alt",
			},
			title: {
				type: "string",
				selector: "h2",
				source: "text",
				default: "Add header text here",
			},
			btnText: {
				type: "string",
				selector: "button",
				source: "text",
				default: "Add Text",
			},
			link: {
				type: "string",
				selector: "button",
				source: "attribute",
				attribute: "data-link",
				default: "",
			},
		},
		default: [],
	},
	intensity: {
		type: "string",
		selector: ".eb-parallax-container",
		source: "attribute",
		attribute: "data-intensity",
		default: "50",
	},
	startIndex: {
		type: "string",
		selector: ".eb-parallax-container",
		source: "attribute",
		attribute: "data-start-index",
		default: "1",
	},
	current: {
		type: "number",
		default: 0,
	},
	titleFontFamily: {
		type: "string",
	},
	titleFontWeight: {
		type: "string",
	},
	titleFontSize: {
		type: "number",
	},
	titleSizeUnit: {
		type: "string",
		default: "px",
	},
	titleTextDecoration: {
		type: "string",
	},
	titleTextTransform: {
		type: "string",
	},
	titleLetterSpacing: {
		type: "number",
	},
	titleLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightUnit: {
		type: "string",
		default: "px",
	},
	titleColor: {
		type: "string",
	},
	titleBackgroundColor: {
		type: "string",
	},
	btnFontFamily: {
		type: "string",
	},
	btnFontWeight: {
		type: "string",
	},
	btnFontSize: {
		type: "number",
	},
	btnSizeUnit: {
		type: "string",
		default: "px",
	},
	btnTextDecoration: {
		type: "string",
	},
	btnTextTransform: {
		type: "string",
	},
	btnLetterSpacing: {
		type: "number",
	},
	btnLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	btnLineHeight: {
		type: "number",
	},
	btnLineHeightUnit: {
		type: "string",
		default: "px",
	},
	btnBorderColor: {
		type: "string",
	},
	btnBorderWidth: {
		type: "number",
	},
	btnBorderStyle: {
		type: "string",
		default: "solid",
	},
	btnBorderRadius: {
		type: "number",
	},
	hasBtnShadow: {
		type: "string",
		selector: ".eb-parallax-container",
		source: "attribute",
		attribute: "data-shadow",
		default: false,
	},
	btnMarginTop: {
		type: "number",
		default: 0,
	},
	btnMarginRight: {
		type: "number",
		default: 0,
	},
	btnMarginBottom: {
		type: "number",
		default: 0,
	},
	btnMarginLeft: {
		type: "number",
		default: 0,
	},
	btnMarginUnit: {
		type: "string",
		default: "px",
	},
	btnPaddingTop: {
		type: "number",
		default: 0,
	},
	btnPaddingRight: {
		type: "number",
		default: 0,
	},
	btnPaddingBottom: {
		type: "number",
		default: 0,
	},
	btnPaddingLeft: {
		type: "number",
		default: 0,
	},
	btnPaddingUnit: {
		type: "string",
		default: "px",
	},
	prevIcon: {
		type: "string",
		default: "fas fa-chevron-left",
	},
	nextIcon: {
		type: "string",
		default: "fas fa-chevron-right",
	},
	iconColor: {
		type: "string",
		selector: ".eb-parallax-container",
		source: "attribute",
		attribute: "data-icon-color",
	},
	preview: {
		type: "boolean",
		default: false,
	},
	btnBackgroundColor: {
		type: "string",
	},
	btnColor: {
		type: "string",
	},
};

export default attributes;
