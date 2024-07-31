import app from "./app";
import { syncDatabase } from "./config/dbSync";

const PORT = process.env.PORT || 3000;

// Sync database before starting the server
syncDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
