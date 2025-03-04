const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"所在行业管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryHanye"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"院系类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYuanxi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"招聘岗位管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhaopin"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公司管理",
                        "menuJump":"列表",
                        "tableName":"gongsi"
                    }
                ],
                "menu":"公司管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"招聘信息管理",
                        "menuJump":"列表",
                        "tableName":"zhaopin"
                    }
                ],
                "menu":"招聘信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"简历管理",
                        "menuJump":"列表",
                        "tableName":"jianli"
                    }
                ],
                "menu":"简历管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"简历投递管理",
                        "menuJump":"列表",
                        "tableName":"toudi"
                    }
                ],
                "menu":"简历投递管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"邀请面试管理",
                        "menuJump":"列表",
                        "tableName":"yaoqing"
                    }
                ],
                "menu":"邀请面试管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"招聘信息管理",
                        "menuJump":"列表",
                        "tableName":"zhaopin"
                    }
                ],
                "menu":"招聘信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"简历管理",
                        "menuJump":"列表",
                        "tableName":"jianli"
                    }
                ],
                "menu":"简历管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"简历投递管理",
                        "menuJump":"列表",
                        "tableName":"toudi"
                    }
                ],
                "menu":"简历投递管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"邀请面试管理",
                        "menuJump":"列表",
                        "tableName":"yaoqing"
                    }
                ],
                "menu":"邀请面试管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"公司",
        "tableName":"gongsi"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公司管理",
                        "menuJump":"列表",
                        "tableName":"gongsi"
                    }
                ],
                "menu":"公司管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"招聘信息管理",
                        "menuJump":"列表",
                        "tableName":"zhaopin"
                    }
                ],
                "menu":"招聘信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"简历管理",
                        "menuJump":"列表",
                        "tableName":"jianli"
                    }
                ],
                "menu":"简历管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"简历投递管理",
                        "menuJump":"列表",
                        "tableName":"toudi"
                    }
                ],
                "menu":"简历投递管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"邀请面试管理",
                        "menuJump":"列表",
                        "tableName":"yaoqing"
                    }
                ],
                "menu":"邀请面试管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;
