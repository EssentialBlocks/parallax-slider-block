<?php
/**
 * Plugin Name:     Parallax Slider
 * Description:     Create A Captivating Visual Experience & Impress Your Audience
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     parallax-slider
 *
 * @package         parallax-slider
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_parallax_slider_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/parallax-slider" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-parallax-slider-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-parallax-slider-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	$fontpicker_theme = 'src/css/fonticonpicker.base-theme.react.css';
	wp_enqueue_style(
		'fontpicker-default-theme',
		plugins_url( $fontpicker_theme, __FILE__),
		array()
	);

	$fontpicker_material_theme = 'src/css/fonticonpicker.material-theme.react.css';
	wp_enqueue_style(
		'fontpicker-matetial-theme',
		plugins_url( $fontpicker_material_theme, __FILE__),
		array()
	);

	$fontawesome_css = 'src/css/font-awesome5.css';
	wp_enqueue_style(
		'fontawesome-frontend-css',
		plugins_url( $fontawesome_css, __FILE__),
		array()
	);


	register_block_type( 'create-block/parallax-slider', array(
		'editor_script' => 'create-block-parallax-slider-block-editor',
		'style'         => 'create-block-parallax-slider-block',
	) );
}
add_action( 'init', 'create_block_parallax_slider_block_init' );
