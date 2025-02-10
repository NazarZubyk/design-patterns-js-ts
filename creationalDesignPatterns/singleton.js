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

