//define class
class Backpack {
 constructor(colour, size) {
     this.colour = colour;
     this.size = size;
     this.items = [];
     this.open = false;
    }
 
  openBag() {
      this.open = true;
      console.log(`You open the ${this.size} ${this.colour} bag.`);
    }

  closeBag() {
    this.open = false;
    console.log(`You close the ${this.size} ${this.colour} bag.`);
  }

  putIn(item) {
     if (this.open = true) {
         console.log(`You put ${item} into bag.`)
         this.items.push(item);
         console.log(this.items);
    } else if (this.open = false) {
          console.log(`The bag is closed. Open the bag to put something in.`);
    }
  }

  takeOut(item) {
    if (this.items.includes(item) == true) {
      console.log(`You remove ${item} from the bag.`)
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] == item) {
          this.items.pop(i);
        }
      }
      console.log(this.items);
    } else {
      console.log(`That item isn't in this bag.`);
      console.log(this.items);
    }
  }
}
  
//create
let backpack1 = new Backpack("blue", "small");
let backpack2 = new Backpack("red", "medium");
let backpack3 = new Backpack("green", "large");

//communicate
backpack1.openBag();
backpack1.putIn("lunch");
backpack1.putIn("jacket");
backpack1.closeBag();
backpack1.openBag();
backpack1.takeOut("jacket");
backpack1.closeBag();
  
