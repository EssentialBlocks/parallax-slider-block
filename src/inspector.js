/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	TextControl,
	BaseControl,
	Button,
	Dropdown,
} from "@wordpress/components";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";

/**
 * External dependencies
 */
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import FontPicker from "../util/typography-control/FontPicker";

/**
 * Internal dependencies
 */
import UnitControl from "../util/unit-control";
import DimensionsControl from "../util/dimensions-control";
import {
	BORDER_STYLES,
	PREVIOUS_ICONS,
	NEXT_ICONS,
	FONT_WEIGHT,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
} from "./constants";
import ColorControl from "../util/color-control";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		sliderData,
		current,
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
		btnFontSize,
		btnSizeUnit,
		btnFontFamily,
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

	const handleTextChange = (type, value, index) => {
		let updatedData = [...sliderData];
		updatedData[index][type] = value;

		setAttributes({ sliderData: updatedData });
	};

	const handlePanelClick = (index) => {
		let updatedIndex = index !== current ? index : 0;
		setAttributes({ current: updatedIndex });
	};

	const TITLE_SIZE_MAX = titleSizeUnit === "em" ? 10 : 100;
	const TITLE_SIZE_STEP = titleSizeUnit === "em" ? 0.1 : 1;

	const TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;
	const TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;

	const TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;
	const TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;

	const BTN_SIZE_MAX = btnSizeUnit === "em" ? 10 : 100;
	const BTN_SIZE_STEP = btnSizeUnit === "em" ? 0.1 : 1;

	const BTN_SPACING_MAX = btnLetterSpacingUnit === "em" ? 10 : 100;
	const BTN_SPACING_STEP = btnLetterSpacingUnit === "em" ? 0.1 : 1;

	const BTN_LINE_HEIGHT_MAX = btnLineHeightUnit === "em" ? 10 : 100;
	const BTN_LINE_HEIGHT_STEP = btnLineHeightUnit === "em" ? 0.1 : 1;

	return (
		<InspectorControls key="controls">
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
			</PanelBody>
			{sliderData.map((slide, index) => (
				<PanelBody
					key={index}
					title={`Slide ${index + 1} Settings`}
					initialOpen={false}
					onToggle={() => handlePanelClick(index)}
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
			<PanelColorSettings
				title={__("Title Color")}
				initialOpen={false}
				colorSettings={[
					{
						value: titleColor,
						onChange: (titleColor) => setAttributes({ titleColor }),
						label: "",
					},
				]}
			/>

			<PanelBody title={__("Button Style")} initialOpen={false}>
				<ToggleControl
					label={__("Button Shadow")}
					checked={hasBtnShadow}
					onChange={(hasBtnShadow) => setAttributes({ hasBtnShadow })}
				/>

				<ColorControl
					label={__("Button Background")}
					color={btnBackgroundColor}
					onChange={(btnBackgroundColor) =>
						setAttributes({ btnBackgroundColor })
					}
				/>

				<ColorControl
					label={__("Button Text")}
					color={btnColor}
					onChange={(btnColor) => setAttributes({ btnColor })}
				/>

				<PanelBody title={__("Button Border")} initialOpen={false}>
					<ColorControl
						label={__("Border Color")}
						color={btnBorderColor}
						onChange={(btnBorderColor) => setAttributes({ btnBorderColor })}
					/>

					<RangeControl
						label={__("Border Width")}
						value={btnBorderWidth}
						allowReset
						onChange={(btnBorderWidth) => setAttributes({ btnBorderWidth })}
						min={0}
						max={10}
					/>

					<SelectControl
						label={__("Border Style")}
						value={btnBorderStyle}
						options={BORDER_STYLES}
						onChange={(btnBorderStyle) => setAttributes({ btnBorderStyle })}
					/>

					<RangeControl
						label={__("Border Radius")}
						value={btnBorderRadius}
						allowReset
						onChange={(btnBorderRadius) => setAttributes({ btnBorderRadius })}
						min={0}
						max={100}
					/>
				</PanelBody>

				<PanelBody title={__("Button Margin & Padding")} initialOpen={false}>
					<UnitControl
						selectedUnit={btnMarginUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(btnMarginUnit) => setAttributes({ btnMarginUnit })}
					/>

					<DimensionsControl
						label={__("Margin")}
						top={btnMarginTop}
						right={btnMarginRight}
						bottom={btnMarginBottom}
						left={btnMarginLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								btnMarginTop: top,
								btnMarginRight: right,
								btnMarginBottom: bottom,
								btnMarginLeft: left,
							})
						}
					/>

					<UnitControl
						selectedUnit={btnPaddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(btnPaddingUnit) => setAttributes({ btnPaddingUnit })}
					/>

					<DimensionsControl
						label={__("Padding")}
						top={btnPaddingTop}
						right={btnPaddingRight}
						bottom={btnPaddingBottom}
						left={btnPaddingLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								btnPaddingTop: top,
								btnPaddingRight: right,
								btnPaddingBottom: bottom,
								btnPaddingLeft: left,
							})
						}
					/>
				</PanelBody>
			</PanelBody>

			<PanelBody title={__("Typography")} initialOpen={false}>
				<BaseControl label={__("Title")} className="eb-typography-base">
					<Dropdown
						className="eb-typography-dropdown"
						contentClassName="my-popover-content-classname"
						position="bottom right"
						renderToggle={({ isOpen, onToggle }) => (
							<Button
								isSmall
								onClick={onToggle}
								aria-expanded={isOpen}
								icon="edit"
							></Button>
						)}
						renderContent={() => (
							<div style={{ padding: "1rem" }}>
								<FontPicker
									label={__("Font Family")}
									onChange={(titleFontFamily) =>
										setAttributes({ titleFontFamily })
									}
								/>

								<UnitControl
									selectedUnit={titleSizeUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
										{ label: "%", value: "%" },
									]}
									onClick={(titleSizeUnit) => setAttributes({ titleSizeUnit })}
								/>

								<RangeControl
									label={__("Font Size")}
									value={titleFontSize}
									onChange={(titleFontSize) => setAttributes({ titleFontSize })}
									min={0}
									max={TITLE_SIZE_MAX}
									step={TITLE_SIZE_STEP}
								/>

								<SelectControl
									label={__("Font Weight")}
									value={titleFontWeight}
									options={FONT_WEIGHT}
									onChange={(titleFontWeight) =>
										setAttributes({ titleFontWeight })
									}
								/>

								<SelectControl
									label={__("Text Decoration")}
									value={titleTextDecoration}
									options={TEXT_DECORATION}
									onChange={(titleTextDecoration) =>
										setAttributes({ titleTextDecoration })
									}
								/>

								<SelectControl
									label={__("Text Transform")}
									value={titleTextTransform}
									options={TEXT_TRANSFORM}
									onChange={(titleTextTransform) =>
										setAttributes({ titleTextTransform })
									}
								/>

								<UnitControl
									selectedUnit={titleLetterSpacingUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(titleLetterSpacingUnit) =>
										setAttributes({ titleLetterSpacingUnit })
									}
								/>

								<RangeControl
									label={__("Letter Spacing")}
									value={titleLetterSpacing}
									onChange={(titleLetterSpacing) =>
										setAttributes({ titleLetterSpacing })
									}
									min={0}
									max={TITLE_SPACING_MAX}
									step={TITLE_SPACING_STEP}
								/>

								<UnitControl
									selectedUnit={titleLineHeightUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(titleLineHeightUnit) =>
										setAttributes({ titleLineHeightUnit })
									}
								/>

								<RangeControl
									label={__("Line Height")}
									value={titleLineHeight}
									onChange={(titleLineHeight) =>
										setAttributes({ titleLineHeight })
									}
									min={0}
									max={TITLE_LINE_HEIGHT_MAX}
									step={TITLE_LINE_HEIGHT_STEP}
								/>
							</div>
						)}
					/>
				</BaseControl>

				<BaseControl label={__("Button")} className="eb-typography-base">
					<Dropdown
						className="eb-typography-dropdown"
						contentClassName="my-popover-content-classname"
						position="bottom right"
						renderToggle={({ isOpen, onToggle }) => (
							<Button
								isSmall
								onClick={onToggle}
								aria-expanded={isOpen}
								icon="edit"
							></Button>
						)}
						renderContent={() => (
							<div style={{ padding: "1rem" }}>
								<FontPicker
									label={__("Font Family")}
									onChange={(btnFontFamily) => setAttributes({ btnFontFamily })}
								/>

								<UnitControl
									selectedUnit={btnSizeUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
										{ label: "%", value: "%" },
									]}
									onClick={(btnSizeUnit) => setAttributes({ btnSizeUnit })}
								/>

								<RangeControl
									label={__("Font Size")}
									value={btnFontSize}
									onChange={(btnFontSize) => setAttributes({ btnFontSize })}
									min={0}
									max={BTN_SIZE_MAX}
									step={BTN_SIZE_STEP}
								/>

								<SelectControl
									label={__("Font Weight")}
									value={btnFontWeight}
									options={FONT_WEIGHT}
									onChange={(btnFontWeight) => setAttributes({ btnFontWeight })}
								/>

								<SelectControl
									label={__("Text Decoration")}
									value={btnTextDecoration}
									options={TEXT_DECORATION}
									onChange={(btnTextDecoration) =>
										setAttributes({ btnTextDecoration })
									}
								/>

								<SelectControl
									label={__("Text Transform")}
									value={btnTextTransform}
									options={TEXT_TRANSFORM}
									onChange={(btnTextTransform) =>
										setAttributes({ btnTextTransform })
									}
								/>

								<UnitControl
									selectedUnit={btnLetterSpacingUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(btnLetterSpacingUnit) =>
										setAttributes({ btnLetterSpacingUnit })
									}
								/>

								<RangeControl
									label={__("Letter Spacing")}
									value={btnLetterSpacing}
									onChange={(btnLetterSpacing) =>
										setAttributes({ btnLetterSpacing })
									}
									min={0}
									max={BTN_SPACING_MAX}
									step={BTN_SPACING_STEP}
								/>

								<UnitControl
									selectedUnit={btnLineHeightUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(btnLineHeightUnit) =>
										setAttributes({ btnLineHeightUnit })
									}
								/>

								<RangeControl
									label={__("Line Height")}
									value={btnLineHeight}
									onChange={(btnLineHeight) => setAttributes({ btnLineHeight })}
									min={0}
									max={BTN_LINE_HEIGHT_MAX}
									step={BTN_LINE_HEIGHT_STEP}
								/>
							</div>
						)}
					/>
				</BaseControl>
			</PanelBody>

			<PanelBody title={__("Icon Style")} initialOpen={false}>
				<BaseControl label={__("Previous Icon")}>
					<FontIconPicker
						icons={PREVIOUS_ICONS}
						value={prevIcon}
						onChange={(prevIcon) => setAttributes({ prevIcon })}
						appendTo="body"
					/>
				</BaseControl>

				<BaseControl label={__("Next Icon")}>
					<FontIconPicker
						icons={NEXT_ICONS}
						value={nextIcon}
						onChange={(nextIcon) => setAttributes({ nextIcon })}
						appendTo="body"
					/>
				</BaseControl>

				<PanelColorSettings
					title={__("Icon Color")}
					colorSettings={[
						{
							value: iconColor,
							onChange: (iconColor) => setAttributes({ iconColor }),
							label: "",
						},
					]}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
