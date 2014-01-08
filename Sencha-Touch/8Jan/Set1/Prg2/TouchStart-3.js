Ext.application({
    name: 'TouchStart',
    launch: function() {

        this.viewport = new Ext.TabPanel({
            fullscreen: true,
            animation: 'slide',
            tabBar:{
                dock: 'top', // top,bottom
                layout: {
                    pack: 'right' // center,right,left
                }
            },
            items: [{
                xtype: 'panel',
                title: 'Panel 1',
                fullscreen: false,
                html: '<div id="hello">Hello World</div>',
                iconCls: 'info',
                dockedItems: [
                    {
                        dock: 'top',
                        xtype: 'toolbar',
                        title: 'About TouchStart'
                    }
                ]
            }, {
                xtype: 'container',
                html: 'TouchStart container 2',                
                title: 'Panel 2'
            }, {
                xtype: 'container',
                html: 'TouchStart container 3',                
                title: 'Panel 3'
            },{
                xtype: 'container',
                html: 'TouchStart container 4',                
                title: 'Panel 4'
            }
			]
        });
    }
});
