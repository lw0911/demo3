/**
 * @author LiHuYong
 * @date 2018/12/8
 * @Description: 全局变量
*/

var TESTIN_GLOBLE = {
    PLATFORM: 3, // 1-手机（<=768） || 2-平板（769-1200）|| 3-PC（>1200）  // 当前设备自适应类型
    MOUSE_EVENT: {} // 鼠标事件
};

var TESTIN_VALIDATOR = {
    isMobile: function (str) { // 手机号码
        var reg = /^1\d{10}$/;
        return reg.test(str);
    },
    isEmail: function (str) { // 邮箱
        var reg = /^[0-9a-zA-Z_][_.0-9a-zA-Z-]{0,31}@([0-9a-zA-Z][0-9a-zA-Z-]{0,30}\.){1,4}[a-zA-Z0-9]{2,9}$/;
        return reg.test(str);
    }
};