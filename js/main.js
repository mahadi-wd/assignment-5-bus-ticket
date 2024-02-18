

const leftCount = 1;
const newCollect = 1;

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

    // const selectedSeatContainer = document.getElementById('select-seats-container');
    // const selectedSeatDiv = document.createElement('div')

    // const p = document.createElement('p');
    // p.innerText = seat.innerText;
    // const p2 = document.createElement('p');
    // p2.innerText = 'Economy Class'
    // const p3 = document.createElement('p');
    // p3.innerText = '550';


    // selectedSeatContainer.appendChild(p);
    // selectedSeatContainer.appendChild(p2);
    // selectedSeatContainer.appendChild(p3);
   







    
    });

    
   

   
}
