<template>
  <div class="personComp">
    <img class="personComp_img" v-if="img_source_url" :src="img_source_url">
    <div class="personComp_info">

      <div class="personComp_name">
        <span v-if="first_name">{{first_name}}</span>
        <span v-if="last_name">{{last_name}}</span>
      </div>

      <div class="personComp_birth">
        <strong>Birth date-age: </strong>
        <span v-if="birth_date">{{birth_date}}</span>
        <span v-if="age">{{age}}</span>
      </div>

      <div class="personComp_location">
        <strong>Location City-State: </strong>
        <span v-if="location_city">{{location_city}}</span>
        <span v-if="location_state">{{location_state}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PersonComp',
    props: {
      img_source_url: {
        type: String,
        default: null
      },
      first_name: {
        type: String,
        default: null
      },
      last_name: {
        type: String,
        default: null
      },
      birth_date: {
        type: String,
        default: null
      },
      age: {
        type: Number,
        default: null
      },
      location_city: {
        type: String,
        default: null
      },
      location_state: {
        type: String,
        default: null
      }
    }
  }
</script>

<style>
  .personComp {
    display: flex;
    flex-direction: row;
    border: 1px solid blue;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
    font-family: Verdana, sans-serif;
  }
  .personComp_img {
    height: auto;
    border-radius: 5px;
  }
  .personComp_info {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .personComp_name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
    overflow: hidden;
    font-size: 18px;
    font-weight: 900;
    text-transform: capitalize;
  }
  .personComp_birth {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 400px;
    overflow: hidden;
  }
  .personComp_location {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 500px;
    overflow: hidden;
  }
</style>