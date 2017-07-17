/**
 * Created by ★☆双星合并 on 2017/7/10.
 */
function createTable(element,json) {
  var table = document.createElement("table");
  table.className = "my_table";
  element.appendChild(table);
  var thead = document.createElement("thead");
  table.appendChild(thead);
  var tr = document.createElement("tr");
  thead.appendChild(tr);
  var header = json.header;
  for(var i = 0; i < header.length; i++){
    var th = document.createElement("th");
    tr.appendChild(th);
    th.innerHTML = header[i];
  }
  var th = document.createElement("th");
  tr.appendChild(th);
  th.innerHTML = "操作";
  var tbody = document.createElement("tbody");
  table.appendChild(tbody);
  var datas = json.datas;
  for(var i = 0; i < datas.length; i++){
    var tr = document.createElement("tr");
    tbody.appendChild(tr);
    for(var k in datas[i]){
      var td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = datas[i][k];
    }
    var td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = "<a href='javascript:;'>删除</a>";
    td.children[0].onclick = function () {
      tbody.removeChild(this.parentNode.parentNode);
    }
  }
}

