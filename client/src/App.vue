<template>
    <div id="app">
        <el-container class="orion-main">
            <el-aside width="96px">
                <div class="orion-logo-menu">
                    <img src="./assets/logo.png" width="36" height="36" class="orion-middle"/>
                </div>
                <el-menu :default-active="activeCourseIndex" class="el-menu-vertical-demo" :collapse="isCollapse"
                         @select="handleNavSelect">
                    <el-menu-item index="0">
                        <i class="fa fa-reddit-alien fa-2x"></i>
                    </el-menu-item>
                    <el-menu-item index="1">
                        <i class="el-icon-location"></i>
                        <span slot="title">项目</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">社区</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">设置</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">帮助</span>
                    </el-menu-item>
                     <el-menu-item index="5">
                        <i class="el-icon-setting"></i>
                        <span slot="title">关于</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <el-menu
                            :default-active="activeGradeIndex"
                            class="el-menu-demo"
                            mode="horizontal"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item id="orion-gradeclass" index="0" class="orion-menu-title" disabled>
                            {{ profile.gradeName }}
                        </el-menu-item>
                    </el-menu>
                    <el-dropdown class="orion-profile" @command="handleCommand" trigger="click">
                        <i class="fa fa-user-circle-o fa-lg" style="margin-right: 15px; color: white;"><span
                                id="orion-username" style="margin-left: 8px; font-size: 16px;">{{ profile.name
                            }}</span></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="student">新用户注册</el-dropdown-item>
                            <el-dropdown-item command="student" divided>用户信息</el-dropdown-item>
                            <el-dropdown-item command="mine">我的积分</el-dropdown-item>
                            <el-dropdown-item command="quit" divided>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>
                <el-main>
                    <router-view v-if="isRouterAlive"/>
                </el-main>
                <el-footer>
                    <h4><span class="orion-version">{{ appTitle }}</span>{{ copyright }}</h4>
                </el-footer>
            </el-container>
        </el-container>
        <el-dialog title="学生信息" :visible.sync="dialogInfoVisible">
            <el-form :model="form" label-width="80px">
                <el-form-item label="姓名">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="班号">
                    <el-input-number v-model="form.class" :step="1" :min="1" :max="10"></el-input-number>
                </el-form-item>
                <el-form-item label="教材类型">
                    <el-radio-group v-model="form.source">
                        <template v-for="item in sourceItems">
                            <el-radio :label="item.id">{{ item.name }}</el-radio>
                        </template>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogInfoVisible = false">取 消</el-button>
                <el-button type="primary" >修 改</el-button>
            </div>
        </el-dialog>
        <el-dialog title="身份确认" :visible.sync="dialogAuthVisible"  width="30%">
            <el-form :model="authForm" label-width="100px">
                <el-form-item label="管理员口令" prop="pwd" :rules="{required: true, message: '密码不能为空', trigger: 'blur'}">
                    <el-input type="password" v-model="authForm.pwd" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogAuthVisible = false">取 消</el-button>
                <el-button type="primary" >确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        width: 100%;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .orion-version {
        float: left;
        margin-left: 20px;
    }

    .orion-profile {
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 60px;
    }

    .orion-menu-title {
        opacity: 1 !important;
        font-weight: bold;
        font-size: 16px;
    }

    .orion-main {
        height: 100%;
        width: 100%;
    }

    .orion-logo-menu {
        height: 58px;
        text-align: center;
        padding: 0;
    }

    .el-dropdown {
        cursor: pointer;
        float: right;
    }

    .el-dropdown-link img {
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: #fff;
        margin-top: 5px;
    }

    .el-menu {
        border-right: solid 0px #e6e6e6 !important;
        list-style: none;
        position: relative;
        margin: 0;
        padding-left: 0;
    }

    .orion-middle {
        display: inline-block;
        vertical-align: middle;
    }

    .el-menu-vertical-demo {
        height: 100%;
    }

    .el-header,
    .el-footer {
        background-color: #b3c0d1;
        color: #333;
        text-align: center;
        line-height: 60px;
        padding: 0;
    }

    .el-aside {
        color: #333;
        text-align: center;
        line-height: 58px;
        overflow: hidden;
    }

    .el-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        line-height: 160px;
        padding: 0;
        height: 100%;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-dialog {
        line-height: 40px;
    }

    .el-footer {
        text-align: right;
        padding-right: 20px;
        color: #666;
    }

    .el-form-item {
        text-align: left;
    }
</style>

<script>
  import ElContainer from "../node_modules/element-ui/packages/container/src/main";
  import logger from "./logger";
  import yuchg from "./base";
  import ycUtils from './utils';
  logger.setLevel("debug");

  export default {
    components: {ElContainer},
    data() {
      return {
        appTitle: "",
        copyright: "",
        activeCourseIndex: "0",
        isCollapse: false,
        dialogInfoVisible: false,
        profile: {
          name: "",
          class: 1,
          gradeName: "",
          source: "rj"
        },
        form: {
          name: "",
          class: 1,
          source: "rj"
        },
        isRouterAlive: true,
        dialogAuthVisible: false,
        authForm: {
          pwd: ''
        }
      };
    },
    computed: {
      sourceItems: function () {
        return this.$store.getters.sourceItems
      }
    },
    methods: {
      handleNavSelect(key, keyPath) {
        console.log(key, keyPath)
        this.activeCourseIndex = key
        let page = {} 
        if (this.activeCourseIndex === '0') { // 欢迎
          page.name = 'welcome'
        } else {
          page.name = 'editor'
        }
        this.$router.push(page)
      },
      updateFooter() {
        const state = this.$store.state;
        this.appTitle = this.$store.getters.appTitle;
        this.copyright = `@2018 ${state.company} 版权所有`;
      },
      handleCommand(command) {
        if (command === "student") {
          this.form.name = this.profile.name;
          this.form.class = this.profile.class;
          this.form.source = this.profile.source;
          this.dialogInfoVisible = true;
        } else if (command === 'mine') {
          // 如果当前已经是
          if (this.$router.history.current.name === 'mine') {
            return
          }
          this.$router.push({name:'mine'})
        } else if (command === 'score') {
          // 如果当前已经是
          if (this.$router.history.current.name === 'score') {
            return
          }
          this.authForm.pwd = ''
          this.dialogAuthVisible = true
        } 
      },
      reload() {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      },
    },
    created: function () {
      this.updateFooter();
    },
    mounted: function () {
      // 读取配置信息，初始化状态
      ycUtils.ajaxGet({
        url: "/api/v1/manifest",
        success: (data) => {
          if (data.result == 0) {
            this.$store.commit("updateManifest", data.content);
            this.updateFooter();
          } else {
            this.$message.error('读取配置信息失败，请退出重试')
          }
        }
      });
      this.$router.push(
        {name: 'welcome'}
      );
    }
  };
</script>
