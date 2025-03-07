/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import merge from 'lodash/merge'
import type { I18nState } from '../../utils'
import { ptBR as visAdapterLocales } from '@looker/visualizations-adapters'
import { ptBR as visTableLocales } from '@looker/visualizations-table'
import { ptBR as visVisxLocales } from '@looker/visualizations-visx'

const resources = {
  Query: {
    'No children passed to Query component':
      'Nenhum dependente passou para componente de consulta',
    'Query component received both dashboard and query props':
      'O componente de consulta recebeu propriedades de dashboard e consulta',
  },
  QueryError: {
    Error: 'Erro',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'No momento, medidas do tipo “data” não são compatíveis',
    'No chart found for type "{{type}}"':
      'Não foram encontrados gráficos para o tipo “{{type}}”',
  },
}

export const ptBR: I18nState = {
  locale: 'pt-BR',
  resources: {
    'pt-BR': merge(
      {},
      resources,
      visAdapterLocales.resources['pt-BR'],
      visTableLocales.resources['pt-BR'],
      visVisxLocales.resources['pt-BR']
    ),
  },
}
