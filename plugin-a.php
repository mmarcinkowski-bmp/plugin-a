<?php

/**
 * Plugin Name: Plugin A
 * Description: Test Plugin A
 * Version: 1.0.0
 * Author: Marcin M
 * License: GPL v2
 */

function displayPluginAPage() {
    echo 'Plugin A test2';
}
function addPluginAMenu() {
    add_menu_page(
        'Plugin A',// page title
        'Plugin A',// menu title
        'manage_options',// capability
        'plugin-a',// menu slug
        'displayPluginAPage' // callback function
    );
}
add_action('admin_menu', 'addPluginAMenu');