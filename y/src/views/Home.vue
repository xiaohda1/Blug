<template>
  <div class="home">
    
    <p>HOME</p>
    <p v-if="error">{{error}}</p>
    <div v-if="posts.length" class="layout">
      <PostList v-if="showPosts" :posts="posts"/>
      <TagCloud :posts="posts"/>
    </div>
    <div v-else>
      <!-- <Spinner /> -->
    </div>

    <button @click="showPosts = !showPosts">Show posts</button>
    
    <!-- HOME 
    <p>nama saya {{orang.name}} usia {{orang.age}} bb {{bb}}</p>
    <button @click="handleClick">Click me</button>
    <button @click="orang.age++">Add 1 age</button>


    <p>FILTER NAMES</p>
    <input type="text" v-model="search">
    <p>Searching for {{search}}</p>
    <div v-for="name in filterSearchNames" :key="name">
      {{name}}
    </div> -->
  </div>
  <section class='comments' aria-labelledby="comment">
    <h2 id="comment">Comments</h2>
    <Disqus />
  </section>
</template>

<script>
import { computed, ref } from 'vue'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'Home',
  components:{
    PostList,
    Spinner,
    TagCloud
  },
  setup(){
    // didalam sini kita bisa gunakan javascript, 

    const showPosts = ref(true)
    
    const { posts, error, load } = getPosts()


    
    load()
    
    return { posts , showPosts, error}
    
    
    
    
    
    
    
    
    
    /**
     * Tutorial singkat dibawah
     */
    
    
    // bentuk terpisah
    // let name = ref('Joel')
    // let age = ref(30)
    // let bb = 50

    // // bentuk model
    // let orang = ref({name: 'Nayla', age: '30'})


    // // array 
    // const names = ref(['budi', 'andy', 'susi', 'jarwo', 'bobby', 'putri'])

    // const search = ref('')

    // const filterSearchNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value))
    // })



    // const handleClick = () =>{
    //   console.log('clicked' + orang.value.name)
    // }

    // return { orang, handleClick , bb, search, names, filterSearchNames}
  }
}
</script>
<style>
.home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
