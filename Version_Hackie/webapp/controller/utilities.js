sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForPage7: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"horas_contratadas": 0,
				"descripcion": "",
				"plataforma_atacar": "",
				"fecha_inicio": null,
				"fecha_fin": new Date(Date.UTC(2021, 5, 3)),
				"costo": 0,
				"estado": "",
				"___FK_275fd637b8d4d7d8157b121a_00038": "",
				"___FK_275fd637b8d4d7d8157b121a_00040": ""
			};
		},
		getDefaultValuesForPage6: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"tipo": "",
				"nombre": "",
				"descripcion": "",
				"costo": 0,
				"horas_empleadas": 0,
				"fecha": new Date(Date.UTC(2021, 5, 3)),
				"___FK_275fd637b8d4d7d8157b121a_00042": "",
				"___FK_275fd637b8d4d7d8157b121a_00048": ""
			};
		}
	};
});
