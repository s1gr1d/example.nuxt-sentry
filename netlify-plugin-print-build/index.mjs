import * as path from "node:path";
import * as fs from "node:fs";

export const onPostBuild = async ({ constants, inputs, utils }) => {
  console.log("onPostBuild Plugin");

  console.log("FUNCTIONS_SRC", constants.FUNCTIONS_SRC);
  console.log("FUNCTIONS_DIST", constants.FUNCTIONS_DIST);
};

async function listFiles(dir, level = 0) {
  const indent = " ".repeat(level * 2);
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      console.log(`${indent}📁 ${item.name}`);
      await listFiles(fullPath, level + 1);
    } else {
      console.log(`${indent}📄 ${item.name}`);
    }
  }
}
