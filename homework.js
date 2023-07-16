class  Hamster{
    coconstructor(owner="", name="",  price=15){
      this.owner=owner;
      this.name=name;
      this.price=price;
    }
    wheelRun(){
        console.log("squeak squeak");
        }
        eatFood(){
          console.log("nibble nibble");
        }
        getPrice(){
           return this.price;
        }
          }
          const myHamster= new Hamster('Timmy','Gas');
          class Person{
            constructor(name, age=0,height=0,weight=0,mood=0, hamsters=[],bankAccount=0)
          {
            this.name=name;
            this.age=age;
            this.height=height;
            this.weight=weight;
            this.mood=mood;
            this.hamsters=hamsters;
            this.bankAccount=bankAccount;}
            getName(){return this.name;}
getAge(){return this.age;}
getWeight(){return this.weight;}
greet(){console.log (this.name);}
eat(){this.weight++; this.mood++;}
exercise(){this.weight--;}
ageUp(){this.age++; this.height++; this.weight++; this.mood--;  this.bankAccoun= this.bankAccoun+10 ;}
buyHamster(myHamster) {this.hamsters.push(myHamster); this.mood= this.mood+10;  this.bankAccount= this.bankAccount-myHamster.getPrice();}
        }
       
        const myPerson= new Person("Timmy",5);
   
        for (let i=0;i<5;i++){myPerson.eat();}
        for (let i=0;i<5;i++){myPerson.exercise();}
        for (let i=6;i<=9;i++){myPerson.ageUp();}
        myPerson.buyHamster(myHamster);
        for (let i=10;i<=15;i++){myPerson.ageUp();}
        for (let i=0;i<2;i++){myPerson.eat();}
        for (let i=0;i<2;i++){myPerson.exercise();}
        class Dinner {
            constructor(appetizer,entree,dessert){
                this.appetizer=appetizer;
            this.entree=entree;
            this.dessert=dessert;
            }
            
        }
        
        class Chef {
            newDinner (appetizer,entree,dessert){return new Dinner(appetizer,entree,dessert);}
            
        }
        const myChef= new Chef();
        
            console.log(   myChef.newDinner("apple", "egg", "milk"));
            console.log(   myChef.newDinner("pork", "solt", "woter"));
            console.log(   myChef.newDinner("beef", "pepper", "potato"));
          