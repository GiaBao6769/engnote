---
title: ""
description: ""
authors: "Gia Bao, Wyfar"
upload-date: "12/10/2026"
update-date: "17/10/2026"
---


#![ id = onboarding-form ]
#![ post-url = /api/onboard ]

position* = ChoiceInput(
  | question = What's your position?
  | choices = Product Manager, Software Engineer, Founder, Other
)

::: [{$ position $}]
{% if position == "Other" %}
positionOther* = TextInput(
  | question = Other
  | labelStyle = classic
)
{% endif %}
:::

--- |> 50%

referralSource* = ChoiceInput(
  | question = How did you hear about us?
  | choices = Twitter, LinkedIn, Friend, Other
)
```

---

### Popular Markdown Form Builders
* **[Forms.md](https://forms.md/)**: A developer-first, open-source Typeform alternative that turns Markdown-like text into multi-step, themeable interactive web forms.
* **[Formdown](https://formdown.dev/)**: Transforms Markdown documents into interactive web forms with `@field` syntax and real-time data binding.
* **[Markform](https://github.com/jlevy/markform)**: A structured text format designed for human readability, machine parsing, and AI agent tool calls.

<FollowUp>
If you'd like, let me know:
* What kind of **form** you are trying to make (e.g., survey, contact form, onboarding)
* Where you plan to **host or render** it

I can help you draft the exact syntax you need.
</FollowUp>