export class GroupController {
  constructor(model) {
    this.model = model;
  }

  handleEvent(e) {
    e.stopPropagation();
    switch (e.type) {
      case "click":
        this.clickHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  }

  get groupItems() {
    return this.model.items;
  }

  clickHandler(target) {
    debugger;
    this.model.selectedIndex = 1;
    this.model.notify(this.model);
  }
}
