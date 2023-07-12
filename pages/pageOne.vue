<template>
  <div class="container">
    <h3>First Page</h3>
    <div>
      <div class="card">
        <h1>{{ pageTitle }}</h1>
        <p>{{ pageDescription }}</p>
      </div>
      <div class="card">
        <img :src="imageUrl" alt="" />
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
      imageUrl: "",
    };
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          name: "description",
          hid: 'gtm-script',
          src: 'https://www.googletagmanager.com/gtm.js',
          content: this.pageDescription,
          async: true,
        },
      ],
    };
  },
  async mounted() {
    const response = await fetch("https://dummyjson.com/products/10");
    const data = await response.json();
    this.pageTitle = data.brand;
    this.pageDescription = data.description;
    this.imageUrl = data.images[0];
  },
};
</script>

<style>
.container {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.container > div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;

}
.card {
  max-width: 300px;
  max-height: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

img {
  width: 280px;
  height: 250px;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin: 16px 0;
}
h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  margin: 0;
  border-bottom: 1px solid #343434;
}
p {
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  text-transform: capitalize;
  color: rgb(46, 44, 44);
  line-height: 30px;
}
</style>
