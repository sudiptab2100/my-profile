# my-profile

LaTeX source for **Sudipta Basak's** technical resume.

## Contents

```
latex-resume/
├── resume-twocolumn.tex   # Two-column / sidebar resume source
└── resume-twocolumn.pdf   # Compiled output
```

## Layout

A two-column layout with a full-width header, a narrow sidebar
(Skills / Education / Achievements) beside a wide column
(Experience / Projects).

> **Note:** Two-column layouts can confuse some ATS parsers. Prefer a
> single-column layout for online job-portal submissions.

## Building

[Tectonic](https://tectonic-typesetting.github.io/) is recommended:

```bash
tectonic latex-resume/resume-twocolumn.tex
```

Alternatively, with a full TeX distribution (run twice to resolve refs):

```bash
cd latex-resume
pdflatex resume-twocolumn.tex
pdflatex resume-twocolumn.tex
```

### Requirements

- `tectonic`, **or** a TeX distribution (TeX Live / MiKTeX) providing `pdflatex`
- Packages used include `fontawesome5`, `paracol`, `titlesec`, and `hyperref`

## License

Personal resume content © Sudipta Basak. All rights reserved.
