import Ember from "ember";

var GoogleMapComponent = {
  insertMap: function(){
    var lat = this.get('lat');
    var long = this.get('long');

    var mapProp = {
      center:new google.maps.LatLng(lat, long),
      zoom:10,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker=new google.maps.Marker({
      position:new google.maps.LatLng(lat, long),
      animation: google.maps.Animation.DROP
    });

    marker.setMap(map);

  }.on("didInsertElement")
};

export default Ember.Component.extend(GoogleMapComponent);


// import Ember from 'ember';
//
// export default Ember.Component.extend({
//     insertMap:function(){
//       var lat = this.get('latitude');
//       var long = this.get('longitude');
//
//       var mapProp = {
//         center:new google.maps.LatLng(lat, long),
//         zoom:10,
//         mapTypeId:google.maps.MapTypeId.ROADMAP
//       };
//       var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
//       var marker=new google.maps.Marker({
//         position:new google.maps.LatLng(lat, long),
//         animation: google.maps.Animation.DROP
//       });
//
//       marker.setMap(map);
//
//     }.on('click')
//   });


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

// function() {
//   var latitude = this.get('latitude');
//   var longitude = this.get('longitude');
//   var options = {
//     center: new window.google.maps.LatLng(latitude,longitude),
//     zoom: 15,
//     mapTypeId:google.maps.MapTypeId.ROADMAP
//   };
//   new window.google.maps.Map(Ember.$('.map-canvas')[0], options);
// }.on('didInsertElement')
// });
