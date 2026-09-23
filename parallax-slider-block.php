<?php

/**
 * Plugin Name:     Parallax Slider Block
 * Description:     Create A Captivating Visual Experience & Impress Your Audience
 * Version:         1.2.8
 * Requires at least: 6.0
 * Tested up to:    7.1
 * Requires PHP:    7.4
 * Author:          WPDeveloper
 * Author URI:         https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     parallax-slider-block
 *
 * @package         parallax-slider-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';
// Git submodule: may be empty in a fresh clone until `git submodule update --init` is run.
if ( file_exists( __DIR__ . '/lib/style-handler/style-handler.php' ) ) {
    require_once __DIR__ . '/lib/style-handler/style-handler.php';
}

function create_block_parallax_slider_block_init() {
    define( 'PARALLAX_SLIDER_BLOCK_VERSION', "1.2.8" );
    define( 'PARALLAX_SLIDER_BLOCK_ADMIN_URL', plugin_dir_url( __FILE__ ) );
    define( 'PARALLAX_SLIDER_BLOCK_ADMIN_PATH', dirname( __FILE__ ) );

    $script_asset_path = PARALLAX_SLIDER_BLOCK_ADMIN_PATH . "/dist/index.asset.php";
    if ( ! file_exists( $script_asset_path ) ) {
        throw new Error(
            'You need to run `npm start` or `npm run build` for the "block/testimonial" block first.'
        );
    }
    $index_js         = PARALLAX_SLIDER_BLOCK_ADMIN_URL . 'dist/index.js';
    $script_asset     = require $script_asset_path;
    $all_dependencies = array_merge( $script_asset['dependencies'], [
        'wp-blocks',
        'wp-i18n',
        'wp-element',
        'wp-block-editor',
        'parallax-slider-block-controls-util',
        'essential-blocks-eb-animation',
    ] );

    wp_register_script(
        'create-block-parallax-slider-block-editor-script',
        $index_js,
        $all_dependencies,
        $script_asset['version'],
        true
    );

    $animate_css = PARALLAX_SLIDER_BLOCK_ADMIN_URL . 'lib/css/animate.min.css';
    wp_register_style(
        'essential-blocks-animation',
        $animate_css,
        [],
        PARALLAX_SLIDER_BLOCK_VERSION
    );

    $style_css = PARALLAX_SLIDER_BLOCK_ADMIN_URL . 'dist/style.css';
    //Frontend & Editor Style
    wp_register_style(
        'create-block-parallax-slider-block-frontend-style',
        $style_css,
        [ 'essential-blocks-animation' ],
        PARALLAX_SLIDER_BLOCK_VERSION
    );

    $load_animation_js = PARALLAX_SLIDER_BLOCK_ADMIN_URL . 'lib/js/eb-animation-load.js';
    wp_register_script(
        'essential-blocks-eb-animation',
        $load_animation_js,
        [],
        PARALLAX_SLIDER_BLOCK_VERSION,
        true
    );

    //Frontend Style
    $frontend_js    = PARALLAX_SLIDER_BLOCK_ADMIN_URL . 'dist/frontend/index.js';
    $frontend_asset = require PARALLAX_SLIDER_BLOCK_ADMIN_PATH . '/dist/frontend/index.asset.php';
    wp_register_script(
        'parallax-slider-block-frontend-js',
        $frontend_js,
        $frontend_asset['dependencies'],
        $frontend_asset['version'],
        true
    );

    if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/parallax-slider' ) ) {
        register_block_type(
            Parallax_Slider_Helper::get_block_register_path( "parallax-slider-block/parallax-slider-block", PARALLAX_SLIDER_BLOCK_ADMIN_PATH ),
            [
                'editor_script'   => 'create-block-parallax-slider-block-editor-script',
                'editor_style'    => 'create-block-parallax-slider-block-frontend-style',
                'render_callback' => function ( $attributes, $content ) {
                    if ( ! is_admin() ) {
                        wp_enqueue_style( 'create-block-parallax-slider-block-frontend-style' );
                        wp_enqueue_script( 'parallax-slider-block-frontend-js' );
                        wp_enqueue_script( 'essential-blocks-eb-animation' );
                    }
                    return $content;
                }
            ]
        );

        // Blocks saved by 1.0.x use the "block/parallax-slider" name. The editor
        // migrates them (src/legacy-block.js); until a post is re-saved, keep them
        // working on the frontend. Current styles are scoped to the wrapper class.
        register_block_type(
            'block/parallax-slider',
            [
                'render_callback' => function ( $attributes, $content ) {
                    if ( ! is_admin() ) {
                        wp_enqueue_style( 'create-block-parallax-slider-block-frontend-style' );
                        wp_enqueue_script( 'parallax-slider-block-frontend-js' );
                    }
                    return '<div class="eb-parallax-slider-wrapper">' . $content . '</div>';
                }
            ]
        );
    }
}
add_action( 'init', 'create_block_parallax_slider_block_init', 99 );
