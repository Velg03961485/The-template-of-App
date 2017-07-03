/**
 * Created by qingyun on 17/6/17.
 */
angular.module('starter.controllers', [])

    .config(function () {

    })

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
                        var tt = $scope.hotList.index;
                        console.log(tt);
                    }).error(function(data){
                        //当发生异常时触发
                        console.log("dfasfsdafsdfsdfsdf");
                    });
                }
            //    上下键事件
            }

                }
        // }




    })

    .controller('wyDetail', function ($scope, $http) {
        $scope.data = [];
        $scope.send = function () {
            var aaa = document.getElementById('aaa');
            var sendMsg = aaa.value;
            aaa.value = '';
            $scope.data[$scope.data.length] = {name:'me',text:sendMsg};
            // console.log(document.getElementById('aaa'));
            console.log(sendMsg);
            var url = "http://route.showapi.com/60-27?showapi_appid=40422&showapi_sign=209715853dfa412da015f32d51a9bd3f&info=" + sendMsg;
            console.log(url);
            $http({
                url:url,
                method:"GET"
            })
                .then(function (res) {
                    // console.log(res.data.showapi_res_body.text);
                    // $scope.data = res.data.showapi_res_body.text;
                    $scope.data[$scope.data.length] = {name:'Aw',text:res.data.showapi_res_body.text}
                    console.log($scope.data);
                })
                .then(function (error) {
                    if(error){
                        console.log(error);
                    }
                });

        };
        $scope.clear = function () {
            $scope.data = [];
        };
    })

    .controller('changeActive',function ($scope) {
        $scope.act = function (e) {
            // console.log("dsafsdfdsa");
            // e.classList.add("active");
            document.getElementById("myDIV").classList.add("active");
        }
    })

    .controller('manhua', function ($scope, $http) {
        var url = "http://route.showapi.com/255-1?showapi_appid=36003&showapi_sign=48fc36c80bd745cf88cee555f0095206&type=41&page=10ew";
        console.log(url);
        $http({
            url:url,
            method:"GET"
        })
            .then(function (res) {
                console.log(res);
                // $scope.data = res.data.showapi_res_body.pagebean.contentlist;
                // console.log($scope.data);

                console.log(res.data.showapi_res_body.pagebean.contentlist);
                $scope.videoData = res.data.showapi_res_body.pagebean.contentlist;
                // console.log($scope.data[0].link);
            })
            .then(function (error) {
                if(error){
                    console.log(error);
                }
            });
    })

    .controller("news", function ($scope, $http) {
        $scope.yaowen = function () {
            var promise = $http({
                method:"get",
                url:"http://47.93.192.69:3000/wy?myUrl=http://c.m.163.com/recommend/getSubDocPic?passport=&devId=863396020903629&size=20&version=5.3.6&net=wifi"}).

            success(function(data){
                console.log(data);
                console.log(Object.values(data));
                $scope.push = Object.values(data)[0];
                console.log("~~~~~~~~~~~~~~~~~~~~~");
                console.log($scope.push);
                //当异步请求成功返回响应时触发
                console.log("要闻数据请求成功");
            }).error(function(data){
                //当发生异常时触发
                console.log("dfasfsdafsdfsdfsdf");
            });

            promise.then(function(result) {
                //result.data即服务端返回的数据对象
            });

        }
        $scope.yaowen();
    })



    //视频播放的过滤器
    .filter('trusted', ['$sce', function ($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);
