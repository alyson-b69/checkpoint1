window.addEventListener('load', () => {
  // TODO : Displaying the empty whisky glass when you click on the glass.
});

function justOneFinger(){
let imgWhisky = document.getElementById("whisky");
let imgActu = imgWhisky.getAttribute("src");
if (imgActu === "image/whisky.png") {
  imgWhisky.setAttribute("src", "image/empty_whisky.png")
} else {
 imgWhisky.setAttribute("src", "image/whisky.png")  
}
} 

let fellows = [
  {
    name: "Sam Burn",
    payment: 100,
  },
  {
    name : "Sumuel Yans",
    payment: 52563,
  }
];


document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let inputName = document.getElementById("name");
  let inputPay = document.getElementById("payment");
  fellows.push({name: inputName.value , payment : inputPay.value});
  document.getElementById("fellowList").innerHTML = renderFellows(fellows);
  inputName.value = "";
  inputPay.value = "";
  document.getElementById("soldList").innerHTML = getSold(fellows);
});



const renderFellows = fellows => {
  return fellows
    .map(fellow => {
      return `<li><div>${fellow.name}</div><div>${fellow.payment.toLocaleString()} €</div></li>`;
    })
    .join("");

};

document.getElementById("fellowList").innerHTML = renderFellows(fellows);


const getSold = fellows => {
  let counter = 0 ;
  fellows.forEach(function(obj){
    let sold = Number(obj.payment);
    counter += sold
  

  })
    return `<li><div>Total</div><div class="soldTotal" id="soldTotal">${counter.toLocaleString()} €</div></li>`
}

document.getElementById("soldList").innerHTML = getSold(fellows);







