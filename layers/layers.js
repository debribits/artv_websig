ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([682630.854931, 7185092.020681, 687026.748269, 7188887.204019]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LimitedoBairro_1 = new ol.format.GeoJSON();
var features_LimitedoBairro_1 = format_LimitedoBairro_1.readFeatures(json_LimitedoBairro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_LimitedoBairro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedoBairro_1.addFeatures(features_LimitedoBairro_1);
var lyr_LimitedoBairro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedoBairro_1, 
                style: style_LimitedoBairro_1,
                popuplayertitle: "Limite do Bairro",
                interactive: true,
                title: '<img src="styles/legend/LimitedoBairro_1.png" /> Limite do Bairro'
            });
var format_UnidadedeSaude_2 = new ol.format.GeoJSON();
var features_UnidadedeSaude_2 = format_UnidadedeSaude_2.readFeatures(json_UnidadedeSaude_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_UnidadedeSaude_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadedeSaude_2.addFeatures(features_UnidadedeSaude_2);
var lyr_UnidadedeSaude_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadedeSaude_2, 
                style: style_UnidadedeSaude_2,
                popuplayertitle: "Unidade de Saude",
                interactive: true,
                title: '<img src="styles/legend/UnidadedeSaude_2.png" /> Unidade de Saude'
            });
var format_AreaUrbanaIsolada_3 = new ol.format.GeoJSON();
var features_AreaUrbanaIsolada_3 = format_AreaUrbanaIsolada_3.readFeatures(json_AreaUrbanaIsolada_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AreaUrbanaIsolada_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaUrbanaIsolada_3.addFeatures(features_AreaUrbanaIsolada_3);
var lyr_AreaUrbanaIsolada_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaUrbanaIsolada_3, 
                style: style_AreaUrbanaIsolada_3,
                popuplayertitle: "Area Urbana Isolada",
                interactive: true,
                title: '<img src="styles/legend/AreaUrbanaIsolada_3.png" /> Area Urbana Isolada'
            });
var format_IFPRCampusPinhais_4 = new ol.format.GeoJSON();
var features_IFPRCampusPinhais_4 = format_IFPRCampusPinhais_4.readFeatures(json_IFPRCampusPinhais_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_IFPRCampusPinhais_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IFPRCampusPinhais_4.addFeatures(features_IFPRCampusPinhais_4);
var lyr_IFPRCampusPinhais_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IFPRCampusPinhais_4, 
                style: style_IFPRCampusPinhais_4,
                popuplayertitle: "IFPR Campus Pinhais",
                interactive: true,
                title: '<img src="styles/legend/IFPRCampusPinhais_4.png" /> IFPR Campus Pinhais'
            });
var format_Supermercado_5 = new ol.format.GeoJSON();
var features_Supermercado_5 = format_Supermercado_5.readFeatures(json_Supermercado_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Supermercado_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermercado_5.addFeatures(features_Supermercado_5);
var lyr_Supermercado_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermercado_5, 
                style: style_Supermercado_5,
                popuplayertitle: "Supermercado",
                interactive: true,
    title: 'Supermercado<br />\
    <img src="styles/legend/Supermercado_5_0.png" /> 1<br />\
    <img src="styles/legend/Supermercado_5_1.png" /> 2<br />\
    <img src="styles/legend/Supermercado_5_2.png" /> 3<br />'
        });
var format_Rodovia_6 = new ol.format.GeoJSON();
var features_Rodovia_6 = format_Rodovia_6.readFeatures(json_Rodovia_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Rodovia_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rodovia_6.addFeatures(features_Rodovia_6);
var lyr_Rodovia_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rodovia_6, 
                style: style_Rodovia_6,
                popuplayertitle: "Rodovia",
                interactive: true,
                title: '<img src="styles/legend/Rodovia_6.png" /> Rodovia'
            });
var format_Hidrografia_7 = new ol.format.GeoJSON();
var features_Hidrografia_7 = format_Hidrografia_7.readFeatures(json_Hidrografia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Hidrografia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografia_7.addFeatures(features_Hidrografia_7);
var lyr_Hidrografia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrografia_7, 
                style: style_Hidrografia_7,
                popuplayertitle: "Hidrografia",
                interactive: true,
                title: '<img src="styles/legend/Hidrografia_7.png" /> Hidrografia'
            });
var format_Arruamento_8 = new ol.format.GeoJSON();
var features_Arruamento_8 = format_Arruamento_8.readFeatures(json_Arruamento_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Arruamento_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arruamento_8.addFeatures(features_Arruamento_8);
var lyr_Arruamento_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arruamento_8, 
                style: style_Arruamento_8,
                popuplayertitle: "Arruamento",
                interactive: true,
                title: '<img src="styles/legend/Arruamento_8.png" /> Arruamento'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LimitedoBairro_1.setVisible(true);lyr_UnidadedeSaude_2.setVisible(true);lyr_AreaUrbanaIsolada_3.setVisible(true);lyr_IFPRCampusPinhais_4.setVisible(true);lyr_Supermercado_5.setVisible(true);lyr_Rodovia_6.setVisible(true);lyr_Hidrografia_7.setVisible(true);lyr_Arruamento_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LimitedoBairro_1,lyr_UnidadedeSaude_2,lyr_AreaUrbanaIsolada_3,lyr_IFPRCampusPinhais_4,lyr_Supermercado_5,lyr_Rodovia_6,lyr_Hidrografia_7,lyr_Arruamento_8];
lyr_LimitedoBairro_1.set('fieldAliases', {'BAIRRO': 'BAIRRO', 'POPULA': 'POPULA', 'DENDEM': 'DENDEM', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_UnidadedeSaude_2.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'geometriaA': 'geometriaA', 'operaciona': 'operaciona', 'situacaoFi': 'situacaoFi', 'matCons': 'matCons', 'alturaApro': 'alturaApro', 'turistica': 'turistica', 'cultura': 'cultura', 'administra': 'administra', 'classeAtiv': 'classeAtiv', 'divisaoAti': 'divisaoAti', 'grupoAtivE': 'grupoAtivE', 'proprioAdm': 'proprioAdm', 'numeroSequ': 'numeroSequ', 'numeroMetr': 'numeroMetr', 'cep': 'cep', 'pais': 'pais', 'unidadeFed': 'unidadeFed', 'Municipio': 'Municipio', 'Bairro': 'Bairro', 'logradouro': 'logradouro', 'bloco': 'bloco', 'numeroPav': 'numeroPav', });
lyr_AreaUrbanaIsolada_3.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'geoetriaA': 'geoetriaA', 'Tipo_Assoc': 'Tipo_Assoc', });
lyr_IFPRCampusPinhais_4.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'geometriaA': 'geometriaA', 'operaciona': 'operaciona', 'sitacaoFis': 'sitacaoFis', 'matConst': 'matConst', 'AlturaApro': 'AlturaApro', 'turistica': 'turistica', 'curitiba': 'curitiba', 'administra': 'administra', 'classeAtiv': 'classeAtiv', 'divisaoAti': 'divisaoAti', 'grupoAtivE': 'grupoAtivE', 'proprioAdm': 'proprioAdm', 'numeroSequ': 'numeroSequ', 'numeroMetr': 'numeroMetr', 'cep': 'cep', 'pais': 'pais', 'unidadeFed': 'unidadeFed', 'municipio': 'municipio', 'bloco': 'bloco', 'numeroPavi': 'numeroPavi', 'logradouro': 'logradouro', 'bairro': 'bairro', });
lyr_Supermercado_5.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'GeometriaA': 'GeometriaA', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'matConstr': 'matConstr', 'alturaApr': 'alturaApr', 'turistica': 'turistica', 'cultura': 'cultura', 'tipoEdifCo': 'tipoEdifCo', 'finalidade': 'finalidade', });
lyr_Rodovia_6.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'geometriaA': 'geometriaA', 'jurisdicao': 'jurisdicao', 'administac': 'administac', 'concession': 'concession', 'revestimen': 'revestimen', 'operaciona': 'operaciona', 'situacaoFi': 'situacaoFi', 'candeitoDi': 'candeitoDi', 'nrPistas': 'nrPistas', 'nrFaixas': 'nrFaixas', 'trafego': 'trafego', 'tipoPavime': 'tipoPavime', 'tipoVia': 'tipoVia', 'sigla': 'sigla', 'codTrechoR': 'codTrechoR', 'limiteVelo': 'limiteVelo', 'trechoEmPe': 'trechoEmPe', 'acostament': 'acostament', });
lyr_Hidrografia_7.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'geometriaA': 'geometriaA', 'Tipo_Trech': 'Tipo_Trech', 'navegavel': 'navegavel', 'larguramed': 'larguramed', 'regime': 'regime', 'encoberto': 'encoberto', });
lyr_Arruamento_8.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'geometriaA': 'geometriaA', 'jurisdicao': 'jurisdicao', 'adm': 'adm', 'concession': 'concession', 'revestimen': 'revestimen', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'canteirodi': 'canteirodi', 'nrPistas': 'nrPistas', 'nrFaixas': 'nrFaixas', 'tipoPavime': 'tipoPavime', 'meioFio': 'meioFio', 'sargeta': 'sargeta', 'trafego': 'trafego', 'tipoVia': 'tipoVia', });
lyr_LimitedoBairro_1.set('fieldImages', {'BAIRRO': '', 'POPULA': '', 'DENDEM': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_UnidadedeSaude_2.set('fieldImages', {'id': '', 'nome': '', 'geometriaA': '', 'operaciona': '', 'situacaoFi': '', 'matCons': '', 'alturaApro': '', 'turistica': '', 'cultura': '', 'administra': '', 'classeAtiv': '', 'divisaoAti': '', 'grupoAtivE': '', 'proprioAdm': '', 'numeroSequ': '', 'numeroMetr': '', 'cep': '', 'pais': '', 'unidadeFed': '', 'Municipio': '', 'Bairro': '', 'logradouro': '', 'bloco': '', 'numeroPav': '', });
lyr_AreaUrbanaIsolada_3.set('fieldImages', {'id': '', 'nome': '', 'geoetriaA': '', 'Tipo_Assoc': '', });
lyr_IFPRCampusPinhais_4.set('fieldImages', {'id': '', 'nome': '', 'geometriaA': '', 'operaciona': '', 'sitacaoFis': '', 'matConst': '', 'AlturaApro': '', 'turistica': '', 'curitiba': '', 'administra': '', 'classeAtiv': '', 'divisaoAti': '', 'grupoAtivE': '', 'proprioAdm': '', 'numeroSequ': '', 'numeroMetr': '', 'cep': '', 'pais': '', 'unidadeFed': '', 'municipio': '', 'bloco': '', 'numeroPavi': '', 'logradouro': '', 'bairro': '', });
lyr_Supermercado_5.set('fieldImages', {'id': '', 'nome': '', 'GeometriaA': '', 'operaciona': '', 'situacaofi': '', 'matConstr': '', 'alturaApr': '', 'turistica': '', 'cultura': '', 'tipoEdifCo': '', 'finalidade': '', });
lyr_Rodovia_6.set('fieldImages', {'id': '', 'nome': '', 'geometriaA': '', 'jurisdicao': '', 'administac': '', 'concession': '', 'revestimen': '', 'operaciona': '', 'situacaoFi': '', 'candeitoDi': '', 'nrPistas': '', 'nrFaixas': '', 'trafego': '', 'tipoPavime': '', 'tipoVia': '', 'sigla': '', 'codTrechoR': '', 'limiteVelo': '', 'trechoEmPe': '', 'acostament': '', });
lyr_Hidrografia_7.set('fieldImages', {'id': '', 'nome': '', 'geometriaA': '', 'Tipo_Trech': '', 'navegavel': '', 'larguramed': '', 'regime': '', 'encoberto': '', });
lyr_Arruamento_8.set('fieldImages', {'id': '', 'nome': '', 'geometriaA': '', 'jurisdicao': '', 'adm': '', 'concession': '', 'revestimen': '', 'operaciona': '', 'situacaofi': '', 'canteirodi': '', 'nrPistas': '', 'nrFaixas': '', 'tipoPavime': '', 'meioFio': '', 'sargeta': '', 'trafego': '', 'tipoVia': '', });
lyr_LimitedoBairro_1.set('fieldLabels', {'BAIRRO': 'no label', 'POPULA': 'no label', 'DENDEM': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_UnidadedeSaude_2.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'geometriaA': 'no label', 'operaciona': 'no label', 'situacaoFi': 'no label', 'matCons': 'no label', 'alturaApro': 'no label', 'turistica': 'no label', 'cultura': 'no label', 'administra': 'no label', 'classeAtiv': 'no label', 'divisaoAti': 'no label', 'grupoAtivE': 'no label', 'proprioAdm': 'no label', 'numeroSequ': 'no label', 'numeroMetr': 'no label', 'cep': 'no label', 'pais': 'no label', 'unidadeFed': 'no label', 'Municipio': 'no label', 'Bairro': 'no label', 'logradouro': 'no label', 'bloco': 'no label', 'numeroPav': 'no label', });
lyr_AreaUrbanaIsolada_3.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'geoetriaA': 'no label', 'Tipo_Assoc': 'no label', });
lyr_IFPRCampusPinhais_4.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'geometriaA': 'no label', 'operaciona': 'no label', 'sitacaoFis': 'no label', 'matConst': 'no label', 'AlturaApro': 'no label', 'turistica': 'no label', 'curitiba': 'no label', 'administra': 'no label', 'classeAtiv': 'no label', 'divisaoAti': 'no label', 'grupoAtivE': 'no label', 'proprioAdm': 'no label', 'numeroSequ': 'no label', 'numeroMetr': 'no label', 'cep': 'no label', 'pais': 'no label', 'unidadeFed': 'no label', 'municipio': 'no label', 'bloco': 'no label', 'numeroPavi': 'no label', 'logradouro': 'no label', 'bairro': 'no label', });
lyr_Supermercado_5.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'GeometriaA': 'no label', 'operaciona': 'no label', 'situacaofi': 'no label', 'matConstr': 'no label', 'alturaApr': 'no label', 'turistica': 'no label', 'cultura': 'no label', 'tipoEdifCo': 'no label', 'finalidade': 'no label', });
lyr_Rodovia_6.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'geometriaA': 'no label', 'jurisdicao': 'no label', 'administac': 'no label', 'concession': 'no label', 'revestimen': 'no label', 'operaciona': 'no label', 'situacaoFi': 'no label', 'candeitoDi': 'no label', 'nrPistas': 'no label', 'nrFaixas': 'no label', 'trafego': 'no label', 'tipoPavime': 'no label', 'tipoVia': 'no label', 'sigla': 'no label', 'codTrechoR': 'no label', 'limiteVelo': 'no label', 'trechoEmPe': 'no label', 'acostament': 'no label', });
lyr_Hidrografia_7.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'geometriaA': 'no label', 'Tipo_Trech': 'no label', 'navegavel': 'no label', 'larguramed': 'no label', 'regime': 'no label', 'encoberto': 'no label', });
lyr_Arruamento_8.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'geometriaA': 'no label', 'jurisdicao': 'no label', 'adm': 'no label', 'concession': 'no label', 'revestimen': 'no label', 'operaciona': 'no label', 'situacaofi': 'no label', 'canteirodi': 'no label', 'nrPistas': 'no label', 'nrFaixas': 'no label', 'tipoPavime': 'no label', 'meioFio': 'no label', 'sargeta': 'no label', 'trafego': 'no label', 'tipoVia': 'no label', });
lyr_Arruamento_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});