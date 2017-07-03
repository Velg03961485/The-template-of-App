angular.module('myApp', ['ionic','starter.controllers'])
    .run([function () {
        ionic.Platform.setPlatform('ios');
    }])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('menu', {
                url: "/menu",
                templateUrl: "templates/sideMenu.html"
            })
            .state('menu.content', {
                url: "/content",
                views: {
                    content: {
                        templateUrl: "templates/sideContent.html"
                    },
                    left: {
                        templateUrl: "templates/sideLeft.html"
                    },
                    right: {
                        templateUrl: "templates/sideRight.html",
                        controller: 'changeActive'
                    }
                }
            })
            // 网易主页状态
            .state('menu.content.wyHome', {
                url: "/wyHome",
                views: {
                    wy: {
                        templateUrl: "templates/wyHome.html",
                        controller:'changeInput'
                    }
                }
            })
            // 网易详情状态
            .state('menu.content.wyDetail', {
                url: "/wyDetail",
                views: {
                    wy: {
                        templateUrl: "templates/wyDetail.html",
                        controller: 'wyDetail'
                    }
                }
            })
            // 音乐主页状态
            .state('menu.content.musicHome', {
                url: "/musicHome",
                views: {
                    music: {
                        templateUrl: "templates/musicHome.html"
                    }
                }
            })
            // 音乐详情
            .state('menu.content.personDetail',{
                url:"/personDetail",
                views: {
                    music: {
                        templateUrl: "templates/personDetail.html",
                        controller: 'manhua'
                    }
                }
            })
            //音乐详情子详情1haoyou
            .state('menu.content.musicHome.haoyou',{
                url:"/haoyou",
                views: {
                    music: {
                        templateUrl: "templates/haoyou.html"
                    }
                }
            })
            //音乐详情子详情2qun
            .state('menu.content.musicHome.qun',{
                url:"/qun",
                views: {
                    music: {
                        templateUrl: "templates/qun.html"
                    }
                }
            })
            //音乐详情子详情3liaotian
            .state('menu.content.musicHome.liaotian',{
                url:"/liaotian",
                views: {
                    music: {
                        templateUrl: "templates/liaotian.html"
                    }
                }
            })
            //音乐详情子详情4shebei
            .state('menu.content.musicHome.shebei',{
                url:"/shebei",
                views: {
                    music: {
                        templateUrl: "templates/shebei.html"
                    }
                }
            })
            //音乐详情子详情5tongxunlu
            .state('menu.content.musicHome.tongxunlu',{
                url:"/tongxunlu",
                views: {
                    music: {
                        templateUrl: "templates/tongxunlu.html"
                    }
                }
            })
            //音乐详情子详情6gongzonghao
            .state('menu.content.musicHome.gongzonghao',{
                url:"/gongzonghao",
                views: {
                    music: {
                        templateUrl: "templates/gongzonghao.html"
                    }
                }
            })
            // 视频主页状态
            .state('menu.content.videoHome', {
                url: "/videoHome",
                views: {
                    video: {
                        templateUrl: "templates/videoHome.html",
                        controller:'news'
                    }
                }
            })
        $urlRouterProvider.otherwise('/menu/content/wyHome');
    }]);

