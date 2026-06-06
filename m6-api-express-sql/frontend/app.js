async function consultar(url){

    const respuesta=await fetch(

        "http://localhost:3000"+url

    );

    const datos=await respuesta.json();

    document.getElementById(

        "resultado"

    ).textContent=

    JSON.stringify(datos,null,2);

}