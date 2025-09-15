import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,        
  duration: '30s'
};

export default function () {
  const token = __ENV.API_TOKEN || 'coloque_seu_token_aqui';

  const url = 'https://google.com';
  
  const payload = JSON.stringify({
    sku: 'ABC-123',
    quantidade: 2,
    observacao: 'pedido via k6'
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  };

  // Faz a chamada POST
  const res = http.post(url, payload, params);

  // Validações básicas
  check(res, {
    'status é 200': (r) => r.status === 200  
  });

  sleep(1);
}
