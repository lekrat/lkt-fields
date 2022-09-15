import plugins from "suneditor/src/plugins";
import * as lang from "suneditor/src/lang";
import suneditor from "suneditor";
//@ts-ignore
import katex from "katex";
import {LktObject} from "lkt-ts-interfaces";

export const createSunEditor = (options: LktObject, language: string, identifier: string) => {

    const t = {
        plugins: plugins,
        //@ts-ignore
        lang: lang[language] ? lang[language] : lang.en
    };

    const opts = {...options, ...t};

    return suneditor.create(identifier, opts);
}

export const createKatexEditor = (options: LktObject, language: string, identifier: string) => {

    const t = {
        katex,
        plugins: plugins,
        //@ts-ignore
        lang: lang[language] ? lang[language] : lang.en
    };

    const opts = {...options, ...t};


    return suneditor.create(identifier, opts);
}