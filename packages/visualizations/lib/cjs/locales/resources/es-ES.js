"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.esES = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'No se pasó ningún elemento secundario al componente de consulta.',
    'Query component received both dashboard and query props': 'El componente de consulta recibió propiedades de dashboard y de consulta.'
  },
  QueryError: {
    Error: 'Error'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Actualmente no se admiten las medidas del tipo "fecha".',
    'No chart found for type "{{type}}"': 'No se encontró ningún gráfico para el tipo "{{type}}"'
  }
};
var esES = {
  locale: 'es-ES',
  resources: {
    'es-ES': (0, _merge["default"])({}, resources, _visualizationsAdapters.esES.resources['es-ES'], _visualizationsTable.esES.resources['es-ES'], _visualizationsVisx.esES.resources['es-ES'])
  }
};
exports.esES = esES;
//# sourceMappingURL=es-ES.js.map