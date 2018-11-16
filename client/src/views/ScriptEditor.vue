<template>
    <div class="container" v-resize="onContainerResize">
        <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left">
            <el-tab-pane label="场景" name="scene">
            </el-tab-pane>
            <el-tab-pane label="脚本" name="script" :style="{height: containerHeight + 'px'}">
              <div id="scratch" :style="{width: size.width + 'px', height: size.height + 'px'}"></div>
            </el-tab-pane>
            <el-tab-pane label="动画" name="animation">动画</el-tab-pane>
            <el-tab-pane label="素材" name="gallery">素材</el-tab-pane>
            <el-tab-pane label="预览" name="preview">预览</el-tab-pane>
        </el-tabs>
    </div>
</template>

<style scoped>
    .container {
        overflow: hidden;
        height: 100%;
        line-height: 40px;
    }

    .el-tabs {
        height: 100%;
    }

    .el-tab-pane {
        height: 500px;
    }

</style>

<script>
  import yuchg from "yuchg"
  import saveAs from "file-saver"
  import resize from 'vue-resize-directive'

  export default {
    data: function () {
      return {
        activeName: 'script',
        dialogVisible: false,
        form: {
          name: 'test',
          ext: '.yu'
        },
        dialogCallback: null,
        containerHeight: document.body.clientHeight - 60,
        editor: null,
        size: {
          width: 0,
          height: 0
        }
      }
    },
    directives: {
      resize,
    },
    computed: {
      load: function () {
        return {
          img: "/img/open.svg",
          action: this.selectFile
        }
      },
      save: function () {
        return {
          img: "/img/save.svg",
          action: this.openSaveDialog
        }
      }
    },
    methods: {
      selectFile(panel) {
        const elem = document.querySelector('#yuchang-save')

        elem.addEventListener('change', () => {
          let _panel = panel
          let file = elem.value
          if (event.target.files.length === 0) {
            return
          }

          var reader = new FileReader()
          reader.onload = function () {
            _panel.load(this.result)
          }
          reader.readAsText(event.target.files[0])
          elem.value = ''
        })
          .click()
      },
      openSaveDialog(panel) {
        // 弹出输入名称对话框
        this.form.ext = '.yu'
        this.dialogVisible = true
        this.dialogCallback = this.saveFile.bind(this, panel)
      },
      callbackSaveFile() {
        this.dialogVisible = false
        if (this.dialogCallback) {
          this.dialogCallback()
        }
      },
      openExportDialog(panel, ext, data) {
        // 弹出输入名称对话框
        this.form.ext = ext
        this.dialogVisible = true
        this.dialogCallback = this.exportFile.bind(this, panel, data)
      },
      saveFile(panel) {
        let data = panel.save()
        let file = new File([data], this.form.name + this.form.ext, {
          type: "text/plain;charset=utf-8"
        })
        saveAs(file)
      },
      exportFile(panel, data) {
        let output = ''
        if (yuchg.isObject(data) || yuchg.isArray(data)) {
          output = JSON.stringify(data)
        } else if (yuchg.isString(data)) {
          output = data
        } else {
          output = '' + data
        }

        let file = new File([output], this.form.name + this.form.ext, {
          type: "text/plain;charset=utf-8"
        })
        saveAs(file)
      },
      onContainerResize() {
        this.size.width = this.$el.clientWidth - 77
        this.size.height = this.$el.clientHeight
        this.$nextTick( () => {
          this.editor.resize(this.size)
        })
      }
    },
    mounted: function () {
      let dom = document.getElementById('scratch')
      this.editor = yuchg.Scratch.init(dom)
      this.editor.setOption({
        backgroundColor: '#e9eef3'
      })

      // 随窗口动态改变大小
      this.size.width = this.$el.clientWidth - 77
      this.size.height = this.$el.clientHeight
      this.$nextTick( () => {
        this.editor.resize(this.size)
      })
    }
  }
</script>
