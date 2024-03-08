class Statsictic {

    constructor(data) {
        this.data = data;
    }
    
     sort(){
        // sorting data
        return this.data.sort();
    }

     count(){
        return this.data.length;
    }
     sum(){
        return this.data.reduce((a,b) => a+b);
    }
     min(){
        return this.data.sort()[0];
    }
     max(){
        return this.data.sort()[this.data.length-1];
    }
     range(){
        return this.max()-this.min();
    }
     mean(){
        return this.sum()/this.count();
    }
     median(){
        let sorted = this.data.sort();
        let middle = Math.floor(sorted.length/2);
        if(sorted.length % 2 === 0){
            return (sorted[middle-1] + sorted[middle])/2;
        }
        return sorted[middle];
    }
     mode(){
        let mode = this.data.sort((a,b) =>
            this.data.filter(v => v===a).length - this.data.filter(v => v===b).length
        ).pop();
        return mode;
    }
     variance(){
        let mean = this.mean();
        return this.data.reduce((a,b) => a + Math.pow(b-mean,2),0)/this.count();
    }
     standardDeviation(){
        return Math.sqrt(this.variance());
    }
     frequency(){
        let freq = {};
        this.data.forEach((e) => {
            if(freq[e]){
                freq[e]++;
            }else{
                freq[e] = 1;
            }
        });
        return freq;
    }

    describe(){
        return {
            count: this.count(),
            sum: this.sum(),
            min: this.min(),
            max: this.max(),
            range: this.range(),
            mean: this.mean(),
            median: this.median(),
            mode: this.mode(),
            variance: this.variance(),
            standardDeviation: this.standardDeviation(),
            frequency: this.frequency()
        }
    }
}

let data = [15.5, 14.2, 15.3, 13.9, 15.0, 14.8, 14.8, 14.3, 15.6, 14.8];
let stats = new Statsictic(data);
console.log(stats.describe());
// Output
