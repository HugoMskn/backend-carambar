const app = require('./app');
const { sequelize } = require('./models');
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`🚀 API running on http://localhost:${PORT}`);
});