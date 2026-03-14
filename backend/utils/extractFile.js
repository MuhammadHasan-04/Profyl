import { PDFParse } from "pdf-parse";
import mammoth from "mammoth";

async function extractFile(file) {
  console.log(file.mimetype);

  // PDF extraction
  if (file.mimetype === "application/pdf") {
    // console.log("Hello 1");

    const parser = new PDFParse({
      data: file.buffer,
    });

    const result = await parser.getText();
    // console.log(result);

    await parser.destroy();

    // console.log("Hello 2");

    return result.text;
  }

  // DOCX extraction
  if (file.mimetype.includes("word")) {
    const result = await mammoth.extractRawText({
      buffer: file.buffer,
    });

    return result.value;
  }

  throw new Error("Unsupported file type");
}

export { extractFile };
