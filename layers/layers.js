var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Statistiques_1 = new ol.format.GeoJSON();
var features_Statistiques_1 = format_Statistiques_1.readFeatures(json_Statistiques_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Statistiques_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Statistiques_1.addFeatures(features_Statistiques_1);
cluster_Statistiques_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Statistiques_1
});
var lyr_Statistiques_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Statistiques_1, 
                style: style_Statistiques_1,
                popuplayertitle: 'Statistiques',
                interactive: true,
                title: '<img src="styles/legend/Statistiques_1.png" /> Statistiques'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Statistiques_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Statistiques_1];
lyr_Statistiques_1.set('fieldAliases', {'CONSEIL_RE': 'Regions', 'repb_Étiq': 'Competition', 'repb_field': 'Participants', 'repb_fie_1': 'Equipes', 'repb_fie_2': 'Joueurs', 'Form_Tech': 'Arbitres', 'img': 'Coupe', });
lyr_Statistiques_1.set('fieldImages', {'CONSEIL_RE': 'TextEdit', 'repb_Étiq': 'TextEdit', 'repb_field': 'TextEdit', 'repb_fie_1': 'TextEdit', 'repb_fie_2': 'TextEdit', 'Form_Tech': 'TextEdit', 'img': 'ExternalResource', });
lyr_Statistiques_1.set('fieldLabels', {'CONSEIL_RE': 'inline label - always visible', 'repb_Étiq': 'inline label - always visible', 'repb_field': 'inline label - always visible', 'repb_fie_1': 'inline label - always visible', 'repb_fie_2': 'inline label - always visible', 'Form_Tech': 'inline label - always visible', 'img': 'header label - visible with data', });
lyr_Statistiques_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});