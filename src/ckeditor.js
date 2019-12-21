/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from '@ckeditor/ckeditor5-font/src/font';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import MediaEmbedIframely from "../plugins/MediaEmbedIframely/MediaEmbedIframely";
import ckeditor5Help from "../plugins/ckeditor5Help/ckeditor5Help";

// export default class ClassicEditor extends ClassicEditorBase {}
class FullEditor extends ClassicEditorBase {
}

class MiniEditor extends ClassicEditorBase {
}

// Plugins to include in the build.
FullEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,

	Bold,
	Italic,
	Underline,
	Code,
	Font,

	IndentBlock,

	Alignment,

	BlockQuote,
	CKFinder,
	Heading,

	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,

	MediaEmbedIframely,
	ckeditor5Help
];

MiniEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,

	Bold,
	Italic,
	Underline,
	Font,

	Indent,
	IndentBlock,

	Link,

	Paragraph
];

// Editor configuration.
FullEditor.defaultConfig = {
	toolbar: {
		items: [
			'help',

			'|',

			'undo',
			'redo',

			'|',

			'heading',

			'|',

			'alignment',

			'|',

			'bold',
			'italic',
			'underline',

			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',

			'|',

			'outdent',
			'indent',

			'|',

			'bulletedList',
			'numberedList',

			'blockQuote',
			'insertTable',
			'link',

			'|',

			'ckfinder',
			'mediaEmbed'
		]
	},

	indentBlock: {
		offset: 1,
		unit: 'em'
	},

	fontSize: {
		options: [
			9,
			11,
			13,
			'default',
			17,
			19,
			21
		]
	},

	fontColor: {
		colors: [ 'hsl(0,0%,0%)', 'hsl(0,0%,12.5%)', 'hsl(0,0%,25%)', 'hsl(0,0%,37.5%)',
			'hsl(0,0%,50%)', 'hsl(0,0%,62.50%)', 'hsl(0,0%,75%)', 'hsl(0,0%,87.5%)', {
				color: 'hsl(0,0%,100%)',
				hasBorder: !0
			}, 'hsl(0,100%,10%)', 'hsl(0,100%,20%)', 'hsl(0,100%,30%)', 'hsl(0,100%,40%)',
			'hsl(0,100%,50%)', 'hsl(0,100%,60%)', 'hsl(0,100%,70%)', 'hsl(0,100%,80%)', {
				color: 'hsl(0,100%,90%)',
				hasBorder: !0
			}, 'hsl(30,100%,10%)', 'hsl(30,100%,20%)', 'hsl(30,100%,30%)', 'hsl(30,100%,40%)',
			'hsl(30,100%,50%)', 'hsl(30,100%,60%)', 'hsl(30,100%,70%)', 'hsl(30,100%,80%)', {
				color: 'hsl(30,100%,90%)',
				hasBorder: !0
			}, 'hsl(60,100%,10%)', 'hsl(60,100%,20%)', 'hsl(60,100%,30%)', 'hsl(60,100%,40%)',
			'hsl(60,100%,50%)', 'hsl(60,100%,60%)', 'hsl(60,100%,70%)', 'hsl(60,100%,80%)', {
				color: 'hsl(60,100%,90%)',
				hasBorder: !0
			}, 'hsl(90,100%,10%)', 'hsl(90,100%,20%)', 'hsl(90,100%,30%)', 'hsl(90,100%,40%)',
			'hsl(90,100%,50%)', 'hsl(90,100%,60%)', 'hsl(90,100%,70%)', 'hsl(90,100%,80%)', {
				color: 'hsl(90,100%,90%)',
				hasBorder: !0
			}, 'hsl(120,100%,10%)', 'hsl(120,100%,20%)', 'hsl(120,100%,30%)', 'hsl(120,100%,40%)',
			'hsl(120,100%,50%)', 'hsl(120,100%,60%)', 'hsl(120,100%,70%)', 'hsl(120,100%,80%)', {
				color: 'hsl(120,100%,90%)',
				hasBorder: !0
			}, 'hsl(150,100%,10%)', 'hsl(150,100%,20%)', 'hsl(150,100%,30%)', 'hsl(150,100%,40%)',
			'hsl(150,100%,50%)', 'hsl(150,100%,60%)', 'hsl(150,100%,70%)', 'hsl(150,100%,80%)', {
				color: 'hsl(150,100%,90%)',
				hasBorder: !0
			}, 'hsl(180,100%,10%)', 'hsl(180,100%,20%)', 'hsl(180,100%,30%)', 'hsl(180,100%,40%)',
			'hsl(180,100%,50%)', 'hsl(180,100%,60%)', 'hsl(180,100%,70%)', 'hsl(180,100%,80%)', {
				color: 'hsl(180,100%,90%)',
				hasBorder: !0
			}, 'hsl(210,100%,10%)', 'hsl(210,100%,20%)', 'hsl(210,100%,30%)', 'hsl(210,100%,40%)',
			'hsl(210,100%,50%)', 'hsl(210,100%,60%)', 'hsl(210,100%,70%)', 'hsl(210,100%,80%)', {
				color: 'hsl(210,100%,90%)',
				hasBorder: !0
			}, 'hsl(240,100%,10%)', 'hsl(240,100%,20%)', 'hsl(240,100%,30%)', 'hsl(240,100%,40%)',
			'hsl(240,100%,50%)', 'hsl(240,100%,60%)', 'hsl(240,100%,70%)', 'hsl(240,100%,80%)', {
				color: 'hsl(240,100%,90%)',
				hasBorder: !0
			}, 'hsl(270,100%,10%)', 'hsl(270,100%,20%)', 'hsl(270,100%,30%)', 'hsl(270,100%,40%)',
			'hsl(270,100%,50%)', 'hsl(270,100%,60%)', 'hsl(270,100%,70%)', 'hsl(270,100%,80%)', {
				color: 'hsl(270,100%,90%)',
				hasBorder: !0
			}, 'hsl(300,100%,10%)', 'hsl(300,100%,20%)', 'hsl(300,100%,30%)', 'hsl(300,100%,40%)',
			'hsl(300,100%,50%)', 'hsl(300,100%,60%)', 'hsl(300,100%,70%)', 'hsl(300,100%,80%)', {
				color: 'hsl(300,100%,90%)',
				hasBorder: !0
			}, 'hsl(330,100%,10%)', 'hsl(330,100%,20%)', 'hsl(330,100%,30%)', 'hsl(330,100%,40%)',
			'hsl(330,100%,50%)', 'hsl(330,100%,60%)', 'hsl(330,100%,70%)', 'hsl(330,100%,80%)', {
				color: 'hsl(330,100%,90%)',
				hasBorder: !0
			} ], columns: 9, documentColors: 18
	},

	fontBackgroundColor: {
		colors: [ 'hsl(0,0%,0%)', 'hsl(0,0%,12.5%)', 'hsl(0,0%,25%)', 'hsl(0,0%,37.5%)',
			'hsl(0,0%,50%)', 'hsl(0,0%,62.50%)', 'hsl(0,0%,75%)', 'hsl(0,0%,87.5%)', {
				color: 'hsl(0,0%,100%)',
				hasBorder: !0
			}, 'hsl(0,100%,10%)', 'hsl(0,100%,20%)', 'hsl(0,100%,30%)', 'hsl(0,100%,40%)',
			'hsl(0,100%,50%)', 'hsl(0,100%,60%)', 'hsl(0,100%,70%)', 'hsl(0,100%,80%)', {
				color: 'hsl(0,100%,90%)',
				hasBorder: !0
			}, 'hsl(30,100%,10%)', 'hsl(30,100%,20%)', 'hsl(30,100%,30%)', 'hsl(30,100%,40%)',
			'hsl(30,100%,50%)', 'hsl(30,100%,60%)', 'hsl(30,100%,70%)', 'hsl(30,100%,80%)', {
				color: 'hsl(30,100%,90%)',
				hasBorder: !0
			}, 'hsl(60,100%,10%)', 'hsl(60,100%,20%)', 'hsl(60,100%,30%)', 'hsl(60,100%,40%)',
			'hsl(60,100%,50%)', 'hsl(60,100%,60%)', 'hsl(60,100%,70%)', 'hsl(60,100%,80%)', {
				color: 'hsl(60,100%,90%)',
				hasBorder: !0
			}, 'hsl(90,100%,10%)', 'hsl(90,100%,20%)', 'hsl(90,100%,30%)', 'hsl(90,100%,40%)',
			'hsl(90,100%,50%)', 'hsl(90,100%,60%)', 'hsl(90,100%,70%)', 'hsl(90,100%,80%)', {
				color: 'hsl(90,100%,90%)',
				hasBorder: !0
			}, 'hsl(120,100%,10%)', 'hsl(120,100%,20%)', 'hsl(120,100%,30%)', 'hsl(120,100%,40%)',
			'hsl(120,100%,50%)', 'hsl(120,100%,60%)', 'hsl(120,100%,70%)', 'hsl(120,100%,80%)', {
				color: 'hsl(120,100%,90%)',
				hasBorder: !0
			}, 'hsl(150,100%,10%)', 'hsl(150,100%,20%)', 'hsl(150,100%,30%)', 'hsl(150,100%,40%)',
			'hsl(150,100%,50%)', 'hsl(150,100%,60%)', 'hsl(150,100%,70%)', 'hsl(150,100%,80%)', {
				color: 'hsl(150,100%,90%)',
				hasBorder: !0
			}, 'hsl(180,100%,10%)', 'hsl(180,100%,20%)', 'hsl(180,100%,30%)', 'hsl(180,100%,40%)',
			'hsl(180,100%,50%)', 'hsl(180,100%,60%)', 'hsl(180,100%,70%)', 'hsl(180,100%,80%)', {
				color: 'hsl(180,100%,90%)',
				hasBorder: !0
			}, 'hsl(210,100%,10%)', 'hsl(210,100%,20%)', 'hsl(210,100%,30%)', 'hsl(210,100%,40%)',
			'hsl(210,100%,50%)', 'hsl(210,100%,60%)', 'hsl(210,100%,70%)', 'hsl(210,100%,80%)', {
				color: 'hsl(210,100%,90%)',
				hasBorder: !0
			}, 'hsl(240,100%,10%)', 'hsl(240,100%,20%)', 'hsl(240,100%,30%)', 'hsl(240,100%,40%)',
			'hsl(240,100%,50%)', 'hsl(240,100%,60%)', 'hsl(240,100%,70%)', 'hsl(240,100%,80%)', {
				color: 'hsl(240,100%,90%)',
				hasBorder: !0
			}, 'hsl(270,100%,10%)', 'hsl(270,100%,20%)', 'hsl(270,100%,30%)', 'hsl(270,100%,40%)',
			'hsl(270,100%,50%)', 'hsl(270,100%,60%)', 'hsl(270,100%,70%)', 'hsl(270,100%,80%)', {
				color: 'hsl(270,100%,90%)',
				hasBorder: !0
			}, 'hsl(300,100%,10%)', 'hsl(300,100%,20%)', 'hsl(300,100%,30%)', 'hsl(300,100%,40%)',
			'hsl(300,100%,50%)', 'hsl(300,100%,60%)', 'hsl(300,100%,70%)', 'hsl(300,100%,80%)', {
				color: 'hsl(300,100%,90%)',
				hasBorder: !0
			}, 'hsl(330,100%,10%)', 'hsl(330,100%,20%)', 'hsl(330,100%,30%)', 'hsl(330,100%,40%)',
			'hsl(330,100%,50%)', 'hsl(330,100%,60%)', 'hsl(330,100%,70%)', 'hsl(330,100%,80%)', {
				color: 'hsl(330,100%,90%)',
				hasBorder: !0
			} ], columns: 9, documentColors: 18
	},

	image: {
		// You need to configure the image toolbar, too, so it uses the new style buttons.
		toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignRight', 'imageStyle:full', 'imageStyle:alignLeft' ],

		styles: [
			// This option is equal to a situation where no style is applied.
			'full',

			// This represents an image aligned to the left.
			'alignLeft',

			// This represents an image aligned to the right.
			'alignRight'
		]
	},

	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},

	link: {
		// Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
		addTargetToExternalLinks: true,
	},

	// Configure 'mediaEmbed' with Iframely previews.
	mediaEmbed: {

		// Previews are always enabled if there’s a provider for a URL (below regex catches all URLs)
		// By default `previewsInData` are disabled, but let’s set it to `false` explicitely to be sure
		previewsInData: false,

		providers: [
			{
				// hint: this is just for previews. Get actual HTML codes by making API calls from your CMS
				name: 'iframely previews',

				// Match all URLs or just the ones you need:
				url: /.+/,

				html: match => {
					const url = match[ 0 ];

					return (
						'<oembed url="'+url+'" class="not-initiated">' +
						'<div class="ph-item" style=" border: 0;">\n' +
						'    <div class="ph-col-12">\n' +
						'        <div class="ph-picture">Loading Media</div>\n' +
						'    </div>\n' +
						'</div>' +
						'</oembed>'
					);
				}
			}
		]
	},

	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

MiniEditor.defaultConfig = {
	toolbar: {
		items: [

			'bold',
			'italic',
			'underline',
			'fontColor',

			'|',

			'link'
		]
	},
	fontColor: {
		colors: [ 'hsl(0,0%,0%)', 'hsl(0,0%,12.5%)', 'hsl(0,0%,25%)', 'hsl(0,0%,37.5%)',
			'hsl(0,0%,50%)', 'hsl(0,0%,62.50%)', 'hsl(0,0%,75%)', 'hsl(0,0%,87.5%)', {
				color: 'hsl(0,0%,100%)',
				hasBorder: !0
			}, 'hsl(0,100%,10%)', 'hsl(0,100%,20%)', 'hsl(0,100%,30%)', 'hsl(0,100%,40%)',
			'hsl(0,100%,50%)', 'hsl(0,100%,60%)', 'hsl(0,100%,70%)', 'hsl(0,100%,80%)', {
				color: 'hsl(0,100%,90%)',
				hasBorder: !0
			}, 'hsl(30,100%,10%)', 'hsl(30,100%,20%)', 'hsl(30,100%,30%)', 'hsl(30,100%,40%)',
			'hsl(30,100%,50%)', 'hsl(30,100%,60%)', 'hsl(30,100%,70%)', 'hsl(30,100%,80%)', {
				color: 'hsl(30,100%,90%)',
				hasBorder: !0
			}, 'hsl(60,100%,10%)', 'hsl(60,100%,20%)', 'hsl(60,100%,30%)', 'hsl(60,100%,40%)',
			'hsl(60,100%,50%)', 'hsl(60,100%,60%)', 'hsl(60,100%,70%)', 'hsl(60,100%,80%)', {
				color: 'hsl(60,100%,90%)',
				hasBorder: !0
			}, 'hsl(90,100%,10%)', 'hsl(90,100%,20%)', 'hsl(90,100%,30%)', 'hsl(90,100%,40%)',
			'hsl(90,100%,50%)', 'hsl(90,100%,60%)', 'hsl(90,100%,70%)', 'hsl(90,100%,80%)', {
				color: 'hsl(90,100%,90%)',
				hasBorder: !0
			}, 'hsl(120,100%,10%)', 'hsl(120,100%,20%)', 'hsl(120,100%,30%)', 'hsl(120,100%,40%)',
			'hsl(120,100%,50%)', 'hsl(120,100%,60%)', 'hsl(120,100%,70%)', 'hsl(120,100%,80%)', {
				color: 'hsl(120,100%,90%)',
				hasBorder: !0
			}, 'hsl(150,100%,10%)', 'hsl(150,100%,20%)', 'hsl(150,100%,30%)', 'hsl(150,100%,40%)',
			'hsl(150,100%,50%)', 'hsl(150,100%,60%)', 'hsl(150,100%,70%)', 'hsl(150,100%,80%)', {
				color: 'hsl(150,100%,90%)',
				hasBorder: !0
			}, 'hsl(180,100%,10%)', 'hsl(180,100%,20%)', 'hsl(180,100%,30%)', 'hsl(180,100%,40%)',
			'hsl(180,100%,50%)', 'hsl(180,100%,60%)', 'hsl(180,100%,70%)', 'hsl(180,100%,80%)', {
				color: 'hsl(180,100%,90%)',
				hasBorder: !0
			}, 'hsl(210,100%,10%)', 'hsl(210,100%,20%)', 'hsl(210,100%,30%)', 'hsl(210,100%,40%)',
			'hsl(210,100%,50%)', 'hsl(210,100%,60%)', 'hsl(210,100%,70%)', 'hsl(210,100%,80%)', {
				color: 'hsl(210,100%,90%)',
				hasBorder: !0
			}, 'hsl(240,100%,10%)', 'hsl(240,100%,20%)', 'hsl(240,100%,30%)', 'hsl(240,100%,40%)',
			'hsl(240,100%,50%)', 'hsl(240,100%,60%)', 'hsl(240,100%,70%)', 'hsl(240,100%,80%)', {
				color: 'hsl(240,100%,90%)',
				hasBorder: !0
			}, 'hsl(270,100%,10%)', 'hsl(270,100%,20%)', 'hsl(270,100%,30%)', 'hsl(270,100%,40%)',
			'hsl(270,100%,50%)', 'hsl(270,100%,60%)', 'hsl(270,100%,70%)', 'hsl(270,100%,80%)', {
				color: 'hsl(270,100%,90%)',
				hasBorder: !0
			}, 'hsl(300,100%,10%)', 'hsl(300,100%,20%)', 'hsl(300,100%,30%)', 'hsl(300,100%,40%)',
			'hsl(300,100%,50%)', 'hsl(300,100%,60%)', 'hsl(300,100%,70%)', 'hsl(300,100%,80%)', {
				color: 'hsl(300,100%,90%)',
				hasBorder: !0
			}, 'hsl(330,100%,10%)', 'hsl(330,100%,20%)', 'hsl(330,100%,30%)', 'hsl(330,100%,40%)',
			'hsl(330,100%,50%)', 'hsl(330,100%,60%)', 'hsl(330,100%,70%)', 'hsl(330,100%,80%)', {
				color: 'hsl(330,100%,90%)',
				hasBorder: !0
			} ], columns: 9, documentColors: 18
	},

	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};

export default {
	FullEditor, MiniEditor
};
