// Importando a biblioteca de filas do Node.js
const Queue = require('queue-fifo');

// Definindo a função BFS
function bfs(graph, root) {
    // Criando uma fila vazia e adicionando o nó raiz a ela
    let visited = new Set();
    let queue = new Queue();
    queue.enqueue(root);

    while (!queue.isEmpty()) {
        // Removendo um nó da fila
        let vertex = queue.dequeue();

        // Se o nó não foi visitado
        if (!visited.has(vertex)) {
            // Marcar o nó como visitado
            visited.add(vertex);

            // Adicionar todos os vizinhos do nó à fila
            graph[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    queue.enqueue(neighbor);
                }
            });
        }
    }

    // Retornar os nós visitados
    return Array.from(visited);
}

// Definindo o grafo
let graph = {
  'A' : ['B','C'],
  'B' : ['D', 'E'],
  'C' : ['F'],
  'D' : [],
  'E' : ['F'],
  'F' : []
};

// Executando o algoritmo BFS no grafo a partir do nó 'A'
let visited = bfs(graph, 'A');

// Imprimindo os nós visitados
console.log(visited);