import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
const getPosts = () => {

    const posts = ref([])
    const error = ref(null)

    const load = async() => {

      /**
       * Jika fetchin data dilakukan lewat firebase
       */

       try{

        const res = await projectFirestore.collection('posts')
          .orderBy('createAt', 'desc')  
          .get()

        posts.value = res.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })


       }catch(err){
          error.value = err.message
          console.log(err.message)
       }




      /** Jika fetching data dilakukan lewat API
       * 
       */
      // try{
      //   // simulate delay
      //   await new Promise(resolve => {
      //     setTimeout(resolve, 2000)
      //   })

      //   let data = await fetch('http://localhost:3000/posts')
      //   if(!data.ok){
      //     throw Error('no data available')
      //   }
      //   posts.value = await data.json()
      // }catch(e){
      //   error.value = e.message
      //   console.log(e.message)
      // }
    }


    return { posts, error, load }
}

export default getPosts

