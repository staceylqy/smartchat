//  //アイコン処理
//   let d=1;
//   const img = ["icon1.png","icon2.png"];
//   $(".iconimg").on("click",function(){
//     d = $(this).attr("data-img");
//   });

// //関数定義
// function send(){
//     // const uname = $("#uname").val();
//     const uname1 = "ユーザー1"
//     const text = $("#text").val();

//     const msg = {
//         uname:uname,
//         text:text,
//         icon:d
//     };
//     ref.push(msg);
//     //ref.set(msg); //set=決まった名前、push=ユニーク
// }

// //文字を送信
// $("#send").on("click",function(){
//     send();
//   });

// //受信処理
// ref.on("child_added",function(data){
//     const v = data.val(); //送信されたオブジェクトを取得
//     const k = data.key;　//ユニークキーの取得
//     //const h = '<p>'+v.uname+'<br>'+v.text+'</p>';
//     let h = '<dl id="'+k+'"><dt><img src="imgs/'+img[v.icon]+'" width="50"><br>'+v.uname+'</dt><dd>'+v.text+'</dd></dl>';
//     $("#output").append( h );
// });

