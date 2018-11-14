<template>
    <div class="container" :style="{height: containerHeight + 'px'}">
        <el-row :gutter="20" class="orion-header">
            <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="4">
                <span class="orion-title">Orion6</span>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="10">
                <el-input :placeholder="$t('welcome.searchPlaceholder')" v-model="search" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="10">
                <el-button type="success" round>{{$t("welcome.openProject")}}</el-button>
                <el-button type="primary" round>{{$t("welcome.newProject")}}</el-button>
            </el-col>
        </el-row>
        <!--<el-row type="flex" justify="start" class="orion-game-list" :gutter="20">-->
        <div :style="{height: (containerHeight - 80) + 'px'}">
        <el-scrollbar >
            <el-row :gutter="20">
                <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4">
                    <el-card class="orion-card"  :body-style="{ padding: '0px' }">
                        <img src="../assets/logo.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                                <time class="time">2018-1-1</time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4">
                    <el-card class="orion-card"  :body-style="{ padding: '0px' }">
                        <img src="../assets/logo.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                                <time class="time">2018-1-1</time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4">
                    <el-card class="orion-card"  :body-style="{ padding: '0px' }">
                        <img src="../assets/logo.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                                <time class="time">2018-1-1</time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4">
                    <el-card class="orion-card"  :body-style="{ padding: '0px' }">
                        <img src="../assets/logo.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                                <time class="time">2018-1-1</time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4">
                    <el-card class="orion-card"  :body-style="{ padding: '0px' }">
                        <img src="../assets/logo.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                                <time class="time">2018-1-1</time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-scrollbar>
        </div>
        <!--</el-row>-->
    </div>
</template>

<style lang="scss" scoped>
    .container {
        overflow: hidden;
        line-height: 40px;
    }

    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }

    .orion-header {
        line-height: 80px;
    }

    .orion-title {
        font-size: 60px;
    }

    .orion-game-list {
        padding: 20px;
        flex-wrap: wrap;

    }


    .el-scrollbar{
        height: 100%;
    }

    .el-scrollbar__wrap {
        overflow: scroll;
        overflow-x: hidden;
    }

    .orion-card {
        margin: 10px;
    }

</style>

<script>
  export default {
    data: function () {
      return {
        search: '',
        containerHeight: document.body.clientHeight - 60
      }
    },
    watch: {
      containerHeight (val) {
        this.containerHeight = val
      }
    },
    mounted: function () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenHeight = document.body.clientHeight
          that.containerHeight = window.screenHeight - 60
        })()
      }
    }
  }
</script>
