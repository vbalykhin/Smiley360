﻿Ext.define('smiley360.view.ShareToBlog', {
    extend: 'Ext.Container',
    alias: 'widget.sharetoblogview',
    config: {
        modal: true,
        centered: true,
        fullscreen: true,
        hideOnMaskTap: true,
        id: 'xView',
        scrollable: 'vertical',
        cls: 'popup-panel',
        items: [{
            xtype: 'panel',
            id: 'xRootPanel',
            cls: 'popup-root-panel',
            items: [{
                xtype: 'image',
                docked: 'top',
                cls: 'popup-close-button',
                listeners: {
                    tap: function () {
                        this.up('#xView').destroy();
                    }
                }
            }, {
                xtype: 'panel',
                layout: 'hbox',
                cls: 'popup-top-panel blog-background',
                items: [
                    {
                        xtype: 'label',
                        cls: 'popup-title-text',
                        html: 'Earn 5 Smiles Sharing on your Blog',
                    }, {
                        xtype: 'image',
                        docked: 'right',
                        cls: 'popup-title-image',
                        src: 'resources/images/share-blog.png',
                    }],
            }, {
                xtype: 'panel',
                id: 'xStatusIndicator',
                cls: 'popup-status-indicator',
            }, {
                xtype: 'panel',
                cls: 'popup-middle-panel popup-status-container',
                items: [{
                    xtype: 'label',
                    cls: 'popup-top-text',
                    html: 'Submit a share-blog URL',
                }, {
                    xtype: 'textfield',
                    required: true,
                    id: 'xBlogUrlField',
                    cls: 'cust-input',
                    value: 'www.wordpress.com/sampleblog',
                }]
            }, {
                xtype: 'panel',
                cls: 'popup-bottom-panel',
                items: [{
                    xtype: 'checkboxfield',
                    label: 'I disclosed that I received a free sample in my video.',
                    labelAlign: 'right',
                    labelWidth: '100%',
                    labelWrap: true,
                    labelCls: 'popup-checkbox-grey-label',
                    //inputCls: 'popup-checkbox-input',
                    cls: 'popup-checkbox',
                    listeners: {
                        check: function () {
                            this.up('#xView').down('#xShareButton').enable();
                        },
                        uncheck: function () {
                            this.up('#xView').down('#xShareButton').disable();
                        }
                    }
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    id: 'xShareButton',
                    text: 'SUBMIT',
                    icon: 'resources/images/share-initial.png',
                    iconAlign: 'right',
                    iconCls: 'popup-post-icon',
                    cls: 'popup-post-button',
                    disabled: true,
                    listeners: {
                        tap: function () {
                            this.up('#xView').doShare();
                        }
                    },
                }],
            }],
        }],
        listeners: {
            initialize: function () {
                smiley360.adjustPopupSize(this);
            },
            hide: function () {
                this.destroy();
            }
        },
    },

    doShare: function () {
        var shareView = this;
        var shareData = {
            missionID: smiley360.missionData.MissionDetails.MissionId,
            memberID: smiley360.memberData.UserId,
            blogURL: this.down('#xBlogUrlField').getValue(),
        };

        smiley360.setViewStatus(shareView, smiley360.viewStatus.progress);
        smiley360.services.postToBlog(shareData, function (response) {
            smiley360.setResponseStatus(shareView, response);
        });
    },
});