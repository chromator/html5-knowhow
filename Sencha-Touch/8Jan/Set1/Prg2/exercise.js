Ext.application({
    name: 'TouchStart',
    launch: function() {
        var hello = new Ext.Container({
		// A Container has all of the abilities of Component, but lets // you nest other Components inside it
            fullscreen: true,
            layout: {
                type: 'hbox',  //vbox, values case sensitive
                align: 'top' // stretch,start,end,center
            },
            items: [
              {
                  xtype: 'button', //alias name
                  flex: 2, // used with hbox,vbox layout
                  text : 'Hello',
                  border: 10,
				  handler : function() {
					Ext.Msg.alert('You clicked the button');
				  }
              }, {
                  xtype: 'button',
                  flex: 2,
                  text : 'Try yourself',
                  cls: 'redBox',
                  border: 10,
				  style: 'border-color: green; border-style: solid;',
				  handler : function() {
					Ext.Msg.alert('You clicked the button');
				  }
              }, {
                  xtype: 'container', //alias name
                  flex: 2, // used with hbox,vbox layout
                  items : [
					{
						  xtype: 'button',
						  flex: 2,
						  text : 'Try yourself',
						  cls: 'redBox',
						  border: 10,
						  style: 'border-color: green; border-style: solid;',
						  handler : function() {
							Ext.Msg.alert('You clicked the button');
						  }
					}
				  ],
                  cls: 'blueBox',
                  border: 10,
				  style: 'border-color: red; border-style: solid;'
              }, {
                  xtype: 'container',
                  flex: 2,
                  html: '<button id="touch">Touch</button>',
                  cls: 'redBox',
                  border: 10,
				  style: 'border-color: green; border-style: solid;'
              }
            ]
        });

        this.viewport = hello;
    }
});
