//memory update
function updateMemory(cost){
  const costText = document.getElementById("extra-memori-cost");
    costText.innerText = cost;
   
    calculatePrice()
}

// unified 8gb memory change
document.getElementById('memory-one').addEventListener('click', function () {
   updateMemory(0);

});

//unified 16gb memory change
document.getElementById('memory-two').addEventListener('click', function () {
    updateMemory(180)
});

// storage update
function storageUpdate(storageCost){
  const memoriCost = document.getElementById("extra-cost");
  memoriCost.innerText = storageCost;
  calculatePrice();
};

//256gb update
document.getElementById('first-storage').addEventListener('click', function () {
     storageUpdate(0)
});

// storage two update
document.getElementById('second-storage').addEventListener('click', function () {
    storageUpdate(100)

});
// storage three update
document.getElementById('third-storage').addEventListener('click', function () {
    storageUpdate(180)

});
//shipping cost update
function updateShippingCost(cost){
  const shippingCost = document.getElementById('delivery-charge');
    shippingCost.innerText = cost;
   
    calculatePrice()
}
document.getElementById('delivery-1').addEventListener('click', function () {
    updateShippingCost(0)

});

document.getElementById('delivery-2').addEventListener('click', function () {
    updateShippingCost(20)

});

function calculatePrice(){
  const bestPrice = document.getElementById('best-price').innerText;
  const bestPriceAmount = parseFloat(bestPrice);
  const extraMemoriCost = document.getElementById('extra-memori-cost').innerText;
  const extraMemoriCostAmount = parseFloat(extraMemoriCost);
  const extraStorageCost = document.getElementById('extra-cost').innerText;
  const extraStorageCostAmount = parseFloat(extraStorageCost);
  const deliveryCharge = document.getElementById('delivery-charge').innerText;
  const deliveryChargeAmount = parseFloat(deliveryCharge)
 
  const totalPrice = document.getElementById('total-price');
  const totalCost = document.getElementById('total-cost');
 
 
 
  const total = bestPriceAmount + extraMemoriCostAmount + extraStorageCostAmount + deliveryChargeAmount;
  totalPrice.innerText = total;
  totalCost.innerText = total;
 
 

}
;

document.getElementById('promo-button').addEventListener('click', function () {
  const promo = document.getElementById('promo-field');
  const promoCode = promo.value;

  if(promoCode == "stevekaku"){
    const totalPrice = document.getElementById('total-price');
    const totalPriceAmount = totalPrice.innerText;
    const totalCost = document.getElementById('total-cost');
    
    const comm = 20 / 100;
    const commision = comm * totalPriceAmount;
    const commsionFinal = totalCost.innerText - commision;
    
    totalCost.innerText = commsionFinal;
  }
  promo.value = '';
});