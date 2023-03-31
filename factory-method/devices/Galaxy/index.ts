import GalaxyS23 from "./GalaxyS23";
import GalaxyS23Plus from "./GalaxyS23Plus";
import GalaxyS23Pro from "./GalaxyS23Pro";

export default {
    [GalaxyS23.name]: new GalaxyS23(),
    [GalaxyS23Plus.name]: new GalaxyS23Plus(),
    [GalaxyS23Pro.name]: new GalaxyS23Pro()
};