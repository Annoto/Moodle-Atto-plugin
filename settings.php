<?php

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Settings of annoto plugin for atto editor
 *
 * @package    atto_annoto
 * @copyright  Annoto Ltd.
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

    // Default atto_annoto mode
    $defaultmode         = get_string('default_mode','atto_annoto');
    $defaultmodedescr    = get_string('default_mode_descr', 'atto_annoto');
    $defaultmodeselect   = array( 'none' => get_string('default_mode_none','atto_annoto'),
                                'on' => get_string('default_mode_on','atto_annoto'),
                                'off' => get_string('default_mode_off','atto_annoto')
                           );
    $settings->add(new admin_setting_configselect('atto_annoto/default_mode', $defaultmode, $defaultmodedescr, 'none', $defaultmodeselect));