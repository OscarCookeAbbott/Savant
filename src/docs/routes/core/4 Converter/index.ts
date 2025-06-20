import { derive, html, state } from "../../../.."
import { htmlToSavantCode } from "../../../../core/converter"
import { Code, Label } from "../../../../components"
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
        oninput: (e) => (inputHtml.val = e.target.value),
        class: "variant-soft-outline w-full",
    })

    const conversionResult = derive(() =>
        htmlToSavantCode(
            inputHtml.val.replace(/\>\s+/g, ">").replace(/\s+\</g, "<"),
        ),
    )

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
                    conversionResult.val.tags.join(", "),
                ),
        ),

        Label(
            { content: "Components" },

            () =>
                conversionResult.val.components.length
                    ? Code(
                          { language: "typescript" },
                          conversionResult.val.components.join(", "),
                      )
                    : "None",
        ),

        Label(
            { content: "Code" },

            () =>
                Code(
                    { language: "typescript" },
                    conversionResult.val.code.join("\n"),
                ),
        ),
    )
}
