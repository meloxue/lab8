function initMap() {
	// add your code here
	L.mapquest.key = 'fVy70CjLl2N1QAixKAKik4wvAr6GWlPB';

	var map = L. mapquest.map('map', {
		center: [32.88, -117.238],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.238]).addTo(map);
}