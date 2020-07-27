/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { BlockControls, MediaPlaceholder, MediaUpload } = wp.blockEditor;
const { Button, Toolbar } = wp.components;
const { useEffect, Fragment } = wp.element;

/**
 * Internal dependencies
 */
import Slider from "./slider";
import Inspector from "./inspector";

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

const Edit = ({ attributes, setAttributes, isSelected }) => {
	const { sliderData, startIndex, current, preview } = attributes;
	const hasImages = !!sliderData.length;

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
			item.title = prevTitle || "Header Text";
			item.btnText = prevBtnText || "Button";
			item.link = prevLink || "";

			sliderData.push(item);
		});
		setAttributes({ sliderData });
	};

	if (preview) {
		return (
			<img src="https://raw.githubusercontent.com/rupok/essential-blocks-templates/dev/previews/parallax-slider-preview.png" />
		);
	}

	if (!hasImages) {
		// Show placeholder at the beginning
		return (
			<MediaPlaceholder
				labels={{
					title: __("Images"),
					instructions: __(
						"Drag images, upload new ones or select files from your library."
					),
				}}
				onSelect={(images) => onImageSelect(images)}
				accept="image/*"
				allowedTypes={["image"]}
				multiple
			/>
		);
	}

	return (
		<Fragment>
			<BlockControls>
				<Toolbar>
					<MediaUpload
						onSelect={(images) => onImageSelect(images)}
						allowedTypes={["image"]}
						multiple
						gallery
						value={sliderData.map((img) => img.id)}
						render={({ open }) => (
							<Button
								className="components-toolbar__control"
								label={__("Edit gallery")}
								icon="edit"
								onClick={open}
							/>
						)}
					/>
				</Toolbar>
			</BlockControls>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}
			<Slider
				slides={sliderData}
				attributes={attributes}
				setAttributes={setAttributes}
			/>
		</Fragment>
	);
};

export default Edit;
