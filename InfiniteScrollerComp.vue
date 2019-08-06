<template>
  <div class="scrollerComp" v-on:scroll="check_bottom($event)">
    <slot name="content">Default Content</slot>
  </div>
</template>

<script>
  export default {
    name: 'InfiniteScrollerComp',
    data(){
      return {
        first_name: 'Jane'
      }
    },
    props: {
      css_variables: {
        type: Object,
        default: null
      }
    },
    methods: {
      check_bottom(evt){
        const at_bottom = evt.target.scrollHeight - evt.target.scrollTop === evt.target.clientHeight;
        //debug
        //console.log(`Scroll Height: ${evt.target.scrollHeight} Scroll Top: ${evt.target.scrollTop} At Bottom: ${at_bottom}`);
        if(at_bottom){
          this.$emit('reached_bottom',at_bottom);
        }
      }
    },
    mounted(){
      if(this.css_variables !== null){
        for(let key of Object.keys(this.css_variables)){
          this.$el.style.setProperty(`--${key}`, this.css_variables[key]);
        }
      }
    }
  }
</script>

<style>
  :root {
    --scroller_height: 30rem;
  }
  .scrollerComp {
    height: var(--scroller_height);
    overflow-y: auto;
  }
  .scrollerComp::-webkit-scrollbar-track {
    background-color: #F5F5F5;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  .scrollerComp::-webkit-scrollbar {
    background-color: transparent;
    width: 12px;
    height: 12px;
  }
  .scrollerComp::-webkit-scrollbar-thumb {
    background-color: #D62929;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
</style>