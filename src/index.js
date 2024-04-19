import { initEchartsTree } from "./utils/treeRender.js";
import RBTree from "../libs/RBTree";

const rbTree = new RBTree();

const updater = initEchartsTree({});

// 获取输入框
const insertInput = document.getElementById("insert_input");
const deleteInput = document.getElementById("delete_input");
// 获取按钮
const insertButton = document.getElementById("insert_button");
const deleteButton = document.getElementById("delete_button");
const clrButton = document.getElementById("clr_button");
// 绑定按钮事件
insertButton.addEventListener("click", function () {
  if (!insertInput.value) {
    alert("请输入插入节点key");
  } else {
    rbTree.insert(insertInput.value);
    updater(rbTree.getEchartsData());
  }
});

deleteButton.addEventListener("click", function () {
  if (!deleteInput.value) {
    alert("请输入删除节点key");
  } else {
    if (undefined === rbTree.search(deleteInput.value)) {
      alert(`节点key:${deleteInput.value} 不存在!`);
    } else {
      rbTree.delete(deleteInput.value);
      updater(rbTree.getEchartsData());
    }
  }
});

clrButton.addEventListener("click", function () {
  rbTree.clear();
  updater(rbTree.getEchartsData());
});
