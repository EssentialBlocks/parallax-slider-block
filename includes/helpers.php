<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Parallax_Slider_Helper
{

    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }

    /**
     * Load fonts.
     *
     * @access public
     */
    public function enqueues($hook)
    {
        global $pagenow;

        /**
         * Only for admin add/edit pages/posts
         */
        if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php' || ($pagenow == 'themes.php' && !empty($_SERVER['QUERY_STRING']) && str_contains($_SERVER['QUERY_STRING'], 'gutenberg-edit-site'))) {

            $controls_dependencies = require PARALLAX_SLIDER_BLOCK_ADMIN_PATH . '/dist/modules.asset.php';
            wp_register_script(
                "parallax-slider-block-controls-util",
                PARALLAX_SLIDER_BLOCK_ADMIN_URL . '/dist/modules.js',
                array_merge($controls_dependencies['dependencies'],['lodash']),
                $controls_dependencies['version'],
                true
            );

            // The editor wraps tablet/mobile styles in media queries built from these;
            // use the same breakpoints the style handler uses for the frontend CSS.
            // EbStyleHandlerParseCss is shared (class_exists-guarded) across EB-family
            // plugins, so an older copy loaded by another plugin may lack this method.
            $responsive_breakpoints = array('tablet' => 1024, 'mobile' => 767);
            if (method_exists('EbStyleHandlerParseCss', 'get_responsive_breakpoints')) {
                $responsive_breakpoints = array(
                    'tablet' => EbStyleHandlerParseCss::get_responsive_breakpoints('tablet'),
                    'mobile' => EbStyleHandlerParseCss::get_responsive_breakpoints('mobile'),
                );
            }

            wp_localize_script('parallax-slider-block-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
                'responsiveBreakpoints' => $responsive_breakpoints,
            ));

            if ($pagenow == 'post-new.php' || $pagenow == 'post.php') {
                wp_localize_script('parallax-slider-block-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($pagenow == 'site-editor.php' || $pagenow == 'themes.php') {
                wp_localize_script('parallax-slider-block-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-site'
                ));
            }

            wp_enqueue_style(
                'essential-blocks-editor-css',
                PARALLAX_SLIDER_BLOCK_ADMIN_URL . '/dist/modules.css',
                array(),
                $controls_dependencies['version'],
                'all'
            );
        }
    }
    public static function get_block_register_path($blockname, $blockPath)
    {
        if ((float) get_bloginfo('version') <= 5.6) {
            return $blockname;
        } else {
            return $blockPath;
        }
    }
}
Parallax_Slider_Helper::register();
