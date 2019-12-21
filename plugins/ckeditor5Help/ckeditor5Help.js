import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import imageIcon from './icons/help.svg';

export default class ckeditor5Help extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ckeditor5Help';
	}

	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'help', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Help',
				icon: imageIcon,
				tooltip: false
			} );

			// Callback executed once the image is clicked.
			view.on( 'execute', () => {
				console.log('Help Triggered');
				createCkeditorHelpModal();
			} );

			return view;
		} );
	}
}
