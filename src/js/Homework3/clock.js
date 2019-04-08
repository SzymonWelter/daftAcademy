export default function (domElement) {
    const sblock = document.createElement('div');
    const mblock = document.createElement('div');
    const hblock = document.createElement('div');

    domElement.appendChild(hblock);
    domElement.appendChild(mblock);
    domElement.appendChild(sblock);
    var start = new Date();
    var sh = start.getHours();
    var hgen = timeGen(sh ? sh-12 : sh ,13, 1);
    var mgen = timeGen(start.getMinutes(),60);
    var sgen = timeGen(start.getSeconds(),60);

    const time = {
        seconds: null,
        minutes: null,
        hours: null,        
        addSecond: function(s){
            this.second = s;
            sblock.innerHTML = (s+"").padStart(2, '0');
            if(s==0) this.addMinute(mgen.next().value);
        },
        addMinute: function(m){
            this.minutes = m;
            mblock.innerHTML = (m+":").padStart(3, '0');
            if(m==0) this.addHour(hgen.next().value);
        },
        addHour: function(h){
            this.hours = h;
            hblock.innerHTML = (h+":").padStart(3, '0');
        }
    }

    time.addSecond(sgen.next().value);
    time.addMinute(mgen.next().value);
    time.addHour(hgen.next().value);
    
    setInterval(() => {
        time.addSecond(sgen.next().value);
    }, 1000);

    function* timeGen(start,range, reset = 0) {
        let v = start;
        while (true) {
            v = v == range ? reset : v;
            yield v++;
        }
    }
}