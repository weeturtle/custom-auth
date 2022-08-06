export const ironOptions = {
  cookieName: "user",
  password: "a-RHg&7!loyAm0vNg4sIf#zaJof1K%Sn",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};