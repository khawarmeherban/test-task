<template>
  <div class="container">
    <div class="header">
      <span @click="$router.go(-1)"> &lt; </span>
      <h3>Second Page</h3>
    </div>
    <div>
      <div class="card">
        <h1>{{ pageTitle }}</h1>
        <p>{{ pageDescription }}</p>
      </div>
      <div class="card">
        <img :src="imageUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "",
      pageDescription: "",
      imageUrl: ''
    };
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.pageDescription },
      ],
    };
  },
  async mounted() {
    const response = await fetch('https://dummyjson.com/products/3');
    const data = await response.json();
    this.pageTitle = data.brand;
    this.pageDescription = data.description;
    this.imageUrl = data.images[0]
  },
};

</script>


