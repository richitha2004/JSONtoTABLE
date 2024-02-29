const students = [
    {
        id:101,
        name:'Casey',
        email:'casey101@gmail.com',
        branch:'cse',
        year:2
    },
    {
        id:587,
        name:'Thinoy',
        email:'thinoy587@gmail.com',
        branch:'civil',
        year:3
    },
    {
        id:234,
        name:'RJ',
        email:'rj234@gmail.com',
        branch:'ece',
        year:4
    },
    {
        id:189,
        name:'Eva',
        email:'eva_chase@gmail.com',
        branch:'ece',
        year:2
    }
];
function createTable(){
    var headers=Object.keys(students[0]);
    var row='<tr>';
    for(var i=0;i<headers.length;i++){
        row+='<th>'+headers[i]+'</th>';
    }
    row+='</tr>';
    var all='';
    for(var i=0;i<students.length;i++){
        all+='<tr>';
        for(var j=0;j<headers.length;j++){
            var k=headers[j];
            all+='<td>'+students[i][k]+'</td>';
        }
        all+='</tr>';
    }
    var table=document.getElementById("convert_json_table");
    table.innerHTML=row+all;
}
window.onload=createTable();