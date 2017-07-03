/**
 * Created by qingyun on 17/6/17.
 */
// http://route.showapi.com/60-27?showapi_appid=100&showapi_sign=698d51a19d8a121ce581499d7b701668&info=

// http://route.showapi.com/313-2?showapi_appid=40422&showapi_sign=209715853dfa412da015f32d51a9bd3f&typeId=1


.controller('changeInput',function ($http, $scope) {

    var input = document.getElementsByTagName('input')[0];
    console.log(input);
    document.onkeydown = function (event) {
        var content = input.value;
        if (isNaN(content)) {
            console.log('请输入数值');
            return;
        }else if(content == ''){
            console.log('输入为空');
            return;
        }else{
            if(event.keyCode==13){
                var  keyCode= event.keyCode;
                console.log(keyCode);
                console.log(content);
                var promise = $http({
                    method:"get",
                    url:"http://route.showapi.com/313-2?showapi_appid=40422&showapi_sign=209715853dfa412da015f32d51a9bd3f&typeId=" + content}).

                success(function(data){
                    // console.log(data);
                    console.log(data.showapi_res_body.list);
                    $scope.hotList = data.showapi_res_body.list;
                }).error(function(data){
                    //当发生异常时触发
                    console.log("dfasfsdafsdfsdfsdf");
                });
            }
        }

    }