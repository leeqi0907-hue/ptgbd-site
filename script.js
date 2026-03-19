function checkAnswer(answer){

if(answer=="B"){
alert("正確！應通知醫護人員");
}

else{
alert("再想想喔");
}

}
function downloadForm() {
  const a = document.createElement('a');
  a.href = 'images/19-08-03病人輸出入量記錄單_2024.09.doc';
  a.download = '19-08-03病人輸出入量記錄單_2024.09.doc';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}