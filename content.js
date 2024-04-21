
function isEnglish(val){
  const arr = 'abcdefghijklmnopqrstuvwxyz'
  for(let i=0; i<arr.length; i++){
    if (arr[i] == val){
      return true
    }
  }
  return false
}

var m = require('./node_modules/buffer/index.js');



$(function () {

  $('p').each(function() {
    let paragraph = $(this).html();
    console.log('paragraph', paragraph)
    for (let i = 0; i < paragraph.length; i++) {
      if (isEnglish(paragraph[i]) == false){
        let utfStr = Buffer.from(paragraph[i], 'utf-8') //.toString();
        console.log('utfStr', paragraph[i], utfStr)
      }
    }
    console.log('length', paragraph.length)
  })

  // $('p').each(function() {
  //   $(this).html($(this).text().split(/[\u4e00]/).map(
  //     function(v){return '<span class=sentence>'+v+'</span>'}
  //  ));
  // });
  
  
  $('.sentence').on('click', function(){
    alert($(this).text());
  });
});





