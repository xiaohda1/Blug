import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

/**
 * @api {get} /getpost getPost information
 * @apiName getPost
 * @apiGroup Blog 
 */

const getPost = (id) => {

    const error = ref(null)
    const post = ref(null)

    const load = async() => {
        try{
            let res = await projectFirestore.collection('posts').doc(id).get()
            if(!res.exists){
                throw Error('Post itu tidak exist')
            }

            post.value = {...res.data(), id: res.id }

            /**
             * With API rest calling
             */
            // simulate delay
            // await new Promise(resolve => {
            //     setTimeout(resolve, 2000)
            // })

            // let data = await fetch('http://localhost:3000/posts/'+id)
            // if(!data.ok){
            //     throw Error('Post tidak exist')
            // }
            // post.value = await data.json()

        }catch(err){
            error.value = err.message
            console.log(err.message);
        }
    }
    return { post, error, load }
}

export default getPost