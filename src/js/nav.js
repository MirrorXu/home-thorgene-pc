

$(function () {
   $('#nav #nav-cotent > li').on( 'click' , function () {

       $(this).addClass('navBg').siblings().removeClass('navBg');
       var navItemsId = [ 'linchuang' ,  'keyan' , 'dazong' ];
       var tempID =  $(this).attr('id');
       var flag =  navItemsId.indexOf(tempID);
       if( flag !== -1 ){
            $('#'+tempID+'Slider').slideToggle('slow').siblings().slideUp(0);
       }
       // $('.itemBars > span').on( 'click' ,function () {
       //      $('.item-content').s;
       // });
   })
});


// console.log( jsonData[0].id );
var navApp = new Vue({
    el: '#navSlider',
    data: {
        baseUrl:'./productDetails.html?id=',
        linchuang: navData.filter(function (v) {
            return v.id === 'pid_001'
        })[0],
        keyan: navData.filter(function (v) {
            return v.id === 'pid_002'
        })[0],
        dazong: navData.filter(function (v) {
            return v.id === 'pid_003'
        })[0],
        tempLinchuang:[ navData.filter(function (v) {
            return v.id === 'pid_001'
        })[0].children[0] ]
    },
    mounted:function () {
      // console.log('*******tempLinchuang:' ,this.tempLinchuang )
    },
    methods:{
        changTempLinchuang:function (text) {
                if(text){
                    // console.log('参数：' , text);
                    this.tempLinchuang  = this.linchuang.children.filter(function (v , i ) {
                        return v.text === text;
                    })
                }

            // console.log(  this.tempLinchuang )

        }
    }
});