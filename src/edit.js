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
// import Slider from "./slider";
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

export default function Edit(props) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		resOption,
		blockId,
		blockMeta,
		sliderStyle,
		images,
		sliderData, 
		startIndex, 
		current, 
		preview 
	} = attributes;
	const hasImages = !!images.length;

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	console.log("Images", images)

	// Change start index if image is removed from gallery
	// useEffect(() => {
	// 	if (startIndex > sliderData.length) {
	// 		setAttributes({ startIndex: sliderData.length });
	// 	}
	// }, [startIndex, sliderData]);

	const onImageSelect = (uploads) => {
		let updatedImages = [];
		uploads.map((image, index) => {
			let item = {};
			item.url = image.url;
			item.alt = image.alt;
			item.id = image.id;
			updatedImages.push(item);
		});
		setAttributes({ images: updatedImages });
	}

	// const onImageSelect = (images) => {
	// 	if (!images.length) {
	// 		return null;
	// 	}

	// 	// Store images with slider data
	// 	let sliderData = [];
	// 	let previousData = [...attributes.sliderData];

	// 	images.map((image) => {
	// 		let item = {};

	// 		// Get previous image info after updating gallary
	// 		let [prevTitle, prevBtnText, prevLink] = getPreviousImgData(
	// 			previousData,
	// 			image
	// 		);

	// 		item.id = image.id;
	// 		item.src = image.url;
	// 		item.alt = image.alt;
	// 		item.title = prevTitle || "Header Text";
	// 		item.btnText = prevBtnText || "Button";
	// 		item.link = prevLink || "";

	// 		sliderData.push(item);
	// 	});
	// 	setAttributes({ sliderData });
	// };

	// if (preview) {
	// 	return (
	// 		<img src="https://raw.githubusercontent.com/rupok/essential-blocks-templates/dev/previews/parallax-slider-preview.png" />
	// 	);
	// }

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
							value={images.map((img) => img.id)}
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
			<div class="eb-parallax-slider">
				<div class="ring">
					{images.map((image) => (
						<div class="img">
							<img src={image.url} />
						</div>
					))}
				</div>
			</div>
			
			{/* <Slider
				slides={sliderData}
				attributes={attributes}
				setAttributes={setAttributes}
			/> */}
		</div>
	]
};