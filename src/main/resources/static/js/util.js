function alertObj(obj){
    var str="";
    for (var item in obj){
        str +=item+":"+obj[item]+"\n";
    }
    alert(str);
}

function fnClear(){
    document.getElementById("name").value = "";
    document.getElementById("doorNum").value = "";
    document.getElementById("households").value = "";
    document.getElementById("population").value = "";
    document.getElementById("houseNum").value = "";
    document.getElementById("year").value = "";

}

function addClickHandler(infoWin,marker){
    marker.addEventListener("click",function(e){
        openInfo(infoWin,e)}
    );
}
function openInfo(infoWin,e){
    var p = e.target;
    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    curPoint=point;
    map.openInfoWindow(infoWin,point); //开启信息窗口
}

function createInfoWin() {
    var html = [];
    html.push('<span style="font-size:12px">小区信息: </span><br/>');
    html.push('<table border="0" cellpadding="1" cellspacing="1" >');
    html.push('  <tr>');
    html.push('      <td align="left" class="common">名称：</td>');
    html.push('      <td colspan="2"><input type="text" maxlength="50" size="18"  id="name"></td>');

    html.push('  </tr>');
    html.push('  <tr>');
    html.push('      <td  align="left" class="common">门牌号：</td>');
    html.push('      <td colspan="2"><input type="text" maxlength="30" size="18"  id="doorNum"></td>');

    html.push('  </tr>');
    html.push('  <tr>');
    html.push('      <td  align="left" class="common">户数：</td>');
    html.push('      <td  colspan="2"><input type="text" maxlength="50" size="18"  id="households"></td>');

    html.push('  </tr>');
    html.push('  <tr>');
    html.push('      <td  align="left" class="common">人口数：</td>');
    html.push('      <td  colspan="2"><input type="text" maxlength="50" size="18"  id="population"></td>');

    html.push('  </tr>');
    html.push('  <tr>');
    html.push('      <td  align="left" class="common">房屋数量：</td>');
    html.push('      <td  colspan="2"><input type="text" maxlength="50" size="18"  id="houseNum"></td>');

    html.push('  </tr>');
    html.push('      <td  align="left" class="common">建设年份：</td>');
    html.push('      <td  colspan="2"><input type="text" maxlength="50" size="18"  id="year"></td>');

    html.push('  </tr>');
    html.push('  <tr>');
    html.push('	     <td  align="center" colspan="3">');
    html.push('          <input type="button" name="btnOK"  onclick="fnOK()" value="确定">&nbsp;&nbsp;');
    html.push('		     <input type="button" name="btnClear" onclick="fnClear();" value="重填">');
    html.push('	     </td>');
    html.push('  </tr>');
    html.push('</table>');
    var infoWin = new BMap.InfoWindow(html.join(""), {offset: new BMap.Size(0, -10)});//记录小区信息表单
    return infoWin;
    
}

function updateInfoWin() {
    var html = [];
    html.push('<span style="font-size:12px">更新小区信息: </span><br/>');
    html.push('<table border="0" cellpadding="1" cellspacing="1" >');
    html.push('  <tr>');
    html.push('      <td align="left" class="common">名称：</td>');
    html.push('      <td colspan="2"><input type="text" maxlength="50" size="18"  id="name"></td>');

    html.push('  </tr>');
    html.push('  <tr>');
    html.push('      <td  align="left" class="common">门牌号：</td>');
    html.push('      <td colspan="2"><input type="text" maxlength="30" size="18"  id="doorNum"></td>');

    html.push('  </tr>');
    html.push('  <tr>');
    html.push('      <td  align="left" class="common">户数：</td>');
    html.push('      <td  colspan="2"><input type="text" maxlength="50" size="18"  id="households"></td>');

    html.push('  </tr>');
    html.push('  <tr>');
    html.push('      <td  align="left" class="common">人口数：</td>');
    html.push('      <td  colspan="2"><input type="text" maxlength="50" size="18"  id="population"></td>');

    html.push('  </tr>');
    html.push('  <tr>');
    html.push('      <td  align="left" class="common">房屋数量：</td>');
    html.push('      <td  colspan="2"><input type="text" maxlength="50" size="18"  id="houseNum"></td>');

    html.push('  </tr>');
    html.push('      <td  align="left" class="common">建设年份：</td>');
    html.push('      <td  colspan="2"><input type="text" maxlength="50" size="18"  id="year"></td>');

    html.push('  </tr>');
    html.push('  <tr>');
    html.push('	     <td  align="center" colspan="3">');
    html.push('          <input type="button" name="btnOK"  onclick="fnUpdate()" value="更新">&nbsp;&nbsp;');
    html.push('		     <input type="button" name="btnClear" onclick="fnClear();" value="重填">');
    html.push('	     </td>');
    html.push('  </tr>');
    html.push('</table>');
    var infoWin = new BMap.InfoWindow(html.join(""), {offset: new BMap.Size(0, -10)});//记录小区信息表单
    return infoWin;
}

function fnUpdate() {
    var name = encodeHTML(document.getElementById("name").value);
    var doorNum = encodeHTML(document.getElementById("doorNum").value);
    var households = encodeHTML(document.getElementById("households").value);
    var population = encodeHTML(document.getElementById("population").value);
    var houseNum = encodeHTML(document.getElementById("houseNum").value);
    var year = encodeHTML(document.getElementById("year").value);
    $.post("http://localhost:8080/update",
        {
            'name':name,
            'doorNum':doorNum,
            'households':households,
            'population':population,
            'houseNum':houseNum,
            'year':year,
            'cenLat':curPoint.lat,
            'cenLng':curPoint.lng

        },
        function(data,status){
            alert("信息更新成功");
            location.reload();
        });

}

function fnOK(){
    var name = encodeHTML(document.getElementById("name").value);
    var doorNum = encodeHTML(document.getElementById("doorNum").value);
    var households = encodeHTML(document.getElementById("households").value);
    var population = encodeHTML(document.getElementById("population").value);
    var houseNum = encodeHTML(document.getElementById("houseNum").value);
    var year = encodeHTML(document.getElementById("year").value);

    if(curMkr){
        //设置label
        var info = "<b>小区信息</b><br>名称: " + name + "<br>" + "门牌号: " +doorNum + "<br>" + "户数: " + households+"<br>"+"人口数: " + population + "<br>" + "房屋数量: " +houseNum + "<br>" + "建设年份: " +year;
        var lbl = new BMap.Label(info, {offset: new BMap.Size(25, 25)});
        lbl.setStyle({border: "solid 1px gray"});
        curMkr.setLabel(lbl);

    }
    if(infoWin.isOpen()){
        map.closeInfoWindow();
    }


    $.post("http://localhost:8080/add",
        {
            'name':name,
            'doorNum':doorNum,
            'households':households,
            'population':population,
            'houseNum':houseNum,
            'year':year,
            'topLat':points[0].lat,
            'topLng':points[0].lng,
            'bottomLng':points[2].lng,
            'bottomLat':points[2].lat,
            'cenLat':(points[0].lat+points[2].lat)/2,
            'cenLng':(points[0].lng+points[2].lng)/2

        },
        function(data,status){
            alert("信息添加成功");
        });


}
function encodeHTML(a){
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function fnSearch() {
    var keyword=$("#keyword");
    $.post("http://localhost:8080/search",
        {
            'keyword':keyword.val()
        },
        function(data,status){
            keyword.val("");
            var isEmpty = $.isEmptyObject(data);
            if(isEmpty){alert("无相关小区信息");}
            else {
                map.clearOverlays();
                show();
                var rectangle = new BMap.Polygon([
                    new BMap.Point(data.topLng,data.topLat),
                    new BMap.Point(data.bottomLng,data.topLat),
                    new BMap.Point(data.bottomLng,data.bottomLat),
                    new BMap.Point(data.topLng,data.bottomLat)
                ], {strokeColor:"blue", strokeWeight: 3, strokeOpacity:0.8,fillOpacity: 0.9,strokeStyle: 'solid'});
                var point = new BMap.Point(data.cenLng, data.cenLat);
                map.centerAndZoom(point,17);
                map.addOverlay(rectangle);

            }

        });

}

function show() {
    $.get("http://localhost:8080/all",function(data,status){
        allCommunity=data;
        for(i=0;i<data.length;i++){
            var rectangle = new BMap.Polygon([
                new BMap.Point(data[i].topLng,data[i].topLat),
                new BMap.Point(data[i].bottomLng,data[i].topLat),
                new BMap.Point(data[i].bottomLng,data[i].bottomLat),
                new BMap.Point(data[i].topLng,data[i].bottomLat)
            ], {strokeColor:"blue", strokeWeight: 3, strokeOpacity:0.8,fillOpacity: 0.2,strokeStyle: 'solid'});
            map.addOverlay(rectangle);
            var centrePoint=new BMap.Point((parseFloat(data[i].topLng)+parseFloat(data[i].bottomLng))/2, (parseFloat(data[i].topLat)+parseFloat(data[i].bottomLat))/2);
            var marker = new BMap.Marker(centrePoint);

            var info = "<b>小区信息</b><br>名称: " + data[i].name + "<br>" + "门牌号: " +data[i].doorNum + "<br>" + "户数: " + data[i].households+"<br>"+"人口数: " + data[i].population + "<br>" + "房屋数量: " +data[i].houseNum + "<br>" + "建设年份: " +data[i].year;
            var lbl = new BMap.Label(info, {offset: new BMap.Size(25, 25)});
            lbl.setStyle({border: "solid 1px gray"});
            marker.setLabel(lbl);
            map.addOverlay(marker);
            addClickHandler(updateWin,marker);



        }
    });

}

function cityLocation() {
    var city=$("#city");
    map.centerAndZoom(city.val(),17);
    
}

function gpsLocation() {
    var lng=$("#lng");
    var lat=$("#lat");
    var point = new BMap.Point(lng.val(), lat.val());
    map.centerAndZoom(point,17);
    
}

function addLabel() {
    var myIcon;var label;
    for(i=0;i<allCommunity.length;i++){
        var centrePoint=new BMap.Point((parseFloat(allCommunity[i].topLng)+parseFloat(allCommunity[i].bottomLng))/2, (parseFloat(allCommunity[i].topLat)+parseFloat(allCommunity[i].bottomLat))/2);
        if(allCommunity[i].population<1000){
             myIcon = new BMap.Icon($("#lt1000").val(), new BMap.Size(100,100));
             label = new BMap.Marker(centrePoint,{icon:myIcon});
            map.addOverlay(label);

        }
        else if(allCommunity[i].population>2000){
             myIcon = new BMap.Icon($("#mt2000").val(), new BMap.Size(100,100));
             label = new BMap.Marker(centrePoint,{icon:myIcon});
            map.addOverlay(label);

        }
        else{
            myIcon = new BMap.Icon($("#lt2000").val(), new BMap.Size(100,100));
            label = new BMap.Marker(centrePoint,{icon:myIcon});
            map.addOverlay(label);
        }
        if(allCommunity[i].houseNum<10){
            myIcon = new BMap.Icon($("#lt10").val(), new BMap.Size(100,-100));
            label = new BMap.Marker(centrePoint,{icon:myIcon});
            map.addOverlay(label);
        }
       else{
            myIcon = new BMap.Icon($("#mt10").val(), new BMap.Size(100,-100));
            label = new BMap.Marker(centrePoint,{icon:myIcon});
            map.addOverlay(label);
        }
        if(allCommunity[i].year<2000){
            myIcon = new BMap.Icon($("#before2000").val(), new BMap.Size(-100,100));
            label = new BMap.Marker(centrePoint,{icon:myIcon});
            map.addOverlay(label);
        }
        else if(allCommunity[i].year>2010){
            myIcon = new BMap.Icon($("#after2010").val(), new BMap.Size(-100,100));
            label = new BMap.Marker(centrePoint,{icon:myIcon});
            map.addOverlay(label);
        }
       else{
            myIcon = new BMap.Icon($("#before2010").val(), new BMap.Size(-100,100));
            label = new BMap.Marker(centrePoint,{icon:myIcon});
            map.addOverlay(label);
        }
    }
}

function clearLabel() {
    location.reload();

}