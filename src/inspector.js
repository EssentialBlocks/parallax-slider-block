/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const {
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
	Button,
	ButtonGroup,
	BaseControl,
	TabPanel,
	RangeControl,
	TextControl,
	TextareaControl,
	ColorPalette,
	Dropdown,
	ColorPicker,
} = wp.components;
const { useEffect } = wp.element;
const { select } = wp.data;

/**
 * Internal dependencies
 */
import UnitControl from "../util/unit-control";
import DimensionsControl from "../util/dimensions-control";
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
	NORMAL_HOVER,
	VERTICAL_ALIGN,
	TEXT_ALIGN,
	UNIT_TYPES,
	COLORS,
} from "./constants/constants";
import { TITLE_TYPOGRAPHY, BUTTON_TYPOGRAPHY } from "./constants/typography-constant";

import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import TypographyDropdown from "../util/typography-control-v2";
import BorderShadowControl from "../util/border-shadow-control";
import ResponsiveRangeController from "../util/responsive-range-control";
import BackgroundControl from "../util/background-control";
import ColorControl from "../util/color-control";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		resOption,
		sliderData,
		current,
		intensity,
		startIndex,
		isCustomHeight,
		titleColor,
		titleBackgroundColor,
		buttonColorType,
		buttonColor,
		buttonHoverColor,
		buttonBackgroundColor,
		buttonHoverBackgroundColor,
		prevIcon,
		nextIcon,
		iconColor,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
	};

	const handleTextChange = (type, value, index) => {
		let updatedData = [...sliderData];
		updatedData[index][type] = value;

		setAttributes({ sliderData: updatedData });
	};

	const handlePanelClick = (index) => {
		let updatedIndex = index !== current ? index : 0;
		setAttributes({ current: updatedIndex });
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: "general",
							title: "General",
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: "Styles",
							className: "eb-tab styles",
						},
						{
							name: "advance",
							title: "Advance",
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody title={__("General")}>
										<RangeControl
											label={__("Starting Slide")}
											value={startIndex}
											allowReset
											onChange={(startIndex) => setAttributes({ startIndex })}
											min={1}
											max={sliderData.length}
										/>

										<RangeControl
											label={__("Parallax Softness")}
											value={intensity}
											allowReset
											onChange={(intensity) => setAttributes({ intensity })}
											min={0}
											max={100}
										/>
										<ToggleControl
											label={__("Custom Height")}
											checked={isCustomHeight}
											onChange={() => setAttributes({ isCustomHeight: !isCustomHeight })}
										/>

										{isCustomHeight && (
											<ResponsiveRangeController
												baseLabel={__("Slider Height", "slider-block")}
												controlName={CUSTOM_HEIGHT}
												resRequiredProps={resRequiredProps}
												units={UNIT_TYPES}
												min={1}
												max={500}
												step={1}
											/>
										)}
									</PanelBody>
									<PanelBody title={__("Slides")} initialOpen={false}>
										{sliderData.map((slide, index) => (
											<PanelBody
												key={index}
												title={`Slide ${index + 1} Settings`}
												initialOpen={false}
												onToggle={() => handlePanelClick(index)}
												className="eb-slider-item-single-panel"
											>
												<TextControl
													label={__("Title Text")}
													value={slide.title}
													onChange={(title) => handleTextChange("title", title, index)}
												/>

												<TextControl
													label={__("Button Text")}
													value={slide.btnText}
													onChange={(btnText) => handleTextChange("btnText", btnText, index)}
												/>

												<TextControl
													label={__("Button Link")}
													value={slide.link}
													onChange={(link) => handleTextChange("link", link, index)}
												/>
											</PanelBody>
										))}
									</PanelBody>
								</>
							)}

							{tab.name === "styles" && (
								<>
									<PanelBody title={__("Title Style")} initialOpen={false}>
										<PanelRow>Color</PanelRow>
										<ColorPalette
											colors={COLORS}
											value={ titleColor }
											onChange={ ( color ) => setAttributes({ titleColor: color })}
										/>
										<ColorControl
											label={__("Background Color")}
											color={titleBackgroundColor}
											onChange={(color) => setAttributes({ titleBackgroundColor: color })}
										/>

										<TypographyDropdown
											baseLabel={__("Typography")}
											typographyPrefixConstant={TITLE_TYPOGRAPHY}
											resRequiredProps={resRequiredProps}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={TITLE_MARGIN}
											baseLabel="Margin"
										/>
									</PanelBody>

									<PanelBody title={__("Button Styles")} initialOpen={false}>
										<ButtonGroup className="eb-inspector-btn-group">
											{NORMAL_HOVER.map((item) => (
												<Button
													isLarge
													isPrimary={buttonColorType === item.value}
													isSecondary={buttonColorType !== item.value}
													onClick={() => setAttributes({ buttonColorType: item.value })}
												>
													{item.label}
												</Button>
											))}
										</ButtonGroup>

										{buttonColorType === "normal" && (
											<>
												<PanelRow>Color</PanelRow>
												<ColorPalette
													colors={COLORS}
													value={ buttonColor }
													onChange={ ( color ) => setAttributes({ buttonColor: color })}
												/>
												<ColorControl
													label={__("Background Color")}
													color={buttonBackgroundColor}
													onChange={(color) => setAttributes({ buttonBackgroundColor: color })}
												/>
											</>
										)}

										{buttonColorType === "hover" && (
											<>
												<PanelRow>Hover Color</PanelRow>
												<ColorPalette
													colors={COLORS}
													value={ buttonHoverColor }
													onChange={ ( color ) => setAttributes({ buttonHoverColor: color })}
												/>
												<ColorControl
													label={__("Hover Background Color")}
													color={buttonHoverBackgroundColor}
													onChange={(color) => setAttributes({ buttonHoverBackgroundColor: color })}
												/>
											</>
										)}
										<PanelRow>Button Border & Shadow</PanelRow>
										<BorderShadowControl
											controlName={BUTTON_BORDER_SHADOW}
											resRequiredProps={resRequiredProps}
											// noShadow
											// noBorder
										/>
										<TypographyDropdown
											baseLabel={__("Typography")}
											typographyPrefixConstant={BUTTON_TYPOGRAPHY}
											resRequiredProps={resRequiredProps}
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={BUTTON_MARGIN}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={BUTTON_PADDING}
											baseLabel="Padding"
										/>
									</PanelBody>
								</>
							)}

							{tab.name === "advance" && (
								<>
									<PanelBody>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={WRAPPER_MARGIN}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={WRAPPER_PADDING}
											baseLabel="Padding"
										/>
									</PanelBody>
									<PanelBody title={__("Background")} initialOpen={false}>
										<BackgroundControl
											controlName={WRAPPER_BG}
											resRequiredProps={resRequiredProps}
											noOverlay
										/>
									</PanelBody>
									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={WRAPPER_BORDER_SHADOW}
											resRequiredProps={resRequiredProps}
											// noShadow
											// noBorder
										/>
									</PanelBody>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
