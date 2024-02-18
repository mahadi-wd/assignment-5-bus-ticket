

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
    totalPrice.innerText = parseFloat(totalPrice.innerText) + price;

    // count and set grand price

    const grandPrice = document.getElementById('grand-total');
    grandPrice.innerText = parseFloat(totalPrice.innerText);

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
