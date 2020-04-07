<template>
      		<b-media tag="li" class="mt-3">
      <b-img :src="image" class="img-responsive" style="height: 100px;" alt="placeholder" slot="aside"></b-img>

        <div class="row mt-2">
            <div class="col-md-9">
               <h5 class="mt-0 mb-1">{{username}}</h5>
            </div>

             <div class="col-md-3">
               <p class="mt-0 mb-1 text-right" >{{time}}</p>
            </div>
            
        </div><!-- end row -->  

       <div class="row mt-2">
            <div class="col-md-12">
                <font-awesome-icon icon="star"  style="width:20px; height:20px; color:darkorange;" class="mr-1" v-for="index in rating" :key="index"/> 
                <font-awesome-icon icon="star" style="width:20px; height:20px; color:lightgrey;" class="mr-1"  v-for="index in (5-rating)" :key="index"/> 
            </div>
            
        </div><!-- end row -->  

      <p class="mb-0 mt-2">{{description}}
      </p>
    </b-media>
</template>


<script>

import axios from 'axios';

export default {
  name: "CommentItem",

  props: ['id', 'image', 'username','description', 'rating', 'time'],

  data() {
    return {

    };
  },
  created(){ 
       
  },
  methods: {

  }
};
</script>

<style>

</style>
