var wms_layers = [];

        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'GoogleHybrid_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });var format_KHOURIBGA_1 = new ol.format.GeoJSON();
var features_KHOURIBGA_1 = format_KHOURIBGA_1.readFeatures(json_KHOURIBGA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHOURIBGA_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KHOURIBGA_1.addFeatures(features_KHOURIBGA_1);cluster_KHOURIBGA_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_KHOURIBGA_1
});var lyr_KHOURIBGA_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_KHOURIBGA_1, 
                style: style_KHOURIBGA_1,
                title: '<img src="styles/legend/KHOURIBGA_1.png" /> KHOURIBGA'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_KHOURIBGA_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_KHOURIBGA_1];
lyr_KHOURIBGA_1.set('fieldAliases', {'NOM_RUE': 'NOM_RUE', 'ZONE': 'ZONE', 'N_RSDNCE': 'N_RSDNCE', 'NOM_RSDNCE': 'NOM_RSDNCE', 'LOCALISATI': 'LOCALISATI', 'NB_ETG': 'NB_ETG', 'POTENTIEL': 'POTENTIEL', 'NB_GRG_RDC': 'NB_GRG_RDC', 'NB_MNG_GLO': 'NB_MNG_GLO', 'SOUS_SOL': 'SOUS_SOL', 'COL_MNT': 'COL_MNT', 'ASCENSEUR': 'ASCENSEUR', });
lyr_KHOURIBGA_1.set('fieldImages', {'NOM_RUE': 'TextEdit', 'ZONE': 'TextEdit', 'N_RSDNCE': 'TextEdit', 'NOM_RSDNCE': 'TextEdit', 'LOCALISATI': 'TextEdit', 'NB_ETG': 'TextEdit', 'POTENTIEL': 'TextEdit', 'NB_GRG_RDC': 'TextEdit', 'NB_MNG_GLO': 'TextEdit', 'SOUS_SOL': 'TextEdit', 'COL_MNT': 'TextEdit', 'ASCENSEUR': 'TextEdit', });
lyr_KHOURIBGA_1.set('fieldLabels', {'NOM_RUE': 'no label', 'ZONE': 'no label', 'N_RSDNCE': 'no label', 'NOM_RSDNCE': 'no label', 'LOCALISATI': 'no label', 'NB_ETG': 'no label', 'POTENTIEL': 'no label', 'NB_GRG_RDC': 'no label', 'NB_MNG_GLO': 'no label', 'SOUS_SOL': 'no label', 'COL_MNT': 'no label', 'ASCENSEUR': 'no label', });
lyr_KHOURIBGA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});