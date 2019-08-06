<template>
  <div class='demo_container'>
    <infinite-scroller-comp
        v-on:reached_bottom="add_person"
        :css_variables="css_variables">
      <div slot="content">
        <person-comp
            v-for="(person,index) in persons"
            :key="index"
            :img_source_url="person.picture.large"
            :first_name="person.name.first"
            :last_name="person.name.last"
            :birth_date="person.dob.date"
            :age="person.dob.age"
            :location_city="person.location.city"
            :location_state="person.location.state">
        </person-comp>
      </div>
    </infinite-scroller-comp>
  </div>
</template>

<script>
  import InfiniteScrollerComp from 'infinitescrollercomp';
  import PersonComp from './PersonComp.vue';

  export default {
    name: 'App',
    data: function() {
      return {
        url: 'https://randomuser.me/api/',
        persons: null,
        css_variables: {
          scroller_height: '35rem'
        }
      };
    },
    components: {
      PersonComp,
      InfiniteScrollerComp
    },
    methods: {
      add_person(at_bottom){
        if(at_bottom){
          const config = {
            method: 'GET',
            mode: 'cors'
          };
          fetch(this.url,config).then((response) =>{
            if(response.ok){
              return response.text();
            }
            throw new Error(response.statusText);
          }).then((resp_str) => {
            const person_obj = JSON.parse(resp_str);
            this.persons.push(person_obj.results[0]);
          }).catch((error) => {
            console.log(error.message);
          });
        }
      }
    },
    mounted() {
      this.persons = [];
      try {
        const config = {
          method: 'GET',
          mode: 'cors'
        };
        for(let i = 0; i < 5; i++){
          fetch(this.url,config).then(response => {
            if(response.ok){
              return response.text();
            }
            throw new Error(response.statusText);
          }).then(resp_str => {
            const person_obj = JSON.parse(resp_str);
            this.persons.push(person_obj.results[0]);
          });
        }
      }catch(error){
        console.log(error.message);
      }
    }
  }
</script>