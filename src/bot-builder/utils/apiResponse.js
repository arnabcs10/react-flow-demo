const res = 
    {
      id: "start",
      elements:[
        {
            id:"4",
            type:"quickreplyNode",
            data:{
                payload:{
                    nodeName:"Quick",
                    userSays:[
                        "uttr1q",
                        "uttr2q",
                        "uttr3q",
                        "uttr4q"
                    ],
                    botReplys:[
                        "repl1q",
                        "repl2q",
                        "repl3q",
                        "repl4q"
                    ]
                }
            },
            
            position: {"x": 250, "y": 300},
            parent:"2"
        },
        {
            id:"3",
            type:"quickreplyNode",
            data:{
                payload:{
                    nodeName:"Reply Quick",
                    userSays:[
                        "uttr1rq",
                        "uttr2rq",
                        "uttr3rq",
                        "uttr4rq"
                    ],
                    botReplys:[
                        "repl1rq",
                        "repl2rq",
                        "repl3rq",
                        "repl4rq"
                    ]
                }
            },
            
            position: {"x": 920, "y": 160},
            parent:"1"
        },
        {
            id:"2",
            type:"textNode",
            data:{
                payload:{
                    nodeName:"It is a text",
                    userSays:[
                        "uttr1",
                        "uttr2",
                        "uttr3",
                        "uttr4"
                    ],
                    botReplys:[
                        "repl1",
                        "repl2",
                        "repl3",
                        "repl4"
                    ]
                }
            },
            
            position: {"x": 410, "y": 160},
            parent:"1"
        },
        {
            id:"1",
            type:"startNode",
            name:"START BOT FLOW",
            position: {"x": 700, "y": 50},
            parent:"root"
        }
    ] ,
    }
  


export default JSON.stringify(res);


