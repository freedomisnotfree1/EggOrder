var storeList = [{
    "storeName": "澄悅商旅",
    "storePhoneNumber": "04-7781313",
    "posX": 10,
    "posY": -1,
    "storePic": "orderPic_20180929/澄悅商旅.jpg"
  },

  {
    "storeName": "The OLD ROYAL 老皇家泰國餐廳",
    "storePhoneNumber": "04-7781397",
    "posX": 11,
    "posY": -2,
    "storePic": "orderPic_20180929/The OLD ROYAL 老皇家泰國餐廳.jpg"
  },
  {
    "storeName": "麥當勞",
    "storePhoneNumber": "04-7772471",
    "posX": 13,
    "posY": -5,
    "storePic": "orderPic_20180929/麥當勞.jpg"
  },
  {
    "storeName": "玉珍齋",
    "storePhoneNumber": "04-7755660",
    "posX": 1,
    "posY": -5,
    "storePic": "orderPic_20180929/玉珍齋.jpg"
  },
  {
    "storeName": "馨雞財專業炸雞",
    "storePhoneNumber": "0919-812205",
    "posX": 2,
    "posY": -7,
    "storePic": "orderPic_20180929/馨雞財專業炸雞.jpg"
  },
  {
    "storeName": "鹿港施豆花",
    "storePhoneNumber": "0919-812205",
    "posX": 4,
    "posY": -10,
    "storePic": "orderPic_20180929/鹿港施豆花.jpg"
  },
  {
    "storeName": "楊州肉圓芋丸",
    "storePhoneNumber": "0988-776736",
    "posX": 2,
    "posY": -16,
    "storePic": "orderPic_20180929/楊州肉圓芋丸.jpg"
  },
  {
    "storeName": "王罔麵線糊",
    "storePhoneNumber": "0958-629960",
    "posX": 3,
    "posY": -17,
    "storePic": "orderPic_20180929/王罔麵線糊.jpg"
  },
  {
    "storeName": "阿振肉包",
    "storePhoneNumber": "04-7772754",
    "posX": 10,
    "posY": -19,
    "storePic": "orderPic_20180929/阿振肉包.jpg"
  },
  {
    "storeName": "黑豬灶爌肉飯",
    "storePhoneNumber": "0932-605368",
    "posX": 11,
    "posY": -20,
    "storePic": "orderPic_20180929/黑豬灶爌肉飯.jpg"
  }
]

function initail() {
  var htmlString = "";
  var userPosX = 0;
  var userPosY = 0;

  var filtedStoreList = [];
  for (var i = 0; i < storeList.length; i++) {

    var distance = Math.round(
      Math.sqrt(
        Math.pow(userPosX - storeList[i].posX, 2) +
        Math.pow(userPosY - storeList[i].posY, 2)
      )
    );
    if (distance <= 20) {
      filtedStoreList.push(storeList[i]);
    }
  }


  // < div class="store" >
  //   <div class="storePic"></div>
  //   <div class="storeInfo">
  //     <a href="Order.html">店名(分店)</a>
  //     <a>距離</a>
  //     <a>＄</a>
  //   </div>
  // </div >
  for (var i = 0; i < filtedStoreList.length; i++) {
    htmlString += '<div class="store" >';
    htmlString += '<div class="storePic">';

    htmlString += '<a href="麥當勞.html">';
    htmlString += '<img src="' + filtedStoreList[i].storePic + '">';
    htmlString += '</a>';

    htmlString += '</div>';
    htmlString += '<div class="storeInfo">';
    htmlString += '<a>' + filtedStoreList[i].storeName + '</a>';
    htmlString += '<a>' + filtedStoreList[i].storePhoneNumber + '</a>';

    var distance = Math.round(
      Math.sqrt(
        Math.pow(userPosX - filtedStoreList[i].posX, 2) +
        Math.pow(userPosY - filtedStoreList[i].posY, 2)
      )
    );

    htmlString += '<a>距離 ' + distance + ' 公里</a>';

    htmlString += '<a>' + distanceToFee(distance) + '元 外送費</a>';
    htmlString += '</div></div>';

  }

  document.getElementById("storeContainer").innerHTML = htmlString;
}


function distanceToFee(distance) {
  var fee = 0;
  if (distance <= 5) {
    fee = 10;
  } else if (distance <= 10) {
    fee = 20;
  } else if (distance <= 15) {
    fee = 30;
  } else if (distance <= 20) {
    fee = 40;
  } else {
    fee = 50;
  }
  return fee;
}