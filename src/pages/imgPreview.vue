<template>
  <div class="img_preview">
    <p class="fz36 t_info">大图预览效果</p>
    <yd-lightbox>
      <yd-lightbox-img v-for="item, key in list" :key="key" :src="item.src"></yd-lightbox-img>
    </yd-lightbox>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s3.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s4.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s5.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s6.jpg' }
      ],
    }
  }
}

</script>
<style lang="less" scoped>

</style>
