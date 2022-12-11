const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openAI = new OpenAIApi(configuration);

async function generateImage(req, res) {
  const { message } = req.body;

  try {
    const response = await openAI.createImage({
      prompt: message,
      n: 1,
      size: '512x512'
    });

    const imageUrl = response.data.data[0].url;

    res.status(200).json({
      success: true,
      data: imageUrl
    });
  } catch(error) {
    res.status(500).json({
      success: false,
      error: 'Image could not be generated'
    });
  }
}

module.exports = { generateImage }