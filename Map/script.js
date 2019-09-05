const list = {
            "Nashville, TN": {
               latitude: 36.17,
               longitude: -86.78
           },
            "New York, NY": {
               latitude: 40.71,
               longitude: -74.00
           },
            "Atlanta, GA": {
               latitude: 33.75,
               longitude: -84.39
           },
            "Denver, CO": {
               latitude: 39.74,
               longitude: -104.98
           },
            "Seattle, WA": {
               latitude: 47.61,
               longitude: -122.33 
           },
            "Los Angeles, CA": {
               latitude: 34.05,
               longitude: -118.24
           },
            "Memphis, TN": {
                latitude:  35.15,
                longitude: -90.05
           }
        }

class Map {
    constructor(list){
        this.list = list;
    }

    northernmost(){
        let towns = Object.keys(this.list);
        towns.sort((a,b)=>{
            return this.list[b].latitude - this.list[a].latitude;
        })
        return towns[0];
    }
    
     easternmost(){
        let towns = Object.keys(this.list);
        towns.sort((a,b)=>{
            return this.list[b].longitude - this.list[a].longitude;
        })
        return towns[0];
     }
    
    southernmost(){
        let towns = Object.keys(this.list);
        towns.sort((a,b)=>{
            return this.list[a].latitude - this.list[b].latitude;
        })
        return towns[0];
    }
    
    westernmost(){
        let towns = Object.keys(this.list);
        towns.sort((a,b)=>{
            return this.list[a].longitude - this.list[b].longitude;
        })
        return towns[0];
    }
    
    closest(latitude, longitude){
        if( typeof latitude ==='number' && typeof longitude==='number'){
            let towns = Object.keys(this.list);
            towns.sort((a,b)=>{
            return Math.sqrt( (latitude - this.list[a].latitude)**2 +
                              ( longitude - this.list[a].longitude)**2) -
                Math.sqrt( ( latitude-this.list[b].latitude )**2 +
                        ( longitude -this.list[b].longitude )**2);
        })
        return towns[0]; 
        }
    }
    
    towns(){
        let set = new Set;
        let str ='';
        Object.keys(this.list).forEach((elem)=>{
            set.add(elem.split(',')[1]);
        })
        for (let elem of set){
            str+=elem;
        }
       return str.trim();
    }
}

let map = new Map(list);

console.log(map.northernmost());
console.log(map.easternmost());
console.log(map.southernmost());
console.log(map.westernmost());
console.log(map.closest(40, -75));
console.log(map.towns());

