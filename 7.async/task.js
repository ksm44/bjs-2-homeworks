class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null; 
    }
    
    addClock(time, callback){
        if(!(time && callback)) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
       
        this.alarmCollection.forEach((obj) => {
            if(obj.time === time){ 
                console.warn('Уже присутствует звонок на это же время');
            }
        });
        
        this.alarmCollection.push({callback, time, canCall: true});
    }
    
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter((obj) => obj.time !== time);
    }
    
    getCurrentFormattedTime (){
        return new Date().toTimeString().slice(0,5); 
    }
    
    start(){
        if(this.intervalId){
            return;
        } else {
            this.intervalId = setInterval(() => this.alarmCollection.forEach(obj => {
                if((obj.time === this.getCurrentFormattedTime()) && obj.canCall){
                    obj.canCall = false;
                    obj.callback();
                }
            }), 1000);
        }
    }
    
    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    
    resetAllCalls(){
        this.alarmCollection.forEach(obj => obj.canCall = true);
    }
    
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}