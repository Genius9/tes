buy = function (NameP, NumberP){
    console.log(`${NameP} ${this.airName} ${this.airTag} ${NumberP}`);

    this.bookings.push({fly : `${NameP} ${this.airName} ${this.airTag} ${NumberP}`});
    console.log(this.bookings);


};

const  airlane = {
    airName : 'flyOne',
    airTag : 'EU',
    bookings: []

};

buy.call(airlane , 'john', 134);
