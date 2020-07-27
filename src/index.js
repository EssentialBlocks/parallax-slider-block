import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";

import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import icon from "./icon";

registerBlockType("block/parallax-slider", {
	title: __("Parallax Slider", "parallax-slider"),
	description: __(
		"Create A Captivating Visual Experience & Impress Your Audience",
		"parallax-slider"
	),
	category: "widgets",
	icon,
	attributes,
	edit: Edit,
	save,
});
