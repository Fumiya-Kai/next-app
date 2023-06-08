import apidata from '../../../components/data'

export default function handler(req, res) {
  const {
    query: {params: [id, item]}
  } = req

  if (apidata[id] == null || apidata[id][item] == null) {
    res.status(400).json({message: 'params were wrong'})
  }
  const result = {id: id, item: apidata[id][item]}
  res.status(200).json(result)
}
