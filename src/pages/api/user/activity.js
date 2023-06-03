// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ user: { data: [100, 450, 350, 150, 120] }, guest: { data: [150, 500, 200, 250, 300] } });
}
