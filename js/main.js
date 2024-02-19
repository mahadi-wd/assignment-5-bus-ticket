

const leftCount = 1;
const newCollect = 1;
const price = 550;


const allSeat = document.querySelectorAll('.kbd');
for( let i = 0; i < allSeat.length; i++){

    const seat = allSeat[i];
    
    
    seat.addEventListener('click', function(){
       const seatNum = seat.querySelector('p').innerText;
       setBackgroundById(seatNum);

    // set seat in left seat


    const totalLeaftSeat= document.getElementById('total-seat-left');
        totalLeaftSeat.innerText = totalLeaftSeat.innerText - leftCount;

    // add seat count in total seat number

    const totalSelectedSeat = document.getElementById('selected-seat-count');
    totalSelectedSeat.innerText = parseFloat(totalSelectedSeat.innerText) + newCollect;

    // set price and seat number 

    const selectedSeatContainer = document.getElementById('select-seats-container');
    const newSeatContainer = document.createElement('div');
    newSeatContainer.classList.add('flex', 'justify-between')
 
     const p = document.createElement('p');
     p.innerText = seat.innerText;
     const p2 = document.createElement('p');
     p2.innerText = 'Economy Class'
     const p3 = document.createElement('p');
     p3.innerText = '550';
 
 
     newSeatContainer.appendChild(p);
     newSeatContainer.appendChild(p2);
     newSeatContainer.appendChild(p3);
     selectedSeatContainer.appendChild(newSeatContainer);

     
    //  count and set totla price

    const totalPrice = document.getElementById('total-price');
     totalPrice.innerText = parseFloat(totalPrice.innerText) + price ;
     const netTotalprice = totalPrice.innerText;

     
     
    
     

    // count and set grand price

    const grandPrice = document.getElementById('grand-total');
    grandPrice.innerText = netTotalprice;

    // coupon apply button 

    if(totalPrice.innerText > 2200){
        alert('You can buy only 4 tickets.  Please Refresh this page after click "OK"' )
       document.getElementById('father-of-seat').classList.add('disabled-div');


    }

    if( totalPrice.innerText >= 2200){
        const applyBtn = document.getElementById("discount-btn");
        applyBtn.removeAttribute("disabled");
        // document.getElementById('discount-btn').removeAttribute('disabled');
    }

       
    });
   
}

// apply btn function



const applyBtn = document.getElementById('discount-btn').addEventListener('click', function(){
    const coupon = document.getElementById('discount-input-field').value.split(' ').join("").toUpperCase();
    const currentPrice = CurrentSeatById('total-price');
    const currentGrandPrice = document.querySelector('#grand-total');
    console.log ( 'ami ar amite nai vai ',currentGrandPrice.innerText);
   

    if( coupon === "NEW15" ){
        if( currentPrice >= 2200){
            // discount for single
           const  discountPrice = currentPrice * 15/100;
            currentGrandPrice.innerText = parseFloat(currentPrice) - parseFloat(discountPrice);

            // hide apply button container
            const applyBtnContainer = document.getElementById('apply-btn-container');
            applyBtnContainer.classList.add('hidden');
            
            // set discount price in the container
            
            const discountPriceContainer = document.getElementById('discount-price-container');

            const p = document.createElement('p');
            p.innerText = 'Discount';
            p.classList.add("text-[18px]", "font-semibold");
            
            const p2 = document.createElement('p');
            p2.innerText = 'BDT';
            p2.classList.add("text-[18px]", "font-semibold", );

            const span = document.createElement('span');
            span.innerText = discountPrice;
            span.classList.add("pl-2")

        

            p2.appendChild(span);
            discountPriceContainer.appendChild(p);
            discountPriceContainer.appendChild(p2);




    

        }
        else{
            alert(" Please bye 4 tickets;")
        }
    }

    //  COUPLE COUPON 
    else if(coupon === "COUPLE20"){
        if( currentPrice >= 2200){
            // discount for single
           const  discountPrice = currentPrice * 20/100;
            currentGrandPrice.innerText = parseFloat(currentPrice) - parseFloat(discountPrice);

            // hide apply button container
            const applyBtnContainer = document.getElementById('apply-btn-container');
            applyBtnContainer.classList.add('hidden');
            
            // set discount price in the container
            
            const discountPriceContainer = document.getElementById('discount-price-container');

            const p = document.createElement('p');
            p.innerText = 'Discount';
            p.classList.add("text-[18px]", "font-semibold");
            
            const p2 = document.createElement('p');
            p2.innerText = 'BDT';
            p2.classList.add("text-[18px]", "font-semibold", );

            const span = document.createElement('span');
            span.innerText = discountPrice;
            span.classList.add("pl-2")

        

            p2.appendChild(span);
            discountPriceContainer.appendChild(p);
            discountPriceContainer.appendChild(p2);    

        }
    }
    
    else{
        alert("Invaild Code!")
    }
})

const foneNumbertext = document.getElementById('phone-number');
foneNumbertext.addEventListener('input', function(event){
    event.preventDefault();
    const foneNumber = document.getElementById('phone-number').value;
    const foneNumberValue = parseFloat(foneNumber);
   
            
   

})

const reloadBtn = document.getElementById('modal-close');
reloadBtn.addEventListener('click', function(){
    location.reload();
})




// const inputValue = getInputValue('phone-number');
// if(typeof inputValue === 'number' || inputValue >= 0){
//     netxBtn = document.getElementById('next-btn');
//     netxBtn.removeAttribuconst te('disabled');
// }
// else{
//     alert('barit zaia ghumao ')
// }