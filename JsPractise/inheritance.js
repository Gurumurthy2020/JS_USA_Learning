const Pers2=require ('./basicclasses')
class Pet extends Pers2
{
    get Location()
        {
            return"il";
        }
    
    constructor(firstName, lastName)
    {
        super(firstName, lastName)
    }

}

let pet=new Pet("guu","suu");
pet.fullname();
console.log(pet.Location);