import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import MediaEmbedCommand from '@ckeditor/ckeditor5-media-embed/src/mediaembedcommand';


/**
 *
 * @extends module:core/plugin~Plugin
 */
export default class MediaEmbedIframely extends Plugin {

	static get requires() {
		return [MediaEmbedCommand];
	}

	static get pluginName() {
		return 'MediaEmbedIframely';
	}


	/**
	 * @inheritDoc
	 */
	init() {

		const editor = this.editor;
		const iframelyError = editor.config.get(('MediaEmbedIframely.error'));
		const customMediaConverterTimeout = {};

		// CAN'T USE THE FOLLOWING SINCE WHEN THE EDITOR IS LOADED WITH EXISTING MEDIA
		// THE conversionApi PARAM DOESN'T HAVE THE REQUIRED writer
		// SO FALLING BACK TO EDITING THE DOM DIRECTLY WITH JQUERY
		//
		// function _insertMediaPreview(viewWidgetMediaWrapperNode, viewWriter, viewWidget, EmbedPreviewContent) {
		// 	console.log('ViewWriterInsideInsert',viewWriter);
		// 	viewWriter.remove( viewWidgetMediaWrapperNode );
		//
		// 	const newPreview = viewWriter.createUIElement( 'div', null, function( domDocument ) {
		// 		const domElement = this.toDomElement( domDocument );
		//
		// 		$(domElement).html(EmbedPreviewContent);
		//
		// 		return domElement;
		// 	} );
		//
		// 	viewWriter.insert( viewWriter.createPositionAt( viewWidget, 0 ), newPreview );
		// }

		function _CustomMediaHandlerPlugin(editor) {
			editor.editing.downcastDispatcher.on('insert:media', _customMediaConverter, {priority: 'low'});
			editor.editing.downcastDispatcher.on('attribute:url:media', _customMediaConverter, {priority: 'low'});
		}

		function _customMediaConverter(evt, data, conversionApi) {
			const embedUrl = data.item.getAttribute('url');

			console.log('_customMediaConverter Triggered!');

			// REQUIRED TO CANCEL THE DOUBLE EXECUTION (ON INSERT/EDIT, BOTH insert:media AND attribute:url:media ARE TRIGGERED)
			if (customMediaConverterTimeout.hasOwnProperty(embedUrl)) {
				clearTimeout(customMediaConverterTimeout[embedUrl]);
			}
			customMediaConverterTimeout[embedUrl] = setTimeout(() => {

				if ($(".ck-content oembed[class=not-initiated][url='" + embedUrl + "']").length) {
					$(".ck-content oembed[class=not-initiated][url='" + embedUrl + "']").each(function () {
						var embed = $(this);
						var embedMediaWrapper = embed.parent();
						var embedContainer = embedMediaWrapper.parent();

						if (embedUrl !== undefined && embedUrl !== null) {
							$.iframely.getPageData(embedUrl, function (error, data) {

								if ((error !== null && error !== undefined) || data.links === undefined || data.links === null) {
									embed.replaceWith(iframelyError);
								} else {
									var options = {
										iframelyData: data,
										httpsFirst: true,
										returnOne: true
									};

									var link = $.iframely.filterLinksByRel(["reader", 'app', "player", "inline"], data.links, options)
									if (link !== null && link !== -1 && link !== undefined) {
										var $el = $.iframely.generateLinkElement(link, {
											iframelyData: data,
											httpsFirst: true,
											returnOne: true
										});

										// iframely.js registerIframesIn is broken so we'll have to do it manually
										// https://github.com/itteco/iframely/issues/225
										var windowMessaging = function () {
											return {
												postMessage: function (message, target_url, target) {
													message = JSON.stringify(message);
													target_url = target_url || '*';
													target = target || window.parent;  // default to parent
													if (window['postMessage']) {
														// the browser supports window.postMessage, so call it with a targetOrigin
														// set appropriately, based on the target_url parameter.
														target['postMessage'](message, target_url.replace(/([^:]+:\/\/[^\/]+).*/, '$1'));

													}
												},
												receiveMessage: function (callback) {
													function cb(e) {
														var message;
														try {
															message = JSON.parse(e.data);
														} catch (ex) {
														}

														callback(e, message);
													}
													// browser supports window.postMessage
													if (window['postMessage']) {
														if (window['addEventListener']) {
															window[callback ? 'addEventListener' : 'removeEventListener']('message', cb, !1);
														} else {
															window[callback ? 'attachEvent' : 'detachEvent']('onmessage', cb);
														}
													}
												}
											};
										}();

										$el.find('iframe').each(function () {
											var $iframe = $(this);
											$iframe.attr('iframely-registered', true);

											$iframe.on('load', function () {
												var iframesCounter = $.iframely.iframesCounter = ($.iframely.iframesCounter || 0) + 1,
													windowId = iframesCounter;

												$.iframely.iframes[windowId] = $iframe;
												windowMessaging.postMessage({
													method: "register",
													windowId: windowId
												}, '*', this.contentWindow);
											});
										});

										embed.replaceWith($el);
									} else {
										embed.replaceWith(iframelyError);
									}

								}
							});
						}
					});
				}

				// CAN'T USE THE FOLLOWING SINCE WHEN THE EDITOR IS LOADED WITH EXISTING MEDIA
				// THE conversionApi PARAM DOESN'T HAVE THE REQUIRED writer
				// SO FALLING BACK TO EDITING THE DOM DIRECTLY WITH JQUERY
				//
				// const viewWriter = conversionApi.writer;
				// const viewWidget = conversionApi.mapper.toViewElement( data.item );
				// const viewWidgetMediaWrapperNode = viewWidget.getChild( 0 );
				// const embedUrl =  data.item.getAttribute('url');
				//
				// if (embedUrl!==undefined&&embedUrl!==null)
				// {
				// 	$.iframely.getPageData(embedUrl, function(error, data) {
				//
				// 		if ((error!==null&&error!==undefined)||data.links===undefined||data.links===null)
				// 		{
				// 			console.log('conversionApiBeforeInsert', conversionApi);
				// 			console.log('ViewWriterBeforeInsert',viewWriter);
				// 			_insertMediaPreview(viewWidgetMediaWrapperNode, viewWriter, viewWidget, iframelyError);
				// 		}
				// 		else
				// 		{
				// 			var options = {
				// 				iframelyData: data,
				// 				httpsFirst: true,
				// 				returnOne: true
				// 			};
				//
				// 			var link = $.iframely.filterLinksByRel(["reader", 'app', "player", "inline"],data.links, options)
				// 			if (link!==null&&link!==-1&&link!==undefined)
				// 			{
				// 				var $el = $.iframely.generateLinkElement(link, {
				// 					iframelyData: data,
				// 					httpsFirst: true,
				// 					returnOne: true
				// 				});
				//
				// 				//iframely.js registerIframesIn is broken so we'll have to do it manually
				// 				// https://github.com/itteco/iframely/issues/225
				// 				var windowMessaging = function(){
				// 					return {
				// 						postMessage : function(message, target_url, target) {
				// 							message = JSON.stringify(message);
				// 							target_url = target_url || '*';
				// 							target = target || window.parent;  // default to parent
				// 							if (window['postMessage']) {
				// 								// the browser supports window.postMessage, so call it with a targetOrigin
				// 								// set appropriately, based on the target_url parameter.
				// 								target['postMessage'](message, target_url.replace( /([^:]+:\/\/[^\/]+).*/, '$1'));
				//
				// 							}
				// 						},
				// 						receiveMessage : function(callback) {
				// 							function cb(e) {
				// 								var message;
				// 								try {
				// 									message = JSON.parse(e.data);
				// 								} catch (ex) {
				// 								}
				//
				// 								callback(e, message);
				// 							}
				// 							// browser supports window.postMessage
				// 							if (window['postMessage']) {
				// 								if (window['addEventListener']) {
				// 									window[callback ? 'addEventListener' : 'removeEventListener']('message', cb, !1);
				// 								} else {
				// 									window[callback ? 'attachEvent' : 'detachEvent']('onmessage', cb);
				// 								}
				// 							}
				// 						}
				// 					};
				// 				}();
				//
				// 				$el.find('iframe').each(function(){
				// 					var $iframe = $(this);
				// 					$iframe.attr('iframely-registered', true);
				//
				// 					$iframe.on('load', function() {
				// 						var iframesCounter = $.iframely.iframesCounter = ($.iframely.iframesCounter || 0) + 1,
				// 							windowId = iframesCounter;
				//
				// 						$.iframely.iframes[windowId] = $iframe;
				// 						windowMessaging.postMessage({
				// 							method: "register",
				// 							windowId: windowId
				// 						}, '*', this.contentWindow);
				// 					});
				// 				});
				// 				console.log('conversionApiBeforeInsert', conversionApi);
				// 				console.log('ViewWriterBeforeInsert',viewWriter);
				// 				_insertMediaPreview(viewWidgetMediaWrapperNode, viewWriter, viewWidget, $el);
				// 			}
				// 			else
				// 			{
				// 				console.log('conversionApiBeforeInsert', conversionApi);
				// 				console.log('ViewWriterBeforeInsert',viewWriter);
				// 				_insertMediaPreview(viewWidgetMediaWrapperNode, viewWriter, viewWidget, iframelyError);
				// 			}
				//
				// 		}
				// 	});
				// }
			}, 150);
		}

		_CustomMediaHandlerPlugin(editor);
	}

}
