const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile)
      cb(null, profile)
    }
  )
)
