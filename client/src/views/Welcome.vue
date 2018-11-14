<template>
    <div class="container">
        
    </div>
</template>

<style scoped>
.container {
  overflow: hidden;
  height: 80%;
  padding-top: 50px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
export default {
  data: function() {
    return {
    };
  },
  mounted: function() {}
};
</script>
