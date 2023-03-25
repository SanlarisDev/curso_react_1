


const getImagen = async() => {

    try {
    
    const apiKey = '1os3LigNEy2MlJMUD5tzAPwCWXHyhDrL';
    const resp = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=${ apiKey }`);
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
    } catch(error) {
        console.error(error);
    }

}

getImagen().then( );