import manifest from "../../../dojo/dojo-starter/manifests/dev/deployment/manifest.json" assert { type: "json" };

import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
    manifest,
});
