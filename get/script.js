import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,        
  duration: '30s'
};

export default function () {
  const token = __ENV.API_TOKEN || 'coloque_seu_token_aqui';

  const url = 'https://google.com';

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  };

  const res = http.get(url, params);

  // Validações básicas
  check(res, {
    'status é 200': (r) => r.status === 200  
  });

  sleep(1);
}
