import { html, state } from "@savant/core"
import { Code, Label } from "@savant/ui"
import DocPage from "../../../components/DocPage"

export default function Page() {
    const inputHtml = state(
        `\
<div>
    <p>
        👋Hello
    </p>

    <ul>
        <li>
            🗺️World
        </li>

        <li>
            <a href="https://vanjs.org/">
                🍦VanJS
            </a>
        </li>
    </ul>
</div>`,
    )

    const input = html.textarea({
        value: inputHtml,
        oninput: (e: Event) =>
            (inputHtml.val = (e.target as HTMLTextAreaElement).value),
        class: "variant-soft-outline w-full h-64",
    })

    // const conversionResult = derive(
    //     () => "Placeholder",
    //     // htmlToSavantCode(
    //     //     inputHtml.val.replace(/\>\s+/g, ">").replace(/\s+\</g, "<"),
    //     // ),
    // )

    return DocPage(
        html.h1("Converter"),

        html.blockquote(html.p("Create Savant code from HTML.")),

        html.h2("Overview"),

        input,

        Label(
            { content: "Tags" },

            () =>
                Code(
                    { language: "typescript" },
                    // conversionResult.val.tags.join(", "),
                ),
        ),

        Label(
            { content: "Components" },

            () =>
                // conversionResult.val.components.length
                //     ? Code(
                //           { language: "typescript" },
                //           conversionResult.val.components.join(", "),
                //       )
            //     : "None",
                "None",
        ),

        Label(
            { content: "Code" },

            () =>
                Code(
                    { language: "typescript" },
                    // conversionResult.val.code.join("\n"),
                ),
        ),
    )
}
