<template>
  <div class="tag">
      TAG
      <div v-if="error">
          {{error}}
      </div>
      <div v-if="posts.length" class="layout">
        <PostList :posts="postWithTag"/>
        <TagCloud :posts="postWithTag"/>
      </div>
      <div v-else>
          <Spinner />
      </div>
      
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import getPosts from '../composables/getPosts'
import { useRoute } from 'vue-router'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'


export default {
    components: {
        PostList, Spinner, TagCloud
    },
    setup(props){

        const route = useRoute()
        const { posts, error , load } = getPosts()


        load()

        //let tag = route.params.tag
        //let tagProps= props.tag
        console.log(route.params.tag) // rekomendasi pake route, supaya params nya dinamis, kalo pake props cuma masuk sekali buat sekali mount


        const postWithTag = computed(() => {
            return posts.value.filter(p => 
                p.tags.includes(route.params.tag)
            )
        })


        return { posts, error, postWithTag }
    }

}
</script>

<style>

.tag{
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}

</style>