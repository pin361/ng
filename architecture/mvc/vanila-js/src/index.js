import { GroupModel } from "../models/group.model";
import { GroupController } from "../controllers/group.controller";
import { GroupView } from "../views/group.view";

function main() {
  var model = new GroupModel();
  var controller = new GroupController(model);
  var view = new GroupView(controller);
}

main();
