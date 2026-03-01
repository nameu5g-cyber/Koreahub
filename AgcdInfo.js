var map, mapContainer;
var markers = [];
var customOverlays = [];
var targetUrl = "/common/component/info/AjaxAgcdInfo.aspx";
$(function () {

     mapContainer = document.getElementById('map'), // 지도를 표시할 div 
          mapOption = {
              center: new kakao.maps.LatLng(37.5421822, 127.0553911), // 지도의 중심좌표 (본사)
              level: 3 // 지도의 확대 레벨
          };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
     map = new kakao.maps.Map(mapContainer, mapOption);
    //var content = '<div class ="label"><span class="left"></span><span class="center">본사</span><span class="right"></span></div>';

    //var locPosition = new kakao.maps.LatLng(37.5421822, 127.0553911),
    //               message = content;

    //displayMarker(locPosition, message);
    //map.setCenter(locPosition);

    fnGetCenter();

    //
    $("input:radio[name='loc']").click(function () {
        $("#agnm").val("");
        fnGetCenter();
    });
    
});

/*센터목록조회*/
function fnGetCenter() {

    var area_cd = $("input[name='loc']:checked").val();
    var agnm = $("#agnm").val();
    if (agnm != "") { area_cd = ""; }
    var totObj = new Object();
    var hArr = new Array();
    var hObj = new Object();
    hObj.type = "01";
    hArr.push(hObj);

    var bArr = new Array();
    var bObj = new Object();
    bObj.area_cd = area_cd;
    bObj.agnm = agnm;
    bArr.push(bObj);

    totObj.header = hArr;
    totObj.body = bArr;



    $.ajax({
        method: "post",
        url: targetUrl,
        data: JSON.stringify(totObj),
        dataType: "json",
        beforeSend: function () {
            //로딩창
            $("#modal_0").show();
            $("#centerList").empty();
        },
        success: function (data) {

            console.log(data);
            var returnData = data;
            //로딩창 숨김
            $("#modal_0").hide();

            if (data.length == 0 || data == "") {
                var msg = $("#ContentPlaceHolder1_A10116").val();
                alert(msg);  // 조회된 내용이 없습니다.
                return;
            }

            var result = data.RESULT;

            if (result == "N999") {
                //토큰체크실패
                fnMovePage('/common/component/session/getSession.aspx');
                return;
            }
            else if (result != "Y") {
                var resultmsg = data.RESULTMSG;
                alert(resultmsg);
                return;
            }

            var center_data = data.DATA;

            if (center_data.length == 0) {
                var msg = $("#ContentPlaceHolder1_A10116").val();
                alert(msg);  // 조회된 내용이 없습니다.
                return;
            }

            var cnt_info_array = [];
            var html = "";
            for (var i = 0; i < center_data.length; i++) {
                var cnt_cd = center_data[i].CNT_CD;
                var cnt_name = center_data[i].CNT_NAME;
                var cnt_x = center_data[i].CNT_X;
                var cnt_y = center_data[i].CNT_Y;
                var tel = center_data[i].TEL;
                var fax = center_data[i].FAX;
                var addr1 = center_data[i].ADDR1;
                var addr2 = center_data[i].ADDR2;
                // 마커 arr 생성
                var cnt_info = [new kakao.maps.LatLng(cnt_x, cnt_y), cnt_name];
                cnt_info_array.push(cnt_info);

                // 표출할 테이블 리스트 생성
                html += "<tr>";
                html += "<td><p>" + cnt_name + "</p></td>";
                html += "<td>" + tel + "</td>";
                html += "<td>" + fax + "</td>";
                html += "<td rowspan='2'>" + "<img src='/common/image/icon/pin3.png' onclick='fnCreateMarker(\"" + cnt_x + "\",\"" + cnt_y + "\")' />" + "</td>";
                html += "</tr>";
                html += "<tr>";
                html += "<td colspan='3'>";
                html += "<span>" + addr1 + " " + addr2 + "</span>";
                html += "</td>";
                html += "</tr>";

            }

            fnSetBounds(cnt_info_array);
            $("#centerList").append(html);

        },
        error: function (data, status, err) {

            //로딩창 숨김
            $("#modal_0").hide();
            var msg = $("#ContentPlaceHolder1_A10014").val();
            alert(msg);  // 서버와의 통신에 실패하였습니다.
            return;
        }

    })
}

/*센터 하나 선택*/
function fnCreateMarker(locPositionX, locPositionY) {

    var locPosition = new kakao.maps.LatLng(locPositionX, locPositionY),
                   message = "";

    // 커스텀 오버레이를 표시
    displayMarker(locPosition, message);

    // 지도 레벨 조정
    map.setLevel(3);
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);
    //화면 스크롤
    $('.wrapper').scrollTop(0);
    // $('html, body').animate({ scrollTop: 0 }, 200);
}

// 지도에 커스텀 오버레이를 표시하는 함수
function displayMarker(locPosition, message) {

    // 커스텀 오버레이를 생성합니다
    var customOverlay = new kakao.maps.CustomOverlay({
        position: locPosition,
        content: message
    });
    // 커스텀 오버레이를 지도에 표시합니다
    customOverlay.setMap(map);
    customOverlays.push(customOverlay);
}

/*마커 생성*/
function addMarker(locPosition) {
    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
    var marker = new kakao.maps.Marker({ position: locPosition });
    marker.setMap(map);
    markers.push(marker);  // 배열에 생성된 마커를 추가합니다
}


/*지역 선택*/
function fnSetBounds(points) {
    //mapContainer = document.getElementById('map');
    //map = new kakao.maps.Map(mapContainer, mapOption);
    // 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다 
    //var points = [
    //    [new kakao.maps.LatLng(37.2511990, 127.0748860), "1"], //경기 수원시 영통구 반달로7번길 30 (영통동) 37.2511990,127.0748860
    //    [new kakao.maps.LatLng(37.4857370, 127.8144930), "2"],//경기 부천시 경인로 537 (괴안동)
    //    [new kakao.maps.LatLng(37.2934794, 127.0501859), "3"],//경기 수원시 영통구 센트럴타운로 114-8 (이의동)
        
    //];

    //지도 초기화(마커삭제)
    removeMarker();
    removeCustomOverlays();

    // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
    var bounds = new kakao.maps.LatLngBounds();

    var i, marker, customOverlay;
    for (i = 0; i < points.length; i++) {

        // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
        addMarker(points[i][0]);
        //marker = new kakao.maps.Marker({ position: points[i][0]});
        //marker.setMap(map);
        //markers.push(marker);  // 배열에 생성된 마커를 추가합니다
        
        //커스텀 오버레이
        var content = '<div class ="label"><span class="left"></span><span class="center">' + points[i][1] + '</span><span class="right"></span></div>';
        displayMarker(points[i][0], content);
        //customOverlay = new kakao.maps.CustomOverlay({
        //    position: points[i][0],
        //    content: content
        //});
        //customOverlay.setMap(map);
       
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(points[i][0]);
    }
    map.setBounds(bounds);
    
    //function setBounds() {
    //    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
    //    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
    //    map.setBounds(bounds);
    //}

}

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
function removeMarker() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

// 지도 위에 표시되고 있는 커스텀 오버레이를 모두 제거합니다
function removeCustomOverlays() {
    for (var i = 0; i < customOverlays.length; i++) {
        customOverlays[i].setMap(null);
    }
    customOverlays = [];
}

//// 현재 위치 확인
//function fnGeolocation() {
    
//    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
//    if (navigator.geolocation) {

//        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
//        navigator.geolocation.getCurrentPosition(function (position) {

//            var lat = position.coords.latitude, // 위도
//                lon = position.coords.longitude; // 경도

//            var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
//                message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

//            // 마커와 인포윈도우를 표시합니다
//            displayMarker(locPosition, message);

//        });

//    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

//        var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
//            message = 'geolocation을 사용할수 없어요..'

//        displayMarker(locPosition, message);
//    }
//}