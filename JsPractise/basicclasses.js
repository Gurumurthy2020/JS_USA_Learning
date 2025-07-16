module.exports=class personaldetails
{
    name="aaru"
    // these are called properties
    get location()
    {
        return "USA"
    }

    constructor(firstname,lastname)
    {
        this.firstname=firstname;
        this.lastname=lastname;

    }
    //this are called methods
    fullname()
    {

        console.log(this.firstname+this.lastname)
    }

}

//let pd = new personaldetails('guru',"murthy");
//console.log(pd.location);
//pd.fullname();
