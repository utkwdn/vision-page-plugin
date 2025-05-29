<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

if (!function_exists('vision_page_render_callback')) {
    function vision_page_render_callback($attributes) {
		return '<div id="vision-page" class="alignfull"></div>';
    }
}

// Output the rendered HTML
echo vision_page_render_callback($attributes);
