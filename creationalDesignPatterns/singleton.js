class globalConfig {
    static instance = null;
    static config = null;
    constructor(){
        if(!globalConfig.instance){
            globalConfig.instance = this;
        }
        return this.instance;
    }

    loadConfig(config){
        this.config = config;
    }

    getConfig(){
        return this.config;
    }
}

const config = {
    'a': 1,
    'b': 1
}

const config2 = {
    'a': 2,
    'b': 2
}

const globalConfigInstance = new globalConfig();
globalConfigInstance.loadConfig(config);

const globalConfigInstance2 = new globalConfig();

console.log("equal ",globalConfigInstance === globalConfigInstance2);

console.log('value - ',globalConfigInstance.getConfig());

//change config in some other instance of singleton
globalConfigInstance2.loadConfig(config2);


console.log(' value - ',globalConfigInstance.getConfig());

function MyClass() {
    // instance fields
    this.myInstanceField = 'Hello, instance!';
  }
  
  // static fields
  MyClass.myStaticField = 'Hello, world!';
  
  // instance methods
  MyClass.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.myInstanceField}!`);
  }
  
  // update the static field
  MyClass.myStaticField = 'Updated static field!';
  
  // create two instances of the class
  const myObject1 = new MyClass();
  const myObject2 = new MyClass();
  
  // both instances share the same static field
  console.log(myObject1.constructor.myStaticField); // outputs "Updated static field!"
  console.log(myObject2.constructor.myStaticField); // outputs "Updated static field!"


  myObject1.myStaticField = 'New static field!';
  console.log(myObject1.constructor.myStaticField); // outputs "New static field!"
  console.log(myObject2.constructor.myStaticField); // outputs "New static field!"