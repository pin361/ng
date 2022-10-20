import { Subscriber } from "./subscriber";

export class GroupView extends Subscriber {
  constructor(controller) {
    super();
    this.controller = controller;
    this.group = document.getElementById("group");
    this.group.selectedIndex = controller.model.selectedIndex;
    this.group.addEventListener("click", controller);
    this.controller.model.addSubscriber(this);
  }

  prepareView() {
    const container = document.getElementById("container");
    const radioGroup = document.createElement('input', )
  }

  update(model) {
    this.group.selectedIndex = model.selectedIndex;
  }
}
