import app from './infra/express';
import { port } from './utils/environment';

app.listen(port, () => { console.log(`server running at port ${port}`); });