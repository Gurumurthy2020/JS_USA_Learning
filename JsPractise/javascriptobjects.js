let person={
    firstname:'guru',
    lastname:'aaru',
    fullname:function(){
       console.log(this.firstname+this.lastname)
    }
}
console.log(person.firstname);
console.log(person.fullname());

person.gender='male';
console.log(person)
console.log(person['lastname'])
person.lastname='iswarya';
console.log(person['lastname'])
console.log(person)
delete person.gender;
console.log(person)

console.log('gender' in person)

for(let key in person){
    console.log(person[key])
}