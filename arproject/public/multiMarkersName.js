var markersURLArray=[];
var markersNameArray=[];
AFRAME.registerComponent('markers_start',{
    init:function(){
        console.log('Add markers to the scene');
        const sceneEl = document.querySelector('a-scene');

        //lists of the markers
        for(let i=3; i<6; i++)
        {
            const url = `./pattern-${i}.patt`;
            markersURLArray.push(url);
            markersNameArray.push('Marker_'+i);
        }
        for(let k=0; k<3; k++)
        {
            const markerEl = document.createElement('a-marker');
            markerEl.setAttribute('type','pattern');
            markerEl.setAttribute('url',markersURLArray[k]);
            markerEl.setAttribute('id',markersNameArray[k]);
            markerEl.setAttribute('registerevents','');
            sceneEl.appendChild(markerEl);
        }
    }
});
AFRAME.registerComponent('registerevents', {
    init: function () {
        const marker = this.el;
        console.log('EGISTER EVENTS FOR MARKER')
        marker.addEventListener("markerFound", ()=> {
            const markerId = marker.id;
            console.log('Marker Found: ', markerId);
        });
        marker.addEventListener("markerLost",() =>{
            const markerId = marker.id;
            console.log('Marker Lost: ', markerId);
        });
    },
});