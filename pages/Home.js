import van from "../lib/vanjs-core.js"

const { div, input, label, span, section, h2 } = van.tags;

const percent = (val) => `${Math.round(val * 100)}%`;

export default () => {
    const options = [
        {
            option1: "comunism",
            option2: "capitalism",
            value: van.state(0),
        },
        {
            option1: "liberal",
            option2: "authoritarian",
            value: van.state(0),
        },
    ];

    const extremismScore = van.derive(() => options.reduce((acc, val) => acc + Math.abs(val.value.val), 0) / options.length);

    const optionElements = options.map((option) =>
        label(
            div({
                style: "display: flex; justify-content: space-between; width: 100%;"
            },
                span(option.option1),
                span(van.derive(() => percent(option.value.val))),
                span(option.option2)
            ),
            input(
                {
                    type: "range",
                    min: "-100",
                    max: "100",
                    value: "0",
                    oninput: (event) => option.value.val = event.target.value / 100,
                },
            ),
        )
    );

    return div(
        { class: "container" }, ...optionElements,
        section({ class: "grid" },
            div(
                h2(van.derive(() => `Vector(${options.reduce((prev, current) => `${prev == "" ? "" : prev + ", "}${current.value.val}`, "")})`))
            ),
            div(
                h2(van.derive(() => `Extremism score: ${percent(extremismScore.val)}`))
            )
        )
    );
}