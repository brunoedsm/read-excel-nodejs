/* Find some text in phrase with regex */
console.log(/NodeJS/g.test('The V8 engine use can be looked at CouchBase applications'))
console.log(/NodeJS/g.test('The V8 engine use can be looked at NodeJS applications'))

/* Find optional texts in phrase */

console.log( /(g|r)ails uses (staff|scaff)olding/g.test('The rails uses scaffolding system'))
console.log( /(gr|t)ails uses (staff|scaff)olding/g.test('The grails uses staffolding to improve your framework'))

/* foreach use */
var arr = [1,2,3,4,5,6];
var sum = 0;
arr.forEach(function(f){ sum += f;});
console.log(sum);

/* reduce instead of foreach */
var arr = [1,2,3,4,5,6];
var sum = 0;
sum = arr.reduce(function(prev,curr){return prev + curr; });
console.log(sum);

/* Global object environment */
console.log(global.process.platform);

/* bind, call e apply ops*/
function soldier(){ console.log(this); };
var snakeEater = soldier.bind({name: 'Big Boss'});
snakeEater();
soldier.call({name : 'Caller One'},1,1,3,8);
soldier.apply({name : 'Caller Two'},[1,1,3,8]);

/* Array Map() */
var countries = ['Die Osterreich','Brazil','Czech Republic','Malta'];
countries.map(function(s){ console.log(s + ' : ' +  s.length)  });

/* working with prototype */
function Droid(){
    //...
}
var gnexus = new Droid();
// defines in time properties of gnexus Base Object
Droid.prototype.getLanguages = function(){ return this.languages; };
Droid.prototype.setLanguages = function(n){ this.languages = n; };

// uses new resources on instace created
gnexus.setLanguages(50000);
console.log(gnexus.getLanguages());
// inheriting prototype
function Android(){
}
Android.prototype = Object.create(Droid.prototype);
var motoG = new Android();
motoG.setLanguages(300);
console.log(motoG.getLanguages());
// increment base object
Droid.prototype.getNewResource = function(){return 'biometric login'};
// new object 
var galaxyS9 = new Android();
galaxyS9.prototype = Object.create(Droid.prototype);
console.log(galaxyS9.getNewResource());

/* Promises */
var pr = new Promise(function(resolve,reject){
    console.log('Executing main');    
});

var p1 = new Promise(function(resolve,reject){ console.log('executing p1')});
var p2 =  new Promise(function(resolve,reject){  console.log('executing p2')});
var p3 =  new Promise(function(resolve,reject){  console.log('executing p3')});
var pError = function(){ console.log('exec ERROR')};

pr.then(p1).then(p2).then(p3).catch(pError);













