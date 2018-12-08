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