import { User } from '../models/index.js'

export const isAdmin = async (req, res, next, userRole) => {
  const { userId } = req

  let user = await User.findById(userId)
  if (!user) {
    return res.status(401).json({ message: 'user not found' })
  }
  let isadmin = user.role == userRole
  if (!isadmin) {
    return res
      .status(401)
      .json({
        message: `action is only reseverd for ${userRole} while ${user} role is {user.role}`
      })
  }

  next()
}
