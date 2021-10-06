<?php
/**
 * Plugin Name:     Parallax Slider Block
 * Description:     Create A Captivating Visual Experience & Impress Your Audience
 * Version:         1.1.0
 * Author:          WPDeveloper
 * Author URI: 		  https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     parallax-slider-block
 *
 * @package         parallax-slider-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_parallax_slider_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "parallax-slider-block/parallax-slider-block" block first.'
		);
	}

	$index_js = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'parallax-slider-block-parallax-slider-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-block-editor',
			'parallax-slider-block-parallax-slider-frontend'
		),
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'parallax-slider-block-parallax-slider-block-editor-styles',
		plugins_url($editor_css, __FILE__),
		array('parallax-slider-block-frontend-styles'),
		filemtime("$dir/$editor_css")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'parallax-slider-block-frontend-styles',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	$frontend_js = 'build/frontend.js';
	wp_register_script(
		'parallax-slider-block-parallax-slider-frontend',
		plugins_url($frontend_js, __FILE__),
		array("wp-editor"),
		true,
		true,
	);

	if( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/parallax-slider' ) ) {
		register_block_type(
			'parallax-slider-block/parallax-slider-block',
			array(
				'editor_script' => 'parallax-slider-block-parallax-slider-block-editor',
				'editor_style'         => 'parallax-slider-block-parallax-slider-block-editor-styles',
				'render_callback' => function( $attributes, $content ) {
					if( !is_admin() ) {
						wp_enqueue_style('parallax-slider-block-frontend-styles');
						wp_enqueue_script('parallax-slider-block-parallax-slider-frontend');
					}
					return $content;
				}
			)
		);
	}
}
add_action( 'init', 'create_block_parallax_slider_block_init' );
