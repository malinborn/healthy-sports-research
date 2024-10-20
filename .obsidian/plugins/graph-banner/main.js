/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => GraphBannerPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var GraphBannerPlugin = class extends import_obsidian.Plugin {
  async onload() {
    this.registerEvent(
      this.app.workspace.on("file-open", async (file) => {
        var _a, _b;
        if (!file)
          return;
        const fileView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (!fileView || fileView.file !== file)
          return;
        let localGraphView = (_a = this.app.workspace.getLeavesOfType("localgraph").at(0)) == null ? void 0 : _a.view;
        if (!localGraphView) {
          await this.app.commands.executeCommandById("graph:open-local");
          await new Promise((resolve) => setTimeout(resolve, 200));
          localGraphView = (_b = this.app.workspace.getLeavesOfType("localgraph").at(0)) == null ? void 0 : _b.view;
          if (!localGraphView)
            return;
        }
        for (let i = 0; localGraphView.getState().file !== file.path; i++) {
          await new Promise((resolve) => setTimeout(resolve, 500));
          if (i === 10) {
            console.error("localgraph not found");
            break;
          }
        }
        const noteHeader = fileView.containerEl.querySelector(".inline-title");
        const graphNode = localGraphView.containerEl.querySelector(".view-content");
        if (!(noteHeader == null ? void 0 : noteHeader.parentElement) || !(noteHeader == null ? void 0 : noteHeader.nextSibling) || !graphNode) {
          return;
        }
        noteHeader.parentElement.insertBefore(
          graphNode,
          noteHeader.nextSibling
        );
      })
    );
    this.registerEvent(
      this.app.workspace.on("layout-change", async () => {
        var _a;
        const localGraphView = (_a = this.app.workspace.getLeavesOfType("localgraph").at(0)) == null ? void 0 : _a.view;
        if (!localGraphView)
          return;
        const fileView = this.app.workspace.getLeavesOfType("markdown");
        if (!fileView || fileView.length === 0) {
          localGraphView.leaf.detach();
          return;
        }
        const graphTab = localGraphView.containerEl.closest(".workspace-tabs");
        if (graphTab) {
          graphTab.style.display = "none";
        }
      })
    );
  }
};
