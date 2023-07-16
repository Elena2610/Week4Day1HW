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
       
