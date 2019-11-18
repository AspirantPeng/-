var map = new BMap.Map("allmap", {enableMapClick:false});//构造底图时，关闭底图可点功能
var point = new BMap.Point(114.42255349999999, 30.510981); // 创建点坐标
var infoWin =createInfoWin();
var updateWin=updateInfoWin();
var curMkr = null; // 记录当前添加的Mkr
var points=null;//矩形四个顶点坐标
var cenPoint=null;
var curPoint=null;
var allCommunity=null;
map.centerAndZoom(point,17);                 // 初始化地图,设置中心点坐标和地图级别。
map.enableScrollWheelZoom();                 //启用滚轮放大缩小

var styleOptions = {
    strokeColor:"blue",    //边线颜色。
    // fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 3,       //边线的宽度，以像素为单位。
    strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
    fillOpacity: 0.2,      //填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' //边线的样式，solid或dashed。
}
//实例化鼠标绘制工具
var drawingManager = new BMapLib.DrawingManager(map, {
    isOpen: false, //是否开启绘制模式
    enableDrawingTool: true, //是否显示工具栏
    drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
        offset: new BMap.Size(5, 5), //偏离值
        drawingModes : [
            BMAP_DRAWING_RECTANGLE
        ]
    },


    rectangleOptions: styleOptions //矩形的样式
});

show();

drawingManager.addEventListener('rectanglecomplete', function(e, overlay) {
    points=overlay.getPath();
    cenPoint=new BMap.Point((points[0].lng+points[2].lng)/2, (points[0].lat+points[2].lat)/2);
    var marker = new BMap.Marker(cenPoint);
    map.addOverlay(marker);
    marker.openInfoWindow(infoWin);
    addClickHandler(updateWin,marker);
    curMkr=marker;
});



