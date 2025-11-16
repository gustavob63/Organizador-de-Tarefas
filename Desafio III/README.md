    # Projeto integrado 
    Esta pasta contém:
    - /extension  -> Minhs extensão (conforme o ZIP que você enviou)
    - /frontend   -> PWA estático (integra com backend)
    - /backend    -> API Flask simples
    - docker-compose.yml -> orquestra frontend + backend
    - /tests      -> exemplos de testes (Playwright + Jest)
    - .github/workflows/ci.yml -> exemplo simples de CI

Instruções rápidas:
1. docker compose up --build
2. Frontend: http://localhost:8080
3. Backend: http://localhost:5000/api/hello
