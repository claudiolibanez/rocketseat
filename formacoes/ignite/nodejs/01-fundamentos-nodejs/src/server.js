// CommonJS => require
// ESModules => import/export

import http from 'node:http'

import { json } from './middlewares/json.js'
import { extractQueryParams } from './utils/extract-query-params.js'
import { routes } from './routes.js'

// - Criar usuários
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//   - Método HTTP
//   - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// GET /users => Buscando usuários do back-end
// POST /users => Criar um usuário no back-end

// Stateful - Onde os dados da aplicação são armazenados em memória
// Stateless

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/Resposta) => Metadados

// HTTP Status Code

// UUID => Unique Universal ID

// Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios
// Route Parameters: Indentificação de recurso
// Request Parameters: Envio de informação de um formulário (HTTPs)

// http://localhost:3333/users?userId=1&name=Claudio

// GET http://localhost:3333/users/1
// DELETE http://localhost:3333/users/1

// POST http://localhost:3333/users

// Edição e remoção

const server = http.createServer(async (request, response) => {
  const { method, url } = request

  await json(request, response)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if (route) {
    const routeParams = request.url.match(route.path)

    const { query, ...params } = routeParams.groups

    request.params = params
    request.query = query ? extractQueryParams(query) : {}

    return route.handler(request, response)
  }

  return response
    .writeHead(404)
    .end()
})

server.listen(3333)