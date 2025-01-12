import { createClient } from "@sanity/client";

// Setup Sanity client
const client = createClient({
  projectId: "i33u2wer",  // Use your actual project ID here
  dataset: "production",  // The dataset you're using in Sanity
  useCdn: false,  // If you're using the CDN, set this to true in production
  token: "skV43A8v8fEbjh0gWCXGx0oLGGXpMaItMkYii64o81X77SQ4wioIOQhCG4vKIYgTNgHe5dBNp8U8F7x9mmVCJhMFIK9KS4yTSVl0LkcmxVBCUiaaT3raVk1lpxQ1NGYX7W12q1yYiyVzlSPDx6ei29dqsJbQLJxMYGdndZeG6IrXDeG3byeY", // Replace with a real token
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { postId } = req.query;

    // Check if postId is present in the query
    if (!postId) {
      return res.status(400).json({ message: "postId is required" });
    }

    try {
      // Fetch comments from Sanity
      const comments = await client.fetch(
        `*[_type == "comment" && post._ref == $postId]`,
        { postId }
      );

      // If comments are found, send them as a response
      res.status(200).json(comments);
    } catch (error) {
      // Log error for debugging
      console.error("Error fetching comments:", error);
      // Send error response if something goes wrong
      res.status(500).json({ message: "Failed to fetch comments", error: error.message });
    }
  } else if (req.method === "POST") {
    // Handle POST request for adding new comments
    const { name, email, message, postId } = req.body;

    try {
      const newComment = await client.create({
        _type: "comment",
        name,
        email,
        message,
        post: { _type: "reference", _ref: postId },
      });

      // Respond with the newly created comment
      res.status(200).json({ message: "Comment submitted", comment: newComment });
    } catch (error) {
      console.error("Error submitting comment:", error);
      res.status(500).json({ message: "Failed to submit comment", error: error.message });
    }
  } else {
    // If the method is neither GET nor POST, return 405 Method Not Allowed
    res.status(405).json({ message: "Method not allowed" });
  }
}
