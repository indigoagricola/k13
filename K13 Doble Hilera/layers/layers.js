var wms_layers = [];
var lyr_k13doblehilera_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "k13 doble hilera",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/k13doblehilera_0.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9239033.309361, 1085075.783820, -9238631.464965, 1085375.052903]
                            })
                        });var lyr_GLIK13DobleHilera_1 = new ol.layer.Image({
                            opacity: 1,
                            title: " GLI K13 Doble Hilera",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GLIK13DobleHilera_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9239053.304444, 1085046.394341, -9238570.345239, 1085403.924796]
                            })
                        });var lyr_VariGK13DobleHilera_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "VariG K13 Doble Hilera",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/VariGK13DobleHilera_2.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9239053.304444, 1085046.394341, -9238570.345239, 1085403.924796]
                            })
                        });

lyr_k13doblehilera_0.setVisible(true);lyr_GLIK13DobleHilera_1.setVisible(true);lyr_VariGK13DobleHilera_2.setVisible(true);
var layersList = [lyr_k13doblehilera_0,lyr_GLIK13DobleHilera_1,lyr_VariGK13DobleHilera_2];
