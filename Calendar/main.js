var today = new Date();
var date = new Date();
function prevM() {//이전 달
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    showC(); //달력 cell 만들어 출력 
}

function nextM() {//다음 달
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    showC();
}
function showC() {//현재 달 달력 만들기
    var doMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    var day = 0;
    var Calendar = document.getElementById("calendar");
    var yearMonth = document.getElementById("yearMonth");

    yearMonth.innerHTML = today.getFullYear() + "-" + (today.getMonth() + 1) + "";


    while (Calendar.rows.length > 0) {
        Calendar.deleteRow(Calendar.rows.length - 1);
    }
    var row = null;
    row = Calendar.insertRow();
    var cnt = 0;
    for (i = 0; i < doMonth.getDay(); i++) {
        cell = row.insertCell();
        cnt += 1;
    }
    //일 출력
    for (i = 1; i <= lastDate.getDate(); i++) {
        cell = row.insertCell();
        cell.innerHTML = i;
        cnt += 1;
        if (cnt % 7 == 1) {//일요일 계산
            cell.innerHTML = "<font color=#ff0000>" + i
        }
        if (cnt % 7 == 0) {//토요일 구하기

            cell.innerHTML = "<font color=#0000ff>" + i
            row = calendar.insertRow();
        }
        /*오늘의 날짜에 색칠하기*/
        if (today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth() && i == date.getDate()) {
            cell.bgColor = "#1abc9c";
        }
    }
}
