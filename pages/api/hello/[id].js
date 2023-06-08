import apidata from '../../../components/data'

export default function handler(req, res) {
  let {
    query: {id}
  } = req

  if(id == null) { id = 0 }
  res.status(200).json(apidata[id])
}
