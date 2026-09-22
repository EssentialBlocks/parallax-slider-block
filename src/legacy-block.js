/**
 * Backward compatibility for blocks saved by plugin versions 1.0.0 / 1.0.1.
 *
 * Those versions registered the block in JS as "block/parallax-slider". Since
 * 1.1.0 the block is "parallax-slider-block/parallax-slider-block", so posts
 * saved with 1.0.x showed "Your site doesn't include support for the
 * block/parallax-slider block" after upgrading. Block deprecations cannot
 * rename a block, so the old name is registered here (hidden from the
 * inserter) with its original attributes and save() to parse the stored
 * markup, and its edit() swaps it for the current block on load.
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { registerBlockType, createBlock } from "@wordpress/blocks";
import { useDispatch } from "@wordpress/data";
import { Placeholder, Spinner } from "@wordpress/components";

import icon from "./icon";

export const LEGACY_BLOCK_NAME = "block/parallax-slider";
const BLOCK_NAME = "parallax-slider-block/parallax-slider-block";

// Attributes exactly as shipped in 1.0.x.
const attributes = {
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
	current: { type: "number", default: 0 },
	titleFontFamily: { type: "string" },
	titleFontWeight: { type: "string" },
	titleFontSize: { type: "number" },
	titleSizeUnit: { type: "string", default: "px" },
	titleTextDecoration: { type: "string" },
	titleTextTransform: { type: "string" },
	titleLetterSpacing: { type: "number" },
	titleLetterSpacingUnit: { type: "string", default: "px" },
	titleLineHeight: { type: "number" },
	titleLineHeightUnit: { type: "string", default: "px" },
	titleColor: { type: "string" },
	titleBackgroundColor: { type: "string" },
	btnFontFamily: { type: "string" },
	btnFontWeight: { type: "string" },
	btnFontSize: { type: "number" },
	btnSizeUnit: { type: "string", default: "px" },
	btnTextDecoration: { type: "string" },
	btnTextTransform: { type: "string" },
	btnLetterSpacing: { type: "number" },
	btnLetterSpacingUnit: { type: "string", default: "px" },
	btnLineHeight: { type: "number" },
	btnLineHeightUnit: { type: "string", default: "px" },
	btnBorderColor: { type: "string" },
	btnBorderWidth: { type: "number" },
	btnBorderStyle: { type: "string", default: "solid" },
	btnBorderRadius: { type: "number" },
	hasBtnShadow: {
		type: "string",
		selector: ".eb-parallax-container",
		source: "attribute",
		attribute: "data-shadow",
		default: false,
	},
	btnMarginTop: { type: "number", default: 0 },
	btnMarginRight: { type: "number", default: 0 },
	btnMarginBottom: { type: "number", default: 0 },
	btnMarginLeft: { type: "number", default: 0 },
	btnMarginUnit: { type: "string", default: "px" },
	btnPaddingTop: { type: "number", default: 0 },
	btnPaddingRight: { type: "number", default: 0 },
	btnPaddingBottom: { type: "number", default: 0 },
	btnPaddingLeft: { type: "number", default: 0 },
	btnPaddingUnit: { type: "string", default: "px" },
	prevIcon: { type: "string", default: "fas fa-chevron-left" },
	nextIcon: { type: "string", default: "fas fa-chevron-right" },
	iconColor: {
		type: "string",
		selector: ".eb-parallax-container",
		source: "attribute",
		attribute: "data-icon-color",
	},
	preview: { type: "boolean", default: false },
	btnBackgroundColor: { type: "string" },
	btnColor: { type: "string" },
};

// save() exactly as shipped in 1.0.x, so stored markup validates.
const save = ({ attributes }) => {
	const {
		sliderData,
		intensity,
		startIndex,
		titleColor,
		titleFontSize,
		titleSizeUnit,
		titleFontFamily,
		titleFontWeight,
		titleTextDecoration,
		titleTextTransform,
		titleLetterSpacing,
		titleLetterSpacingUnit,
		titleLineHeight,
		titleLineHeightUnit,
		btnColor,
		btnBackgroundColor,
		btnFontFamily,
		btnFontSize,
		btnSizeUnit,
		btnFontWeight,
		btnTextDecoration,
		btnTextTransform,
		btnLetterSpacing,
		btnLetterSpacingUnit,
		btnLineHeight,
		btnLineHeightUnit,
		btnBorderColor,
		btnBorderWidth,
		btnBorderStyle,
		btnBorderRadius,
		hasBtnShadow,
		btnMarginTop,
		btnMarginRight,
		btnMarginBottom,
		btnMarginLeft,
		btnMarginUnit,
		btnPaddingTop,
		btnPaddingRight,
		btnPaddingBottom,
		btnPaddingLeft,
		btnPaddingUnit,
		prevIcon,
		nextIcon,
		iconColor,
	} = attributes;

	const titleStyles = {
		color: titleColor,
		fontFamily: titleFontFamily,
		fontSize: titleFontSize + titleSizeUnit,
		fontWeight: titleFontWeight,
		textTransform: titleTextTransform,
		textDecoration: titleTextDecoration,
		letterSpacing: titleLetterSpacing
			? `${titleLetterSpacing}${titleLetterSpacingUnit}`
			: undefined,
		lineHeight: titleLineHeight
			? `${titleLineHeight}${titleLineHeightUnit}`
			: undefined,
	};

	const buttonStyles = {
		color: btnColor,
		backgroundColor: btnBackgroundColor,
		fontFamily: btnFontFamily,
		fontSize: btnFontSize + btnSizeUnit,
		fontWeight: btnFontWeight,
		textTransform: btnTextTransform,
		textDecoration: btnTextDecoration,
		letterSpacing: btnLetterSpacing
			? `${btnLetterSpacing}${btnLetterSpacingUnit}`
			: undefined,
		lineHeight: btnLineHeight
			? `${btnLineHeight}${btnLineHeightUnit}`
			: undefined,
		border: `${btnBorderWidth || 0}px ${btnBorderStyle} ${
			btnBorderColor || "black"
		}`,
		borderRadius: btnBorderRadius + "px",
		margin: `${btnMarginTop}${btnMarginUnit} ${btnMarginRight}${btnMarginUnit} ${btnMarginBottom}${btnMarginUnit} ${btnMarginLeft}${btnMarginUnit}`,
		padding: `${btnPaddingTop}${btnPaddingUnit} ${btnPaddingRight}${btnPaddingUnit} ${btnPaddingBottom}${btnPaddingUnit} ${btnPaddingLeft}${btnPaddingUnit} `,
	};

	const iconStyles = {
		color: iconColor || "gray",
	};

	return (
		<div
			className="eb-parallax-container"
			data-start-index={startIndex}
			data-intensity={intensity}
			data-shadow={hasBtnShadow}
		>
			<div className="eb-parallax-slider">
				<ul className="eb-parallax-wrapper">
					{sliderData.map((slide, index) => (
						<li key={index} className="slide">
							<div className="slide__image-wrapper">
								<img
									className="slide__image"
									src={slide.src}
									alt={slide.alt}
									style={{ opacity: 1 }}
								/>
							</div>
							<article className="slide__content">
								<h2 className="slide__headline" style={titleStyles}>
									{slide.title}
								</h2>
								<button
									className="slide__action btn"
									style={buttonStyles}
									data-link={slide.link}
								>
									{slide.btnText}
								</button>
							</article>
						</li>
					))}
				</ul>
				<div className="eb-slider__controls">
					<div className={`btn btn--previous ${prevIcon}`} style={iconStyles} />
					<div className={`btn btn--next ${nextIcon}`} style={iconStyles} />
				</div>
			</div>
		</div>
	);
};

const isSet = (value) => value !== undefined && value !== null && value !== "";

/**
 * Map 1.0.x attributes onto the current block's attributes. Only values the
 * user actually customised are carried over; untouched 1.0.x defaults fall
 * back to the current block's defaults.
 */
export const migrateLegacyAttributes = (old) => {
	const next = {
		// 1.0.x always opened button links in a new tab.
		sliderData: (old.sliderData || []).map((slide) => ({
			src: slide.src,
			alt: slide.alt || "",
			title: slide.title,
			btnText: slide.btnText,
			link: slide.link || "",
			openNewTab: true,
		})),
		intensity: parseInt(old.intensity, 10) || 50,
		startIndex: parseInt(old.startIndex, 10) || 1,
	};

	if (isSet(old.className)) next.className = old.className;
	if (isSet(old.titleColor)) next.titleColor = old.titleColor;
	if (isSet(old.titleBackgroundColor))
		next.titleBackgroundColor = old.titleBackgroundColor;
	if (isSet(old.btnColor)) next.buttonColor = old.btnColor;
	if (isSet(old.btnBackgroundColor))
		next.buttonBackgroundColor = old.btnBackgroundColor;

	// Typography: title* -> titleTypo*, btn* -> buttonTypo*.
	[
		["title", "titleTypo"],
		["btn", "buttonTypo"],
	].forEach(([from, to]) => {
		[
			"FontFamily",
			"FontWeight",
			"FontSize",
			"TextDecoration",
			"TextTransform",
			"LetterSpacing",
			"LineHeight",
		].forEach((prop) => {
			if (isSet(old[from + prop])) next[to + prop] = old[from + prop];
		});
		if (isSet(old[from + "FontSize"]))
			next[to + "SizeUnit"] = old[from + "SizeUnit"];
		if (isSet(old[from + "LetterSpacing"]))
			next[to + "LetterSpacingUnit"] = old[from + "LetterSpacingUnit"];
		if (isSet(old[from + "LineHeight"]))
			next[to + "LineHeightUnit"] = old[from + "LineHeightUnit"];
	});

	// Button margin / padding: carry over when any side was changed from 0.
	[
		["btnMargin", "buttonMargin"],
		["btnPadding", "buttonPadding"],
	].forEach(([from, to]) => {
		const sides = ["Top", "Right", "Bottom", "Left"];
		if (sides.some((side) => Number(old[from + side]))) {
			sides.forEach((side) => {
				next[to + side] = String(old[from + side] || 0);
			});
			next[to + "Unit"] = old[from + "Unit"];
		}
	});

	// Button border.
	if (Number(old.btnBorderWidth)) {
		const width = String(old.btnBorderWidth);
		next.buttonBorderShadowborderStyle = old.btnBorderStyle || "solid";
		next.buttonBorderShadowborderColor = old.btnBorderColor || "black";
		next.buttonBorderShadowBdr_Unit = "px";
		next.buttonBorderShadowBdr_Top = width;
		next.buttonBorderShadowBdr_Right = width;
		next.buttonBorderShadowBdr_Bottom = width;
		next.buttonBorderShadowBdr_Left = width;
	}
	if (isSet(old.btnBorderRadius)) {
		const radius = String(old.btnBorderRadius);
		next.buttonBorderShadowRds_Unit = "px";
		next.buttonBorderShadowRds_Top = radius;
		next.buttonBorderShadowRds_Right = radius;
		next.buttonBorderShadowRds_Bottom = radius;
		next.buttonBorderShadowRds_Left = radius;
	}

	return next;
};

const Edit = ({ clientId, attributes }) => {
	const { replaceBlocks, __unstableMarkNextChangeAsNotPersistent } =
		useDispatch("core/block-editor");

	useEffect(() => {
		// Like a core deprecation: swap silently, persisted on the next save.
		if (__unstableMarkNextChangeAsNotPersistent) {
			__unstableMarkNextChangeAsNotPersistent();
		}
		replaceBlocks(
			clientId,
			createBlock(BLOCK_NAME, migrateLegacyAttributes(attributes))
		);
	}, []);

	return (
		<Placeholder icon={icon} label={__("Parallax Slider", "parallax-slider-block")}>
			<Spinner />
		</Placeholder>
	);
};

registerBlockType(LEGACY_BLOCK_NAME, {
	title: __("Parallax Slider", "parallax-slider-block"),
	category: "widgets",
	icon,
	attributes,
	supports: {
		inserter: false,
	},
	edit: Edit,
	save,
});
