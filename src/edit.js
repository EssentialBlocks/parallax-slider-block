/**
 * WordPress dependencies
 */
 const { __ } = wp.i18n;
 const { useEffect } = wp.element;
 const {
	 MediaUpload,
	 MediaPlaceholder,
	 BlockControls,
	 useBlockProps,
 } = wp.blockEditor;
 const { ToolbarGroup, ToolbarItem, ToolbarButton, Button } = wp.components;
 const { select } = wp.data;

/**
 * Internal dependencies
 */ 
import Slider from "./slider";
import Inspector from "./inspector";
import "./editor.scss";
import {
	WRAPPER_BG,
	WRAPPER_MARGIN,
	WRAPPER_PADDING,
	WRAPPER_BORDER_SHADOW,
	TITLE_MARGIN,
	BUTTON_MARGIN,
	BUTTON_PADDING,
	BUTTON_BORDER_SHADOW,
	CUSTOM_HEIGHT,
	SLIDES_GAP,
	CONTENTS_PADDING,
	SLIDE_BORDER_RADIUS,
} from "./constants/constants";
import {TITLE_TYPOGRAPHY, BUTTON_TYPOGRAPHY} from "./constants/typography-constant";
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	generateBackgroundControlStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";

function getPreviousImgData(previousData, image) {
	let prevTitle, prevBtnText, prevLink;
	previousData.map((item) => {
		if (item.id === image.id) {
			prevTitle = item.title;
			prevBtnText = item.btnText;
			prevLink = item.link;
		}
	});

	return [prevTitle, prevBtnText, prevLink];
}

export default function Edit(props) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		resOption,
		blockId,
		blockMeta,
		sliderData, 
		startIndex,
		titleColor,
		titleBackgroundColor,
		buttonColor,
		buttonHoverColor,
		buttonBackgroundColor,
		buttonHoverBackgroundColor,
		isCustomHeight,
		horizontalAlign,
		verticalAlign,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;

		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		const BLOCK_PREFIX = "eb-slider";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	/**
	 * CSS/styling Codes Starts from Here
	 */

	// Title Typography
	const {
		typoStylesDesktop: titleTypographyDesktop,
		typoStylesTab: titleTypographyTab,
		typoStylesMobile: titleTypographyMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: TITLE_TYPOGRAPHY,
		defaultFontSize: 24,
	});

	// Button Typography
	const {
		typoStylesDesktop: buttonTypographyDesktop,
		typoStylesTab: buttonTypographyTab,
		typoStylesMobile: buttonTypographyMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: BUTTON_TYPOGRAPHY,
		defaultFontSize: 14,
	});

	/* Wrapper Margin */
	const {
		dimensionStylesDesktop: wrapperMarginDesktop,
		dimensionStylesTab: wrapperMarginTab,
		dimensionStylesMobile: wrapperMarginMobile,
	} = generateDimensionsControlStyles({
		controlName: WRAPPER_MARGIN,
		styleFor: "margin",
		attributes,
	});

	/* Wrapper Padding */
	const {
		dimensionStylesDesktop: wrapperPaddingDesktop,
		dimensionStylesTab: wrapperPaddingTab,
		dimensionStylesMobile: wrapperPaddingMobile,
	} = generateDimensionsControlStyles({
		controlName: WRAPPER_PADDING,
		styleFor: "padding",
		attributes,
	});

	/* Title Margin */
	const {
		dimensionStylesDesktop: titleMarginDesktop,
		dimensionStylesTab: titleMarginTab,
		dimensionStylesMobile: titleMarginMobile,
	} = generateDimensionsControlStyles({
		controlName: TITLE_MARGIN,
		styleFor: "margin",
		attributes,
	});

	/* Button Margin */
	const {
		dimensionStylesDesktop: buttonMarginDesktop,
		dimensionStylesTab: buttonMarginTab,
		dimensionStylesMobile: buttonMarginMobile,
	} = generateDimensionsControlStyles({
		controlName: BUTTON_MARGIN,
		styleFor: "margin",
		attributes,
	});

	/* Button Padding */
	const {
		dimensionStylesDesktop: buttonPaddingDesktop,
		dimensionStylesTab: buttonPaddingTab,
		dimensionStylesMobile: buttonPaddingMobile,
	} = generateDimensionsControlStyles({
		controlName: BUTTON_PADDING,
		styleFor: "padding",
		attributes,
	});

	/* Content Padding */
	const {
		dimensionStylesDesktop: contentPaddingDesktop,
		dimensionStylesTab: contentPaddingTab,
		dimensionStylesMobile: contentPaddingMobile,
	} = generateDimensionsControlStyles({
		controlName: CONTENTS_PADDING,
		styleFor: "padding",
		attributes,
	});

	// range controller Slider Height
	const {
		rangeStylesDesktop: sliderHeightDesktop,
		rangeStylesTab: sliderHeightTab,
		rangeStylesMobile: sliderHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: CUSTOM_HEIGHT,
		property: "--slide-size",
		attributes,
	});

	// range controller Slider Slides Gap
	const {
		rangeStylesDesktop: slidesGapDesktop,
		rangeStylesTab: slidesGapTab,
		rangeStylesMobile: slidesGapMobile,
	} = generateResponsiveRangeStyles({
		controlName: SLIDES_GAP,
		property: "margin",
		attributes,
	});

	// range controller Slider Slides Gap
	const {
		rangeStylesDesktop: slidesBorderRadiusDesktop,
		rangeStylesTab: slidesBorderRadiusTab,
		rangeStylesMobile: slidesBorderRadiusMobile,
	} = generateResponsiveRangeStyles({
		controlName: SLIDE_BORDER_RADIUS,
		property: "border-radius",
		attributes,
	});

	//Generate Background
	const {
		backgroundStylesDesktop: wrapperBackgroundStylesDesktop,
		hoverBackgroundStylesDesktop: wrapperHoverBackgroundStylesDesktop,
		backgroundStylesTab: wrapperBackgroundStylesTab,
		hoverBackgroundStylesTab: wrapperHoverBackgroundStylesTab,
		backgroundStylesMobile: wrapperBackgroundStylesMobile,
		hoverBackgroundStylesMobile: wrapperHoverBackgroundStylesMobile,
		bgTransitionStyle: wrapperBgTransitionStyle,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: WRAPPER_BG,
		noOverlay: true,
	});

	// generateBorderShadowStyles for Wrapper ⬇
	const {
		styesDesktop: wrapperBDShadowDesktop,
		styesTab: wrapperBDShadowTab,
		styesMobile: wrapperBDShadowMobile,
		stylesHoverDesktop: wrapperBDShadowHoverDesktop,
		stylesHoverTab: wrapperBDShadowHoverTab,
		stylesHoverMobile: wrapperBDShadowHoverMobile,
		transitionStyle: wrapperBDShadowTransitionStyle,
	} = generateBorderShadowStyles({
		controlName: WRAPPER_BORDER_SHADOW,
		attributes,
		// noShadow: true,
		// noBorder: true,
	});

	// generateBorderShadowStyles for Button ⬇
	const {
		styesDesktop: buttonBDShadowDesktop,
		styesTab: buttonBDShadowTab,
		styesMobile: buttonBDShadowMobile,
		stylesHoverDesktop: buttonBDShadowHoverDesktop,
		stylesHoverTab: buttonBDShadowHoverTab,
		stylesHoverMobile: buttonBDShadowHoverMobile,
		transitionStyle: buttonBDShadowTransitionStyle,
	} = generateBorderShadowStyles({
		controlName: BUTTON_BORDER_SHADOW,
		attributes,
		// noShadow: true,
		// noBorder: true,
	});

	// wrapper styles css in strings ⬇
	const wrapperStylesDesktop = `
		.eb-parallax-slider-wrapper.${blockId}{
			${wrapperMarginDesktop}
			${wrapperPaddingDesktop}
			${wrapperBDShadowDesktop}
			${wrapperBackgroundStylesDesktop}
			${wrapperBgTransitionStyle}
		}
	`;
	const wrapperStylesTab = `
		.eb-parallax-slider-wrapper.${blockId}{
			${wrapperMarginTab}
			${wrapperPaddingTab}
			${wrapperBDShadowTab}
			${wrapperBackgroundStylesTab}
		}
	`;
	const wrapperStylesMobile = `
		.eb-parallax-slider-wrapper.${blockId}{
			${wrapperMarginMobile}
			${wrapperPaddingMobile}
			${wrapperBDShadowMobile}
			${wrapperBackgroundStylesMobile}
		}
	`;

	const sliderStyleDesktop = `
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-container .eb-parallax-slider {
			${isCustomHeight ? sliderHeightDesktop : ""}
		}
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-wrapper li {
			align-items: ${horizontalAlign};
			justify-content: ${verticalAlign};
			${slidesGapDesktop}
		}
		.eb-parallax-slider-wrapper.${blockId} .slide__image-wrapper {
			${slidesBorderRadiusDesktop}
		}
		.eb-parallax-slider-wrapper.${blockId} .slide__content {
			${contentPaddingDesktop}
		}
	`;
	const sliderStyleTab = `
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-slider {
			${isCustomHeight ? sliderHeightTab : ""}
		}
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-wrapper li {
			${slidesGapTab}
		}
	`;
	const sliderStyleMobile = `
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-slider {
			${isCustomHeight ? sliderHeightMobile : ""}
		}
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-wrapper li {
			${slidesGapMobile}
		}
	`;

	const sliderContentsStylesDesktop = `
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-container .eb-parallax-slider .eb-parallax-wrapper .slide .slide__headline {
			color: ${titleColor};
			background-color: ${titleBackgroundColor};
			${titleTypographyDesktop}
			${titleMarginDesktop}
		}
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-container .eb-parallax-slider .eb-parallax-wrapper .slide .slide__action {
			color: ${buttonColor};
			background-color: ${buttonBackgroundColor};
			${buttonTypographyDesktop}
			${buttonMarginDesktop}
			${buttonPaddingDesktop}
			${buttonBDShadowDesktop}
			${buttonBDShadowTransitionStyle}
		}
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-container .eb-parallax-slider .eb-parallax-wrapper .slide .slide__action:hover {
			color: ${buttonHoverColor};
			background-color: ${buttonHoverBackgroundColor};
		}
		.eb-parallax-slider-wrapper.${blockId} .slide__action:hover {
			${buttonBDShadowHoverDesktop}
		}
	`;
	const sliderContentsStylesTab = `
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-container .eb-parallax-slider .eb-parallax-wrapper .slide .slide__headline {
			${titleTypographyTab}
			${titleMarginTab}
		}
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-container .eb-parallax-slider .eb-parallax-wrapper .slide .slide__action {
			${buttonTypographyTab}
			${buttonMarginTab}
			${buttonPaddingTab}
			${buttonBDShadowTab}
		}
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-container .eb-parallax-slider .eb-parallax-wrapper .slide .slide__action:hover {
			${buttonBDShadowHoverTab}
		}
	`;
	const sliderContentsStylesMobile = `
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-container .eb-parallax-slider .eb-parallax-wrapper .slide .slide__headline {
			${titleTypographyMobile}
			${titleMarginMobile}
		}
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-container .eb-parallax-slider .eb-parallax-wrapper .slide .slide__action {
			${buttonTypographyMobile}
			${buttonMarginMobile}
			${buttonPaddingMobile}
			${buttonBDShadowMobile}
		}
		.eb-parallax-slider-wrapper.${blockId} .eb-parallax-container .eb-parallax-slider .eb-parallax-wrapper .slide .slide__action:hover {
			${buttonBDShadowHoverMobile}
		}
	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		${isCssExists(sliderStyleDesktop) ? sliderStyleDesktop : " "}
		${isCssExists(sliderContentsStylesDesktop) ? sliderContentsStylesDesktop : " "}
	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
		${isCssExists(sliderStyleTab) ? sliderStyleTab : " "}
		${isCssExists(sliderContentsStylesTab) ? sliderContentsStylesTab : " "}
	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
		${isCssExists(sliderStyleMobile) ? sliderStyleMobile : " "}
		${isCssExists(sliderContentsStylesMobile) ? sliderContentsStylesMobile : " "}
	`);

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	// Change start index if image is removed from gallery
	useEffect(() => {
		if (startIndex > sliderData.length) {
			setAttributes({ startIndex: sliderData.length });
		}
	}, [startIndex, sliderData]);

	const onImageSelect = (images) => {
		if (!images.length) {
			return null;
		}

		// Store images with slider data
		let sliderData = [];
		let previousData = [...attributes.sliderData];

		images.map((image) => {
			let item = {};

			// Get previous image info after updating gallary
			let [prevTitle, prevBtnText, prevLink] = getPreviousImgData(
				previousData,
				image
			);

			item.id = image.id;
			item.src = image.url;
			item.alt = image.alt;
			item.title = prevTitle || "Slider Title";
			item.btnText = prevBtnText || "Button";
			item.link = prevLink || "";

			sliderData.push(item);
		});
		setAttributes({ sliderData });
	};

	if (!sliderData.length) {
		// Show placeholder at the beginning
		return (
			<MediaPlaceholder
				labels={{
					title: __("Images"),
					instructions: __(
						"Drag images, upload new ones or select files from your library. Upload minimum 3 images for better design."
					),
				}}
				onSelect={(images) => onImageSelect(images)}
				accept="image/*"
				allowedTypes={["image"]}
				multiple
			/>
		);
	}

	return [
		isSelected && (
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
			/>
		),
		<BlockControls>
			<ToolbarGroup>
				<ToolbarItem>
					{() => (
						<MediaUpload
							onSelect={(images) => onImageSelect(images)}
							allowedTypes={["image"]}
							multiple
							gallery
							value={sliderData.map((img) => img.id)}
							render={({ open }) => (
								<ToolbarButton
									className="components-toolbar__control"
									label={__("Edit gallery")}
									icon="edit"
									onClick={open}
								/>
							)}
						/>
					)}
				</ToolbarItem>
			</ToolbarGroup>
		</BlockControls>,
		<div {...blockProps}>

			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */ 

				${resOption === "Tablet" ? tabAllStyles : " "}
				${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>
			<div className={`eb-parallax-slider-wrapper ${blockId}`}>
				<Slider
					slides={sliderData}
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			</div>
			
		</div>
	]
};