/**
 * WordPress dependencies
 */
const { createRef } = wp.element;

const Slide = ({ slide, position, handleSlideClick, attributes }) => {
	const {
		current,
		intensity,
		titleColor,
		titleFontFamily,
		titleFontSize,
		titleSizeUnit,
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
	} = attributes;
	let slideRef = createRef();

	const handleMouseMove = (event) => {
		const el = slideRef.current;
		const r = el.getBoundingClientRect();
		el.style.setProperty(
			"--x",
			event.clientX - (r.left + Math.floor(r.width / 2))
		);
		el.style.setProperty(
			"--y",
			event.clientY - (r.top + Math.floor(r.height / 2))
		);
		el.style.setProperty("--d", intensity || 50);
	};

	const handleMouseLeave = (event) => {
		slideRef.current.style.setProperty("--x", 0);
		slideRef.current.style.setProperty("--y", 0);
		slideRef.current.style.setProperty("--y", 50);
	};

	const imageLoaded = (event) => (event.target.style.opacity = 1);

	const handleButtonClick = (link) => {
		// Redirect to button link
		if (link) {
			window.location = link;
		}
	};

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

	let classNames = "slide";
	if (current === position) classNames += " slide--current";
	else if (current - 1 === position) classNames += " slide--previous";
	else if (current + 1 === position) classNames += " slide--next";

	return (
		<li
			ref={slideRef}
			className={classNames}
			onClick={() => handleSlideClick(position)}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div className="slide__image-wrapper">
				<img
					className="slide__image"
					alt="img"
					src={slide.src}
					onLoad={imageLoaded}
				/>
			</div>
			<article className="slide__content">
				<h2 className="slide__headline" style={titleStyles}>
					{slide.title}
				</h2>
				<button
					onClick={() => handleButtonClick(slide.link)}
					className={`slide__action btn ${
						hasBtnShadow ? "btn-has-shadow" : ""
					} `}
					style={buttonStyles}
				>
					{slide.btnText}
				</button>
			</article>
		</li>
	);
};

export default Slide;
