import { Hono } from 'hono';

const app = new Hono();

function Hello() {
  return <h1>Hello, World!</h1>
}

app.get('/', (c) => {
  return c.render(<Hello />)
})

export default app;
