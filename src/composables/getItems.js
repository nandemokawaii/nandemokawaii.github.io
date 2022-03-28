import { ref } from 'vue'

const getItems = () => {
    const items = ref([])
    const error = ref(null)
    const url = 'http://localhost:3000/items'

    const load = async () => {
        try{
            let data = await fetch(url)
            if(!data.ok){
                throw Error('no data available')
            }
            items.value = await data.json()  
        }
        catch(err) {
            error.value = err.message
            console.log(error.value);
        }
    }

    load()

    return { items, error, load }
}

export default getItems