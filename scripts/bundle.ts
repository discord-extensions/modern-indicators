import asar from "@electron/asar";
import { readFileSync } from "fs";
import { Plugin } from "replugged/dist/types/addon";

const manifest = JSON.parse(readFileSync("manifest.json", "utf-8")) as Plugin;
const outputName = `${manifest.id}.asar`;

asar.createPackage("dist", outputName);
