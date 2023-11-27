import axios from "axios";

const handler = async (req, res) => {
  try {
    const { muscleGroup, amount, intensity } = req.body;

    // Include the specific prompt
    const prompt = `Generate a workout plan focused on ${muscleGroup} for a user who wants to train ${amount} a week with a focus on ${intensity} training.`;

    // Call the OpenAI API to generate a workout plan
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt,
        max_tokens: 300, // Adjust as needed
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
      },
    );

    // Extract the generated workout plan from the API response
    const workoutPlan = response.data.choices[0].text;

    // Return the workout plan
    res.status(200).json({ workoutPlan });
  } catch (error) {
    console.error("Error generating workout plan:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { handler as POST };
