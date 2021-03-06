const Save = ({ attributes }) => {
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

	// Style objects
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

export default Save;
