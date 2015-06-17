import Ember from 'ember';

export default Ember.Component.extend({
    insertMap: function() {
        var options = {
            center: new window.google.maps.LatLng(
                this.get('latitude'),
                this.get('longitude')
            ),
            zoom: 15
        };
        new window.google.maps.Map(Ember.$('.map-canvas')[0], options);
    }.on('didInsertElement')
});


// function(){
//         var lat = this.get('lat');
//         var long = this.get('long');
//
//         var mapProp = {
//           center:new google.maps.LatLng(lat, long),
//           zoom:10,
//           mapTypeId:google.maps.MapTypeId.ROADMAP
//         };
//         var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
//         var marker=new google.maps.Marker({
//         position:new google.maps.LatLng(lat, long),
//         animation: google.maps.Animation.DROP
//         });
//
//         marker.setMap(map);
//
//     }.on('click')
// };
