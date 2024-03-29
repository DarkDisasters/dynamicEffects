// import dommanage from "./animatedommanager.js"
// import animateeditor from "./animateeditor.js"
// import animateenhancer from "./animateeditor.js"
// import functionhub from "./functionhub.js"
// import geodefiner from "./geometrydefiner.js"
// import geosaver from "./geometrysaver.js"

var AnimateDomManage = require("./animatedommanager.js");
var AnimateEditor = require("./animateeditor.js");
var AnimateEnhancer =  require("./animateenhancer.js");
var FunctionHub = require("./functionhub.js");
var GeometryDefiner = require("./geometrydefiner.js");
var GeometrySaver = require("./geometrysaver.js");

var isFirst = false
var isLast = false

window.loadMa = function(filename, canvasid){

    d3.json(filename, function(error,data){
        if(error){
            console.log(error)
        }
        console.log("json",data)
        //marchingAnt3(data)
        console.log("loadcanvas", canvasid)
        if(canvasid == undefined){
            var canvas = document.createElement("canvas");
            canvas.width = 800
            canvas.height = 800
            canvas.id = "hhhcanvas"
            canvasid = canvas.id
            document.body.append(canvas)
        }
        if(canvasid != undefined){
            var canvas = document.getElementById(canvasid)
        }

        console.log("canvas",canvas)
        paper.setup(canvas)
        paper.install(window)

        this._functionHub = FunctionHub();

        var mapGroupIdMaList = data["magroups"]
        var drawPath = data["drawpath"]
        var liGroupId = Object.keys(mapGroupIdMaList)
        for(var i = 0; i < liGroupId.length; i++){
            var groupId = liGroupId[i]
            this._functionHub.addMAbyGroupInfo(mapGroupIdMaList[groupId], drawPath, canvasid)
        }

        this._functionHub._type = "animate"
        this._functionHub.initFunc()
    }) 
}


window.MA_Start = function(){
    isFirst = true
}

window.MA_End = function(){
    this._functionHub._type = 'animate'
    this._functionHub.initFunc()
    isLast = false
}


window.marchingAnt = function(Ant, Path, Boundary, Speed, Space, Color, byExample){

    if(byExample == undefined){
        byExample = false
    }

    var drawPath
    var canvasid

    function createPath(liDot, closed){
        var path = new paper.Path();

        // path.strokeColor = 'black';
        for(var i = 0; i < liDot.length; i ++)
            path.add(new Point(liDot[i]))
        path.closed = closed;
        return path;
    }

    

    if(isFirst == true){
        this._functionHub = FunctionHub();
        isFirst = false
    }
    

    var antexchange = createPath(Ant, true)

    var malist = []
    var aeInfo = {}
    var mapGroupIdMaList = {}

    if(byExample == true){
        //var antModal = createPath(Ant, true)
        antModal = Ant;
        antModal.visible = false
        var boundary = {"dots": Boundary}
        var path = {"dots": Path}
        malist.push({"boundary": boundary, "path": path})
        aeInfo["antinterval"] = 30 - Speed
    }
    else{
        //1 注释掉
        // antModal = undefined
        // var canvas = document.getElementsByTagName("canvas")[0]
        // // var canvas = document.createElement("canvas");
        // // canvas.width = 800
        // // canvas.height = 800
        // // canvas.id = "aecanvas"
        // // document.body.append(canvas)
        // paper.setup(canvas)
        // paper.install(window)

        // console.log(' PATH ', Path)
        // var path = {"geotype":"line", "dots":Path}
        // var ant = {"geotype":"area", "dots":antexchange}
        // var boundary = {"geotype": "area", "dots": Boundary}
        // malist.push({"path": path, "ant": ant, "boundary": boundary})
        // aeInfo["antinterval"] = 35 - Speed
        antModal = antexchange
        antModal.visible = false
        var boundary = {"dots": Boundary}
        var path = {"dots": Path}
        malist.push({"boundary": boundary, "path": path})
        aeInfo["antinterval"] = 30 - Speed
    }
     
    
    aeInfo["ae"] = "MA"
    aeInfo["antcolor"] = Color
    aeInfo["antgap"] = Space
    aeInfo["groupid"] = "1" ;
    aeInfo["antshape"] = "self-defined"

    mapGroupIdMaList["malist"] = malist
    mapGroupIdMaList["mainfo"] = aeInfo

    if(antModal != undefined){
        this._functionHub.addMAbyGroupwithExampleAnt(mapGroupIdMaList,antModal)
    }
    else{
        drawPath = undefined
        this._functionHub.addMAbyGroupInfo(mapGroupIdMaList, drawPath, canvas.id)
    }

}

window.marchingAnt2 = function(Ant, Path, Boundary, Speed, Space, Color){

    // if(byExample == undefined){
    //     byExample = false
    // }
    var byExample = true;

    var drawPath
    var canvasid

    function createPath(liDot, closed){
        var path = new paper.Path();

        // path.strokeColor = 'black';
        for(var i = 0; i < liDot.length; i ++)
            path.add(new Point(liDot[i]))
        path.closed = closed;
        return path;
    }

    

    if(isFirst == true){
        this._functionHub = FunctionHub();
        isFirst = false
    }
    

    var antexchange = createPath(Ant, true)

    var malist = []
    var aeInfo = {}
    var mapGroupIdMaList = {}

    if(byExample == true){
        //var antModal = createPath(Ant, true)
        antModal = Ant;
        antModal.visible = false
        var boundary = {"dots": Boundary}
        var path = {"dots": Path}
        malist.push({"boundary": boundary, "path": path})
        aeInfo["antinterval"] = 30 - Speed
    }
    else{
        //1 注释掉
        // antModal = undefined
        // var canvas = document.getElementsByTagName("canvas")[0]
        // // var canvas = document.createElement("canvas");
        // // canvas.width = 800
        // // canvas.height = 800
        // // canvas.id = "aecanvas"
        // // document.body.append(canvas)
        // paper.setup(canvas)
        // paper.install(window)

        // console.log(' PATH ', Path)
        // var path = {"geotype":"line", "dots":Path}
        // var ant = {"geotype":"area", "dots":antexchange}
        // var boundary = {"geotype": "area", "dots": Boundary}
        // malist.push({"path": path, "ant": ant, "boundary": boundary})
        // aeInfo["antinterval"] = 35 - Speed
        antModal = antexchange
        antModal.visible = false
        var boundary = {"dots": Boundary}
        var path = {"dots": Path}
        malist.push({"boundary": boundary, "path": path})
        aeInfo["antinterval"] = 30 - Speed
    }
     
    
    aeInfo["ae"] = "MA"
    aeInfo["antcolor"] = Color
    aeInfo["antgap"] = Space
    aeInfo["groupid"] = "1" ;
    aeInfo["antshape"] = "self-defined"

    mapGroupIdMaList["malist"] = malist
    mapGroupIdMaList["mainfo"] = aeInfo

    if(antModal != undefined){
        this._functionHub.addMAbyGroupwithExampleAnt(mapGroupIdMaList,antModal)
    }
    else{
        drawPath = undefined
        this._functionHub.addMAbyGroupInfo(mapGroupIdMaList, drawPath, canvas.id)
    }

}

