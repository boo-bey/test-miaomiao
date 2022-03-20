<template>
  <div class="title">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

 .title {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0; 
}

.min .title h1 {
    font-size: 24px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: rgb(246, 59, 34);
    color: #fff;
    font-weight: normal;
}

</style>