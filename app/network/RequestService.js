class RequestService{


    async getRequest(url){
        let data = await fetch(url)
            .then(res => {
                return res.json()
            })
            .catch(err => {
                console.log('Anand it is an error:', err)
            })
    }
    async postRequest(url,object){
        let data = await fetch(url, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object),
        })
        .then(
            
        )
    }   
}


