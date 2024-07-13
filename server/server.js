import express, { json, urlencoded } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

const uri = "mongodb+srv://nshimiyesca:TZMUEXcywIhNNTTG@pascal.atickhp.mongodb.net/?retryWrites=true&w=majority&appName=pascal";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: true,
  tlsAllowInvalidCertificates: true, // Utilisez ceci uniquement pour le développement
});

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("pascal"); // Remplacez par le nom de votre base de données
    const commentsCollection = db.collection("comments");

    // Route pour récupérer tous les commentaires
    app.get("/comments", async (req, res) => {
      try {
        const comments = await commentsCollection.find().toArray();
        res.status(200).json(comments);
      } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération des commentaires" });
      }
    });

    // Route pour ajouter un commentaire
    app.post("/comments", async (req, res) => {
      try {
        const newComment = req.body;
        console.log(newComment);
        const result = await commentsCollection.insertOne(newComment);
        res.status(201).json(result.ops[0]);
      } catch (error) {
        res.status(500).json({ error: "Erreur lors de l'ajout du commentaire" });
      }
    });

    // Route pour supprimer un commentaire
    app.delete("/comments/:id", async (req, res) => {
      try {
        const commentId = new ObjectId(req.params.id);
        const result = await commentsCollection.deleteOne({ _id: commentId });
        if (result.deletedCount === 1) {
          res.status(200).json({ message: "Commentaire supprimé avec succès" });
        } else {
          res.status(404).json({ error: "Commentaire non trouvé" });
        }
      } catch (error) {
        res.status(500).json({ error: "Erreur lors de la suppression du commentaire" });
      }
    });

    // Route pour modifier un commentaire
    app.put("/comments/:id", async (req, res) => {
      try {
        const commentId = new ObjectId(req.params.id);
        const updatedComment = req.body;
        const result = await commentsCollection.updateOne(
          { _id: commentId },
          { $set: updatedComment }
        );
        if (result.matchedCount === 1) {
          res.status(200).json({ message: "Commentaire modifié avec succès" });
        } else {
          res.status(404).json({ error: "Commentaire non trouvé" });
        }
      } catch (error) {
        res.status(500).json({ error: "Erreur lors de la modification du commentaire" });
      }
    });

    // Démarrage du serveur
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });

  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

startServer();
