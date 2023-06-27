
// Fetch the JSON data
fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    var result = data.result;
    var productContainer = document.getElementById("productContainer");

   

    result.forEach(function (product) {
        var ratestar="";
        var fillstar=product.property_reviews;
        var empstar=5 - fillstar;
    
        for(var i=0;i<fillstar;i++ )
        {
            ratestar+='<i class="fa-solid fa-star" style="color: #eff226;"></i>';
    
        }
        for(var i=0;i < empstar;i++ )
        {
            ratestar+='<i class="fa-solid fa-star" style="color: #eff226;"></i>';
      
        }
        var date = new Date(product.createdAt);
        var card = document.createElement("div");
        card.innerHTML= `<div class="product-card">
        <div class="img">
        <img class="dis_image" src="${product.image[0]}">
        </div>
        <div class="dis">
        <div class="title_price">
          <div class="title">${product.title}</div>
          <div>
          <span class="price">${product.price.map((x)=>x.number)}$</span></div>
        </div>
        <div class="location">${product.location}</div>
        <div class="time_rate">
          <div class="time">${date.toDateString()}</div>
          <div class="rate">${fillstar}<i class="fa-solid fa-star" style="color: #eff226;"></i></div>
        </div>
        </div>
      </div>  ` 

      productContainer.appendChild(card);
    });
  })
  .catch((error) => console.log(error));

 
  