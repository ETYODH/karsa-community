import express from 'express';

import contactRoutes from './src/routes/contact/contact.routes.js';
import KegiatanRoutes from './src/routes/kegiatan/kegiatan.routes.js';
import galleries from './src/routes/galleries/galleries.routes.js';

const app = express();

const PORT = 3001;

app.use(express.json());

// Route Contact
app.use('/api/v1/contact', contactRoutes);

// Route Kegiatan
app.use('/api/kegiatan', KegiatanRoutes);

// Route Galleries
app.use('/api/galleries', galleries);

app.get('/', (req, res) => {
  res.send('Karsa Community API');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});