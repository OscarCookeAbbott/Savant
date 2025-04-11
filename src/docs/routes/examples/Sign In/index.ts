import { Label } from "../../../../components"
import { html } from "../../../.."
import SignIn from "../../../SignIn"

export default function Page() {
    return Label(
        {
            content: "Sign In",
        },

        html.div({ class: "card vessel" }, SignIn()),
    )
}
