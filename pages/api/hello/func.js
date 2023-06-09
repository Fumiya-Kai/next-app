import func from '../../components/func'

export default function handler(req, res) {
  res.status(200).json(func)
}