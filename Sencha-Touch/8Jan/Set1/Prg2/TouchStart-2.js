Ext.application({
    name: 'TouchStart',
    launch: function() {
        var hello = new Ext.Container({
		// A Container has all of the abilities of Component, but lets // you nest other Components inside it
            fullscreen: true,
            layout: {
                type: 'vbox',  //vbox, values case sensitive
                align: 'center' // stretch,start,end,center
            },
            items: [
              {
                  xtype: 'container', //alias name
                  flex: 2, // used with hbox,vbox layout
                  html: '<div id="hello">Hello World Top</div>',
                  cls: 'blueBox',
                  border: 10,
				  style: 'border-color: blue; border-style: solid;'
              }, {
                  xtype: 'container',
                  flex: 1,
                  html: '<div id="hello">Hello World Bottom</div>',
                  cls: 'redBox',
                  border: 10,
				  style: 'border-color: green; border-style: solid;'
              }, {
                  xtype: 'container',				  
                  height: 50,
                  html: '<div id="footer">Footer</div>',
                  cls: 'greenBox'
              }

            ]
        });

        this.viewport = hello;
    }
});
