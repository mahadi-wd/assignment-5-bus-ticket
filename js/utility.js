
// get seat by id
function getSeatById(){
    const allSeat = 'a1 a2 a3 a4 b1 b2 b3 b4 c1 c2 c3 c4 d1 d2 d3 d4 e1 e2 e3 e4 f1 f2 f3 f4 g1 g2 g3 g4 h1 h2 h3 h4 i1 i2 i3 i4 j1 j2 j3 j4'.toUpperCase();
    const seats = allSeat.split(' ');
    const seatId = 0;
    for(let i = 0; i < seats.length; i++){
      seatId = seats[i];
        
    }
    // console.log(seats);
    return seatId;
}

// set background color of seat 
function setBackgroundById(e){
    const setBackgroundById = document.getElementById(e);
    setBackgroundById.classList.add('bg-[#1DD100]', 'text-white');
    return setBackgroundById;
}

// created p tag 

