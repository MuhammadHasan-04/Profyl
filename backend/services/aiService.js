import dotenv from "dotenv";
dotenv.config();

import { OpenRouter } from "@openrouter/sdk";

const openRouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API,
});

async function parseResumeAI({ resumeText }) {
  try {
    const prompt = `
You are an expert resume parser.

Extract structured JSON from the following resume text.

The JSON must exactly match this structure:

{
  "info": {
    "fullName": "",
    "title": "",
    "email": "",
    "phone": "",
    "location": "",
    "summary": ""
  },
  "experience": [
    {
      "title": "",
      "company": "",
      "dates": "",
      "description": ""
    }
  ],
  "education": [
    {
      "degree": "",
      "school": "",
      "year": "",
      "location": ""
    }
  ],
  "skills": {
    "technical": "",
    "tools": ""
  },
  "projects": [
    {
      "title": "",
      "tech": "",
      "link": "",
      "description": ""
    }
  ]
}

Resume text:
${resumeText}

Return ONLY JSON. Do NOT add any explanations.
`;

    const stream = await openRouter.chat.send({
      chatGenerationParams: {
        model: "liquid/lfm-2.5-1.2b-thinking:free",
        messages: [{ role: "user", content: prompt }],
        stream: true,
      },
    });

    let fullContent = "";

    console.log("Hello from liquid");

    for await (const chunk of stream) {
      const content = chunk.choices?.[0]?.delta?.content;

      if (content) {
        process.stdout.write(content);
        fullContent += content;
      }

      if (chunk.usage) {
        console.log("\nUsage:", chunk.usage);
      }
    }

    console.log("\n\nContent generated successfully!\n");

    // Remove markdown code fences if AI returns ```json
    fullContent = fullContent.replace(/```json|```/g, "").trim();
    console.log(fullContent);
    // Parse JSON safely
    const parsedJSON = JSON.parse(fullContent);

    return parsedJSON;
  } catch (error) {
    console.error("AI Resume Parsing Error:", error.message);

    return {
      info: {
        fullName: "",
        title: "",
        email: "",
        phone: "",
        location: "",
        summary: "",
      },
      experience: [{ title: "", company: "", dates: "", description: "" }],
      education: [{ degree: "", school: "", year: "", location: "" }],
      skills: {
        technical: "",
        tools: "",
      },
      projects: [{ title: "", tech: "", link: "", description: "" }],
    };
  }
}

export { parseResumeAI };
