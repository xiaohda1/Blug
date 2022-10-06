<template>
  
    <h1>Real Time</h1>
    <div v-if="posts.length">
        <div v-for="post in posts" :key="post.id">
            {{post.title}}
        </div>
    </div>
    

</template>

<script>
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
export default {

    setup(){

        const posts = ref([])

        projectFirestore.collection('posts')
            .orderBy('createAt', 'desc')
            .onSnapshot((snap) => {
                
                let items = snap.docs.map((doc) => {
                    return { ...doc.data(), id:  doc.id}
                })
                posts.value = items
            })

        return { posts }
    }

}
</script>

<style>

</style>