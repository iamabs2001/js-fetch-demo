var mydata = null;

loadData = (pageNo) => {
    fetch("https://reqres.in/api/users?page="+pageNo).then(resp => {
        resp.json().then(jsonData => {
            this.mydata = null;
            this.mydata = jsonData['data'];
            console.clear();
            console.table(mydata);
            parseToTable("mytable", mydata);
        });
    });
}

loadData(1);

parseToTable = (tableid, data) => {
    let table = document.getElementById(tableid);
    table.innerHTML = "";
    data.forEach(element => {
        let row = table.insertRow(table.rows.length);
        
        let avatar = row.insertCell(0);
        let firstnameAndemail = row.insertCell(1);
        
        firstnameAndemail.innerHTML = "<b>"+element.first_name+"</b><br><br>"+element.email;
        avatar.innerHTML = "<img src='"+element.avatar+"'>";
    });
}