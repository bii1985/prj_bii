

"use strict";
/*let mymnumber = 5;
const Mymnumber = {
    name: 'hgh',
    age:25,
    ismar: false
};*/

//var name = 'aaa';
//console.log(mymnumber);
//console.log(Mymnumber.name);
//alert(1);
//const result=confirm('jdhfufd');
//const answer = +prompt('gcghfg','');


//document.write(answers);

let numberOfFilms = +prompt('Сколько фильмов вы просмотрели?','');

const personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Последний фильм',''),
      ab = prompt('Оценка',''),   
      ac = prompt('Последний фильм',''),
      ad = prompt('Оценка','');

personalMoveDB.movies[a] = ab;
personalMoveDB.movies[ac] = ad;

console.log(personalMoveDB);