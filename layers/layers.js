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

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_2KmBuffer_3 = new ol.format.GeoJSON();
var features_2KmBuffer_3 = format_2KmBuffer_3.readFeatures(json_2KmBuffer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2KmBuffer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2KmBuffer_3.addFeatures(features_2KmBuffer_3);
var lyr_2KmBuffer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2KmBuffer_3, 
                style: style_2KmBuffer_3,
                popuplayertitle: '2 Km Buffer',
                interactive: false,
                title: '<img src="styles/legend/2KmBuffer_3.png" /> 2 Km Buffer'
            });
var format_Contour5MeterInterval_4 = new ol.format.GeoJSON();
var features_Contour5MeterInterval_4 = format_Contour5MeterInterval_4.readFeatures(json_Contour5MeterInterval_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contour5MeterInterval_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contour5MeterInterval_4.addFeatures(features_Contour5MeterInterval_4);
var lyr_Contour5MeterInterval_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contour5MeterInterval_4, 
                style: style_Contour5MeterInterval_4,
                popuplayertitle: 'Contour (5 Meter Interval)',
                interactive: true,
                title: '<img src="styles/legend/Contour5MeterInterval_4.png" /> Contour (5 Meter Interval)'
            });
var format_Basins_5 = new ol.format.GeoJSON();
var features_Basins_5 = format_Basins_5.readFeatures(json_Basins_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basins_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basins_5.addFeatures(features_Basins_5);
var lyr_Basins_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Basins_5, 
                style: style_Basins_5,
                popuplayertitle: 'Basins',
                interactive: false,
    title: 'Basins<br />\
    <img src="styles/legend/Basins_5_0.png" /> 4 - 959<br />\
    <img src="styles/legend/Basins_5_1.png" /> 959 - 1913<br />\
    <img src="styles/legend/Basins_5_2.png" /> 1913 - 2868<br />\
    <img src="styles/legend/Basins_5_3.png" /> 2868 - 3822<br />' });
var format_Streams_6 = new ol.format.GeoJSON();
var features_Streams_6 = format_Streams_6.readFeatures(json_Streams_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_6.addFeatures(features_Streams_6);
var lyr_Streams_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_6, 
                style: style_Streams_6,
                popuplayertitle: 'Streams',
                interactive: true,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_6_0.png" /> 1<br />\
    <img src="styles/legend/Streams_6_1.png" /> 2<br />\
    <img src="styles/legend/Streams_6_2.png" /> 3<br />\
    <img src="styles/legend/Streams_6_3.png" /> 4<br />\
    <img src="styles/legend/Streams_6_4.png" /> 5<br />' });
var format_Village_Virani_7 = new ol.format.GeoJSON();
var features_Village_Virani_7 = format_Village_Virani_7.readFeatures(json_Village_Virani_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Village_Virani_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Village_Virani_7.addFeatures(features_Village_Virani_7);
var lyr_Village_Virani_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Village_Virani_7, 
                style: style_Village_Virani_7,
                popuplayertitle: 'Village_Virani',
                interactive: true,
                title: '<img src="styles/legend/Village_Virani_7.png" /> Village_Virani'
            });
var format_2KmBuffer_8 = new ol.format.GeoJSON();
var features_2KmBuffer_8 = format_2KmBuffer_8.readFeatures(json_2KmBuffer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2KmBuffer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2KmBuffer_8.addFeatures(features_2KmBuffer_8);
var lyr_2KmBuffer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2KmBuffer_8, 
                style: style_2KmBuffer_8,
                popuplayertitle: '2 Km Buffer',
                interactive: false,
                title: '<img src="styles/legend/2KmBuffer_8.png" /> 2 Km Buffer'
            });
var format_Contour5MeterInterval_9 = new ol.format.GeoJSON();
var features_Contour5MeterInterval_9 = format_Contour5MeterInterval_9.readFeatures(json_Contour5MeterInterval_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contour5MeterInterval_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contour5MeterInterval_9.addFeatures(features_Contour5MeterInterval_9);
var lyr_Contour5MeterInterval_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contour5MeterInterval_9, 
                style: style_Contour5MeterInterval_9,
                popuplayertitle: 'Contour (5 Meter Interval)',
                interactive: true,
                title: '<img src="styles/legend/Contour5MeterInterval_9.png" /> Contour (5 Meter Interval)'
            });
var format_Basins_10 = new ol.format.GeoJSON();
var features_Basins_10 = format_Basins_10.readFeatures(json_Basins_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basins_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basins_10.addFeatures(features_Basins_10);
var lyr_Basins_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Basins_10, 
                style: style_Basins_10,
                popuplayertitle: 'Basins',
                interactive: false,
    title: 'Basins<br />\
    <img src="styles/legend/Basins_10_0.png" /> 6 - 1391<br />\
    <img src="styles/legend/Basins_10_1.png" /> 1391 - 2776<br />\
    <img src="styles/legend/Basins_10_2.png" /> 2776 - 4160<br />\
    <img src="styles/legend/Basins_10_3.png" /> 4160 - 5545<br />' });
var format_Streams_11 = new ol.format.GeoJSON();
var features_Streams_11 = format_Streams_11.readFeatures(json_Streams_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_11.addFeatures(features_Streams_11);
var lyr_Streams_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_11, 
                style: style_Streams_11,
                popuplayertitle: 'Streams',
                interactive: true,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_11_0.png" /> 1<br />\
    <img src="styles/legend/Streams_11_1.png" /> 2<br />\
    <img src="styles/legend/Streams_11_2.png" /> 3<br />\
    <img src="styles/legend/Streams_11_3.png" /> 4<br />\
    <img src="styles/legend/Streams_11_4.png" /> 5<br />' });
var format_Village_Ukheda_12 = new ol.format.GeoJSON();
var features_Village_Ukheda_12 = format_Village_Ukheda_12.readFeatures(json_Village_Ukheda_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Village_Ukheda_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Village_Ukheda_12.addFeatures(features_Village_Ukheda_12);
var lyr_Village_Ukheda_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Village_Ukheda_12, 
                style: style_Village_Ukheda_12,
                popuplayertitle: 'Village_Ukheda',
                interactive: true,
                title: '<img src="styles/legend/Village_Ukheda_12.png" /> Village_Ukheda'
            });
var format_2KmBuffer_13 = new ol.format.GeoJSON();
var features_2KmBuffer_13 = format_2KmBuffer_13.readFeatures(json_2KmBuffer_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2KmBuffer_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2KmBuffer_13.addFeatures(features_2KmBuffer_13);
var lyr_2KmBuffer_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2KmBuffer_13, 
                style: style_2KmBuffer_13,
                popuplayertitle: '2 Km Buffer',
                interactive: false,
                title: '<img src="styles/legend/2KmBuffer_13.png" /> 2 Km Buffer'
            });
var format_Contour5MeterInterval_14 = new ol.format.GeoJSON();
var features_Contour5MeterInterval_14 = format_Contour5MeterInterval_14.readFeatures(json_Contour5MeterInterval_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contour5MeterInterval_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contour5MeterInterval_14.addFeatures(features_Contour5MeterInterval_14);
var lyr_Contour5MeterInterval_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contour5MeterInterval_14, 
                style: style_Contour5MeterInterval_14,
                popuplayertitle: 'Contour (5 Meter Interval)',
                interactive: true,
                title: '<img src="styles/legend/Contour5MeterInterval_14.png" /> Contour (5 Meter Interval)'
            });
var format_Basins_15 = new ol.format.GeoJSON();
var features_Basins_15 = format_Basins_15.readFeatures(json_Basins_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basins_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basins_15.addFeatures(features_Basins_15);
var lyr_Basins_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Basins_15, 
                style: style_Basins_15,
                popuplayertitle: 'Basins',
                interactive: false,
    title: 'Basins<br />\
    <img src="styles/legend/Basins_15_0.png" /> 0 - 1118<br />\
    <img src="styles/legend/Basins_15_1.png" /> 1118 - 2235<br />\
    <img src="styles/legend/Basins_15_2.png" /> 2235 - 3353<br />\
    <img src="styles/legend/Basins_15_3.png" /> 3353 - 4470<br />' });
var format_Streams_16 = new ol.format.GeoJSON();
var features_Streams_16 = format_Streams_16.readFeatures(json_Streams_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_16.addFeatures(features_Streams_16);
var lyr_Streams_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_16, 
                style: style_Streams_16,
                popuplayertitle: 'Streams',
                interactive: true,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_16_0.png" /> 1<br />\
    <img src="styles/legend/Streams_16_1.png" /> 2<br />\
    <img src="styles/legend/Streams_16_2.png" /> 3<br />\
    <img src="styles/legend/Streams_16_3.png" /> 4<br />\
    <img src="styles/legend/Streams_16_4.png" /> 5<br />' });
var format_Village_Lakshmipar_17 = new ol.format.GeoJSON();
var features_Village_Lakshmipar_17 = format_Village_Lakshmipar_17.readFeatures(json_Village_Lakshmipar_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Village_Lakshmipar_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Village_Lakshmipar_17.addFeatures(features_Village_Lakshmipar_17);
var lyr_Village_Lakshmipar_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Village_Lakshmipar_17, 
                style: style_Village_Lakshmipar_17,
                popuplayertitle: 'Village_Lakshmipar',
                interactive: true,
                title: '<img src="styles/legend/Village_Lakshmipar_17.png" /> Village_Lakshmipar'
            });
var format_2KmBuffer_18 = new ol.format.GeoJSON();
var features_2KmBuffer_18 = format_2KmBuffer_18.readFeatures(json_2KmBuffer_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2KmBuffer_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2KmBuffer_18.addFeatures(features_2KmBuffer_18);
var lyr_2KmBuffer_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2KmBuffer_18, 
                style: style_2KmBuffer_18,
                popuplayertitle: '2 Km Buffer',
                interactive: false,
                title: '<img src="styles/legend/2KmBuffer_18.png" /> 2 Km Buffer'
            });
var format_Contour5MeterInterval_19 = new ol.format.GeoJSON();
var features_Contour5MeterInterval_19 = format_Contour5MeterInterval_19.readFeatures(json_Contour5MeterInterval_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contour5MeterInterval_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contour5MeterInterval_19.addFeatures(features_Contour5MeterInterval_19);
var lyr_Contour5MeterInterval_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contour5MeterInterval_19, 
                style: style_Contour5MeterInterval_19,
                popuplayertitle: 'Contour (5 Meter Interval)',
                interactive: true,
                title: '<img src="styles/legend/Contour5MeterInterval_19.png" /> Contour (5 Meter Interval)'
            });
var format_Basins_20 = new ol.format.GeoJSON();
var features_Basins_20 = format_Basins_20.readFeatures(json_Basins_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basins_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basins_20.addFeatures(features_Basins_20);
var lyr_Basins_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Basins_20, 
                style: style_Basins_20,
                popuplayertitle: 'Basins',
                interactive: false,
    title: 'Basins<br />\
    <img src="styles/legend/Basins_20_0.png" /> 0 - 901<br />\
    <img src="styles/legend/Basins_20_1.png" /> 901 - 1803<br />\
    <img src="styles/legend/Basins_20_2.png" /> 1803 - 2704<br />\
    <img src="styles/legend/Basins_20_3.png" /> 2704 - 3605<br />' });
var format_Streams_21 = new ol.format.GeoJSON();
var features_Streams_21 = format_Streams_21.readFeatures(json_Streams_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_21.addFeatures(features_Streams_21);
var lyr_Streams_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_21, 
                style: style_Streams_21,
                popuplayertitle: 'Streams',
                interactive: true,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_21_0.png" /> 1<br />\
    <img src="styles/legend/Streams_21_1.png" /> 2<br />\
    <img src="styles/legend/Streams_21_2.png" /> 3<br />\
    <img src="styles/legend/Streams_21_3.png" /> 4<br />\
    <img src="styles/legend/Streams_21_4.png" /> 5<br />' });
var format_Village_Kalyanpar_22 = new ol.format.GeoJSON();
var features_Village_Kalyanpar_22 = format_Village_Kalyanpar_22.readFeatures(json_Village_Kalyanpar_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Village_Kalyanpar_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Village_Kalyanpar_22.addFeatures(features_Village_Kalyanpar_22);
var lyr_Village_Kalyanpar_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Village_Kalyanpar_22, 
                style: style_Village_Kalyanpar_22,
                popuplayertitle: 'Village_Kalyanpar',
                interactive: true,
                title: '<img src="styles/legend/Village_Kalyanpar_22.png" /> Village_Kalyanpar'
            });
var format_2KmBuffer_23 = new ol.format.GeoJSON();
var features_2KmBuffer_23 = format_2KmBuffer_23.readFeatures(json_2KmBuffer_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2KmBuffer_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2KmBuffer_23.addFeatures(features_2KmBuffer_23);
var lyr_2KmBuffer_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2KmBuffer_23, 
                style: style_2KmBuffer_23,
                popuplayertitle: '2 Km Buffer',
                interactive: false,
                title: '<img src="styles/legend/2KmBuffer_23.png" /> 2 Km Buffer'
            });
var format_Contour5MeterInterval_24 = new ol.format.GeoJSON();
var features_Contour5MeterInterval_24 = format_Contour5MeterInterval_24.readFeatures(json_Contour5MeterInterval_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contour5MeterInterval_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contour5MeterInterval_24.addFeatures(features_Contour5MeterInterval_24);
var lyr_Contour5MeterInterval_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contour5MeterInterval_24, 
                style: style_Contour5MeterInterval_24,
                popuplayertitle: 'Contour (5 Meter Interval)',
                interactive: true,
                title: '<img src="styles/legend/Contour5MeterInterval_24.png" /> Contour (5 Meter Interval)'
            });
var format_Basins_25 = new ol.format.GeoJSON();
var features_Basins_25 = format_Basins_25.readFeatures(json_Basins_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basins_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basins_25.addFeatures(features_Basins_25);
var lyr_Basins_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Basins_25, 
                style: style_Basins_25,
                popuplayertitle: 'Basins',
                interactive: true,
    title: 'Basins<br />\
    <img src="styles/legend/Basins_25_0.png" /> 3 - 1043<br />\
    <img src="styles/legend/Basins_25_1.png" /> 1043 - 2083<br />\
    <img src="styles/legend/Basins_25_2.png" /> 2083 - 3122<br />\
    <img src="styles/legend/Basins_25_3.png" /> 3122 - 4162<br />' });
var format_Streams_26 = new ol.format.GeoJSON();
var features_Streams_26 = format_Streams_26.readFeatures(json_Streams_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_26.addFeatures(features_Streams_26);
var lyr_Streams_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_26, 
                style: style_Streams_26,
                popuplayertitle: 'Streams',
                interactive: true,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_26_0.png" /> 1<br />\
    <img src="styles/legend/Streams_26_1.png" /> 2<br />\
    <img src="styles/legend/Streams_26_2.png" /> 3<br />\
    <img src="styles/legend/Streams_26_3.png" /> 4<br />\
    <img src="styles/legend/Streams_26_4.png" /> 5<br />' });
var format_Village_Anandsar_27 = new ol.format.GeoJSON();
var features_Village_Anandsar_27 = format_Village_Anandsar_27.readFeatures(json_Village_Anandsar_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Village_Anandsar_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Village_Anandsar_27.addFeatures(features_Village_Anandsar_27);
var lyr_Village_Anandsar_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Village_Anandsar_27, 
                style: style_Village_Anandsar_27,
                popuplayertitle: 'Village_Anandsar',
                interactive: true,
                title: '<img src="styles/legend/Village_Anandsar_27.png" /> Village_Anandsar'
            });
var lyr_Anandsar_28 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Anandsar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Anandsar_28.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7727291.017391, 2657750.543273, 7731725.489350, 2661630.540959]
        })
    });
var lyr_Kalyanpar_29 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kalyanpar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Kalyanpar_29.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7725846.472264, 2658514.953174, 7731219.201176, 2665887.336681]
        })
    });
var lyr_Lakshmipar_30 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Lakshmipar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Lakshmipar_30.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7723455.406996, 2661869.467835, 7730666.110450, 2667106.832112]
        })
    });
var lyr_Ukheda_31 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ukheda<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Ukheda_31.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7689655.687608, 2671728.561613, 7699776.759475, 2679469.367926]
        })
    });
var lyr_Virani_32 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Virani<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Virani_32.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7720526.208555, 2642654.205432, 7725696.801823, 2649795.126314]
        })
    });
var format_Padatar_Jamin_33 = new ol.format.GeoJSON();
var features_Padatar_Jamin_33 = format_Padatar_Jamin_33.readFeatures(json_Padatar_Jamin_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padatar_Jamin_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padatar_Jamin_33.addFeatures(features_Padatar_Jamin_33);
var lyr_Padatar_Jamin_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Padatar_Jamin_33, 
                style: style_Padatar_Jamin_33,
                popuplayertitle: 'Padatar_Jamin',
                interactive: true,
                title: '<img src="styles/legend/Padatar_Jamin_33.png" /> Padatar_Jamin'
            });
var format_Gauchar_34 = new ol.format.GeoJSON();
var features_Gauchar_34 = format_Gauchar_34.readFeatures(json_Gauchar_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gauchar_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gauchar_34.addFeatures(features_Gauchar_34);
var lyr_Gauchar_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gauchar_34, 
                style: style_Gauchar_34,
                popuplayertitle: 'Gauchar',
                interactive: true,
                title: '<img src="styles/legend/Gauchar_34.png" /> Gauchar'
            });
var format_Plots_35 = new ol.format.GeoJSON();
var features_Plots_35 = format_Plots_35.readFeatures(json_Plots_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plots_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plots_35.addFeatures(features_Plots_35);
var lyr_Plots_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plots_35, 
                style: style_Plots_35,
                popuplayertitle: 'Plots',
                interactive: true,
                title: '<img src="styles/legend/Plots_35.png" /> Plots'
            });
var format_Nursery_36 = new ol.format.GeoJSON();
var features_Nursery_36 = format_Nursery_36.readFeatures(json_Nursery_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nursery_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nursery_36.addFeatures(features_Nursery_36);
var lyr_Nursery_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nursery_36, 
                style: style_Nursery_36,
                popuplayertitle: 'Nursery',
                interactive: true,
                title: '<img src="styles/legend/Nursery_36.png" /> Nursery'
            });
var format_River_37 = new ol.format.GeoJSON();
var features_River_37 = format_River_37.readFeatures(json_River_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_37.addFeatures(features_River_37);
var lyr_River_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_River_37, 
                style: style_River_37,
                popuplayertitle: 'River',
                interactive: true,
                title: '<img src="styles/legend/River_37.png" /> River'
            });
var format_Dem_38 = new ol.format.GeoJSON();
var features_Dem_38 = format_Dem_38.readFeatures(json_Dem_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dem_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dem_38.addFeatures(features_Dem_38);
var lyr_Dem_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dem_38, 
                style: style_Dem_38,
                popuplayertitle: 'Dem',
                interactive: true,
                title: '<img src="styles/legend/Dem_38.png" /> Dem'
            });
var format_Talav_39 = new ol.format.GeoJSON();
var features_Talav_39 = format_Talav_39.readFeatures(json_Talav_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Talav_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Talav_39.addFeatures(features_Talav_39);
var lyr_Talav_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Talav_39, 
                style: style_Talav_39,
                popuplayertitle: 'Talav',
                interactive: true,
                title: '<img src="styles/legend/Talav_39.png" /> Talav'
            });
var format_Forest_40 = new ol.format.GeoJSON();
var features_Forest_40 = format_Forest_40.readFeatures(json_Forest_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_40.addFeatures(features_Forest_40);
var lyr_Forest_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forest_40, 
                style: style_Forest_40,
                popuplayertitle: 'Forest',
                interactive: true,
                title: '<img src="styles/legend/Forest_40.png" /> Forest'
            });
var format_Waterbodies_41 = new ol.format.GeoJSON();
var features_Waterbodies_41 = format_Waterbodies_41.readFeatures(json_Waterbodies_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbodies_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbodies_41.addFeatures(features_Waterbodies_41);
var lyr_Waterbodies_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbodies_41, 
                style: style_Waterbodies_41,
                popuplayertitle: 'Waterbodies',
                interactive: true,
                title: '<img src="styles/legend/Waterbodies_41.png" /> Waterbodies'
            });
var format_Canals_42 = new ol.format.GeoJSON();
var features_Canals_42 = format_Canals_42.readFeatures(json_Canals_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canals_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canals_42.addFeatures(features_Canals_42);
var lyr_Canals_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Canals_42, 
                style: style_Canals_42,
                popuplayertitle: 'Canals',
                interactive: false,
                title: '<img src="styles/legend/Canals_42.png" /> Canals'
            });
var format_Railway_43 = new ol.format.GeoJSON();
var features_Railway_43 = format_Railway_43.readFeatures(json_Railway_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_43.addFeatures(features_Railway_43);
var lyr_Railway_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_43, 
                style: style_Railway_43,
                popuplayertitle: 'Railway',
                interactive: false,
                title: '<img src="styles/legend/Railway_43.png" /> Railway'
            });
var format_InfrastrcutureRoads_44 = new ol.format.GeoJSON();
var features_InfrastrcutureRoads_44 = format_InfrastrcutureRoads_44.readFeatures(json_InfrastrcutureRoads_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrcutureRoads_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrcutureRoads_44.addFeatures(features_InfrastrcutureRoads_44);
var lyr_InfrastrcutureRoads_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrcutureRoads_44, 
                style: style_InfrastrcutureRoads_44,
                popuplayertitle: 'Infrastrcuture Roads',
                interactive: false,
    title: 'Infrastrcuture Roads<br />\
    <img src="styles/legend/InfrastrcutureRoads_44_0.png" /> primary<br />\
    <img src="styles/legend/InfrastrcutureRoads_44_1.png" /> residential<br />\
    <img src="styles/legend/InfrastrcutureRoads_44_2.png" /> service<br />\
    <img src="styles/legend/InfrastrcutureRoads_44_3.png" /> tertiary<br />\
    <img src="styles/legend/InfrastrcutureRoads_44_4.png" /> track<br />' });
var group_Cadastral = new ol.layer.Group({
                                layers: [lyr_Anandsar_28,lyr_Kalyanpar_29,lyr_Lakshmipar_30,lyr_Ukheda_31,lyr_Virani_32,lyr_Padatar_Jamin_33,lyr_Gauchar_34,lyr_Plots_35,lyr_Nursery_36,lyr_River_37,lyr_Dem_38,lyr_Talav_39,],
                                fold: 'close',
                                title: 'Cadastral'});
var group_Anandsar = new ol.layer.Group({
                                layers: [lyr_2KmBuffer_23,lyr_Contour5MeterInterval_24,lyr_Basins_25,lyr_Streams_26,lyr_Village_Anandsar_27,],
                                fold: 'close',
                                title: 'Anandsar'});
var group_Kalyanpar = new ol.layer.Group({
                                layers: [lyr_2KmBuffer_18,lyr_Contour5MeterInterval_19,lyr_Basins_20,lyr_Streams_21,lyr_Village_Kalyanpar_22,],
                                fold: 'close',
                                title: 'Kalyanpar'});
var group_Lakshmipar = new ol.layer.Group({
                                layers: [lyr_2KmBuffer_13,lyr_Contour5MeterInterval_14,lyr_Basins_15,lyr_Streams_16,lyr_Village_Lakshmipar_17,],
                                fold: 'close',
                                title: 'Lakshmipar'});
var group_Ukheda = new ol.layer.Group({
                                layers: [lyr_2KmBuffer_8,lyr_Contour5MeterInterval_9,lyr_Basins_10,lyr_Streams_11,lyr_Village_Ukheda_12,],
                                fold: 'close',
                                title: 'Ukheda'});
var group_Virani = new ol.layer.Group({
                                layers: [lyr_2KmBuffer_3,lyr_Contour5MeterInterval_4,lyr_Basins_5,lyr_Streams_6,lyr_Village_Virani_7,],
                                fold: 'close',
                                title: 'Virani'});

lyr_OSMStandard_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(false);lyr_2KmBuffer_3.setVisible(true);lyr_Contour5MeterInterval_4.setVisible(false);lyr_Basins_5.setVisible(false);lyr_Streams_6.setVisible(false);lyr_Village_Virani_7.setVisible(true);lyr_2KmBuffer_8.setVisible(true);lyr_Contour5MeterInterval_9.setVisible(false);lyr_Basins_10.setVisible(false);lyr_Streams_11.setVisible(false);lyr_Village_Ukheda_12.setVisible(true);lyr_2KmBuffer_13.setVisible(true);lyr_Contour5MeterInterval_14.setVisible(false);lyr_Basins_15.setVisible(false);lyr_Streams_16.setVisible(false);lyr_Village_Lakshmipar_17.setVisible(true);lyr_2KmBuffer_18.setVisible(true);lyr_Contour5MeterInterval_19.setVisible(false);lyr_Basins_20.setVisible(false);lyr_Streams_21.setVisible(false);lyr_Village_Kalyanpar_22.setVisible(true);lyr_2KmBuffer_23.setVisible(true);lyr_Contour5MeterInterval_24.setVisible(false);lyr_Basins_25.setVisible(false);lyr_Streams_26.setVisible(false);lyr_Village_Anandsar_27.setVisible(true);lyr_Anandsar_28.setVisible(false);lyr_Kalyanpar_29.setVisible(false);lyr_Lakshmipar_30.setVisible(false);lyr_Ukheda_31.setVisible(false);lyr_Virani_32.setVisible(false);lyr_Padatar_Jamin_33.setVisible(false);lyr_Gauchar_34.setVisible(false);lyr_Plots_35.setVisible(false);lyr_Nursery_36.setVisible(false);lyr_River_37.setVisible(false);lyr_Dem_38.setVisible(false);lyr_Talav_39.setVisible(false);lyr_Forest_40.setVisible(true);lyr_Waterbodies_41.setVisible(true);lyr_Canals_42.setVisible(false);lyr_Railway_43.setVisible(true);lyr_InfrastrcutureRoads_44.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_GoogleHybrid_2,group_Virani,group_Ukheda,group_Lakshmipar,group_Kalyanpar,group_Anandsar,group_Cadastral,lyr_Forest_40,lyr_Waterbodies_41,lyr_Canals_42,lyr_Railway_43,lyr_InfrastrcutureRoads_44];
lyr_2KmBuffer_3.set('fieldAliases', {'Status': 'Status', 'Popu_2001': 'Popu_2001', 'Village': 'Village', 'ROUND': 'ROUND', 'BEAT': 'BEAT', 'Dist_Id': 'Dist_Id', 'Taluka': 'Taluka', 'DIVISION': 'DIVISION', 'Remark': 'Remark', 'CIRCLE': 'CIRCLE', 'Village_Id': 'Village_Id', 'Taluka_Id': 'Taluka_Id', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM': 'GUJ_NAM', 'S_Name': 'S_Name', 'VILL_TYPE': 'VILL_TYPE', 'GUJ_NAM_1': 'GUJ_NAM_1', 'District': 'District', 'RANGE': 'RANGE', });
lyr_Contour5MeterInterval_4.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', 'length': 'length', });
lyr_Basins_5.set('fieldAliases', {'PolygonId': 'PolygonId', 'Area': 'Area', 'Subbasin': 'Subbasin', 'strmOrder': 'strmOrder', });
lyr_Streams_6.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', 'BasinNo': 'BasinNo', });
lyr_Village_Virani_7.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'S_Name': 'S_Name', 'Remark': 'Remark', 'GUJ_NAM': 'GUJ_NAM', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM_1': 'GUJ_NAM_1', 'Popu_2001': 'Popu_2001', 'Status': 'Status', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'VILL_TYPE': 'VILL_TYPE', 'FOREST_AR': 'FOREST_AR', });
lyr_2KmBuffer_8.set('fieldAliases', {'Status': 'Status', 'Popu_2001': 'Popu_2001', 'Village': 'Village', 'ROUND': 'ROUND', 'BEAT': 'BEAT', 'Dist_Id': 'Dist_Id', 'Taluka': 'Taluka', 'DIVISION': 'DIVISION', 'Remark': 'Remark', 'CIRCLE': 'CIRCLE', 'Village_Id': 'Village_Id', 'Taluka_Id': 'Taluka_Id', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM': 'GUJ_NAM', 'S_Name': 'S_Name', 'VILL_TYPE': 'VILL_TYPE', 'GUJ_NAM_1': 'GUJ_NAM_1', 'District': 'District', 'RANGE': 'RANGE', });
lyr_Contour5MeterInterval_9.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', 'length': 'length', });
lyr_Basins_10.set('fieldAliases', {'PolygonId': 'PolygonId', 'Area': 'Area', 'Subbasin': 'Subbasin', 'strmOrder': 'strmOrder', });
lyr_Streams_11.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', 'BasinNo': 'BasinNo', });
lyr_Village_Ukheda_12.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'S_Name': 'S_Name', 'Remark': 'Remark', 'GUJ_NAM': 'GUJ_NAM', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM_1': 'GUJ_NAM_1', 'Popu_2001': 'Popu_2001', 'Status': 'Status', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'VILL_TYPE': 'VILL_TYPE', 'FOREST_AR': 'FOREST_AR', });
lyr_2KmBuffer_13.set('fieldAliases', {'Status': 'Status', 'Popu_2001': 'Popu_2001', 'Village': 'Village', 'ROUND': 'ROUND', 'BEAT': 'BEAT', 'Dist_Id': 'Dist_Id', 'Taluka': 'Taluka', 'DIVISION': 'DIVISION', 'Remark': 'Remark', 'CIRCLE': 'CIRCLE', 'Village_Id': 'Village_Id', 'Taluka_Id': 'Taluka_Id', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM': 'GUJ_NAM', 'S_Name': 'S_Name', 'VILL_TYPE': 'VILL_TYPE', 'GUJ_NAM_1': 'GUJ_NAM_1', 'District': 'District', 'RANGE': 'RANGE', });
lyr_Contour5MeterInterval_14.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', 'length': 'length', });
lyr_Basins_15.set('fieldAliases', {'PolygonId': 'PolygonId', 'Area': 'Area', 'Subbasin': 'Subbasin', });
lyr_Streams_16.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', 'BasinNo': 'BasinNo', });
lyr_Village_Lakshmipar_17.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'S_Name': 'S_Name', 'Remark': 'Remark', 'GUJ_NAM': 'GUJ_NAM', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM_1': 'GUJ_NAM_1', 'Popu_2001': 'Popu_2001', 'Status': 'Status', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'VILL_TYPE': 'VILL_TYPE', 'FOREST_AR': 'FOREST_AR', });
lyr_2KmBuffer_18.set('fieldAliases', {'Status': 'Status', 'Popu_2001': 'Popu_2001', 'Village': 'Village', 'ROUND': 'ROUND', 'BEAT': 'BEAT', 'Dist_Id': 'Dist_Id', 'Taluka': 'Taluka', 'DIVISION': 'DIVISION', 'Remark': 'Remark', 'CIRCLE': 'CIRCLE', 'Village_Id': 'Village_Id', 'Taluka_Id': 'Taluka_Id', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM': 'GUJ_NAM', 'S_Name': 'S_Name', 'VILL_TYPE': 'VILL_TYPE', 'GUJ_NAM_1': 'GUJ_NAM_1', 'District': 'District', 'RANGE': 'RANGE', });
lyr_Contour5MeterInterval_19.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Basins_20.set('fieldAliases', {'PolygonId': 'PolygonId', 'Area': 'Area', 'Subbasin': 'Subbasin', 'strmOrder': 'strmOrder', });
lyr_Streams_21.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', 'BasinNo': 'BasinNo', });
lyr_Village_Kalyanpar_22.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'S_Name': 'S_Name', 'Remark': 'Remark', 'GUJ_NAM': 'GUJ_NAM', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM_1': 'GUJ_NAM_1', 'Popu_2001': 'Popu_2001', 'Status': 'Status', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'VILL_TYPE': 'VILL_TYPE', 'FOREST_AR': 'FOREST_AR', });
lyr_2KmBuffer_23.set('fieldAliases', {'Status': 'Status', 'Popu_2001': 'Popu_2001', 'Village': 'Village', 'ROUND': 'ROUND', 'BEAT': 'BEAT', 'Dist_Id': 'Dist_Id', 'Taluka': 'Taluka', 'DIVISION': 'DIVISION', 'Remark': 'Remark', 'CIRCLE': 'CIRCLE', 'Village_Id': 'Village_Id', 'Taluka_Id': 'Taluka_Id', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM': 'GUJ_NAM', 'S_Name': 'S_Name', 'VILL_TYPE': 'VILL_TYPE', 'GUJ_NAM_1': 'GUJ_NAM_1', 'District': 'District', 'RANGE': 'RANGE', });
lyr_Contour5MeterInterval_24.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', 'length': 'length', });
lyr_Basins_25.set('fieldAliases', {'PolygonId': 'PolygonId', 'Area': 'Area', 'Subbasin': 'Subbasin', });
lyr_Streams_26.set('fieldAliases', {'LINKNO': 'LINKNO', 'DSLINKNO': 'DSLINKNO', 'USLINKNO1': 'USLINKNO1', 'USLINKNO2': 'USLINKNO2', 'DSNODEID': 'DSNODEID', 'strmOrder': 'strmOrder', 'Length': 'Length', 'Magnitude': 'Magnitude', 'DSContArea': 'DSContArea', 'strmDrop': 'strmDrop', 'Slope': 'Slope', 'StraightL': 'StraightL', 'USContArea': 'USContArea', 'WSNO': 'WSNO', 'DOUTEND': 'DOUTEND', 'DOUTSTART': 'DOUTSTART', 'DOUTMID': 'DOUTMID', 'BasinNo': 'BasinNo', });
lyr_Village_Anandsar_27.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'S_Name': 'S_Name', 'Remark': 'Remark', 'GUJ_NAM': 'GUJ_NAM', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM_1': 'GUJ_NAM_1', 'Popu_2001': 'Popu_2001', 'Status': 'Status', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'VILL_TYPE': 'VILL_TYPE', 'FOREST_AR': 'FOREST_AR', });
lyr_Padatar_Jamin_33.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Gauchar_34.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Plots_35.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Nursery_36.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_River_37.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Dem_38.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Talav_39.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Forest_40.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'Sno': 'Sno', 'Name': 'Name', 'Check': 'Check', 'F_SNO': 'F_SNO', 'F_TYPE': 'F_TYPE', 'SECTION': 'SECTION', 'FG_AREA_Ha': 'FG_AREA_Ha', 'REMARKS': 'REMARKS', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CATEGORY': 'CATEGORY', 'GN_NO': 'GN_NO', 'GN_DATE': 'GN_DATE', 'COMPARTMEN': 'COMPARTMEN', 'SANC_AR_Ha': 'SANC_AR_Ha', });
lyr_Waterbodies_41.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Canals_42.set('fieldAliases', {'Layer': 'Layer', 'Categories': 'Categories', 'Feature_Co': 'Feature_Co', 'Validation': 'Validation', 'Year_Updat': 'Year_Updat', 'Projtn_Dtm': 'Projtn_Dtm', 'Cont_Offcr': 'Cont_Offcr', 'Cont_No': 'Cont_No', 'Scale_mapi': 'Scale_mapi', 'Data_Sour': 'Data_Sour', 'Proj_code': 'Proj_code', 'Remarks': 'Remarks', });
lyr_Railway_43.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'RAIL_SWA_T': 'RAIL_SWA_T', 'RAIL_SWA_1': 'RAIL_SWA_1', 'FNODE1': 'FNODE1', 'TNODE1': 'TNODE1', 'LPOLY1': 'LPOLY1', 'RPOLY1': 'RPOLY1', 'RAIL_AOI_': 'RAIL_AOI_', 'RAIL_AOI_I': 'RAIL_AOI_I', 'RL_CODE': 'RL_CODE', 'RAIL_TYPE': 'RAIL_TYPE', 'RAIL_DET': 'RAIL_DET', 'ID': 'ID', 'Google_Upd': 'Google_Upd', });
lyr_InfrastrcutureRoads_44.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_2KmBuffer_3.set('fieldImages', {'Status': 'TextEdit', 'Popu_2001': 'TextEdit', 'Village': 'TextEdit', 'ROUND': 'TextEdit', 'BEAT': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka': 'TextEdit', 'DIVISION': 'TextEdit', 'Remark': 'TextEdit', 'CIRCLE': 'TextEdit', 'Village_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'S_Name': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'District': 'TextEdit', 'RANGE': 'TextEdit', });
lyr_Contour5MeterInterval_4.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', 'length': 'TextEdit', });
lyr_Basins_5.set('fieldImages', {'PolygonId': 'TextEdit', 'Area': 'TextEdit', 'Subbasin': 'TextEdit', 'strmOrder': 'Range', });
lyr_Streams_6.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', 'BasinNo': 'Range', });
lyr_Village_Virani_7.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'S_Name': 'TextEdit', 'Remark': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'Popu_2001': 'TextEdit', 'Status': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'FOREST_AR': 'TextEdit', });
lyr_2KmBuffer_8.set('fieldImages', {'Status': 'TextEdit', 'Popu_2001': 'TextEdit', 'Village': 'TextEdit', 'ROUND': 'TextEdit', 'BEAT': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka': 'TextEdit', 'DIVISION': 'TextEdit', 'Remark': 'TextEdit', 'CIRCLE': 'TextEdit', 'Village_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'S_Name': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'District': 'TextEdit', 'RANGE': 'TextEdit', });
lyr_Contour5MeterInterval_9.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', 'length': 'TextEdit', });
lyr_Basins_10.set('fieldImages', {'PolygonId': 'TextEdit', 'Area': 'TextEdit', 'Subbasin': 'TextEdit', 'strmOrder': 'Range', });
lyr_Streams_11.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', 'BasinNo': 'Range', });
lyr_Village_Ukheda_12.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'S_Name': 'TextEdit', 'Remark': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'Popu_2001': 'TextEdit', 'Status': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'FOREST_AR': 'TextEdit', });
lyr_2KmBuffer_13.set('fieldImages', {'Status': 'TextEdit', 'Popu_2001': 'TextEdit', 'Village': 'TextEdit', 'ROUND': 'TextEdit', 'BEAT': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka': 'TextEdit', 'DIVISION': 'TextEdit', 'Remark': 'TextEdit', 'CIRCLE': 'TextEdit', 'Village_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'S_Name': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'District': 'TextEdit', 'RANGE': 'TextEdit', });
lyr_Contour5MeterInterval_14.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', 'length': 'TextEdit', });
lyr_Basins_15.set('fieldImages', {'PolygonId': 'TextEdit', 'Area': 'TextEdit', 'Subbasin': 'TextEdit', });
lyr_Streams_16.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', 'BasinNo': 'Range', });
lyr_Village_Lakshmipar_17.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'S_Name': 'TextEdit', 'Remark': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'Popu_2001': 'TextEdit', 'Status': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'FOREST_AR': 'TextEdit', });
lyr_2KmBuffer_18.set('fieldImages', {'Status': 'TextEdit', 'Popu_2001': 'TextEdit', 'Village': 'TextEdit', 'ROUND': 'TextEdit', 'BEAT': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka': 'TextEdit', 'DIVISION': 'TextEdit', 'Remark': 'TextEdit', 'CIRCLE': 'TextEdit', 'Village_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'S_Name': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'District': 'TextEdit', 'RANGE': 'TextEdit', });
lyr_Contour5MeterInterval_19.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_Basins_20.set('fieldImages', {'PolygonId': 'TextEdit', 'Area': 'TextEdit', 'Subbasin': 'TextEdit', 'strmOrder': 'Range', });
lyr_Streams_21.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', 'BasinNo': 'Range', });
lyr_Village_Kalyanpar_22.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'S_Name': 'TextEdit', 'Remark': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'Popu_2001': 'TextEdit', 'Status': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'FOREST_AR': 'TextEdit', });
lyr_2KmBuffer_23.set('fieldImages', {'Status': 'TextEdit', 'Popu_2001': 'TextEdit', 'Village': 'TextEdit', 'ROUND': 'TextEdit', 'BEAT': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka': 'TextEdit', 'DIVISION': 'TextEdit', 'Remark': 'TextEdit', 'CIRCLE': 'TextEdit', 'Village_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'S_Name': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'District': 'TextEdit', 'RANGE': 'TextEdit', });
lyr_Contour5MeterInterval_24.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', 'length': 'TextEdit', });
lyr_Basins_25.set('fieldImages', {'PolygonId': 'TextEdit', 'Area': 'TextEdit', 'Subbasin': 'TextEdit', });
lyr_Streams_26.set('fieldImages', {'LINKNO': 'Range', 'DSLINKNO': 'Range', 'USLINKNO1': 'Range', 'USLINKNO2': 'Range', 'DSNODEID': 'TextEdit', 'strmOrder': 'Range', 'Length': 'TextEdit', 'Magnitude': 'Range', 'DSContArea': 'TextEdit', 'strmDrop': 'TextEdit', 'Slope': 'TextEdit', 'StraightL': 'TextEdit', 'USContArea': 'TextEdit', 'WSNO': 'Range', 'DOUTEND': 'TextEdit', 'DOUTSTART': 'TextEdit', 'DOUTMID': 'TextEdit', 'BasinNo': 'Range', });
lyr_Village_Anandsar_27.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'S_Name': 'TextEdit', 'Remark': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'Popu_2001': 'TextEdit', 'Status': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'FOREST_AR': 'TextEdit', });
lyr_Padatar_Jamin_33.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Gauchar_34.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Plots_35.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Nursery_36.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_River_37.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Dem_38.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Talav_39.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Forest_40.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'Sno': 'TextEdit', 'Name': 'TextEdit', 'Check': 'TextEdit', 'F_SNO': 'TextEdit', 'F_TYPE': 'TextEdit', 'SECTION': 'TextEdit', 'FG_AREA_Ha': 'TextEdit', 'REMARKS': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CATEGORY': 'TextEdit', 'GN_NO': 'TextEdit', 'GN_DATE': 'DateTime', 'COMPARTMEN': 'TextEdit', 'SANC_AR_Ha': 'TextEdit', });
lyr_Waterbodies_41.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Canals_42.set('fieldImages', {'Layer': 'TextEdit', 'Categories': 'TextEdit', 'Feature_Co': 'TextEdit', 'Validation': 'TextEdit', 'Year_Updat': 'TextEdit', 'Projtn_Dtm': 'TextEdit', 'Cont_Offcr': 'TextEdit', 'Cont_No': 'TextEdit', 'Scale_mapi': 'TextEdit', 'Data_Sour': 'TextEdit', 'Proj_code': 'TextEdit', 'Remarks': 'TextEdit', });
lyr_Railway_43.set('fieldImages', {'FNODE_': 'Range', 'TNODE_': 'Range', 'LPOLY_': 'Range', 'RPOLY_': 'Range', 'LENGTH': 'TextEdit', 'RAIL_SWA_T': 'Range', 'RAIL_SWA_1': 'Range', 'FNODE1': 'TextEdit', 'TNODE1': 'TextEdit', 'LPOLY1': 'TextEdit', 'RPOLY1': 'TextEdit', 'RAIL_AOI_': 'TextEdit', 'RAIL_AOI_I': 'TextEdit', 'RL_CODE': 'TextEdit', 'RAIL_TYPE': 'TextEdit', 'RAIL_DET': 'TextEdit', 'ID': 'Range', 'Google_Upd': 'TextEdit', });
lyr_InfrastrcutureRoads_44.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_2KmBuffer_3.set('fieldLabels', {'Status': 'hidden field', 'Popu_2001': 'hidden field', 'Village': 'hidden field', 'ROUND': 'hidden field', 'BEAT': 'hidden field', 'Dist_Id': 'hidden field', 'Taluka': 'hidden field', 'DIVISION': 'hidden field', 'Remark': 'hidden field', 'CIRCLE': 'hidden field', 'Village_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM': 'hidden field', 'S_Name': 'hidden field', 'VILL_TYPE': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'District': 'hidden field', 'RANGE': 'hidden field', });
lyr_Contour5MeterInterval_4.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - always visible', 'length': 'hidden field', });
lyr_Basins_5.set('fieldLabels', {'PolygonId': 'hidden field', 'Area': 'hidden field', 'Subbasin': 'hidden field', 'strmOrder': 'hidden field', });
lyr_Streams_6.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'inline label - always visible', 'Length': 'hidden field', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', 'BasinNo': 'hidden field', });
lyr_Village_Virani_7.set('fieldLabels', {'District': 'hidden field', 'Taluka': 'hidden field', 'Village': 'inline label - always visible', 'Dist_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'hidden field', 'S_Name': 'hidden field', 'Remark': 'hidden field', 'GUJ_NAM': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'Popu_2001': 'hidden field', 'Status': 'hidden field', 'BEAT': 'hidden field', 'ROUND': 'hidden field', 'RANGE': 'hidden field', 'DIVISION': 'hidden field', 'CIRCLE': 'hidden field', 'VILL_TYPE': 'hidden field', 'FOREST_AR': 'hidden field', });
lyr_2KmBuffer_8.set('fieldLabels', {'Status': 'hidden field', 'Popu_2001': 'hidden field', 'Village': 'hidden field', 'ROUND': 'hidden field', 'BEAT': 'hidden field', 'Dist_Id': 'hidden field', 'Taluka': 'hidden field', 'DIVISION': 'hidden field', 'Remark': 'hidden field', 'CIRCLE': 'hidden field', 'Village_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM': 'hidden field', 'S_Name': 'hidden field', 'VILL_TYPE': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'District': 'hidden field', 'RANGE': 'hidden field', });
lyr_Contour5MeterInterval_9.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - always visible', 'length': 'hidden field', });
lyr_Basins_10.set('fieldLabels', {'PolygonId': 'hidden field', 'Area': 'hidden field', 'Subbasin': 'hidden field', 'strmOrder': 'hidden field', });
lyr_Streams_11.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'inline label - always visible', 'Length': 'hidden field', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', 'BasinNo': 'hidden field', });
lyr_Village_Ukheda_12.set('fieldLabels', {'District': 'hidden field', 'Taluka': 'hidden field', 'Village': 'inline label - always visible', 'Dist_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'hidden field', 'S_Name': 'hidden field', 'Remark': 'hidden field', 'GUJ_NAM': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'Popu_2001': 'hidden field', 'Status': 'hidden field', 'BEAT': 'hidden field', 'ROUND': 'hidden field', 'RANGE': 'hidden field', 'DIVISION': 'hidden field', 'CIRCLE': 'hidden field', 'VILL_TYPE': 'hidden field', 'FOREST_AR': 'hidden field', });
lyr_2KmBuffer_13.set('fieldLabels', {'Status': 'hidden field', 'Popu_2001': 'hidden field', 'Village': 'hidden field', 'ROUND': 'hidden field', 'BEAT': 'hidden field', 'Dist_Id': 'hidden field', 'Taluka': 'hidden field', 'DIVISION': 'hidden field', 'Remark': 'hidden field', 'CIRCLE': 'hidden field', 'Village_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM': 'hidden field', 'S_Name': 'hidden field', 'VILL_TYPE': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'District': 'hidden field', 'RANGE': 'hidden field', });
lyr_Contour5MeterInterval_14.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - always visible', 'length': 'hidden field', });
lyr_Basins_15.set('fieldLabels', {'PolygonId': 'hidden field', 'Area': 'hidden field', 'Subbasin': 'hidden field', });
lyr_Streams_16.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'inline label - always visible', 'Length': 'hidden field', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', 'BasinNo': 'hidden field', });
lyr_Village_Lakshmipar_17.set('fieldLabels', {'District': 'hidden field', 'Taluka': 'hidden field', 'Village': 'inline label - always visible', 'Dist_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'hidden field', 'S_Name': 'hidden field', 'Remark': 'hidden field', 'GUJ_NAM': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'Popu_2001': 'hidden field', 'Status': 'hidden field', 'BEAT': 'hidden field', 'ROUND': 'hidden field', 'RANGE': 'hidden field', 'DIVISION': 'hidden field', 'CIRCLE': 'hidden field', 'VILL_TYPE': 'hidden field', 'FOREST_AR': 'hidden field', });
lyr_2KmBuffer_18.set('fieldLabels', {'Status': 'hidden field', 'Popu_2001': 'hidden field', 'Village': 'hidden field', 'ROUND': 'hidden field', 'BEAT': 'hidden field', 'Dist_Id': 'hidden field', 'Taluka': 'hidden field', 'DIVISION': 'hidden field', 'Remark': 'hidden field', 'CIRCLE': 'hidden field', 'Village_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM': 'hidden field', 'S_Name': 'hidden field', 'VILL_TYPE': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'District': 'hidden field', 'RANGE': 'hidden field', });
lyr_Contour5MeterInterval_19.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - always visible', });
lyr_Basins_20.set('fieldLabels', {'PolygonId': 'hidden field', 'Area': 'hidden field', 'Subbasin': 'hidden field', 'strmOrder': 'hidden field', });
lyr_Streams_21.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'inline label - always visible', 'Length': 'inline label - always visible', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', 'BasinNo': 'hidden field', });
lyr_Village_Kalyanpar_22.set('fieldLabels', {'District': 'hidden field', 'Taluka': 'hidden field', 'Village': 'inline label - always visible', 'Dist_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'hidden field', 'S_Name': 'hidden field', 'Remark': 'hidden field', 'GUJ_NAM': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'Popu_2001': 'hidden field', 'Status': 'hidden field', 'BEAT': 'hidden field', 'ROUND': 'hidden field', 'RANGE': 'hidden field', 'DIVISION': 'hidden field', 'CIRCLE': 'hidden field', 'VILL_TYPE': 'hidden field', 'FOREST_AR': 'hidden field', });
lyr_2KmBuffer_23.set('fieldLabels', {'Status': 'hidden field', 'Popu_2001': 'hidden field', 'Village': 'hidden field', 'ROUND': 'hidden field', 'BEAT': 'hidden field', 'Dist_Id': 'hidden field', 'Taluka': 'hidden field', 'DIVISION': 'hidden field', 'Remark': 'hidden field', 'CIRCLE': 'hidden field', 'Village_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM': 'hidden field', 'S_Name': 'hidden field', 'VILL_TYPE': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'District': 'hidden field', 'RANGE': 'hidden field', });
lyr_Contour5MeterInterval_24.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - always visible', 'length': 'hidden field', });
lyr_Basins_25.set('fieldLabels', {'PolygonId': 'hidden field', 'Area': 'hidden field', 'Subbasin': 'hidden field', });
lyr_Streams_26.set('fieldLabels', {'LINKNO': 'hidden field', 'DSLINKNO': 'hidden field', 'USLINKNO1': 'hidden field', 'USLINKNO2': 'hidden field', 'DSNODEID': 'hidden field', 'strmOrder': 'inline label - always visible', 'Length': 'inline label - always visible', 'Magnitude': 'hidden field', 'DSContArea': 'hidden field', 'strmDrop': 'hidden field', 'Slope': 'hidden field', 'StraightL': 'hidden field', 'USContArea': 'hidden field', 'WSNO': 'hidden field', 'DOUTEND': 'hidden field', 'DOUTSTART': 'hidden field', 'DOUTMID': 'hidden field', 'BasinNo': 'hidden field', });
lyr_Village_Anandsar_27.set('fieldLabels', {'District': 'hidden field', 'Taluka': 'hidden field', 'Village': 'inline label - always visible', 'Dist_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'hidden field', 'S_Name': 'hidden field', 'Remark': 'hidden field', 'GUJ_NAM': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'Popu_2001': 'hidden field', 'Status': 'hidden field', 'BEAT': 'hidden field', 'ROUND': 'hidden field', 'RANGE': 'hidden field', 'DIVISION': 'hidden field', 'CIRCLE': 'hidden field', 'VILL_TYPE': 'hidden field', 'FOREST_AR': 'hidden field', });
lyr_Padatar_Jamin_33.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_Gauchar_34.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_Plots_35.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_Nursery_36.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_River_37.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_Dem_38.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_Talav_39.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_Forest_40.set('fieldLabels', {'District': 'hidden field', 'Taluka': 'hidden field', 'Village': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'hidden field', 'Sno': 'hidden field', 'Name': 'hidden field', 'Check': 'hidden field', 'F_SNO': 'hidden field', 'F_TYPE': 'hidden field', 'SECTION': 'hidden field', 'FG_AREA_Ha': 'hidden field', 'REMARKS': 'hidden field', 'BEAT': 'hidden field', 'ROUND': 'hidden field', 'RANGE': 'hidden field', 'DIVISION': 'inline label - visible with data', 'CATEGORY': 'hidden field', 'GN_NO': 'hidden field', 'GN_DATE': 'hidden field', 'COMPARTMEN': 'hidden field', 'SANC_AR_Ha': 'hidden field', });
lyr_Waterbodies_41.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'inline label - visible with data', 'name': 'hidden field', });
lyr_Canals_42.set('fieldLabels', {'Layer': 'hidden field', 'Categories': 'hidden field', 'Feature_Co': 'hidden field', 'Validation': 'hidden field', 'Year_Updat': 'hidden field', 'Projtn_Dtm': 'hidden field', 'Cont_Offcr': 'hidden field', 'Cont_No': 'hidden field', 'Scale_mapi': 'hidden field', 'Data_Sour': 'hidden field', 'Proj_code': 'hidden field', 'Remarks': 'hidden field', });
lyr_Railway_43.set('fieldLabels', {'FNODE_': 'hidden field', 'TNODE_': 'hidden field', 'LPOLY_': 'hidden field', 'RPOLY_': 'hidden field', 'LENGTH': 'hidden field', 'RAIL_SWA_T': 'hidden field', 'RAIL_SWA_1': 'hidden field', 'FNODE1': 'hidden field', 'TNODE1': 'hidden field', 'LPOLY1': 'hidden field', 'RPOLY1': 'hidden field', 'RAIL_AOI_': 'hidden field', 'RAIL_AOI_I': 'hidden field', 'RL_CODE': 'hidden field', 'RAIL_TYPE': 'hidden field', 'RAIL_DET': 'hidden field', 'ID': 'hidden field', 'Google_Upd': 'hidden field', });
lyr_InfrastrcutureRoads_44.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'hidden field', 'ref': 'hidden field', 'oneway': 'hidden field', 'maxspeed': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', });
lyr_InfrastrcutureRoads_44.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});