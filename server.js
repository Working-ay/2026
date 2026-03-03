import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// Allow your React app to communicate with this server
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Endpoint to save TOS/Privacy to Database
app.post('/api/user/update-tos', async (req, res) => {
  const { email, agreedTOS, agreedPrivacy } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: "No email provided" });
  }

  try {
    // UPSERT: Updates the user if they exist, or creates them if they are new!
    const user = await prisma.user.upsert({
      where: { email: email },
      update: { agreedTOS: agreedTOS, agreedPrivacy: agreedPrivacy },
      create: { email: email, agreedTOS: agreedTOS, agreedPrivacy: agreedPrivacy, name: "Client" }
    });
    
    console.log(`✅ Saved data for: ${email}`);
    res.json({ success: true, user });
    
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ error: "Database error" });
  }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`\n=========================================`);
  console.log(`🚀 BACKEND SERVER IS RUNNING ON PORT ${PORT}`);
  console.log(`💾 Connected to Prisma SQLite Database`);
  console.log(`=========================================\n`);
});