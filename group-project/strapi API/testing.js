
 let laptopsUrl = ''

  function getInfo(props){
   laptopsUrl = '/'+ props
    console.log(laptopsUrl);
    renderObjects(laptopsUrl);

}


async function renderObjects(props){
  
    let apiUrl = "http://localhost:1337";
    console.log(apiUrl);
    console.log('test'+ props);
   
    let urlLocalhost = apiUrl +`/api/Laptops${props}?populate=`;
    console.log('Hello' + props)
    let stringResponse = await fetch (urlLocalhost);
    let myobject = await stringResponse.json();
    let output = '';
    let index = 0;
    let title = '';
    
    let details = '';
    let price = '';
    let qty = '';
    //Kolla om data är en array
    if(Array.isArray(myobject.data)){
        myobject.data.forEach(element => {
            
            let attr = element.attributes;
            console.log(element);

            output += `
                <div class="grid-item" onclick="getInfo(${element.id})">
                    <div class="laptop-image">
                        <img src="${laptopsImages[index].image}"></img>
                    </div>
                    <div class="item-info">
                        <div class="item-title">${attr.Title}</div>
                        <div>Price: ${attr.Price}</div>
                        <div>Qty: ${attr.Qty}</div>
                    </div>
                    
                </div>
                
            `;
             
               index++;
              
        });
    }else{
    
        let object = myobject.data.attributes;
        
         title += `<div class="title"> Title: ${object.Title}</div>`;
         details += `<div> Description: ${object.Description}</div>`;
         price += `<div> Price: ${object.Price}</div>`;
         qty+= `<div> In stock: ${object.Qty}</div>`;
    }
    document.getElementById('output').innerHTML = output;
     document.getElementById("title").innerHTML = title;
     document.getElementById("details").innerHTML = details ;
    
    
}

renderObjects(laptopsUrl);

