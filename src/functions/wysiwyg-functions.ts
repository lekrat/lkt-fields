import plugins from "suneditor/src/plugins";
import * as lang from "suneditor/src/lang";
import suneditor from "suneditor";
//@ts-ignore
import katex from "katex";
import {ILktObject, mergeObjects} from "lkt-tools";

export const createSunEditor = (options: ILktObject, language: string, identifier: string) => {
    const opts = mergeObjects(options, {
        plugins: plugins,
        //@ts-ignore
        lang: lang[language] ? lang[language] : lang.en
    })


    return suneditor.create(identifier, opts);
}

export const createKatexEditor = (options: ILktObject, language: string, identifier: string) => {
    const opts = mergeObjects(options, {
        katex,
        plugins: plugins,
        //@ts-ignore
        lang: lang[language] ? lang[language] : lang.en
    })


    return suneditor.create(identifier, opts);
}