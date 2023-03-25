const apiKey = '1os3LigNEy2MlJMUD5tzAPwCWXHyhDrL';

const httpCall = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${ apiKey }`);

httpCall
    .then( resp =>resp.json())
    .then( ({data}) =>{
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn);