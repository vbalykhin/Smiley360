Ext.define('smiley360.view.Connect', {
	extend: 'Ext.Panel',
	alias: 'widget.connectview',
	requires: [
        'Ext.carousel.Carousel',
		'Ext.field.Search'
	],
	config: {
		id: 'xConnectView',
		items: [{
			xtype: 'container',
			layout: 'vbox',
			flex: 1,
			items: [{
				xtype: 'spacer',
				height: '14px',
				style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 5px 5px 0px 0px;'
			}, {
				xtype: 'spacer',
				height: '7px',
				style: 'background-color: #efecea;'
			}, {
				xtype: 'container',
				laytout: 'vbox',
				items: [{
					xtype: 'container',
					cls: 'has-shadow',
					layout: 'hbox',
					items: [{
						xtype: 'label',
						html: 'FEATURED BRANDS',
						cls: 'heading-text active-sign',
						style: 'padding-left: 15px;',
						flex: 2,
					},],
				}, {
					xtype: 'container',
					style: 'background-color: #efecea',
					items: [{
						xtype: 'carousel',
						id: 'xFeaturedList',
						cls: 'browse-pict',
						direction: 'horizontal',
						style: 'background-color: #efecea',
						dragable: false,
						indicator: false,
						width: '100%',
						height: 120,
						defaults: {
							styleHtmlContent: true
						},
						listeners: {
							painted: function (carousel) {
								me = this;
								carousel.pageTurner = new Ext.util.DelayedTask(function () {
									if (me.getActiveIndex() == me.items.length - 1) {
										me.setActiveItem(0, 'slide');
									}
									else {
										me.next();
									}
								}, carousel);

								carousel.pageTurner.delay(3000);
							}
						},
					}, {
						xtype: 'panel',
						html: '<div class="left-btn-mission"></div><div class="right-btn-mission"></div>'
					}, {
						xtype: 'spacer',
						style: 'background-color: #efecea; border-bottom: 1px dashed #d7cfcd;',
						height: 20,
					},
					{
						xtype: 'container',
						style: 'background-color: #F4F3F1; padding: 40px 25px;',
						layout: 'vbox',
						items: [{
							xtype: 'panel',
							layout: 'hbox',
							style: 'border-radius: 5px 5px 0px 0px;',
							cls: 'menu-list-btn-recieve',
							listeners: {
								element: 'element',
								tap: function () {
									this.up('#xConnectView').fireEvent('onSearchTapCommand', this, Ext.getCmp('BrandTitleSearchField').getValue().toString(), 10, 10);
								},
							},
							items: [{
								xtype: 'container',
								docked: 'left',
								style: 'margin-top:-5px; ',
								items: [{
									xtype: 'label', style: 'border-radius: 5px 0px 0px 0px; margin-top:-5px; padding: 15px 2px 15px 15px; background: -webkit-linear-gradient(top, #9f9a98 0%, #423c39 100%);',
									html: 'SEARCH',
								}],
							}, {
								xtype: 'spacer',
								style: 'margin-top:-5px; background: -webkit-linear-gradient(top, #9f9a98 0%, #423c39 100%); height: 45px;',
							}, {
								xtype: 'container',
								width: 40,
								style: 'margin-top:-5px; height: 45px; border-radius: 0px 5px 0px 0px; background: -webkit-linear-gradient(top, #9f9a98 0%, #423c39 100%); ',
								//docked: 'right',
								//cls: 'btn-icon-special',
								items: [{
									xtype: 'image',
									height: 20,
									width: 20,
									style: 'margin-top: 10px;',
									//cls: 'btn-icon-special',
									//style: 'background-position: 5px 5px;',
									src: 'resources/images/search_connect.png',
									//padding: '14px 15px',
								}],
							}],
						},

						{
							xtype: 'panel',
							layout: 'vbox',
							cls: 'has-shadow',
							style: 'border-radius: 0px 0px 5px 5px; background-color: #e2ddda; margin: -20px -10px 30px -10px;',
							id: 'search_panel',
							items: [{
								xtype: 'label',
								height: '3px',
								style: 'background-color:#fba00a; '
							}, {
								xtype: 'container',
								layout: 'vbox',
								padding: 30,
								items: [{
									xtype: 'searchfield',
									placeHolder: 'Brand name',
									id: 'BrandTitleSearchField',
									cls: 'cust-input cust-input-search',
									style: 'background-color: white; font-family: din bold; font-size:1em;',
									margin: '0px -10px',
								}],
							}],
						},
						//{
						//	xtype: 'button',
						//	style: 'padding: 30px 0px 50px 0px; margin: 60px 0px;',
						//	cls: 'connect-btn-browse',
						//	text: 'BROWSE',
						//	listeners: {
						//		tap: function () {
						//			this.up('#xConnectView').fireEvent('onBrowseTapCommand', this, smiley360.memberData.UserId);
						//		},
						//	},
						//}
						
						{
							xtype: 'panel',
							layout: 'hbox',
							cls: 'menu-list-btn-recieve btn-icon-special',
							listeners: {
								element: 'element',
								tap: function () {
									this.up('#xConnectView').fireEvent('onBrowseTapCommand', this, smiley360.memberData.UserId);
								},
							},
							items: [{
								xtype: 'container',
								docked: 'left',
								items: [{
									xtype: 'label', style: 'padding: 15px 2px 15px 15px;',
									html: 'BROWSE',
								}],
							}, {
								xtype: 'spacer',
								style: 'background: -webkit-linear-gradient(top, #9f9a98 0%, #423c39 100%); height: 50px;',
							}, {
								xtype: 'container',
								docked: 'right',
								style: 'margin-top: 8px;',
								items: [{
									xtype: 'image',
									style: 'margin-right: 15px;',
									//style: 'background-position: 5px 5px;',
									src: 'resources/images/all_files_connect.png',
									padding: 14,

								}],
							}],
						},
						],
					}],
				}, {
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #f4f3f1;',
				}, {
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

				}, {
					xtype: 'spacer',
					height: '10px',
					style: 'background: transparent;'
				}],
			}],
		}],

		listeners: {
			activate: function () {
				console.log('Connect view activated!');

				this.fireEvent('onConnectTapCommand', this);
			},

			painted: function () {
				console.log('Connect view painted!');

				this.setFeatured();
			},
		},
	},

	setFeatured: function () {
		var xFeaturedList = Ext.getCmp('xFeaturedList');
		//xFeaturedList.removeAll(true, true);
		//for (var i = 0; i < 3; i++) {
		for (var key in smiley360.FeaturedBrands) {
			var oneItem = smiley360.FeaturedBrands[key];
			var oneItemContainer = new Ext.Container({
				layout: 'hbox',
				cls: 'cont-pad',
			});

			var incLabel = oneItemContainer.add(new Ext.Label({
				style: 'font-size: 1.1em; font-family: \'din medium\';',
				html: oneItem.descr, //'Description goes here lorem ipsum.',
				width: '60%',
			}));

			var incImg = oneItemContainer.add(new Ext.Img({
				cls: 'has-shadow',
				//id: 'xHomeBrandImage',
				style: 'background-color: white; margin-left: 10px; border-radius: 5px; border-style: solid; border-width: 1px; border-color: white;',
				src: smiley360.configuration.getResourceDomain() + '/' + oneItem.imageURL,//'resources/images/offers_logo3.png',
				width: 100,
			    height: 100,
				listeners: {
					tap: function () {
						this.up('#xConnectView').fireEvent('onBrandTapCommand', this, smiley360.memberData.UserId, oneItem.smileyconnectID, 0, 100);
					}
				}
			}));

			xFeaturedList.add(oneItemContainer);
		};
	},
});
