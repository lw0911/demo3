var host = location.protocol + '//' + location.host;
var videoObject = {
    container: '#videobox1', //容器的ID或className
    variable: 'player', //播放函数名称
    autoplay: true, //是否自动播放
    debug: true, //是否开启调试模式
    drag: 'start', //拖动的属性
    seek: 0, //默认跳转的时间
    playbackrate: -1,
    mobileCkControls: false,
    loaded:'loadedHandler',
    video:'/18009/style/video/video.mp4'
};
// palybtn
function ckplayerX($showbtn, $hidebtn) {
    player = null;
    $(document).on('click', $showbtn, function() {
        $(".recruitmentfloat").fadeIn(300);
        _videofile = $(this).attr('videosrc');
        videoObject.video =_videofile;
        player = new ckplayer(videoObject);
    })
    $(document).on('click', $hidebtn, function() {
        player.videoPause()
        $('.recruitmentfloat').fadeOut(300);
        $(".recruitmentfloat .videobox").html("");
    });
}
ckplayerX('.in-About dt a', '.recclosebtn');



function loadedHandler() {
    player.addListener('error', errorHandler); //监听元数据
}

function errorHandler(e) {
    //出错了
    videoObject.video='https://v.qq.com/x/page/s0770b73mzt.html';
    player = new ckplayer(videoObject);
}

 