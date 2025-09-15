# Teste com o k6

Para realizar testes com o k6 utilize os comandos abaixo. Lembrando que é necessário ter o podman instalado. 

## Parâmetro

O parâmetro --vus indica o número de virtual users simultâneos enviando requisições. E o parâmetro --duration é o tempo que o envio dessas requisições vai ocorrer.

## Requisições GET

```
podman run --rm -it -v $(pwd):/src:Z -w /src grafana/k6 run --vus 5 --duration 3s get/script.js
```

## Requisições POST

```
podman run --rm -it -v $(pwd):/src:Z -w /src grafana/k6 run --vus 5 --duration 3s post/script.js
```

## Debug

Caso queira debugar, adicione a flag "--http-debug=full".
