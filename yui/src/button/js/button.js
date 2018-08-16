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

/*
 * @package    atto_annoto
 * @copyright  Devlion  
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_annoto-button
 */

/**
 * Atto text editor annoto plugin.
 *
 * @namespace M.atto_annoto
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

Y.namespace('M.atto_annoto').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function(btn) {
            
            var button = this.addButton({
            icon: 'icon',
            iconComponent: 'atto_annoto',
            buttonName: 'annoto',
            callback: this._toggleAnnoto
        });

        this.get('host').on('pluginsloaded', function(e) {
            if (btn.defaultmode == 'on') {
                this._setAnnotoOn();
            } else if (btn.defaultmode == 'off') {
                this._setAnnotoOff();
            } else {
                this._setAnnoto(); // default value
            }
        }, this, button);

    },

    /**
     * toggle Annoto annoto
     *
     * @method _toggleAnnoto
     * @private
     */
    _toggleAnnoto: function() {
        var checkTag = Y.all('annoto');
        if (checkTag.size() > 0) {
            checkTag.remove();
            this.unHighlightButtons('annoto');
            this.markUpdated();
        } else {
            var checkDisTag = Y.all('annotodisable');
            if (checkDisTag.size() > 0) {
                checkDisTag.remove();
            }    
            var annotoTag = Y.Node.create('<annoto />');
            annotoTag.appendTo(this.editor);
            this.highlightButtons('annoto');
            this.markUpdated();
        } 
    },

    _setAnnoto: function () {
        var checkTag = Y.all('annoto');
        if (checkTag.size() > 0) {
            this.highlightButtons('annoto');
            this.markUpdated();
        }
    },

    _setAnnotoOn: function () {
        var checkDisTag = Y.all('annotodisable');
        if (checkDisTag.size() > 0) {
            checkDisTag.remove();
        }
        var checkTag = Y.all('annoto');
        if (checkTag.size() <= 1) {
            var annotoTag = Y.Node.create('<annoto />');
            annotoTag.appendTo(this.editor);
            this.highlightButtons('annoto');
            this.markUpdated();
        }
    },

    _setAnnotoOff: function () {
        var checkTag = Y.all('annoto');
        if (checkTag.size() > 0) {
            checkTag.remove();
            this.unHighlightButtons('annoto');
        }
        var checkDisTag = Y.all('annotodisable');
        if (checkDisTag.size() <= 1) {
            var annotoDisTag = Y.Node.create('<annotodisable />');
            annotoDisTag.appendTo(this.editor);
            this.markUpdated();
        }
    }

});
