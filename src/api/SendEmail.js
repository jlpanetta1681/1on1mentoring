// api/sendEmail.js
const axios = require('axios');

const sendEmail = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const response = await axios.post('https://api.brevo.com/v3/contacts', {
        email,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': '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',
        },
      });

      if (response.status === 200) {
        res.status(200).json({ message: 'Email sent successfully' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email', details: error });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default sendEmail;
