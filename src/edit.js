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

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

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
			<Slider
				slides={sliderData}
				attributes={attributes}
				setAttributes={setAttributes}
			/>
		</div>
	]
};