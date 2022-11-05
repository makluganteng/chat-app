import axios from 'axios'



export default async (req, res) => {
    if (req.method === 'POST') {
        const username = req.body.username;
        const password = req.body.password;
      try {
        const createResponse = await axios.post(
          'http://localhost:8080/register',
          {
            username: username,
            password: password,
          },
        )
  
        if (createResponse && createResponse.data) {
          res.statusCode = 200
          res.json({ ...createResponse.data })
        } else {
          res.statusCode = 500
          res.json({ error: 'Something went wrong' })
        }
      } catch (error) {
        res.statusCode = 500
  
        // Handles Invalid API key error
        if (error.response.status === 403) {
          res.statusCode = 403
        }
        res.json({ error })
      }
    }
  }