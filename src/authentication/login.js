import { userconst } from '../models/users.js'
import { passComparer, tokengenerating, passHashing } from '../utils/index.js'
export const login = async (req, res) => {
  try {
    // console.log(req.body.email);
    let user = await userconst.findOne({ email: req.body.email })
    if (user) {
      let istruepassword = await passComparer(req.body.password, user.password)
      if (istruepassword) {
        let token = tokengenerating({
          user: user,
          _id: user._id,
          email: user.email
        })
        res.status(200).json({
          message: 'user logged in succeful',
          access_token: token,
          user: user
        })
      } else if (!istruepassword) {
        return res.status(401).json({ message: 'Wrong password' })
      }
    } else if (!user) {
      return res.status(404).json({ message: 'user not found' })
    }
  } catch (err) {
    return res.status(409).json({ error: err.message })
  }
}
