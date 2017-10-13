var SYS = new Function();
/** 重写dialog---start--- */
// {message:"消息",buttonName:"按钮名称",callback:"回调函数"}
SYS.prototype.alert = function (message, callback) {
    var buttonName = "确定";
    bootbox.alert({
        buttons: {
            ok: {
                label: buttonName,
                className: 'btn-sm btn-success'
            }
        },
        className: '',//className : 'gritter-center',
        message: message,
        callback: function () {
            if (callback != null) {
                if (typeof callback == 'function') {
                    callback;
                } else {
                    eval(callback + "()");
                }
            }
        },
        title:"",
    });
};
SYS.prototype.dialog = function(param){
    var json = param;
    var message = json.message;
    var title ="";
    var cancelName ="取消";
    var okName = "确定";
    if (json.title != null) {
        json.title;
    }
    if (json.okName != null) {
        okName = json.okname;
    }
    if (json.cancelName != null) {
        cancelName = json.cancelName;
    }
    var okFun = json.ok;
    bootbox.dialog({
        message: message,
        title: title,
        className: '',//className : 'gritter-center',
        buttons: {
            Cancel: {
                label: cancelName,
                className: "btn-sm btn-warning",
                callback: function () {
                    if (json.cancel != null) {
                        json.cancel();
                    }
                }
            },
            OK: {
                label: okName,
                className: "btn-sm btn-primary",
                callback: function () {
                    if (json.ok != null) {
                        json.ok();
                    }
                }
            }
        }
    });
};
SYS.prototype.confirm = function(param){
    var title =param.title;
    var message = param.message;
    var confirmBtn = param.confirmBtn;
    var cancelBtn  = param.concelBtn;
    var url = param.url;
    if (param.title != null) {
        param.title;
    }
    if (param.confirmBtn != null) {
        confirmBtn = param.confirmBtn;
    }
    if (param.cancelBtn != null) {
        cancelBtn = param.cancelBtn;
    }
    bootbox.confirm({
        title : title,
        message: message,
        buttons: {
            confirm: {
                label: confirmBtn,
                className: "btn-sm btn-success"
            },
            cancel:{
                label:cancelBtn,
                className: "btn-sm btn-warning"
            }
        },
        callback: function(result) { //回调函数
            if(result) {
                console.info("回调成功!");
                var function_ = param.callback;
                if(typeof function_ == 'function'){ //判断 回调函数 是否为方法，如果 是才执行定义 的方法
                    function_();
                }
            } else {
                console.info("回调失败!");
                return ;
            }
        }
    });

};
//忽略大小写
String.prototype.compare = function(str)
{
//不区分大小写
    if(this.toLowerCase() == str.toLowerCase())
    {
        return "输入的字符匹配正确"; // 正确
    }
    else{
        return "输入的字符匹配错误"; // 错误
    }
};
// 初始化系统js
SYS = new SYS();