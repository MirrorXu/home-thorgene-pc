$(function () {
    var mySwiper = new Swiper ('#app', {
        direction: 'vertical',
        // direction: 'horizontal',
        //是否循环播放
        loop: true,

        //分页速度
        speed:1000,
        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 分页器样式
            //进度条样式
        // paginationType : 'progress',
            //小圆点样式（ 默认）
        paginationType : 'bullets',
            //小圆点能够触发导航的功能
        paginationClickable :true,

        // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',



        // 是否需要滚动条
        // scrollbar: '.swiper-scrollbar',
            //滚动条是否自动隐藏
        // scrollbarHide:false,
            //是否允许滚动条拖动
        // scrollbarDraggable : true ,
            //如果设置为true，释放滚动条时slide自动贴合。
        // scrollbarSnapOnRelease : true ,



        // 自动换屏的时间间隔
        // autoplay:1000,

        // 用户操作swiper之后，是否禁止autoplay
        autoplayDisableOnInteraction:true,

        // 播放到最后一屏时，是否停止播放，设置了loop参数时，此参数将无效
        // autoplayStopOnLast : true

        // 鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
        grabCursor : true,

        //设置将slide的宽和高取整(四舍五入)以防止某些分辨率的屏幕上文字或边界(border)模糊
        roundLengths : true,



        //free模式（抵抗反弹）
        // freeMode : true,
            //使用free模式时也能自动贴合边缘
        // freeModeSticky : true,

        // 是否支持键盘控制
        keyboardControl : true,

        //是否支持鼠标控制
        mousewheelControl : true,



    })

    // console.log( $('#app') );


});