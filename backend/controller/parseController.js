import { extractFile } from "../utils/extractFile.js";
import { parseResumeAI } from "../services/aiService.js";

export const parseResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No resume file uploaded" });
    }
    console.log("Controller reached");
    const resumeText = await extractFile(req.file);
    console.log(resumeText);
    const aiParsed = await parseResumeAI(resumeText);

    return res.status(200).json(aiParsed);
  } catch (error) {
    return res.status(500).json({ error: "Failed to parse resume" });
  }
};
