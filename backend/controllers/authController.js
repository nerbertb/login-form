export const loginController = (req, res) => {
  const { email, password } = req.body;

  if (email !== 'admin@test.com' || password !== '1234') {
    return res.status(400).json({
      error: {
        message: 'Invalid Credentials',
      },
    });
  }

  res.status(200).json({
    success: {
      message: 'Login Successfully',
    },
  });
};
