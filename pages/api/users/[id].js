import { apiHandler } from "helpers/api";
import { usersRepo, omit } from "helpers/api";

export default apiHandler({
  get: getById,
});

function getById(req, res) {
  const user = usersRepo.getById(req.query.id);

  if (!user) throw "User Not Found";

  return res.status(200).json(omit(user, "hash"));
}
